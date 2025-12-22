(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/metrics-dashboard/app/api/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/metrics-dashboard/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_URL = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || '';
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/metrics-dashboard/components/Client.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Client
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$app$2f$api$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/app/api/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Client({ initialMetric, initialWorkloadStatus }) {
    _s();
    const [metric, setMetric] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialMetric);
    const [workloadStatus, setWorkloadStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialWorkloadStatus);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Client.useEffect": ()=>{
            const interval = setInterval({
                "Client.useEffect.interval": async ()=>{
                    try {
                        const [metricData, workloadData] = await Promise.all([
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$app$2f$api$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentMetric"])(),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$app$2f$api$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWorkloadStatus"])()
                        ]);
                        setMetric(metricData);
                        setWorkloadStatus(workloadData);
                    } catch (error) {
                        console.error('Failed to fetch data:', error);
                    }
                }
            }["Client.useEffect.interval"], 5000);
            return ({
                "Client.useEffect": ()=>clearInterval(interval)
            })["Client.useEffect"];
        }
    }["Client.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricComponent, {
        initialWorkloadStatus: workloadStatus,
        metric: metric
    }, void 0, false, {
        fileName: "[project]/metrics-dashboard/components/Client.tsx",
        lineNumber: 32,
        columnNumber: 12
    }, this);
}
_s(Client, "Ptw0zT0aLEwN4TqmfMku7C7Yamk=");
_c = Client;
var _c;
__turbopack_context__.k.register(_c, "Client");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=metrics-dashboard_9cdcdab9._.js.map