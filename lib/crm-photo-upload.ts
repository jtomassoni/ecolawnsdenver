/**
 * Shrinks camera photos (incl. iPhone HEIC) to JPEG before upload so requests stay under
 * middleware/body limits and the server always receives a normal image/jpeg.
 */
export async function compressPhotoForTimelineUpload(file: File): Promise<File> {
  const maxDim = 2400;
  let quality = 0.85;

  try {
    const bmp = await createImageBitmap(file);
    try {
      const { width, height } = bmp;
      const scale = Math.min(1, maxDim / Math.max(width, height));
      const w = Math.max(1, Math.round(width * scale));
      const h = Math.max(1, Math.round(height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      if (!ctx) return file;
      ctx.drawImage(bmp, 0, 0, w, h);

      let blob: Blob | null = await new Promise((resolve) =>
        canvas.toBlob((b) => resolve(b), 'image/jpeg', quality)
      );
      if (!blob) return file;

      while (blob.size > 4 * 1024 * 1024 && quality > 0.42) {
        quality -= 0.07;
        const next = await new Promise<Blob | null>((resolve) =>
          canvas.toBlob((b) => resolve(b), 'image/jpeg', quality)
        );
        if (!next) break;
        blob = next;
      }

      const base = file.name.replace(/\.[^.]+$/, '') || 'photo';
      return new File([blob], `${base}.jpg`, {
        type: 'image/jpeg',
        lastModified: Date.now(),
      });
    } finally {
      bmp.close();
    }
  } catch {
    return file;
  }
}
