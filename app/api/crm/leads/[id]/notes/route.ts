import { NextRequest, NextResponse } from 'next/server';
import { requireCrmSession } from '@/lib/auth';
import { appendLeadTimelineNote, deleteLeadTimelineNote, updateLeadTimelineNote } from '@/lib/crm-store';
import { storeCrmTimelinePhoto } from '@/lib/crm-timeline-photo-storage';

type Params = { params: Promise<{ id: string }> };

const ALLOWED_IMAGE_MIMES = new Set([
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/heic',
  'image/heif',
]);

const EXT_BY_MIME: Record<string, string> = {
  'image/jpeg': '.jpg',
  'image/png': '.png',
  'image/webp': '.webp',
  'image/heic': '.heic',
  'image/heif': '.heif',
};

function inferMimeFromFileName(name: string): string | null {
  const lower = name.toLowerCase();
  if (lower.endsWith('.jpg') || lower.endsWith('.jpeg')) return 'image/jpeg';
  if (lower.endsWith('.png')) return 'image/png';
  if (lower.endsWith('.webp')) return 'image/webp';
  if (lower.endsWith('.heic')) return 'image/heic';
  if (lower.endsWith('.heif')) return 'image/heif';
  return null;
}

/** iOS Safari often sends HEIC with empty `type` or `application/octet-stream`. */
function normalizeImageMime(blob: Blob, nameHint: string): string | null {
  const raw = (blob.type || '').trim().toLowerCase();
  if (raw === 'image/jpg') return 'image/jpeg';
  if (ALLOWED_IMAGE_MIMES.has(raw)) return raw;
  if (raw === '' || raw === 'application/octet-stream') {
    const inferred = inferMimeFromFileName(nameHint);
    if (inferred) return inferred;
  }
  return null;
}

/** When filename and MIME are missing, detect JPEG/PNG/WebP/HEIC from magic bytes. */
async function sniffImageMime(blob: Blob): Promise<string | null> {
  const buf = new Uint8Array(await blob.slice(0, 64).arrayBuffer());
  if (buf.length >= 3 && buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) {
    return 'image/jpeg';
  }
  if (
    buf.length >= 8 &&
    buf[0] === 0x89 &&
    buf[1] === 0x50 &&
    buf[2] === 0x4e &&
    buf[3] === 0x47
  ) {
    return 'image/png';
  }
  if (buf.length >= 12 && buf[0] === 0x52 && buf[1] === 0x49 && buf[2] === 0x46 && buf[3] === 0x46) {
    const tag = String.fromCharCode(buf[8], buf[9], buf[10], buf[11]);
    if (tag === 'WEBP') return 'image/webp';
  }
  // ISO BMFF (HEIC/HEIF): ... 'ftyp' + brand(4)
  if (buf.length >= 12) {
    const box = String.fromCharCode(buf[4], buf[5], buf[6], buf[7]);
    if (box === 'ftyp') {
      const brand = String.fromCharCode(buf[8], buf[9], buf[10], buf[11]);
      if (/^(heic|heix|hevc|hevx|mif1|msf1)$/i.test(brand)) {
        return 'image/heic';
      }
    }
  }
  return null;
}

function jsonError(message: string, status: number, detail?: string) {
  const body: { error: string; detail?: string } = { error: message };
  if (detail) body.detail = detail;
  return NextResponse.json(body, { status });
}

export async function POST(request: NextRequest, { params }: Params) {
  const denied = await requireCrmSession();
  if (denied) return denied;
  const { id } = await params;
  try {
    const contentType = request.headers.get('content-type') || '';
    let text = '';
    let photo:
      | {
          url: string;
          fileName: string;
          mimeType: string;
          sizeBytes: number;
        }
      | undefined;

    if (contentType.includes('multipart/form-data')) {
      let form: FormData;
      try {
        form = await request.formData();
      } catch (e) {
        console.error('notes POST formData', e);
        return jsonError(
          'Could not read the photo upload. If this keeps happening, try again after the photo is compressed (or take a new picture).',
          400,
          e instanceof Error ? e.message : String(e)
        );
      }
      const textField = form.get('text');
      text = typeof textField === 'string' ? textField : '';
      const rawPhoto = form.get('photo');
      const blob =
        rawPhoto instanceof Blob && rawPhoto.size > 0 ? rawPhoto : null;
      if (blob) {
        if (!text.trim()) {
          return NextResponse.json({ error: 'Note content is required.' }, { status: 400 });
        }
        const nameHint = rawPhoto instanceof File ? rawPhoto.name : '';
        let mime = normalizeImageMime(blob, nameHint);
        if (!mime) {
          mime = await sniffImageMime(blob);
        }
        if (!mime) {
          return NextResponse.json(
            {
              error:
                'Unsupported image type. Use JPG, PNG, WEBP, or HEIC (if the type is unknown, rename or re-save the photo).',
            },
            { status: 400 }
          );
        }
        const maxSizeBytes = 25 * 1024 * 1024;
        if (blob.size > maxSizeBytes) {
          return NextResponse.json(
            { error: 'Image must be 25MB or smaller. Try taking the photo again or use a smaller file.' },
            { status: 400 }
          );
        }
        const ext = EXT_BY_MIME[mime] ?? '.bin';
        const fileName = `${crypto.randomUUID()}${ext}`;
        const arrayBuffer = await blob.arrayBuffer();
        const bytes = new Uint8Array(arrayBuffer);
        photo = await storeCrmTimelinePhoto({
          bytes,
          fileName,
          mimeType: mime,
          sizeBytes: blob.size,
        });
      }
    } else {
      let body: unknown;
      try {
        body = await request.json();
      } catch (e) {
        console.error('notes POST json', e);
        return jsonError('Invalid JSON body.', 400, e instanceof Error ? e.message : String(e));
      }
      text = typeof body === 'object' && body !== null && 'text' in body && typeof (body as { text: unknown }).text === 'string'
        ? (body as { text: string }).text
        : '';
    }

    if (!text.trim()) {
      return NextResponse.json({ error: 'Note content is required.' }, { status: 400 });
    }
    const lead = await appendLeadTimelineNote(id, text, photo ? { photo } : undefined);
    if (!lead) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json({ lead });
  } catch (e) {
    console.error('notes POST', e);
    return jsonError(
      'Could not save note.',
      500,
      e instanceof Error ? e.message : String(e)
    );
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
      return NextResponse.json({ error: 'Note content is required.' }, { status: 400 });
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
