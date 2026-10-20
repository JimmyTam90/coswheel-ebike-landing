const REVIEWS = [
  { name: 'DavidB', title: 'Great Bike', quote: 'Great bike, sturdy frame, good speed and battery life, and a comfortable ride.' },
  { name: 'Andrea', title: 'A mix of speed and comfort', quote: 'Can’t complain about my GT20, even a single motor gives great speed.' },
  { name: 'Madaleine McDonough', title: 'Can’t beat the price', quote: 'Praised the GT20 as a solid first ebike and the merchant support team as fast to help.', paraphrase: true },
  { name: 'Ian', title: 'Honest feedback', quote: 'Found the lights a little fragile and the assembly manual in need of work, but still called it a blast to ride.', paraphrase: true },
];

export default function Reviews() {
  return (
    <section aria-labelledby="reviews-heading" className="border-t border-slate-800 bg-slate-950 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="reviews-heading" className="text-2xl font-extrabold text-white sm:text-3xl">What GT20 owners say</h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          Excerpts from customer reviews on the official COSWHEEL GT20 page (33 reviews at the time of checking, 27 five-star and 6 four-star).
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-amber-400" aria-label="Customer review">★★★★★</p>
              <p className="mt-2 font-bold text-white">{r.title}</p>
              <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-slate-300">
                {r.paraphrase ? r.quote : `“${r.quote}”`}
              </blockquote>
              <figcaption className="mt-4 text-xs font-semibold text-slate-400">{r.name} · COSWHEEL GT20 review</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
