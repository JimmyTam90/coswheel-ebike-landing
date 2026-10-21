'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';

export default function FloatingChat() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed bottom-[88px] right-6 md:bottom-6"
      style={{
        position: 'fixed',
        right: 24,
        left: 'auto',
        zIndex: 2147483647,
        direction: 'ltr',
      }}
    >
      {open && (
        <div
          id="coswheel-support-card"
          role="dialog"
          aria-label="COSWHEEL Support Hub"
          className="absolute bottom-full right-0 mb-3 w-80 max-w-[calc(100vw-3rem)] rounded-2xl border border-amber-400/30 bg-black/95 p-5 text-left shadow-2xl backdrop-blur-md sm:w-96"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              <h2 className="text-base font-extrabold text-white">COSWHEEL Support Hub</h2>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-white text-sm font-bold px-2 py-1 cursor-pointer"
              aria-label="Close support menu"
            >
              ✕
            </button>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-gray-300">
            👋 Need assistance with COSWHEEL e-bike fitment, specs, or VIP discount codes?
          </p>

          <div className="mt-4 flex flex-col gap-2.5">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex min-h-[44px] w-full items-center justify-center rounded-xl bg-amber-400 px-4 py-2.5 text-center text-sm font-extrabold text-black transition hover:bg-amber-300"
            >
              📩 Contact Support &amp; Help Desk
            </Link>
            <a
              href="#vip"
              onClick={() => setOpen(false)}
              className="flex min-h-[44px] w-full items-center justify-center rounded-xl border border-white/20 px-4 py-2.5 text-center text-sm font-semibold text-gray-200 transition hover:border-amber-400/60 hover:text-amber-300"
            >
              🎁 Claim VIP Price-Drop &amp; Deals
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="coswheel-support-card"
        aria-label={open ? 'Close support chat' : 'Open support chat'}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-400/40 bg-[#222] text-amber-400 shadow-xl transition hover:scale-105 hover:border-amber-400 sm:h-14 sm:w-14 cursor-pointer"
      >
        {open ? (
          <span className="text-xl font-bold leading-none" aria-hidden="true">✕</span>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 11.5a8.4 8.4 0 0 1-9 8.3 8.7 8.7 0 0 1-3.6-.8L3 20l1.1-4.6A8.3 8.3 0 0 1 3 11.5 8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5z" />
          </svg>
        )}
      </button>
    </div>,
    document.body,
  );
}
