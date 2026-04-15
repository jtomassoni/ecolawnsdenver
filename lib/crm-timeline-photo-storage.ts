import { Buffer } from 'node:buffer';
import { mkdir, writeFile } from 'fs/promises';
import path from 'path';

export type StoredTimelinePhoto = {
  url: string;
  fileName: string;
  mimeType: string;
  sizeBytes: number;
};

/**
 * Persists a CRM timeline photo. When `BLOB_READ_WRITE_TOKEN` is set (same token in `.env` and Vercel is
 * fine), everything goes to one Vercel Blob store under `crm-timeline/…` — local dev and every deploy use
 * the same pool. If the token is unset locally only, we fall back to `public/uploads/crm-timeline/`.
 * On Vercel without a token, uploads cannot run (read-only filesystem).
 */
export async function storeCrmTimelinePhoto(input: {
  bytes: Uint8Array;
  fileName: string;
  mimeType: string;
  sizeBytes: number;
}): Promise<StoredTimelinePhoto> {
  const { bytes, fileName, mimeType, sizeBytes } = input;

  if (process.env.BLOB_READ_WRITE_TOKEN) {
    const { put } = await import('@vercel/blob');
    const pathname = `crm-timeline/${fileName}`;
    const result = await put(pathname, Buffer.from(bytes), {
      access: 'public',
      contentType: mimeType,
    });
    return {
      url: result.url,
      fileName,
      mimeType,
      sizeBytes,
    };
  }

  if (process.env.VERCEL) {
    throw new Error(
      'Timeline photos on Vercel need BLOB_READ_WRITE_TOKEN. In Vercel: Project → Settings → Environment Variables, ensure that token is set for Preview (not only Production), then redeploy. Or: Storage → Blob → link the store to this project so the token is injected on deploy.'
    );
  }

  const relDir = path.join('uploads', 'crm-timeline');
  const absDir = path.join(process.cwd(), 'public', relDir);
  await mkdir(absDir, { recursive: true });
  await writeFile(path.join(absDir, fileName), bytes);
  return {
    url: `/${relDir.replace(/\\/g, '/')}/${fileName}`,
    fileName,
    mimeType,
    sizeBytes,
  };
}
