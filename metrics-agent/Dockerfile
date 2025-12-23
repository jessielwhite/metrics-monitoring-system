FROM python:3.11-slim

WORKDIR /app

# Copy requirements first for caching
COPY metrics-agent/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy proto files
COPY proto ./proto

# Copy agent files
COPY metrics-agent/*.py ./

# Generate proto code
RUN python -m grpc_tools.protoc --python_out=. --grpc_python_out=. -I./proto ./proto/test/test.proto

# Run the agent
CMD ["python", "agent.py"]