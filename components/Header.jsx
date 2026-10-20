'use client';
import { useState } from 'react';
import Link from 'next/link';
import AffiliateCTA from './AffiliateCTA';
import { withBase } from '@/lib/config';

const NAV = [
  { href: '#top-deals', label: 'Top Deals' },
  { href: '#compare', label: 'Compare' },
  { href: '#faq', label: 'FAQ' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50 w-full overflow-x-clip bg-slate-950">
      <header className="relative w-full border-b border-slate-800 bg-slate-950">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" aria-label="PrimeGearLab home" className="flex shrink-0 items-center">
            <img src={withBase('/logo.png')} alt="PrimeGearLab Independent Lab" width={1161} height={883} className="h-14 w-auto" />
          </Link>

          <div className="ml-auto hidden items-center gap-7 md:flex">
            <nav aria-label="Primary" className="flex items-center gap-7">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} className="text-sm font-semibold text-slate-300 transition hover:text-amber-400">
                  {n.label}
                </a>
              ))}
            </nav>
            <AffiliateCTA dest="default" placement="header" className="bg-brand text-white hover:bg-brand-dark">
              Shop COSWHEEL
            </AffiliateCTA>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-slate-200 hover:bg-slate-800 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>

        {open && (
          <div id="mobile-menu" className="absolute left-0 right-0 top-full z-50 w-full border-b border-slate-800 bg-slate-950 shadow-2xl md:hidden">
            <nav aria-label="Mobile" className="flex flex-col gap-1 px-4 py-4">
              <Link href="/" onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base font-semibold text-slate-200 hover:bg-slate-800">Home</Link>
              {NAV.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base font-semibold text-slate-200 hover:bg-slate-800">
                  {n.label}
                </a>
              ))}
              <AffiliateCTA dest="default" placement="mobile-menu" className="mt-2 w-full bg-brand text-white hover:bg-brand-dark">
                Shop COSWHEEL
              </AffiliateCTA>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}
