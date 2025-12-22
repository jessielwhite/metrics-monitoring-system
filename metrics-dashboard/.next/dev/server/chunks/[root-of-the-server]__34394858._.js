module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/mongodb [external] (mongodb, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mongodb", () => require("mongodb"));

module.exports = mod;
}),
"[project]/pages/api/db.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "connectToDatabase",
    ()=>connectToDatabase,
    "getMetricsCollection",
    ()=>getMetricsCollection
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs)");
;
const MONGODB_URI = process.env.MONGODB_URI;
const DATABASE_NAME = process.env.DATABASE_NAME;
const COLLECTION_NAME = process.env.COLLECTION_NAME;
let cachedClient = null;
let cachedDb = null;
async function connectToDatabase() {
    if (cachedClient && cachedDb) {
        return {
            client: cachedClient,
            db: cachedDb
        };
    }
    try {
        const client = MONGODB_URI ? new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["MongoClient"](MONGODB_URI) : null;
        await client.connect();
        const db = client.db(DATABASE_NAME);
        // Test the connection
        await db.admin().ping();
        cachedClient = client;
        cachedDb = db;
        console.log('Connected to MongoDB successfully');
        return {
            client,
            db
        };
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        throw error;
    }
}
async function getMetricsCollection() {
    const { db } = await connectToDatabase();
    return db.collection(COLLECTION_NAME);
}
}),
"[project]/pages/api/metrics.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$db$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pages/api/db.ts [api] (ecmascript)");
;
async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({
            error: 'Method not allowed'
        });
    }
    try {
        const collection = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$db$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["getMetricsCollection"])();
        // Get query parameters
        const { range, agent_id, type } = req.query;
        let filter = {};
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
            let startDate;
            switch(range){
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
            filter.timestamp = {
                $gte: {
                    $date: startDate.toISOString()
                }
            };
        }
        const metrics = await collection.find(filter).sort({
            timestamp: -1
        }).limit(1000).toArray();
        // Convert MongoDB documents to Metric interface
        const formattedMetrics = metrics.map((doc)=>({
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
                power_draw: doc.power_draw
            }));
        res.status(200).json(formattedMetrics);
    } catch (error) {
        console.error('Error fetching metrics:', error);
        res.status(500).json({
            error: 'Failed to fetch metrics'
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__34394858._.js.map