module.exports = [
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}),
"[project]/pages/api/api.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCurrentMetric",
    ()=>getCurrentMetric,
    "getMetricsHistory",
    ()=>getMetricsHistory,
    "getWorkloadStatus",
    ()=>getWorkloadStatus,
    "startWorkload",
    ()=>startWorkload,
    "stopWorkload",
    ()=>stopWorkload
]);
const API_URL = process.env.SERVER_ADDRESS || '';
async function getCurrentMetric() {
    const response = await fetch(`${API_URL}/api/metrics?range=1h&limit=1`);
    if (!response.ok) {
        throw new Error('Failed to fetch current metric');
    }
    const metrics = await response.json();
    if (metrics.length === 0) {
        throw new Error('No metrics found');
    }
    return metrics[0];
}
async function getMetricsHistory(timeRange, agentId, type) {
    let url = `${API_URL}/api/metrics?range=${timeRange}`;
    if (agentId) url += `&agent_id=${agentId}`;
    if (type) url += `&type=${type}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch metrics history');
    }
    return response.json();
}
async function getWorkloadStatus() {
    let response;
    response = await fetch(`${API_URL}/api/workload/status`);
    if (!response.ok) {
        throw new Error('Failed to fetch workload status');
    }
    return response.json();
}
async function startWorkload() {
    const response = await fetch(`${API_URL}/api/workload/start`, {
        method: 'POST'
    });
    if (!response.ok) {
        throw new Error('Failed to start workload');
    }
    return response.json();
}
async function stopWorkload() {
    const response = await fetch(`${API_URL}/api/workload/stop`, {
        method: 'POST'
    });
    if (!response.ok) {
        throw new Error('Failed to stop workload');
    }
    return response.json();
}
}),
"[externals]/mongodb [external] (mongodb, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mongodb", () => require("mongodb"));

module.exports = mod;
}),
"[project]/pages/api/db.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
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
        const client = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["MongoClient"](MONGODB_URI);
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
    return db.collection('metrics');
}
}),
"[project]/pages/index.tsx [ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/pages/index.tsx'\n\nExpected ',', got ':'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b093d86e._.js.map