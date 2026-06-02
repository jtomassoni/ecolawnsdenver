import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const SESSION_COOKIE = 'crm_session';
const SESSION_DURATION = 24 * 60 * 60;

interface UserCredential {
  username: string;
  password: string;
}

function parseUserCredentials(envVar: string | undefined): UserCredential[] {
  if (!envVar) return [];
  try {
    const parsed = JSON.parse(envVar);
    if (Array.isArray(parsed)) {
      return parsed.filter(
        (cred): cred is UserCredential =>
          cred &&
          typeof cred === 'object' &&
          typeof cred.username === 'string' &&
          typeof cred.password === 'string'
      );
    }
    if (
      parsed &&
      typeof parsed === 'object' &&
      typeof parsed.username === 'string' &&
      typeof parsed.password === 'string'
    ) {
      return [parsed];
    }
  } catch {
    const credentials = envVar
      .split(',')
      .map((pair) => {
        const [username, password] = pair.split(':').map((s) => s.trim());
        if (username && password) return { username, password };
        return null;
      })
      .filter((cred): cred is UserCredential => cred !== null);
    if (credentials.length > 0) return credentials;
  }
  return [];
}

function getAllCredentials(): UserCredential[] {
  return [
    ...parseUserCredentials(process.env.ADMIN_USER),
    ...parseUserCredentials(process.env.ADMIN_USERS),
    ...parseUserCredentials(process.env.CRM_USER),
    ...parseUserCredentials(process.env.CRM_USERS),
  ];
}

function getSecret() {
  const secret = process.env.SESSION_SECRET || process.env.CRM_SESSION_SECRET;
  if (!secret) throw new Error('SESSION_SECRET or CRM_SESSION_SECRET must be set');
  return new TextEncoder().encode(secret);
}

export async function createSession() {
  const token = await new SignJWT({ crm: true })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_DURATION}s`)
    .sign(getSecret());

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: SESSION_DURATION,
    path: '/',
  });
}

export async function verifySession(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return false;
  try {
    await jwtVerify(token, getSecret());
    return true;
  } catch {
    return false;
  }
}

export async function destroySession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

export function validateCredentials(username: string, password: string): boolean {
  const credentials = getAllCredentials();
  if (credentials.length === 0) return false;
  return credentials.some(
    (c) => c.username.trim() === username.trim() && c.password === password
  );
}

/** Use in Route Handlers: `const denied = await requireCrmSession(); if (denied) return denied;` */
export async function requireCrmSession(): Promise<NextResponse | null> {
  if (!(await verifySession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  return null;
}
