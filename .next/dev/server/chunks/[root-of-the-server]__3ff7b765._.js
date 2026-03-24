module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/sign.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/verify.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
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
    const token = await new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SignJWT"]({
        crm: true
    }).setProtectedHeader({
        alg: 'HS256'
    }).setIssuedAt().setExpirationTime(`${SESSION_DURATION}s`).sign(getSecret());
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.set(SESSION_COOKIE, token, {
        httpOnly: true,
        secure: ("TURBOPACK compile-time value", "development") === 'production',
        sameSite: 'lax',
        maxAge: SESSION_DURATION,
        path: '/'
    });
}
async function verifySession() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    const token = cookieStore.get(SESSION_COOKIE)?.value;
    if (!token) return false;
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jwtVerify"])(token, getSecret());
        return true;
    } catch  {
        return false;
    }
}
async function destroySession() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.delete(SESSION_COOKIE);
}
function validateCredentials(username, password) {
    const credentials = getAllCredentials();
    if (credentials.length === 0) return false;
    return credentials.some((c)=>c.username.trim() === username.trim() && c.password === password);
}
async function requireCrmSession() {
    if (!await verifySession()) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
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
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/lib/crm-types.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/crm-store.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/crm-types.ts [app-route] (ecmascript)");
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LEAD_STATUSES"].includes(s);
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
                lines.push(`Status · ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LEAD_STATUS_LABELS"][lead.status]} → ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LEAD_STATUS_LABELS"][patch.status]}`);
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
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[project]/lib/crm-mail.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCrmFromAddress",
    ()=>getCrmFromAddress,
    "getCrmReplyTo",
    ()=>getCrmReplyTo,
    "getMailTransporter",
    ()=>getMailTransporter,
    "htmlToPlainFallback",
    ()=>htmlToPlainFallback,
    "sendCrmEmail",
    ()=>sendCrmEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nodemailer/lib/nodemailer.js [app-route] (ecmascript)");
;
function getMailTransporter() {
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_APP_PASSWORD;
    if (!user || !pass) return null;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].createTransport({
        service: 'gmail',
        auth: {
            user,
            pass
        }
    });
}
/**
 * Optional second Gmail account used only for CRM / invoice outbound.
 */ function getCrmSmtpTransporter() {
    const user = process.env.CRM_SMTP_USER?.trim();
    const pass = process.env.CRM_SMTP_PASSWORD?.trim();
    if (user && pass) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].createTransport({
            service: 'gmail',
            auth: {
                user,
                pass
            }
        });
    }
    return getMailTransporter();
}
function getCrmFromAddress() {
    const fromOverride = process.env.CRM_FROM_EMAIL?.trim();
    const crmUser = process.env.CRM_SMTP_USER?.trim();
    const crmPass = process.env.CRM_SMTP_PASSWORD?.trim();
    if (crmUser && crmPass) {
        return fromOverride || crmUser;
    }
    return fromOverride || process.env.EMAIL_USER?.trim() || null;
}
function getCrmReplyTo() {
    const raw = process.env.CRM_REPLY_TO_EMAIL?.trim();
    return raw || undefined;
}
function htmlToPlainFallback(html) {
    return html.replace(/<br\s*\/?>/gi, '\n').replace(/<\/p>/gi, '\n').replace(/<[^>]+>/g, '').replace(/\n{3,}/g, '\n\n').trim();
}
async function sendCrmEmail(options) {
    const from = getCrmFromAddress();
    const replyTo = getCrmReplyTo();
    const html = options.html ?? options.text.replace(/\n/g, '<br/>');
    const transporter = getCrmSmtpTransporter();
    if (!transporter || !from) {
        throw new Error('CRM email is not configured: set EMAIL_USER + EMAIL_APP_PASSWORD (Gmail app password), or optional CRM_SMTP_USER + CRM_SMTP_PASSWORD');
    }
    await transporter.sendMail({
        from,
        to: options.to,
        subject: options.subject,
        text: options.text,
        html,
        ...replyTo ? {
            replyTo
        } : {}
    });
}
;
}),
"[project]/app/api/crm/leads/[id]/send-email/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/crm-store.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$mail$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/crm-mail.ts [app-route] (ecmascript)");
;
;
;
;
async function POST(request, { params }) {
    const denied = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireCrmSession"])();
    if (denied) return denied;
    const { id } = await params;
    const lead = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getLeadById"])(id);
    if (!lead) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: 'Not found'
    }, {
        status: 404
    });
    let body;
    try {
        body = await request.json();
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Invalid JSON'
        }, {
            status: 400
        });
    }
    const subject = String(body.subject ?? '').trim();
    const text = String(body.text ?? '').trim();
    if (!subject || !text) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'subject and text are required'
        }, {
            status: 400
        });
    }
    const toAddr = String(lead.email ?? '').trim();
    if (!toAddr) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Lead has no email address'
        }, {
            status: 400
        });
    }
    const from = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$mail$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCrmFromAddress"])();
    if (!from) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'CRM outbound email is not configured'
        }, {
            status: 500
        });
    }
    const html = body.html !== undefined ? String(body.html) : undefined;
    const resolvedHtml = html !== undefined ? html : text.replace(/\n/g, '<br/>');
    if (body.previewOnly === true) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            preview: {
                to: toAddr,
                from,
                subject,
                text,
                html: resolvedHtml
            }
        });
    }
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$mail$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendCrmEmail"])({
            to: toAddr,
            subject,
            text,
            html
        });
    } catch (e) {
        console.error('sendCrmEmail', e);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: e instanceof Error ? e.message : 'Failed to send email'
        }, {
            status: 500
        });
    }
    const msg = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendEmailToLead"])(id, {
        direction: 'outbound',
        from,
        to: toAddr,
        subject,
        bodyText: text,
        bodyHtml: html
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        message: msg
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3ff7b765._.js.map