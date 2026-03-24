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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/crm-types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/crm-format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
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
const leadStatusBadge = {
    new_lead: 'bg-emerald-50 text-emerald-800 ring-emerald-600/20',
    warm_lead: 'bg-amber-50 text-amber-900 ring-amber-600/20',
    active_customer: 'bg-primary/10 text-primary-dark ring-primary/25',
    delinquent: 'bg-red-50 text-red-800 ring-red-600/15',
    inactive: 'bg-gray-100 text-gray-600 ring-gray-500/10',
    notification: 'bg-slate-100 text-slate-700 ring-slate-500/20'
};
/** Full-row menu styling: idle = themed strip; active = obvious current selection in open list */ const leadStatusMenuRow = {
    new_lead: {
        idle: 'bg-emerald-50/85 text-emerald-950 hover:bg-emerald-100 border-l-emerald-400/55',
        active: 'bg-emerald-100 text-emerald-950 border-l-emerald-600 ring-2 ring-emerald-600/25 ring-inset shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]'
    },
    warm_lead: {
        idle: 'bg-amber-50/90 text-amber-950 hover:bg-amber-100 border-l-amber-400/60',
        active: 'bg-amber-100 text-amber-950 border-l-amber-600 ring-2 ring-amber-600/25 ring-inset shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]'
    },
    active_customer: {
        idle: 'bg-primary/[0.09] text-primary-dark hover:bg-primary/16 border-l-primary/45',
        active: 'bg-primary/[0.2] text-primary-dark border-l-primary ring-2 ring-primary/35 ring-inset shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]'
    },
    delinquent: {
        idle: 'bg-red-50/90 text-red-950 hover:bg-red-100 border-l-red-400/55',
        active: 'bg-red-100 text-red-950 border-l-red-600 ring-2 ring-red-600/20 ring-inset shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]'
    },
    inactive: {
        idle: 'bg-slate-100/80 text-slate-800 hover:bg-slate-200/85 border-l-slate-400/45',
        active: 'bg-slate-200 text-slate-900 border-l-slate-600 ring-2 ring-slate-500/22 ring-inset shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]'
    },
    notification: {
        idle: 'bg-slate-50 text-slate-900 hover:bg-slate-100 border-l-slate-400/50',
        active: 'bg-slate-200/95 text-slate-950 border-l-slate-700 ring-2 ring-slate-600/22 ring-inset shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]'
    }
};
/** Resolve timeline status lines (`Status · Label → Label`) back to `LeadStatus` for badges */ const LEAD_STATUS_BY_LABEL = Object.fromEntries(_c1 = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEAD_STATUSES"].map(_c = (s)=>[
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEAD_STATUS_LABELS"][s],
        s
    ]));
_c2 = LEAD_STATUS_BY_LABEL;
const PROFILE_STATUS_LINE = /^Status · (.+) → (.+)$/;
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
/** Timeline email row label: lead name, else email local-part, else generic. */ function timelineContactLabel(name, email) {
    const n = name.trim();
    if (n) return n;
    const e = email.trim();
    if (e) {
        const local = e.split('@')[0]?.trim();
        if (local) return local;
        return e;
    }
    return 'Customer';
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
/** Newline count for “N lines” truncation (timeline staff notes). */ function sourceLineCount(text) {
    if (!text) return 0;
    return text.split(/\r?\n/).length;
}
/** Saved-edit cards: only show Details/Hide when collapsed state hides real content (multi-field or very long line). */ const PROFILE_UPDATE_DETAILS_MIN_CHARS = 220;
function profileUpdateUsesDetailsToggle(lines) {
    if (lines.length > 1) return true;
    return (lines[0]?.length ?? 0) > PROFILE_UPDATE_DETAILS_MIN_CHARS;
}
function profileUpdateCollapsedSummary(lines) {
    if (lines.length > 1) return `Profile updated · ${lines.length} changes`;
    const line = lines[0] ?? '';
    const field = line.split(' · ')[0]?.trim() || 'Field';
    if (line.length > PROFILE_UPDATE_DETAILS_MIN_CHARS) return `${field} updated`;
    return line;
}
/** Themed chips for saved “Status · … → …” log lines; other lines stay plain text */ function renderProfileUpdateLine(line) {
    const m = line.match(PROFILE_STATUS_LINE);
    if (!m) return line;
    const fromLabel = m[1].trim();
    const toLabel = m[2].trim();
    const from = LEAD_STATUS_BY_LABEL[fromLabel];
    const to = LEAD_STATUS_BY_LABEL[toLabel];
    if (!from || !to) return line;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-flex flex-wrap items-center gap-x-1.5 gap-y-1 align-middle",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-slate-600 shrink-0",
                children: "Status"
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-slate-400 shrink-0",
                "aria-hidden": true,
                children: "·"
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold ring-1 ring-inset ${leadStatusBadge[from]}`,
                children: fromLabel
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 269,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-slate-400 font-medium tabular-nums shrink-0",
                "aria-hidden": true,
                children: "→"
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 274,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold ring-1 ring-inset ${leadStatusBadge[to]}`,
                children: toLabel
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 277,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/crm/LeadWorkspace.tsx",
        lineNumber: 264,
        columnNumber: 5
    }, this);
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
function parseDismissedDeliveryIds(raw) {
    if (!raw) return new Set();
    const t = raw.trim();
    if (t.startsWith('[')) {
        try {
            const arr = JSON.parse(t);
            if (Array.isArray(arr)) {
                return new Set(arr.filter((x)=>typeof x === 'string'));
            }
        } catch  {
            return new Set();
        }
        return new Set();
    }
    return new Set([
        t
    ]);
}
function readDismissedDeliveries(leadId) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        return parseDismissedDeliveryIds(localStorage.getItem(`${CRM_LEAD_ALERT_DISMISS_DELIVERY}${leadId}`));
    } catch  {
        return new Set();
    }
}
function persistDismissedDeliveries(leadId, ids) {
    try {
        localStorage.setItem(`${CRM_LEAD_ALERT_DISMISS_DELIVERY}${leadId}`, JSON.stringify([
            ...ids
        ]));
    } catch  {
    /* private mode / quota */ }
}
function LeadHeaderNotificationsFlyout({ activeItems, onDismissOne, onDismissAll }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const wrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const count = activeItems.length;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeadHeaderNotificationsFlyout.useEffect": ()=>{
            if (!open) return;
            function onDoc(e) {
                if (wrapRef.current && !wrapRef.current.contains(e.target)) {
                    setOpen(false);
                }
            }
            document.addEventListener('mousedown', onDoc);
            return ({
                "LeadHeaderNotificationsFlyout.useEffect": ()=>document.removeEventListener('mousedown', onDoc)
            })["LeadHeaderNotificationsFlyout.useEffect"];
        }
    }["LeadHeaderNotificationsFlyout.useEffect"], [
        open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeadHeaderNotificationsFlyout.useEffect": ()=>{
            function onKey(e) {
                if (e.key === 'Escape') setOpen(false);
            }
            if (open) {
                document.addEventListener('keydown', onKey);
                return ({
                    "LeadHeaderNotificationsFlyout.useEffect": ()=>document.removeEventListener('keydown', onKey)
                })["LeadHeaderNotificationsFlyout.useEffect"];
            }
        }
    }["LeadHeaderNotificationsFlyout.useEffect"], [
        open
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        ref: wrapRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setOpen((v)=>!v),
                className: "relative flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-colors",
                "aria-label": count ? `Notifications, ${count} unread` : 'Notifications',
                "aria-expanded": open,
                "aria-haspopup": "dialog",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaBell"], {
                        className: "h-4 w-4",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 424,
                        columnNumber: 9
                    }, this),
                    count > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute -right-0.5 -top-0.5 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-red-600 px-0.5 text-[9px] font-bold leading-none text-white tabular-nums",
                        children: count > 9 ? '9+' : count
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 426,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 416,
                columnNumber: 7
            }, this),
            open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 top-full z-50 mt-2 w-[min(calc(100vw-2rem),22rem)] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl ring-1 ring-black/5",
                role: "dialog",
                "aria-label": "Lead notifications",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-2 border-b border-slate-100 bg-slate-50/80 px-3 py-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-slate-900",
                                children: "Notifications"
                            }, void 0, false, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 438,
                                columnNumber: 13
                            }, this),
                            count > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    onDismissAll();
                                    setOpen(false);
                                },
                                className: "text-xs font-medium text-primary hover:underline",
                                children: "Clear all"
                            }, void 0, false, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 440,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 437,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "max-h-80 overflow-y-auto py-1",
                        children: count === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "px-4 py-8 text-center text-sm text-slate-500",
                            children: "No active alerts for this lead."
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 454,
                            columnNumber: 15
                        }, this) : activeItems.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "border-b border-slate-100 px-3 py-3 last:border-b-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] font-semibold uppercase tracking-wide text-amber-900",
                                        children: "Email delivery failed"
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 461,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm font-medium text-slate-900",
                                        children: n.summary
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 464,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-0.5 font-mono text-xs text-slate-600 break-all",
                                        children: n.failedRecipient
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 465,
                                        columnNumber: 19
                                    }, this),
                                    n.diagnostic ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1.5 text-[11px] text-slate-500 font-mono leading-snug break-all",
                                        children: n.diagnostic
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 467,
                                        columnNumber: 21
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-[11px] text-slate-400 tabular-nums",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCrmDateTimeCompact"])(n.recordedAt)
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 471,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            onDismissOne(n.recordedAt);
                                            if (activeItems.length <= 1) setOpen(false);
                                        },
                                        className: "mt-2 text-xs font-medium text-primary hover:underline",
                                        children: "Dismiss"
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 474,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, n.recordedAt, true, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 457,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 452,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 432,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/crm/LeadWorkspace.tsx",
        lineNumber: 415,
        columnNumber: 5
    }, this);
}
_s(LeadHeaderNotificationsFlyout, "UWLnUAfjuXz4P0O+zUQRi5diDlI=");
_c3 = LeadHeaderNotificationsFlyout;
function LeadWorkspace({ initialLead }) {
    _s1();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [lead, setLead] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialLead);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [statusMenuOpen, setStatusMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const statusMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [timelineComposerOpen, setTimelineComposerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const timelineComposerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
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
    const [noteBusy, setNoteBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [noteError, setNoteError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [openActivityKeys, setOpenActivityKeys] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "LeadWorkspace.useState": ()=>new Set()
    }["LeadWorkspace.useState"]);
    const [dismissedDeliveries, setDismissedDeliveries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "LeadWorkspace.useState": ()=>new Set(readDismissedDeliveries(initialLead.id))
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
    const allDeliveryFailuresForLeadEmail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LeadWorkspace.useMemo[allDeliveryFailuresForLeadEmail]": ()=>{
            const norm = lead.email.trim().toLowerCase();
            if (!norm) return [];
            const merged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$bounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeLegacyBounceRowsForDisplay"])(lead.emails);
            const seen = new Set();
            const out = [];
            for (const m of merged){
                const d = m.deliveryFailure;
                if (!d || d.failedRecipient !== norm) continue;
                if (seen.has(d.recordedAt)) continue;
                seen.add(d.recordedAt);
                out.push(d);
            }
            out.sort({
                "LeadWorkspace.useMemo[allDeliveryFailuresForLeadEmail]": (a, b)=>new Date(b.recordedAt).getTime() - new Date(a.recordedAt).getTime()
            }["LeadWorkspace.useMemo[allDeliveryFailuresForLeadEmail]"]);
            return out;
        }
    }["LeadWorkspace.useMemo[allDeliveryFailuresForLeadEmail]"], [
        lead.emails,
        lead.email
    ]);
    const activeDeliveryNotifications = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LeadWorkspace.useMemo[activeDeliveryNotifications]": ()=>allDeliveryFailuresForLeadEmail.filter({
                "LeadWorkspace.useMemo[activeDeliveryNotifications]": (d)=>!dismissedDeliveries.has(d.recordedAt)
            }["LeadWorkspace.useMemo[activeDeliveryNotifications]"])
    }["LeadWorkspace.useMemo[activeDeliveryNotifications]"], [
        allDeliveryFailuresForLeadEmail,
        dismissedDeliveries
    ]);
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
            setStatusMenuOpen(false);
            setTimelineComposerOpen(false);
            setFieldError('');
        }
    }["LeadWorkspace.useEffect"], [
        initialLead
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeadWorkspace.useEffect": ()=>{
            setDismissedDeliveries(new Set(readDismissedDeliveries(lead.id)));
        }
    }["LeadWorkspace.useEffect"], [
        lead.id
    ]);
    function dismissDeliveryNotification(recordedAt) {
        setDismissedDeliveries((prev)=>{
            const next = new Set(prev);
            next.add(recordedAt);
            persistDismissedDeliveries(lead.id, next);
            return next;
        });
    }
    function dismissAllDeliveryNotifications() {
        setDismissedDeliveries((prev)=>{
            const next = new Set(prev);
            for (const d of activeDeliveryNotifications){
                next.add(d.recordedAt);
            }
            persistDismissedDeliveries(lead.id, next);
            return next;
        });
    }
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeadWorkspace.useEffect": ()=>{
            if (!statusMenuOpen) return;
            function onPointerDown(e) {
                const el = statusMenuRef.current;
                if (el && !el.contains(e.target)) setStatusMenuOpen(false);
            }
            function onKeyDown(e) {
                if (e.key === 'Escape') setStatusMenuOpen(false);
            }
            document.addEventListener('pointerdown', onPointerDown);
            document.addEventListener('keydown', onKeyDown);
            return ({
                "LeadWorkspace.useEffect": ()=>{
                    document.removeEventListener('pointerdown', onPointerDown);
                    document.removeEventListener('keydown', onKeyDown);
                }
            })["LeadWorkspace.useEffect"];
        }
    }["LeadWorkspace.useEffect"], [
        statusMenuOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeadWorkspace.useEffect": ()=>{
            if (!timelineComposerOpen) return;
            function onPointerDown(e) {
                const el = timelineComposerRef.current;
                if (el && !el.contains(e.target)) setTimelineComposerOpen(false);
            }
            function onKeyDown(e) {
                if (e.key === 'Escape') setTimelineComposerOpen(false);
            }
            document.addEventListener('pointerdown', onPointerDown);
            document.addEventListener('keydown', onKeyDown);
            return ({
                "LeadWorkspace.useEffect": ()=>{
                    document.removeEventListener('pointerdown', onPointerDown);
                    document.removeEventListener('keydown', onKeyDown);
                }
            })["LeadWorkspace.useEffect"];
        }
    }["LeadWorkspace.useEffect"], [
        timelineComposerOpen
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
        setStatusMenuOpen(false);
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
            setStatusMenuOpen(false);
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
            setStatusMenuOpen(false);
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
        className: "flex flex-col gap-5 pb-8 lg:grid lg:grid-cols-[minmax(272px,320px)_minmax(0,1fr)] lg:grid-rows-[auto_1fr] lg:gap-5 lg:items-start",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-white rounded-xl border border-slate-200 shadow-sm p-3 sm:p-4 lg:col-start-1 lg:row-start-1 lg:self-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/crm",
                        className: "text-xs text-slate-500 hover:text-primary mb-1 inline-block font-medium",
                        children: "← All leads"
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 991,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0",
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
                                    lineNumber: 999,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 998,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex min-w-0 flex-col gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-semibold uppercase tracking-wide text-slate-400",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                lineNumber: 1018,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-full min-w-0",
                                                ref: statusMenuRef,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        id: "lead-status-menu-trigger",
                                                        "aria-haspopup": "listbox",
                                                        "aria-expanded": statusMenuOpen,
                                                        "aria-label": `Status: ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEAD_STATUS_LABELS"][lead.status]}. Change status`,
                                                        disabled: fieldSaving,
                                                        onClick: ()=>{
                                                            setFieldError('');
                                                            cancelEdit();
                                                            setStatusMenuOpen((open)=>!open);
                                                        },
                                                        className: "flex w-full min-w-0 items-center justify-between gap-2 rounded-md border border-slate-200 bg-white px-2.5 py-2 text-xs font-medium text-slate-800 shadow-sm hover:border-primary/35 hover:bg-slate-50/90 transition-colors disabled:opacity-60",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `min-w-0 truncate inline-flex items-center rounded px-1.5 py-0.5 text-[11px] font-semibold ring-1 ring-inset ${leadStatusBadge[lead.status]}`,
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEAD_STATUS_LABELS"][lead.status]
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                                lineNumber: 1036,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronDown"], {
                                                                className: `h-3.5 w-3.5 shrink-0 text-slate-400 transition-transform ${statusMenuOpen ? 'rotate-180' : ''}`,
                                                                "aria-hidden": true
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                                lineNumber: 1041,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                        lineNumber: 1022,
                                                        columnNumber: 17
                                                    }, this),
                                                    statusMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        role: "listbox",
                                                        "aria-labelledby": "lead-status-menu-trigger",
                                                        className: "absolute left-0 top-[calc(100%+0.35rem)] z-50 min-w-[13.5rem] max-w-[min(20rem,calc(100vw-2rem))] rounded-xl border border-slate-200/90 bg-slate-50/80 p-1.5 shadow-lg shadow-slate-900/12 backdrop-blur-sm space-y-1",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEAD_STATUSES"].map((s)=>{
                                                            const selected = s === lead.status;
                                                            const row = leadStatusMenuRow[s];
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                role: "presentation",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    role: "option",
                                                                    "aria-selected": selected,
                                                                    disabled: fieldSaving,
                                                                    onClick: ()=>void saveStatus(s),
                                                                    className: `flex w-full items-center justify-between gap-2 border-l-4 pl-3 pr-3 py-2.5 text-left text-sm font-medium transition-[background-color,box-shadow,ring-color] duration-150 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-1 focus-visible:ring-offset-slate-50 disabled:opacity-50 ${selected ? row.active : row.idle}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LEAD_STATUS_LABELS"][s]
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                                            lineNumber: 1067,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        selected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "shrink-0 rounded-md bg-white/70 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-current ring-1 ring-black/5",
                                                                            "aria-hidden": true,
                                                                            children: "Current"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                                            lineNumber: 1069,
                                                                            columnNumber: 31
                                                                        }, this) : null
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                                    lineNumber: 1057,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, s, false, {
                                                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                                lineNumber: 1056,
                                                                columnNumber: 25
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                        lineNumber: 1047,
                                                        columnNumber: 19
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                lineNumber: 1021,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 1017,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LeadHeaderNotificationsFlyout, {
                                                activeItems: activeDeliveryNotifications,
                                                onDismissOne: dismissDeliveryNotification,
                                                onDismissAll: dismissAllDeliveryNotifications
                                            }, void 0, false, {
                                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                lineNumber: 1085,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: openInvoice,
                                                className: "inline-flex h-9 items-center justify-center rounded-md bg-primary px-3 text-xs font-semibold text-white shadow-sm hover:bg-primary-dark",
                                                children: "Send invoice"
                                            }, void 0, false, {
                                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                lineNumber: 1090,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: deleteLead,
                                                className: "inline-flex h-9 items-center justify-center rounded-md border border-red-200 bg-white px-3 text-xs text-red-700 hover:bg-red-50",
                                                children: "Delete lead"
                                            }, void 0, false, {
                                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                lineNumber: 1097,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 1084,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 1016,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 997,
                        columnNumber: 9
                    }, this),
                    fieldError && statusMenuOpen && !editing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-red-600 mt-1.5",
                        children: fieldError
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 1109,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 990,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0 space-y-5 lg:col-start-2 lg:row-start-1 lg:row-span-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "bg-white rounded-xl border border-slate-200 shadow-sm p-3 sm:p-4 space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0 flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap items-baseline gap-x-2 gap-y-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-base font-semibold text-slate-900 tracking-tight",
                                                    children: "Timeline"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                    lineNumber: 1118,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-slate-400 tabular-nums",
                                                    children: [
                                                        allRows.length,
                                                        " event",
                                                        allRows.length === 1 ? '' : 's'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                    lineNumber: 1119,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 1117,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500 mt-0.5 max-w-2xl leading-snug",
                                            children: "Newest first — emails, notes, and field changes. Gmail syncs about every minute."
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 1123,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1116,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "search",
                                    placeholder: "Search timeline…",
                                    value: activitySearch,
                                    onChange: (e)=>setActivitySearch(e.target.value),
                                    className: "w-full sm:max-w-xs px-2.5 py-1.5 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1127,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1115,
                            columnNumber: 13
                        }, this),
                        activitySearch.trim() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-slate-500 -mt-1",
                            children: [
                                filteredRows.length,
                                " match",
                                filteredRows.length === 1 ? '' : 'es'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1136,
                            columnNumber: 15
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg border border-slate-100 bg-slate-50/60 p-2.5 sm:p-3 space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] font-semibold text-slate-600 uppercase tracking-wide shrink-0",
                                            children: "Add to timeline"
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 1143,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-full sm:w-[min(100%,15rem)] shrink-0",
                                            ref: timelineComposerRef,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    id: "lead-timeline-composer-trigger",
                                                    "aria-haspopup": "listbox",
                                                    "aria-expanded": timelineComposerOpen,
                                                    "aria-label": timelineComposer === 'note' ? 'Composer: add note. Change type' : 'Composer: send email. Change type',
                                                    onClick: ()=>setTimelineComposerOpen((o)=>!o),
                                                    className: "inline-flex w-full items-center justify-between gap-2 rounded-lg border border-slate-200/90 bg-white pl-2.5 pr-2 py-2 text-sm font-medium text-slate-800 shadow-sm hover:border-primary/30 hover:bg-slate-50/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25 focus-visible:ring-offset-1 focus-visible:ring-offset-slate-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-flex min-w-0 items-center gap-2",
                                                            children: [
                                                                timelineComposer === 'note' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaStickyNote"], {
                                                                    className: "shrink-0 text-[14px] text-amber-800/85",
                                                                    "aria-hidden": true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                                    lineNumber: 1162,
                                                                    columnNumber: 25
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEnvelope"], {
                                                                    className: "shrink-0 text-[14px] text-primary-dark",
                                                                    "aria-hidden": true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                                    lineNumber: 1167,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "truncate",
                                                                    children: timelineComposer === 'note' ? 'Add note' : 'Send email'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                                    lineNumber: 1169,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                            lineNumber: 1160,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronDown"], {
                                                            className: `h-3 w-3 shrink-0 text-slate-400 transition-transform duration-200 ${timelineComposerOpen ? 'rotate-180' : ''}`,
                                                            "aria-hidden": true
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                            lineNumber: 1173,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                    lineNumber: 1147,
                                                    columnNumber: 19
                                                }, this),
                                                timelineComposerOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    role: "listbox",
                                                    "aria-labelledby": "lead-timeline-composer-trigger",
                                                    className: "absolute left-0 right-0 top-[calc(100%+0.35rem)] z-40 overflow-hidden rounded-xl border border-slate-200/90 bg-white p-1 shadow-lg shadow-slate-900/[0.08] ring-1 ring-black/[0.04]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            role: "presentation",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                role: "option",
                                                                "aria-selected": timelineComposer === 'note',
                                                                onClick: ()=>{
                                                                    setTimelineComposer('note');
                                                                    setTimelineComposerOpen(false);
                                                                },
                                                                className: `flex w-full items-center gap-2.5 border-l-[3px] py-2.5 pl-2.5 pr-3 text-left text-sm font-medium transition-colors rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-inset ${timelineComposer === 'note' ? 'border-amber-500 bg-amber-50/70 text-amber-950' : 'border-transparent text-slate-700 hover:bg-slate-50'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaStickyNote"], {
                                                                        className: `shrink-0 text-[14px] ${timelineComposer === 'note' ? 'text-amber-800' : 'text-amber-700/70'}`,
                                                                        "aria-hidden": true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                                        lineNumber: 1199,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "min-w-0 flex-1",
                                                                        children: "Add note"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                                        lineNumber: 1203,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    timelineComposer === 'note' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "shrink-0 rounded-md bg-white/80 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-900/90 ring-1 ring-amber-900/10",
                                                                        children: "Current"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                                        lineNumber: 1205,
                                                                        columnNumber: 29
                                                                    }, this) : null
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                                lineNumber: 1185,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                            lineNumber: 1184,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            role: "presentation",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                role: "option",
                                                                "aria-selected": timelineComposer === 'email',
                                                                onClick: ()=>{
                                                                    setTimelineComposer('email');
                                                                    setTimelineComposerOpen(false);
                                                                },
                                                                className: `flex w-full items-center gap-2.5 border-l-[3px] py-2.5 pl-2.5 pr-3 text-left text-sm font-medium transition-colors rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-inset ${timelineComposer === 'email' ? 'border-primary bg-primary/[0.06] text-slate-900' : 'border-transparent text-slate-700 hover:bg-slate-50'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEnvelope"], {
                                                                        className: `shrink-0 text-[14px] ${timelineComposer === 'email' ? 'text-primary-dark' : 'text-slate-400'}`,
                                                                        "aria-hidden": true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                                        lineNumber: 1226,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "min-w-0 flex-1",
                                                                        children: "Send email"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                                        lineNumber: 1230,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    timelineComposer === 'email' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "shrink-0 rounded-md bg-white/90 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary-dark ring-1 ring-primary/15",
                                                                        children: "Current"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                                        lineNumber: 1232,
                                                                        columnNumber: 29
                                                                    }, this) : null
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                                lineNumber: 1212,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                            lineNumber: 1211,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                    lineNumber: 1179,
                                                    columnNumber: 21
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 1146,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1142,
                                    columnNumber: 15
                                }, this),
                                timelineComposer === 'note' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            className: `${inputClass} min-h-[3rem] py-2 resize-y bg-white text-sm`,
                                            placeholder: "Quick note — saves to the timeline with a timestamp",
                                            value: timelineNote,
                                            onChange: (e)=>setTimelineNote(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 1245,
                                            columnNumber: 19
                                        }, this),
                                        noteError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-red-600",
                                            children: noteError
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 1251,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                disabled: noteBusy || !timelineNote.trim(),
                                                onClick: addTimelineNote,
                                                className: "px-3 py-1.5 rounded-md bg-slate-800 text-white text-xs font-medium hover:bg-slate-900 disabled:opacity-50",
                                                children: noteBusy ? 'Adding…' : 'Add note'
                                            }, void 0, false, {
                                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                lineNumber: 1253,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 1252,
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
                                                    lineNumber: 1266,
                                                    columnNumber: 38
                                                }, this),
                                                "). Outbound and inbound messages appear in the timeline below."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 1265,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: `${inputClass} bg-white`,
                                            placeholder: "Subject",
                                            value: mailSubject,
                                            onChange: (e)=>setMailSubject(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 1269,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            className: `${inputClass} min-h-[6rem] py-2 resize-y bg-white text-sm`,
                                            placeholder: "Message",
                                            value: mailBody,
                                            onChange: (e)=>setMailBody(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 1275,
                                            columnNumber: 19
                                        }, this),
                                        mailError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-red-600",
                                            children: mailError
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 1281,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    disabled: mailPreviewBusy || mailBusy || !mailSubject.trim() || !mailBody.trim(),
                                                    onClick: ()=>void previewOutgoingMail(mailSubject, mailBody),
                                                    className: "px-3 py-1.5 rounded-md border border-slate-300 bg-white text-slate-800 text-xs font-medium hover:bg-slate-50 disabled:opacity-50",
                                                    children: mailPreviewBusy ? 'Preview…' : 'Preview'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                    lineNumber: 1283,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    disabled: mailBusy || !mailSubject.trim() || !mailBody.trim(),
                                                    onClick: ()=>void sendOutgoingMail(mailSubject, mailBody),
                                                    className: "px-3 py-1.5 rounded-md bg-primary text-white text-xs font-semibold hover:bg-primary-dark disabled:opacity-50",
                                                    children: mailBusy ? 'Sending…' : 'Send to customer'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                    lineNumber: 1293,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 1282,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1141,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative pl-3 border-l-2 border-primary/20 space-y-2.5 ml-1",
                            children: filteredRows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-dashed border-slate-200 bg-slate-50/50 p-6 text-center text-slate-500 text-sm ml-2",
                                children: "No events match this search."
                            }, void 0, false, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 1308,
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
                                        contactDisplayName: timelineContactLabel(lead.name, lead.email),
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
                                    lineNumber: 1314,
                                    columnNumber: 21
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmailThreadConversation, {
                                    rows: seg.rows,
                                    open: searchOpen || openActivityKeys.has(seg.threadKey),
                                    onToggle: ()=>toggleActivity(seg.threadKey),
                                    searchActive: searchOpen,
                                    contactDisplayName: timelineContactLabel(lead.name, lead.email),
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
                                    lineNumber: 1340,
                                    columnNumber: 21
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1306,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 1114,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl border border-slate-200 shadow-sm p-3 sm:p-4 lg:col-start-1 lg:row-start-2 lg:sticky lg:top-4 lg:z-10 lg:self-start",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-[10px] font-semibold text-slate-500 uppercase tracking-wider",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1367,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-slate-400 leading-snug tabular-nums",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-slate-500",
                                            children: "Created"
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 1371,
                                            columnNumber: 17
                                        }, this),
                                        ' ',
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCrmDateTimeCompact"])(lead.createdAt),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mx-1.5 text-slate-300",
                                            children: "·"
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 1373,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-slate-500",
                                            children: "Updated"
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 1374,
                                            columnNumber: 17
                                        }, this),
                                        ' ',
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCrmDateTimeCompact"])(lead.updatedAt)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1370,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1366,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col divide-y divide-slate-100 pt-1 border-t border-slate-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0 py-2 first:pt-0",
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
                                        lineNumber: 1381,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1380,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0 py-2",
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
                                        lineNumber: 1402,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1401,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0 py-2",
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
                                        lineNumber: 1423,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1422,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0 py-2",
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
                                        minH: "min-h-[5rem]",
                                        placeholder: "Internal reference — timeline shows before → after when you Save"
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 1444,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1443,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1379,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 1365,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1364,
                columnNumber: 9
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
                lineNumber: 1470,
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
                                    lineNumber: 1488,
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
                                    lineNumber: 1491,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1487,
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
                                                    lineNumber: 1505,
                                                    columnNumber: 21
                                                }, this),
                                                " and ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "address"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                    lineNumber: 1505,
                                                    columnNumber: 47
                                                }, this),
                                                " from this lead into the message."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 1503,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: inputClass,
                                            placeholder: "https://buy.stripe.com/…",
                                            value: stripeLink,
                                            onChange: (e)=>setStripeLink(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 1507,
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
                                            lineNumber: 1517,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-slate-900",
                                            children: invoicePreview.subject
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 1518,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-medium text-slate-500 mt-3",
                                            children: "Preview"
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 1519,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-lg border border-slate-100 bg-slate-50/80 p-4 text-sm overflow-auto max-h-48",
                                            dangerouslySetInnerHTML: {
                                                __html: invoicePreview.html
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 1520,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true),
                                invoiceError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-red-600",
                                    children: invoiceError
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1526,
                                    columnNumber: 32
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1500,
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
                                        lineNumber: 1531,
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
                                        lineNumber: 1538,
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
                                        lineNumber: 1549,
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
                                        lineNumber: 1559,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1528,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 1482,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1481,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/crm/LeadWorkspace.tsx",
        lineNumber: 989,
        columnNumber: 5
    }, this);
}
_s1(LeadWorkspace, "3EOuwzKoQEMLatzStwdulyQabx4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c4 = LeadWorkspace;
function ContactField({ label, labelHint, shortLabel, emptyHint, editing, fieldKey, draft, setDraft, displayValue, saving, error, inputRef, onStartEdit, onSave, onCancel, multiline, minH = 'min-h-[4rem]', type = 'text', autoComplete, placeholder, variant = 'default' }) {
    const active = editing === fieldKey;
    const isHeroName = variant === 'heroName';
    const isHeroEmail = variant === 'heroEmail';
    const isHeaderCompact = variant === 'headerCompact';
    const rowLabel = shortLabel ?? label;
    const collapsedLineClamp = multiline ? 'line-clamp-2' : 'truncate';
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
                className: "py-0.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sr-only",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 1648,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onStartEdit,
                        title: "Edit name",
                        className: "w-full text-left rounded-md -mx-0.5 px-0.5 py-0 hover:bg-slate-50 transition-colors",
                        children: displayValue.trim() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block text-base font-semibold text-slate-900 tracking-tight truncate leading-tight",
                            children: displayValue
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1656,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-slate-400 italic",
                            children: emptyHint
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1660,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 1649,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1647,
                columnNumber: 9
            }, this);
        }
        const labelCol = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: isHeaderCompact ? 'text-[10px] font-semibold uppercase tracking-wide text-slate-400 leading-tight' : 'text-[10px] font-semibold uppercase tracking-wide text-slate-400 w-[3.75rem] sm:w-20 shrink-0 leading-tight pt-0.5',
            children: [
                isHeroEmail ? 'Email' : rowLabel,
                labelHint && !isHeroEmail ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: isHeaderCompact ? 'font-normal normal-case text-[9px] text-slate-400 ml-1' : 'block font-normal normal-case text-[9px] text-slate-400 mt-0.5',
                    children: labelHint
                }, void 0, false, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 1677,
                    columnNumber: 11
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/components/crm/LeadWorkspace.tsx",
            lineNumber: 1668,
            columnNumber: 7
        }, this);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: isHeaderCompact ? 'py-0' : 'py-1',
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onStartEdit,
                title: `Edit ${label}`,
                className: isHeaderCompact ? 'w-full flex flex-col gap-1 items-stretch text-left rounded-md -mx-0.5 px-0.5 py-1 hover:bg-slate-50 transition-colors' : 'w-full flex items-start gap-2 text-left rounded-md -mx-0.5 px-0.5 py-0.5 hover:bg-slate-50 transition-colors',
                children: [
                    labelCol,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `min-w-0 leading-snug text-left ${isHeaderCompact ? 'text-sm text-slate-800' : 'flex-1 text-[11px] sm:text-xs text-slate-700'} ${collapsedLineClamp} break-words ${multiline ? 'whitespace-pre-line' : ''}`,
                        children: displayValue.trim() ? displayValue : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-slate-400 italic",
                            children: emptyHint
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1706,
                            columnNumber: 51
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 1703,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1692,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/crm/LeadWorkspace.tsx",
            lineNumber: 1691,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: isHeaderCompact ? 'py-1.5 space-y-1 rounded-lg border border-slate-200 bg-slate-50/70 px-2 -mx-0.5' : 'py-1.5 space-y-1.5 rounded-lg border border-slate-200 bg-slate-50/70 px-2 -mx-0.5',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: isHeaderCompact ? 'text-[10px] font-semibold uppercase tracking-wide text-slate-400' : 'text-xs font-medium text-slate-600',
                    children: [
                        isHeaderCompact ? rowLabel : label,
                        labelHint ? isHeaderCompact ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-normal normal-case text-[9px] text-slate-400 ml-1",
                            children: labelHint
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1732,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-normal text-slate-400",
                            children: [
                                " ",
                                labelHint
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1734,
                            columnNumber: 15
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 1722,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1721,
                columnNumber: 7
            }, this),
            multiline ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                ref: inputRef,
                className: `${textareaClassCompact} ${minH}`,
                value: draft,
                onChange: (e)=>setDraft(e.target.value),
                onKeyDown: onKeyDown,
                placeholder: placeholder
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1740,
                columnNumber: 9
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
                lineNumber: 1749,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onSave,
                        disabled: saving,
                        className: "px-2.5 py-1 rounded-md bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 disabled:opacity-50",
                        children: saving ? 'Saving…' : 'Save'
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 1761,
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
                        lineNumber: 1769,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1760,
                columnNumber: 7
            }, this),
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-red-600",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1778,
                columnNumber: 16
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/crm/LeadWorkspace.tsx",
        lineNumber: 1714,
        columnNumber: 5
    }, this);
}
_c5 = ContactField;
function StaffNoteActivityCard({ ev, open, onToggle, onLeadUpdated, updateTimelineNote }) {
    _s2();
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(ev.body);
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
    function startEdit() {
        if (!open) onToggle();
        setEditing(true);
        setDraft(ev.body);
        setErr('');
    }
    function cancelEdit() {
        setDraft(ev.body);
        setEditing(false);
        setErr('');
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
                lineNumber: 1849,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full text-left px-3 py-2 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-b border-amber-200/50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 flex flex-wrap items-center gap-x-2 gap-y-0.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-amber-900/90",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaStickyNote"], {
                                        className: "text-[13px] text-amber-800/85 shrink-0",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 1853,
                                        columnNumber: 13
                                    }, this),
                                    "Staff note"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 1852,
                                columnNumber: 11
                            }, this),
                            needsExpand && !editing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onToggle,
                                className: "text-xs font-medium text-amber-800/70 hover:underline",
                                children: open ? 'Show less' : 'Expand'
                            }, void 0, false, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 1857,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 1851,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                        className: "text-[11px] text-slate-500 tabular-nums whitespace-nowrap shrink-0",
                        dateTime: ev.createdAt,
                        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCrmDateTime"])(ev.createdAt),
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCrmDateTimeCompact"])(ev.createdAt)
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 1866,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1850,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3 pb-3 pt-1.5",
                children: editing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            className: `${inputClass} min-h-[6rem] resize-y bg-white`,
                            value: draft,
                            onChange: (e)=>setDraft(e.target.value),
                            disabled: busy,
                            "aria-label": "Edit staff note"
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1877,
                            columnNumber: 13
                        }, this),
                        err ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-red-600 mt-2",
                            children: err
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1884,
                            columnNumber: 20
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2 mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    disabled: busy,
                                    onClick: ()=>void saveNote(),
                                    className: "px-3 py-1.5 rounded-lg bg-amber-900 text-white text-xs font-semibold hover:bg-amber-950 disabled:opacity-50",
                                    children: busy ? 'Saving…' : 'Save'
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1886,
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
                                    lineNumber: 1894,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1885,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `text-sm text-slate-800 whitespace-pre-wrap break-words leading-relaxed ${showClamped ? 'line-clamp-5' : ''}`,
                            children: ev.body
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1906,
                            columnNumber: 13
                        }, this),
                        (!needsExpand || open) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: startEdit,
                            className: "mt-2 text-xs font-medium text-amber-900/90 hover:underline",
                            children: "Edit note"
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1912,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1874,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/crm/LeadWorkspace.tsx",
        lineNumber: 1848,
        columnNumber: 5
    }, this);
}
_s2(StaffNoteActivityCard, "dCK8a6Z8o9t0VcIwWJHr+tLZHKw=");
_c6 = StaffNoteActivityCard;
function ActivityItem({ row, open, onToggle, searchActive, staffNoteActions, emailReply }) {
    if (row.kind === 'created') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "relative ml-2 rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-2.5 text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -left-[15px] top-3 h-2.5 w-2.5 rounded-full border-2 border-white bg-slate-300"
                }, void 0, false, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 1945,
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
                            lineNumber: 1947,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                            className: "text-xs text-slate-500 tabular-nums",
                            dateTime: row.sortAt,
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCrmDateTime"])(row.sortAt)
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1948,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 1946,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-slate-400 mt-1",
                    children: "System · record added to CRM"
                }, void 0, false, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 1952,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/crm/LeadWorkspace.tsx",
            lineNumber: 1944,
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
            lineNumber: 1959,
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
                lineNumber: 1973,
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
                    lineNumber: 1985,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full text-left px-3 py-2 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-b border-amber-200/50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0 flex flex-wrap items-center gap-x-2 gap-y-0.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-amber-900/90",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaStickyNote"], {
                                            className: "text-[13px] text-amber-800/85 shrink-0",
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 1989,
                                            columnNumber: 15
                                        }, this),
                                        "Staff note"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1988,
                                    columnNumber: 13
                                }, this),
                                needsExpand ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onToggle,
                                    className: "text-xs font-medium text-amber-800/70 hover:underline",
                                    children: open ? 'Show less' : 'Expand'
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1993,
                                    columnNumber: 15
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1987,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                            className: "text-[11px] text-slate-500 tabular-nums whitespace-nowrap shrink-0",
                            dateTime: ev.createdAt,
                            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCrmDateTime"])(ev.createdAt),
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCrmDateTimeCompact"])(ev.createdAt)
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 2002,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 1986,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-3 pb-3 pt-1.5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-sm text-slate-800 whitespace-pre-wrap break-words leading-relaxed ${showClamped ? 'line-clamp-5' : ''}`,
                        children: ev.body
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 2011,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 2010,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/crm/LeadWorkspace.tsx",
            lineNumber: 1984,
            columnNumber: 7
        }, this);
    }
    if (row.kind === 'profile_update' && row.timeline?.kind === 'profile_update') {
        const ev = row.timeline;
        const useToggle = profileUpdateUsesDetailsToggle(ev.lines);
        const expanded = !useToggle || open;
        const collapsedSummary = profileUpdateCollapsedSummary(ev.lines);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "relative ml-2 rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -left-[15px] top-4 h-2.5 w-2.5 rounded-full border-2 border-white bg-primary/70"
                }, void 0, false, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 2029,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-3 py-2.5 flex flex-wrap items-start justify-between gap-3 hover:bg-slate-50/80 transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0 flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEdit"], {
                                            className: "text-[13px] text-primary/80 shrink-0",
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 2033,
                                            columnNumber: 15
                                        }, this),
                                        "Saved edit"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 2032,
                                    columnNumber: 13
                                }, this),
                                !useToggle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-sm text-slate-800 break-words whitespace-pre-wrap leading-snug",
                                    children: renderProfileUpdateLine(ev.lines[0] ?? '')
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 2037,
                                    columnNumber: 15
                                }, this) : expanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mt-2 text-sm text-slate-800 space-y-1.5 list-disc pl-4 marker:text-slate-400",
                                    children: ev.lines.map((line)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "break-words whitespace-pre-wrap leading-snug pl-0.5",
                                            children: renderProfileUpdateLine(line)
                                        }, line, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 2043,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 2041,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onToggle,
                                    className: "mt-0.5 w-full text-left rounded-md -mx-1 px-1 py-0.5 hover:bg-slate-100/80 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-slate-800 leading-snug break-words",
                                        children: renderProfileUpdateLine(collapsedSummary)
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 2054,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 2049,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 2031,
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
                                    lineNumber: 2061,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                                    className: "text-[10px] text-slate-400 tabular-nums max-w-[14rem]",
                                    dateTime: ev.createdAt,
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCrmDateTime"])(ev.createdAt)
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 2064,
                                    columnNumber: 13
                                }, this),
                                useToggle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onToggle,
                                    className: "text-xs text-primary font-medium hover:underline mt-1",
                                    children: open ? 'Hide' : 'Details'
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 2068,
                                    columnNumber: 15
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 2060,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 2030,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/crm/LeadWorkspace.tsx",
            lineNumber: 2028,
            columnNumber: 7
        }, this);
    }
    return null;
}
_c7 = ActivityItem;
function EmailMessageBubble({ message, contactDisplayName }) {
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
                        lineNumber: 2102,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-semibold text-amber-950",
                        children: b.summary
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 2105,
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
                                lineNumber: 2107,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 2106,
                        columnNumber: 11
                    }, this),
                    b.diagnostic ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] text-amber-900/80 mt-2 font-mono leading-snug break-all",
                        children: b.diagnostic
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 2110,
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
                        lineNumber: 2114,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 2101,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/crm/LeadWorkspace.tsx",
            lineNumber: 2100,
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
                        outbound ? 'You' : contactDisplayName.trim() || 'Customer',
                        " · ",
                        compact
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 2136,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: `text-[15px] whitespace-pre-wrap leading-snug ${outbound ? 'text-white' : 'text-slate-900'}`,
                    children: body || '—'
                }, void 0, false, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 2141,
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
                            lineNumber: 2148,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold text-white",
                            children: failure.summary
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 2151,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] text-white/90 break-all",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono",
                                children: failure.failedRecipient
                            }, void 0, false, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 2153,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 2152,
                            columnNumber: 13
                        }, this),
                        failure.diagnostic ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] text-white/75 font-mono leading-snug break-all",
                            children: failure.diagnostic
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 2156,
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
                            lineNumber: 2160,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 2147,
                    columnNumber: 11
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/components/crm/LeadWorkspace.tsx",
            lineNumber: 2125,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/crm/LeadWorkspace.tsx",
        lineNumber: 2124,
        columnNumber: 5
    }, this);
}
_c8 = EmailMessageBubble;
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
    function subjectForSend() {
        return replySubjectForThread(threadMessages);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-3 py-3 bg-slate-100/80 border-t border-slate-200/60",
        children: followUpBlocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-amber-950 bg-amber-50/90 border border-amber-300/80 rounded-xl px-3 py-2 leading-snug",
            children: "This send was not delivered, so follow-up from here is turned off. Correct the lead’s email (or wait until a new message in this thread sends successfully), then you can reply again."
        }, void 0, false, {
            fileName: "[project]/components/crm/LeadWorkspace.tsx",
            lineNumber: 2220,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                !canSend ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-amber-900 bg-amber-50/90 border border-amber-200/70 rounded-xl px-3 py-2 mb-2",
                    children: "Add an email address on this lead to send a message."
                }, void 0, false, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 2227,
                    columnNumber: 13
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
                            disabled: !canSend,
                            "aria-label": "Message"
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 2232,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center justify-end gap-2 px-2.5 pb-2.5 pt-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    disabled: !canSend || mailPreviewBusy || mailBusy || !replyReady,
                                    onClick: ()=>void onPreviewMail(subjectForSend(), replyBody),
                                    className: "px-3 py-1.5 rounded-full text-xs font-medium text-slate-600 hover:bg-slate-100 disabled:opacity-40",
                                    children: mailPreviewBusy ? 'Preview…' : 'Preview'
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 2244,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    disabled: !canSend || mailBusy || !replyReady,
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
                                    lineNumber: 2252,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 2243,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 2231,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[10px] text-slate-400 mt-2 px-0.5",
                    children: "Goes out through your mail — threading stays linked automatically."
                }, void 0, false, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 2267,
                    columnNumber: 11
                }, this),
                mailError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-red-600 mt-2",
                    children: mailError
                }, void 0, false, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 2270,
                    columnNumber: 24
                }, this) : null
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/components/crm/LeadWorkspace.tsx",
        lineNumber: 2218,
        columnNumber: 5
    }, this);
}
_s3(EmailThreadReplyComposer, "KzCv1cMp4KtrUeIuN1vTWKqwd9g=");
_c9 = EmailThreadReplyComposer;
function EmailThreadConversation({ rows, open, onToggle, searchActive, contactDisplayName, customerEmail, mailError, onClearMailError, mailBusy, mailPreviewBusy, onPreviewMail, onSendMail }) {
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
                lineNumber: 2315,
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
                                        className: "inline-flex items-center gap-1.5 text-xs font-medium text-slate-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEnvelope"], {
                                                className: "text-[13px] text-slate-400 shrink-0",
                                                "aria-hidden": true
                                            }, void 0, false, {
                                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                lineNumber: 2324,
                                                columnNumber: 15
                                            }, this),
                                            messages.length,
                                            " in this thread"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 2323,
                                        columnNumber: 13
                                    }, this),
                                    showToggle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-slate-400",
                                        children: open ? '▼' : '▶'
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 2327,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 2322,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-0.5 text-base font-semibold text-slate-900 tracking-tight",
                                children: subject
                            }, void 0, false, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 2329,
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
                                        lineNumber: 2333,
                                        columnNumber: 17
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 line-clamp-2 text-sm text-slate-600 whitespace-pre-wrap leading-snug",
                                        children: preview
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 2337,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 2321,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                        className: "shrink-0 text-[11px] text-slate-400 tabular-nums",
                        dateTime: latest.createdAt,
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCrmDateTimeCompact"])(latest.createdAt)
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 2343,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 2316,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2.5 px-3 py-3.5 border-b border-slate-200/50 bg-slate-50/40",
                        children: messages.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmailMessageBubble, {
                                message: m,
                                contactDisplayName: contactDisplayName
                            }, m.id, false, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 2354,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 2352,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmailThreadReplyComposer, {
                        threadMessages: messages,
                        contactDisplayName: contactDisplayName,
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
                        lineNumber: 2357,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/components/crm/LeadWorkspace.tsx",
        lineNumber: 2314,
        columnNumber: 5
    }, this);
}
_c10 = EmailThreadConversation;
function EmailActivityCard({ message, open, onToggle, showToggle, contactDisplayName, customerEmail, mailError, onClearMailError, mailBusy, mailPreviewBusy, onPreviewMail, onSendMail }) {
    const outbound = message.direction === 'outbound';
    const isBounce = message.kind === 'bounce';
    const failure = message.deliveryFailure;
    const stripped = stripEmailReplyQuotes(message.bodyText);
    const preview = isBounce && message.bounce ? `${message.bounce.summary} · ${message.bounce.failedRecipient}` : outbound && failure ? `Not delivered: ${failure.summary}` : stripped.length > 140 ? `${stripped.slice(0, 140).trim()}…` : stripped;
    const who = contactDisplayName.trim() || 'Customer';
    const roleLine = isBounce ? 'Bounce / DSN' : outbound && failure ? `${who} · not delivered` : who;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: `relative ml-2 overflow-hidden rounded-2xl border shadow-sm ${isBounce ? 'border-amber-300/80 bg-amber-50/50' : outbound && failure ? 'border-amber-300/70 bg-amber-50/30' : outbound ? 'border-primary/20 bg-primary/[0.03]' : 'border-slate-200/90 bg-slate-50/90'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute -left-[15px] top-5 h-2.5 w-2.5 rounded-full border-2 border-white ${isBounce ? 'bg-amber-500' : outbound && failure ? 'bg-amber-500' : outbound ? 'bg-primary' : 'bg-slate-400'}`
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 2426,
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
                                        className: `inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wide ${isBounce ? 'uppercase text-amber-900' : outbound && failure ? 'normal-case text-amber-900' : outbound ? 'normal-case text-primary-dark' : 'normal-case text-slate-600'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEnvelope"], {
                                                className: `text-[12px] shrink-0 ${isBounce || outbound && failure ? 'text-amber-800' : outbound ? 'text-primary-dark' : 'text-slate-500'}`,
                                                "aria-hidden": true
                                            }, void 0, false, {
                                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                lineNumber: 2449,
                                                columnNumber: 15
                                            }, this),
                                            roleLine
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 2438,
                                        columnNumber: 13
                                    }, this),
                                    showToggle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-slate-400",
                                        children: open ? '▼' : '▶'
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 2461,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 2437,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-0.5 text-sm font-semibold text-slate-900",
                                children: message.subject || '(no subject)'
                            }, void 0, false, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 2463,
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
                                lineNumber: 2464,
                                columnNumber: 11
                            }, this),
                            !open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1.5 line-clamp-2 text-sm text-slate-600 whitespace-pre-wrap",
                                children: preview
                            }, void 0, false, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 2468,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 2436,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                        className: "shrink-0 text-[11px] text-slate-500 tabular-nums",
                        dateTime: message.createdAt,
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCrmDateTimeCompact"])(message.createdAt)
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 2471,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 2431,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `space-y-2 px-3 py-3 ${!isBounce ? 'border-b border-slate-200/60' : ''}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmailMessageBubble, {
                            message: message,
                            contactDisplayName: contactDisplayName
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 2481,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 2480,
                        columnNumber: 11
                    }, this),
                    !isBounce ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmailThreadReplyComposer, {
                        threadMessages: [
                            message
                        ],
                        contactDisplayName: contactDisplayName,
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
                        lineNumber: 2484,
                        columnNumber: 13
                    }, this) : null
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/components/crm/LeadWorkspace.tsx",
        lineNumber: 2415,
        columnNumber: 5
    }, this);
}
_c11 = EmailActivityCard;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "LEAD_STATUS_BY_LABEL$Object.fromEntries$LEAD_STATUSES.map");
__turbopack_context__.k.register(_c1, "LEAD_STATUS_BY_LABEL$Object.fromEntries");
__turbopack_context__.k.register(_c2, "LEAD_STATUS_BY_LABEL");
__turbopack_context__.k.register(_c3, "LeadHeaderNotificationsFlyout");
__turbopack_context__.k.register(_c4, "LeadWorkspace");
__turbopack_context__.k.register(_c5, "ContactField");
__turbopack_context__.k.register(_c6, "StaffNoteActivityCard");
__turbopack_context__.k.register(_c7, "ActivityItem");
__turbopack_context__.k.register(_c8, "EmailMessageBubble");
__turbopack_context__.k.register(_c9, "EmailThreadReplyComposer");
__turbopack_context__.k.register(_c10, "EmailThreadConversation");
__turbopack_context__.k.register(_c11, "EmailActivityCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_f0d0f8f8._.js.map