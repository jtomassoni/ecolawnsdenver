import { NextRequest, NextResponse } from 'next/server';
import { verifySession } from '@/lib/auth';
import { syncGmailInboundToCrm } from '@/lib/gmail-inbound-sync';

export const runtime = 'nodejs';

function bearerMatches(request: NextRequest): boolean {
  const secret =
    process.env.CRM_INBOUND_SYNC_SECRET?.trim() ||
    process.env.CRM_INBOUND_WEBHOOK_SECRET?.trim();
  if (!secret) return false;
  const auth = request.headers.get('authorization');
  return auth === `Bearer ${secret}`;
}

/**
 * Import recent Gmail INBOX messages into CRM threads (customer replies, etc.).
 * Auth: CRM session cookie, or Authorization: Bearer CRM_INBOUND_SYNC_SECRET / CRM_INBOUND_WEBHOOK_SECRET (for cron).
 */
export async function POST(request: NextRequest) {
  const sessionOk = await verifySession();
  if (!sessionOk && !bearerMatches(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const result = await syncGmailInboundToCrm();
    return NextResponse.json(result);
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Sync failed';
    console.error('sync-inbox', e);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
