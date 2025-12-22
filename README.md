# Metrics/Latency Monitoring System

This project implements a distributed metrics monitoring system consisting of four main components:

1. **MongoDB Database** - Stores metrics data persistently
2. **Metrics Agent** - Containerized Python client that measures system metrics and submits them to MongoDB and server
3. **Server** - Rust backend server that receives metrics via gRPC and stores them in MongoDB
4. **Web Application** - Next.js frontend that displays metrics from MongoDB

## Architecture

```
┌─────────────┐      ┌─────────────┐      ┌─────────────┐
│   Metrics   │─────▶│   MongoDB   │◀─────│   Next.js   │
│    Agent    │      │  Database   │      │  Frontend   │
│             │      │             │      │             │
│ Measures    │      │ Stores      │      │ Displays    │
│ e.g. CPU,   │      │ Metrics     │      │ Metrics     │
│ Memory, Disk│      │             │      │             │
└─────────────┘      └─────────────┘      └─────────────┘
                              ▲
                              │
                       ┌─────────────┐
                       │   Server    │
                       │   (Rust)    │
                       │             │
                       │ gRPC API    │
                       │ Fallback    │
                       └─────────────┘
```

## Features

- **Multi-storage**: Primary MongoDB persistence with gRPC fallback
- **Real-time metrics**: CPU, memory, disk, and network latency monitoring
- **Web dashboard**: Interactive metrics visualization
- **Containerized**: Docker Compose deployment
- **Extensible**: Easy to add new metric types

## Quick Start with Docker Compose

1. Ensure Docker and Docker Compose are installed
2. Clone this repository
3. Run the following commands:

```bash
docker-compose up --build
```

4. Open your browser to `http://localhost:3001` to view the metrics dashboard

The system will automatically:
- Start the Rust gRPC server on port 3000
- Launch the containerized Metrics Agent that collects system metrics every 10 seconds
- Serve the Next.js web application on port 3001

## Manual Development Setup

### Prerequisites

- Rust (for server)
- Node.js 18+ (for web app)
- Python 3.8+ (for agent)
- Docker (for containerization)

### Running Components Individually

**Rust Backend Server:**

```bash
cd server
cargo run
```

**Next.js Web Application:**

```bash
cd www
npm install
npm run dev
```

**Python Metrics Agent:**

```bash
cd agent
pip install -r requirements.txt
python agent.py
```

## Containerization Details

- **Metrics Agent**: Containerized using Docker with Python base image. Collects CPU usage, memory usage, disk usage, and mock network latency metrics.
- **Server**: Multi-stage Docker build with Rust for compilation and Debian slim for runtime.
- **Web Application**: Node.js Alpine image for the Next.js app.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```bash
# MongoDB Configuration
MONGODB_URI=mongodb://admin:password@localhost:27017/metrics_db?authSource=admin
DATABASE_NAME=metrics_db
COLLECTION_NAME=metrics

# Server Configuration
RUST_SERVICE_URL=127.0.0.1:3000

# Next.js Configuration
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## API Endpoints

- `GET /api/metrics` - Fetches metrics from MongoDB with optional filtering
  - Query parameters: `range` (1h, 24h, 7d), `agent_id`, `type`
- `GET /api/test-rpc` - Legacy gRPC endpoint (fallback)

## Technologies Used

- **Database**: MongoDB for persistent metrics storage
- **Backend**: Rust with Tonic (gRPC framework) and MongoDB driver
- **Frontend**: Next.js with TypeScript and MongoDB driver
- **Agent**: Python with MongoDB driver and psutil
- **Protocol**: gRPC with Protocol Buffers (primary) and REST API
- **Containerization**: Docker and Docker Compose

## Features

- **Persistent storage**: MongoDB for reliable metrics storage
- **Dual communication**: Direct MongoDB access with gRPC fallback
- **Real-time metrics**: CPU, memory, disk, network, latency, and throughput monitoring
- **Containerized deployment**: Full-stack Docker Compose setup
- **Auto-refreshing dashboard**: Live metrics visualization
- **Extensible schema**: Structured metrics with additional fields
- Error handling and logging

## Requirements Compliance

- ✅ gRPC used for all inter-service communication
- ✅ Metrics Agent fully containerized
- ✅ Server stores metrics in-memory
- ✅ Web app displays metrics with visualization
- ✅ Clear setup instructions for GitHub Codespaces compatibility
- ✅ Published as GitHub repository

## Bonus Features

- Good error handling in all components
- Logging for requests and responses
- Horizontal scaling support via Docker Compose
- Clean architecture with separation of concerns
