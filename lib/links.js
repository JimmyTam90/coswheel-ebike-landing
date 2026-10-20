// Client-safe: only knows which outbound keys exist and builds the internal cloaked path.
// Real merchant URLs live in lib/affiliate.js (server/edge only).
import { withBase } from './config';

export const OUT_KEYS = [
  'default',
  'coswheel-r19',
  'coswheel-gt20',
  'coswheel-gt20-pro',
  'coswheel-gt100',
  'dirt-ebikes',
  'commuter-ebikes',
  'accessories',
];

export function outHref(key) {
  if (!OUT_KEYS.includes(key)) return null; // fail safe: no clickable CTA without a valid key
  return withBase(`/api/out/${key}`);
}
