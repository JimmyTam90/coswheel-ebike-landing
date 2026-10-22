import AffiliateCTA from './AffiliateCTA';
import { REVIEW_SUMMARY, getProduct, money, saving } from '@/lib/products';

export default function Hero() {
  const p = getProduct('coswheel-r19');
  return (
    <section className="w-full overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 pt-6 sm:pt-10">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-8 lg:pb-16">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-amber-400">Independent COSWHEEL e-bike guide · 2026</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Coswheel Electric Bikes: Fat Tire, Dirt &amp; Motorcycle Ebikes for Riders Who Refuse to Stay Home
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
            Another Monday of traffic. Another weekend you didn’t ride because the hill looked too steep or the battery
            looked too small. This guide matches the COSWHEEL lineup to the ride you actually want, so you can stop
            scrolling and start going.
          </p>
          <div className="mt-6 flex max-w-xl flex-col gap-2 rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 sm:flex-row sm:items-center sm:gap-4">
            <div className="flex items-center gap-2">
              <span className="relative inline-block text-lg leading-none tracking-tight" role="img" aria-label={`${REVIEW_SUMMARY.avg} out of 5 stars`}>
                <span className="text-slate-700" aria-hidden="true">★★★★★</span>
                <span className="absolute inset-y-0 left-0 overflow-hidden whitespace-nowrap text-amber-400" style={{ width: `${(REVIEW_SUMMARY.avg / 5) * 100}%` }} aria-hidden="true">★★★★★</span>
              </span>
              <span className="text-sm font-extrabold text-white">{REVIEW_SUMMARY.avg}/5</span>
            </div>
            <p className="text-xs leading-snug text-slate-300 sm:text-sm">
              Average of {REVIEW_SUMMARY.count} customer reviews on the official COSWHEEL store
              <span className="hidden text-slate-600 sm:inline"> | </span>
              <span className="block text-slate-400 sm:inline">Independent guide · COSWHEEL affiliate partner</span>
            </p>
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <AffiliateCTA dest="coswheel-r19" placement="hero-primary" className="bg-brand text-white hover:bg-brand-dark">
              Shop the R19 Dirt Ebike
            </AffiliateCTA>
            <a href="#top-deals" className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-slate-600 px-5 py-3 text-sm font-bold text-slate-100 hover:border-amber-400 hover:text-amber-400">
              Compare All Models
            </a>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            <a href="#vip" className="font-semibold text-amber-400 underline-offset-2 hover:underline">Get VIP price-drop alerts</a>
            {' '}· Affiliate disclosure: we may earn a commission when you buy through our links, at no extra cost to you.
          </p>
        </div>

        <div className="mx-auto w-full max-w-xl">
          <div className="overflow-hidden rounded-2xl border border-slate-700 bg-white">
            <div className="flex aspect-[4/3] items-center justify-center bg-white p-4">
              <img src={p.image} alt={p.imageAlt} width={900} height={675} className="h-full w-full object-contain" fetchPriority="high" />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 bg-slate-50 px-5 py-4 text-slate-900">
              <span className="text-base font-extrabold">{p.short} · {money(p.price)} <s className="text-sm font-medium text-slate-500">{money(p.regularPrice)}</s></span>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">Save {money(saving(p))} at merchant</span>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-slate-500">Price checked October 20, 2026 on coswheelebike.com. Subject to change.</p>
        </div>
      </div>
    </section>
  );
}
