import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === '/crm' || pathname.startsWith('/crm/')) {
    const target = pathname.replace(/^\/crm/, '/admin') || '/admin';
    const url = new URL(target, request.url);
    url.search = request.nextUrl.search;
    return NextResponse.redirect(url);
  }

  const isLogin = pathname === '/login' || pathname === '/api/crm/login';
  const isProtected =
    (pathname.startsWith('/admin') && !isLogin) ||
    (pathname.startsWith('/api/crm') && !pathname.endsWith('/login'));
  if (!isProtected) return NextResponse.next();

  const session = request.cookies.get('crm_session')?.value;
  if (!session) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  try {
    const secret = process.env.SESSION_SECRET || process.env.CRM_SESSION_SECRET;
    if (!secret) throw new Error('SESSION_SECRET or CRM_SESSION_SECRET not set');
    await jwtVerify(session, new TextEncoder().encode(secret));
  } catch {
    const res = NextResponse.redirect(new URL('/login', request.url));
    res.cookies.delete('crm_session');
    return res;
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/login', '/admin/:path*', '/crm/:path*', '/api/crm/:path*'],
};
