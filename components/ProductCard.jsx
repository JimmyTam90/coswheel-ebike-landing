import AffiliateCTA from './AffiliateCTA';
import { AVAILABILITY_LABEL, isSoldOut, money, saving } from '@/lib/products';

export default function ProductCard({ p }) {
  const sold = isSoldOut(p);
  const cta = sold ? `Check ${p.short} Restock` : p.availability === 'MADE_TO_ORDER' ? `Order the ${p.short}` : `Shop the ${p.short}`;
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-50">
      <div className="flex aspect-[4/3] items-center justify-center border-b border-slate-100 bg-white p-3">
        <img src={p.image} alt={p.imageAlt} width={900} height={675} loading="lazy" className="h-full w-full object-contain" />
      </div>
      <div className="flex flex-1 flex-col bg-slate-50 p-5">
        <h3 className="text-lg font-extrabold leading-snug text-slate-900">{p.name}</h3>
        <div className="mt-3 flex flex-1 flex-col text-sm text-slate-700">
          <div className="flex-1 space-y-3">
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
          <p><span className="font-bold text-slate-900">The problem: </span>{p.pain}</p>
          <p><span className="font-bold text-slate-900">Why this fits: </span>{p.solution}</p>
          </div>
          <dl className="mt-4 grid min-h-[104px] grid-cols-2 content-start gap-x-3 gap-y-2 rounded-xl bg-white p-3 text-xs">
            {[['Motor', p.specs.motor], ['Battery', p.specs.battery], ['Top speed', p.specs.topSpeed], ['Range', p.specs.range]].map(([k, v]) => (
              <div key={k}><dt className="font-semibold text-slate-500">{k}</dt><dd className="font-bold text-slate-900">{v}</dd></div>
            ))}
          </dl>
        </div>
        <div className="mt-5">
          <AffiliateCTA dest={p.id} placement={`card-${p.id}`} className="w-full bg-brand text-white hover:bg-brand-dark">
            {cta}
          </AffiliateCTA>
        </div>
      </div>
    </article>
  );
}
