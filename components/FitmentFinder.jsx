'use client';
import { useState } from 'react';
import AffiliateCTA from './AffiliateCTA';
import { FITMENT_OPTIONS } from '@/lib/config';
import { AVAILABILITY_LABEL, getProduct, isSoldOut, money } from '@/lib/products';

export default function FitmentFinder() {
  const [selected, setSelected] = useState(null);
  const option = FITMENT_OPTIONS.find((o) => o.id === selected);
  const matches = option ? option.productIds.map(getProduct).filter(Boolean) : [];

  return (
    <div id="finder" className="rounded-2xl border border-slate-700 bg-slate-900 p-6 sm:p-8">
      <h3 className="text-xl font-extrabold text-white sm:text-2xl">Smart E-Bike Finder</h3>
      <p className="mt-2 text-slate-300">What do you want your ride to feel like? Pick one and we’ll point you to the best-fit model.</p>

      <div role="group" aria-label="Choose your riding style" className="mt-5 grid gap-3 md:grid-cols-3">
        {FITMENT_OPTIONS.map((o) => (
          <button
            key={o.id}
            type="button"
            aria-pressed={selected === o.id}
            onClick={() => setSelected(o.id)}
            className={`min-h-[56px] rounded-xl border px-4 py-3 text-left text-sm font-bold transition ${
              selected === o.id ? 'border-amber-400 bg-amber-400/10 text-amber-300' : 'border-slate-700 text-slate-200 hover:border-slate-500'
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>

      <div aria-live="polite" className="mt-5">
        {matches.length > 0 && (
          <div className="grid gap-4 md:grid-cols-2">
            {matches.map((p) => (
              <div key={p.id} className="flex flex-col justify-between rounded-xl bg-slate-50 p-5 text-slate-900">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-brand">Recommended</p>
                  <p className="mt-1 text-lg font-extrabold">{p.name}</p>
                  <p className="mt-2 text-sm text-slate-700">{p.solution}</p>
                  <p className="mt-2 text-sm font-bold">{money(p.price)} · {AVAILABILITY_LABEL[p.availability]}</p>
                </div>
                <div className="mt-4">
                  <AffiliateCTA dest={p.id} placement={`finder-${p.id}`} className="w-full bg-brand text-white hover:bg-brand-dark">
                    {isSoldOut(p) ? `Check ${p.short} Restock` : `View ${p.short}`}
                  </AffiliateCTA>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
