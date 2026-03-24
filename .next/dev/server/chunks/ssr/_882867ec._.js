module.exports = [
"[project]/lib/crm-types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/lib/crm-format.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/components/crm/LeadWorkspace.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LeadWorkspace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/crm-types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/crm-format.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
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
/** Remove Gmail-style quoted replies so the bubble shows only new text. */ function stripEmailReplyQuotes(body) {
    let t = body.trim();
    const patterns = [
        /\r?\n\r?\nOn .{8,200}?wrote:\r?\n/gi,
        /\r?\nOn .{8,200}?wrote:\r?\n/gi
    ];
    for (const re of patterns){
        re.lastIndex = 0;
        const m = re.exec(t);
        if (m && m.index !== -1) {
            t = t.slice(0, m.index).trim();
            break;
        }
    }
    t = t.replace(/(^|\r?\n)\s*>[^\r\n]*(\r?\n|$)/g, '\n').trim();
    return t;
}
function messagesThreadTogether(a, b) {
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
function buildActivityRows(lead) {
    const rows = [
        {
            key: `created-${lead.id}`,
            sortAt: lead.createdAt,
            kind: 'created'
        }
    ];
    for (const m of lead.emails){
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
        return (m.subject || '').toLowerCase().includes(t) || m.bodyText.toLowerCase().includes(t) || m.from.toLowerCase().includes(t) || m.to.toLowerCase().includes(t) || (m.direction === 'outbound' ? 'outbound sent you customer' : 'inbound reply').includes(t);
    }
    if (row.kind === 'staff_note' && row.timeline?.kind === 'staff_note') {
        return row.timeline.body.toLowerCase().includes(t) || 'note staff'.includes(t);
    }
    if (row.kind === 'profile_update' && row.timeline?.kind === 'profile_update') {
        return row.timeline.lines.some((l)=>l.toLowerCase().includes(t)) || 'profile update saved'.includes(t);
    }
    return false;
}
function LeadWorkspace({ initialLead }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [lead, setLead] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialLead);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [statusEditing, setStatusEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fieldSaving, setFieldSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fieldError, setFieldError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const editFieldRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mailSubject, setMailSubject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [mailBody, setMailBody] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [mailBusy, setMailBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mailError, setMailError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [mailPreviewOpen, setMailPreviewOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mailPreviewData, setMailPreviewData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mailPreviewBusy, setMailPreviewBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [invoiceOpen, setInvoiceOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [stripeLink, setStripeLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [invoicePreview, setInvoicePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [invoiceBusy, setInvoiceBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [invoiceError, setInvoiceError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [invoiceStep, setInvoiceStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('link');
    const [activitySearch, setActivitySearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [timelineComposer, setTimelineComposer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('note');
    const [timelineNote, setTimelineNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [noteBusy, setNoteBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [noteError, setNoteError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [openActivityKeys, setOpenActivityKeys] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new Set());
    const allRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>buildActivityRows(lead), [
        lead
    ]);
    const filteredRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const q = activitySearch.trim().toLowerCase();
        if (!q) return allRows;
        return allRows.filter((r)=>rowMatchesQuery(r, q));
    }, [
        allRows,
        activitySearch
    ]);
    const timelineSegments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>groupTimelineRows(filteredRows), [
        filteredRows
    ]);
    const emailSignature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>lead.emails.map((e)=>e.id).join(','), [
        lead.emails
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setLead(initialLead);
        setEditing(null);
        setDraft('');
        setStatusEditing(false);
        setFieldError('');
    }, [
        initialLead
    ]);
    /** Default expansion: latest email or its conversation open. Re-run when the email thread changes. */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const emails = lead.emails;
        if (emails.length === 0) {
            setOpenActivityKeys(new Set());
            return;
        }
        const latest = [
            ...emails
        ].sort((a, b)=>a.createdAt < b.createdAt ? -1 : 1).at(-1);
        const segments = groupTimelineRows(buildActivityRows(lead));
        const threadSeg = segments.find((s)=>s.type === 'email_thread' && s.rows.some((r)=>r.email?.id === latest.id));
        setOpenActivityKeys(new Set([
            threadSeg ? threadSeg.threadKey : `email-${latest.id}`
        ]));
    }, [
        lead.id,
        emailSignature
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (editing) editFieldRef.current?.focus();
    }, [
        editing
    ]);
    const searchOpen = activitySearch.trim().length > 0;
    const gmailSyncInFlight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
        const intervalId = window.setInterval(()=>void pullGmailReplies(), POLL_MS);
        const onVisibility = ()=>{
            if (document.visibilityState === 'visible') void pullGmailReplies();
        };
        document.addEventListener('visibilitychange', onVisibility);
        return ()=>{
            cancelled = true;
            window.clearInterval(intervalId);
            document.removeEventListener('visibilitychange', onVisibility);
        };
    }, [
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
            if (data.lead) setLead(data.lead);
            router.refresh();
        } catch  {
            setNoteError('Request failed');
        } finally{
            setNoteBusy(false);
        }
    }
    async function previewOutgoingMail() {
        setMailError('');
        const subject = mailSubject.trim();
        const text = mailBody.trim();
        if (!subject || !text) {
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
                    subject: mailSubject,
                    text: mailBody,
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
    async function sendMail() {
        setMailError('');
        setMailBusy(true);
        try {
            const res = await fetch(`/api/crm/leads/${lead.id}/send-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    subject: mailSubject,
                    text: mailBody
                })
            });
            const data = await res.json();
            if (!res.ok) {
                setMailError(data.error || 'Send failed');
                return;
            }
            setMailSubject('');
            setMailBody('');
            const refresh = await fetch(`/api/crm/leads/${lead.id}`);
            const j = await refresh.json();
            if (j.lead) setLead(j.lead);
            router.refresh();
        } catch  {
            setMailError('Request failed');
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 pb-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-white rounded-xl border border-slate-200 shadow-sm p-4 sm:p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/crm",
                        className: "text-sm text-slate-500 hover:text-primary mb-3 inline-block font-medium",
                        children: "← All leads"
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 551,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0 flex-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactField, {
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
                                    lineNumber: 559,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 558,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: openInvoice,
                                        className: "px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark shadow-sm",
                                        children: "Send invoice"
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 577,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: deleteLead,
                                        className: "px-4 py-2 rounded-lg border border-red-200 bg-white text-sm text-red-700 hover:bg-red-50",
                                        children: "Delete lead"
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 584,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 576,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 557,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 pt-4 border-t border-slate-100 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-x-4 gap-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
                                        children: "Contact & status"
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 596,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:block h-3 w-px bg-slate-200",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 599,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-2 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-semibold uppercase tracking-wide text-slate-400 shrink-0",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                lineNumber: 601,
                                                columnNumber: 15
                                            }, this),
                                            statusEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap items-center gap-2 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: `${inputClass} w-full min-w-[10rem] sm:w-auto sm:min-w-[12rem] max-w-full`,
                                                        value: lead.status,
                                                        disabled: fieldSaving,
                                                        autoFocus: true,
                                                        onChange: (e)=>void saveStatus(e.target.value),
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LEAD_STATUSES"].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: s,
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LEAD_STATUS_LABELS"][s]
                                                            }, s, false, {
                                                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                                lineNumber: 614,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                        lineNumber: 606,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "text-xs text-slate-500 hover:text-slate-800 px-2 py-1",
                                                        onClick: ()=>setStatusEditing(false),
                                                        children: "Close"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                        lineNumber: 619,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                lineNumber: 605,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setFieldError('');
                                                    cancelEdit();
                                                    setStatusEditing(true);
                                                },
                                                className: "inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-800 hover:border-primary/30 hover:bg-primary/5 transition-colors",
                                                title: "Change status",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LEAD_STATUS_LABELS"][lead.status],
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-2 text-xs text-slate-400 font-normal",
                                                        children: "Edit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                        lineNumber: 639,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                lineNumber: 628,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 600,
                                        columnNumber: 13
                                    }, this),
                                    fieldError && statusEditing && !editing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-red-600 w-full sm:w-auto",
                                        children: fieldError
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 644,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 595,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:gap-x-14",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0 border-b border-slate-100 md:border-b-0 md:pr-6 lg:pr-10 md:border-r md:border-slate-100",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactField, {
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
                                            lineNumber: 650,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 649,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0 border-b border-slate-100 md:border-b-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactField, {
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
                                            lineNumber: 671,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 670,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0 border-b border-slate-100 md:col-span-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactField, {
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
                                            lineNumber: 692,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 691,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0 md:col-span-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactField, {
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
                                            lineNumber: 713,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 712,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 648,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-slate-400 pt-0.5 leading-relaxed md:text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-slate-500",
                                        children: "Created"
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 737,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCrmDateTime"])(lead.createdAt),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mx-2 text-slate-300",
                                        children: "·"
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 738,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-slate-500",
                                        children: "Updated"
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 739,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCrmDateTime"])(lead.updatedAt)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 736,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 594,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 550,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0 space-y-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "bg-white rounded-xl border border-slate-200 shadow-sm p-4 sm:p-5 space-y-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-semibold text-slate-900 tracking-tight",
                                            children: "Timeline"
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 748,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-slate-500 mt-1 max-w-2xl",
                                            children: "Emails, staff notes, status and field changes — everything that happened on this lead. Newest first. Gmail syncs when you open this page and about every minute."
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 749,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 747,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-400 tabular-nums shrink-0",
                                    children: [
                                        allRows.length,
                                        " event",
                                        allRows.length === 1 ? '' : 's'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 754,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 746,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg border border-slate-100 bg-slate-50/60 p-3 sm:p-4 space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "lead-timeline-composer",
                                            className: "text-xs font-semibold text-slate-600 uppercase tracking-wide shrink-0",
                                            children: "Add to timeline"
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 761,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            id: "lead-timeline-composer",
                                            value: timelineComposer,
                                            onChange: (e)=>setTimelineComposer(e.target.value),
                                            className: "w-full sm:w-56 px-3 py-2 rounded-lg border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "note",
                                                    children: "Add note"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                    lineNumber: 773,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "email",
                                                    children: "Send email"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                    lineNumber: 774,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 767,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 760,
                                    columnNumber: 15
                                }, this),
                                timelineComposer === 'note' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            className: `${inputClass} min-h-[4.5rem] resize-y bg-white`,
                                            placeholder: "Call, follow-up, site visit, internal context — shows on the timeline with a time",
                                            value: timelineNote,
                                            onChange: (e)=>setTimelineNote(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 780,
                                            columnNumber: 19
                                        }, this),
                                        noteError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-red-600",
                                            children: noteError
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 786,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            disabled: noteBusy || !timelineNote.trim(),
                                            onClick: addTimelineNote,
                                            className: "px-4 py-2 rounded-lg bg-slate-800 text-white text-sm font-medium hover:bg-slate-900 disabled:opacity-50",
                                            children: noteBusy ? 'Adding…' : 'Add to timeline'
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 787,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500",
                                            children: [
                                                "Sends via Gmail (",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    className: "text-[11px] bg-slate-100 px-1 rounded",
                                                    children: "EMAIL_USER"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                    lineNumber: 799,
                                                    columnNumber: 38
                                                }, this),
                                                "). Outbound and inbound messages appear in the timeline below."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 798,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: `${inputClass} bg-white`,
                                            placeholder: "Subject",
                                            value: mailSubject,
                                            onChange: (e)=>setMailSubject(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 802,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            className: `${inputClass} min-h-[8rem] resize-y bg-white`,
                                            placeholder: "Message",
                                            value: mailBody,
                                            onChange: (e)=>setMailBody(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 808,
                                            columnNumber: 19
                                        }, this),
                                        mailError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-red-600",
                                            children: mailError
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 814,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    disabled: mailPreviewBusy || mailBusy || !mailSubject.trim() || !mailBody.trim(),
                                                    onClick: ()=>void previewOutgoingMail(),
                                                    className: "px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-800 text-sm font-medium hover:bg-slate-50 disabled:opacity-50",
                                                    children: mailPreviewBusy ? 'Preview…' : 'Preview'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                    lineNumber: 816,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    disabled: mailBusy || !mailSubject.trim() || !mailBody.trim(),
                                                    onClick: sendMail,
                                                    className: "px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark disabled:opacity-50",
                                                    children: mailBusy ? 'Sending…' : 'Send to customer'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                    lineNumber: 826,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 815,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 759,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2 sm:flex-row sm:items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "search",
                                    placeholder: "Search timeline (subjects, bodies, notes, changes…)",
                                    value: activitySearch,
                                    onChange: (e)=>setActivitySearch(e.target.value),
                                    className: "flex-1 px-3 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary"
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 840,
                                    columnNumber: 15
                                }, this),
                                activitySearch.trim() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-slate-500 shrink-0",
                                    children: [
                                        filteredRows.length,
                                        " match",
                                        filteredRows.length === 1 ? '' : 'es'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 848,
                                    columnNumber: 17
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 839,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative pl-3 border-l-2 border-primary/20 space-y-3 ml-1",
                            children: filteredRows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-dashed border-slate-200 bg-slate-50/50 p-10 text-center text-slate-500 text-sm ml-2",
                                children: "No events match this search."
                            }, void 0, false, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 856,
                                columnNumber: 17
                            }, this) : timelineSegments.map((seg)=>seg.type === 'row' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ActivityItem, {
                                    row: seg.row,
                                    open: isRowOpen(seg.row.key),
                                    onToggle: ()=>toggleActivity(seg.row.key),
                                    searchActive: searchOpen
                                }, seg.row.key, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 862,
                                    columnNumber: 21
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EmailThreadConversation, {
                                    rows: seg.rows,
                                    open: searchOpen || openActivityKeys.has(seg.threadKey),
                                    onToggle: ()=>toggleActivity(seg.threadKey),
                                    searchActive: searchOpen
                                }, seg.threadKey, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 870,
                                    columnNumber: 21
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 854,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 745,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 744,
                columnNumber: 7
            }, this),
            invoiceOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-xl border border-slate-200 max-w-lg w-full max-h-[90vh] overflow-hidden flex flex-col",
                    role: "dialog",
                    "aria-labelledby": "invoice-title",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-5 py-4 border-b border-slate-100 flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    id: "invoice-title",
                                    className: "font-semibold text-slate-900",
                                    children: "Send invoice"
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 892,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setInvoiceOpen(false),
                                    className: "text-slate-400 hover:text-slate-600 text-xl leading-none px-1",
                                    "aria-label": "Close",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 895,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 891,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-5 overflow-y-auto flex-1 space-y-4",
                            children: [
                                invoiceStep === 'link' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-slate-600",
                                            children: [
                                                "Paste your Stripe Payment Link. We'll merge",
                                                ' ',
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "name"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                    lineNumber: 909,
                                                    columnNumber: 21
                                                }, this),
                                                " and ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "address"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                                    lineNumber: 909,
                                                    columnNumber: 47
                                                }, this),
                                                " from this lead into the message."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 907,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: inputClass,
                                            placeholder: "https://buy.stripe.com/…",
                                            value: stripeLink,
                                            onChange: (e)=>setStripeLink(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 911,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true),
                                invoiceStep === 'preview' && invoicePreview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-medium text-slate-500",
                                            children: "Subject"
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 921,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-slate-900",
                                            children: invoicePreview.subject
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 922,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-medium text-slate-500 mt-3",
                                            children: "Preview"
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 923,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-lg border border-slate-100 bg-slate-50/80 p-4 text-sm overflow-auto max-h-48",
                                            dangerouslySetInnerHTML: {
                                                __html: invoicePreview.html
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 924,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true),
                                invoiceError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-red-600",
                                    children: invoiceError
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 930,
                                    columnNumber: 32
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 904,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-5 py-4 border-t border-slate-100 flex gap-2 justify-end",
                            children: invoiceStep === 'link' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setInvoiceOpen(false),
                                        className: "px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded-lg",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 935,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        disabled: invoiceBusy || !stripeLink.trim(),
                                        onClick: previewInvoice,
                                        className: "px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 disabled:opacity-50",
                                        children: invoiceBusy ? '…' : 'Preview'
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 942,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            setInvoiceStep('link');
                                            setInvoicePreview(null);
                                        },
                                        className: "px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded-lg",
                                        children: "Back"
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 953,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        disabled: invoiceBusy,
                                        onClick: sendInvoice,
                                        className: "px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark disabled:opacity-50",
                                        children: invoiceBusy ? 'Sending…' : 'Send email'
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 963,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 932,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 886,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 885,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/crm/LeadWorkspace.tsx",
        lineNumber: 549,
        columnNumber: 5
    }, this);
}
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sr-only",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 1052,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onStartEdit,
                        title: "Edit name",
                        className: "w-full text-left rounded-md -mx-0.5 px-0.5 py-0.5 hover:bg-slate-50 transition-colors",
                        children: displayValue.trim() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block text-lg font-semibold text-slate-900 tracking-tight truncate",
                            children: displayValue
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1060,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-slate-400 italic",
                            children: emptyHint
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1064,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 1053,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1051,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onStartEdit,
                title: `Edit ${label}`,
                className: isHeaderCompact ? 'w-full grid grid-cols-[5.25rem_1fr] sm:grid-cols-[6.5rem_1fr] gap-x-3 items-start text-left rounded-md -mx-0.5 px-0.5 py-0.5 hover:bg-slate-50 transition-colors' : 'w-full flex items-start gap-2 text-left rounded-md -mx-0.5 px-0.5 py-0.5 hover:bg-slate-50 transition-colors',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: isHeaderCompact ? 'text-[10px] font-semibold uppercase tracking-wide text-slate-400 leading-tight pt-0.5' : 'text-[10px] font-semibold uppercase tracking-wide text-slate-400 w-[3.75rem] sm:w-20 shrink-0 leading-tight pt-0.5',
                        children: [
                            isHeroEmail ? 'Email' : rowLabel,
                            labelHint && !isHeroEmail ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block font-normal normal-case text-[9px] text-slate-400 mt-0.5",
                                children: labelHint.replace(/[()]/g, '')
                            }, void 0, false, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 1092,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 1083,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `min-w-0 text-xs text-slate-700 leading-snug text-left ${isHeaderCompact ? '' : 'flex-1'} ${collapsedLineClamp} break-words ${multiline ? 'whitespace-pre-line' : ''}`,
                        children: displayValue.trim() ? displayValue : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-slate-400 italic",
                            children: emptyHint
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1100,
                            columnNumber: 51
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 1097,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1073,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/crm/LeadWorkspace.tsx",
            lineNumber: 1072,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "py-2 space-y-2 rounded-lg border border-slate-200 bg-slate-50/70 px-2.5 -mx-0.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs font-medium text-slate-600",
                    children: [
                        label,
                        labelHint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-normal text-slate-400",
                            children: [
                                " ",
                                labelHint
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1112,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 1110,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1109,
                columnNumber: 7
            }, this),
            multiline ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                ref: inputRef,
                className: `${textareaClassCompact} ${minH}`,
                value: draft,
                onChange: (e)=>setDraft(e.target.value),
                onKeyDown: onKeyDown,
                placeholder: placeholder
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1116,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                lineNumber: 1125,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onSave,
                        disabled: saving,
                        className: "px-2.5 py-1 rounded-md bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 disabled:opacity-50",
                        children: saving ? 'Saving…' : 'Save'
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 1137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onCancel,
                        disabled: saving,
                        className: "px-2.5 py-1 rounded-md border border-slate-200 bg-white text-xs text-slate-600 hover:bg-slate-50 disabled:opacity-50",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 1145,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1136,
                columnNumber: 7
            }, this),
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-red-600",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1154,
                columnNumber: 16
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/crm/LeadWorkspace.tsx",
        lineNumber: 1108,
        columnNumber: 5
    }, this);
}
function ActivityItem({ row, open, onToggle, searchActive }) {
    if (row.kind === 'created') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "relative ml-2 rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-2.5 text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -left-[15px] top-3 h-2.5 w-2.5 rounded-full border-2 border-white bg-slate-300"
                }, void 0, false, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 1173,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-baseline justify-between gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold text-slate-700",
                            children: "Lead record created"
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1175,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                            className: "text-xs text-slate-500 tabular-nums",
                            dateTime: row.sortAt,
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCrmDateTime"])(row.sortAt)
                        }, void 0, false, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1176,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 1174,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-slate-400 mt-1",
                    children: "System · record added to CRM"
                }, void 0, false, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 1180,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/crm/LeadWorkspace.tsx",
            lineNumber: 1172,
            columnNumber: 7
        }, this);
    }
    if (row.kind === 'email' && row.email) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EmailActivityCard, {
            message: row.email,
            open: open,
            onToggle: onToggle,
            showToggle: !searchActive
        }, void 0, false, {
            fileName: "[project]/components/crm/LeadWorkspace.tsx",
            lineNumber: 1187,
            columnNumber: 7
        }, this);
    }
    if (row.kind === 'staff_note' && row.timeline?.kind === 'staff_note') {
        const ev = row.timeline;
        const preview = ev.body.length > 100 ? `${ev.body.slice(0, 100).trim()}…` : ev.body;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "relative ml-2 rounded-xl border border-amber-200/80 bg-amber-50/40 overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -left-[15px] top-4 h-2.5 w-2.5 rounded-full border-2 border-white bg-amber-400"
                }, void 0, false, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 1202,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: onToggle,
                    className: "w-full text-left px-3 py-2.5 flex flex-wrap items-start justify-between gap-2 hover:bg-amber-50/60 transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-semibold uppercase tracking-wide text-amber-900/90",
                                    children: "Staff note"
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1209,
                                    columnNumber: 13
                                }, this),
                                !open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-800 mt-0.5 line-clamp-2",
                                    children: preview
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1213,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1208,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-end gap-0.5 shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                                    className: "text-[11px] text-slate-500 tabular-nums whitespace-nowrap",
                                    dateTime: ev.createdAt,
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCrmDateTimeCompact"])(ev.createdAt)
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1217,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] text-slate-400 tabular-nums",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCrmDateTime"])(ev.createdAt)
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1220,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-amber-800/70",
                                    children: open ? 'Hide' : 'Expand'
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1221,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1216,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 1203,
                    columnNumber: 9
                }, this),
                open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-3 pb-3 pt-0 border-t border-amber-200/50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                        className: "whitespace-pre-wrap font-sans text-sm text-slate-700 leading-relaxed mt-2",
                        children: ev.body
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 1226,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 1225,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/crm/LeadWorkspace.tsx",
            lineNumber: 1201,
            columnNumber: 7
        }, this);
    }
    if (row.kind === 'profile_update' && row.timeline?.kind === 'profile_update') {
        const ev = row.timeline;
        const summary = ev.lines.length === 1 ? ev.lines[0] : `Profile updated · ${ev.lines.length} changes`;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "relative ml-2 rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -left-[15px] top-4 h-2.5 w-2.5 rounded-full border-2 border-white bg-primary/70"
                }, void 0, false, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 1243,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-3 py-2.5 flex flex-wrap items-start justify-between gap-3 hover:bg-slate-50/80 transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0 flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-semibold uppercase tracking-wide text-slate-500",
                                    children: "Saved edit"
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1246,
                                    columnNumber: 13
                                }, this),
                                open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mt-2 text-sm text-slate-800 space-y-1.5 list-disc pl-4 marker:text-slate-400",
                                    children: ev.lines.map((line)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "break-words whitespace-pre-wrap leading-snug pl-0.5",
                                            children: line
                                        }, line, false, {
                                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                            lineNumber: 1250,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1248,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onToggle,
                                    className: "mt-0.5 w-full text-left rounded-md -mx-1 px-1 py-0.5 hover:bg-slate-100/80 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-slate-800 leading-snug break-words",
                                        children: summary
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 1261,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1256,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1245,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-end gap-0.5 shrink-0 text-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                                    className: "text-[11px] text-slate-500 tabular-nums",
                                    dateTime: ev.createdAt,
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCrmDateTimeCompact"])(ev.createdAt)
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1266,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                                    className: "text-[10px] text-slate-400 tabular-nums max-w-[14rem]",
                                    dateTime: ev.createdAt,
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCrmDateTime"])(ev.createdAt)
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1269,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onToggle,
                                    className: "text-xs text-primary font-medium hover:underline mt-1",
                                    children: open ? 'Hide' : 'Details'
                                }, void 0, false, {
                                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                    lineNumber: 1272,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/crm/LeadWorkspace.tsx",
                            lineNumber: 1265,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 1244,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/crm/LeadWorkspace.tsx",
            lineNumber: 1242,
            columnNumber: 7
        }, this);
    }
    return null;
}
function EmailMessageBubble({ message }) {
    const outbound = message.direction === 'outbound';
    const body = stripEmailReplyQuotes(message.bodyText);
    const compact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCrmDateTimeCompact"])(message.createdAt);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: outbound ? 'flex justify-end' : 'flex justify-start',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: outbound ? 'max-w-[min(100%,32rem)] rounded-2xl rounded-br-md bg-primary px-3.5 py-2.5 text-white shadow-sm' : 'max-w-[min(100%,32rem)] rounded-2xl rounded-bl-md border border-slate-200/90 bg-white px-3.5 py-2.5 text-slate-800 shadow-sm',
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: `text-[11px] font-semibold mb-1 ${outbound ? 'text-white/90' : 'text-slate-500'}`,
                    children: [
                        outbound ? 'You' : 'Customer',
                        " · ",
                        compact
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 1301,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: `text-sm whitespace-pre-wrap leading-relaxed ${outbound ? 'text-white' : 'text-slate-800'}`,
                    children: body || '—'
                }, void 0, false, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 1304,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/crm/LeadWorkspace.tsx",
            lineNumber: 1294,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/crm/LeadWorkspace.tsx",
        lineNumber: 1293,
        columnNumber: 5
    }, this);
}
function EmailThreadConversation({ rows, open, onToggle, searchActive }) {
    const messages = rows.map((r)=>r.email).sort((a, b)=>a.createdAt < b.createdAt ? -1 : a.createdAt > b.createdAt ? 1 : 0);
    const subject = threadDisplaySubject(messages);
    const latest = messages[messages.length - 1];
    const strippedLatest = stripEmailReplyQuotes(latest.bodyText);
    const preview = strippedLatest.length > 120 ? `${strippedLatest.slice(0, 120).trim()}…` : strippedLatest;
    const showToggle = !searchActive;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "relative ml-2 overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-50/90 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -left-[15px] top-5 h-2.5 w-2.5 rounded-full border-2 border-white bg-primary"
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1337,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onToggle,
                className: "flex w-full items-start justify-between gap-3 border-b border-slate-200/80 bg-white/70 px-3 py-2.5 text-left hover:bg-white transition-colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] font-bold uppercase tracking-wide text-primary-dark",
                                        children: "Conversation"
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 1345,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-600 tabular-nums",
                                        children: [
                                            messages.length,
                                            " messages"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 1348,
                                        columnNumber: 13
                                    }, this),
                                    showToggle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-slate-400",
                                        children: open ? '▼' : '▶'
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 1351,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 1344,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm font-semibold text-slate-900",
                                children: subject
                            }, void 0, false, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 1353,
                                columnNumber: 11
                            }, this),
                            !open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 line-clamp-2 text-sm text-slate-600 whitespace-pre-wrap",
                                children: preview
                            }, void 0, false, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 1355,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 1343,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                        className: "shrink-0 text-[11px] text-slate-500 tabular-nums",
                        dateTime: latest.createdAt,
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCrmDateTimeCompact"])(latest.createdAt)
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 1358,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1338,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 px-3 py-3",
                children: messages.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EmailMessageBubble, {
                        message: m
                    }, m.id, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 1368,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1366,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/crm/LeadWorkspace.tsx",
        lineNumber: 1336,
        columnNumber: 5
    }, this);
}
function EmailActivityCard({ message, open, onToggle, showToggle }) {
    const outbound = message.direction === 'outbound';
    const stripped = stripEmailReplyQuotes(message.bodyText);
    const preview = stripped.length > 140 ? `${stripped.slice(0, 140).trim()}…` : stripped;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: `relative ml-2 overflow-hidden rounded-2xl border shadow-sm ${outbound ? 'border-primary/20 bg-primary/[0.03]' : 'border-slate-200/90 bg-slate-50/90'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute -left-[15px] top-5 h-2.5 w-2.5 rounded-full border-2 border-white ${outbound ? 'bg-primary' : 'bg-slate-400'}`
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1397,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onToggle,
                className: "flex w-full items-start justify-between gap-3 border-b border-slate-200/60 bg-white/60 px-3 py-2.5 text-left hover:bg-white/90 transition-colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-[11px] font-bold uppercase tracking-wide ${outbound ? 'text-primary-dark' : 'text-slate-600'}`,
                                        children: outbound ? 'You' : 'Customer'
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 1409,
                                        columnNumber: 13
                                    }, this),
                                    showToggle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-slate-400",
                                        children: open ? '▼' : '▶'
                                    }, void 0, false, {
                                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                        lineNumber: 1416,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 1408,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-0.5 text-sm font-semibold text-slate-900",
                                children: message.subject || '(no subject)'
                            }, void 0, false, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 1418,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-0.5 text-[11px] text-slate-500 break-all line-clamp-1",
                                children: [
                                    message.from,
                                    " → ",
                                    message.to
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 1419,
                                columnNumber: 11
                            }, this),
                            !open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1.5 line-clamp-2 text-sm text-slate-600 whitespace-pre-wrap",
                                children: preview
                            }, void 0, false, {
                                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                                lineNumber: 1423,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 1407,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                        className: "shrink-0 text-[11px] text-slate-500 tabular-nums",
                        dateTime: message.createdAt,
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatCrmDateTimeCompact"])(message.createdAt)
                    }, void 0, false, {
                        fileName: "[project]/components/crm/LeadWorkspace.tsx",
                        lineNumber: 1426,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1402,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 px-3 py-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EmailMessageBubble, {
                    message: message
                }, void 0, false, {
                    fileName: "[project]/components/crm/LeadWorkspace.tsx",
                    lineNumber: 1435,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/crm/LeadWorkspace.tsx",
                lineNumber: 1434,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/crm/LeadWorkspace.tsx",
        lineNumber: 1392,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_882867ec._.js.map