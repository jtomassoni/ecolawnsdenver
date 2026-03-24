(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/EmailPreviewModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EmailPreviewModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function EmailPreviewModal({ open, onClose, preview, loading, error, title = 'Email preview' }) {
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50",
        onClick: onClose,
        role: "presentation",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl shadow-xl border border-primary-light/40 max-w-lg w-full max-h-[90vh] overflow-hidden flex flex-col",
            onClick: (e)=>e.stopPropagation(),
            role: "dialog",
            "aria-labelledby": "email-preview-title",
            "aria-modal": "true",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-3 border-b border-gray-100 flex justify-between items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "email-preview-title",
                            className: "text-base font-semibold text-primary",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/components/EmailPreviewModal.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "text-gray-400 hover:text-gray-600 text-2xl leading-none px-1",
                            "aria-label": "Close",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/components/EmailPreviewModal.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/EmailPreviewModal.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 overflow-y-auto flex-1 space-y-3 text-sm",
                    children: [
                        loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500",
                            children: "Loading preview…"
                        }, void 0, false, {
                            fileName: "[project]/components/EmailPreviewModal.tsx",
                            lineNumber: 55,
                            columnNumber: 23
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-600 text-sm",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/components/EmailPreviewModal.tsx",
                            lineNumber: 56,
                            columnNumber: 21
                        }, this),
                        preview && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                preview.from ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-medium text-gray-500 uppercase tracking-wide",
                                            children: "From"
                                        }, void 0, false, {
                                            fileName: "[project]/components/EmailPreviewModal.tsx",
                                            lineNumber: 61,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-900 break-all",
                                            children: preview.from
                                        }, void 0, false, {
                                            fileName: "[project]/components/EmailPreviewModal.tsx",
                                            lineNumber: 62,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/EmailPreviewModal.tsx",
                                    lineNumber: 60,
                                    columnNumber: 17
                                }, this) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-medium text-gray-500 uppercase tracking-wide",
                                            children: "To"
                                        }, void 0, false, {
                                            fileName: "[project]/components/EmailPreviewModal.tsx",
                                            lineNumber: 66,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-900 break-all",
                                            children: preview.to
                                        }, void 0, false, {
                                            fileName: "[project]/components/EmailPreviewModal.tsx",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/EmailPreviewModal.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-medium text-gray-500 uppercase tracking-wide",
                                            children: "Subject"
                                        }, void 0, false, {
                                            fileName: "[project]/components/EmailPreviewModal.tsx",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-900 font-medium",
                                            children: preview.subject
                                        }, void 0, false, {
                                            fileName: "[project]/components/EmailPreviewModal.tsx",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/EmailPreviewModal.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-medium text-gray-500 uppercase tracking-wide mb-1",
                                            children: "Message"
                                        }, void 0, false, {
                                            fileName: "[project]/components/EmailPreviewModal.tsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-lg border border-gray-100 bg-gray-50/80 p-3 overflow-auto max-h-[40vh] text-gray-800 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:mb-2 [&_p]:my-1",
                                            dangerouslySetInnerHTML: {
                                                __html: preview.html
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/EmailPreviewModal.tsx",
                                            lineNumber: 75,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/EmailPreviewModal.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/EmailPreviewModal.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-3 border-t border-gray-100 flex justify-end",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onClose,
                        className: "px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark",
                        children: "Close"
                    }, void 0, false, {
                        fileName: "[project]/components/EmailPreviewModal.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/EmailPreviewModal.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/EmailPreviewModal.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/EmailPreviewModal.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = EmailPreviewModal;
var _c;
__turbopack_context__.k.register(_c, "EmailPreviewModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/crm/CrmMarkdown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CrmMarkdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/react-markdown/lib/index.js [app-client] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark-gfm/lib/index.js [app-client] (ecmascript)");
'use client';
;
;
;
function CrmMarkdown({ source, className = '', variant = 'default' }) {
    const tone = variant === 'amber' ? 'prose-headings:text-amber-950 prose-a:text-amber-900 prose-strong:text-amber-950' : '';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `prose prose-sm max-w-none prose-slate prose-p:leading-relaxed prose-pre:bg-slate-900/90 prose-pre:text-slate-100 ${tone} ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
            remarkPlugins: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            ],
            children: source
        }, void 0, false, {
            fileName: "[project]/components/crm/CrmMarkdown.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/crm/CrmMarkdown.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = CrmMarkdown;
var _c;
__turbopack_context__.k.register(_c, "CrmMarkdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/crm-types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** `notification` is hidden on the leads list until “Show notification leads” or status filter = Notification. */ __turbopack_context__.s([
    "LEAD_STATUSES",
    ()=>LEAD_STATUSES,
    "LEAD_STATUS_LABELS",
    ()=>LEAD_STATUS_LABELS
]);
const LEAD_STATUSES = [
    'new_lead',
    'warm_lead',
    'active_customer',
    'delinquent',
    'inactive',
    'notification'
];
const LEAD_STATUS_LABELS = {
    new_lead: 'New lead',
    warm_lead: 'Warm lead',
    active_customer: 'Active customer',
    delinquent: 'Delinquent',
    inactive: 'Inactive',
    notification: 'Notification'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/crm-format.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Rich timestamp for CRM activity rows (locale-aware, includes seconds). */ __turbopack_context__.s([
    "formatCrmDateTime",
    ()=>formatCrmDateTime,
    "formatCrmDateTimeCompact",
    ()=>formatCrmDateTimeCompact
]);
function formatCrmDateTime(iso) {
    try {
        return new Date(iso).toLocaleString(undefined, {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit'
        });
    } catch  {
        return iso;
    }
}
function formatCrmDateTimeCompact(iso) {
    try {
        return new Date(iso).toLocaleString(undefined, {
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit'
        });
    } catch  {
        return iso;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/crm-bounce.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cleanMessageIdPart",
    ()=>cleanMessageIdPart,
    "extractBounceDiagnostic",
    ()=>extractBounceDiagnostic,
    "findOutboundForBounceAttachment",
    ()=>findOutboundForBounceAttachment,
    "looksLikeBounceNotification",
    ()=>looksLikeBounceNotification,
    "mergeLegacyBounceRowsForDisplay",
    ()=>mergeLegacyBounceRowsForDisplay,
    "parseBounceFailedRecipient",
    ()=>parseBounceFailedRecipient,
    "parseOriginalMessageIdFromBounce",
    ()=>parseOriginalMessageIdFromBounce,
    "summarizeBounce",
    ()=>summarizeBounce
]);
function normalizeEmailLocal(email) {
    return email.trim().toLowerCase();
}
function cleanMessageIdPart(id) {
    return id.replace(/^<|>$/g, '').trim();
}
function parseOriginalMessageIdFromBounce(bodyText, bodyHtml) {
    const blob = `${bodyText}\n${bodyHtml ?? ''}`;
    const m = blob.match(/Original-Message-ID:\s*<?([^>\s\r\n]+)>?/i);
    if (m) return cleanMessageIdPart(m[1]);
    return null;
}
function findOutboundForBounceAttachment(emails, failedRecipientNorm, bounceAtIso, bounceInReplyTo, bodyText, bodyHtml) {
    const failNorm = normalizeEmailLocal(failedRecipientNorm);
    const bounceTime = new Date(bounceAtIso).getTime();
    const outbounds = emails.filter((m)=>m.direction === 'outbound' && normalizeEmailLocal(m.to) === failNorm);
    if (outbounds.length === 0) return null;
    const originalMid = parseOriginalMessageIdFromBounce(bodyText ?? '', bodyHtml);
    if (originalMid) {
        const hit = outbounds.find((m)=>m.messageId && cleanMessageIdPart(m.messageId) === originalMid);
        if (hit) return hit;
    }
    if (bounceInReplyTo) {
        const cleanR = cleanMessageIdPart(bounceInReplyTo);
        const hit = outbounds.find((m)=>m.messageId && cleanMessageIdPart(m.messageId) === cleanR);
        if (hit) return hit;
    }
    const beforeBounce = outbounds.filter((m)=>new Date(m.createdAt).getTime() <= bounceTime + 120_000);
    const pool = beforeBounce.length > 0 ? beforeBounce : outbounds;
    pool.sort((a, b)=>new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return pool[0] ?? null;
}
function mergeLegacyBounceRowsForDisplay(emails) {
    const copy = emails.map((e)=>({
            ...e
        }));
    const bounceRows = copy.filter((e)=>e.kind === 'bounce' && e.bounce);
    const rest = copy.filter((e)=>e.kind !== 'bounce');
    const unmatched = [];
    bounceRows.sort((a, b)=>new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    for (const b of bounceRows){
        if (!b.bounce) continue;
        const target = findOutboundForBounceAttachment(rest, b.bounce.failedRecipient, b.createdAt, b.inReplyTo, b.bodyText, b.bodyHtml);
        if (!target) {
            unmatched.push(b);
            continue;
        }
        const next = {
            failedRecipient: b.bounce.failedRecipient,
            summary: b.bounce.summary,
            diagnostic: b.bounce.diagnostic,
            recordedAt: b.createdAt
        };
        if (!target.deliveryFailure || new Date(next.recordedAt) >= new Date(target.deliveryFailure.recordedAt)) {
            target.deliveryFailure = next;
        }
    }
    return rest.concat(unmatched);
}
const BOUNCE_FROM_HINTS = /mailer-daemon|mailerdaemon|postmaster|^daemon@|^noreply\+|^bounce|^return/i;
function looksLikeBounceNotification(fromAddresses, subject) {
    const subj = subject.toLowerCase();
    if (/delivery status notification|undeliverable|undelivered mail|returned mail|mail delivery failed|failure notice|address not found|message not delivered|could not be delivered/i.test(subj)) {
        return true;
    }
    for (const addr of fromAddresses){
        const a = addr.toLowerCase();
        if (BOUNCE_FROM_HINTS.test(a)) return true;
    }
    return false;
}
function stripTags(html) {
    return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
}
function parseBounceFailedRecipient(bodyText, bodyHtml) {
    const htmlPlain = bodyHtml ? stripTags(bodyHtml) : '';
    const blob = `${bodyText}\n${htmlPlain}`;
    const tryNorm = (raw)=>{
        if (!raw) return null;
        const e = normalizeEmailLocal(raw.replace(/^<|>$/g, ''));
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) ? e : null;
    };
    const patterns = [
        /Your message wasn't delivered to\s+([^\s<]+@[^\s>]+)/i,
        /(?:wasn't|was not)\s+delivered to[^a-z0-9@]*([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,})/i,
        /not delivered to[^a-z0-9@]*([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,})/i,
        /Final-Recipient:\s*rfc822;\s*([^\s]+)/i,
        /Original-Recipient:\s*rfc822;\s*([^\s]+)/i,
        /X-Failed-Recipients:\s*([^\s]+)/i,
        /RCPT TO:\s*<([^>]+)>/i
    ];
    for (const re of patterns){
        const m = blob.match(re);
        const hit = tryNorm(m?.[1]);
        if (hit) return hit;
    }
    return null;
}
function summarizeBounce(bodyText) {
    const t = bodyText.slice(0, 6000);
    if (/address not found|couldn't be found|could not be found/i.test(t)) {
        return 'Address not found';
    }
    if (/NXDOMAIN|domain name not found|no mx|dns type\s+['"]?mx['"]?\s+lookup/i.test(t)) {
        return 'Domain not found (DNS)';
    }
    if (/mailbox.*full|quota|over quota/i.test(t)) {
        return 'Mailbox full or quota exceeded';
    }
    if (/user unknown|no such user|550 5\.1\.1|recipient rejected|invalid recipient/i.test(t)) {
        return 'Recipient rejected';
    }
    if (/spam|blocked|blacklist|policy rejection/i.test(t)) {
        return 'Blocked or filtered';
    }
    if (/message expired|could not be delivered for.*hours/i.test(t)) {
        return 'Delivery timed out';
    }
    return 'Delivery failed';
}
function extractBounceDiagnostic(bodyText) {
    const lines = bodyText.split(/\r?\n/);
    for (const line of lines){
        const t = line.trim();
        if (/^Diagnostic-Code:/i.test(t) || /^Status:/i.test(t) || /NXDOMAIN|550\s|554\s|5\.\d\.\d/.test(t)) {
            return t.length > 280 ? `${t.slice(0, 277)}…` : t;
        }
    }
    const dns = bodyText.match(/DNS type[^\n]{10,200}/i);
    if (dns) {
        const s = dns[0].trim();
        return s.length > 280 ? `${s.slice(0, 277)}…` : s;
    }
    return undefined;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/crm/LeadWorkspace.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LeadWorkspace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EmailPreviewModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/EmailPreviewModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$crm$2f$CrmMarkdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/crm/CrmMarkdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/crm-types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/crm-format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$bounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/crm-bounce.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
/** Per-lead dismissed delivery alerts: JSON string[] of `recordedAt`, or legacy single ISO string. */ const CRM_LEAD_ALERT_DISMISS_DELIVERY = 'ecolawns-crm:lead-alert-dismissed:delivery:';
const inputClass = 'w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary';
/** Overrides global input min-height for dense CRM fields */ const inputClassCompact = 'w-full px-2.5 py-1.5 !min-h-0 h-9 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary';
const textareaClassCompact = 'w-full px-2.5 py-1.5 !min-h-0 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary resize-y';
function cleanMessageId(id) {
    return id.replace(/^<|>$/g, '').trim();
}
/** Strip Re:/Fwd: chains for matching one conversation. */ function normalizeEmailSubject(subject) {
    let s = subject.trim().toLowerCase();
    for(let i = 0; i < 8; i++){
        const next = s.replace(/^(re|fwd|fw)\s*:\s*/i, '').trim();
        if (next === s) break;
        s = next;
    }
    return s;
}
/** Remove Gmail/Apple-style quoted replies so the bubble shows only new text. */ function stripEmailReplyQuotes(body) {
    let t = body.trim();
    const splitAtQuoteHeader = [
        /\r?\n\r?\nOn .{10,600}?wrote:\s*/gi,
        /\r?\nOn .{10,600}?wrote:\s*/gi,
        /^On .{10,600}?wrote:\s*/gim,
        /\r?\n\r?\nAm .{10,600}?schrieb:\s*/gi,
        /\r?\nAm .{10,600}?schrieb:\s*/gi
    ];
    for (const re of splitAtQuoteHeader){
        re.lastIndex = 0;
        const m = re.exec(t);
        if (m && m.index !== -1) {
            t = t.slice(0, m.index).trim();
            break;
        }
    }
    t = t.replace(/(^|\r?\n)\s*>[^\r\n]*(\r?\n|$)/g, '\n').trim();
    t = t.replace(/\r?\n-{5,}\s*Original Message\s*-{5,}\r?\n[\s\S]*$/i, '').trim();
    return t;
}
function isBounceEmail(m) {
    return m.kind === 'bounce';
}
function messagesThreadTogether(a, b) {
    if (isBounceEmail(a) || isBounceEmail(b)) return false;
    const sa = normalizeEmailSubject(a.subject || '');
    const sb = normalizeEmailSubject(b.subject || '');
    if (sa && sb && sa === sb) return true;
    const aid = a.messageId ? cleanMessageId(a.messageId) : '';
    const bid = b.messageId ? cleanMessageId(b.messageId) : '';
    const aR = a.inReplyTo ? cleanMessageId(a.inReplyTo) : '';
    const bR = b.inReplyTo ? cleanMessageId(b.inReplyTo) : '';
    if (aid && bR && aid === bR) return true;
    if (bid && aR && bid === aR) return true;
    return false;
}
function belongsToEmailThread(cluster, next) {
    return cluster.some((m)=>messagesThreadTogether(m, next));
}
function groupTimelineRows(rows) {
    const out = [];
    let i = 0;
    while(i < rows.length){
        const r = rows[i];
        if (r.kind !== 'email' || !r.email) {
            out.push({
                type: 'row',
                row: r
            });
            i += 1;
            continue;
        }
        const clusterRows = [
            r
        ];
        const clusterMsgs = [
            r.email
        ];
        let j = i + 1;
        while(j < rows.length){
            const nextRow = rows[j];
            if (nextRow.kind !== 'email' || !nextRow.email) break;
            if (!belongsToEmailThread(clusterMsgs, nextRow.email)) break;
            clusterRows.push(nextRow);
            clusterMsgs.push(nextRow.email);
            j += 1;
        }
        if (clusterRows.length >= 2) {
            const threadKey = `thread:${clusterRows.map((x)=>x.key).sort().join('~')}`;
            out.push({
                type: 'email_thread',
                rows: clusterRows,
                threadKey
            });
            i = j;
        } else {
            out.push({
                type: 'row',
                row: r
            });
            i += 1;
        }
    }
    return out;
}
function threadDisplaySubject(messages) {
    const raw = messages.map((m)=>m.subject || '').find((s)=>s.trim()) || '(no subject)';
    return raw.replace(/^(re|fwd|fw)\s*:\s*/i, '').trim() || raw.trim() || '(no subject)';
}
/** Subject line for continuing a thread (Gmail-style Re:). */ function replySubjectForThread(messages) {
    const ordered = [
        ...messages
    ].sort((a, b)=>a.createdAt < b.createdAt ? -1 : a.createdAt > b.createdAt ? 1 : 0);
    const raw = [
        ...ordered
    ].reverse().find((m)=>(m.subject || '').trim())?.subject?.trim() || '';
    if (/^re:\s*/i.test(raw)) return raw;
    const base = raw.replace(/^(re|fwd|fw)\s*:\s*/i, '').trim() || threadDisplaySubject(messages);
    return `Re: ${base}`;
}
/** Newline count for “N lines” truncation (staff notes, profile markdown). */ function sourceLineCount(text) {
    if (!text) return 0;
    return text.split(/\r?\n/).length;
}
function buildActivityRows(lead) {
    const mergedEmails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$bounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeLegacyBounceRowsForDisplay"])(lead.emails);
    const rows = [
        {
            key: `created-${lead.id}`,
            sortAt: lead.createdAt,
            kind: 'created'
        }
    ];
    for (const m of mergedEmails){
        rows.push({
            key: `email-${m.id}`,
            sortAt: m.createdAt,
            kind: 'email',
            email: m
        });
    }
    for (const ev of lead.timeline ?? []){
        rows.push({
            key: `${ev.kind}-${ev.id}`,
            sortAt: ev.createdAt,
            kind: ev.kind === 'staff_note' ? 'staff_note' : 'profile_update',
            timeline: ev
        });
    }
    rows.sort((a, b)=>a.sortAt > b.sortAt ? -1 : a.sortAt < b.sortAt ? 1 : 0);
    return rows;
}
function rowMatchesQuery(row, q) {
    if (!q) return true;
    const t = q.trim().toLowerCase();
    if (!t) return true;
    if (row.kind === 'created') {
        return 'lead record created added'.includes(t);
    }
    if (row.kind === 'email' && row.email) {
        const m = row.email;
        const bounceBlob = m.kind === 'bounce' && m.bounce ? `${m.bounce.failedRecipient} ${m.bounce.summary} ${m.bounce.diagnostic ?? ''} bounce delivery failed dsn`.toLowerCase() : '';
        const failureBlob = m.deliveryFailure ? `${m.deliveryFailure.failedRecipient} ${m.deliveryFailure.summary} ${m.deliveryFailure.diagnostic ?? ''} not delivered bounce failed`.toLowerCase() : '';
        return (m.subject || '').toLowerCase().includes(t) || m.bodyText.toLowerCase().includes(t) || m.from.toLowerCase().includes(t) || m.to.toLowerCase().includes(t) || bounceBlob.includes(t) || failureBlob.includes(t) || (m.direction === 'outbound' ? 'outbound sent you customer' : 'inbound reply').includes(t);
    }
    if (row.kind === 'staff_note' && row.timeline?.kind === 'staff_note') {
        return row.timeline.body.toLowerCase().includes(t) || 'note staff'.includes(t);
    }
    if (row.kind === 'profile_update' && row.timeline?.kind === 'profile_update') {
        return row.timeline.lines.some((l)=>l.toLowerCase().includes(t)) || 'profile update saved'.includes(t);
    }
    return false;
}
function readDismissedDeliveryForLead(leadId) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        return localStorage.getItem(`${CRM_LEAD_ALERT_DISMISS_DELIVERY}${leadId}`);
    } catch  {
        return null;
    }
}
function LeadWorkspace({ initialLead }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [lead, setLead] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialLead);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [statusEditing, setStatusEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fieldSaving, setFieldSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fieldError, setFieldError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const editFieldRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mailSubject, setMailSubject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [mailBody, setMailBody] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [mailBusy, setMailBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mailError, setMailError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [mailPreviewOpen, setMailPreviewOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mailPreviewData, setMailPreviewData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mailPreviewBusy, setMailPreviewBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [invoiceOpen, setInvoiceOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [stripeLink, setStripeLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [invoicePreview, setInvoicePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [invoiceBusy, setInvoiceBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [invoiceError, setInvoiceError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [invoiceStep, setInvoiceStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('link');
    const [activitySearch, setActivitySearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [timelineComposer, setTimelineComposer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('note');
    const [timelineNote, setTimelineNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [composerNoteMdPreview, setComposerNoteMdPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [noteBusy, setNoteBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [noteError, setNoteError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [openActivityKeys, setOpenActivityKeys] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "LeadWorkspace.useState": ()=>new Set()
    }["LeadWorkspace.useState"]);
    const [dismissedDeliveryRecordedAt, setDismissedDeliveryRecordedAt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "LeadWorkspace.useState": ()=>readDismissedDeliveryForLead(initialLead.id)
    }["LeadWorkspace.useState"]);
    const allRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LeadWorkspace.useMemo[allRows]": ()=>buildActivityRows(lead)
    }["LeadWorkspace.useMemo[allRows]"], [
        lead
    ]);
    const filteredRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LeadWorkspace.useMemo[filteredRows]": ()=>{
            const q = activitySearch.trim().toLowerCase();
            if (!q) return allRows;
            return allRows.filter({
                "LeadWorkspace.useMemo[filteredRows]": (r)=>rowMatchesQuery(r, q)
            }["LeadWorkspace.useMemo[filteredRows]"]);
        }
    }["LeadWorkspace.useMemo[filteredRows]"], [
        allRows,
        activitySearch
    ]);
    const timelineSegments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LeadWorkspace.useMemo[timelineSegments]": ()=>groupTimelineRows(filteredRows)
    }["LeadWorkspace.useMemo[timelineSegments]"], [
        filteredRows
    ]);
    const latestDeliveryFailureForLeadEmail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LeadWorkspace.useMemo[latestDeliveryFailureForLeadEmail]": ()=>{
            const norm = lead.email.trim().toLowerCase();
            if (!norm) return null;
            const merged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$bounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeLegacyBounceRowsForDisplay"])(lead.emails);
            const fromOutbound = merged.map({
                "LeadWorkspace.useMemo[latestDeliveryFailureForLeadEmail].fromOutbound": (m)=>m.deliveryFailure
            }["LeadWorkspace.useMemo[latestDeliveryFailureForLeadEmail].fromOutbound"]).filter({
                "LeadWorkspace.useMemo[latestDeliveryFailureForLeadEmail].fromOutbound": (d)=>d !== undefined && d.failedRecipient === norm
            }["LeadWorkspace.useMemo[latestDeliveryFailureForLeadEmail].fromOutbound"]);
            if (fromOutbound.length === 0) return null;
            fromOutbound.sort({
                "LeadWorkspace.useMemo[latestDeliveryFailureForLeadEmail]": (a, b)=>new Date(b.recordedAt).getTime() - new Date(a.recordedAt).getTime()
            }["LeadWorkspace.useMemo[latestDeliveryFailureForLeadEmail]"]);
            return fromOutbound[0] ?? null;
        }
    }["LeadWorkspace.useMemo[latestDeliveryFailureForLeadEmail]"], [
        lead.emails,
        lead.email
    ]);
    const showDeliveryFailureAlert = Boolean(latestDeliveryFailureForLeadEmail && latestDeliveryFailureForLeadEmail.recordedAt !== dismissedDeliveryRecordedAt);
    const emailSignature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LeadWorkspace.useMemo[emailSignature]": ()=>lead.emails.map({
                "LeadWorkspace.useMemo[emailSignature]": (e)=>`${e.id}:${e.deliveryFailure?.recordedAt ?? ''}`
            }["LeadWorkspace.useMemo[emailSignature]"]).join(',')
    }["LeadWorkspace.useMemo[emailSignature]"], [
        lead.emails
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeadWorkspace.useEffect": ()=>{
            setLead(initialLead);
            setEditing(null);
            setDraft('');
            setStatusEditing(false);
            setFieldError('');
        }
    }["LeadWorkspace.useEffect"], [
        initialLead
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeadWorkspace.useEffect": ()=>{
            setDismissedDeliveryRecordedAt(readDismissedDeliveryForLead(lead.id));
        }
    }["LeadWorkspace.useEffect"], [
        lead.id
    ]);
    /** Default expansion: latest email or its conversation open. Re-run when the email thread changes. */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeadWorkspace.useEffect": ()=>{
            const merged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$bounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeLegacyBounceRowsForDisplay"])(lead.emails);
            if (merged.length === 0) {
                setOpenActivityKeys(new Set());
                return;
            }
            const latest = [
                ...merged
            ].sort({
                "LeadWorkspace.useEffect.latest": (a, b)=>a.createdAt < b.createdAt ? -1 : 1
            }["LeadWorkspace.useEffect.latest"]).at(-1);
            const segments = groupTimelineRows(buildActivityRows(lead));
            const threadSeg = segments.find({
                "LeadWorkspace.useEffect.threadSeg": (s)=>s.type === 'email_thread' && s.rows.some({
                        "LeadWorkspace.useEffect.threadSeg": (r)=>r.email?.id === latest.id
                    }["LeadWorkspace.useEffect.threadSeg"])
            }["LeadWorkspace.useEffect.threadSeg"]);
            setOpenActivityKeys(new Set([
                threadSeg ? threadSeg.threadKey : `email-${latest.id}`
            ]));
        }
    }["LeadWorkspace.useEffect"], [
        lead.id,
        emailSignature
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeadWorkspace.useEffect": ()=>{
            if (editing) editFieldRef.current?.focus();
        }
    }["LeadWorkspace.useEffect"], [
        editing
    ]);
    const searchOpen = activitySearch.trim().length > 0;
    const gmailSyncInFlight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeadWorkspace.useEffect": ()=>{
            let cancelled = false;
            const POLL_MS = 60_000;
            async function pullGmailReplies() {
                if (cancelled || gmailSyncInFlight.current) return;
                if (typeof document !== 'undefined' && document.visibilityState === 'hidden') return;
                gmailSyncInFlight.current = true;
                try {
                    const res = await fetch('/api/crm/sync-inbox', {
                        method: 'POST'
                    });
                    if (!cancelled && res.ok) router.refresh();
                } catch  {
                /* ignore */ } finally{
                    gmailSyncInFlight.current = false;
                }
            }
            void pullGmailReplies();
            const intervalId = window.setInterval({
                "LeadWorkspace.useEffect.intervalId": ()=>void pullGmailReplies()
            }["LeadWorkspace.useEffect.intervalId"], POLL_MS);
            const onVisibility = {
                "LeadWorkspace.useEffect.onVisibility": ()=>{
                    if (document.visibilityState === 'visible') void pullGmailReplies();
                }
            }["LeadWorkspace.useEffect.onVisibility"];
            document.addEventListener('visibilitychange', onVisibility);
            return ({
                "LeadWorkspace.useEffect": ()=>{
                    cancelled = true;
                    window.clearInterval(intervalId);
                    document.removeEventListener('visibilitychange', onVisibility);
                }
            })["LeadWorkspace.useEffect"];
        }
    }["LeadWorkspace.useEffect"], [
        router
    ]);
    function toggleActivity(key) {
        setOpenActivityKeys((prev)=>{
            const next = new Set(prev);
            if (next.has(key)) next.delete(key);
            else next.add(key);
            return next;
        });
    }
    function isRowOpen(key) {
        if (searchOpen) return true;
        return openActivityKeys.has(key);
    }
    function startEdit(key) {
        setFieldError('');
        setStatusEditing(false);
        setEditing(key);
        if (key === 'name') setDraft(lead.name);
        else if (key === 'email') setDraft(lead.email);
        else if (key === 'phone') setDraft(lead.phone);
        else if (key === 'physicalAddress') setDraft(lead.physicalAddress);
        else setDraft(lead.notes);
    }
    function cancelEdit() {
        setEditing(null);
        setDraft('');
        setFieldError('');
    }
    async function applyLeadPatch(patch) {
        setFieldSaving(true);
        setFieldError('');
        try {
            const res = await fetch(`/api/crm/leads/${lead.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(patch)
            });
            const data = await res.json();
            if (!res.ok) {
                setFieldError(data.error || 'Save failed');
                return;
            }
            setLead(data.lead);
            setEditing(null);
            setDraft('');
            setStatusEditing(false);
            router.refresh();
        } catch  {
            setFieldError('Request failed');
        } finally{
            setFieldSaving(false);
        }
    }
    async function saveEdit() {
        if (!editing) return;
        setFieldError('');
        if (editing === 'name') {
            const next = draft.trim() || lead.name;
            if (next === lead.name) {
                cancelEdit();
                return;
            }
            await applyLeadPatch({
                name: draft.trim() || lead.name
            });
            return;
        }
        if (editing === 'email') {
            const next = draft.trim().toLowerCase();
            if (next === lead.email) {
                cancelEdit();
                return;
            }
            await applyLeadPatch({
                email: draft
            });
            return;
        }
        if (editing === 'phone') {
            if (draft.trim() === lead.phone) {
                cancelEdit();
                return;
            }
            await applyLeadPatch({
                phone: draft
            });
            return;
        }
        if (editing === 'physicalAddress') {
            if (draft.trim() === lead.physicalAddress) {
                cancelEdit();
                return;
            }
            await applyLeadPatch({
                physicalAddress: draft
            });
            return;
        }
        if (editing === 'notes') {
            if (draft.trim() === lead.notes) {
                cancelEdit();
                return;
            }
            await applyLeadPatch({
                notes: draft
            });
        }
    }
    async function saveStatus(next) {
        if (next === lead.status) {
            setStatusEditing(false);
            return;
        }
        await applyLeadPatch({
            status: next
        });
    }
    async function addTimelineNote() {
        setNoteError('');
        const text = timelineNote.trim();
        if (!text) return;
        setNoteBusy(true);
        try {
            const res = await fetch(`/api/crm/leads/${lead.id}/notes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    text
                })
            });
            const data = await res.json();
            if (!res.ok) {
                setNoteError(data.error || 'Could not add note');
                return;
            }
            setTimelineNote('');
            setComposerNoteMdPreview(false);
            if (data.lead) setLead(data.lead);
            router.refresh();
        } catch  {
            setNoteError('Request failed');
        } finally{
            setNoteBusy(false);
        }
    }
    async function updateTimelineNote(noteId, text) {
        const res = await fetch(`/api/crm/leads/${lead.id}/notes`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                noteId,
                text
            })
        });
        const data = await res.json();
        if (!res.ok) {
            throw new Error(data.error || 'Could not update note');
        }
        return data.lead;
    }
    async function previewOutgoingMail(subject, text) {
        setMailError('');
        const s = subject.trim();
        const t = text.trim();
        if (!s || !t) {
            setMailError('Subject and message are required to preview.');
            return;
        }
        setMailPreviewBusy(true);
        try {
            const res = await fetch(`/api/crm/leads/${lead.id}/send-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    subject: s,
                    text: t,
                    previewOnly: true
                })
            });
            const data = await res.json();
            if (!res.ok) {
                setMailError(data.error || 'Preview failed');
                return;
            }
            if (data.preview) {
                setMailPreviewData(data.preview);
                setMailPreviewOpen(true);
            }
        } catch  {
            setMailError('Request failed');
        } finally{
            setMailPreviewBusy(false);
        }
    }
    async function sendOutgoingMail(subject, text, options) {
        setMailError('');
        const s = subject.trim();
        const t = text.trim();
        if (!s || !t) {
            setMailError('Subject and message are required to send.');
            return false;
        }
        setMailBusy(true);
        try {
            const res = await fetch(`/api/crm/leads/${lead.id}/send-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    subject: s,
                    text: t
                })
            });
            const data = await res.json();
            if (!res.ok) {
                setMailError(data.error || 'Send failed');
                return false;
            }
            if (options?.clearMainComposer !== false) {
                setMailSubject('');
                setMailBody('');
            }
            const refresh = await fetch(`/api/crm/leads/${lead.id}`);
            const j = await refresh.json();
            if (j.lead) setLead(j.lead);
            router.refresh();
            return true;
        } catch  {
            setMailError('Request failed');
            return false;
        } finally{
            setMailBusy(false);
        }
    }
    function openInvoice() {
        setInvoiceOpen(true);
        setStripeLink('');
        setInvoicePreview(null);
        setInvoiceError('');
        setInvoiceStep('link');
    }
    async function previewInvoice() {
        setInvoiceError('');
        setInvoiceBusy(true);
        try {
            const res = await fetch(`/api/crm/leads/${lead.id}/macros/send-invoice`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    stripePaymentLink: stripeLink,
                    previewOnly: true
                })
            });
            const data = await res.json();
            if (!res.ok) {
                setInvoiceError(data.error || 'Preview failed');
                return;
            }
            setInvoicePreview({
                subject: data.subject,
                html: data.html,
                text: data.text
            });
            setInvoiceStep('preview');
        } catch  {
            setInvoiceError('Request failed');
        } finally{
            setInvoiceBusy(false);
        }
    }
    async function sendInvoice() {
        setInvoiceError('');
        setInvoiceBusy(true);
        try {
            const res = await fetch(`/api/crm/leads/${lead.id}/macros/send-invoice`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    stripePaymentLink: stripeLink,
                    previewOnly: false
                })
            });
            const data = await res.json();
            if (!res.ok) {
                setInvoiceError(data.error || 'Send failed');
                return;
            }
            setInvoiceOpen(false);
            const refresh = await fetch(`/api/crm/leads/${lead.id}`);
            const j = await refresh.json();
            if (j.lead) setLead(j.lead);
            router.refresh();
        } catch  {
            setInvoiceError('Request failed');
        } finally{
            setInvoiceBusy(false);
        }
    }
    async function deleteLead() {
        if (!confirm('Delete this lead and all stored messages? This cannot be undone.')) return;
        const res = await fetch(`/api/crm/leads/${lead.id}`, {
            method: 'DELETE'
        });
        if (res.ok) {
            router.push('/crm');
            router.refresh();
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 pb-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-white rounded-xl border border-slate-200 shadow-sm p-4 sm:p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/crm",
                        className: "text-sm text-slate-500 hover:text-primary mb-3 inline-block font-medium",
                        children: "← All leads"
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 673,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0 flex-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactField, {
                                    variant: "heroName",
                                    label: "Name",
                                    emptyHint: "Add name",
                                    editing: editing,
                                    fieldKey: "name",
                                    draft: draft,
                                    setDraft: setDraft,
                                    displayValue: lead.name,
                                    saving: fieldSaving,
                                    error: fieldError,
                                    inputRef: editFieldRef,
                                    onStartEdit: ()=>startEdit('name'),
                                    onSave: ()=>void saveEdit(),
                                    onCancel: cancelEdit
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 681,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 680,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: openInvoice,
                                        className: "px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark shadow-sm",
                                        children: "Send invoice"
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 699,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: deleteLead,
                                        className: "px-4 py-2 rounded-lg border border-red-200 bg-white text-sm text-red-700 hover:bg-red-50",
                                        children: "Delete lead"
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 706,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 698,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 679,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 pt-4 border-t border-slate-100 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-x-4 gap-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
                                        children: "Contact & status"
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 718,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:block h-3 w-px bg-slate-200",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 721,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-2 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-semibold uppercase tracking-wide text-slate-400 shrink-0",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                lineNumber: 723,
                                                columnNumber: 15
                                            }, this),
                                            statusEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap items-center gap-2 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: `${inputClass} w-full min-w-[10rem] sm:w-auto sm:min-w-[12rem] max-w-full`,
                                                        value: lead.status,
                                                        disabled: fieldSaving,
                                                        autoFocus: true,
                                                        onChange: (e)=>void saveStatus(e.target.value),
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEAD_STATUSES"].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: s,
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEAD_STATUS_LABELS"][s]
                                                            }, s, false, {
                                                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                                lineNumber: 736,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                        lineNumber: 728,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "text-xs text-slate-500 hover:text-slate-800 px-2 py-1",
                                                        onClick: ()=>setStatusEditing(false),
                                                        children: "Close"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                        lineNumber: 741,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                lineNumber: 727,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setFieldError('');
                                                    cancelEdit();
                                                    setStatusEditing(true);
                                                },
                                                className: "inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-800 hover:border-primary/30 hover:bg-primary/5 transition-colors",
                                                title: "Change status",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEAD_STATUS_LABELS"][lead.status],
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-2 text-xs text-slate-400 font-normal",
                                                        children: "Edit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                        lineNumber: 761,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                lineNumber: 750,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 722,
                                        columnNumber: 13
                                    }, this),
                                    fieldError && statusEditing && !editing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-red-600 w-full sm:w-auto",
                                        children: fieldError
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 766,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 717,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:gap-x-14",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0 border-b border-slate-100 md:border-b-0 md:pr-6 lg:pr-10 md:border-r md:border-slate-100",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactField, {
                                            variant: "headerCompact",
                                            label: "Email",
                                            shortLabel: "Email",
                                            emptyHint: "Add email",
                                            editing: editing,
                                            fieldKey: "email",
                                            draft: draft,
                                            setDraft: setDraft,
                                            displayValue: lead.email,
                                            saving: fieldSaving,
                                            error: fieldError,
                                            inputRef: editFieldRef,
                                            onStartEdit: ()=>startEdit('email'),
                                            onSave: ()=>void saveEdit(),
                                            onCancel: cancelEdit,
                                            type: "email",
                                            autoComplete: "email"
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 772,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 771,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0 border-b border-slate-100 md:border-b-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactField, {
                                            variant: "headerCompact",
                                            label: "Phone",
                                            shortLabel: "Phone",
                                            emptyHint: "Add phone",
                                            editing: editing,
                                            fieldKey: "phone",
                                            draft: draft,
                                            setDraft: setDraft,
                                            displayValue: lead.phone,
                                            saving: fieldSaving,
                                            error: fieldError,
                                            inputRef: editFieldRef,
                                            onStartEdit: ()=>startEdit('phone'),
                                            onSave: ()=>void saveEdit(),
                                            onCancel: cancelEdit,
                                            type: "tel",
                                            autoComplete: "tel"
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 793,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 792,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0 border-b border-slate-100 md:col-span-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactField, {
                                            variant: "headerCompact",
                                            label: "Physical address",
                                            shortLabel: "Address",
                                            emptyHint: "Add address",
                                            editing: editing,
                                            fieldKey: "physicalAddress",
                                            draft: draft,
                                            setDraft: setDraft,
                                            displayValue: lead.physicalAddress,
                                            saving: fieldSaving,
                                            error: fieldError,
                                            inputRef: editFieldRef,
                                            onStartEdit: ()=>startEdit('physicalAddress'),
                                            onSave: ()=>void saveEdit(),
                                            onCancel: cancelEdit,
                                            multiline: true,
                                            minH: "min-h-[4.5rem]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 814,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 813,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0 md:col-span-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactField, {
                                            variant: "headerCompact",
                                            label: "Profile notes",
                                            labelHint: "(private)",
                                            shortLabel: "Notes",
                                            emptyHint: "No internal notes",
                                            editing: editing,
                                            fieldKey: "notes",
                                            draft: draft,
                                            setDraft: setDraft,
                                            displayValue: lead.notes,
                                            saving: fieldSaving,
                                            error: fieldError,
                                            inputRef: editFieldRef,
                                            onStartEdit: ()=>startEdit('notes'),
                                            onSave: ()=>void saveEdit(),
                                            onCancel: cancelEdit,
                                            multiline: true,
                                            markdown: true,
                                            minH: "min-h-[5rem]",
                                            placeholder: "Internal reference — timeline shows before → after when you Save"
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 835,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 834,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 770,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-slate-400 pt-0.5 leading-relaxed md:text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-slate-500",
                                        children: "Created"
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 860,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCrmDateTime"])(lead.createdAt),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mx-2 text-slate-300",
                                        children: "·"
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 861,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-slate-500",
                                        children: "Updated"
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 862,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCrmDateTime"])(lead.updatedAt)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 859,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 716,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 672,
                columnNumber: 7
            }, this),
            showDeliveryFailureAlert && latestDeliveryFailureForLeadEmail ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "region",
                "aria-label": "Alerts for this lead",
                className: "rounded-xl border border-amber-300/90 bg-gradient-to-r from-amber-50 via-amber-50 to-amber-100/40 shadow-sm px-4 py-3 sm:px-5 sm:py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0 flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-200/90 text-amber-950 text-sm font-bold",
                                    "aria-hidden": true,
                                    children: "!"
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 875,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-semibold text-amber-950",
                                            children: "Email could not be delivered"
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 882,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-amber-900/90 mt-1 leading-snug",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: latestDeliveryFailureForLeadEmail.summary
                                                }, void 0, false, {
                                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                    lineNumber: 884,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-amber-800/90",
                                                    children: " — "
                                                }, void 0, false, {
                                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                    lineNumber: 885,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-xs sm:text-sm break-all",
                                                    children: latestDeliveryFailureForLeadEmail.failedRecipient
                                                }, void 0, false, {
                                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                    lineNumber: 886,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 883,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-amber-800/85 mt-2 leading-relaxed",
                                            children: "Full details are on your latest outbound send in the timeline. Correct the address and try again."
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 890,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 881,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 874,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>{
                                const at = latestDeliveryFailureForLeadEmail.recordedAt;
                                try {
                                    localStorage.setItem(`${CRM_LEAD_ALERT_DISMISS_DELIVERY}${lead.id}`, at);
                                } catch  {
                                /* private mode / quota */ }
                                setDismissedDeliveryRecordedAt(at);
                            },
                            className: "shrink-0 self-start sm:self-center px-3 py-1.5 rounded-lg border border-amber-400/80 bg-white text-sm font-medium text-amber-950 hover:bg-amber-50/90",
                            children: "Dismiss"
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 895,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 873,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 868,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0 space-y-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "bg-white rounded-xl border border-slate-200 shadow-sm p-4 sm:p-5 space-y-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-semibold text-slate-900 tracking-tight",
                                            children: "Timeline"
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 918,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-slate-500 mt-1 max-w-2xl",
                                            children: "Emails, staff notes, status and field changes — everything that happened on this lead. Newest first. Gmail syncs when you open this page and about every minute."
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 919,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 917,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-400 tabular-nums shrink-0",
                                    children: [
                                        allRows.length,
                                        " event",
                                        allRows.length === 1 ? '' : 's'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 924,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 916,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg border border-slate-100 bg-slate-50/60 p-3 sm:p-4 space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "lead-timeline-composer",
                                            className: "text-xs font-semibold text-slate-600 uppercase tracking-wide shrink-0",
                                            children: "Add to timeline"
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 931,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            id: "lead-timeline-composer",
                                            value: timelineComposer,
                                            onChange: (e)=>{
                                                setTimelineComposer(e.target.value);
                                                setComposerNoteMdPreview(false);
                                            },
                                            className: "w-full sm:w-56 px-3 py-2 rounded-lg border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "note",
                                                    children: "Add note"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                    lineNumber: 946,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "email",
                                                    children: "Send email"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                    lineNumber: 947,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 937,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 930,
                                    columnNumber: 15
                                }, this),
                                timelineComposer === 'note' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-slate-500",
                                            children: "Markdown supported (headings, lists, links, code). Use Preview to check formatting."
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 953,
                                            columnNumber: 19
                                        }, this),
                                        composerNoteMdPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-lg border border-slate-200 bg-white px-3 py-2.5 min-h-[4.5rem]",
                                            children: timelineNote.trim() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$crm$2f$CrmMarkdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                source: timelineNote
                                            }, void 0, false, {
                                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                lineNumber: 959,
                                                columnNumber: 25
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-slate-400 italic",
                                                children: "Nothing to preview yet."
                                            }, void 0, false, {
                                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                lineNumber: 961,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 957,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            className: `${inputClass} min-h-[4.5rem] resize-y bg-white`,
                                            placeholder: "Call, follow-up, site visit, internal context — shows on the timeline with a time",
                                            value: timelineNote,
                                            onChange: (e)=>setTimelineNote(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 965,
                                            columnNumber: 21
                                        }, this),
                                        noteError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-red-600",
                                            children: noteError
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 972,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    disabled: !timelineNote.trim(),
                                                    onClick: ()=>setComposerNoteMdPreview((p)=>!p),
                                                    className: "px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-800 text-sm font-medium hover:bg-slate-50 disabled:opacity-50",
                                                    children: composerNoteMdPreview ? 'Edit markdown' : 'Preview markdown'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                    lineNumber: 974,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    disabled: noteBusy || !timelineNote.trim(),
                                                    onClick: addTimelineNote,
                                                    className: "px-4 py-2 rounded-lg bg-slate-800 text-white text-sm font-medium hover:bg-slate-900 disabled:opacity-50",
                                                    children: noteBusy ? 'Adding…' : 'Add to timeline'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                    lineNumber: 982,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 973,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500",
                                            children: [
                                                "Sends via Gmail (",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    className: "text-[11px] bg-slate-100 px-1 rounded",
                                                    children: "EMAIL_USER"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                    lineNumber: 995,
                                                    columnNumber: 38
                                                }, this),
                                                "). Outbound and inbound messages appear in the timeline below."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 994,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: `${inputClass} bg-white`,
                                            placeholder: "Subject",
                                            value: mailSubject,
                                            onChange: (e)=>setMailSubject(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 998,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            className: `${inputClass} min-h-[8rem] resize-y bg-white`,
                                            placeholder: "Message",
                                            value: mailBody,
                                            onChange: (e)=>setMailBody(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 1004,
                                            columnNumber: 19
                                        }, this),
                                        mailError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-red-600",
                                            children: mailError
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 1010,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    disabled: mailPreviewBusy || mailBusy || !mailSubject.trim() || !mailBody.trim(),
                                                    onClick: ()=>void previewOutgoingMail(mailSubject, mailBody),
                                                    className: "px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-800 text-sm font-medium hover:bg-slate-50 disabled:opacity-50",
                                                    children: mailPreviewBusy ? 'Preview…' : 'Preview'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                    lineNumber: 1012,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    disabled: mailBusy || !mailSubject.trim() || !mailBody.trim(),
                                                    onClick: ()=>void sendOutgoingMail(mailSubject, mailBody),
                                                    className: "px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark disabled:opacity-50",
                                                    children: mailBusy ? 'Sending…' : 'Send to customer'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                    lineNumber: 1022,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 1011,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 929,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2 sm:flex-row sm:items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "search",
                                    placeholder: "Search timeline (subjects, bodies, notes, changes…)",
                                    value: activitySearch,
                                    onChange: (e)=>setActivitySearch(e.target.value),
                                    className: "flex-1 px-3 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary"
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1036,
                                    columnNumber: 15
                                }, this),
                                activitySearch.trim() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-slate-500 shrink-0",
                                    children: [
                                        filteredRows.length,
                                        " match",
                                        filteredRows.length === 1 ? '' : 'es'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1044,
                                    columnNumber: 17
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1035,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative pl-3 border-l-2 border-primary/20 space-y-3 ml-1",
                            children: filteredRows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-dashed border-slate-200 bg-slate-50/50 p-10 text-center text-slate-500 text-sm ml-2",
                                children: "No events match this search."
                            }, void 0, false, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 1052,
                                columnNumber: 17
                            }, this) : timelineSegments.map((seg)=>seg.type === 'row' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActivityItem, {
                                    row: seg.row,
                                    open: isRowOpen(seg.row.key),
                                    onToggle: ()=>toggleActivity(seg.row.key),
                                    searchActive: searchOpen,
                                    staffNoteActions: {
                                        onLeadUpdated: (next)=>{
                                            setLead(next);
                                            router.refresh();
                                        },
                                        updateTimelineNote
                                    },
                                    emailReply: {
                                        customerEmail: lead.email,
                                        mailError,
                                        onClearMailError: ()=>setMailError(''),
                                        mailBusy,
                                        mailPreviewBusy,
                                        onPreviewMail: (subject, text)=>previewOutgoingMail(subject, text),
                                        onSendMail: (subject, text)=>sendOutgoingMail(subject, text, {
                                                clearMainComposer: false
                                            })
                                    }
                                }, seg.row.key, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1058,
                                    columnNumber: 21
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmailThreadConversation, {
                                    rows: seg.rows,
                                    open: searchOpen || openActivityKeys.has(seg.threadKey),
                                    onToggle: ()=>toggleActivity(seg.threadKey),
                                    searchActive: searchOpen,
                                    customerEmail: lead.email,
                                    mailError: mailError,
                                    onClearMailError: ()=>setMailError(''),
                                    mailBusy: mailBusy,
                                    mailPreviewBusy: mailPreviewBusy,
                                    onPreviewMail: (subject, text)=>previewOutgoingMail(subject, text),
                                    onSendMail: (subject, text)=>sendOutgoingMail(subject, text, {
                                            clearMainComposer: false
                                        })
                                }, seg.threadKey, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1083,
                                    columnNumber: 21
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1050,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 915,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 914,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EmailPreviewModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: mailPreviewOpen,
                onClose: ()=>{
                    setMailPreviewOpen(false);
                    setMailPreviewData(null);
                },
                preview: mailPreviewData,
                title: "Outgoing email preview"
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1106,
                columnNumber: 7
            }, this),
            invoiceOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-xl border border-slate-200 max-w-lg w-full max-h-[90vh] overflow-hidden flex flex-col",
                    role: "dialog",
                    "aria-labelledby": "invoice-title",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-5 py-4 border-b border-slate-100 flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    id: "invoice-title",
                                    className: "font-semibold text-slate-900",
                                    children: "Send invoice"
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1124,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setInvoiceOpen(false),
                                    className: "text-slate-400 hover:text-slate-600 text-xl leading-none px-1",
                                    "aria-label": "Close",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1127,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1123,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-5 overflow-y-auto flex-1 space-y-4",
                            children: [
                                invoiceStep === 'link' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-slate-600",
                                            children: [
                                                "Paste your Stripe Payment Link. We'll merge",
                                                ' ',
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "name"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                    lineNumber: 1141,
                                                    columnNumber: 21
                                                }, this),
                                                " and ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "address"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                    lineNumber: 1141,
                                                    columnNumber: 47
                                                }, this),
                                                " from this lead into the message."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 1139,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: inputClass,
                                            placeholder: "https://buy.stripe.com/…",
                                            value: stripeLink,
                                            onChange: (e)=>setStripeLink(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 1143,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true),
                                invoiceStep === 'preview' && invoicePreview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-medium text-slate-500",
                                            children: "Subject"
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 1153,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-slate-900",
                                            children: invoicePreview.subject
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 1154,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-medium text-slate-500 mt-3",
                                            children: "Preview"
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 1155,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-lg border border-slate-100 bg-slate-50/80 p-4 text-sm overflow-auto max-h-48",
                                            dangerouslySetInnerHTML: {
                                                __html: invoicePreview.html
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 1156,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true),
                                invoiceError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-red-600",
                                    children: invoiceError
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1162,
                                    columnNumber: 32
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1136,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-5 py-4 border-t border-slate-100 flex gap-2 justify-end",
                            children: invoiceStep === 'link' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setInvoiceOpen(false),
                                        className: "px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded-lg",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 1167,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        disabled: invoiceBusy || !stripeLink.trim(),
                                        onClick: previewInvoice,
                                        className: "px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 disabled:opacity-50",
                                        children: invoiceBusy ? '…' : 'Preview'
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 1174,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            setInvoiceStep('link');
                                            setInvoicePreview(null);
                                        },
                                        className: "px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded-lg",
                                        children: "Back"
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 1185,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        disabled: invoiceBusy,
                                        onClick: sendInvoice,
                                        className: "px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark disabled:opacity-50",
                                        children: invoiceBusy ? 'Sending…' : 'Send email'
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 1195,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1164,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 1118,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1117,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/crm/LeadWorkspace.tsx",
        lineNumber: 671,
        columnNumber: 5
    }, this);
}
_s(LeadWorkspace, "w9gfWkqnWhs1XQj3HT2FdtUqesI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LeadWorkspace;
function ContactField({ label, labelHint, shortLabel, emptyHint, editing, fieldKey, draft, setDraft, displayValue, saving, error, inputRef, onStartEdit, onSave, onCancel, multiline, markdown, minH = 'min-h-[4rem]', type = 'text', autoComplete, placeholder, variant = 'default' }) {
    _s1();
    const active = editing === fieldKey;
    const [mdPreview, setMdPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactField.useEffect": ()=>{
            if (!active) setMdPreview(false);
        }
    }["ContactField.useEffect"], [
        active
    ]);
    const isHeroName = variant === 'heroName';
    const isHeroEmail = variant === 'heroEmail';
    const isHeaderCompact = variant === 'headerCompact';
    const rowLabel = shortLabel ?? label;
    const collapsedLineClamp = multiline ? 'line-clamp-2' : 'truncate';
    const mdSourceLines = markdown && multiline && displayValue.trim() ? sourceLineCount(displayValue) : 0;
    const longProfileMarkdown = Boolean(markdown && multiline && displayValue.trim() && mdSourceLines > 5);
    const [mdExpanded, setMdExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactField.useEffect": ()=>{
            setMdExpanded(false);
        }
    }["ContactField.useEffect"], [
        displayValue
    ]);
    function onKeyDown(e) {
        if (e.key === 'Escape') {
            e.preventDefault();
            onCancel();
        }
        if (!multiline && e.key === 'Enter') {
            e.preventDefault();
            onSave();
        }
    }
    const nameInputEditClass = `${inputClassCompact} text-base font-semibold`;
    if (!active) {
        if (isHeroName) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sr-only",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 1299,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onStartEdit,
                        title: "Edit name",
                        className: "w-full text-left rounded-md -mx-0.5 px-0.5 py-0.5 hover:bg-slate-50 transition-colors",
                        children: displayValue.trim() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block text-lg font-semibold text-slate-900 tracking-tight truncate",
                            children: displayValue
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1307,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-slate-400 italic",
                            children: emptyHint
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1311,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 1300,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1298,
                columnNumber: 9
            }, this);
        }
        const labelCol = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: isHeaderCompact ? 'text-[10px] font-semibold uppercase tracking-wide text-slate-400 leading-tight pt-0.5' : 'text-[10px] font-semibold uppercase tracking-wide text-slate-400 w-[3.75rem] sm:w-20 shrink-0 leading-tight pt-0.5',
            children: [
                isHeroEmail ? 'Email' : rowLabel,
                labelHint && !isHeroEmail ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "block font-normal normal-case text-[9px] text-slate-400 mt-0.5",
                    children: labelHint.replace(/[()]/g, '')
                }, void 0, false, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 1328,
                    columnNumber: 11
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/components/crm/LeadWorkspace.tsx",
            lineNumber: 1319,
            columnNumber: 7
        }, this);
        const shellClass = isHeaderCompact ? 'w-full grid grid-cols-[5.25rem_1fr] sm:grid-cols-[6.5rem_1fr] gap-x-3 items-start text-left rounded-md -mx-0.5 px-0.5 py-0.5 hover:bg-slate-50 transition-colors cursor-pointer' : 'w-full flex items-start gap-2 text-left rounded-md -mx-0.5 px-0.5 py-0.5 hover:bg-slate-50 transition-colors cursor-pointer';
        if (markdown && multiline && displayValue.trim()) {
            const mdClampClass = longProfileMarkdown && !mdExpanded ? 'line-clamp-5' : '';
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: isHeaderCompact ? 'w-full grid grid-cols-[5.25rem_1fr] sm:grid-cols-[6.5rem_1fr] gap-x-3 items-start text-left rounded-md -mx-0.5 px-0.5 py-0.5' : 'w-full flex items-start gap-2 text-left rounded-md -mx-0.5 px-0.5 py-0.5',
                    children: [
                        labelCol,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `min-w-0 text-left ${isHeaderCompact ? '' : 'flex-1'} space-y-1`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    role: "button",
                                    tabIndex: 0,
                                    title: `Edit ${label}`,
                                    className: "rounded-md -mx-0.5 px-0.5 py-0.5 hover:bg-slate-50 transition-colors cursor-pointer",
                                    onClick: onStartEdit,
                                    onKeyDown: (e)=>{
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            onStartEdit();
                                        }
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `break-words ${mdClampClass}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$crm$2f$CrmMarkdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            source: displayValue,
                                            className: "!my-0 text-xs prose-headings:my-1 prose-p:my-0.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 1367,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 1366,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1353,
                                    columnNumber: 15
                                }, this),
                                longProfileMarkdown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        setMdExpanded((v)=>!v);
                                    },
                                    className: "text-xs font-medium text-primary hover:underline",
                                    children: mdExpanded ? 'Show less' : 'Show more'
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1374,
                                    columnNumber: 17
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1352,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 1344,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1343,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onStartEdit,
                title: `Edit ${label}`,
                className: isHeaderCompact ? 'w-full grid grid-cols-[5.25rem_1fr] sm:grid-cols-[6.5rem_1fr] gap-x-3 items-start text-left rounded-md -mx-0.5 px-0.5 py-0.5 hover:bg-slate-50 transition-colors' : 'w-full flex items-start gap-2 text-left rounded-md -mx-0.5 px-0.5 py-0.5 hover:bg-slate-50 transition-colors',
                children: [
                    labelCol,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `min-w-0 text-xs text-slate-700 leading-snug text-left ${isHeaderCompact ? '' : 'flex-1'} ${collapsedLineClamp} break-words ${multiline ? 'whitespace-pre-line' : ''}`,
                        children: displayValue.trim() ? displayValue : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-slate-400 italic",
                            children: emptyHint
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1407,
                            columnNumber: 51
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 1404,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1393,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/crm/LeadWorkspace.tsx",
            lineNumber: 1392,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "py-2 space-y-2 rounded-lg border border-slate-200 bg-slate-50/70 px-2.5 -mx-0.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs font-medium text-slate-600",
                    children: [
                        label,
                        labelHint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-normal text-slate-400",
                            children: [
                                " ",
                                labelHint
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1419,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 1417,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1416,
                columnNumber: 7
            }, this),
            multiline ? mdPreview && markdown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${textareaClassCompact} ${minH} overflow-y-auto bg-white`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$crm$2f$CrmMarkdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    source: draft
                }, void 0, false, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 1427,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1424,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                ref: inputRef,
                className: `${textareaClassCompact} ${minH}`,
                value: draft,
                onChange: (e)=>setDraft(e.target.value),
                onKeyDown: onKeyDown,
                placeholder: placeholder
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1430,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: inputRef,
                type: type,
                autoComplete: autoComplete,
                className: isHeroName ? nameInputEditClass : inputClassCompact,
                value: draft,
                onChange: (e)=>setDraft(e.target.value),
                onKeyDown: onKeyDown,
                placeholder: placeholder
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1440,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-1.5",
                children: [
                    multiline && markdown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setMdPreview((p)=>!p),
                        disabled: saving || !draft.trim(),
                        className: "px-2.5 py-1 rounded-md border border-slate-200 bg-white text-xs text-slate-700 hover:bg-slate-50 disabled:opacity-50",
                        children: mdPreview ? 'Edit markdown' : 'Preview markdown'
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 1453,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onSave,
                        disabled: saving,
                        className: "px-2.5 py-1 rounded-md bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 disabled:opacity-50",
                        children: saving ? 'Saving…' : 'Save'
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 1462,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onCancel,
                        disabled: saving,
                        className: "px-2.5 py-1 rounded-md border border-slate-200 bg-white text-xs text-slate-600 hover:bg-slate-50 disabled:opacity-50",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 1470,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1451,
                columnNumber: 7
            }, this),
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-red-600",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1479,
                columnNumber: 16
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/crm/LeadWorkspace.tsx",
        lineNumber: 1415,
        columnNumber: 5
    }, this);
}
_s1(ContactField, "05dHfnbi//o56c4iOsfpiNH/kGE=");
_c1 = ContactField;
function StaffNoteActivityCard({ ev, open, onToggle, onLeadUpdated, updateTimelineNote }) {
    _s2();
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(ev.body);
    const [editMdPreview, setEditMdPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [err, setErr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StaffNoteActivityCard.useEffect": ()=>{
            if (!editing) setDraft(ev.body);
        }
    }["StaffNoteActivityCard.useEffect"], [
        ev.body,
        ev.id,
        editing
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StaffNoteActivityCard.useEffect": ()=>{
            if (!editing) setEditMdPreview(false);
        }
    }["StaffNoteActivityCard.useEffect"], [
        editing
    ]);
    function startEdit() {
        if (!open) onToggle();
        setEditing(true);
        setDraft(ev.body);
        setEditMdPreview(false);
        setErr('');
    }
    function cancelEdit() {
        setDraft(ev.body);
        setEditing(false);
        setErr('');
        setEditMdPreview(false);
    }
    async function saveNote() {
        setErr('');
        const t = draft.trim();
        if (!t) {
            setErr('Note cannot be empty.');
            return;
        }
        if (t === ev.body) {
            setEditing(false);
            return;
        }
        setBusy(true);
        try {
            const next = await updateTimelineNote(ev.id, draft);
            if (next) onLeadUpdated(next);
            setEditing(false);
        } catch (e) {
            setErr(e instanceof Error ? e.message : 'Save failed');
        } finally{
            setBusy(false);
        }
    }
    const needsExpand = sourceLineCount(ev.body) > 5;
    const showClamped = needsExpand && !open;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "relative ml-2 rounded-xl border border-amber-200/80 bg-amber-50/40 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -left-[15px] top-4 h-2.5 w-2.5 rounded-full border-2 border-white bg-amber-400"
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1557,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full text-left px-3 py-2 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-b border-amber-200/50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 flex flex-wrap items-center gap-x-2 gap-y-0.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-semibold uppercase tracking-wide text-amber-900/90",
                                children: "Staff note"
                            }, void 0, false, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 1560,
                                columnNumber: 11
                            }, this),
                            needsExpand && !editing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onToggle,
                                className: "text-xs font-medium text-amber-800/70 hover:underline",
                                children: open ? 'Show less' : 'Expand'
                            }, void 0, false, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 1562,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 1559,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                        className: "text-[11px] text-slate-500 tabular-nums whitespace-nowrap shrink-0",
                        dateTime: ev.createdAt,
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCrmDateTime"])(ev.createdAt),
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCrmDateTimeCompact"])(ev.createdAt)
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 1571,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1558,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3 pb-3 pt-1.5",
                children: editing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        editMdPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-md border border-amber-200/80 bg-white/90 px-3 py-2 min-h-[6rem] overflow-y-auto",
                            children: draft.trim() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$crm$2f$CrmMarkdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                source: draft,
                                variant: "amber"
                            }, void 0, false, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 1585,
                                columnNumber: 19
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-slate-400 italic",
                                children: "Nothing to preview."
                            }, void 0, false, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 1587,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1583,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            className: `${inputClass} min-h-[6rem] resize-y bg-white`,
                            value: draft,
                            onChange: (e)=>setDraft(e.target.value),
                            disabled: busy,
                            "aria-label": "Edit staff note"
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1591,
                            columnNumber: 15
                        }, this),
                        err ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-red-600 mt-2",
                            children: err
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1599,
                            columnNumber: 20
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2 mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    disabled: busy || !draft.trim(),
                                    onClick: ()=>setEditMdPreview((p)=>!p),
                                    className: "px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-700 text-xs font-medium hover:bg-slate-50 disabled:opacity-50",
                                    children: editMdPreview ? 'Edit markdown' : 'Preview markdown'
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1601,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    disabled: busy,
                                    onClick: ()=>void saveNote(),
                                    className: "px-3 py-1.5 rounded-lg bg-amber-900 text-white text-xs font-semibold hover:bg-amber-950 disabled:opacity-50",
                                    children: busy ? 'Saving…' : 'Save'
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1609,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    disabled: busy,
                                    onClick: cancelEdit,
                                    className: "px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-700 text-xs font-medium hover:bg-slate-50 disabled:opacity-50",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1617,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1600,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: showClamped ? 'line-clamp-5' : '',
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$crm$2f$CrmMarkdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                source: ev.body,
                                variant: "amber"
                            }, void 0, false, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 1630,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1629,
                            columnNumber: 13
                        }, this),
                        (!needsExpand || open) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: startEdit,
                            className: "mt-2 text-xs font-medium text-amber-900/90 hover:underline",
                            children: "Edit note"
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1633,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1579,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/crm/LeadWorkspace.tsx",
        lineNumber: 1556,
        columnNumber: 5
    }, this);
}
_s2(StaffNoteActivityCard, "L/VBFaqvzTppA3CGYJDztdBRUog=");
_c2 = StaffNoteActivityCard;
function ActivityItem({ row, open, onToggle, searchActive, staffNoteActions, emailReply }) {
    if (row.kind === 'created') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "relative ml-2 rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-2.5 text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -left-[15px] top-3 h-2.5 w-2.5 rounded-full border-2 border-white bg-slate-300"
                }, void 0, false, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 1666,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-baseline justify-between gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold text-slate-700",
                            children: "Lead record created"
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1668,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                            className: "text-xs text-slate-500 tabular-nums",
                            dateTime: row.sortAt,
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCrmDateTime"])(row.sortAt)
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1669,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 1667,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-slate-400 mt-1",
                    children: "System · record added to CRM"
                }, void 0, false, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 1673,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/crm/LeadWorkspace.tsx",
            lineNumber: 1665,
            columnNumber: 7
        }, this);
    }
    if (row.kind === 'email' && row.email) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmailActivityCard, {
            message: row.email,
            open: open,
            onToggle: onToggle,
            showToggle: !searchActive,
            ...emailReply
        }, void 0, false, {
            fileName: "[project]/components/crm/LeadWorkspace.tsx",
            lineNumber: 1680,
            columnNumber: 7
        }, this);
    }
    if (row.kind === 'staff_note' && row.timeline?.kind === 'staff_note') {
        const ev = row.timeline;
        if (staffNoteActions) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StaffNoteActivityCard, {
                ev: ev,
                open: open,
                onToggle: onToggle,
                ...staffNoteActions
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1694,
                columnNumber: 9
            }, this);
        }
        const needsExpand = sourceLineCount(ev.body) > 5;
        const showClamped = needsExpand && !open;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "relative ml-2 rounded-xl border border-amber-200/80 bg-amber-50/40 overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -left-[15px] top-4 h-2.5 w-2.5 rounded-full border-2 border-white bg-amber-400"
                }, void 0, false, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 1706,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full text-left px-3 py-2 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-b border-amber-200/50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0 flex flex-wrap items-center gap-x-2 gap-y-0.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-semibold uppercase tracking-wide text-amber-900/90",
                                    children: "Staff note"
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1709,
                                    columnNumber: 13
                                }, this),
                                needsExpand ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onToggle,
                                    className: "text-xs font-medium text-amber-800/70 hover:underline",
                                    children: open ? 'Show less' : 'Expand'
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1711,
                                    columnNumber: 15
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1708,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                            className: "text-[11px] text-slate-500 tabular-nums whitespace-nowrap shrink-0",
                            dateTime: ev.createdAt,
                            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCrmDateTime"])(ev.createdAt),
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCrmDateTimeCompact"])(ev.createdAt)
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1720,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 1707,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-3 pb-3 pt-1.5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: showClamped ? 'line-clamp-5' : '',
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$crm$2f$CrmMarkdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            source: ev.body,
                            variant: "amber"
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1730,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 1729,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 1728,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/crm/LeadWorkspace.tsx",
            lineNumber: 1705,
            columnNumber: 7
        }, this);
    }
    if (row.kind === 'profile_update' && row.timeline?.kind === 'profile_update') {
        const ev = row.timeline;
        const summary = ev.lines.length === 1 ? ev.lines[0] : `Profile updated · ${ev.lines.length} changes`;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "relative ml-2 rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -left-[15px] top-4 h-2.5 w-2.5 rounded-full border-2 border-white bg-primary/70"
                }, void 0, false, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 1745,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-3 py-2.5 flex flex-wrap items-start justify-between gap-3 hover:bg-slate-50/80 transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0 flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-semibold uppercase tracking-wide text-slate-500",
                                    children: "Saved edit"
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1748,
                                    columnNumber: 13
                                }, this),
                                open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mt-2 text-sm text-slate-800 space-y-1.5 list-disc pl-4 marker:text-slate-400",
                                    children: ev.lines.map((line)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "break-words whitespace-pre-wrap leading-snug pl-0.5",
                                            children: line
                                        }, line, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 1752,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1750,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onToggle,
                                    className: "mt-0.5 w-full text-left rounded-md -mx-1 px-1 py-0.5 hover:bg-slate-100/80 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-slate-800 leading-snug break-words",
                                        children: summary
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 1763,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1758,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1747,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-end gap-0.5 shrink-0 text-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                                    className: "text-[11px] text-slate-500 tabular-nums",
                                    dateTime: ev.createdAt,
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCrmDateTimeCompact"])(ev.createdAt)
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1768,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                                    className: "text-[10px] text-slate-400 tabular-nums max-w-[14rem]",
                                    dateTime: ev.createdAt,
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCrmDateTime"])(ev.createdAt)
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1771,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onToggle,
                                    className: "text-xs text-primary font-medium hover:underline mt-1",
                                    children: open ? 'Hide' : 'Details'
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1774,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1767,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 1746,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/crm/LeadWorkspace.tsx",
            lineNumber: 1744,
            columnNumber: 7
        }, this);
    }
    return null;
}
_c3 = ActivityItem;
function EmailMessageBubble({ message }) {
    const outbound = message.direction === 'outbound';
    const body = stripEmailReplyQuotes(message.bodyText);
    const compact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCrmDateTimeCompact"])(message.createdAt);
    const failure = message.deliveryFailure;
    if (message.kind === 'bounce' && message.bounce) {
        const b = message.bounce;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-start",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[min(100%,32rem)] rounded-2xl rounded-bl-md border border-amber-300/90 bg-amber-50/95 px-3.5 py-2.5 text-amber-950 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] font-semibold mb-1.5 text-amber-900/90",
                        children: [
                            "Delivery failure (unlinked notice) · ",
                            compact
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 1801,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-semibold text-amber-950",
                        children: b.summary
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 1804,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-amber-900/90 mt-1 break-all",
                        children: [
                            "Failed address: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono",
                                children: b.failedRecipient
                            }, void 0, false, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 1806,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 1805,
                        columnNumber: 11
                    }, this),
                    b.diagnostic ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] text-amber-900/80 mt-2 font-mono leading-snug break-all",
                        children: b.diagnostic
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 1809,
                        columnNumber: 13
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] text-amber-800/80 mt-2 border-t border-amber-200/80 pt-2 whitespace-pre-wrap leading-relaxed",
                        children: [
                            body.slice(0, 1200),
                            body.length > 1200 ? '…' : ''
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 1813,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1800,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/crm/LeadWorkspace.tsx",
            lineNumber: 1799,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: outbound ? 'flex justify-end' : 'flex justify-start',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: outbound ? `max-w-[min(100%,32rem)] rounded-[1.25rem] rounded-br-md px-3.5 py-2.5 shadow-sm ${failure ? 'bg-primary text-white ring-2 ring-amber-400/90 ring-offset-2 ring-offset-white' : 'bg-primary text-white'}` : 'max-w-[min(100%,32rem)] rounded-[1.25rem] rounded-bl-md bg-slate-200/90 px-3.5 py-2.5 text-slate-900 shadow-sm',
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: `text-[11px] font-medium mb-1 tabular-nums ${outbound ? 'text-white/80' : 'text-slate-600'}`,
                    children: [
                        outbound ? 'You' : 'Them',
                        " · ",
                        compact
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 1835,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: `text-[15px] whitespace-pre-wrap leading-snug ${outbound ? 'text-white' : 'text-slate-900'}`,
                    children: body || '—'
                }, void 0, false, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 1840,
                    columnNumber: 9
                }, this),
                outbound && failure ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-2.5 pt-2.5 border-t border-white/25 text-left space-y-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] font-semibold text-amber-100 uppercase tracking-wide",
                            children: "Not delivered"
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1847,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold text-white",
                            children: failure.summary
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1850,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] text-white/90 break-all",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono",
                                children: failure.failedRecipient
                            }, void 0, false, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 1852,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1851,
                            columnNumber: 13
                        }, this),
                        failure.diagnostic ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] text-white/75 font-mono leading-snug break-all",
                            children: failure.diagnostic
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1855,
                            columnNumber: 15
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] text-white/60 tabular-nums",
                            children: [
                                "Reported ",
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCrmDateTimeCompact"])(failure.recordedAt)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1859,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 1846,
                    columnNumber: 11
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/components/crm/LeadWorkspace.tsx",
            lineNumber: 1824,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/crm/LeadWorkspace.tsx",
        lineNumber: 1823,
        columnNumber: 5
    }, this);
}
_c4 = EmailMessageBubble;
/**
 * Chat-style follow-up. Subject is chosen automatically (Re: …) for email threading
 * but not shown like an email composer.
 */ function latestOutboundInThread(messages) {
    for(let i = messages.length - 1; i >= 0; i--){
        if (messages[i].direction === 'outbound') return messages[i];
    }
    return undefined;
}
function EmailThreadReplyComposer({ threadMessages, customerEmail, followUpBlocked, mailError, onClearMailError, mailBusy, mailPreviewBusy, onPreviewMail, onSendMail }) {
    _s3();
    const [replyBody, setReplyBody] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const canSend = customerEmail.trim().length > 0;
    const replyReady = replyBody.trim().length > 0;
    const composerDisabled = !canSend || followUpBlocked;
    function subjectForSend() {
        return replySubjectForThread(threadMessages);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-3 py-3 bg-slate-100/80 border-t border-slate-200/60",
        children: [
            followUpBlocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-amber-950 bg-amber-50/90 border border-amber-300/80 rounded-xl px-3 py-2 mb-2 leading-snug",
                children: "This send was not delivered, so follow-up from here is turned off. Correct the lead’s email (or wait until a new message in this thread sends successfully), then you can reply again."
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1918,
                columnNumber: 9
            }, this) : null,
            !canSend && !followUpBlocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-amber-900 bg-amber-50/90 border border-amber-200/70 rounded-xl px-3 py-2",
                children: "Add an email address on this lead to send a message."
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1924,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl bg-white border border-slate-200/80 shadow-sm overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        className: "w-full min-h-[4.25rem] max-h-48 px-3.5 py-3 text-[15px] leading-snug bg-transparent border-0 focus:outline-none focus:ring-0 resize-y placeholder:text-slate-400 disabled:opacity-50",
                        placeholder: "Message…",
                        value: replyBody,
                        onChange: (e)=>{
                            onClearMailError();
                            setReplyBody(e.target.value);
                        },
                        disabled: composerDisabled,
                        "aria-label": "Message"
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 1929,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-end gap-2 px-2.5 pb-2.5 pt-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                disabled: composerDisabled || mailPreviewBusy || mailBusy || !replyReady,
                                onClick: ()=>void onPreviewMail(subjectForSend(), replyBody),
                                className: "px-3 py-1.5 rounded-full text-xs font-medium text-slate-600 hover:bg-slate-100 disabled:opacity-40",
                                children: mailPreviewBusy ? 'Preview…' : 'Preview'
                            }, void 0, false, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 1941,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                disabled: composerDisabled || mailBusy || !replyReady,
                                onClick: ()=>{
                                    void (async ()=>{
                                        const ok = await onSendMail(subjectForSend(), replyBody);
                                        if (ok) setReplyBody('');
                                    })();
                                },
                                className: "px-4 py-1.5 rounded-full bg-primary text-white text-xs font-semibold hover:bg-primary-dark disabled:opacity-40 shadow-sm",
                                children: mailBusy ? 'Sending…' : 'Send'
                            }, void 0, false, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 1949,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 1940,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1928,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] text-slate-400 mt-2 px-0.5",
                children: "Goes out through your mail — threading stays linked automatically."
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1964,
                columnNumber: 7
            }, this),
            mailError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-red-600 mt-2",
                children: mailError
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1967,
                columnNumber: 20
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/crm/LeadWorkspace.tsx",
        lineNumber: 1916,
        columnNumber: 5
    }, this);
}
_s3(EmailThreadReplyComposer, "KzCv1cMp4KtrUeIuN1vTWKqwd9g=");
_c5 = EmailThreadReplyComposer;
function EmailThreadConversation({ rows, open, onToggle, searchActive, customerEmail, mailError, onClearMailError, mailBusy, mailPreviewBusy, onPreviewMail, onSendMail }) {
    const messages = rows.map((r)=>r.email).sort((a, b)=>a.createdAt < b.createdAt ? -1 : a.createdAt > b.createdAt ? 1 : 0);
    const subject = threadDisplaySubject(messages);
    const latest = messages[messages.length - 1];
    const strippedLatest = stripEmailReplyQuotes(latest.bodyText);
    const preview = strippedLatest.length > 120 ? `${strippedLatest.slice(0, 120).trim()}…` : strippedLatest;
    const threadFailureSummaries = messages.filter((m)=>m.direction === 'outbound' && m.deliveryFailure).map((m)=>m.deliveryFailure.summary);
    const threadFailureLine = threadFailureSummaries.length > 0 ? threadFailureSummaries.join(' · ') : '';
    const showToggle = !searchActive;
    const latestOutbound = latestOutboundInThread(messages);
    const followUpBlocked = Boolean(latestOutbound?.deliveryFailure);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "relative ml-2 overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-b from-slate-50/95 to-slate-100/60 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -left-[15px] top-5 h-2.5 w-2.5 rounded-full border-2 border-white bg-primary"
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 2009,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onToggle,
                className: "flex w-full items-start justify-between gap-3 border-b border-slate-200/60 bg-white/50 px-3 py-2.5 text-left hover:bg-white/80 transition-colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-medium text-slate-500",
                                        children: [
                                            messages.length,
                                            " in this thread"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 2017,
                                        columnNumber: 13
                                    }, this),
                                    showToggle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-slate-400",
                                        children: open ? '▼' : '▶'
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 2018,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 2016,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-0.5 text-base font-semibold text-slate-900 tracking-tight",
                                children: subject
                            }, void 0, false, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 2020,
                                columnNumber: 11
                            }, this),
                            !open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    threadFailureLine ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-xs font-semibold text-amber-900",
                                        children: [
                                            "Not delivered: ",
                                            threadFailureLine
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 2024,
                                        columnNumber: 17
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 line-clamp-2 text-sm text-slate-600 whitespace-pre-wrap leading-snug",
                                        children: preview
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 2028,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 2015,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                        className: "shrink-0 text-[11px] text-slate-400 tabular-nums",
                        dateTime: latest.createdAt,
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCrmDateTimeCompact"])(latest.createdAt)
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 2034,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 2010,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2.5 px-3 py-3.5 border-b border-slate-200/50 bg-slate-50/40",
                        children: messages.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmailMessageBubble, {
                                message: m
                            }, m.id, false, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 2045,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 2043,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmailThreadReplyComposer, {
                        threadMessages: messages,
                        customerEmail: customerEmail,
                        followUpBlocked: followUpBlocked,
                        mailError: mailError,
                        onClearMailError: onClearMailError,
                        mailBusy: mailBusy,
                        mailPreviewBusy: mailPreviewBusy,
                        onPreviewMail: onPreviewMail,
                        onSendMail: onSendMail
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 2048,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/components/crm/LeadWorkspace.tsx",
        lineNumber: 2008,
        columnNumber: 5
    }, this);
}
_c6 = EmailThreadConversation;
function EmailActivityCard({ message, open, onToggle, showToggle, customerEmail, mailError, onClearMailError, mailBusy, mailPreviewBusy, onPreviewMail, onSendMail }) {
    const outbound = message.direction === 'outbound';
    const isBounce = message.kind === 'bounce';
    const failure = message.deliveryFailure;
    const stripped = stripEmailReplyQuotes(message.bodyText);
    const preview = isBounce && message.bounce ? `${message.bounce.summary} · ${message.bounce.failedRecipient}` : outbound && failure ? `Not delivered: ${failure.summary}` : stripped.length > 140 ? `${stripped.slice(0, 140).trim()}…` : stripped;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: `relative ml-2 overflow-hidden rounded-2xl border shadow-sm ${isBounce ? 'border-amber-300/80 bg-amber-50/50' : outbound && failure ? 'border-amber-300/70 bg-amber-50/30' : outbound ? 'border-primary/20 bg-primary/[0.03]' : 'border-slate-200/90 bg-slate-50/90'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute -left-[15px] top-5 h-2.5 w-2.5 rounded-full border-2 border-white ${isBounce ? 'bg-amber-500' : outbound && failure ? 'bg-amber-500' : outbound ? 'bg-primary' : 'bg-slate-400'}`
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 2108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onToggle,
                className: "flex w-full items-start justify-between gap-3 border-b border-slate-200/60 bg-white/60 px-3 py-2.5 text-left hover:bg-white/90 transition-colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-[11px] font-bold uppercase tracking-wide ${isBounce ? 'text-amber-900' : outbound && failure ? 'text-amber-900' : outbound ? 'text-primary-dark' : 'text-slate-600'}`,
                                        children: isBounce ? 'Bounce / DSN' : outbound && failure ? 'You · not delivered' : outbound ? 'You' : 'Customer'
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 2120,
                                        columnNumber: 13
                                    }, this),
                                    showToggle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-slate-400",
                                        children: open ? '▼' : '▶'
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 2133,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 2119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-0.5 text-sm font-semibold text-slate-900",
                                children: message.subject || '(no subject)'
                            }, void 0, false, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 2135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-0.5 text-[11px] text-slate-500 break-all line-clamp-1",
                                children: [
                                    message.from,
                                    " → ",
                                    message.to
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 2136,
                                columnNumber: 11
                            }, this),
                            !open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1.5 line-clamp-2 text-sm text-slate-600 whitespace-pre-wrap",
                                children: preview
                            }, void 0, false, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 2140,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 2118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                        className: "shrink-0 text-[11px] text-slate-500 tabular-nums",
                        dateTime: message.createdAt,
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCrmDateTimeCompact"])(message.createdAt)
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 2143,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 2113,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `space-y-2 px-3 py-3 ${!isBounce ? 'border-b border-slate-200/60' : ''}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmailMessageBubble, {
                            message: message
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 2153,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 2152,
                        columnNumber: 11
                    }, this),
                    !isBounce ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmailThreadReplyComposer, {
                        threadMessages: [
                            message
                        ],
                        customerEmail: customerEmail,
                        followUpBlocked: Boolean(outbound && failure),
                        mailError: mailError,
                        onClearMailError: onClearMailError,
                        mailBusy: mailBusy,
                        mailPreviewBusy: mailPreviewBusy,
                        onPreviewMail: onPreviewMail,
                        onSendMail: onSendMail
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 2156,
                        columnNumber: 13
                    }, this) : null
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/components/crm/LeadWorkspace.tsx",
        lineNumber: 2097,
        columnNumber: 5
    }, this);
}
_c7 = EmailActivityCard;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "LeadWorkspace");
__turbopack_context__.k.register(_c1, "ContactField");
__turbopack_context__.k.register(_c2, "StaffNoteActivityCard");
__turbopack_context__.k.register(_c3, "ActivityItem");
__turbopack_context__.k.register(_c4, "EmailMessageBubble");
__turbopack_context__.k.register(_c5, "EmailThreadReplyComposer");
__turbopack_context__.k.register(_c6, "EmailThreadConversation");
__turbopack_context__.k.register(_c7, "EmailActivityCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_2d91a635._.js.map