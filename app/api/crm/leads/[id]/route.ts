import { NextRequest, NextResponse } from 'next/server';
import { requireCrmSession } from '@/lib/auth';
import { deleteLead, getLeadById, updateLead } from '@/lib/crm-store';
import type { LeadStatus } from '@/lib/crm-types';
import { LEAD_STATUSES } from '@/lib/crm-types';

function isLeadStatus(s: string): s is LeadStatus {
  return (LEAD_STATUSES as readonly string[]).includes(s);
}

type Params = { params: Promise<{ id: string }> };

export async function GET(_request: NextRequest, { params }: Params) {
  const denied = await requireCrmSession();
  if (denied) return denied;
  const { id } = await params;
  const lead = await getLeadById(id);
  if (!lead) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  const sorted = {
    ...lead,
    emails: [...lead.emails].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)),
  };
  return NextResponse.json({ lead: sorted });
}

export async function PATCH(request: NextRequest, { params }: Params) {
  const denied = await requireCrmSession();
  if (denied) return denied;
  const { id } = await params;
  try {
    const body = await request.json();
    const patch: Parameters<typeof updateLead>[1] = {};
    if (body.name !== undefined) patch.name = String(body.name);
    if (body.email !== undefined) patch.email = String(body.email);
    if (body.phone !== undefined) patch.phone = String(body.phone);
    if (body.physicalAddress !== undefined) patch.physicalAddress = String(body.physicalAddress);
    if (body.notes !== undefined) patch.notes = String(body.notes);
    if (body.status !== undefined) {
      const s = String(body.status);
      if (!isLeadStatus(s)) {
        return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
      }
      patch.status = s;
    }
    const lead = await updateLead(id, patch);
    if (!lead) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json({ lead });
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Update failed';
    if (msg.includes('already uses')) {
      return NextResponse.json({ error: msg }, { status: 409 });
    }
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}

export async function DELETE(_request: NextRequest, { params }: Params) {
  const denied = await requireCrmSession();
  if (denied) return denied;
  const { id } = await params;
  const ok = await deleteLead(id);
  if (!ok) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json({ ok: true });
}
