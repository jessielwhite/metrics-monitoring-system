use actix_web::{web, App, HttpServer, HttpResponse, Result};
use mongodb::{Client, Collection, Database};
use mongodb::bson::{doc, Document};
use serde::{Deserialize, Serialize};
use std::env;
use dotenv::dotenv;
use log::{info, error};
use env_logger;
use futures::stream::StreamExt;
use tonic::{transport::Server, Request, Response, Status};

// Include the generated proto code
pub mod test {
    tonic::include_proto!("test");
}

#[derive(Serialize, Deserialize, Debug, Clone)]
struct Metric {
    #[serde(rename = "timestamp")]
    timestamp: String,
    #[serde(rename = "process_id")]
    process_id: String,
    #[serde(rename = "process_name")]
    process_name: String,
    #[serde(rename = "type")]
    r#type: String,
    #[serde(rename = "utilization")]
    utilization: f64,
    #[serde(rename = "latency")]
    latency: f64,
    #[serde(rename = "throughput")]
    throughput: f64,
    #[serde(rename = "memory_used")]
    memory_used: i64,
    #[serde(rename = "memory_total")]
    memory_total: i64,
    #[serde(rename = "temperature")]
    temperature: f64,
    #[serde(rename = "power_draw")]
    power_draw: f64,
}

#[derive(Serialize, Deserialize)]
struct MetricsStats {
    avg_utilization: f64,
    avg_latency: f64,
    avg_throughput: f64,
    avg_temperature: f64,
    avg_power_draw: f64,
    max_utilization: f64,
    max_latency: f64,
    min_latency: f64,
    total_metrics: i64,
}

#[derive(Deserialize)]
struct HistoryQuery {
    start_time: Option<String>,
    end_time: Option<String>,
    limit: Option<i64>,
}

struct AppState {
    metrics_collection: Collection<Metric>,
}

// gRPC service implementation
#[derive(Clone)]
struct MetricsServiceImpl {
    metrics_collection: Collection<Metric>,
}

#[tonic::async_trait]
impl test::metrics_service_server::MetricsService for MetricsServiceImpl {
    async fn submit_metrics(
        &self,
        request: Request<test::SubmitMetricsRequest>,
    ) -> std::result::Result<Response<test::SubmitMetricsResponse>, Status> {
        let metrics = request.into_inner().metrics;
        
        info!("Received {} metrics via gRPC", metrics.len());
        
        // Convert proto metrics to our internal format and insert into MongoDB
        for proto_metric in metrics {
            let metric = Metric {
                timestamp: chrono::Utc::now().to_rfc3339(),
                process_id: proto_metric.agent_id.clone(),
                process_name: proto_metric.name.clone(),
                r#type: "grpc".to_string(),
                utilization: proto_metric.value,
                latency: proto_metric.value,
                throughput: 0.0,
                memory_used: 0,
                memory_total: 0,
                temperature: 0.0,
                power_draw: 0.0,
            };
            
            match self.metrics_collection.insert_one(&metric).await {
                Ok(_) => info!("Inserted gRPC metric: {}", proto_metric.name),
                Err(e) => error!("Failed to insert gRPC metric: {}", e),
            }
        }
        
        let reply = test::SubmitMetricsResponse {
            success: true,
            message: "Metrics submitted successfully".to_string(),
        };
        
        Ok(Response::new(reply))
    }
    
    async fn get_metrics(
        &self,
        request: Request<test::GetMetricsRequest>,
    ) -> std::result::Result<Response<test::GetMetricsResponse>, Status> {
        let req = request.into_inner();
        let mut filter = Document::new();
        
        if !req.agent_id.is_empty() {
            filter.insert("process_id", req.agent_id);
        }
        
        let find_options = mongodb::options::FindOptions::builder()
            .sort(doc! { "timestamp": -1 })
            .limit(100)
            .build();
        
        match self.metrics_collection.find(filter).with_options(find_options).await {
            Ok(mut cursor) => {
                let mut proto_metrics = Vec::new();
                while let Some(result) = cursor.next().await {
                    if let Ok(metric) = result {
                        proto_metrics.push(test::Metric {
                            name: metric.process_name,
                            value: metric.utilization,
                            timestamp: chrono::Utc::now().timestamp_millis(),
                            agent_id: metric.process_id,
                            unit: "%".to_string(),
                        });
                    }
                }
                
                info!("Retrieved {} metrics via gRPC", proto_metrics.len());
                
                let reply = test::GetMetricsResponse {
                    metrics: proto_metrics,
                };
                
                Ok(Response::new(reply))
            }
            Err(e) => {
                error!("Failed to get metrics via gRPC: {}", e);
                Err(Status::internal("Failed to retrieve metrics"))
            }
        }
    }
}

async fn ingest_metrics(
    data: web::Data<AppState>,
    metric: web::Json<Metric>,
) -> Result<HttpResponse> {
    let ctx = tokio::time::timeout(std::time::Duration::from_secs(5), async {
        data.metrics_collection.insert_one(&*metric).await
    });

    match ctx.await {
        Ok(Ok(_)) => {
            info!("Inserted Process ID: {}, Latency: {}, Utilization: {}%", metric.process_id, metric.latency, metric.utilization);
            Ok(HttpResponse::Accepted().json(serde_json::json!({"status": "accepted"})))
        }
        _ => {
            error!("Failed to insert metric");
            Ok(HttpResponse::InternalServerError().json(serde_json::json!({"error": "Database error"})))
        }
    }
}

async fn health_check() -> Result<HttpResponse> {
    Ok(HttpResponse::Ok().json(serde_json::json!({"status": "healthy"})))
}

// Get the most recent metric for each process
async fn get_current_metrics(
    data: web::Data<AppState>,
) -> Result<HttpResponse> {
    let pipeline = vec![
        doc! {
            "$sort": { "timestamp": -1 }
        },
        doc! {
            "$group": {
                "_id": "$process_id",
                "latest": { "$first": "$$ROOT" }
            }
        },
        doc! {
            "$replaceRoot": { "newRoot": "$latest" }
        },
    ];

    match data.metrics_collection.aggregate(pipeline).await {
        Ok(mut cursor) => {
            let mut metrics = Vec::new();
            while let Some(result) = cursor.next().await {
                if let Ok(doc) = result {
                    if let Ok(metric) = mongodb::bson::from_document::<Metric>(doc) {
                        metrics.push(metric);
                    }
                }
            }
            info!("Retrieved {} current metrics", metrics.len());
            Ok(HttpResponse::Ok().json(metrics))
        }
        Err(e) => {
            error!("Failed to get current metrics: {}", e);
            Ok(HttpResponse::InternalServerError().json(serde_json::json!({
                "error": "Failed to retrieve current metrics"
            })))
        }
    }
}

// Get metrics history with optional time range filtering
async fn get_metrics_history(
    data: web::Data<AppState>,
    query: web::Query<HistoryQuery>,
) -> Result<HttpResponse> {
    let mut filter = Document::new();
    
    // Build time range filter if provided
    if query.start_time.is_some() || query.end_time.is_some() {
        let mut time_filter = Document::new();
        if let Some(ref start) = query.start_time {
            time_filter.insert("$gte", start);
        }
        if let Some(ref end) = query.end_time {
            time_filter.insert("$lte", end);
        }
        filter.insert("timestamp", time_filter);
    }

    let find_options = mongodb::options::FindOptions::builder()
        .sort(doc! { "timestamp": -1 })
        .limit(query.limit.unwrap_or(100))
        .build();

    match data.metrics_collection.find(filter).with_options(find_options).await {
        Ok(mut cursor) => {
            let mut metrics = Vec::new();
            while let Some(result) = cursor.next().await {
                if let Ok(metric) = result {
                    metrics.push(metric);
                }
            }
            info!("Retrieved {} historical metrics", metrics.len());
            Ok(HttpResponse::Ok().json(metrics))
        }
        Err(e) => {
            error!("Failed to get metrics history: {}", e);
            Ok(HttpResponse::InternalServerError().json(serde_json::json!({
                "error": "Failed to retrieve metrics history"
            })))
        }
    }
}

// Get aggregated statistics across all metrics
async fn get_metrics_stats(
    data: web::Data<AppState>,
) -> Result<HttpResponse> {
    let pipeline = vec![
        doc! {
            "$group": {
                "_id": null,
                "avg_utilization": { "$avg": "$utilization" },
                "avg_latency": { "$avg": "$latency" },
                "avg_throughput": { "$avg": "$throughput" },
                "avg_temperature": { "$avg": "$temperature" },
                "avg_power_draw": { "$avg": "$power_draw" },
                "max_utilization": { "$max": "$utilization" },
                "max_latency": { "$max": "$latency" },
                "min_latency": { "$min": "$latency" },
                "total_metrics": { "$sum": 1 }
            }
        },
    ];

    match data.metrics_collection.aggregate(pipeline).await {
        Ok(mut cursor) => {
            if let Some(result) = cursor.next().await {
                if let Ok(doc) = result {
                    if let Ok(stats) = mongodb::bson::from_document::<MetricsStats>(doc) {
                        info!("Retrieved metrics statistics");
                        return Ok(HttpResponse::Ok().json(stats));
                    }
                }
            }
            Ok(HttpResponse::Ok().json(serde_json::json!({
                "message": "No metrics available"
            })))
        }
        Err(e) => {
            error!("Failed to get metrics stats: {}", e);
            Ok(HttpResponse::InternalServerError().json(serde_json::json!({
                "error": "Failed to retrieve metrics statistics"
            })))
        }
    }
}

#[tokio::main]
async fn main() -> std::io::Result<()> {
    env_logger::init();
    dotenv().ok(); // Load .env file if present

    let mongo_uri = env::var("MONGODB_URI").expect("MONGODB URI environment variable not set");

    let client = Client::with_uri_str(&mongo_uri).await.expect("Failed to connect to MongoDB");
    let database: Database = client.database(env::var("DATABASE_NAME").expect("DATABASE_NAME environment variable not set").as_str());
    let metrics_collection: Collection<Metric> = database.collection(env::var("COLLECTION_NAME").expect("COLLECTION_NAME environment variable not set").as_str());

    info!("Connected to MongoDB");

    // Clone collection for both servers
    let http_collection = metrics_collection.clone();
    let grpc_collection = metrics_collection.clone();

    // HTTP Server
    let app_state = web::Data::new(AppState {
        metrics_collection: http_collection,
    });

    let http_port = env::var("PORT").unwrap_or_else(|_| "8080".to_string());
    let http_address = format!("0.0.0.0:{}", http_port);

    info!("Starting HTTP server on {}", http_address);

    let http_server = HttpServer::new(move || {
        App::new()
            .app_data(app_state.clone())
            .route("/metrics/ingest", web::post().to(ingest_metrics))
            .route("/metrics/current", web::get().to(get_current_metrics))
            .route("/metrics/history", web::get().to(get_metrics_history))
            .route("/metrics/stats", web::get().to(get_metrics_stats))
            .route("/health", web::get().to(health_check))
    })
    .bind(&http_address)?
    .run();

    // gRPC Server
    let grpc_port = env::var("GRPC_PORT").unwrap_or_else(|_| "50051".to_string());
    let grpc_address = format!("0.0.0.0:{}", grpc_port).parse().unwrap();
    
    let metrics_service = MetricsServiceImpl {
        metrics_collection: grpc_collection,
    };

    info!("Starting gRPC server on {}", grpc_address);

    let grpc_server = Server::builder()
        .add_service(test::metrics_service_server::MetricsServiceServer::new(metrics_service))
        .serve(grpc_address);

    // Run both servers concurrently
    tokio::select! {
        result = http_server => {
            error!("HTTP server stopped: {:?}", result);
        }
        result = grpc_server => {
            error!("gRPC server stopped: {:?}", result);
        }
    }

    Ok(())
}




