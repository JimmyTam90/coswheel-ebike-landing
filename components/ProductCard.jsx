import AffiliateCTA from './AffiliateCTA';
import { AVAILABILITY_LABEL, isSoldOut, money, saving } from '@/lib/products';

// Six direct rows (image, title, meta, text, specs, CTA). On md+ the card uses CSS subgrid so each row
// has the same height in every column: specs and CTA sit on one straight line. DOM order stays
// IMAGE -> TITLE -> DESCRIPTION/SPECS -> CTA on every screen size.
export default function ProductCard({ p }) {
  const sold = isSoldOut(p);
  const cta = sold ? `Check ${p.short} Restock` : p.availability === 'MADE_TO_ORDER' ? `Order the ${p.short}` : `Shop the ${p.short}`;
  return (
    <article className="grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-700 bg-slate-50 md:row-span-6 md:mb-6 md:grid-rows-subgrid">
      <div className="flex aspect-[4/3] items-center justify-center border-b border-slate-100 bg-white p-3">
        <img src={p.image} alt={p.imageAlt} width={900} height={675} loading="lazy" className="h-full w-full object-contain" />
      </div>
      <h3 className="px-5 pt-5 text-lg font-extrabold leading-snug text-slate-900">{p.name}</h3>
      <div className="space-y-2 px-5 pt-3 text-sm text-slate-700">
        <p className="flex flex-wrap items-baseline gap-2">
          <span className="text-2xl font-extrabold text-slate-900">{money(p.price)}</span>
          <s className="text-slate-500">{money(p.regularPrice)}</s>
          <span className="font-bold text-emerald-700">Save {money(saving(p))}</span>
        </p>
        <p>
          <span className="font-bold text-slate-900">★ {p.rating.toFixed(1)}</span>
          <span className="text-slate-500"> ({p.reviewCount} {p.reviewCount === 1 ? 'review' : 'reviews'} on merchant site)</span>
        </p>
        <p className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${sold ? 'bg-red-100 text-red-800' : 'bg-emerald-100 text-emerald-800'}`}>
          {AVAILABILITY_LABEL[p.availability]}
        </p>
      </div>
      <div className="space-y-3 px-5 pt-3 text-sm leading-relaxed text-slate-700">
        <p><span className="font-bold text-slate-900">The problem: </span>{p.pain}</p>
        <p><span className="font-bold text-slate-900">Why this fits: </span>{p.solution}</p>
      </div>
      <div className="px-5 pt-4">
        <dl className="grid h-full grid-cols-2 content-start gap-x-3 gap-y-2 rounded-xl bg-white p-3 text-xs">
          {[['Motor', p.specs.motor], ['Battery', p.specs.battery], ['Top speed', p.specs.topSpeed], ['Range', p.specs.range]].map(([k, v]) => (
            <div key={k}><dt className="font-semibold text-slate-500">{k}</dt><dd className="font-bold text-slate-900">{v}</dd></div>
          ))}
        </dl>
      </div>
      <div className="px-5 pb-5 pt-5">
        <AffiliateCTA dest={p.id} placement={`card-${p.id}`} className="w-full bg-brand text-white hover:bg-brand-dark">
          {cta}
        </AffiliateCTA>
      </div>
    </article>
  );
}
