import Image from 'next/image';
import TWLogo from '../public/tensorwave-logo.png';
import { getCurrentMetric, getWorkloadStatus } from './api/api';
import {
    Tabs,
    TabsContent,
    TabsContents,
    TabsList,
    TabsTrigger,
} from '../components/animate-ui/components/radix/tabs';

import Client from '../components/Client';
import { Metric } from '../app/api/types';

export default async function Dashboard() {
    const initialMetric = await getCurrentMetric();
    const initialWorkloadStatus = await getWorkloadStatus();

    return (
        <div className='dark flex min-h-screen flex-col bg-black px-18 py-14 text-white'>
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
            <Client initialWorkloadStatus={initialWorkloadStatus} initialMetric={initialMetric} />
        </div>
    );
}
