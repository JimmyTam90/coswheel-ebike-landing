// Central affiliate destination resolver (server / edge only). URLs are preserved exactly as supplied.
import { OUT_KEYS } from './links';

export const AFFILIATE_PARAM = 'sca_ref=12451454.hXrs3jWqbL';

export const DEFAULT_AFFILIATE_URL = 'https://www.coswheelebike.com?sca_ref=12451454.hXrs3jWqbL';

export const PRODUCT_LINKS = {
  'coswheel-r19': 'https://www.coswheelebike.com/products/r19-electric-dirt-bike?sca_ref=12451454.hXrs3jWqbL',
  'coswheel-gt20': 'https://www.coswheelebike.com/products/gt20-ebike?sca_ref=12451454.hXrs3jWqbL',
  'coswheel-gt20-pro': 'https://www.coswheelebike.com/products/gt20-pro-ebike?sca_ref=12451454.hXrs3jWqbL',
  'coswheel-gt100': 'https://www.coswheelebike.com/products/gt100-electric-motorcycle?sca_ref=12451454.hXrs3jWqbL',
};

export const COLLECTION_LINKS = {
  'dirt-ebikes': 'https://www.coswheelebike.com/products/r19-electric-dirt-bike?sca_ref=12451454.hXrs3jWqbL',
  'commuter-ebikes': 'https://www.coswheelebike.com/products/gt20-ebike?sca_ref=12451454.hXrs3jWqbL',
  accessories: 'https://www.coswheelebike.com/collections/accessories?sca_ref=12451454.hXrs3jWqbL',
};

function isSafeUrl(value) {
  try {
    const u = new URL(value);
    return u.protocol === 'https:' && (u.hostname === 'www.coswheelebike.com' || u.hostname === 'coswheelebike.com');
  } catch {
    return false;
  }
}

// Priority: product -> collection -> default (default only for the explicit "default" key).
export function resolveDestination(key) {
  if (typeof key !== 'string' || !/^[a-z0-9-]+$/.test(key) || !OUT_KEYS.includes(key)) return null;
  const url =
    PRODUCT_LINKS[key] ?? COLLECTION_LINKS[key] ?? (key === 'default' ? DEFAULT_AFFILIATE_URL : null);
  return url && isSafeUrl(url) ? url : null;
}
