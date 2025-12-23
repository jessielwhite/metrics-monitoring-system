# Metrics/Latency Monitoring System

A distributed metrics monitoring system with gRPC communication, MongoDB persistence, and real-time visualization.

## System Components

1. **Metrics Agent** (Python) - Containerized client that collects system metrics and submits via gRPC
2. **Rust Server** - Backend with concurrent HTTP/gRPC servers, stores metrics in MongoDB
3. **API Server** (Node.js) - REST API layer for dashboard communication
4. **Dashboard** (Next.js) - Real-time metrics visualization with interactive charts
5. **MongoDB Atlas** - Cloud database for persistent metrics storage

## Architecture

```
┌─────────────────┐      gRPC (port 50051)      ┌─────────────────┐
│  Metrics Agent  │─────────────────────────────▶│  Rust Server    │
│  (Python)       │                               │  (gRPC+HTTP)    │
│                 │                               │  Port 8080/51   │
│  • CPU Usage    │                               └────────┬────────┘
│  • Memory       │                                        │
│  • Temperature  │                                        │ MongoDB
│  • Latency      │                                        ▼
│  • Throughput   │                               ┌─────────────────┐
└─────────────────┘                               │  MongoDB Atlas  │
                                                   │                 │
┌─────────────────┐                               │  • Persistent   │
│  Next.js        │      HTTP (port 8081)         │  • Scalable     │
│  Dashboard      │◀──────────────────────────────│  • Cloud-hosted │
│                 │      Node.js API Server       └─────────────────┘
│  • Real-time    │
│  • Charts       │
│  • Responsive   │
└─────────────────┘
```

### Communication Flow

1. **Agent → Server**: Submits 7 metrics every 10s via gRPC (port 50051)
2. **Server → MongoDB**: Stores metrics with timestamps in Atlas cluster
3. **Dashboard → API**: Fetches metrics via HTTP REST API (port 8081)
4. **API → MongoDB**: Queries historical data with filtering
5. **Dashboard ← API**: Receives metrics for visualization

### gRPC Integration

The system uses **Protocol Buffers** for efficient, type-safe communication:

**Protocol Schema** (`proto/test/test.proto`):

```protobuf
service MetricsService {
  rpc SubmitMetrics(SubmitMetricsRequest) returns (SubmitMetricsResponse);
  rpc GetMetrics(GetMetricsRequest) returns (GetMetricsResponse);
}

message Metric {
  string name = 1;          // Metric name (e.g., "cpu_utilization")
  double value = 2;         // Metric value
  int64 timestamp = 3;      // Unix timestamp in milliseconds
  string agent_id = 4;      // Agent identifier
  string unit = 5;          // Unit (e.g., "%", "ms", "MB")
}
```

**Rust Server** (Tonic):

- Runs HTTP (8080) and gRPC (50051) concurrently using `tokio::select!`
- Implements `MetricsService` with MongoDB integration
- Auto-generates server code from proto files via `build.rs`

**Python Agent** (grpcio):

- Generates stubs via `grpc_tools.protoc` during Docker build
- Submits 7 metrics per cycle: CPU, latency, memory, temperature, throughput, power, type
- Uses insecure channel for local development

**Dashboard** (Node.js):

- gRPC API route at `pages/api/grpc-metrics.ts`
- Dynamic proto loading with `@grpc/proto-loader`
- Optional gRPC querying (primarily uses MongoDB via REST)

## Features

- **gRPC Communication**: Binary protocol for efficient inter-service communication
- **MongoDB Persistence**: Cloud Atlas storage with automatic failover
- **Real-time Dashboard**: Auto-refreshing metrics with Recharts visualization
- **Containerized**: Full Docker Compose orchestration
- **Type Safety**: Protocol Buffers schema enforcement
- **Multi-language**: Rust, Python, TypeScript/Node.js integration
- **Scalable**: Horizontal scaling ready with Docker Compose

## Quick Start with Docker Compose

1. Ensure Docker and Docker Compose are installed
2. Clone this repository
3. Configure environment:

```bash
cp config.env.example config.env
# Edit config.env with your MongoDB Atlas credentials
```

4. Build and run:

```bash
docker-compose up --build
```

5. Access the dashboard at `http://localhost:3000`

The system will automatically:

- Start Rust gRPC server (8080/50051)
- Launch metrics agent collecting data every 10s
- Start Node.js API server (8081)
- Serve Next.js dashboard (3000)

## Manual Development Setup

### Prerequisites

- Rust 1.83+ (for server)
- Node.js 20+ (for dashboard/API)
- Python 3.11+ (for agent)
- Docker (for containerization)
- MongoDB Atlas account (or local MongoDB)

### Running Components Individually

**Rust Backend Server:**

```bash
cd metrics-server
cargo build --release
cargo run
```

**Next.js Dashboard:**

```bash
cd metrics-dashboard
npm install
npm run dev
```

**Node.js API Server:**

```bash
cd api-server
npm install
npm start
```

**Python Metrics Agent:**

```bash
cd metrics-agent
pip install -r requirements.txt
python agent.py
```

## Environment Variables

**config.env:**

```bash
# MongoDB Configuration
MONGODB_URI=MONGODB_URI
DATABASE_NAME=DATABASE_NAME
COLLECTION_NAME=COLLECTION_NAME

# Agent Configuration
AGENT_ID=agent-docker-1

# Server Configuration
RUST_SERVICE_URL=RUST_SERVICE_URL

# gRPC Configuration
GRPC_PORT=50051
GRPC_SERVER=server:50051

# Next.js Configuration
NEXT_PUBLIC_API_URL=NEXT_PUBLIC_API_URL
VERCEL_URL=https://metrics-scanner-jessielwhites-projects.vercel.app

```

## API Endpoints

### REST API (Port 8081)

- `GET /api/metrics` - Fetch metrics from MongoDB
  - Query params: `range` (1h, 24h, 7d), `agent_id`, `type`
- `GET /health` - Health check

### gRPC API (Port 50051)

- `SubmitMetrics(SubmitMetricsRequest)` - Submit metrics batch
- `GetMetrics(GetMetricsRequest)` - Query metrics with filters

### HTTP Server (Port 8080)

- `POST /metrics/ingest` - HTTP metric submission
- `GET /metrics/current` - Get current metrics
- `GET /metrics/history` - Get historical metrics
- `GET /health` - Health check

## Protocol Buffer Code Generation

### Rust (Automatic via build.rs)

```rust
fn main() -> Result<(), Box<dyn std::error::Error>> {
    tonic_build::configure()
        .build_server(true)
        .build_client(false)
        .compile(&["../proto/test/test.proto"], &["../proto"])?;
    Ok(())
}
```

### Python (Docker Build)

```dockerfile
RUN python -m grpc_tools.protoc \
    --python_out=. \
    --grpc_python_out=. \
    -I./proto \
    ./proto/test/test.proto
```

### TypeScript (Runtime Loading)

```typescript
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
```

## Testing

### Check Agent Metrics Submission

```bash
docker-compose logs agent
```

Expected output:

```
✓ Submitted 7 metrics via gRPC
  CPU: 25.3%, Memory: 512/2048 MB
```

### Check Server Logs

```bash
docker-compose logs server
```

Expected output:

```
Starting gRPC server on 0.0.0.0:50051
Received 7 metrics via gRPC
Inserted gRPC metric: cpu_utilization
```

### Test Dashboard API

```bash
curl http://localhost:8081/api/metrics?range=1h
```

### Test gRPC with grpcurl

```bash
# Install grpcurl
brew install grpcurl

# List services
grpcurl -plaintext localhost:50051 list

# Call GetMetrics
grpcurl -plaintext \
  -d '{"agent_id": "agent-docker-1"}' \
  localhost:50051 \
  test.MetricsService/GetMetrics
```

## Technologies Used

- **Backend**: Rust 1.83 with Actix-web 4.9 and Tonic 0.12
- **gRPC**: Protocol Buffers v3, Tonic (Rust), grpcio (Python), @grpc/grpc-js (Node)
- **Database**: MongoDB Atlas with official drivers
- **Frontend**: Next.js 16, React 19, TypeScript, Recharts 3.4
- **API**: Node.js 20, Express-like routing
- **Agent**: Python 3.11, psutil, grpcio
- **Containerization**: Docker with multi-stage builds, Docker Compose

## Metrics Collected

| Metric          | Description              | Unit  | Collection Rate |
| --------------- | ------------------------ | ----- | --------------- |
| CPU Utilization | System CPU usage         | %     | Every 10s       |
| Memory Used     | RAM consumption          | MB    | Every 10s       |
| Memory Total    | Total system RAM         | MB    | Every 10s       |
| Temperature     | CPU/System temperature   | °C   | Every 10s       |
| Latency         | Network latency          | ms    | Every 10s       |
| Throughput      | Data throughput          | ops/s | Every 10s       |
| Power Draw      | System power consumption | W     | Every 10s       |

### Monitoring & Logging

All gRPC calls are logged:

- **Agent**: Success/failure logs for each submission
- **Server**: Request logging with metric counts
- **Dashboard**: API call logs and error tracking

View all logs:

```bash
docker-compose logs -f
```

### HTTP Fallback

The system maintains HTTP endpoints for backward compatibility and gradual migration, allowing both REST and gRPC clients.

### Vercel Deployment (Dashboard Only)

The dashboard is deployed at: `https://metrics-scanner-jessielwhites-projects.vercel.app`

For full system deployment, use Docker Compose on a cloud VM or Kubernetes.
