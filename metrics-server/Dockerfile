FROM rust:1.70 as builder

WORKDIR /app

COPY . .

RUN rm /app/Cargo.lock

RUN cargo build --release

FROM debian:bullseye-slim

RUN apt-get update && apt-get install -y ca-certificates && rm -rf /var/lib/apt/lists/*

COPY --from=builder /app/target/release/server /usr/local/bin/server

EXPOSE 8080

CMD ["server"]