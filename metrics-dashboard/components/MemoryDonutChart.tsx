'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Metric } from '../app/api/types';

interface MemoryDonutChartProps {
    metric: Metric;
}

const COLORS = ['#3B82F6', '#EC4899'];

export function MemoryDonutChart({ metric }: MemoryDonutChartProps) {
    const data = [
        { name: 'Used', value: metric.memory_used },
        { name: 'Free', value: metric.memory_total - metric.memory_used },
    ];

    return (
        <div className='flex flex-col items-center'>
            <ResponsiveContainer width={160} height={160}>
                <PieChart>
                    <Pie
                        data={data}
                        cx='50%'
                        cy='50%'
                        innerRadius={40}
                        outerRadius={60}
                        dataKey='value'
                        label={(entry) => `${entry.name}: ${(entry.value / 1024).toFixed(1)} GB`}
                        labelLine={false}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip
                        formatter={(value: number) => `${(value / 1024).toFixed(1)} GB`}
                        contentStyle={{
                            backgroundColor: '#1F2937',
                            border: '1px solid #374151',
                            borderRadius: '6px',
                            color: '#F3F4F6',
                        }}
                    />
                </PieChart>
            </ResponsiveContainer>
            <p className='text-sm text-gray-400 mt-2'>
                {(metric.memory_used / 1024).toFixed(1)} GB / {(metric.memory_total / 1024).toFixed(0)} GB
            </p>
        </div>
    );
}
