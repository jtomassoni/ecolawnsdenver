module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/crm/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/crm/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSession",
    ()=>createSession,
    "destroySession",
    ()=>destroySession,
    "requireCrmSession",
    ()=>requireCrmSession,
    "validateCredentials",
    ()=>validateCredentials,
    "verifySession",
    ()=>verifySession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/sign.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/verify.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-rsc] (ecmascript)");
;
;
;
const SESSION_COOKIE = 'crm_session';
const SESSION_DURATION = 24 * 60 * 60;
function parseUserCredentials(envVar) {
    if (!envVar) return [];
    try {
        const parsed = JSON.parse(envVar);
        if (Array.isArray(parsed)) {
            return parsed.filter((cred)=>cred && typeof cred === 'object' && typeof cred.username === 'string' && typeof cred.password === 'string');
        }
        if (parsed && typeof parsed === 'object' && typeof parsed.username === 'string' && typeof parsed.password === 'string') {
            return [
                parsed
            ];
        }
    } catch  {
        const credentials = envVar.split(',').map((pair)=>{
            const [username, password] = pair.split(':').map((s)=>s.trim());
            if (username && password) return {
                username,
                password
            };
            return null;
        }).filter((cred)=>cred !== null);
        if (credentials.length > 0) return credentials;
    }
    return [];
}
function getAllCredentials() {
    return [
        ...parseUserCredentials(process.env.ADMIN_USER),
        ...parseUserCredentials(process.env.ADMIN_USERS),
        ...parseUserCredentials(process.env.CRM_USER),
        ...parseUserCredentials(process.env.CRM_USERS)
    ];
}
function getSecret() {
    const secret = process.env.SESSION_SECRET || process.env.CRM_SESSION_SECRET;
    if (!secret) throw new Error('SESSION_SECRET or CRM_SESSION_SECRET must be set');
    return new TextEncoder().encode(secret);
}
async function createSession() {
    const token = await new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SignJWT"]({
        crm: true
    }).setProtectedHeader({
        alg: 'HS256'
    }).setIssuedAt().setExpirationTime(`${SESSION_DURATION}s`).sign(getSecret());
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.set(SESSION_COOKIE, token, {
        httpOnly: true,
        secure: ("TURBOPACK compile-time value", "development") === 'production',
        sameSite: 'lax',
        maxAge: SESSION_DURATION,
        path: '/'
    });
}
async function verifySession() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const token = cookieStore.get(SESSION_COOKIE)?.value;
    if (!token) return false;
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jwtVerify"])(token, getSecret());
        return true;
    } catch  {
        return false;
    }
}
async function destroySession() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.delete(SESSION_COOKIE);
}
function validateCredentials(username, password) {
    const credentials = getAllCredentials();
    if (credentials.length === 0) return false;
    return credentials.some((c)=>c.username.trim() === username.trim() && c.password === password);
}
async function requireCrmSession() {
    if (!await verifySession()) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Unauthorized'
        }, {
            status: 401
        });
    }
    return null;
}
}),
"[externals]/fs/promises [external] (fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}),
"[project]/lib/crm-types.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/crm-store.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appendEmailToLead",
    ()=>appendEmailToLead,
    "appendLeadTimelineNote",
    ()=>appendLeadTimelineNote,
    "applyTemplateVars",
    ()=>applyTemplateVars,
    "createLead",
    ()=>createLead,
    "deleteLead",
    ()=>deleteLead,
    "extractWebsiteBookingCustomer",
    ()=>extractWebsiteBookingCustomer,
    "findLeadByEmail",
    ()=>findLeadByEmail,
    "getLeadById",
    ()=>getLeadById,
    "ingestInboundEmail",
    ()=>ingestInboundEmail,
    "listLeads",
    ()=>listLeads,
    "normalizeEmail",
    ()=>normalizeEmail,
    "parseFromHeader",
    ()=>parseFromHeader,
    "updateLead",
    ()=>updateLead,
    "upsertLeadFromWebsiteBooking",
    ()=>upsertLeadFromWebsiteBooking
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/crm-types.ts [app-rsc] (ecmascript)");
;
;
;
const DATA_DIR = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'data');
const STORE_PATH = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(DATA_DIR, 'crm-store.json');
let mutex = Promise.resolve();
async function withLock(fn) {
    const run = mutex.then(()=>fn());
    mutex = run.then(()=>undefined, ()=>undefined);
    return run;
}
function emptyDb() {
    return {
        version: 1,
        leads: []
    };
}
function normalizeLead(lead) {
    return {
        ...lead,
        timeline: Array.isArray(lead.timeline) ? lead.timeline : []
    };
}
async function readDb() {
    try {
        const raw = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["readFile"])(STORE_PATH, 'utf8');
        const parsed = JSON.parse(raw);
        if (!parsed || parsed.version !== 1 || !Array.isArray(parsed.leads)) {
            return emptyDb();
        }
        return {
            ...parsed,
            leads: parsed.leads.map((l)=>normalizeLead(l))
        };
    } catch (e) {
        const err = e;
        if (err.code === 'ENOENT') return emptyDb();
        throw e;
    }
}
async function writeDb(db) {
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["mkdir"])(DATA_DIR, {
        recursive: true
    });
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["writeFile"])(STORE_PATH, JSON.stringify(db, null, 2), 'utf8');
}
function isLeadStatus(s) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LEAD_STATUSES"].includes(s);
}
function normalizeEmail(email) {
    return email.trim().toLowerCase();
}
function parseFromHeader(from) {
    const trimmed = from.trim();
    const angle = trimmed.match(/^(.+?)\s*<([^>]+)>$/);
    if (angle) {
        let name = angle[1].replace(/^"|"$/g, '').trim();
        const email = normalizeEmail(angle[2]);
        if (!name) name = email.split('@')[0] || 'Customer';
        return {
            name,
            email
        };
    }
    const email = normalizeEmail(trimmed);
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return {
            name: email.split('@')[0] || 'Customer',
            email
        };
    }
    return {
        name: 'Unknown',
        email: email || 'unknown@invalid'
    };
}
async function listLeads(options) {
    const db = await readDb();
    let rows = [
        ...db.leads
    ];
    if (options?.status) {
        rows = rows.filter((l)=>l.status === options.status);
    }
    if (options?.q) {
        const q = options.q.trim().toLowerCase();
        if (q) {
            rows = rows.filter((l)=>l.name.toLowerCase().includes(q) || l.email.includes(q) || l.phone.includes(q) || l.physicalAddress.toLowerCase().includes(q));
        }
    }
    rows.sort((a, b)=>a.updatedAt < b.updatedAt ? 1 : -1);
    return rows;
}
async function getLeadById(id) {
    const db = await readDb();
    return db.leads.find((l)=>l.id === id) ?? null;
}
async function findLeadByEmail(email) {
    const norm = normalizeEmail(email);
    const db = await readDb();
    return db.leads.find((l)=>l.email === norm) ?? null;
}
async function createLead(input) {
    return withLock(async ()=>{
        const db = await readDb();
        const now = new Date().toISOString();
        const email = normalizeEmail(input.email);
        const existing = db.leads.find((l)=>l.email === email);
        if (existing) {
            throw new Error('A lead with this email already exists');
        }
        const lead = {
            id: crypto.randomUUID(),
            name: input.name.trim() || 'Unknown',
            email,
            phone: (input.phone ?? '').trim(),
            physicalAddress: (input.physicalAddress ?? '').trim(),
            status: input.status && isLeadStatus(input.status) ? input.status : 'new_lead',
            notes: (input.notes ?? '').trim(),
            emails: [],
            timeline: [],
            createdAt: now,
            updatedAt: now
        };
        db.leads.push(lead);
        await writeDb(db);
        return lead;
    });
}
async function updateLead(id, patch) {
    return withLock(async ()=>{
        const db = await readDb();
        const lead = db.leads.find((l)=>l.id === id);
        if (!lead) return null;
        const timeline = [
            ...lead.timeline ?? []
        ];
        const now = new Date().toISOString();
        const lines = [];
        const nextName = patch.name !== undefined ? patch.name.trim() || lead.name : lead.name;
        const nextEmail = patch.email !== undefined ? normalizeEmail(patch.email) : lead.email;
        const nextPhone = patch.phone !== undefined ? patch.phone.trim() : lead.phone;
        const nextAddr = patch.physicalAddress !== undefined ? patch.physicalAddress.trim() : lead.physicalAddress;
        const nextNotes = patch.notes !== undefined ? patch.notes.trim() : lead.notes;
        if (patch.name !== undefined && nextName !== lead.name) {
            lines.push(`Name · ${JSON.stringify(lead.name)} → ${JSON.stringify(nextName)}`);
        }
        if (patch.email !== undefined && nextEmail !== lead.email) {
            lines.push(`Email · ${lead.email} → ${nextEmail}`);
        }
        if (patch.phone !== undefined && nextPhone !== lead.phone) {
            lines.push(`Phone · ${lead.phone || '—'} → ${nextPhone || '—'}`);
        }
        if (patch.physicalAddress !== undefined && nextAddr !== lead.physicalAddress) {
            lines.push(`Service address · ${lead.physicalAddress || '—'} → ${nextAddr || '—'}`);
        }
        if (patch.status !== undefined) {
            if (!isLeadStatus(patch.status)) throw new Error('Invalid status');
            if (patch.status !== lead.status) {
                lines.push(`Status · ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LEAD_STATUS_LABELS"][lead.status]} → ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LEAD_STATUS_LABELS"][patch.status]}`);
            }
        }
        if (patch.notes !== undefined && nextNotes !== lead.notes) {
            lines.push(`Profile notes · ${lead.notes || '—'} → ${nextNotes || '—'}`);
        }
        if (patch.name !== undefined) lead.name = nextName;
        if (patch.email !== undefined) {
            const taken = db.leads.some((l)=>l.id !== id && l.email === nextEmail);
            if (taken) throw new Error('Another lead already uses this email');
            lead.email = nextEmail;
        }
        if (patch.phone !== undefined) lead.phone = nextPhone;
        if (patch.physicalAddress !== undefined) lead.physicalAddress = nextAddr;
        if (patch.status !== undefined) {
            if (!isLeadStatus(patch.status)) throw new Error('Invalid status');
            lead.status = patch.status;
        }
        if (patch.notes !== undefined) lead.notes = nextNotes;
        if (lines.length) {
            timeline.push({
                id: crypto.randomUUID(),
                kind: 'profile_update',
                createdAt: now,
                lines
            });
        }
        lead.timeline = timeline;
        lead.updatedAt = now;
        await writeDb(db);
        return lead;
    });
}
async function appendLeadTimelineNote(id, body) {
    return withLock(async ()=>{
        const db = await readDb();
        const lead = db.leads.find((l)=>l.id === id);
        if (!lead) return null;
        const text = body.trim();
        if (!text) return lead;
        const now = new Date().toISOString();
        const timeline = [
            ...lead.timeline ?? []
        ];
        timeline.push({
            id: crypto.randomUUID(),
            kind: 'staff_note',
            createdAt: now,
            body: text
        });
        lead.timeline = timeline;
        lead.updatedAt = now;
        await writeDb(db);
        return lead;
    });
}
async function deleteLead(id) {
    return withLock(async ()=>{
        const db = await readDb();
        const i = db.leads.findIndex((l)=>l.id === id);
        if (i === -1) return false;
        db.leads.splice(i, 1);
        await writeDb(db);
        return true;
    });
}
async function appendEmailToLead(leadId, msg) {
    return withLock(async ()=>{
        const db = await readDb();
        const lead = db.leads.find((l)=>l.id === leadId);
        if (!lead) return null;
        const row = {
            ...msg,
            id: crypto.randomUUID(),
            createdAt: new Date().toISOString()
        };
        lead.emails.push(row);
        lead.updatedAt = row.createdAt;
        await writeDb(db);
        return row;
    });
}
function digitsOnlyPhone(phone) {
    return phone.replace(/\D/g, '');
}
function phonesLikelySame(a, b) {
    const da = digitsOnlyPhone(a);
    const db = digitsOnlyPhone(b);
    if (da.length < 10 || db.length < 10) return false;
    return da.slice(-10) === db.slice(-10);
}
function extractWebsiteBookingCustomer(bodyText, bodyHtml) {
    const blob = `${bodyText}\n${bodyHtml ?? ''}`;
    // Matches /api/send-email template: "New … Submission" (h2 + body fields)
    if (!/New\s+.+\s+Submission/i.test(blob)) {
        return null;
    }
    let email = '';
    const mailto = bodyHtml?.match(/mailto:([^"'>\s]+)/i)?.[1];
    if (mailto) email = normalizeEmail(mailto);
    if (!email) {
        const m = bodyText.match(/Email:\s*([^\s<]+@[^\s]+\.[^\s>]+)/i);
        if (m) email = normalizeEmail(m[1]);
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return null;
    }
    const pick = (label)=>{
        const re = new RegExp(`${label}:\\s*([^\\n<]+)`, 'i');
        const m = bodyText.match(re);
        return (m?.[1] ?? '').replace(/<[^>]*>/g, '').trim();
    };
    const name = pick('Name') || email.split('@')[0] || 'Customer';
    const phone = pick('Phone');
    const physicalAddress = pick('Property Address');
    return {
        name,
        email,
        phone,
        physicalAddress
    };
}
async function upsertLeadFromWebsiteBooking(input) {
    const custEmail = normalizeEmail(input.email);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(custEmail)) {
        throw new Error('Invalid customer email');
    }
    const phoneTrim = (input.phone ?? '').trim();
    const addrTrim = (input.physicalAddress ?? '').trim();
    const nameTrim = (input.name ?? '').trim() || custEmail.split('@')[0] || 'Customer';
    return withLock(async ()=>{
        const db = await readDb();
        let lead = db.leads.find((l)=>l.email === custEmail);
        if (!lead && phoneTrim && digitsOnlyPhone(phoneTrim).length >= 10) {
            lead = db.leads.find((l)=>phonesLikelySame(l.phone, phoneTrim)) ?? undefined;
        }
        let created = false;
        const now = new Date().toISOString();
        if (!lead) {
            created = true;
            lead = {
                id: crypto.randomUUID(),
                name: nameTrim,
                email: custEmail,
                phone: phoneTrim,
                physicalAddress: addrTrim,
                status: 'new_lead',
                notes: '',
                emails: [],
                timeline: [],
                createdAt: now,
                updatedAt: now
            };
            db.leads.push(lead);
        } else {
            if ("TURBOPACK compile-time truthy", 1) lead.name = nameTrim;
            if (phoneTrim) lead.phone = phoneTrim;
            if (addrTrim) lead.physicalAddress = addrTrim;
            lead.updatedAt = now;
        }
        const fromDisplay = `${nameTrim} <${custEmail}>`;
        const message = {
            id: crypto.randomUUID(),
            direction: 'inbound',
            from: fromDisplay,
            to: input.toAddress.trim(),
            subject: input.subject.trim(),
            bodyText: input.bodyText,
            bodyHtml: input.bodyHtml,
            messageId: input.messageId,
            inReplyTo: input.inReplyTo,
            createdAt: now
        };
        lead.emails.push(message);
        lead.updatedAt = now;
        await writeDb(db);
        return {
            lead,
            created,
            message
        };
    });
}
async function ingestInboundEmail(input) {
    const booking = extractWebsiteBookingCustomer(input.bodyText, input.bodyHtml);
    if (booking) {
        return upsertLeadFromWebsiteBooking({
            name: booking.name,
            email: booking.email,
            phone: booking.phone,
            physicalAddress: booking.physicalAddress,
            subject: input.subject,
            bodyText: input.bodyText,
            bodyHtml: input.bodyHtml,
            toAddress: input.to,
            messageId: input.messageId,
            inReplyTo: input.inReplyTo
        });
    }
    const { name, email } = parseFromHeader(input.fromHeader);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new Error('Invalid sender email');
    }
    return withLock(async ()=>{
        const db = await readDb();
        let lead = db.leads.find((l)=>l.email === email);
        let created = false;
        const now = new Date().toISOString();
        if (!lead) {
            created = true;
            lead = {
                id: crypto.randomUUID(),
                name,
                email,
                phone: '',
                physicalAddress: '',
                status: 'new_lead',
                notes: '',
                emails: [],
                timeline: [],
                createdAt: now,
                updatedAt: now
            };
            db.leads.push(lead);
        }
        const message = {
            id: crypto.randomUUID(),
            direction: 'inbound',
            from: input.fromHeader.trim(),
            to: input.to.trim(),
            subject: input.subject.trim(),
            bodyText: input.bodyText,
            bodyHtml: input.bodyHtml,
            messageId: input.messageId,
            inReplyTo: input.inReplyTo,
            createdAt: now
        };
        lead.emails.push(message);
        lead.updatedAt = now;
        await writeDb(db);
        return {
            lead,
            created,
            message
        };
    });
}
function applyTemplateVars(template, vars) {
    let out = template;
    for (const [k, v] of Object.entries(vars)){
        out = out.split(`{{${k}}}`).join(v);
    }
    return out;
}
}),
"[project]/components/crm/LeadWorkspace.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/crm/LeadWorkspace.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/crm/LeadWorkspace.tsx <module evaluation>", "default");
}),
"[project]/components/crm/LeadWorkspace.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/crm/LeadWorkspace.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/crm/LeadWorkspace.tsx", "default");
}),
"[project]/components/crm/LeadWorkspace.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$crm$2f$LeadWorkspace$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/crm/LeadWorkspace.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$crm$2f$LeadWorkspace$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/crm/LeadWorkspace.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$crm$2f$LeadWorkspace$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/crm/leads/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LeadPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$store$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/crm-store.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$crm$2f$LeadWorkspace$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/crm/LeadWorkspace.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function LeadPage({ params }) {
    const ok = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifySession"])();
    if (!ok) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/crm/login');
    const { id } = await params;
    const lead = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$store$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLeadById"])(id);
    if (!lead) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$crm$2f$LeadWorkspace$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        initialLead: lead
    }, void 0, false, {
        fileName: "[project]/app/crm/leads/[id]/page.tsx",
        lineNumber: 16,
        columnNumber: 10
    }, this);
}
}),
"[project]/app/crm/leads/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/crm/leads/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__cb8a4221._.js.map