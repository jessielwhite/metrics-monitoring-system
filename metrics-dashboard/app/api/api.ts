import { Metric, MetricsHistoryQuery, MetricsStats, MetricsHistoryResponse, MetricsStatsResponse } from './types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8081';

export async function getCurrentMetric(): Promise<Metric> {
    const response = await fetch(`${API_URL}/api/metrics/current`);

    if (!response.ok) {
        throw new Error('Failed to fetch current metric');
    }

    return response.json();
}

export async function getMetricsHistory(query: { range?: string }): Promise<MetricsHistoryResponse> {
    const range = query.range || '1h';
    const url = `${API_URL}/api/metrics/history?range=${range}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to fetch metrics history');
    }

    return response.json();
}

export async function getMetricsStats(MetricsStats: MetricsStats): Promise<MetricsStatsResponse> {
    const response = await fetch(`${API_URL}/api/metrics/stats?${MetricsStats}`);

    if (!response.ok) {
        throw new Error('Failed to fetch metrics stats');
    }

    return response.json();
}
