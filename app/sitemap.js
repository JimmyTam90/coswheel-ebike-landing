import { SITE } from '@/lib/config';

export default function sitemap() {
  return [{ url: SITE.canonical, lastModified: new Date('2026-10-20'), changeFrequency: 'weekly', priority: 1 }];
}
