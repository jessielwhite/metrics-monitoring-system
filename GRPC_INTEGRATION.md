# gRPC Integration Documentation

This document describes the Protocol Buffers / gRPC implementation in the Metrics Monitoring System.

## Architecture

The system uses gRPC for efficient, type-safe communication between components:

```
┌─────────────────┐      gRPC (port 50051)      ┌─────────────────┐
│  Metrics Agent  │─────────────────────────────▶│  Rust Server    │
│  (Python)       │                               │  (gRPC+HTTP)    │
└─────────────────┘                               └─────────────────┘
                                                           │
                                                           │ MongoDB
                                                           ▼
┌─────────────────┐      gRPC (port 50051)      ┌─────────────────┐
│  Next.js        │◀─────────────────────────────│  Database       │
│  Dashboard      │      HTTP (port 8081)        │                 │
└─────────────────┘◀─────────────────────────────┘               
                         Node.js API Server
```

## Protocol Buffer Schema

Location: [`proto/test/test.proto`](proto/test/test.proto)

### Key Messages:

```protobuf
message Metric {
  string name = 1;          // Metric name (e.g., "cpu_utilization")
  double value = 2;         // Metric value
  int64 timestamp = 3;      // Unix timestamp in milliseconds
  string agent_id = 4;      // Agent identifier
  string unit = 5;          // Unit (e.g., "%", "ms", "MB")
}

message SubmitMetricsRequest {
  repeated Metric metrics = 1;
}

message SubmitMetricsResponse {
  bool success = 1;
  string message = 2;
}

message GetMetricsRequest {
  string agent_id = 1;      // Optional filter
  string metric_name = 2;   // Optional filter
  int64 start_time = 3;     // Optional time range
  int64 end_time = 4;
}

message GetMetricsResponse {
  repeated Metric metrics = 1;
}
```

### Service Definition:

```protobuf
service MetricsService {
  rpc SubmitMetrics(SubmitMetricsRequest) returns (SubmitMetricsResponse);
  rpc GetMetrics(GetMetricsRequest) returns (GetMetricsResponse);
}
```

## Components

### 1. Rust Server (metrics-server)

**File**: `metrics-server/src/main.rs`

**Features**:

- Runs **both** HTTP (port 8080) and gRPC (port 50051) servers concurrently
- Implements `MetricsService` gRPC service
- Stores metrics in MongoDB
- Uses `tonic` for gRPC

**Key Code**:

```rust
#[tonic::async_trait]
impl test::metrics_service_server::MetricsService for MetricsServiceImpl {
    async fn submit_metrics(...) -> Result<Response<SubmitMetricsResponse>, Status> {
        // Insert metrics into MongoDB
    }
  
    async fn get_metrics(...) -> Result<Response<GetMetricsResponse>, Status> {
        // Query metrics from MongoDB
    }
}
```

**Ports**:

- HTTP: 8080
- gRPC: 50051

### 2. Python Agent (metrics-agent)

**File**: `metrics-agent/agent_grpc.py`

**Features**:

- Collects system metrics (CPU, memory, temperature, etc.)
- Submits metrics via gRPC every 10 seconds
- Uses generated Python stubs (`test_pb2.py`, `test_pb2_grpc.py`)

**Key Code**:

```python
# Create gRPC channel
channel = grpc.insecure_channel(GRPC_SERVER)
stub = test_pb2_grpc.MetricsServiceStub(channel)

# Create protobuf metrics
proto_metrics = [
    create_proto_metric("cpu_utilization", utilization, AGENT_ID, "%"),
    create_proto_metric("latency", latency, AGENT_ID, "ms"),
    ...
]

# Submit via gRPC
request = test_pb2.SubmitMetricsRequest(metrics=proto_metrics)
response = stub.SubmitMetrics(request, timeout=5)
```

**Configuration**:

- `GRPC_SERVER`: gRPC server address (default: `server:50051`)
- `AGENT_ID`: Unique agent identifier

### 3. Next.js Dashboard (metrics-dashboard)

**File**: `metrics-dashboard/pages/api/grpc-metrics.ts`

**Features**:

- API route that connects to Rust gRPC server
- Fetches metrics via gRPC
- Uses `@grpc/grpc-js` and `@grpc/proto-loader`

**Key Code**:

```typescript
const client = new test.MetricsService(
  GRPC_SERVER,
  grpc.credentials.createInsecure()
) as MetricsClient;

const response = await getMetrics({
  agent_id: agent_id,
  metric_name: metric_name,
  start_time: start_time,
  end_time: end_time,
});
```

**Endpoint**: `GET /api/grpc-metrics?agent_id=...&metric_name=...`

## Code Generation

### Rust (Automatic)

Proto files are compiled automatically during build via `build.rs`:

```rust
fn main() -> Result<(), Box<dyn std::error::Error>> {
    tonic_build::configure()
        .build_server(true)
        .build_client(false)
        .compile(&[proto_path], &[proto_include])?;
    Ok(())
}
```

### Python (Docker Build)

Generated during Docker image build:

```dockerfile
RUN python -m grpc_tools.protoc \
    --python_out=. \
    --grpc_python_out=. \
    -I./proto \
    ./proto/test/test.proto
```

### TypeScript (Runtime)

Loaded dynamically at runtime using `@grpc/proto-loader`:

```typescript
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
```

## Running the System

### With Docker Compose

```bash
docker-compose up --build
```

This starts:

- Rust server with HTTP (8080) and gRPC (50051)
- Python agent submitting metrics via gRPC
- Node.js API server (8081)
- Next.js dashboard (3000)

### Environment Variables

**config.env**:

```bash
# MongoDB
MONGODB_URI=mongodb+srv://...
DATABASE_NAME=metrics-collection
COLLECTION_NAME=JLW

# gRPC
GRPC_PORT=50051
GRPC_SERVER=server:50051

# Agent
AGENT_ID=agent-docker-1
```

## Testing gRPC

### 1. Check Agent Logs

```bash
docker-compose logs agent
```

Expected output:

```
✓ Submitted 7 metrics via gRPC
  CPU: 25.3%, Memory: 512/2048 MB
```

### 2. Check Server Logs

```bash
docker-compose logs server
```

Expected output:

```
Starting gRPC server on 0.0.0.0:50051
Received 7 metrics via gRPC
Inserted gRPC metric: cpu_utilization
```

### 3. Test Dashboard API

```bash
curl http://localhost:3000/api/grpc-metrics
```

### 4. Use grpcurl (Optional)

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

## Benefits of gRPC

1. **Performance**: Binary protocol, smaller payloads than JSON
2. **Type Safety**: Strong typing with protobuf schema
3. **Code Generation**: Auto-generated client/server code
4. **Streaming**: Support for bidirectional streaming (future enhancement)
5. **Language Agnostic**: Works across Rust, Python, TypeScript

## HTTP Fallback

The system also maintains HTTP endpoints for compatibility:

- `POST /metrics/ingest` - HTTP metric submission
- `GET /metrics/current` - Get current metrics
- `GET /metrics/history` - Get historical metrics
- `GET /health` - Health check

This allows gradual migration and testing.

## Monitoring

All gRPC calls are logged:

- **Agent**: Logs each submission with success/failure
- **Server**: Logs incoming requests and database operations
- **Dashboard**: Logs API calls and errors

Check logs with:

```bash
docker-compose logs -f
```

## Next Steps

Potential enhancements:

1. **Streaming**: Implement server-side streaming for real-time metrics
2. **Authentication**: Add TLS and authentication
3. **Load Balancing**: Use gRPC load balancing for multiple agents
4. **Compression**: Enable gzip compression
5. **Metrics**: Add Prometheus metrics for gRPC calls
