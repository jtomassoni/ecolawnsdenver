import type { MetadataRoute } from 'next';

const base = 'https://ecolawnsdenver.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: base, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/services`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/about`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
  ];
}
