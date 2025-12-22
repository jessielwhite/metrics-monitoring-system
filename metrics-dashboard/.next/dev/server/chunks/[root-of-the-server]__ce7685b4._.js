module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/@grpc/grpc-js [external] (@grpc/grpc-js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@grpc/grpc-js", () => require("@grpc/grpc-js"));

module.exports = mod;
}),
"[externals]/@grpc/proto-loader [external] (@grpc/proto-loader, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@grpc/proto-loader", () => require("@grpc/proto-loader"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/pages/api/test-rpc.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$grpc$2f$grpc$2d$js__$5b$external$5d$__$2840$grpc$2f$grpc$2d$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@grpc/grpc-js [external] (@grpc/grpc-js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$grpc$2f$proto$2d$loader__$5b$external$5d$__$2840$grpc$2f$proto$2d$loader$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@grpc/proto-loader [external] (@grpc/proto-loader, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/util [external] (util, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
;
;
// Get the proto file path relative to the project root
// process.cwd() in Next.js API routes is the www directory, so we need to go up one level
const PROTO_PATH = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(process.cwd(), '../proto/test/test.proto');
const packageDefinition = __TURBOPACK__imported__module__$5b$externals$5d2f40$grpc$2f$proto$2d$loader__$5b$external$5d$__$2840$grpc$2f$proto$2d$loader$2c$__cjs$29$__["loadSync"](PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});
const { test } = __TURBOPACK__imported__module__$5b$externals$5d2f40$grpc$2f$grpc$2d$js__$5b$external$5d$__$2840$grpc$2f$grpc$2d$js$2c$__cjs$29$__["loadPackageDefinition"](packageDefinition);
async function handler(req, res) {
    if (req.method !== 'POST' && req.method !== 'GET') {
        return res.status(405).json({
            error: 'Method not allowed'
        });
    }
    try {
        const client = new test.MetricsService(process.env.SERVER_ADDRESS || '127.0.0.1:3000', __TURBOPACK__imported__module__$5b$externals$5d2f40$grpc$2f$grpc$2d$js__$5b$external$5d$__$2840$grpc$2f$grpc$2d$js$2c$__cjs$29$__["credentials"].createInsecure());
        const { agent_id, metrics } = req.body;
        const getMetrics = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["promisify"])(client.getMetrics.bind(client));
        const postMetrics = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["promisify"])(client.submitMetrics.bind(client));
        const getMetricsResponse = await getMetrics({}); // Get all metrics
        const postMetricsResponse = await postMetrics({
            agent_id: agent_id,
            metrics: metrics
        }); // Post new 
        res.status(200).json({
            metrics: getMetricsResponse.metrics
        });
        console.log(getMetricsResponse.metrics);
        res.status(200).json({
            metrics: postMetricsResponse
        });
    } catch (error) {
        console.error('Error fetching metrics:', error);
        res.status(500).json({
            error: 'Failed to fetch metrics'
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ce7685b4._.js.map