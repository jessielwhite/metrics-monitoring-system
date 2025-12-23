#!/usr/bin/env python3
import os
import grpc
import time
import psutil
import random
from datetime import datetime
import test_pb2
import test_pb2_grpc

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

def create_proto_metric(name, value, agent_id, unit=""):
    """Create a protobuf Metric message"""
    return test_pb2.Metric(
        name=name,
        value=float(value),
        timestamp=int(datetime.now().timestamp() * 1000),
        agent_id=agent_id,
        unit=unit
    )

def main():
    # gRPC configuration
    GRPC_SERVER = os.getenv("GRPC_SERVER", "server:50051")
    AGENT_ID = os.getenv("AGENT_ID", f"agent-{os.getpid()}")
    
    print(f"Metrics Agent started...")
    print(f"Agent ID: {AGENT_ID}")
    print(f"Sending metrics to gRPC server: {GRPC_SERVER}")

    # Create gRPC channel
    channel = grpc.insecure_channel(GRPC_SERVER)
    stub = test_pb2_grpc.MetricsServiceStub(channel)

    while True:
        try:
            metrics_data = collect_metrics()
            
            # Create protobuf metrics
            proto_metrics = [
                create_proto_metric("cpu_utilization", metrics_data['utilization'], AGENT_ID, "%"),
                create_proto_metric("latency", metrics_data['latency'], AGENT_ID, "ms"),
                create_proto_metric("throughput", metrics_data['throughput'], AGENT_ID, "ops/s"),
                create_proto_metric("memory_used", metrics_data['memory_used'], AGENT_ID, "MB"),
                create_proto_metric("memory_total", metrics_data['memory_total'], AGENT_ID, "MB"),
                create_proto_metric("temperature", metrics_data['temperature'], AGENT_ID, "°C"),
                create_proto_metric("power_draw", metrics_data['power_draw'], AGENT_ID, "W"),
            ]
            
            # Submit via gRPC
            request = test_pb2.SubmitMetricsRequest(metrics=proto_metrics)
            response = stub.SubmitMetrics(request, timeout=5)
            
            if response.success:
                print(f"✓ Submitted {len(proto_metrics)} metrics via gRPC")
                print(f"  CPU: {metrics_data['utilization']}%, Memory: {metrics_data['memory_used']}/{metrics_data['memory_total']} MB")
            else:
                print(f"✗ Error: {response.message}")
                
        except grpc.RpcError as e:
            print(f"✗ gRPC Error: {e.code()} - {e.details()}")
        except Exception as e:
            print(f"✗ Failed to send metrics: {e}")

        time.sleep(10)  # Submit every 10 seconds

if __name__ == '__main__':
    main()
