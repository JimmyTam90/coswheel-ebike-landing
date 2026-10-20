'use client';
import { useEffect, useState } from 'react';
import { outHref } from '@/lib/links';

// Every external affiliate CTA goes through here: real <a>, target=_blank, rel=noopener noreferrer,
// internal cloaked route, instant "Redirecting…" feedback, analytics that never block navigation.
export default function AffiliateCTA({ dest, children, className = '', placement = 'cta', label }) {
  const [loading, setLoading] = useState(false);
  const href = outHref(dest);

  useEffect(() => {
    if (!loading) return undefined;
    const t = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(t);
  }, [loading]);

  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl px-5 py-3 text-center text-sm font-bold transition focus-visible:outline-none ${className}`}
      onClick={() => {
        setLoading(true);
        try {
          if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
            window.gtag('event', 'affiliate_click', { destination_key: dest, placement });
          }
        } catch (e) {
          /* analytics must never block navigation */
        }
      }}
    >
      {loading ? 'Redirecting…' : children}
    </a>
  );
}
