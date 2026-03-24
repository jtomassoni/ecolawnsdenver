import { NextRequest, NextResponse } from 'next/server';
import { requireCrmSession } from '@/lib/auth';
import { createLead, listLeads } from '@/lib/crm-store';
import type { LeadStatus } from '@/lib/crm-types';
import { LEAD_STATUSES } from '@/lib/crm-types';

function isLeadStatus(s: string): s is LeadStatus {
  return (LEAD_STATUSES as readonly string[]).includes(s);
}

export async function GET(request: NextRequest) {
  const denied = await requireCrmSession();
  if (denied) return denied;
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status') || undefined;
  const q = searchParams.get('q') || undefined;
  const leads = await listLeads({
    status: status && isLeadStatus(status) ? status : undefined,
    q: q ?? undefined,
  });
  return NextResponse.json({ leads });
}

export async function POST(request: NextRequest) {
  const denied = await requireCrmSession();
  if (denied) return denied;
  try {
    const body = await request.json();
    const name = String(body.name ?? '').trim();
    const email = String(body.email ?? '').trim();
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }
    const lead = await createLead({
      name: name || email.split('@')[0],
      email,
      phone: body.phone,
      physicalAddress: body.physicalAddress,
      status: body.status && isLeadStatus(String(body.status)) ? body.status : undefined,
      notes: body.notes,
    });
    return NextResponse.json({ lead });
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Failed to create lead';
    if (msg.includes('already exists')) {
      return NextResponse.json({ error: msg }, { status: 409 });
    }
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
