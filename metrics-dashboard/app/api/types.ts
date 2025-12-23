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

export interface MetricsHistoryQuery {
  start_time?: string;
  end_time?: string;
  limit?: number;
}
export interface MetricsStats {
  avg_utilization: number;
  avg_latency: number;
  avg_throughput: number;
  avg_temperature: number;
  avg_power_draw: number;
  max_utilization: number;
  max_latency: number;
  min_latency: number;
  total_metrics: number;
}

export type CurrentMetricsResponse = ReadableStream<Metric>;
export type MetricsHistoryResponse = Metric[];
export type MetricsStatsResponse = MetricsStats;