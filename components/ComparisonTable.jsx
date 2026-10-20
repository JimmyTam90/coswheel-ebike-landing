import { AVAILABILITY_LABEL, PRODUCTS, money } from '@/lib/products';

const ROWS = [
  ['Peak motor power', (p) => p.specs.motor],
  ['Battery', (p) => p.specs.battery],
  ['Top speed', (p) => p.specs.topSpeed],
  ['Max range', (p) => p.specs.range],
  ['Merchant price', (p) => money(p.price)],
  ['Availability', (p) => AVAILABILITY_LABEL[p.availability]],
];

export default function ComparisonTable() {
  return (
    <section id="compare" aria-labelledby="compare-heading" className="border-t border-slate-800 bg-slate-950 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="compare-heading" className="text-2xl font-extrabold text-white sm:text-3xl">COSWHEEL model comparison</h2>
        <p className="mt-3 max-w-3xl text-slate-300">Figures come from each model’s official product page. “See merchant page” means we could not confirm the number.</p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-700">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-slate-900">
                <th scope="col" className="p-4 font-bold text-slate-400">Spec</th>
                {PRODUCTS.map((p) => <th key={p.id} scope="col" className="p-4 font-extrabold text-white">{p.short}</th>)}
              </tr>
            </thead>
            <tbody>
              {ROWS.map(([label, fn]) => (
                <tr key={label} className="border-t border-slate-800">
                  <th scope="row" className="p-4 font-semibold text-slate-400">{label}</th>
                  {PRODUCTS.map((p) => <td key={p.id} className="p-4 text-slate-200">{fn(p)}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
