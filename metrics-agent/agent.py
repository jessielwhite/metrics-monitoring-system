#!/usr/bin/env python3
import os
import requests
import grpc
import time
import psutil
import random
from datetime import datetime

def collect_metrics():
    timestamp = datetime.now.isoformat() + 'Z'


    # CPU usage
    utilization = psutil.cpu_percent(interval=1)
    type = psutil.sdiskpart('/')
    memory = psutil.virtual_memory()
    memory_used = memory.used
    memory_total = memory.total
    process_id = os.getpid()
    process_name = psutil.Process(process_id).name()
    temperature = psutil.sensors_temperatures()['coretemp'][0].current
    power_draw = psutil.sensors_battery().power_plugged
    disk = psutil.disk_usage('/')
    latency = random.uniform(10, 100)
    throughput = random.uniform(100, 1000)


    return {
        'timestamp': timestamp,
        'process_id': process_id,
        'process_name': process_name,
        'utilization': utilization,
        'type': type,
        'latency': latency,
        'throughput': throughput,
        'disk': disk,
        'memory_used': memory_used,
        'memory_total': memory_total,
        'temperature': temperature,
        'power_draw': power_draw,
    }

def main():
    # Connect to server for gRPC fallback
    RUST_SERVICE_URL = os.getenv(f"{RUST_SERVICE_URL}/metrics/ingest") 
    channel = grpc.insecure_channel(RUST_SERVICE_URL)

    print(f"Metrics Agent started...")

    while True:
        try:
            metrics_data = collect_metrics()
            response = requests.post(
                RUST_SERVICE_URL, channel=channel, json=metrics_data, timeout=2)
            if response.status_code == 202:
                print(f"Sent: {metrics_data}C")
            else:
                print(f"Error: {response.status_code}")
        except requests.exceptions.RequestException as e:
            print(f"Failed to send metrics_data: {e}")

        time.sleep(10)  # Submit every 10 seconds

if __name__ == '__main__':
    main()