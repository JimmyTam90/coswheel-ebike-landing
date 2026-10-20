'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import AffiliateCTA from './AffiliateCTA';

const KEY = 'coswheel_offer_dismissed';

// Shows once per session: exit intent (desktop), rapid scroll-up (mobile) or >50% of the catalog scrolled.
export default function ExitPopup() {
  const [show, setShow] = useState(false);
  const done = useRef(false);

  const trigger = useCallback(() => {
    if (done.current) return;
    done.current = true;
    setShow(true);
  }, []);

  const dismiss = useCallback(() => {
    setShow(false);
    try { sessionStorage.setItem(KEY, '1'); } catch (e) { /* storage may be unavailable */ }
  }, []);

  useEffect(() => {
    try { if (sessionStorage.getItem(KEY)) { done.current = true; return undefined; } } catch (e) { /* ignore */ }
    const t0 = Date.now();
    let lastY = window.scrollY;
    const onOut = (e) => {
      if (!e.relatedTarget && e.clientY <= 0 && Date.now() - t0 > 5000) trigger();
    };
    const onScroll = () => {
      const y = window.scrollY;
      const grid = document.getElementById('top-deals');
      if (grid) {
        const r = grid.getBoundingClientRect();
        if (y + window.innerHeight >= r.top + y + r.height * 0.5) { trigger(); return; }
      }
      if (lastY - y > 80 && y > 600) trigger();
      lastY = y;
    };
    document.addEventListener('mouseout', onOut);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      document.removeEventListener('mouseout', onOut);
      window.removeEventListener('scroll', onScroll);
    };
  }, [trigger]);

  useEffect(() => {
    if (!show) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') dismiss(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [show, dismiss]);

  if (!show) return null;

  return (
    <aside role="dialog" aria-label="COSWHEEL seasonal offer"
      className="fixed inset-x-3 bottom-24 z-[60] rounded-2xl border border-amber-400/40 bg-slate-900 p-5 shadow-2xl shadow-black/50 md:inset-x-auto md:bottom-6 md:right-6 md:w-[380px]">
      <button type="button" onClick={dismiss} aria-label="Close offer"
        className="absolute right-2 top-2 inline-flex h-11 w-11 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
      </button>
      <p className="text-xs font-bold uppercase tracking-widest text-amber-400">Seasonal offer</p>
      <p className="mt-2 pr-8 text-lg font-extrabold leading-snug text-white">
        Direct seasonal markdowns up to $400 OFF + free shipping from the US warehouse
      </p>
      <p className="mt-2 text-xs text-slate-400">Merchant offers change. Confirm final pricing and shipping at checkout.</p>
      <div className="mt-4 flex flex-col gap-2">
        <AffiliateCTA dest="all-ebikes" placement="exit-popup" className="w-full bg-brand text-white hover:bg-brand-dark">
          Claim the Deals
        </AffiliateCTA>
        <a href="#vip" onClick={dismiss}
          className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-slate-600 px-5 py-3 text-sm font-bold text-slate-100 hover:border-amber-400 hover:text-amber-400">
          Get VIP price alerts
        </a>
      </div>
    </aside>
  );
}
