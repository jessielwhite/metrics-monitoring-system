'use client';
import { useEffect, useState } from 'react';
import { Metric } from '../../../../app/api/types';
import { getCurrentMetric, getMetricsHistory } from '../../../../app/api/api';
import { MemoryDonutChart } from '../../../MemoryDonutChart';
import { TempAreaChart } from '../../../TempAreaChart';
import { UtilLineChart } from '../../../UtilLineChart';
import { Badge } from '../../../ui/badge';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '../../../../lib/utils';
import React from 'react';

const Tabs = TabsPrimitive.Root;
const TabsList = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.List
        ref={ref}
        className={cn(
            'inline-flex h-10 items-center justify-center rounded-md bg-gray-800 p-1 text-gray-400',
            className
        )}
        {...props}
    />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.Trigger
        ref={ref}
        className={cn(
            'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-gray-900 data-[state=active]:text-white data-[state=active]:shadow-sm',
            className
        )}
        {...props}
    />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.Content
        ref={ref}
        className={cn('mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2', className)}
        {...props}
    />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

const TabsContents = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export { Tabs, TabsList, TabsTrigger, TabsContent, TabsContents };

interface Props {
    initialMetric: Metric | null;
}

export default function Client({ initialMetric }: Props) {
    const [metric, setMetric] = useState<Metric | null>(initialMetric);
    const [health] = useState<string>('OK');
    const [timeRange, setTimeRange] = useState<'1h' | '24h' | '7d'>('1h');
    const [historyData, setHistoryData] = useState<Metric[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const metricData = await getCurrentMetric();
                setMetric(metricData);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const fetchHistory = async () => {
            setLoading(true);
            try {
                const history = await getMetricsHistory({ range: timeRange });
                setHistoryData(history);
            } catch (error) {
                console.error('Failed to fetch history:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchHistory();
    }, [timeRange]);

    if (!metric) {
        return (
            <div className='flex items-center justify-center h-96'>
                <p className='text-gray-400'>Loading metrics...</p>
            </div>
        );
    }

    return (
        <div className='mt-8 space-y-6'>
            {/* Status Section */}
            <div className='flex items-center gap-4'>
                <Badge variant={health.includes('OK') ? 'success' : 'error'}>
                    {health.includes('OK') ? '● Online' : '● Offline'}
                </Badge>
                <span className='text-sm text-gray-400'>
                    Last updated: {new Date(metric.timestamp).toLocaleString()}
                </span>
            </div>

            {/* Current Metrics Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className='bg-gray-900 border border-gray-800 rounded-lg p-4'>
                    <p className='text-sm text-gray-400 mb-1'>Process</p>
                    <p className='text-2xl font-bold'>{metric.process_name}</p>
                    <p className='text-xs text-gray-500 mt-1'>PID: {metric.process_id}</p>
                </div>

                <div className='bg-gray-900 border border-gray-800 rounded-lg p-4'>
                    <p className='text-sm text-gray-400 mb-1'>Utilization</p>
                    <p className='text-2xl font-bold'>{metric.utilization.toFixed(1)}%</p>
                    <p className='text-xs text-gray-500 mt-1'>Type: {metric.type}</p>
                </div>

                <div className='bg-gray-900 border border-gray-800 rounded-lg p-4'>
                    <p className='text-sm text-gray-400 mb-1'>Temperature</p>
                    <p className='text-2xl font-bold'>{metric.temperature}°C</p>
                    <Badge variant={metric.temperature > 70 ? 'warning' : 'success'} className='mt-2'>
                        {metric.temperature > 70 ? 'High' : 'Normal'}
                    </Badge>
                </div>

                <div className='bg-gray-900 border border-gray-800 rounded-lg p-4'>
                    <p className='text-sm text-gray-400 mb-1'>Power Draw</p>
                    <p className='text-2xl font-bold'>{metric.power_draw}W</p>
                    <p className='text-xs text-gray-500 mt-1'>Current usage</p>
                </div>
            </div>

            {/* Additional Metrics */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='bg-gray-900 border border-gray-800 rounded-lg p-4'>
                    <p className='text-sm text-gray-400 mb-1'>Latency</p>
                    <p className='text-2xl font-bold'>{metric.latency.toFixed(1)} ms</p>
                </div>

                <div className='bg-gray-900 border border-gray-800 rounded-lg p-4'>
                    <p className='text-sm text-gray-400 mb-1'>Throughput</p>
                    <p className='text-2xl font-bold'>{metric.throughput.toFixed(1)}</p>
                </div>

                <div className='bg-gray-900 border border-gray-800 rounded-lg p-4 flex justify-center items-center'>
                    {metric && <MemoryDonutChart metric={metric} />}
                </div>
            </div>

            {/* Historical Charts */}
            <div className='bg-gray-900 border border-gray-800 rounded-lg p-6'>
                <Tabs defaultValue='utilization' className='w-full'>
                    <div className='flex justify-between items-center mb-4'>
                        <h3 className='text-xl font-bold'>Historical Data</h3>
                        <select
                            value={timeRange}
                            onChange={(e) => setTimeRange(e.target.value as '1h' | '24h' | '7d')}
                            className='bg-gray-800 border border-gray-700 rounded px-3 py-1 text-sm'
                        >
                            <option value='1h'>Last Hour</option>
                            <option value='24h'>Last 24 Hours</option>
                            <option value='7d'>Last 7 Days</option>
                        </select>
                    </div>

                    <TabsList>
                        <TabsTrigger value='utilization'>Utilization</TabsTrigger>
                        <TabsTrigger value='temperature'>Temperature</TabsTrigger>
                    </TabsList>

                    <TabsContents>
                        <TabsContent value='utilization'>
                            {loading ? (
                                <div className='h-80 flex items-center justify-center'>
                                    <p className='text-gray-400'>Loading chart...</p>
                                </div>
                            ) : historyData.length > 0 ? (
                                <UtilLineChart data={historyData} timeRange={timeRange} />
                            ) : (
                                <div className='h-80 flex items-center justify-center'>
                                    <p className='text-gray-400'>No historical data available</p>
                                </div>
                            )}
                        </TabsContent>

                        <TabsContent value='temperature'>
                            {loading ? (
                                <div className='h-80 flex items-center justify-center'>
                                    <p className='text-gray-400'>Loading chart...</p>
                                </div>
                            ) : historyData.length > 0 ? (
                                <TempAreaChart data={historyData} timeRange={timeRange} />
                            ) : (
                                <div className='h-80 flex items-center justify-center'>
                                    <p className='text-gray-400'>No historical data available</p>
                                </div>
                            )}
                        </TabsContent>
                    </TabsContents>
                </Tabs>
            </div>
        </div>
    );
}
