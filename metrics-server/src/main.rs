use actix_web::{web, App, HttpServer, HttpResponse, Result};
use mongodb::{Client, Collection, Database};
use serde::{Deserialize, Serialize};
use std::env;
use dotenv::dotenv;
use log::{info, error};
use env_logger;

#[derive(Serialize, Deserialize, Debug)]
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

struct AppState {
    metrics_collection: Collection<Metric>,
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

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    env_logger::init();
    dotenv().ok(); // Load .env file if present

    let mongo_uri = env::var("MONGODB_URI").expect("MONGODB URI environment variable not set");

    let client = Client::with_uri_str(&mongo_uri).await.expect("Failed to connect to MongoDB");
    let database: Database = client.database(env::var("DATABASE_NAME").expect("DATABASE_NAME environment variable not set").as_str());
    let metrics_collection: Collection<Metric> = database.collection(env::var("COLLECTION_NAME").expect("COLLECTION_NAME environment variable not set").as_str());


    info!("Connected to MongoDB");

    let app_state = web::Data::new(AppState {
        metrics_collection,
    });

    let port = env::var("PORT").unwrap_or_else(|_| "8080".to_string());
    let address = format!("0.0.0.0:{}", port);

    info!("Rust metrics service listening on port {}", port);

    HttpServer::new(move || {
        App::new()
            .app_data(app_state.clone())
            .route("/metrics/ingest", web::post().to(ingest_metrics))
            .route("/health", web::get().to(health_check))
    })
    .bind(&address)?
    .run()
    .await
}




