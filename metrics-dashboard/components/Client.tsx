'use client';
import { useEffect, useState } from 'react';
import { Metric, WorkloadStatus } from '../app/api/types';
import { getCurrentMetric, getWorkloadStatus } from '../app/api/api';
import Metrics from './Metrics';

interface Props {
    initialMetric: Metric;
    initialWorkloadStatus: WorkloadStatus;
}

export default function Client({ initialMetric, initialWorkloadStatus }: Props) {
    const [metric, setMetric] = useState<Metric>(initialMetric);
    const [workloadStatus, setWorkloadStatus] = useState<WorkloadStatus>(initialWorkloadStatus);

    useEffect(() => {
        const interval = setInterval(async () => {
            try {
                const [metricData, workloadData] = await Promise.all([
                    getCurrentMetric(),
                    getWorkloadStatus(),
                ]);
                setMetric(metricData);
                setWorkloadStatus(workloadData);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return <Metrics initialWorkloadStatus={workloadStatus} metric={metric} />;
}
