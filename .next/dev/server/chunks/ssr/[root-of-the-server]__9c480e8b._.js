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
"[project]/lib/crm-data-dir.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCrmDataDir",
    ()=>getCrmDataDir
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
function getCrmDataDir() {
    const fromEnv = process.env.CRM_DATA_DIR?.trim();
    if (fromEnv) {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].isAbsolute(fromEnv) ? fromEnv : __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(process.cwd(), fromEnv);
    }
    if (isServerlessReadOnlyCwd()) {
        return '/tmp/ecolawns-crm-data';
    }
    return __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'data');
}
function isServerlessReadOnlyCwd() {
    if (process.env.VERCEL) return true;
    if (process.env.AWS_LAMBDA_FUNCTION_NAME) return true;
    if (process.env.LAMBDA_TASK_ROOT) return true;
    return false;
}
}),
"[externals]/pg [external] (pg, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("pg");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/lib/crm-pg.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "deleteLeadFromPg",
    ()=>deleteLeadFromPg,
    "ensureCrmSchemaAndMigrate",
    ()=>ensureCrmSchemaAndMigrate,
    "hasInboundSyncIdPg",
    ()=>hasInboundSyncIdPg,
    "isCrmPostgresEnabled",
    ()=>isCrmPostgresEnabled,
    "loadAllLeadsFromPg",
    ()=>loadAllLeadsFromPg,
    "markInboundSyncIdPg",
    ()=>markInboundSyncIdPg,
    "saveLeadToPg",
    ()=>saveLeadToPg
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$data$2d$dir$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/crm-data-dir.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const MAX_INBOUND_SYNC_IDS = 4000;
let pool = null;
let schemaReady = false;
let jsonImportAttempted = false;
function isCrmPostgresEnabled() {
    return Boolean(process.env.DATABASE_URL?.trim());
}
function getPool() {
    if (!pool) {
        pool = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__["Pool"]({
            connectionString: process.env.DATABASE_URL,
            max: 10,
            idleTimeoutMillis: 30_000,
            connectionTimeoutMillis: 15_000
        });
    }
    return pool;
}
function normalizeLeadData(lead) {
    return {
        ...lead,
        timeline: Array.isArray(lead.timeline) ? lead.timeline : []
    };
}
async function ensureSchema(p) {
    await p.query(`
    CREATE TABLE IF NOT EXISTS crm_leads (
      id TEXT PRIMARY KEY,
      email_normalized TEXT NOT NULL,
      data JSONB NOT NULL,
      updated_at TIMESTAMPTZ NOT NULL
    );
    CREATE UNIQUE INDEX IF NOT EXISTS crm_leads_email_unique ON crm_leads (email_normalized);
    CREATE TABLE IF NOT EXISTS crm_inbound_sync_ids (
      message_id TEXT PRIMARY KEY,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
    CREATE INDEX IF NOT EXISTS crm_inbound_sync_ids_created ON crm_inbound_sync_ids (created_at);
  `);
}
async function migrateJsonStoreIfEmpty(p) {
    const { rows } = await p.query('SELECT COUNT(*)::int AS c FROM crm_leads');
    if ((rows[0]?.c ?? 0) > 0) return;
    const storePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$data$2d$dir$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCrmDataDir"])(), 'crm-store.json');
    try {
        const raw = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["readFile"])(storePath, 'utf8');
        const parsed = JSON.parse(raw);
        if (!parsed || !Array.isArray(parsed.leads)) return;
        for (const item of parsed.leads){
            const lead = normalizeLeadData(item);
            try {
                await saveLeadToPg(lead, p);
            } catch (e) {
                const code = e && typeof e === 'object' && 'code' in e ? String(e.code) : '';
                if (code === '23505') continue;
                throw e;
            }
        }
    } catch (e) {
        const err = e;
        if (err.code === 'ENOENT') return;
        throw e;
    }
}
async function ensureCrmSchemaAndMigrate() {
    if (!isCrmPostgresEnabled()) return;
    const p = getPool();
    if (!schemaReady) {
        await ensureSchema(p);
        schemaReady = true;
    }
    if (!jsonImportAttempted) {
        await migrateJsonStoreIfEmpty(p);
        jsonImportAttempted = true;
    }
}
async function loadAllLeadsFromPg() {
    const p = getPool();
    const { rows } = await p.query('SELECT data FROM crm_leads ORDER BY updated_at DESC');
    return rows.map((r)=>normalizeLeadData(r.data));
}
async function saveLeadToPg(lead, poolOverride) {
    const p = poolOverride ?? getPool();
    const emailNorm = lead.email.trim().toLowerCase();
    await p.query(`INSERT INTO crm_leads (id, email_normalized, data, updated_at)
     VALUES ($1, $2, $3::jsonb, $4::timestamptz)
     ON CONFLICT (id) DO UPDATE SET
       email_normalized = EXCLUDED.email_normalized,
       data = EXCLUDED.data,
       updated_at = EXCLUDED.updated_at`, [
        lead.id,
        emailNorm,
        JSON.stringify(lead),
        lead.updatedAt
    ]);
}
async function deleteLeadFromPg(id) {
    await getPool().query('DELETE FROM crm_leads WHERE id = $1', [
        id
    ]);
}
async function hasInboundSyncIdPg(messageId) {
    const norm = messageId.trim();
    if (!norm) return false;
    await ensureCrmSchemaAndMigrate();
    const { rowCount } = await getPool().query('SELECT 1 FROM crm_inbound_sync_ids WHERE message_id = $1', [
        norm
    ]);
    return (rowCount ?? 0) > 0;
}
async function markInboundSyncIdPg(messageId) {
    const norm = messageId.trim();
    if (!norm) return;
    await ensureCrmSchemaAndMigrate();
    const p = getPool();
    await p.query(`INSERT INTO crm_inbound_sync_ids (message_id) VALUES ($1) ON CONFLICT DO NOTHING`, [
        norm
    ]);
    const { rows } = await p.query('SELECT COUNT(*)::int AS c FROM crm_inbound_sync_ids');
    const c = rows[0]?.c ?? 0;
    if (c <= MAX_INBOUND_SYNC_IDS) return;
    const excess = c - MAX_INBOUND_SYNC_IDS;
    await p.query(`DELETE FROM crm_inbound_sync_ids WHERE message_id IN (
       SELECT message_id FROM crm_inbound_sync_ids ORDER BY created_at ASC LIMIT $1
     )`, [
        excess
    ]);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
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
"[project]/lib/crm-bounce.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/lib/crm-store.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

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
    "tryIngestBounceEmail",
    ()=>tryIngestBounceEmail,
    "updateLead",
    ()=>updateLead,
    "updateLeadTimelineNote",
    ()=>updateLeadTimelineNote,
    "upsertLeadFromWebsiteBooking",
    ()=>upsertLeadFromWebsiteBooking
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$data$2d$dir$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/crm-data-dir.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$pg$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/crm-pg.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/crm-types.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$bounce$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/crm-bounce.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$pg$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$pg$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const DATA_DIR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$data$2d$dir$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCrmDataDir"])();
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
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$pg$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isCrmPostgresEnabled"])()) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$pg$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureCrmSchemaAndMigrate"])();
        const leads = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$pg$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["loadAllLeadsFromPg"])();
        return {
            version: 1,
            leads
        };
    }
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
async function persistLeadDb(db, lead) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$pg$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isCrmPostgresEnabled"])()) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$pg$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureCrmSchemaAndMigrate"])();
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$pg$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveLeadToPg"])(lead);
    } else {
        await writeDb(db);
    }
}
async function persistDeleteDb(db, id) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$pg$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isCrmPostgresEnabled"])()) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$pg$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureCrmSchemaAndMigrate"])();
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$pg$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteLeadFromPg"])(id);
    } else {
        await writeDb(db);
    }
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
        await persistLeadDb(db, lead);
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
        await persistLeadDb(db, lead);
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
        await persistLeadDb(db, lead);
        return lead;
    });
}
async function updateLeadTimelineNote(leadId, noteId, body) {
    return withLock(async ()=>{
        const db = await readDb();
        const lead = db.leads.find((l)=>l.id === leadId);
        if (!lead) return null;
        const text = body.trim();
        if (!text) return null;
        const timeline = [
            ...lead.timeline ?? []
        ];
        const i = timeline.findIndex((e)=>e.id === noteId && e.kind === 'staff_note');
        if (i === -1) return null;
        const ev = timeline[i];
        if (ev.kind !== 'staff_note') return null;
        const now = new Date().toISOString();
        timeline[i] = {
            ...ev,
            body: text
        };
        lead.timeline = timeline;
        lead.updatedAt = now;
        await persistLeadDb(db, lead);
        return lead;
    });
}
async function deleteLead(id) {
    return withLock(async ()=>{
        const db = await readDb();
        const i = db.leads.findIndex((l)=>l.id === id);
        if (i === -1) return false;
        db.leads.splice(i, 1);
        await persistDeleteDb(db, id);
        return true;
    });
}
async function tryIngestBounceEmail(input) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$bounce$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["looksLikeBounceNotification"])(input.fromAddresses, input.subject)) {
        return {
            handled: false
        };
    }
    const failedRecipient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$bounce$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseBounceFailedRecipient"])(input.bodyText, input.bodyHtml);
    if (!failedRecipient) {
        return {
            handled: true,
            imported: false,
            skipReason: 'no_recipient'
        };
    }
    const failedNorm = normalizeEmail(failedRecipient);
    return withLock(async ()=>{
        const db = await readDb();
        const lead = db.leads.find((l)=>l.email === failedNorm);
        if (!lead) {
            return {
                handled: true,
                imported: false,
                skipReason: 'no_lead'
            };
        }
        const now = new Date().toISOString();
        const summary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$bounce$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["summarizeBounce"])(input.bodyText);
        const diagnostic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$bounce$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["extractBounceDiagnostic"])(input.bodyText);
        const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$bounce$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findOutboundForBounceAttachment"])(lead.emails, failedNorm, now, input.inReplyTo, input.bodyText, input.bodyHtml);
        if (match) {
            match.deliveryFailure = {
                failedRecipient: failedNorm,
                summary,
                diagnostic,
                recordedAt: now
            };
            lead.updatedAt = now;
            await persistLeadDb(db, lead);
            return {
                handled: true,
                imported: true
            };
        }
        const row = {
            id: crypto.randomUUID(),
            direction: 'inbound',
            from: input.fromHeader.trim(),
            to: input.to.trim(),
            subject: input.subject.trim(),
            bodyText: input.bodyText,
            bodyHtml: input.bodyHtml,
            messageId: input.messageId,
            inReplyTo: input.inReplyTo,
            createdAt: now,
            kind: 'bounce',
            bounce: {
                failedRecipient: failedNorm,
                summary,
                diagnostic
            }
        };
        lead.emails.push(row);
        lead.updatedAt = now;
        await persistLeadDb(db, lead);
        return {
            handled: true,
            imported: true
        };
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
        await persistLeadDb(db, lead);
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
        await persistLeadDb(db, lead);
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
        await persistLeadDb(db, lead);
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
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/crm/CrmLeadsTable.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/crm/CrmLeadsTable.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/crm/CrmLeadsTable.tsx <module evaluation>", "default");
}),
"[project]/components/crm/CrmLeadsTable.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/crm/CrmLeadsTable.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/crm/CrmLeadsTable.tsx", "default");
}),
"[project]/components/crm/CrmLeadsTable.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$crm$2f$CrmLeadsTable$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/crm/CrmLeadsTable.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$crm$2f$CrmLeadsTable$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/crm/CrmLeadsTable.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$crm$2f$CrmLeadsTable$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/crm/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>CrmHomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$store$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/crm-store.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$crm$2f$CrmLeadsTable$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/crm/CrmLeadsTable.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$store$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$store$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
async function CrmHomePage() {
    const ok = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifySession"])();
    if (!ok) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/crm/login');
    const leads = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$crm$2d$store$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listLeads"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$crm$2f$CrmLeadsTable$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            initialLeads: leads
        }, void 0, false, {
            fileName: "[project]/app/crm/page.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/crm/page.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/app/crm/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/crm/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9c480e8b._.js.map