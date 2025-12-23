import { MongoClient, Db } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
const DATABASE_NAME = process.env.DATABASE_NAME;
const COLLECTION_NAME = process.env.COLLECTION_NAME;


let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  try {
    if (!MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined');
    }
    
    const client = new MongoClient(MONGODB_URI);
    await client.connect();
    const db = client.db(DATABASE_NAME);

    // Test the connection
    await db.admin().ping();

    cachedClient = client;
    cachedDb = db;

    console.log('Connected to MongoDB successfully');
    return { client, db };
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  }
}

export async function getMetricsCollection() {
  if (!COLLECTION_NAME) {
    throw new Error('COLLECTION_NAME is not defined');
  }
  const { db } = await connectToDatabase();
  return db.collection(COLLECTION_NAME);
}