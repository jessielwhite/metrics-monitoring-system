import type { NextApiRequest, NextApiResponse } from 'next';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { promisify } from 'util';
import path from 'path';

// Get the proto file path relative to the project root
// process.cwd() in Next.js API routes is the www directory, so we need to go up one level
const PROTO_PATH = path.resolve(process.cwd(), '../proto/test/test.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const { test } = grpc.loadPackageDefinition(packageDefinition) as any;


type MetricsClient = {
  getMetrics: (
    request: { agent_id?: string; metric_name?: string; start_time?: number; end_time?: number },
    callback: (error: any, response: { metrics: any[] }) => void
  ) => void;
  submitMetrics: (
    request: { agent_id: string; metrics: any[] },
    callback: (error: any, response: {}) => void
  ) => void;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST' && req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const client = new test.MetricsService(
      process.env.NEXT_PUBLIC_API_URL || '127.0.0.1:3000',
      grpc.credentials.createInsecure()
    ) as MetricsClient;

    const { agent_id, metrics } = req.body;
    const getMetrics = promisify(client.getMetrics.bind(client));
    const postMetrics = promisify(client.submitMetrics.bind(client));

    const getMetricsResponse = await getMetrics({});  // Get all metrics
    const postMetricsResponse = await postMetrics({
      agent_id: agent_id, metrics: metrics
    });  // Post new 

    res.status(200).json({ metrics: getMetricsResponse.metrics });
    console.log(getMetricsResponse.metrics);
    res.status(200).json({ metrics: postMetricsResponse });
  } catch (error) {
    console.error('Error fetching metrics:', error);
    res.status(500).json({ error: 'Failed to fetch metrics' });
  }
}

