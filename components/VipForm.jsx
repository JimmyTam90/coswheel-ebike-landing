'use client';
import { useState } from 'react';
import { NEWSLETTER, withBase } from '@/lib/config';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Native dark-mode VIP form. Posts to the Brevo form endpoint as a normal form submission.
// Browsers cannot read the cross-origin response (no-cors), so "success" means the request was sent.
export default function VipForm() {
  const [email, setEmail] = useState('');
  const [trap, setTrap] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [error, setError] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    if (status === 'loading') return;
    const value = email.trim();
    if (!EMAIL_RE.test(value)) {
      setStatus('error');
      setError('Please enter a valid email address.');
      return;
    }
    if (trap) { setStatus('success'); return; } // honeypot: silently ignore bots
    setStatus('loading');
    try {
      await fetch(NEWSLETTER.formUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ EMAIL: value, email_address_check: '', locale: 'en', html_type: 'simple' }).toString(),
      });
      setStatus('success');
      try {
        if (typeof window.gtag === 'function') window.gtag('event', 'vip_signup', { placement: 'footer' });
      } catch (err) { /* analytics must never break the form */ }
    } catch (err) {
      setStatus('error');
      setError('Something went wrong. Please try again in a moment.');
    }
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-2xl shadow-black/40 ring-1 ring-amber-400/10 backdrop-blur-md sm:p-8">
      <p className="mx-auto w-fit rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-bold text-amber-300">
        {NEWSLETTER.badge}
      </p>
      <h2 id="vip-heading" className="mt-4 text-center text-2xl font-extrabold leading-tight text-white sm:text-3xl">
        {NEWSLETTER.heading}
      </h2>
      <p className="mx-auto mt-3 max-w-md text-center text-sm leading-relaxed text-slate-300 sm:text-base">
        {NEWSLETTER.subheading}
      </p>

      <div aria-live="polite" className="mt-6 min-h-[112px]">
        {status === 'success' ? (
          <div className="flex min-h-[112px] flex-col items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-5 text-center">
            <p className="text-lg font-extrabold text-emerald-300">You’re on the VIP list! ✓</p>
            <p className="mt-1 text-sm text-slate-300">Check your inbox (and spam folder) for a confirmation email.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate>
            <label htmlFor="vip-email" className="sr-only">Email address</label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="vip-email"
                type="email"
                name="EMAIL"
                inputMode="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => { setEmail(e.target.value); if (status === 'error') setStatus('idle'); }}
                placeholder={NEWSLETTER.placeholder}
                aria-invalid={status === 'error'}
                aria-describedby={status === 'error' ? 'vip-error' : undefined}
                className="h-12 w-full min-w-0 flex-1 rounded-xl border border-white/10 bg-slate-950/60 px-4 text-base text-white placeholder:text-slate-500 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/40"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex h-12 shrink-0 items-center justify-center rounded-xl bg-[#F59E0B] px-6 text-sm font-extrabold text-slate-950 transition hover:bg-[#EAB308] disabled:cursor-wait disabled:opacity-70"
              >
                {status === 'loading' ? 'Sending…' : NEWSLETTER.button}
              </button>
            </div>
            {/* honeypot: hidden from people, visible to bots */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <label>Leave this empty<input type="text" tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} /></label>
            </div>
            {status === 'error' && <p id="vip-error" role="alert" className="mt-2 text-sm font-semibold text-red-400">{error}</p>}
          </form>
        )}
      </div>

      <p className="mt-2 text-center text-xs text-slate-400">{NEWSLETTER.privacy}</p>
      <p className="mt-1 text-center text-xs text-slate-500">
        By subscribing you agree to our <a className="underline hover:text-amber-400" href={withBase('/privacy')}>Privacy Policy</a>.
      </p>
    </div>
  );
}
