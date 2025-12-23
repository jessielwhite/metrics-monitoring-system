#!/usr/bin/env python3
import os
import requests
import grpc
import time
import psutil
import random
from datetime import datetime

def collect_metrics():
    timestamp = datetime.now().isoformat() + 'Z'

    # CPU usage
    utilization = psutil.cpu_percent(interval=1)
    metric_type = "cpu"
    memory = psutil.virtual_memory()
    memory_used = memory.used // (1024 * 1024)  # Convert to MB
    memory_total = memory.total // (1024 * 1024)  # Convert to MB
    process_id = str(os.getpid())
    process_name = psutil.Process(int(process_id)).name()
    
    # Use default values for sensors that may not be available in Docker
    try:
        temperature = psutil.sensors_temperatures()['coretemp'][0].current
    except (KeyError, AttributeError):
        temperature = random.uniform(40, 70)  # Default temperature range
    
    try:
        power_draw = 100 if psutil.sensors_battery() and psutil.sensors_battery().power_plugged else 50
    except (AttributeError, TypeError):
        power_draw = random.uniform(80, 120)  # Default power range
    
    latency = round(random.uniform(10, 100), 1)
    throughput = round(random.uniform(100, 1000), 1)

    return {
        'timestamp': timestamp,
        'process_id': process_id,
        'process_name': process_name,
        'utilization': round(utilization, 1),
        'type': metric_type,
        'latency': latency,
        'throughput': throughput,
        'memory_used': memory_used,
        'memory_total': memory_total,
        'temperature': int(temperature),
        'power_draw': int(power_draw),
    }

def main():
    # Connect to server for gRPC fallback
    RUST_SERVICE_URL = os.getenv("RUST_SERVICE_URL", "localhost:8080")
    METRICS_ENDPOINT = f"http://{RUST_SERVICE_URL}/metrics/ingest"
    
    print(f"Metrics Agent started...")
    print(f"Sending metrics to: {METRICS_ENDPOINT}")

    while True:
        try:
            metrics_data = collect_metrics()
            response = requests.post(
                METRICS_ENDPOINT, json=metrics_data, timeout=2)
            if response.status_code == 202:
                print(f"Sent: {metrics_data}")
            else:
                print(f"Error: {response.status_code}")
        except requests.exceptions.RequestException as e:
            print(f"Failed to send metrics_data: {e}")

        time.sleep(10)  # Submit every 10 seconds

if __name__ == '__main__':
    main()
