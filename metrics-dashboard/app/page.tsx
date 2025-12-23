'use client';
import { getCurrentMetric } from './api/api';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import TWLogo from '../public/tensorwave-logo.png';
import Client from '../components/Client';
import { Metric } from './api/types';

export default function Dashboard() {
    const [initialMetric, setInitialMetric] = useState<Metric | null>(null);

    useEffect(() => {
        const fetchInitialMetric = async () => {
            try {
                const metric = await getCurrentMetric();
                setInitialMetric(metric);
            } catch (error) {
                console.error('Failed to fetch initial metric:', error);
            }
        };

        fetchInitialMetric();
    }, []);

    return (
        <div className='dark flex min-h-screen flex-col bg-black px-8 py-6 text-white'>
            <div className='flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-0'>
                <div className='text-4xl font-bold'>Metrics Dashboard</div>
                <Image
                    src={TWLogo}
                    alt='TensorWave Logo'
                    width={60}
                    height={60}
                    className='rounded-full border p-3'
                />
            </div>
            <Client initialMetric={initialMetric} />
        </div>
    );
}
