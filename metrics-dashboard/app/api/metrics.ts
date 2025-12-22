import type { NextApiRequest, NextApiResponse } from 'next';
import { getMetricsCollection } from './db';
import { Metric } from './types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Metric[] | { error: string }>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const collection = await getMetricsCollection();

    // Get query parameters
    const { range, agent_id, type } = req.query;

    let filter: any = {};

    // Filter by agent_id if provided
    if (agent_id && typeof agent_id === 'string') {
      filter.agent_id = agent_id;
    }

    // Filter by type if provided
    if (type && typeof type === 'string') {
      filter.type = type;
    }

    // Filter by time range if provided
    if (range && typeof range === 'string') {
      const now = new Date();
      let startDate: Date;

      switch (range) {
        case '1h':
          startDate = new Date(now.getTime() - 60 * 60 * 1000);
          break;
        case '24h':
          startDate = new Date(now.getTime() - 24 * 60 * 60 * 1000);
          break;
        case '7d':
          startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
          break;
        default:
          startDate = new Date(now.getTime() - 24 * 60 * 60 * 1000);
      }

      filter.timestamp = { $gte: { $date: startDate.toISOString() } };
    }

    const metrics = await collection
      .find(filter)
      .sort({ timestamp: -1 })
      .limit(1000)
      .toArray();

    // Convert MongoDB documents to Metric interface
    const formattedMetrics: Metric[] = metrics.map((doc: any) => ({
      _id: doc._id?.toString(),
      timestamp: doc.timestamp?.$date || doc.timestamp,
      process_id: doc.process_id,
      process_name: doc.process_name,
      type: doc.type,
      utilization: doc.utilization,
      latency: doc.latency,
      throughput: doc.throughput,
      memory_used: doc.memory_used,
      memory_total: doc.memory_total,
      temperature: doc.temperature,
      power_draw: doc.power_draw,
    }));

    res.status(200).json(formattedMetrics);
  } catch (error) {
    console.error('Error fetching metrics:', error);
    res.status(500).json({ error: 'Failed to fetch metrics' });
  }
}