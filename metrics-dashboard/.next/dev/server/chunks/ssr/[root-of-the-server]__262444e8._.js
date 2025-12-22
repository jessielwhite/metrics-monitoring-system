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
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://192.168.1.67:3000';
async function getCurrentMetric() {
    const response = await fetch(`${API_URL}/api/metrics/current`);
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
"[project]/metrics-dashboard/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/metrics-dashboard/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/tailwind-variants/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tv"])({
    base: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('inline-flex items-center gap-x-1 whitespace-nowrap rounded-sm px-2 py-1 text-xs font-medium ring-1 ring-inset'),
    variants: {
        variant: {
            default: [
                'bg-blue-50 text-blue-900 ring-blue-500/30',
                'dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30'
            ],
            neutral: [
                'bg-gray-50 text-gray-900 ring-gray-500/30',
                'dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20'
            ],
            success: [
                'bg-emerald-50 text-emerald-900 ring-emerald-600/30',
                'dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-emerald-400/20'
            ],
            error: [
                'bg-red-50 text-red-900 ring-red-600/20',
                'dark:bg-red-400/10 dark:text-red-400 dark:ring-red-400/20'
            ],
            warning: [
                'bg-yellow-50 text-yellow-900 ring-yellow-600/30',
                'dark:bg-yellow-400/10 dark:text-yellow-500 dark:ring-yellow-400/20'
            ]
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
const Badge = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(({ className, variant, ...props }, forwardedRef)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: forwardedRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        "tremor-id": "tremor-raw",
        ...props
    }, void 0, false, {
        fileName: "[project]/metrics-dashboard/components/ui/badge.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Badge.displayName = 'Badge';
;
}),
"[project]/metrics-dashboard/components/animate-ui/primitives/buttons/liquid.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LiquidButton",
    ()=>LiquidButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
function LiquidButton({ delay = '0.3s', fillHeight = '3px', hoverScale = 1.05, tapScale = 0.95, asChild = false, ...props }) {
    const Component = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
        whileTap: {
            scale: tapScale
        },
        whileHover: {
            scale: hoverScale,
            '--liquid-button-fill-width': '100%',
            '--liquid-button-fill-height': '100%',
            '--liquid-button-delay': delay,
            transition: {
                '--liquid-button-fill-width': {
                    duration: 0
                },
                '--liquid-button-fill-height': {
                    duration: 0
                },
                '--liquid-button-delay': {
                    duration: 0
                }
            }
        },
        style: {
            '--liquid-button-fill-width': '-1%',
            '--liquid-button-fill-height': fillHeight,
            '--liquid-button-delay': '0s',
            background: 'linear-gradient(var(--liquid-button-color) 0 0) no-repeat calc(200% - var(--liquid-button-fill-width, -1%)) 100% / 200% var(--liquid-button-fill-height, 0.2em)',
            backgroundColor: 'var(--liquid-button-background-color)',
            transition: `background ${delay} var(--liquid-button-delay, 0s), color ${delay} ${delay}, background-position ${delay} calc(${delay} - var(--liquid-button-delay, 0s))`
        },
        ...props
    }, void 0, false, {
        fileName: "[project]/metrics-dashboard/components/animate-ui/primitives/buttons/liquid.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/metrics-dashboard/components/animate-ui/components/buttons/liquid.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LiquidButton",
    ()=>LiquidButton,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$components$2f$animate$2d$ui$2f$primitives$2f$buttons$2f$liquid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/components/animate-ui/primitives/buttons/liquid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[box-shadow,_color,_background-color,_border-color,_outline-color,_text-decoration-color,_fill,_stroke] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: ' [--liquid-button-background-color:var(--cyan-accent)] [--liquid-button-color:theme(colors.emerald.600)] text-primary-foreground hover:text-secondary-foreground shadow-xs',
            pause: ' [--liquid-button-background-color:var(--cyan-accent)] [--liquid-button-color:theme(colors.blue.600)] text-primary-foreground hover:text-secondary-foreground shadow-xs',
            destructive: '[--liquid-button-background-color:var(--accent)] [--liquid-button-color:var(--destructive)] text-white shadow-xs focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40',
            secondary: '[--liquid-button-background-color:var(--accent)] [--liquid-button-color:var(--secondary)] text-secondary hover:text-secondary-foreground shadow-xs',
            ghost: '[--liquid-button-background-color:var(--transparent)] [--liquid-button-color:var(--primary)] text-primary hover:text-primary-foreground shadow-xs'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8 rounded-md',
            'icon-lg': 'size-10 rounded-md'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function LiquidButton({ className, variant, size, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$components$2f$animate$2d$ui$2f$primitives$2f$buttons$2f$liquid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LiquidButton"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/metrics-dashboard/components/animate-ui/components/buttons/liquid.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/metrics-dashboard/lib/chartUtils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Tremor getYAxisDomain [v0.0.0]
__turbopack_context__.s([
    "AvailableChartColors",
    ()=>AvailableChartColors,
    "chartColors",
    ()=>chartColors,
    "constructCategoryColors",
    ()=>constructCategoryColors,
    "getColorClassName",
    ()=>getColorClassName,
    "getYAxisDomain",
    ()=>getYAxisDomain,
    "hasOnlyOneValueForKey",
    ()=>hasOnlyOneValueForKey
]);
const getYAxisDomain = (autoMinValue, minValue, maxValue)=>{
    const minDomain = autoMinValue ? 'auto' : minValue ?? 0;
    const maxDomain = maxValue ?? 'auto';
    return [
        minDomain,
        maxDomain
    ];
};
function hasOnlyOneValueForKey(array, keyToCheck) {
    const val = [];
    for (const obj of array){
        if (Object.prototype.hasOwnProperty.call(obj, keyToCheck)) {
            val.push(obj[keyToCheck]);
            if (val.length > 1) {
                return false;
            }
        }
    }
    return true;
}
const chartColors = {
    blue: {
        bg: 'bg-blue-500',
        stroke: 'stroke-blue-500',
        fill: 'fill-blue-500',
        text: 'text-blue-500'
    },
    emerald: {
        bg: 'bg-emerald-500',
        stroke: 'stroke-emerald-500',
        fill: 'fill-emerald-500',
        text: 'text-emerald-500'
    },
    violet: {
        bg: 'bg-violet-500',
        stroke: 'stroke-violet-500',
        fill: 'fill-violet-500',
        text: 'text-violet-500'
    },
    amber: {
        bg: 'bg-amber-500',
        stroke: 'stroke-amber-500',
        fill: 'fill-amber-500',
        text: 'text-amber-500'
    },
    gray: {
        bg: 'bg-gray-500',
        stroke: 'stroke-gray-500',
        fill: 'fill-gray-500',
        text: 'text-gray-500'
    },
    cyan: {
        bg: 'bg-cyan-500',
        stroke: 'stroke-cyan-500',
        fill: 'fill-cyan-500',
        text: 'text-cyan-500'
    },
    pink: {
        bg: 'bg-pink-500',
        stroke: 'stroke-pink-500',
        fill: 'fill-pink-500',
        text: 'text-pink-500'
    },
    lime: {
        bg: 'bg-lime-500',
        stroke: 'stroke-lime-500',
        fill: 'fill-lime-500',
        text: 'text-lime-500'
    },
    fuchsia: {
        bg: 'bg-fuchsia-500',
        stroke: 'stroke-fuchsia-500',
        fill: 'fill-fuchsia-500',
        text: 'text-fuchsia-500'
    }
};
const AvailableChartColors = Object.keys(chartColors);
const constructCategoryColors = (categories, colors)=>{
    const categoryColors = new Map();
    categories.forEach((category, index)=>{
        categoryColors.set(category, colors[index % colors.length]);
    });
    return categoryColors;
};
const getColorClassName = (color, type)=>{
    const fallbackColor = {
        bg: 'bg-gray-500',
        stroke: 'stroke-gray-500',
        fill: 'fill-gray-500',
        text: 'text-gray-500'
    };
    return chartColors[color]?.[type] ?? fallbackColor[type];
};
}),
"[project]/metrics-dashboard/hooks/useOnWindowResize.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Tremor useOnWindowResize [v0.0.2]
__turbopack_context__.s([
    "useOnWindowResize",
    ()=>useOnWindowResize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const useOnWindowResize = (handler)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const handleResize = ()=>{
            handler();
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return ()=>window.removeEventListener('resize', handleResize);
    }, [
        handler
    ]);
};
}),
"[project]/metrics-dashboard/components/LineChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Tremor LineChart [v1.0.0]
/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s([
    "LineChart",
    ()=>LineChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/@remixicon/react/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Dot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/recharts/es6/shape/Dot.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Label$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/recharts/es6/component/Label.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/recharts/es6/cartesian/Line.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/recharts/es6/component/Legend.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/recharts/es6/chart/LineChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/lib/chartUtils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$hooks$2f$useOnWindowResize$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/hooks/useOnWindowResize.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const LegendItem = ({ name, color, onClick, activeLegend })=>{
    const hasOnValueChange = !!onClick;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(// base
        'group inline-flex flex-nowrap items-center gap-1.5 rounded-sm px-2 py-1 whitespace-nowrap transition', hasOnValueChange ? 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800' : 'cursor-default'),
        onClick: (e)=>{
            e.stopPropagation();
            onClick?.(name, color);
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('h-[3px] w-3.5 shrink-0 rounded-full', (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getColorClassName"])(color, 'bg'), activeLegend && activeLegend !== name ? 'opacity-40' : 'opacity-100'),
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
                lineNumber: 58,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(// base
                'truncate text-xs whitespace-nowrap', // text color
                'text-gray-700 dark:text-gray-300', hasOnValueChange && 'group-hover:text-gray-900 dark:group-hover:text-gray-50', activeLegend && activeLegend !== name ? 'opacity-40' : 'opacity-100'),
                children: name
            }, void 0, false, {
                fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
                lineNumber: 66,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
        lineNumber: 45,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const ScrollButton = ({ icon, onClick, disabled })=>{
    const Icon = icon;
    const [isPressed, setIsPressed] = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    const intervalRef = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (isPressed) {
            intervalRef.current = setInterval(()=>{
                onClick?.();
            }, 300);
        } else {
            clearInterval(intervalRef.current);
        }
        return ()=>clearInterval(intervalRef.current);
    }, [
        isPressed,
        onClick
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (disabled) {
            clearInterval(intervalRef.current);
            setIsPressed(false);
        }
    }, [
        disabled
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(// base
        'group inline-flex size-5 items-center truncate rounded-sm transition', disabled ? 'cursor-not-allowed text-gray-400 dark:text-gray-600' : 'cursor-pointer text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-50'),
        disabled: disabled,
        onClick: (e)=>{
            e.stopPropagation();
            onClick?.();
        },
        onMouseDown: (e)=>{
            e.stopPropagation();
            setIsPressed(true);
        },
        onMouseUp: (e)=>{
            e.stopPropagation();
            setIsPressed(false);
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
            className: "size-full",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
            lineNumber: 135,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
        lineNumber: 112,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const Legend = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef((props, ref)=>{
    const { categories, colors = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvailableChartColors"], className, onClickLegendItem, activeLegend, enableLegendSlider = false, ...other } = props;
    const scrollableRef = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const scrollButtonsRef = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const [hasScroll, setHasScroll] = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [isKeyDowned, setIsKeyDowned] = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(null);
    const intervalRef = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const checkScroll = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(()=>{
        const scrollable = scrollableRef?.current;
        if (!scrollable) return;
        const hasLeftScroll = scrollable.scrollLeft > 0;
        const hasRightScroll = scrollable.scrollWidth - scrollable.clientWidth > scrollable.scrollLeft;
        setHasScroll({
            left: hasLeftScroll,
            right: hasRightScroll
        });
    }, [
        setHasScroll
    ]);
    const scrollToTest = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback((direction)=>{
        const element = scrollableRef?.current;
        const scrollButtons = scrollButtonsRef?.current;
        const scrollButtonsWith = scrollButtons?.clientWidth ?? 0;
        const width = element?.clientWidth ?? 0;
        if (element && enableLegendSlider) {
            element.scrollTo({
                left: direction === 'left' ? element.scrollLeft - width + scrollButtonsWith : element.scrollLeft + width - scrollButtonsWith,
                behavior: 'smooth'
            });
            setTimeout(()=>{
                checkScroll();
            }, 400);
        }
    }, [
        enableLegendSlider,
        checkScroll
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        const keyDownHandler = (key)=>{
            if (key === 'ArrowLeft') {
                scrollToTest('left');
            } else if (key === 'ArrowRight') {
                scrollToTest('right');
            }
        };
        if (isKeyDowned) {
            keyDownHandler(isKeyDowned);
            intervalRef.current = setInterval(()=>{
                keyDownHandler(isKeyDowned);
            }, 300);
        } else {
            clearInterval(intervalRef.current);
        }
        return ()=>clearInterval(intervalRef.current);
    }, [
        isKeyDowned,
        scrollToTest
    ]);
    const keyDown = (e)=>{
        e.stopPropagation();
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            e.preventDefault();
            setIsKeyDowned(e.key);
        }
    };
    const keyUp = (e)=>{
        e.stopPropagation();
        setIsKeyDowned(null);
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        const scrollable = scrollableRef?.current;
        if (enableLegendSlider) {
            checkScroll();
            scrollable?.addEventListener('keydown', keyDown);
            scrollable?.addEventListener('keyup', keyUp);
        }
        return ()=>{
            scrollable?.removeEventListener('keydown', keyDown);
            scrollable?.removeEventListener('keyup', keyUp);
        };
    }, [
        checkScroll,
        enableLegendSlider
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('relative overflow-hidden', className),
        ...other,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollableRef,
                tabIndex: 0,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex h-full outline-none', enableLegendSlider ? hasScroll?.right || hasScroll?.left ? 'snap-mandatory items-center overflow-auto pr-12 pl-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden' : '' : 'flex-wrap'),
                children: categories.map((category, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LegendItem, {
                        name: category,
                        color: colors[index],
                        onClick: onClickLegendItem,
                        activeLegend: activeLegend
                    }, `item-${index}`, false, {
                        fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
                        lineNumber: 263,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
                lineNumber: 250,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            enableLegendSlider && (hasScroll?.right || hasScroll?.left) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(// base
                    'absolute top-0 right-0 bottom-0 flex h-full items-center justify-center pr-1', // background color
                    'bg-white dark:bg-gray-950'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollButton, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RiArrowLeftSLine"],
                            onClick: ()=>{
                                setIsKeyDowned(null);
                                scrollToTest('left');
                            },
                            disabled: !hasScroll?.left
                        }, void 0, false, {
                            fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
                            lineNumber: 282,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollButton, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RiArrowRightSLine"],
                            onClick: ()=>{
                                setIsKeyDowned(null);
                                scrollToTest('right');
                            },
                            disabled: !hasScroll?.right
                        }, void 0, false, {
                            fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
                            lineNumber: 290,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
                    lineNumber: 274,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false) : null
        ]
    }, void 0, true, {
        fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
        lineNumber: 249,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
});
Legend.displayName = 'Legend';
const ChartLegend = ({ payload }, categoryColors, setLegendHeight, activeLegend, onClick, enableLegendSlider, legendPosition, yAxisWidth)=>{
    const legendRef = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$hooks$2f$useOnWindowResize$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOnWindowResize"])(()=>{
        const calculateHeight = (height)=>height ? Number(height) + 15 : 60;
        setLegendHeight(calculateHeight(legendRef.current?.clientHeight));
    });
    const legendPayload = payload.filter((item)=>item.type !== 'none');
    const paddingLeft = legendPosition === 'left' && yAxisWidth ? yAxisWidth - 8 : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: legendRef,
        style: {
            paddingLeft: paddingLeft
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center', {
            'justify-center': legendPosition === 'center'
        }, {
            'justify-start': legendPosition === 'left'
        }, {
            'justify-end': legendPosition === 'right'
        }),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Legend, {
            categories: legendPayload.map((entry)=>entry.value),
            colors: legendPayload.map((entry)=>categoryColors.get(entry.value)),
            onClickLegendItem: onClick,
            activeLegend: activeLegend,
            enableLegendSlider: enableLegendSlider
        }, void 0, false, {
            fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
            lineNumber: 339,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
        lineNumber: 329,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const ChartTooltip = ({ active, payload, label, valueFormatter })=>{
    if (active && payload && payload.length) {
        const legendPayload = payload.filter((item)=>item.type !== 'none');
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(// base
            'rounded-md border text-sm shadow-md', // border color
            'border-gray-200 dark:border-gray-800', // background color
            'bg-white dark:bg-gray-950'),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('border-b border-inherit px-4 py-2'),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(// base
                        'font-medium', // text color
                        'text-gray-900 dark:text-gray-50'),
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
                        lineNumber: 385,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
                    lineNumber: 384,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('space-y-1 px-4 py-2'),
                    children: legendPayload.map(({ value, category, color }, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between space-x-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "aria-hidden": "true",
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('h-[3px] w-3.5 shrink-0 rounded-full', (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getColorClassName"])(color, 'bg'))
                                        }, void 0, false, {
                                            fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
                                            lineNumber: 403,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(// base
                                            'text-right whitespace-nowrap', // text color
                                            'text-gray-700 dark:text-gray-300'),
                                            children: category
                                        }, void 0, false, {
                                            fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
                                            lineNumber: 410,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
                                    lineNumber: 402,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(// base
                                    'text-right font-medium whitespace-nowrap tabular-nums', // text color
                                    'text-gray-900 dark:text-gray-50'),
                                    children: valueFormatter(value)
                                }, void 0, false, {
                                    fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
                                    lineNumber: 421,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, `id-${index}`, true, {
                            fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
                            lineNumber: 398,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
                    lineNumber: 396,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
            lineNumber: 374,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    return null;
};
const LineChart = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef((props, ref)=>{
    const { data = [], categories = [], index, colors = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvailableChartColors"], valueFormatter = (value)=>value.toString(), startEndOnly = false, showXAxis = true, showYAxis = true, showGridLines = true, yAxisWidth = 56, xAxisFormatter, intervalType = 'equidistantPreserveStart', showTooltip = true, showLegend = true, autoMinValue = false, minValue, maxValue, allowDecimals = true, connectNulls = false, className, onValueChange, enableLegendSlider = false, tickGap = 5, xAxisLabel, yAxisLabel, legendPosition = 'right', tooltipCallback, customTooltip, ...other } = props;
    const CustomTooltip = customTooltip;
    const paddingValue = !showXAxis && !showYAxis || startEndOnly && !showYAxis ? 0 : 20;
    const [legendHeight, setLegendHeight] = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(60);
    const [activeDot, setActiveDot] = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(undefined);
    const [activeLegend, setActiveLegend] = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(undefined);
    const categoryColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructCategoryColors"])(categories, colors);
    const yAxisDomain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYAxisDomain"])(autoMinValue, minValue, maxValue);
    const hasOnValueChange = !!onValueChange;
    const prevActiveRef = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(undefined);
    const prevLabelRef = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(undefined);
    function onDotClick(itemData, event) {
        event.stopPropagation();
        if (!hasOnValueChange) return;
        if (itemData.index === activeDot?.index && itemData.dataKey === activeDot?.dataKey || (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOnlyOneValueForKey"])(data, itemData.dataKey) && activeLegend && activeLegend === itemData.dataKey) {
            setActiveLegend(undefined);
            setActiveDot(undefined);
            onValueChange?.(null);
        } else {
            setActiveLegend(itemData.dataKey);
            setActiveDot({
                index: itemData.index,
                dataKey: itemData.dataKey
            });
            onValueChange?.({
                eventType: 'dot',
                categoryClicked: itemData.dataKey,
                ...itemData.payload
            });
        }
    }
    function onCategoryClick(dataKey) {
        if (!hasOnValueChange) return;
        if (dataKey === activeLegend && !activeDot || (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOnlyOneValueForKey"])(data, dataKey) && activeDot && activeDot.dataKey === dataKey) {
            setActiveLegend(undefined);
            onValueChange?.(null);
        } else {
            setActiveLegend(dataKey);
            onValueChange?.({
                eventType: 'category',
                categoryClicked: dataKey
            });
        }
        setActiveDot(undefined);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('h-80 w-full **:outline-none', className),
        "tremor-id": "tremor-raw",
        ...other,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            height: 350,
            minWidth: 0,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineChart"], {
                data: data,
                onClick: hasOnValueChange && (activeLegend || activeDot) ? ()=>{
                    setActiveDot(undefined);
                    setActiveLegend(undefined);
                    onValueChange?.(null);
                } : undefined,
                margin: {
                    bottom: xAxisLabel ? 30 : undefined,
                    left: yAxisLabel ? 20 : undefined,
                    right: yAxisLabel ? 5 : undefined,
                    top: 5
                },
                children: [
                    showGridLines ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('stroke-gray-200 stroke-1 dark:stroke-gray-800'),
                        horizontal: true,
                        vertical: false
                    }, void 0, false, {
                        fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
                        lineNumber: 601,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                        padding: {
                            left: paddingValue,
                            right: paddingValue
                        },
                        hide: !showXAxis,
                        dataKey: index,
                        interval: startEndOnly ? 'preserveStartEnd' : intervalType,
                        tick: {
                            transform: 'translate(0, 6)',
                            fill: '#6b7280'
                        },
                        ticks: startEndOnly ? [
                            data[0][index],
                            data[data.length - 1][index]
                        ] : undefined,
                        tickFormatter: xAxisFormatter,
                        fill: "",
                        stroke: "",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(// base
                        'text-xs', // text fill
                        'fill-gray-500 dark:fill-gray-500'),
                        tickLine: false,
                        axisLine: false,
                        minTickGap: tickGap,
                        children: xAxisLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Label$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                            position: "insideBottom",
                            offset: -20,
                            className: "fill-gray-800 text-sm font-medium dark:fill-gray-200",
                            children: xAxisLabel
                        }, void 0, false, {
                            fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
                            lineNumber: 632,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
                        lineNumber: 607,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                        width: yAxisWidth,
                        hide: !showYAxis,
                        axisLine: false,
                        tickLine: false,
                        type: "number",
                        domain: yAxisDomain,
                        tick: {
                            transform: 'translate(-3, 0)',
                            fill: '#6b7280'
                        },
                        fill: "",
                        stroke: "",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(// base
                        'text-xs', // text fill
                        'k:fill-gray-500 fill-gray-500'),
                        tickFormatter: valueFormatter,
                        allowDecimals: allowDecimals,
                        children: yAxisLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Label$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                            position: "insideLeft",
                            style: {
                                textAnchor: 'middle'
                            },
                            angle: -90,
                            offset: -15,
                            className: "fill-gray-800 text-sm font-medium dark:fill-gray-200",
                            children: yAxisLabel
                        }, void 0, false, {
                            fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
                            lineNumber: 661,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
                        lineNumber: 641,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                        wrapperStyle: {
                            outline: 'none'
                        },
                        isAnimationActive: true,
                        animationDuration: 100,
                        cursor: {
                            stroke: '#d1d5db',
                            strokeWidth: 1
                        },
                        offset: 20,
                        position: {
                            y: 0
                        },
                        content: ({ active, payload, label })=>{
                            const cleanPayload = payload ? payload.map((item)=>({
                                    category: item.dataKey,
                                    value: item.value,
                                    index: item.payload[index],
                                    color: categoryColors.get(item.dataKey),
                                    type: item.type,
                                    payload: item.payload
                                })) : [];
                            if (tooltipCallback && (active !== prevActiveRef.current || label !== prevLabelRef.current)) {
                                tooltipCallback({
                                    active,
                                    payload: cleanPayload,
                                    label
                                });
                                prevActiveRef.current = active;
                                prevLabelRef.current = label;
                            }
                            return showTooltip && active ? CustomTooltip ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTooltip, {
                                active: active,
                                payload: cleanPayload,
                                label: label
                            }, void 0, false, {
                                fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
                                lineNumber: 704,
                                columnNumber: 37
                            }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartTooltip, {
                                active: active,
                                payload: cleanPayload,
                                label: label,
                                valueFormatter: valueFormatter
                            }, void 0, false, {
                                fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
                                lineNumber: 710,
                                columnNumber: 37
                            }, void 0) : null;
                        }
                    }, void 0, false, {
                        fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
                        lineNumber: 672,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    showLegend ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Legend"], {
                        verticalAlign: "top",
                        height: legendHeight,
                        content: ({ payload })=>ChartLegend({
                                payload
                            }, categoryColors, setLegendHeight, activeLegend, hasOnValueChange ? (clickedLegendItem)=>onCategoryClick(clickedLegendItem) : undefined, enableLegendSlider, legendPosition, yAxisWidth)
                    }, void 0, false, {
                        fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
                        lineNumber: 722,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)) : null,
                    categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getColorClassName"])(categoryColors.get(category), 'stroke')),
                            strokeOpacity: activeDot || activeLegend && activeLegend !== category ? 0.3 : 1,
                            activeDot: (props)=>{
                                const { cx: cxCoord, cy: cyCoord, stroke, strokeLinecap, strokeLinejoin, strokeWidth, dataKey } = props;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Dot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dot"], {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('stroke-white dark:stroke-gray-950', onValueChange ? 'cursor-pointer' : '', (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getColorClassName"])(categoryColors.get(dataKey), 'fill')),
                                    cx: cxCoord,
                                    cy: cyCoord,
                                    r: 5,
                                    fill: "",
                                    stroke: stroke,
                                    strokeLinecap: strokeLinecap,
                                    strokeLinejoin: strokeLinejoin,
                                    strokeWidth: strokeWidth,
                                    onClick: (_, event)=>onDotClick(props, event)
                                }, void 0, false, {
                                    fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
                                    lineNumber: 764,
                                    columnNumber: 37
                                }, void 0);
                            },
                            dot: (props)=>{
                                const { stroke, strokeLinecap, strokeLinejoin, strokeWidth, cx: cxCoord, cy: cyCoord, dataKey, index } = props;
                                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOnlyOneValueForKey"])(data, category) && !(activeDot || activeLegend && activeLegend !== category) || activeDot?.index === index && activeDot?.dataKey === category) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Dot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dot"], {
                                        cx: cxCoord,
                                        cy: cyCoord,
                                        r: 5,
                                        stroke: stroke,
                                        fill: "",
                                        strokeLinecap: strokeLinecap,
                                        strokeLinejoin: strokeLinejoin,
                                        strokeWidth: strokeWidth,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('stroke-white dark:stroke-gray-950', onValueChange ? 'cursor-pointer' : '', (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getColorClassName"])(categoryColors.get(dataKey), 'fill'))
                                    }, index, false, {
                                        fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
                                        lineNumber: 808,
                                        columnNumber: 41
                                    }, void 0);
                                }
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {}, index, false, {
                                    fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
                                    lineNumber: 831,
                                    columnNumber: 40
                                }, void 0);
                            },
                            name: category,
                            type: "linear",
                            dataKey: category,
                            stroke: "",
                            strokeWidth: 2,
                            strokeLinejoin: "round",
                            strokeLinecap: "round",
                            isAnimationActive: false,
                            connectNulls: connectNulls
                        }, category, false, {
                            fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
                            lineNumber: 743,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))),
                    onValueChange ? categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('cursor-pointer'),
                            strokeOpacity: 0,
                            name: category,
                            type: "linear",
                            dataKey: category,
                            stroke: "transparent",
                            fill: "transparent",
                            legendType: "none",
                            tooltipType: "none",
                            strokeWidth: 12,
                            connectNulls: connectNulls,
                            onClick: (props, event)=>{
                                event.stopPropagation();
                                const { name } = props;
                                onCategoryClick(name);
                            }
                        }, category, false, {
                            fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
                            lineNumber: 848,
                            columnNumber: 31
                        }, ("TURBOPACK compile-time value", void 0))) : null
                ]
            }, void 0, true, {
                fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
                lineNumber: 582,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
            lineNumber: 581,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/metrics-dashboard/components/LineChart.tsx",
        lineNumber: 575,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
});
LineChart.displayName = 'LineChart';
;
}),
"[project]/metrics-dashboard/components/ChartTooltip.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChartTooltip",
    ()=>ChartTooltip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function ChartTooltip({ active, payload, label }) {
    if (!active || !payload || payload.length === 0 || !label) return null;
    const data = payload[0].payload;
    const date = new Date(label);
    const formattedDate = date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
    const formattedTime = date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit'
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-lg border border-gray-200 bg-white p-3 shadow-lg dark:border-gray-800 dark:bg-gray-950",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-2 text-sm font-semibold text-gray-900 dark:text-gray-50",
                children: [
                    formattedTime,
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-400",
                        children: formattedDate
                    }, void 0, false, {
                        fileName: "[project]/metrics-dashboard/components/ChartTooltip.tsx",
                        lineNumber: 24,
                        columnNumber: 33
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/metrics-dashboard/components/ChartTooltip.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-600 dark:text-gray-400",
                                children: "Utilization"
                            }, void 0, false, {
                                fileName: "[project]/metrics-dashboard/components/ChartTooltip.tsx",
                                lineNumber: 28,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium text-gray-900 dark:text-gray-50",
                                children: [
                                    data.utilization,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/metrics-dashboard/components/ChartTooltip.tsx",
                                lineNumber: 29,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/metrics-dashboard/components/ChartTooltip.tsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-600 dark:text-gray-400",
                                children: "Temperature"
                            }, void 0, false, {
                                fileName: "[project]/metrics-dashboard/components/ChartTooltip.tsx",
                                lineNumber: 34,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium text-gray-900 dark:text-gray-50",
                                children: [
                                    data.temperature,
                                    "°C"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/metrics-dashboard/components/ChartTooltip.tsx",
                                lineNumber: 35,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/metrics-dashboard/components/ChartTooltip.tsx",
                        lineNumber: 33,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-600 dark:text-gray-400",
                                children: "Memory"
                            }, void 0, false, {
                                fileName: "[project]/metrics-dashboard/components/ChartTooltip.tsx",
                                lineNumber: 40,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium text-gray-900 dark:text-gray-50",
                                children: [
                                    (data.memory_used / 1024).toFixed(1),
                                    " GB"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/metrics-dashboard/components/ChartTooltip.tsx",
                                lineNumber: 41,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/metrics-dashboard/components/ChartTooltip.tsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-600 dark:text-gray-400",
                                children: "Power"
                            }, void 0, false, {
                                fileName: "[project]/metrics-dashboard/components/ChartTooltip.tsx",
                                lineNumber: 47,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium text-gray-900 dark:text-gray-50",
                                children: [
                                    data.power_draw.toFixed(1),
                                    " W"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/metrics-dashboard/components/ChartTooltip.tsx",
                                lineNumber: 48,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/metrics-dashboard/components/ChartTooltip.tsx",
                        lineNumber: 46,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/metrics-dashboard/components/ChartTooltip.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/metrics-dashboard/components/ChartTooltip.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
}),
"[project]/metrics-dashboard/components/UtilLineChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UtilLineChart",
    ()=>UtilLineChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$components$2f$LineChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/components/LineChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$components$2f$ChartTooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/components/ChartTooltip.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function UtilLineChart({ data, timeRange }) {
    const formatXAxis = (timestamp)=>{
        const date = new Date(timestamp);
        if (timeRange === '1h') {
            return date.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit'
            });
        } else if (timeRange === '24h') {
            return date.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit'
            });
        } else {
            return date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$components$2f$LineChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineChart"], {
            className: "h-80 w-full select-none",
            data: data,
            index: "timestamp",
            categories: [
                'utilization'
            ],
            colors: [
                'blue'
            ],
            customTooltip: __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$components$2f$ChartTooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChartTooltip"],
            yAxisWidth: 40,
            xAxisFormatter: formatXAxis,
            tickGap: 30,
            legendPosition: "left"
        }, void 0, false, {
            fileName: "[project]/metrics-dashboard/components/UtilLineChart.tsx",
            lineNumber: 37,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/metrics-dashboard/components/UtilLineChart.tsx",
        lineNumber: 36,
        columnNumber: 9
    }, this);
}
}),
"[project]/metrics-dashboard/components/AreaChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Tremor AreaChart [v1.0.0]
/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s([
    "AreaChart",
    ()=>AreaChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/@remixicon/react/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/recharts/es6/cartesian/Area.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Dot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/recharts/es6/shape/Dot.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Label$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/recharts/es6/component/Label.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/recharts/es6/cartesian/Line.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/recharts/es6/chart/AreaChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/recharts/es6/component/Legend.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/lib/chartUtils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$hooks$2f$useOnWindowResize$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/hooks/useOnWindowResize.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const LegendItem = ({ name, color, onClick, activeLegend })=>{
    const hasOnValueChange = !!onClick;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(// base
        'group inline-flex flex-nowrap items-center gap-1.5 rounded-sm px-2 py-1 whitespace-nowrap transition', hasOnValueChange ? 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800' : 'cursor-default'),
        onClick: (e)=>{
            e.stopPropagation();
            onClick?.(name, color);
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('h-[3px] w-3.5 shrink-0 rounded-full', (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getColorClassName"])(color, 'bg'), activeLegend && activeLegend !== name ? 'opacity-40' : 'opacity-100'),
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
                lineNumber: 59,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(// base
                'truncate text-xs whitespace-nowrap', // text color
                'text-gray-700 dark:text-gray-300', hasOnValueChange && 'group-hover:text-gray-900 dark:group-hover:text-gray-50', activeLegend && activeLegend !== name ? 'opacity-40' : 'opacity-100'),
                children: name
            }, void 0, false, {
                fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
                lineNumber: 67,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
        lineNumber: 46,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const ScrollButton = ({ icon, onClick, disabled })=>{
    const Icon = icon;
    const [isPressed, setIsPressed] = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    const intervalRef = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (isPressed) {
            intervalRef.current = setInterval(()=>{
                onClick?.();
            }, 300);
        } else {
            clearInterval(intervalRef.current);
        }
        return ()=>clearInterval(intervalRef.current);
    }, [
        isPressed,
        onClick
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (disabled) {
            clearInterval(intervalRef.current);
            setIsPressed(false);
        }
    }, [
        disabled
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(// base
        'group inline-flex size-5 items-center truncate rounded-sm transition', disabled ? 'cursor-not-allowed text-gray-400 dark:text-gray-600' : 'cursor-pointer text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-50'),
        disabled: disabled,
        onClick: (e)=>{
            e.stopPropagation();
            onClick?.();
        },
        onMouseDown: (e)=>{
            e.stopPropagation();
            setIsPressed(true);
        },
        onMouseUp: (e)=>{
            e.stopPropagation();
            setIsPressed(false);
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
            className: "size-full",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
            lineNumber: 136,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
        lineNumber: 113,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const Legend = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef((props, ref)=>{
    const { categories, colors = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvailableChartColors"], className, onClickLegendItem, activeLegend, enableLegendSlider = false, ...other } = props;
    const scrollableRef = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const scrollButtonsRef = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const [hasScroll, setHasScroll] = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [isKeyDowned, setIsKeyDowned] = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(null);
    const intervalRef = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const checkScroll = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(()=>{
        const scrollable = scrollableRef?.current;
        if (!scrollable) return;
        const hasLeftScroll = scrollable.scrollLeft > 0;
        const hasRightScroll = scrollable.scrollWidth - scrollable.clientWidth > scrollable.scrollLeft;
        setHasScroll({
            left: hasLeftScroll,
            right: hasRightScroll
        });
    }, [
        setHasScroll
    ]);
    const scrollToTest = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback((direction)=>{
        const element = scrollableRef?.current;
        const scrollButtons = scrollButtonsRef?.current;
        const scrollButtonsWith = scrollButtons?.clientWidth ?? 0;
        const width = element?.clientWidth ?? 0;
        if (element && enableLegendSlider) {
            element.scrollTo({
                left: direction === 'left' ? element.scrollLeft - width + scrollButtonsWith : element.scrollLeft + width - scrollButtonsWith,
                behavior: 'smooth'
            });
            setTimeout(()=>{
                checkScroll();
            }, 400);
        }
    }, [
        enableLegendSlider,
        checkScroll
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        const keyDownHandler = (key)=>{
            if (key === 'ArrowLeft') {
                scrollToTest('left');
            } else if (key === 'ArrowRight') {
                scrollToTest('right');
            }
        };
        if (isKeyDowned) {
            keyDownHandler(isKeyDowned);
            intervalRef.current = setInterval(()=>{
                keyDownHandler(isKeyDowned);
            }, 300);
        } else {
            clearInterval(intervalRef.current);
        }
        return ()=>clearInterval(intervalRef.current);
    }, [
        isKeyDowned,
        scrollToTest
    ]);
    const keyDown = (e)=>{
        e.stopPropagation();
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            e.preventDefault();
            setIsKeyDowned(e.key);
        }
    };
    const keyUp = (e)=>{
        e.stopPropagation();
        setIsKeyDowned(null);
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        const scrollable = scrollableRef?.current;
        if (enableLegendSlider) {
            checkScroll();
            scrollable?.addEventListener('keydown', keyDown);
            scrollable?.addEventListener('keyup', keyUp);
        }
        return ()=>{
            scrollable?.removeEventListener('keydown', keyDown);
            scrollable?.removeEventListener('keyup', keyUp);
        };
    }, [
        checkScroll,
        enableLegendSlider
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('relative overflow-hidden', className),
        ...other,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollableRef,
                tabIndex: 0,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex h-full', enableLegendSlider ? hasScroll?.right || hasScroll?.left ? 'snap-mandatory items-center overflow-auto pr-12 pl-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden' : '' : 'flex-wrap'),
                children: categories.map((category, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LegendItem, {
                        name: category,
                        color: colors[index],
                        onClick: onClickLegendItem,
                        activeLegend: activeLegend
                    }, `item-${index}`, false, {
                        fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
                        lineNumber: 264,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
                lineNumber: 251,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            enableLegendSlider && (hasScroll?.right || hasScroll?.left) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(// base
                    'absolute top-0 right-0 bottom-0 flex h-full items-center justify-center pr-1', // background color
                    'bg-white dark:bg-gray-950'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollButton, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RiArrowLeftSLine"],
                            onClick: ()=>{
                                setIsKeyDowned(null);
                                scrollToTest('left');
                            },
                            disabled: !hasScroll?.left
                        }, void 0, false, {
                            fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
                            lineNumber: 283,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollButton, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f40$remixicon$2f$react$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RiArrowRightSLine"],
                            onClick: ()=>{
                                setIsKeyDowned(null);
                                scrollToTest('right');
                            },
                            disabled: !hasScroll?.right
                        }, void 0, false, {
                            fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
                            lineNumber: 291,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
                    lineNumber: 275,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false) : null
        ]
    }, void 0, true, {
        fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
        lineNumber: 250,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
});
Legend.displayName = 'Legend';
const ChartLegend = ({ payload }, categoryColors, setLegendHeight, activeLegend, onClick, enableLegendSlider, legendPosition, yAxisWidth)=>{
    const legendRef = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$hooks$2f$useOnWindowResize$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOnWindowResize"])(()=>{
        const calculateHeight = (height)=>height ? Number(height) + 15 : 60;
        setLegendHeight(calculateHeight(legendRef.current?.clientHeight));
    });
    const legendPayload = payload.filter((item)=>item.type !== 'none');
    const paddingLeft = legendPosition === 'left' && yAxisWidth ? yAxisWidth - 8 : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: legendRef,
        style: {
            paddingLeft: paddingLeft
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center', {
            'justify-center': legendPosition === 'center'
        }, {
            'justify-start': legendPosition === 'left'
        }, {
            'justify-end': legendPosition === 'right'
        }),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Legend, {
            categories: legendPayload.map((entry)=>entry.value),
            colors: legendPayload.map((entry)=>categoryColors.get(entry.value)),
            onClickLegendItem: onClick,
            activeLegend: activeLegend,
            enableLegendSlider: enableLegendSlider
        }, void 0, false, {
            fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
            lineNumber: 340,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
        lineNumber: 330,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const ChartTooltip = ({ active, payload, label, valueFormatter })=>{
    if (active && payload && payload.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(// base
            'rounded-md border text-sm shadow-md', // border color
            'border-gray-200 dark:border-gray-800', // background color
            'bg-white dark:bg-gray-950'),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('border-b border-inherit px-4 py-2'),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(// base
                        'font-medium', // text color
                        'text-gray-900 dark:text-gray-50'),
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
                        lineNumber: 385,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
                    lineNumber: 384,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('space-y-1 px-4 py-2'),
                    children: payload.map(({ value, category, color }, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between space-x-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "aria-hidden": "true",
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('h-[3px] w-3.5 shrink-0 rounded-full', (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getColorClassName"])(color, 'bg'))
                                        }, void 0, false, {
                                            fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
                                            lineNumber: 403,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(// base
                                            'text-right whitespace-nowrap', // text color
                                            'text-gray-700 dark:text-gray-300'),
                                            children: category
                                        }, void 0, false, {
                                            fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
                                            lineNumber: 410,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
                                    lineNumber: 402,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(// base
                                    'text-right font-medium whitespace-nowrap tabular-nums', // text color
                                    'text-gray-900 dark:text-gray-50'),
                                    children: valueFormatter(value)
                                }, void 0, false, {
                                    fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
                                    lineNumber: 421,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, `id-${index}`, true, {
                            fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
                            lineNumber: 398,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
                    lineNumber: 396,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
            lineNumber: 374,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    return null;
};
const AreaChart = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef((props, ref)=>{
    const { data = [], categories = [], index, colors = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvailableChartColors"], valueFormatter = (value)=>value.toString(), startEndOnly = false, showXAxis = true, showYAxis = true, showGridLines = true, yAxisWidth = 56, xAxisFormatter, intervalType = 'equidistantPreserveStart', showTooltip = true, showLegend = true, autoMinValue = false, minValue, maxValue, allowDecimals = true, connectNulls = false, className, onValueChange, enableLegendSlider = false, tickGap = 5, xAxisLabel, yAxisLabel, type = 'default', legendPosition = 'right', fill = 'gradient', tooltipCallback, customTooltip, ...other } = props;
    const CustomTooltip = customTooltip;
    const paddingValue = !showXAxis && !showYAxis || startEndOnly && !showYAxis ? 0 : 20;
    const [legendHeight, setLegendHeight] = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(60);
    const [activeDot, setActiveDot] = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(undefined);
    const [activeLegend, setActiveLegend] = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(undefined);
    const categoryColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructCategoryColors"])(categories, colors);
    const yAxisDomain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYAxisDomain"])(autoMinValue, minValue, maxValue);
    const hasOnValueChange = !!onValueChange;
    const stacked = type === 'stacked' || type === 'percent';
    const areaId = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useId();
    const prevActiveRef = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(undefined);
    const prevLabelRef = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(undefined);
    const getFillContent = ({ fillType, activeDot, activeLegend, category })=>{
        const stopOpacity = activeDot || activeLegend && activeLegend !== category ? 0.1 : 0.3;
        switch(fillType){
            case 'none':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                    stopColor: "currentColor",
                    stopOpacity: 0
                }, void 0, false, {
                    fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
                    lineNumber: 551,
                    columnNumber: 24
                }, ("TURBOPACK compile-time value", void 0));
            case 'gradient':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "5%",
                            stopColor: "currentColor",
                            stopOpacity: stopOpacity
                        }, void 0, false, {
                            fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
                            lineNumber: 555,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "95%",
                            stopColor: "currentColor",
                            stopOpacity: 0
                        }, void 0, false, {
                            fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
                            lineNumber: 556,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true);
            case 'solid':
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                    stopColor: "currentColor",
                    stopOpacity: stopOpacity
                }, void 0, false, {
                    fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
                    lineNumber: 561,
                    columnNumber: 24
                }, ("TURBOPACK compile-time value", void 0));
        }
    };
    function valueToPercent(value) {
        return `${(value * 100).toFixed(0)}%`;
    }
    function onDotClick(itemData, event) {
        event.stopPropagation();
        if (!hasOnValueChange) return;
        if (itemData.index === activeDot?.index && itemData.dataKey === activeDot?.dataKey || (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOnlyOneValueForKey"])(data, itemData.dataKey) && activeLegend && activeLegend === itemData.dataKey) {
            setActiveLegend(undefined);
            setActiveDot(undefined);
            onValueChange?.(null);
        } else {
            setActiveLegend(itemData.dataKey);
            setActiveDot({
                index: itemData.index,
                dataKey: itemData.dataKey
            });
            onValueChange?.({
                eventType: 'dot',
                categoryClicked: itemData.dataKey,
                ...itemData.payload
            });
        }
    }
    function onCategoryClick(dataKey) {
        if (!hasOnValueChange) return;
        if (dataKey === activeLegend && !activeDot || (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOnlyOneValueForKey"])(data, dataKey) && activeDot && activeDot.dataKey === dataKey) {
            setActiveLegend(undefined);
            onValueChange?.(null);
        } else {
            setActiveLegend(dataKey);
            onValueChange?.({
                eventType: 'category',
                categoryClicked: dataKey
            });
        }
        setActiveDot(undefined);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('h-80 w-full **:outline-none', className),
        "tremor-id": "tremor-raw",
        ...other,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            height: 340,
            minWidth: 0,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AreaChart"], {
                data: data,
                onClick: hasOnValueChange && (activeLegend || activeDot) ? ()=>{
                    setActiveDot(undefined);
                    setActiveLegend(undefined);
                    onValueChange?.(null);
                } : undefined,
                margin: {
                    bottom: xAxisLabel ? 30 : undefined,
                    left: yAxisLabel ? 20 : undefined,
                    right: yAxisLabel ? 5 : undefined,
                    top: 5
                },
                stackOffset: type === 'percent' ? 'expand' : undefined,
                children: [
                    showGridLines ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('stroke-gray-200 stroke-1 dark:stroke-gray-800'),
                        horizontal: true,
                        vertical: false
                    }, void 0, false, {
                        fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
                        lineNumber: 642,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                        padding: {
                            left: paddingValue,
                            right: paddingValue
                        },
                        hide: !showXAxis,
                        dataKey: index,
                        interval: startEndOnly ? 'preserveStartEnd' : intervalType,
                        tick: {
                            transform: 'translate(0, 6)',
                            fill: '#6b7280'
                        },
                        ticks: startEndOnly ? [
                            data[0][index],
                            data[data.length - 1][index]
                        ] : undefined,
                        tickFormatter: xAxisFormatter,
                        fill: "",
                        stroke: "",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(// base
                        'text-xs', // text fill
                        'fill-gray-500 dark:fill-gray-500'),
                        tickLine: false,
                        axisLine: false,
                        minTickGap: tickGap,
                        children: xAxisLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Label$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                            position: "insideBottom",
                            offset: -20,
                            className: "fill-gray-800 text-sm font-medium dark:fill-gray-200",
                            children: xAxisLabel
                        }, void 0, false, {
                            fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
                            lineNumber: 673,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
                        lineNumber: 648,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                        width: yAxisWidth,
                        hide: !showYAxis,
                        axisLine: false,
                        tickLine: false,
                        type: "number",
                        domain: yAxisDomain,
                        tick: {
                            transform: 'translate(-3, 0)',
                            fill: '#6b7280'
                        },
                        fill: "",
                        stroke: "",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(// base
                        'text-xs', // text fill
                        'fill-gray-500 dark:fill-gray-500'),
                        tickFormatter: type === 'percent' ? valueToPercent : valueFormatter,
                        allowDecimals: allowDecimals,
                        children: yAxisLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Label$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                            position: "insideLeft",
                            style: {
                                textAnchor: 'middle'
                            },
                            angle: -90,
                            offset: -15,
                            className: "fill-gray-800 text-sm font-medium dark:fill-gray-200",
                            children: yAxisLabel
                        }, void 0, false, {
                            fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
                            lineNumber: 702,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
                        lineNumber: 682,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                        wrapperStyle: {
                            outline: 'none'
                        },
                        isAnimationActive: true,
                        animationDuration: 100,
                        cursor: {
                            stroke: '#d1d5db',
                            strokeWidth: 1
                        },
                        offset: 20,
                        position: {
                            y: 0
                        },
                        content: ({ active, payload, label })=>{
                            const cleanPayload = payload ? payload.map((item)=>({
                                    category: item.dataKey,
                                    value: item.value,
                                    index: item.payload[index],
                                    color: categoryColors.get(item.dataKey),
                                    type: item.type,
                                    payload: item.payload
                                })) : [];
                            if (tooltipCallback && (active !== prevActiveRef.current || label !== prevLabelRef.current)) {
                                tooltipCallback({
                                    active,
                                    payload: cleanPayload,
                                    label
                                });
                                prevActiveRef.current = active;
                                prevLabelRef.current = label;
                            }
                            return showTooltip && active ? CustomTooltip ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTooltip, {
                                active: active,
                                payload: cleanPayload,
                                label: label
                            }, void 0, false, {
                                fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
                                lineNumber: 745,
                                columnNumber: 37
                            }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartTooltip, {
                                active: active,
                                payload: cleanPayload,
                                label: label,
                                valueFormatter: valueFormatter
                            }, void 0, false, {
                                fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
                                lineNumber: 751,
                                columnNumber: 37
                            }, void 0) : null;
                        }
                    }, void 0, false, {
                        fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
                        lineNumber: 713,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    showLegend ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Legend"], {
                        verticalAlign: "top",
                        height: legendHeight,
                        content: ({ payload })=>ChartLegend({
                                payload
                            }, categoryColors, setLegendHeight, activeLegend, hasOnValueChange ? (clickedLegendItem)=>onCategoryClick(clickedLegendItem) : undefined, enableLegendSlider, legendPosition, yAxisWidth)
                    }, void 0, false, {
                        fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
                        lineNumber: 763,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)) : null,
                    categories.map((category)=>{
                        const categoryId = `${areaId}-${category.replace(/[^a-zA-Z0-9]/g, '')}`;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getColorClassName"])(categoryColors.get(category), 'text')),
                                        id: categoryId,
                                        x1: "0",
                                        y1: "0",
                                        x2: "0",
                                        y2: "1",
                                        children: getFillContent({
                                            fillType: fill,
                                            activeDot: activeDot,
                                            activeLegend: activeLegend,
                                            category: category
                                        })
                                    }, category, false, {
                                        fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
                                        lineNumber: 788,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, category, false, {
                                    fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
                                    lineNumber: 787,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Area"], {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getColorClassName"])(categoryColors.get(category), 'stroke')),
                                    strokeOpacity: activeDot || activeLegend && activeLegend !== category ? 0.3 : 1,
                                    activeDot: (props)=>{
                                        const { cx: cxCoord, cy: cyCoord, stroke, strokeLinecap, strokeLinejoin, strokeWidth, dataKey } = props;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Dot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dot"], {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('stroke-white dark:stroke-gray-950', onValueChange ? 'cursor-pointer' : '', (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getColorClassName"])(categoryColors.get(dataKey), 'fill')),
                                            cx: cxCoord,
                                            cy: cyCoord,
                                            r: 5,
                                            fill: "",
                                            stroke: stroke,
                                            strokeLinecap: strokeLinecap,
                                            strokeLinejoin: strokeLinejoin,
                                            strokeWidth: strokeWidth,
                                            onClick: (_, event)=>onDotClick(props, event)
                                        }, void 0, false, {
                                            fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
                                            lineNumber: 837,
                                            columnNumber: 45
                                        }, void 0);
                                    },
                                    dot: (props)=>{
                                        const { stroke, strokeLinecap, strokeLinejoin, strokeWidth, cx: cxCoord, cy: cyCoord, dataKey, index } = props;
                                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasOnlyOneValueForKey"])(data, category) && !(activeDot || activeLegend && activeLegend !== category) || activeDot?.index === index && activeDot?.dataKey === category) {
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Dot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dot"], {
                                                cx: cxCoord,
                                                cy: cyCoord,
                                                r: 5,
                                                stroke: stroke,
                                                fill: "",
                                                strokeLinecap: strokeLinecap,
                                                strokeLinejoin: strokeLinejoin,
                                                strokeWidth: strokeWidth,
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('stroke-white dark:stroke-gray-950', onValueChange ? 'cursor-pointer' : '', (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getColorClassName"])(categoryColors.get(dataKey), 'fill'))
                                            }, index, false, {
                                                fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
                                                lineNumber: 882,
                                                columnNumber: 49
                                            }, void 0);
                                        }
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {}, index, false, {
                                            fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
                                            lineNumber: 905,
                                            columnNumber: 48
                                        }, void 0);
                                    },
                                    name: category,
                                    type: "linear",
                                    dataKey: category,
                                    stroke: "",
                                    strokeWidth: 2,
                                    strokeLinejoin: "round",
                                    strokeLinecap: "round",
                                    isAnimationActive: false,
                                    connectNulls: connectNulls,
                                    stackId: stacked ? 'stack' : undefined,
                                    fill: `url(#${categoryId})`
                                }, `hidden-${category}`, false, {
                                    fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
                                    lineNumber: 812,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, category, true, {
                            fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
                            lineNumber: 786,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0));
                    }),
                    onValueChange ? categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('cursor-pointer'),
                            strokeOpacity: 0,
                            name: category,
                            type: "linear",
                            dataKey: category,
                            stroke: "transparent",
                            fill: "transparent",
                            legendType: "none",
                            tooltipType: "none",
                            strokeWidth: 12,
                            connectNulls: connectNulls,
                            onClick: (props, event)=>{
                                event.stopPropagation();
                                const { name } = props;
                                onCategoryClick(name);
                            }
                        }, `hidden-${category}`, false, {
                            fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
                            lineNumber: 926,
                            columnNumber: 31
                        }, ("TURBOPACK compile-time value", void 0))) : null
                ]
            }, void 0, true, {
                fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
                lineNumber: 622,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
            lineNumber: 621,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/metrics-dashboard/components/AreaChart.tsx",
        lineNumber: 615,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
});
AreaChart.displayName = 'AreaChart';
;
}),
"[project]/metrics-dashboard/components/TempAreaChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TempAreaChart",
    ()=>TempAreaChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$components$2f$AreaChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/components/AreaChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$components$2f$ChartTooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/components/ChartTooltip.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function TempAreaChart({ data, timeRange }) {
    const formatXAxis = (timestamp)=>{
        const date = new Date(timestamp);
        if (timeRange === '1h') {
            return date.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit'
            });
        } else if (timeRange === '24h') {
            return date.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit'
            });
        } else {
            return date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$components$2f$AreaChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AreaChart"], {
            className: "h-80 w-full select-none",
            data: data,
            index: "timestamp",
            categories: [
                'temperature'
            ],
            colors: [
                'pink'
            ],
            customTooltip: __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$components$2f$ChartTooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChartTooltip"],
            yAxisWidth: 40,
            xAxisFormatter: formatXAxis,
            tickGap: 30,
            legendPosition: "left"
        }, void 0, false, {
            fileName: "[project]/metrics-dashboard/components/TempAreaChart.tsx",
            lineNumber: 36,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/metrics-dashboard/components/TempAreaChart.tsx",
        lineNumber: 35,
        columnNumber: 9
    }, this);
}
}),
"[project]/metrics-dashboard/components/DonutChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Tremor DonutChart [v1.0.0]
/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s([
    "DonutChart",
    ()=>DonutChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/recharts/es6/polar/Pie.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/recharts/es6/chart/PieChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Sector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/recharts/es6/shape/Sector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/lib/chartUtils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const sumNumericArray = (arr)=>arr.reduce((sum, num)=>sum + num, 0);
const parseData = (data, categoryColors, category)=>data.map((dataPoint)=>({
            ...dataPoint,
            color: categoryColors.get(dataPoint[category]) || __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvailableChartColors"][0],
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getColorClassName"])(categoryColors.get(dataPoint[category]) || __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvailableChartColors"][0], 'fill')
        }));
const calculateDefaultLabel = (data, valueKey)=>sumNumericArray(data.map((dataPoint)=>dataPoint[valueKey]));
const parseLabelInput = (labelInput, valueFormatter, data, valueKey)=>labelInput || valueFormatter(calculateDefaultLabel(data, valueKey));
const ChartTooltip = ({ active, payload, valueFormatter })=>{
    if (active && payload && payload.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(// base
            'rounded-md border text-sm shadow-md', // border color
            'border-gray-200 dark:border-gray-800', // background color
            'bg-white dark:bg-gray-950'),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('space-y-1 px-4 py-2'),
                children: payload.map(({ value, category, color }, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between space-x-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('size-2 shrink-0 rounded-full', (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getColorClassName"])(color, 'bg'))
                                    }, void 0, false, {
                                        fileName: "[project]/metrics-dashboard/components/DonutChart.tsx",
                                        lineNumber: 85,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(// base
                                        'text-right whitespace-nowrap', // text color
                                        'text-gray-700 dark:text-gray-300'),
                                        children: category
                                    }, void 0, false, {
                                        fileName: "[project]/metrics-dashboard/components/DonutChart.tsx",
                                        lineNumber: 92,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/metrics-dashboard/components/DonutChart.tsx",
                                lineNumber: 84,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(// base
                                'text-right font-medium whitespace-nowrap tabular-nums', // text color
                                'text-gray-900 dark:text-gray-50'),
                                children: valueFormatter(value)
                            }, void 0, false, {
                                fileName: "[project]/metrics-dashboard/components/DonutChart.tsx",
                                lineNumber: 103,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, `id-${index}`, true, {
                        fileName: "[project]/metrics-dashboard/components/DonutChart.tsx",
                        lineNumber: 80,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/metrics-dashboard/components/DonutChart.tsx",
                lineNumber: 78,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/metrics-dashboard/components/DonutChart.tsx",
            lineNumber: 68,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    return null;
};
const renderInactiveShape = (props)=>{
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, className } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Sector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sector"], {
        cx: cx,
        cy: cy,
        innerRadius: innerRadius,
        outerRadius: outerRadius,
        startAngle: startAngle,
        endAngle: endAngle,
        className: className,
        fill: "",
        opacity: 0.3,
        style: {
            outline: 'none'
        }
    }, void 0, false, {
        fileName: "[project]/metrics-dashboard/components/DonutChart.tsx",
        lineNumber: 126,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const DonutChart = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(({ data = [], value, category, colors = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvailableChartColors"], variant = 'donut', valueFormatter = (value)=>value.toString(), label, showLabel = false, showTooltip = true, onValueChange, tooltipCallback, customTooltip, className, ...other }, forwardedRef)=>{
    const CustomTooltip = customTooltip;
    const [activeIndex, setActiveIndex] = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(undefined);
    const isDonut = variant === 'donut';
    const parsedLabelInput = parseLabelInput(label, valueFormatter, data, value);
    const categories = Array.from(new Set(data.map((item)=>item[category])));
    const categoryColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructCategoryColors"])(categories, colors);
    const prevActiveRef = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(undefined);
    const prevCategoryRef = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(undefined);
    const handleShapeClick = (data, index, event)=>{
        event.stopPropagation();
        if (!onValueChange) return;
        if (activeIndex === index) {
            setActiveIndex(undefined);
            onValueChange(null);
        } else {
            setActiveIndex(index);
            onValueChange({
                eventType: 'sector',
                categoryClicked: data.payload[category],
                ...data.payload
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: forwardedRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('h-40 w-40', className),
        "tremor-id": "tremor-raw",
        ...other,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            height: 160,
            minWidth: 0,
            className: "size-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PieChart"], {
                onClick: onValueChange && activeIndex !== undefined ? ()=>{
                    setActiveIndex(undefined);
                    onValueChange(null);
                } : undefined,
                margin: {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                },
                children: [
                    showLabel && isDonut && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        className: "fill-gray-700 dark:fill-gray-300",
                        x: "50%",
                        y: "50%",
                        textAnchor: "middle",
                        dominantBaseline: "middle",
                        children: parsedLabelInput
                    }, void 0, false, {
                        fileName: "[project]/metrics-dashboard/components/DonutChart.tsx",
                        lineNumber: 234,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Pie"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('stroke-white dark:stroke-gray-950 [&_.recharts-pie-sector]:outline-hidden', onValueChange ? 'cursor-pointer' : 'cursor-default'),
                        data: parseData(data, categoryColors, category),
                        cx: "50%",
                        cy: "50%",
                        startAngle: 90,
                        endAngle: -270,
                        innerRadius: isDonut ? '75%' : '0%',
                        outerRadius: "100%",
                        stroke: "",
                        strokeLinejoin: "round",
                        dataKey: value,
                        nameKey: category,
                        isAnimationActive: false,
                        onClick: handleShapeClick,
                        inactiveShape: renderInactiveShape,
                        style: {
                            outline: 'none'
                        }
                    }, void 0, false, {
                        fileName: "[project]/metrics-dashboard/components/DonutChart.tsx",
                        lineNumber: 244,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    showTooltip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                        wrapperStyle: {
                            outline: 'none'
                        },
                        isAnimationActive: false,
                        content: ({ active, payload })=>{
                            const cleanPayload = payload ? payload.map((item)=>({
                                    category: item.payload[category],
                                    value: item.value,
                                    color: categoryColors.get(item.payload[category])
                                })) : [];
                            const payloadCategory = cleanPayload[0]?.category;
                            if (tooltipCallback && (active !== prevActiveRef.current || payloadCategory !== prevCategoryRef.current)) {
                                tooltipCallback({
                                    active,
                                    payload: cleanPayload
                                });
                                prevActiveRef.current = active;
                                prevCategoryRef.current = payloadCategory;
                            }
                            return showTooltip && active ? CustomTooltip ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTooltip, {
                                active: active,
                                payload: cleanPayload
                            }, void 0, false, {
                                fileName: "[project]/metrics-dashboard/components/DonutChart.tsx",
                                lineNumber: 297,
                                columnNumber: 45
                            }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartTooltip, {
                                active: active,
                                payload: cleanPayload,
                                valueFormatter: valueFormatter
                            }, void 0, false, {
                                fileName: "[project]/metrics-dashboard/components/DonutChart.tsx",
                                lineNumber: 299,
                                columnNumber: 45
                            }, void 0) : null;
                        }
                    }, void 0, false, {
                        fileName: "[project]/metrics-dashboard/components/DonutChart.tsx",
                        lineNumber: 266,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/metrics-dashboard/components/DonutChart.tsx",
                lineNumber: 222,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/metrics-dashboard/components/DonutChart.tsx",
            lineNumber: 221,
            columnNumber: 17
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/metrics-dashboard/components/DonutChart.tsx",
        lineNumber: 215,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0));
});
DonutChart.displayName = 'DonutChart';
;
}),
"[project]/metrics-dashboard/components/MemoryDonutChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MemoryDonutChart",
    ()=>MemoryDonutChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$components$2f$DonutChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/components/DonutChart.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function MemoryDonutChart({ metric }) {
    const data = [
        {
            name: 'Used',
            value: metric.memory_used
        },
        {
            name: 'Free',
            value: metric.memory_total - metric.memory_used
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-8a",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$components$2f$DonutChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DonutChart"], {
                className: "h-40 w-40",
                data: data,
                value: "value",
                category: "name",
                // variant='pie'
                label: "VRAM",
                showLabel: true,
                colors: [
                    'blue',
                    'pink'
                ],
                valueFormatter: (value)=>`${(value / 1024).toFixed(1)} GB`
            }, void 0, false, {
                fileName: "[project]/metrics-dashboard/components/MemoryDonutChart.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 text-center"
            }, void 0, false, {
                fileName: "[project]/metrics-dashboard/components/MemoryDonutChart.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-400",
                children: [
                    (metric.memory_used / 1024).toFixed(1),
                    " GB /",
                    (metric.memory_total / 1024).toFixed(0),
                    " GB"
                ]
            }, void 0, true, {
                fileName: "[project]/metrics-dashboard/components/MemoryDonutChart.tsx",
                lineNumber: 33,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/metrics-dashboard/components/MemoryDonutChart.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
}
}),
"[project]/metrics-dashboard/components/SparkChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Tremor Spark Chart [v1.0.0]
/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s([
    "SparkAreaChart",
    ()=>SparkAreaChart,
    "SparkBarChart",
    ()=>SparkBarChart,
    "SparkLineChart",
    ()=>SparkLineChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/recharts/es6/cartesian/Area.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/recharts/es6/cartesian/Bar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/recharts/es6/cartesian/Line.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/recharts/es6/chart/AreaChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/recharts/es6/chart/BarChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/recharts/es6/chart/LineChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/lib/chartUtils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const SparkAreaChart = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef((props, forwardedRef)=>{
    const { data = [], categories = [], index, colors = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvailableChartColors"], autoMinValue = false, minValue, maxValue, connectNulls = false, type = 'default', className, fill = 'gradient', ...other } = props;
    const categoryColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructCategoryColors"])(categories, colors);
    const yAxisDomain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYAxisDomain"])(autoMinValue, minValue, maxValue);
    const stacked = type === 'stacked' || type === 'percent';
    const areaId = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useId();
    const getFillContent = (fillType)=>{
        switch(fillType){
            case 'none':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                    stopColor: "currentColor",
                    stopOpacity: 0
                }, void 0, false, {
                    fileName: "[project]/metrics-dashboard/components/SparkChart.tsx",
                    lineNumber: 69,
                    columnNumber: 28
                }, ("TURBOPACK compile-time value", void 0));
            case 'gradient':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "5%",
                            stopColor: "currentColor",
                            stopOpacity: 0.4
                        }, void 0, false, {
                            fileName: "[project]/metrics-dashboard/components/SparkChart.tsx",
                            lineNumber: 73,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "95%",
                            stopColor: "currentColor",
                            stopOpacity: 0
                        }, void 0, false, {
                            fileName: "[project]/metrics-dashboard/components/SparkChart.tsx",
                            lineNumber: 74,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true);
            case 'solid':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                    stopColor: "currentColor",
                    stopOpacity: 0.3
                }, void 0, false, {
                    fileName: "[project]/metrics-dashboard/components/SparkChart.tsx",
                    lineNumber: 78,
                    columnNumber: 28
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                    stopColor: "currentColor",
                    stopOpacity: 0.3
                }, void 0, false, {
                    fileName: "[project]/metrics-dashboard/components/SparkChart.tsx",
                    lineNumber: 80,
                    columnNumber: 28
                }, ("TURBOPACK compile-time value", void 0));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: forwardedRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('h-12 w-28 **:outline-none', className),
        "tremor-id": "tremor-raw",
        ...other,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            height: 100,
            width: 120,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AreaChart"], {
                data: data,
                margin: {
                    bottom: 1,
                    left: 1,
                    right: 1,
                    top: 1
                },
                stackOffset: type === 'percent' ? 'expand' : undefined,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                        hide: true,
                        dataKey: index
                    }, void 0, false, {
                        fileName: "[project]/metrics-dashboard/components/SparkChart.tsx",
                        lineNumber: 102,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                        hide: true,
                        domain: yAxisDomain
                    }, void 0, false, {
                        fileName: "[project]/metrics-dashboard/components/SparkChart.tsx",
                        lineNumber: 103,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    categories.map((category)=>{
                        const categoryId = `${areaId}-${category.replace(/[^a-zA-Z0-9]/g, '')}`;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getColorClassName"])(categoryColors.get(category), 'text')),
                                        id: categoryId,
                                        x1: "0",
                                        y1: "0",
                                        x2: "0",
                                        y2: "1",
                                        children: getFillContent(fill)
                                    }, category, false, {
                                        fileName: "[project]/metrics-dashboard/components/SparkChart.tsx",
                                        lineNumber: 110,
                                        columnNumber: 41
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/metrics-dashboard/components/SparkChart.tsx",
                                    lineNumber: 109,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Area"], {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getColorClassName"])(categoryColors.get(category), 'stroke')),
                                    dot: false,
                                    strokeOpacity: 1,
                                    name: category,
                                    type: "linear",
                                    dataKey: category,
                                    stroke: "",
                                    strokeWidth: 2,
                                    strokeLinejoin: "round",
                                    strokeLinecap: "round",
                                    isAnimationActive: false,
                                    connectNulls: connectNulls,
                                    stackId: stacked ? 'stack' : undefined,
                                    fill: `url(#${categoryId})`
                                }, void 0, false, {
                                    fileName: "[project]/metrics-dashboard/components/SparkChart.tsx",
                                    lineNumber: 129,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, category, true, {
                            fileName: "[project]/metrics-dashboard/components/SparkChart.tsx",
                            lineNumber: 108,
                            columnNumber: 33
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/metrics-dashboard/components/SparkChart.tsx",
                lineNumber: 92,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/metrics-dashboard/components/SparkChart.tsx",
            lineNumber: 91,
            columnNumber: 17
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/metrics-dashboard/components/SparkChart.tsx",
        lineNumber: 85,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0));
});
SparkAreaChart.displayName = 'SparkAreaChart';
const SparkLineChart = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef((props, forwardedRef)=>{
    const { data = [], categories = [], index, colors = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvailableChartColors"], autoMinValue = false, minValue, maxValue, connectNulls = false, className, ...other } = props;
    const categoryColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructCategoryColors"])(categories, colors);
    const yAxisDomain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYAxisDomain"])(autoMinValue, minValue, maxValue);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: forwardedRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('h-12 w-28', className),
        "tremor-id": "tremor-raw",
        ...other,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineChart"], {
                data: data,
                margin: {
                    bottom: 1,
                    left: 1,
                    right: 1,
                    top: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                        hide: true,
                        dataKey: index
                    }, void 0, false, {
                        fileName: "[project]/metrics-dashboard/components/SparkChart.tsx",
                        lineNumber: 212,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                        hide: true,
                        domain: yAxisDomain
                    }, void 0, false, {
                        fileName: "[project]/metrics-dashboard/components/SparkChart.tsx",
                        lineNumber: 213,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getColorClassName"])(categoryColors.get(category), 'stroke')),
                            dot: false,
                            strokeOpacity: 1,
                            name: category,
                            type: "linear",
                            dataKey: category,
                            stroke: "",
                            strokeWidth: 2,
                            strokeLinejoin: "round",
                            strokeLinecap: "round",
                            isAnimationActive: false,
                            connectNulls: connectNulls
                        }, category, false, {
                            fileName: "[project]/metrics-dashboard/components/SparkChart.tsx",
                            lineNumber: 215,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/metrics-dashboard/components/SparkChart.tsx",
                lineNumber: 203,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/metrics-dashboard/components/SparkChart.tsx",
            lineNumber: 202,
            columnNumber: 17
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/metrics-dashboard/components/SparkChart.tsx",
        lineNumber: 196,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0));
});
SparkLineChart.displayName = 'SparkLineChart';
const SparkBarChart = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef((props, forwardedRef)=>{
    const { data = [], categories = [], index, colors = __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvailableChartColors"], autoMinValue = false, minValue, maxValue, barCategoryGap, type = 'default', className, ...other } = props;
    const categoryColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["constructCategoryColors"])(categories, colors);
    const yAxisDomain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYAxisDomain"])(autoMinValue, minValue, maxValue);
    const stacked = type === 'stacked' || type === 'percent';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: forwardedRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('h-12 w-28', className),
        "tremor-id": "tremor-raw",
        ...other,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarChart"], {
                data: data,
                margin: {
                    bottom: 1,
                    left: 1,
                    right: 1,
                    top: 1
                },
                stackOffset: type === 'percent' ? 'expand' : undefined,
                barCategoryGap: barCategoryGap,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                        hide: true,
                        dataKey: index
                    }, void 0, false, {
                        fileName: "[project]/metrics-dashboard/components/SparkChart.tsx",
                        lineNumber: 298,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                        hide: true,
                        domain: yAxisDomain
                    }, void 0, false, {
                        fileName: "[project]/metrics-dashboard/components/SparkChart.tsx",
                        lineNumber: 299,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$lib$2f$chartUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getColorClassName"])(categoryColors.get(category), 'fill')),
                            name: category,
                            type: "linear",
                            dataKey: category,
                            stackId: stacked ? 'stack' : undefined,
                            isAnimationActive: false,
                            fill: ""
                        }, category, false, {
                            fileName: "[project]/metrics-dashboard/components/SparkChart.tsx",
                            lineNumber: 302,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/metrics-dashboard/components/SparkChart.tsx",
                lineNumber: 287,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/metrics-dashboard/components/SparkChart.tsx",
            lineNumber: 286,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/metrics-dashboard/components/SparkChart.tsx",
        lineNumber: 280,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
});
SparkBarChart.displayName = 'SparkBarChart';
;
}),
"[project]/metrics-dashboard/components/Metrics.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Metrics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$app$2f$api$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/app/api/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dot$3e$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/lucide-react/dist/esm/icons/dot.js [app-ssr] (ecmascript) <export default as Dot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/lucide-react/dist/esm/icons/pause.js [app-ssr] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$components$2f$animate$2d$ui$2f$components$2f$buttons$2f$liquid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/components/animate-ui/components/buttons/liquid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$components$2f$UtilLineChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/components/UtilLineChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$components$2f$TempAreaChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/components/TempAreaChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$components$2f$MemoryDonutChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/components/MemoryDonutChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$components$2f$SparkChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/components/SparkChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
const GPU_STOPPED = process.env.NEXT_PUBLIC_GPU_STOPPED;
function Metrics({ metric, initialWorkloadStatus }) {
    const [workloadStatus, setWorkloadStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialWorkloadStatus);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedRange, setSelectedRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('1h');
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoadingHistory, setIsLoadingHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function fetchHistory() {
            setIsLoadingHistory(true);
            try {
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$app$2f$api$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMetricsHistory"])(selectedRange);
                setHistory(data);
            } catch (error) {
                console.error('Failed to fetch history:', error);
            } finally{
                setIsLoadingHistory(false);
            }
        }
        fetchHistory();
    }, [
        selectedRange
    ]);
    const handleWorkloadToggle = async ()=>{
        setIsLoading(true);
        try {
            if (workloadStatus.status === 'running') {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$app$2f$api$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stopWorkload"])();
                setWorkloadStatus(result);
            } else {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$app$2f$api$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startWorkload"])();
                setWorkloadStatus(result);
            }
        } catch (error) {
            console.error('Failed to toggle workload:', error);
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.2,
            ease: 'easeOut',
            delay: 0.8
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 md:grid-rows-4 lg:grid-cols-[370px_1fr_1fr] lg:grid-rows-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row-span-2 grid",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-80 w-full flex-col justify-between rounded-md border bg-[#1A1A1A] p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-2xl text-cyan-400",
                                                    children: "Status:"
                                                }, void 0, false, {
                                                    fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: workloadStatus.status === 'running' ? 'success' : 'default',
                                                    children: workloadStatus.status === 'running' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-center pl-2",
                                                        children: [
                                                            "Running ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dot$3e$__["Dot"], {
                                                                className: "m-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                                                lineNumber: 83,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 41
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            "Paused ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                                                size: 11
                                                            }, void 0, false, {
                                                                fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                                                lineNumber: 87,
                                                                columnNumber: 52
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                            lineNumber: 74,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-16 text-gray-400",
                                            children: [
                                                "GPU Type: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-cyan-400",
                                                    children: metric.gpu_type
                                                }, void 0, false, {
                                                    fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 43
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                            lineNumber: 92,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 text-gray-400",
                                            children: [
                                                "Model: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-cyan-400",
                                                    children: metric.model
                                                }, void 0, false, {
                                                    fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 40
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                            lineNumber: 95,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                    lineNumber: 73,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end",
                                    children: GPU_STOPPED ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "justify-end rounded-lg bg-gray-800 p-4 text-xs text-gray-400",
                                        children: "GPU paused. Displaying historical data. Contact stefanleoussis@gmail.com for live demo."
                                    }, void 0, false, {
                                        fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                        lineNumber: 101,
                                        columnNumber: 33
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$components$2f$animate$2d$ui$2f$components$2f$buttons$2f$liquid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LiquidButton"], {
                                        variant: workloadStatus.status === 'running' ? 'pause' : 'default',
                                        onClick: handleWorkloadToggle,
                                        disabled: isLoading,
                                        children: isLoading ? 'Loading...' : workloadStatus.status === 'running' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                "Pause Workload ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {}, void 0, false, {
                                                    fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 60
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                            lineNumber: 116,
                                            columnNumber: 41
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                "Start Workload ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {}, void 0, false, {
                                                    fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 60
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                            lineNumber: 120,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                        lineNumber: 106,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                    lineNumber: 99,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                            lineNumber: 72,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                        lineNumber: 71,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row-span-1 grid",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-36 w-full justify-between rounded-md border bg-[#1A1A1A] px-6 pt-6 pb-8 md:min-w-[310px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xl text-cyan-400",
                                            children: "Utilization:"
                                        }, void 0, false, {
                                            fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                            lineNumber: 132,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 flex items-baseline gap-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-5xl font-bold",
                                                children: [
                                                    metric.utilization,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                                lineNumber: 134,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                            lineNumber: 133,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                    lineNumber: 131,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 hidden h-20 w-30 overflow-hidden rounded-md border bg-[#252525] shadow-2xl md:block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$components$2f$SparkChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SparkAreaChart"], {
                                        data: history,
                                        categories: [
                                            'utilization'
                                        ],
                                        index: "timestamp",
                                        colors: [
                                            'blue'
                                        ],
                                        className: "h-20 w-30"
                                    }, void 0, false, {
                                        fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                        lineNumber: 138,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                    lineNumber: 137,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                            lineNumber: 130,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                        lineNumber: 129,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row-span-1 grid md:col-span-2 md:col-start-1 md:row-start-3 lg:col-start-3 lg:row-start-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-36 w-full justify-between rounded-md border bg-[#1A1A1A] px-6 pt-6 pb-8 md:min-w-[420px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xl text-cyan-400",
                                            children: "Memory Usage:"
                                        }, void 0, false, {
                                            fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                            lineNumber: 151,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 flex items-baseline gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-5xl font-bold",
                                                    children: (metric.memory_used / 1024).toFixed(1)
                                                }, void 0, false, {
                                                    fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-gray-400",
                                                    children: "/ 24 GB"
                                                }, void 0, false, {
                                                    fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                            lineNumber: 153,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                    lineNumber: 150,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 hidden h-20 w-30 overflow-hidden rounded-md border bg-[#252525] shadow-2xl md:block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$components$2f$SparkChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SparkAreaChart"], {
                                        data: history.map((m)=>({
                                                ...m,
                                                memory_percent: m.memory_used / m.memory_total * 100
                                            })),
                                        categories: [
                                            'memory_percent'
                                        ],
                                        index: "timestamp",
                                        colors: [
                                            'cyan'
                                        ],
                                        className: "h-20 w-30"
                                    }, void 0, false, {
                                        fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                        lineNumber: 161,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                    lineNumber: 160,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                            lineNumber: 149,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                        lineNumber: 148,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:col-start-2 md:row-start-2 lg:row-span-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-36 w-full justify-between rounded-md border bg-[#1A1A1A] px-6 pt-6 pb-8 md:min-w-[310px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xl text-cyan-400",
                                            children: "Temperature:"
                                        }, void 0, false, {
                                            fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                            lineNumber: 177,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 flex items-baseline gap-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-5xl font-bold",
                                                children: [
                                                    metric.temperature,
                                                    "°C"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                                lineNumber: 179,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                            lineNumber: 178,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                    lineNumber: 176,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 hidden h-20 w-30 overflow-hidden rounded-md border bg-[#252525] shadow-2xl md:block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$components$2f$SparkChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SparkAreaChart"], {
                                        data: history,
                                        categories: [
                                            'temperature'
                                        ],
                                        index: "timestamp",
                                        colors: [
                                            'pink'
                                        ],
                                        className: "h-20 w-30"
                                    }, void 0, false, {
                                        fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                        lineNumber: 183,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                    lineNumber: 182,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                            lineNumber: 175,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                        lineNumber: 174,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row-span-1 grid md:col-span-2 md:col-start-1 md:row-start-4 lg:col-start-3 lg:row-start-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-36 w-full justify-between rounded-md border bg-[#1A1A1A] px-6 pt-6 pb-8 md:min-w-[420px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xl text-cyan-400",
                                            children: "Power Draw:"
                                        }, void 0, false, {
                                            fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                            lineNumber: 196,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 flex items-baseline gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-3xl font-bold md:text-5xl",
                                                    children: metric.power_draw
                                                }, void 0, false, {
                                                    fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-gray-400",
                                                    children: "/ 450 W"
                                                }, void 0, false, {
                                                    fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                            lineNumber: 197,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                    lineNumber: 195,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 hidden h-20 w-30 overflow-hidden rounded-md border bg-[#252525] shadow-2xl md:block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$components$2f$SparkChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SparkAreaChart"], {
                                        data: history,
                                        categories: [
                                            'power_draw'
                                        ],
                                        index: "timestamp",
                                        colors: [
                                            'violet'
                                        ],
                                        className: "h-20 w-30"
                                    }, void 0, false, {
                                        fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                        lineNumber: 205,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                    lineNumber: 204,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                            lineNumber: 194,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                        lineNumber: 193,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                lineNumber: 70,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 grid gap-8 md:grid-cols-1 lg:grid-cols-[1fr_400px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-full flex-col gap-2 rounded-md border bg-[#1A1A1A] p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xl text-cyan-400",
                                children: "GPU Utilization Trend:"
                            }, void 0, false, {
                                fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                lineNumber: 218,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-400",
                                children: [
                                    "Compute activity • ",
                                    selectedRange,
                                    " view"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                lineNumber: 219,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "p-0 text-xs hover:text-white",
                                        onClick: ()=>setSelectedRange('1h'),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                            className: "h-8",
                                            variant: selectedRange === '1h' ? 'success' : 'default',
                                            children: "1 H"
                                        }, void 0, false, {
                                            fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                            lineNumber: 227,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                        lineNumber: 223,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "p-0 text-xs hover:text-white",
                                        onClick: ()=>setSelectedRange('24h'),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                            className: "h-8",
                                            variant: selectedRange === '24h' ? 'success' : 'default',
                                            children: "1 D"
                                        }, void 0, false, {
                                            fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                            lineNumber: 238,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                        lineNumber: 234,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "p-0 text-xs hover:text-white",
                                        onClick: ()=>setSelectedRange('7d'),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                            className: "h-8",
                                            variant: selectedRange === '7d' ? 'success' : 'default',
                                            children: "1 W"
                                        }, void 0, false, {
                                            fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                            lineNumber: 249,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                        lineNumber: 245,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                lineNumber: 222,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 h-100 w-full rounded-md border bg-black",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full w-full p-4",
                                    children: isLoadingHistory ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-full items-center justify-center text-gray-400",
                                        children: "Loading..."
                                    }, void 0, false, {
                                        fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                        lineNumber: 260,
                                        columnNumber: 33
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$components$2f$UtilLineChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UtilLineChart"], {
                                        data: history,
                                        timeRange: selectedRange
                                    }, void 0, false, {
                                        fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                        lineNumber: 264,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                    lineNumber: 258,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                lineNumber: 257,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                        lineNumber: 217,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-full flex-col justify-between gap-8 rounded-md border bg-[#1A1A1A] p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xl text-cyan-400",
                                        children: "Memory Breakdown:"
                                    }, void 0, false, {
                                        fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                        lineNumber: 271,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 text-sm text-gray-400",
                                        children: "Current VRAM allocation"
                                    }, void 0, false, {
                                        fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                        lineNumber: 272,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                lineNumber: 270,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-80 w-full items-center justify-center rounded-lg border bg-[#252525]/5 shadow-lg backdrop-blur-md transition-opacity hover:border-gray-400/20 hover:bg-[#252525]/10 hover:shadow-2xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$components$2f$MemoryDonutChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MemoryDonutChart"], {
                                    metric: metric
                                }, void 0, false, {
                                    fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                    lineNumber: 275,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                lineNumber: 274,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                lineNumber: 277,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                        lineNumber: 269,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                lineNumber: 216,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 flex w-full flex-col gap-2 rounded-md border bg-[#1A1A1A] p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xl text-cyan-400",
                        children: "GPU Temperature Trend:"
                    }, void 0, false, {
                        fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                        lineNumber: 281,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-400",
                        children: [
                            "Thermal performance • ",
                            selectedRange,
                            " view"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                        lineNumber: 282,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-0 text-xs hover:text-white",
                                onClick: ()=>setSelectedRange('1h'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                    className: "h-8",
                                    variant: selectedRange === '1h' ? 'success' : 'default',
                                    children: "1 H"
                                }, void 0, false, {
                                    fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                    lineNumber: 290,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                lineNumber: 286,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-0 text-xs hover:text-white",
                                onClick: ()=>setSelectedRange('24h'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                    className: "h-8",
                                    variant: selectedRange === '24h' ? 'success' : 'default',
                                    children: "1 D"
                                }, void 0, false, {
                                    fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                    lineNumber: 301,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                lineNumber: 297,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-0 text-xs hover:text-white",
                                onClick: ()=>setSelectedRange('7d'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                    className: "h-8",
                                    variant: selectedRange === '7d' ? 'success' : 'default',
                                    children: "1 W"
                                }, void 0, false, {
                                    fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                    lineNumber: 312,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                lineNumber: 308,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                        lineNumber: 285,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 w-full rounded-md border bg-black",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full w-full p-4",
                            children: isLoadingHistory ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full items-center justify-center text-gray-400",
                                children: "Loading..."
                            }, void 0, false, {
                                fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                lineNumber: 323,
                                columnNumber: 29
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$components$2f$TempAreaChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TempAreaChart"], {
                                data: history,
                                timeRange: selectedRange
                            }, void 0, false, {
                                fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                                lineNumber: 327,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                            lineNumber: 321,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                        lineNumber: 320,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
                lineNumber: 280,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/metrics-dashboard/components/Metrics.tsx",
        lineNumber: 65,
        columnNumber: 9
    }, this);
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
var __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$components$2f$Metrics$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/metrics-dashboard/components/Metrics.tsx [app-ssr] (ecmascript)");
'use client';
;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$metrics$2d$dashboard$2f$components$2f$Metrics$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        initialWorkloadStatus: workloadStatus,
        metric: metric
    }, void 0, false, {
        fileName: "[project]/metrics-dashboard/components/Client.tsx",
        lineNumber: 33,
        columnNumber: 12
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__262444e8._.js.map