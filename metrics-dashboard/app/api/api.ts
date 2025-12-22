import { Metric, WorkloadStatus } from './types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://192.168.1.67:3000';

export async function getCurrentMetric(): Promise<Metric> {
    const response = await fetch(`${API_URL}/api/metrics/current`);

    if (!response.ok) {
        throw new Error('Failed to fetch current metric');
    }

    const metrics = await response.json();
    if (metrics.length === 0) {
        throw new Error('No metrics found');
    }

    return metrics[0];
}

export async function getMetricsHistory(timeRange: '1h' | '24h' | '7d', agentId?: string, type?: string): Promise<Metric[]> {
    let url = `${API_URL}/api/metrics/history?range=${timeRange}`;
    if (agentId) url += `&agent_id=${agentId}`;
    if (type) url += `&type=${type}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to fetch metrics history');
    }

    return response.json();
}

export async function getWorkloadStatus(): Promise<WorkloadStatus> {
    let response;

        response = await fetch(`${API_URL}/api/workload/status`);

        if (!response.ok) {
            throw new Error('Failed to fetch workload status');
        }

        return response.json();
    }

export async function startWorkload(): Promise<WorkloadStatus> {
    const response = await fetch(`${API_URL}/api/workload/start`, {
        method: 'POST',
    });

    if (!response.ok) {
        throw new Error('Failed to start workload');
    }

    return response.json();
}

export async function stopWorkload(): Promise<WorkloadStatus> {
    const response = await fetch(`${API_URL}/api/workload/stop`, {
        method: 'POST',
    });

    if (!response.ok) {
        throw new Error('Failed to stop workload');
    }

    return response.json();
}