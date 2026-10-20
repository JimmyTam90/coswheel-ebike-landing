import { resolveDestination } from '@/lib/affiliate';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

const HEADERS = {
  'X-Robots-Tag': 'noindex, nofollow',
  'Cache-Control': 'private, no-store',
  'Referrer-Policy': 'no-referrer-when-downgrade',
};

export async function GET(_request, { params }) {
  const destination = resolveDestination(params?.slug);
  if (!destination) {
    return new Response('Not found', { status: 404, headers: HEADERS });
  }
  return new Response(null, { status: 302, headers: { ...HEADERS, Location: destination } });
}
