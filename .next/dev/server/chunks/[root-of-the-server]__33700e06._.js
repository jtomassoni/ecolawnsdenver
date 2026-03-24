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

__turbopack_context__.s([
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
    'inactive'
];
const LEAD_STATUS_LABELS = {
    new_lead: 'New lead',
    warm_lead: 'Warm lead',
    active_customer: 'Active customer',
    delinquent: 'Delinquent',
    inactive: 'Inactive'
};
}),
"[project]/lib/crm-store.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appendEmailToLead",
    ()=>appendEmailToLead,
    "applyTemplateVars",
    ()=>applyTemplateVars,
    "createLead",
    ()=>createLead,
    "deleteLead",
    ()=>deleteLead,
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
    ()=>updateLead
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
async function readDb() {
    try {
        const raw = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["readFile"])(STORE_PATH, 'utf8');
        const parsed = JSON.parse(raw);
        if (!parsed || parsed.version !== 1 || !Array.isArray(parsed.leads)) {
            return emptyDb();
        }
        return parsed;
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
        if (patch.name !== undefined) lead.name = patch.name.trim() || lead.name;
        if (patch.email !== undefined) {
            const next = normalizeEmail(patch.email);
            const taken = db.leads.some((l)=>l.id !== id && l.email === next);
            if (taken) throw new Error('Another lead already uses this email');
            lead.email = next;
        }
        if (patch.phone !== undefined) lead.phone = patch.phone.trim();
        if (patch.physicalAddress !== undefined) lead.physicalAddress = patch.physicalAddress.trim();
        if (patch.status !== undefined) {
            if (!isLeadStatus(patch.status)) throw new Error('Invalid status');
            lead.status = patch.status;
        }
        if (patch.notes !== undefined) lead.notes = patch.notes.trim();
        lead.updatedAt = new Date().toISOString();
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
async function ingestInboundEmail(input) {
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
"[project]/app/api/crm/leads/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/crm-store.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/crm-types.ts [app-route] (ecmascript)");
;
;
;
;
function isLeadStatus(s) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LEAD_STATUSES"].includes(s);
}
async function GET(request) {
    const denied = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireCrmSession"])();
    if (denied) return denied;
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status') || undefined;
    const q = searchParams.get('q') || undefined;
    const leads = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["listLeads"])({
        status: status && isLeadStatus(status) ? status : undefined,
        q: q ?? undefined
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        leads
    });
}
async function POST(request) {
    const denied = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireCrmSession"])();
    if (denied) return denied;
    try {
        const body = await request.json();
        const name = String(body.name ?? '').trim();
        const email = String(body.email ?? '').trim();
        if (!email) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Email is required'
            }, {
                status: 400
            });
        }
        const lead = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLead"])({
            name: name || email.split('@')[0],
            email,
            phone: body.phone,
            physicalAddress: body.physicalAddress,
            status: body.status && isLeadStatus(String(body.status)) ? body.status : undefined,
            notes: body.notes
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            lead
        });
    } catch (e) {
        const msg = e instanceof Error ? e.message : 'Failed to create lead';
        if (msg.includes('already exists')) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: msg
            }, {
                status: 409
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: msg
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__33700e06._.js.map