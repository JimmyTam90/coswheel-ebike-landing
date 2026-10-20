const FAQS = [
  ['Which COSWHEEL e-bike is best for hills?', 'For steep climbs look at the R19 (9000W peak) or the GT20 PRO (dual motor, 4000W peak). The GT20 lists 80 N·m of torque and a climbing angle of up to 30 degrees.'],
  ['How fast is shipping?', 'COSWHEEL ships from local US and EU warehouses and lists delivery in about 5–10 days. Shipping is free within the US; EU and UK orders have an extra shipping cost. The GT100 is built to order, with about 30 days of production first.'],
  ['What warranty comes with the bike?', 'Every COSWHEEL e-bike comes with the official 1-year manufacturer warranty, backed by the merchant’s customer service team. Read the full warranty terms on the merchant site.'],
  ['Can I return the bike if it’s not right for me?', 'COSWHEEL lists a 30-day return and refund policy. Review the return conditions on the merchant site before you order.'],
  ['Can I limit the top speed?', 'The merchant says the GT20 can be limited to 15 mph (25 km/h) and restored to 28 mph by repeating the steps. Check the manual for your exact model.'],
  ['Can I pay in installments?', 'In the US the merchant supports Klarna and Afterpay installment payments. Options differ by country.'],
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
