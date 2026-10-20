const FAQS = [
  ['Which COSWHEEL e-bike is best for hills?', 'For steep climbs look at the R19 (9000W peak) or the GT20 PRO (dual motor, 4000W peak). The GT20 lists 80 N·m of torque and a climbing angle of up to 30 degrees.'],
  ['How long does shipping take?', 'The merchant lists 5–8 business days from its US warehouse with free shipping in the US. EU shipping takes longer and costs extra. The GT100 is built to order, with about 30 days of production first.'],
  ['What warranty and returns apply?', 'COSWHEEL lists a 1-year warranty and a 30-day return and refund policy. Read the full terms on the merchant site before you buy.'],
  ['Can I limit the top speed?', 'The merchant says the GT20 can be limited to 15 mph (25 km/h) and restored to 28 mph by repeating the steps. Check the manual for your exact model.'],
  ['Can I pay in installments?', 'In the US the merchant supports Klarna and Afterpay installment payments. Options differ by country.'],
  ['Why do some models show as sold out?', 'Stock changes quickly. We flag models that were sold out when we last checked, and the button takes you to the merchant page so you can see current restock status.'],
];

export default function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="border-t border-slate-800 bg-slate-950 py-14 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 id="faq-heading" className="text-2xl font-extrabold text-white sm:text-3xl">COSWHEEL e-bike FAQ</h2>
        <div className="mt-6 space-y-3">
          {FAQS.map(([q, a]) => (
            <details key={q} className="group rounded-xl border border-slate-800 bg-slate-900 p-4">
              <summary className="cursor-pointer list-none text-base font-bold text-white marker:hidden">{q}</summary>
              <p className="mt-3 leading-relaxed text-slate-300">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
