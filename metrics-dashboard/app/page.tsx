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

// import { useState, useEffect } from 'react';
// import { getCurrentMetric, getMetricsHistory } from './api/api';
// import type { Metric } from './api/types';
// import { getMetricsCollection } from './api/db';

// export default function Home() {
//   const [input, setInput] = useState('');
//   const [metrics, setMetrics] = useState<Metric[]>([]);
//   const [response, setResponse] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//     const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setResponse(null);

//     try {
//       const res = await getCurrentMetric();
//       if (res) {
//         setMetrics([res]);
//       } else {
//         setError('Invalid metric data received');
//       }
//     } catch (err: any) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const submitMetrics = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch('/api/metrics', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ metrics }),
//       });
//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.error || 'Failed to submit metrics');
//       }

//       setMetrics([]);
//       setError(null);
//     } catch (err: any) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };


//   const fetchMetrics = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch('/api/metrics');
//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.error || 'Failed to fetch metrics');
//       }

//       setMetrics(data.metrics);
//       setError(null);
//     } catch (err: any) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getCurrentMetric().then((res) => {
//       if (res) {
//         setMetrics([res]);
//       }
//       setLoading(false);
//     }).catch((err) => {
//       setError(err.message);
//       setLoading(false);
//     });
//     }, []);

//   return (
//     <div style={{
//       maxWidth: '1200px',
//       margin: '50px auto',
//       padding: '20px',
//       fontFamily: 'system-ui, sans-serif'
//     }}>
//       <h1>Metrics Monitoring Dashboard</h1>
//       <p>Real-time metrics from the Metrics Agent</p>
//       <form onSubmit={handleSubmit} style={{ marginTop: '30px' }}>
//         <div style={{ marginBottom: '15px' }}>
//           <label htmlFor="input" style={{ display: 'block', marginBottom: '5px' }}>
//             Test Input:
//           </label>
//           <input
//             id="input"
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             style={{
//               width: '100%',
//               padding: '10px',
//               fontSize: '16px',
//               border: '1px solid #ccc',
//               borderRadius: '4px',
//             }}
//             disabled={loading}
//           />
//         </div>
//       </form>
//       {error && (
//         <div style={{
//           marginTop: '20px',
//           padding: '15px',
//           backgroundColor: '#fee',
//           border: '1px solid #fcc',
//           borderRadius: '4px',
//           color: '#c00',
//         }}>
//           <strong>Error:</strong> {error}
//         </div>
//       )}

//       {response && (
//         <div style={{
//           marginTop: '20px',
//           padding: '15px',
//           backgroundColor: '#efe',
//           border: '1px solid #cfc',
//           borderRadius: '4px',
//         }}>
//           <strong>Response from Rust server:</strong>
//           <div style={{ marginTop: '10px', fontSize: '18px' }}>{response}</div>
//         </div>
//       )}
//       <div style={{ marginTop: '30px' }}>
//         <button
//           onClick={submitMetrics}
//           disabled={loading}
//           style={{
//             padding: '10px 20px',
//             fontSize: '16px',
//             backgroundColor: loading ? '#ccc' : '#28a745',
//             color: 'white',
//             border: 'none',
//             borderRadius: '4px',
//             cursor: loading ? 'not-allowed' : 'pointer',
//             marginRight: '10px',
//           }}
//         >
//           {loading ? 'Loading...' : 'Submit Metrics'}
//         </button>
//         <button
//           onClick={fetchMetrics}
//           disabled={loading}
//           style={{
//             padding: '10px 20px',
//             fontSize: '16px',
//             backgroundColor: loading ? '#ccc' : '#0070f3',
//             color: 'white',
//             border: 'none',
//             borderRadius: '4px',
//             cursor: loading ? 'not-allowed' : 'pointer',
//           }}
//         >
//           {loading ? 'Loading...' : 'Refresh Metrics'}
//         </button>
//       </div>
//       {metrics.length > 0 ? (
//         <table style={{
//           width: '100%',
//           borderCollapse: 'collapse',
//           border: '1px solid #ddd',
//           marginTop: '20px',
//         }}>
//           <thead>
//             <tr style={{ backgroundColor: '#f5f5f5' }}>
//               <th style={{ padding: '10px', border: '1px solid #ddd' }}>Agent ID</th>
//               <th style={{ padding: '10px', border: '1px solid #ddd' }}>Metric Name</th>
//               <th style={{ padding: '10px', border: '1px solid #ddd' }}>Value</th>
//               <th style={{ padding: '10px', border: '1px solid #ddd' }}>Unit</th>
//               <th style={{ padding: '10px', border: '1px solid #ddd' }}>Timestamp</th>
//             </tr>
//           </thead>
//           <tbody>
//             {metrics.map((metric, index) => (
//               <tr key={index}>
//                 <td style={{ padding: '10px', border: '1px solid #ddd' }}>{metric.agent_id}</td>
//                 <td style={{ padding: '10px', border: '1px solid #ddd' }}>{metric.name}</td>
//                 <td style={{ padding: '10px', border: '1px solid #ddd' }}>{metric.value.toFixed(2)}</td>
//                 <td style={{ padding: '10px', border: '1px solid #ddd' }}>{metric.unit}</td>
//                 <td style={{ padding: '10px', border: '1px solid #ddd', whiteSpace: 'nowrap' }}>
//                   {new Date(parseInt(metric.timestamp)).toLocaleString()}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         !loading && <p>No metrics available.</p>
//       )}
//       <div style={{ marginTop: '40px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
//         <h3>How it works:</h3>
//         <ol>
//           <li>The Metrics Agent collects system metrics (CPU, memory, disk, network latency)</li>
//           <li>Metrics are sent to the Rust gRPC server every 10 seconds</li>
//           <li>This dashboard fetches and displays the latest metrics from the server</li>
//           <li>Metrics auto-refresh every 5 seconds</li>
//         </ol>
//         </div>
//       </div>
//     );
//   }
