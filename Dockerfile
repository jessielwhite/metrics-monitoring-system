# Multi-service Docker image for Metrics System
FROM --platform=linux/amd64 rust:1.83 AS rust-builder

WORKDIR /app

# Install protobuf compiler
RUN apt-get update && apt-get install -y protobuf-compiler && rm -rf /var/lib/apt/lists/*

# Copy proto files
COPY proto /app/proto

# Build Rust server
COPY metrics-server /app/metrics-server
WORKDIR /app/metrics-server
RUN cargo build --release

# Node.js build stage
FROM --platform=linux/amd64 node:20-alpine AS node-builder

WORKDIR /app

# Build dashboard
COPY metrics-dashboard/package*.json /app/metrics-dashboard/
WORKDIR /app/metrics-dashboard
RUN npm ci
COPY metrics-dashboard /app/metrics-dashboard
RUN npm run build

# Build API server
WORKDIR /app
COPY api-server/package*.json /app/api-server/
WORKDIR /app/api-server
RUN npm ci
COPY api-server /app/api-server
RUN npm run build

# Python build stage
FROM --platform=linux/amd64 python:3.11-slim AS python-builder

WORKDIR /app

# Install system dependencies
RUN apt-get update && \
    apt-get install -y protobuf-compiler && \
    rm -rf /var/lib/apt/lists/*

# Copy proto files
COPY proto /app/proto

# Install Python dependencies
COPY metrics-agent/requirements.txt /app/metrics-agent/
WORKDIR /app/metrics-agent
RUN pip install --no-cache-dir -r requirements.txt

# Generate protobuf files directly from the test.proto file
RUN python -m grpc_tools.protoc \
    --python_out=. \
    --grpc_python_out=. \
    --proto_path=../proto/test \
    test.proto && \
    sed -i 's/import test_pb2/from . import test_pb2/g' test_pb2_grpc.py || \
    sed -i 's/from test import test_pb2/import test_pb2/g' test_pb2_grpc.py

# Copy agent code
COPY metrics-agent /app/metrics-agent

# Final runtime stage
FROM --platform=linux/amd64 debian:bookworm-slim

# Install runtime dependencies
RUN apt-get update && \
    apt-get install -y \
    ca-certificates \
    curl \
    supervisor && \
    rm -rf /var/lib/apt/lists/*

# Install Node.js 20.x
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

# Install Python 3.11
RUN apt-get update && \
    apt-get install -y python3 python3-pip && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy Rust server binary
COPY --from=rust-builder /app/metrics-server/target/release/server /app/server

# Copy Node.js dashboard
COPY --from=node-builder /app/metrics-dashboard/.next /app/dashboard/.next
COPY --from=node-builder /app/metrics-dashboard/public /app/dashboard/public
COPY --from=node-builder /app/metrics-dashboard/node_modules /app/dashboard/node_modules
COPY --from=node-builder /app/metrics-dashboard/package.json /app/dashboard/

# Copy Node.js API server
COPY --from=node-builder /app/api-server /app/api-server

# Copy Python agent and dependencies
COPY --from=python-builder /app/metrics-agent /app/agent
COPY --from=python-builder /usr/local/lib/python3.11/site-packages /usr/local/lib/python3.11/site-packages

# Ensure Python can find the packages
ENV PYTHONPATH=/usr/local/lib/python3.11/site-packages:$PYTHONPATH

# Create supervisor config
RUN mkdir -p /var/log/supervisor

COPY <<EOF /etc/supervisor/conf.d/supervisord.conf
[supervisord]
nodaemon=true
user=root
logfile=/var/log/supervisor/supervisord.log
pidfile=/var/run/supervisord.pid

[program:rust-server]
command=/app/server
directory=/app
autostart=true
autorestart=true
stdout_logfile=/var/log/supervisor/rust-server.log
stderr_logfile=/var/log/supervisor/rust-server-error.log

[program:api-server]
command=node dist/server.js
directory=/app/api-server
autostart=true
autorestart=true
stdout_logfile=/var/log/supervisor/api-server.log
stderr_logfile=/var/log/supervisor/api-server-error.log
environment=PORT=8081,RUST_SERVICE_URL="http://localhost:8080"

[program:dashboard]
command=npm start
directory=/app/dashboard
autostart=true
autorestart=true
stdout_logfile=/var/log/supervisor/dashboard.log
stderr_logfile=/var/log/supervisor/dashboard-error.log
environment=PORT=3000,NODE_ENV="production"

[program:agent]
command=python3 agent.py
directory=/app/agent
autostart=true
autorestart=true
stdout_logfile=/var/log/supervisor/agent.log
stderr_logfile=/var/log/supervisor/agent-error.log
environment=GRPC_SERVER="localhost:50051"
EOF

EXPOSE 8080 50051 8081 3000

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
