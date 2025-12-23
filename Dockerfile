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
RUN mkdir -p /var/log/supervisor && \
    printf '[supervisord]\n\
nodaemon=true\n\
user=root\n\
logfile=/var/log/supervisor/supervisord.log\n\
pidfile=/var/run/supervisord.pid\n\
\n\
[program:rust-server]\n\
command=/app/server\n\
directory=/app\n\
autostart=true\n\
autorestart=true\n\
stdout_logfile=/var/log/supervisor/rust-server.log\n\
stderr_logfile=/var/log/supervisor/rust-server-error.log\n\
\n\
[program:api-server]\n\
command=node dist/server.js\n\
directory=/app/api-server\n\
autostart=true\n\
autorestart=true\n\
stdout_logfile=/var/log/supervisor/api-server.log\n\
stderr_logfile=/var/log/supervisor/api-server-error.log\n\
environment=PORT=8081,RUST_SERVICE_URL="http://localhost:8080"\n\
\n\
[program:dashboard]\n\
command=sh -c "npm start -- -p %%(ENV_PORT)s"\n\
directory=/app/dashboard\n\
autostart=true\n\
autorestart=true\n\
stdout_logfile=/var/log/supervisor/dashboard.log\n\
stderr_logfile=/var/log/supervisor/dashboard-error.log\n\
environment=NODE_ENV="production",NEXT_PUBLIC_API_URL="/api"\n\
\n\
[program:agent]\n\
command=python3 agent.py\n\
directory=/app/agent\n\
autostart=true\n\
autorestart=true\n\
stdout_logfile=/var/log/supervisor/agent.log\n\
stderr_logfile=/var/log/supervisor/agent-error.log\n\
environment=GRPC_SERVER="localhost:%%(ENV_RUST_GRPC_PORT)s"\n' > /etc/supervisor/conf.d/supervisord.conf

EXPOSE 8080 8081 8082 8083

# Create Cloud Run compatible startup script
RUN printf '#!/bin/sh\n\
BASE_PORT=${PORT:-8080}\n\
export DASHBOARD_PORT=$BASE_PORT\n\
export API_PORT=$((BASE_PORT + 1))\n\
export RUST_HTTP_PORT=$((BASE_PORT + 2))\n\
export RUST_GRPC_PORT=$((BASE_PORT + 3))\n\
echo "Starting services:"\n\
echo "  Dashboard: $DASHBOARD_PORT"\n\
echo "  API Server: $API_PORT"\n\
echo "  Rust HTTP: $RUST_HTTP_PORT"\n\
echo "  Rust gRPC: $RUST_GRPC_PORT"\n\
exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf\n' > /app/start.sh && chmod +x /app/start.sh

CMD ["/app/start.sh"]
