import express, { Request, Response } from "express";
import { MongoClient, Db } from "mongodb";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({ path: '../config.env' });

const app = express();
const PORT = process.env.PORT || 8081;
const VERCEL_URL = process.env.VERCEL_URL;
const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
const RUST_SERVICE_URL = process.env.RUST_SERVICE_URL;
const MONGODB_URI = process.env.MONGODB_URI;
const DATABASE_NAME = process.env.DATABASE_NAME;
const COLLECTION_NAME = process.env.COLLECTION_NAME;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      NEXT_PUBLIC_API_URL,
      RUST_SERVICE_URL,
      VERCEL_URL,
    ].filter((url): url is string => url !== undefined),
    credentials: true,
  })
);
let db: Db;

async function connectDB(): Promise<{ client: MongoClient | null; db: Db }> {
  if (db) {
    return { client: null, db };
  }

  try {
    const client = MONGODB_URI ? new MongoClient(MONGODB_URI) : null;
    if (!client) {
      throw new Error('MONGODB_URI is not defined');
    }
    await client.connect();
    db = client.db(DATABASE_NAME);

    // Test the connection
    await db.admin().ping();

    console.log('Connected to MongoDB successfully');
    return { client, db };
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  }
}

app.get("/api/metrics/current", async (req: Request, res: Response) => {
  try {
    const latestRecord = await db
      .collection(`${COLLECTION_NAME}`)
      .find()
      .sort({ timestamp: -1 })
      .limit(1)
      .toArray();

    if (latestRecord.length === 0) {
      return res.json([]);
    }

    return res.json(latestRecord[0]);
  } catch (error) {
    console.error("Error fetching current metrics:", error);
    res.status(404).json({ error: "Metric not found" });
  }
});

app.get("/api/metrics/history", async (req: Request, res: Response) => {
  try {
    const range = (req.query.range as string) || "1h";

    const latestRecord = await db
      .collection(`${COLLECTION_NAME}`)
      .find()
      .sort({ timestamp: -1 })
      .limit(1)
      .toArray();

    if (latestRecord.length === 0) {
      return res.json([]);
    }

    const latestTime = new Date(latestRecord[0].timestamp);
    let cutoffTime: Date;

    switch (range) {
      case "1h":
        cutoffTime = new Date(latestTime.getTime() - 60 * 60 * 1000);
        break;
      case "24h":
        cutoffTime = new Date(latestTime.getTime() - 24 * 60 * 60 * 1000);
        break;
      case "7d":
        cutoffTime = new Date(latestTime.getTime() - 7 * 24 * 60 * 60 * 1000);
        break;
      default:
        cutoffTime = new Date(latestTime.getTime() - 60 * 60 * 1000);
    }

    const history = await db
      .collection("metrics")
      .find({
        timestamp: { $gte: cutoffTime.toISOString() },
      })
      .sort({ timestamp: 1 })
      .toArray();

    res.json(history);
  } catch (error) {
    console.error("Error fetching history:", error);
    res.status(500).json({ error: "Failed to fetch history" });
  }
});

app.get("/api/metrics/stats", async (req: Request, res: Response) => {
  try {
    const stats = await db
      .collection(`${COLLECTION_NAME}`)
      .aggregate([
        { $sort: { timestamp: -1 } },
        { $limit: 100 },
        {
          $group: {
            _id: null,
            avgUtilization: { $avg: "$utilization" },
            maxUtilization: { $max: "$utilization" },
            avgTemperature: { $avg: "$temperature" },
            maxTemperature: { $max: "$temperature" },
            avgPower: { $avg: "$power_draw" },
          },
        },
      ])
      .toArray();

    res.json(stats[0] || {});
  } catch (error) {
    console.error("Error fetching stats:", error);
    res.status(500).json({ error: "Failed to fetch stats" });
  }
});

async function start() {
  try {
    await connectDB();
  } catch (error) {
    console.error("Database failed to connect:", error);
    console.log('MONGODB_URI:', MONGODB_URI);
    console.log('DATABASE_NAME:', DATABASE_NAME);
    console.log('\nPlease ensure:');
    console.log('1. MongoDB is running (start with: brew services start mongodb-community or docker)');
    console.log('2. config.env file exists in the root directory with valid MONGODB_URI');
    console.log('3. MONGODB_URI format: mongodb://localhost:27017 or your MongoDB connection string\n');
  }
  app.listen(PORT, () => {
    console.log(`Node.js API server running on port ${PORT}`);
  });
}

start();
