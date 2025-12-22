module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/metrics-dashboard/app/api/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
const API_URL = process.env.NEXT_PUBLIC_API_URL || '';
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
    let url = `${API_URL}/api/metrics/history?range=${timeRange}`;
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
"[project]/metrics-dashboard/components/Client.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Client
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$app$2f$api$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/app/api/api.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Client({ initialMetric, initialWorkloadStatus }) {
    const [metric, setMetric] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialMetric);
    const [workloadStatus, setWorkloadStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialWorkloadStatus);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(async ()=>{
            try {
                const [metricData, workloadData] = await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$app$2f$api$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrentMetric"])(),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$app$2f$api$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getWorkloadStatus"])()
                ]);
                setMetric(metricData);
                setWorkloadStatus(workloadData);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        }, 5000);
        return ()=>clearInterval(interval);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricComponent, {
        initialWorkloadStatus: workloadStatus,
        metric: metric
    }, void 0, false, {
        fileName: "[project]/metrics-dashboard/components/Client.tsx",
        lineNumber: 32,
        columnNumber: 12
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__71bda802._.js.map