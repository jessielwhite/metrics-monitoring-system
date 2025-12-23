import type { NextApiRequest, NextApiResponse } from 'next';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { promisify } from 'util';
import path from 'path';

// Get the proto file path
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
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Connect to Rust gRPC server
    const GRPC_SERVER = process.env.GRPC_SERVER || 'localhost:50051';
    
    const client = new test.MetricsService(
      GRPC_SERVER,
      grpc.credentials.createInsecure()
    ) as MetricsClient;

    const { agent_id, metric_name, start_time, end_time } = req.query;
    
    const getMetrics = promisify(client.getMetrics.bind(client));

    const response = await getMetrics({
      agent_id: agent_id as string,
      metric_name: metric_name as string,
      start_time: start_time ? Number(start_time) : undefined,
      end_time: end_time ? Number(end_time) : undefined,
    });

    res.status(200).json({ 
      success: true,
      metrics: response.metrics,
      count: response.metrics.length 
    });
    
  } catch (error) {
    console.error('gRPC Error fetching metrics:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to fetch metrics via gRPC',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
