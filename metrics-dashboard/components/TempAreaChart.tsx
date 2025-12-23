'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Metric } from '../app/api/types';

interface TempAreaChartProps {
    data: Metric[];
    timeRange: '1h' | '24h' | '7d';
}

export function TempAreaChart({ data, timeRange }: TempAreaChartProps) {
    const formatXAxis = (timestamp: string) => {
        const date = new Date(timestamp);

        if (timeRange === '1h') {
            return date.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
            });
        } else if (timeRange === '24h') {
            return date.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
            });
        } else {
            return date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
            });
        }
    };

    return (
        <div className='mb-8 h-80'>
            <ResponsiveContainer width='100%' height='100%'>
                <AreaChart data={data}>
                    <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
                    <XAxis
                        dataKey='timestamp'
                        tickFormatter={formatXAxis}
                        stroke='#9CA3AF'
                        style={{ fontSize: '12px' }}
                    />
                    <YAxis
                        stroke='#9CA3AF'
                        width={40}
                        style={{ fontSize: '12px' }}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#1F2937',
                            border: '1px solid #374151',
                            borderRadius: '6px',
                            color: '#F3F4F6',
                        }}
                        labelFormatter={(label) => formatXAxis(label as string)}
                    />
                    <Area
                        type='monotone'
                        dataKey='temperature'
                        stroke='#EC4899'
                        fill='#EC4899'
                        fillOpacity={0.3}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
