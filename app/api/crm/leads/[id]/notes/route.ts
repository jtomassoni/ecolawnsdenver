import { NextRequest, NextResponse } from 'next/server';
import { requireCrmSession } from '@/lib/auth';
import { appendLeadTimelineNote, deleteLeadTimelineNote, updateLeadTimelineNote } from '@/lib/crm-store';

type Params = { params: Promise<{ id: string }> };

export async function POST(request: NextRequest, { params }: Params) {
  const denied = await requireCrmSession();
  if (denied) return denied;
  const { id } = await params;
  try {
    const body = await request.json();
    const text = typeof body.text === 'string' ? body.text : '';
    if (!text.trim()) {
      return NextResponse.json({ error: 'Note text is required' }, { status: 400 });
    }
    const lead = await appendLeadTimelineNote(id, text);
    if (!lead) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json({ lead });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

export async function PATCH(request: NextRequest, { params }: Params) {
  const denied = await requireCrmSession();
  if (denied) return denied;
  const { id } = await params;
  try {
    const body = await request.json();
    const noteId = typeof body.noteId === 'string' ? body.noteId : '';
    const text = typeof body.text === 'string' ? body.text : '';
    if (!noteId.trim()) {
      return NextResponse.json({ error: 'noteId is required' }, { status: 400 });
    }
    if (!text.trim()) {
      return NextResponse.json({ error: 'Note text is required' }, { status: 400 });
    }
    const lead = await updateLeadTimelineNote(id, noteId, text);
    if (!lead) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json({ lead });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest, { params }: Params) {
  const denied = await requireCrmSession();
  if (denied) return denied;
  const { id } = await params;
  try {
    const body = await request.json();
    const noteId = typeof body.noteId === 'string' ? body.noteId : '';
    if (!noteId.trim()) {
      return NextResponse.json({ error: 'noteId is required' }, { status: 400 });
    }
    const lead = await deleteLeadTimelineNote(id, noteId);
    if (!lead) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json({ lead });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
