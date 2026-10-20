import AffiliateCTA from './AffiliateCTA';
import ProductCard from './ProductCard';
import { PRODUCTS } from '@/lib/products';
import { SITE } from '@/lib/config';

export default function ProductGrid() {
  return (
    <section id="top-deals" aria-labelledby="deals-heading" className="bg-slate-950 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="deals-heading" className="text-2xl font-extrabold text-white sm:text-3xl">Top COSWHEEL e-bike deals right now</h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          Four models, four very different personalities. Prices and availability were checked on {SITE.checkedOn}.
          Confirm final pricing at the merchant’s checkout.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PRODUCTS.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
        <p className="mt-6 text-sm text-slate-400">
          Looking for parts and add-ons?{' '}
          <AffiliateCTA dest="accessories" placement="grid-accessories" className="!min-h-0 !p-0 !text-sm !font-bold text-amber-400 underline hover:text-amber-300">
            Browse COSWHEEL accessories
          </AffiliateCTA>
        </p>
      </div>
    </section>
  );
}
