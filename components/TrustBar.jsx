const ITEMS = [
  ['1-Year Warranty', 'Merchant warranty policy'],
  ['Free US Shipping', 'US warehouse, 5–8 business days'],
  ['30-Day Returns', 'Per merchant return policy'],
  ['Pay in Installments', 'Klarna & Afterpay in the US'],
];

export default function TrustBar() {
  return (
    <section aria-label="Purchase protections" className="border-y border-slate-800 bg-slate-900">
      <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 py-6 sm:px-6 lg:grid-cols-4 lg:px-8">
        {ITEMS.map(([t, s]) => (
          <li key={t} className="px-3 py-2 text-center">
            <p className="text-sm font-extrabold text-white sm:text-base">{t}</p>
            <p className="mt-1 text-xs text-slate-400 sm:text-sm">{s}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
