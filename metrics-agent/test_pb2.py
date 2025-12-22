# Simplified test_pb2.py for the metrics system

class Metric:
    def __init__(self, name='', value=0.0, timestamp=0, agent_id='', unit=''):
        self.name = name
        self.value = value
        self.timestamp = timestamp
        self.agent_id = agent_id
        self.unit = unit

class SubmitMetricsRequest:
    def __init__(self, metrics=None):
        self.metrics = metrics or []

class SubmitMetricsResponse:
    def __init__(self, success=False, message=''):
        self.success = success
        self.message = message

class GetMetricsRequest:
    def __init__(self, agent_id='', metric_name='', start_time=0, end_time=0):
        self.agent_id = agent_id
        self.metric_name = metric_name
        self.start_time = start_time
        self.end_time = end_time

class GetMetricsResponse:
    def __init__(self, metrics=None):
        self.metrics = metrics or []