export interface Metric {
  _id?: string;
  timestamp: string;
  process_id: string;
  process_name: string;
  type: string;
  utilization: number;
  latency: number;
  throughput: number;
  memory_used: number;
  memory_total: number;
  temperature: number;
  power_draw: number;
}

export interface WorkloadStatus {
  status: 'never_started' | 'running' | 'stopped';
  pid?: number;
  started_at?: string;
}