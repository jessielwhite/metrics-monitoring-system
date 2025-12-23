FROM rust:1.83 as builder

# Install protobuf compiler
RUN apt-get update && apt-get install -y protobuf-compiler && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy proto files from root
COPY proto ./proto

# Copy metrics-server files
COPY metrics-server/Cargo.toml metrics-server/Cargo.lock* ./
COPY metrics-server/build.rs ./

# Create a dummy main.rs to build dependencies
RUN mkdir -p src && echo "fn main() {}" > src/main.rs

# Build dependencies only
RUN cargo build --release || true

# Now copy the actual source code
COPY metrics-server/src ./src

# Build the actual application
RUN cargo build --release

FROM debian:bookworm-slim

RUN apt-get update && apt-get install -y ca-certificates && rm -rf /var/lib/apt/lists/*

COPY --from=builder /app/target/release/server /usr/local/bin/server

EXPOSE 8080

CMD ["server"]