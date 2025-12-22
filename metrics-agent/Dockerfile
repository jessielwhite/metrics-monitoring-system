FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Generate proto code
RUN python -m grpc_tools.protoc --python_out=. --grpc_python_out=. -I../proto ../proto/test/test.proto

CMD ["python", "agent.py"]