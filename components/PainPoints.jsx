const POINTS = [
  {
    title: 'Hills that make you quit',
    body: 'Power is the difference between conquering the climb and walking beside the bike. The R19 peaks at 9000W, the GT20 PRO runs dual motors at 4000W peak, and the GT20 delivers 80 N·m of torque (merchant figures).',
    match: 'Best match: R19 or GT20 PRO',
  },
  {
    title: 'Range anxiety on long days',
    body: 'Nobody wants to calculate the walk home. COSWHEEL lists up to 124 miles for the R19, 87 miles for the GT20 with pedal assist, and up to 145 miles for the GT20 PRO and GT20 MAX.',
    match: 'Best match: GT20 PRO or R19',
  },
  {
    title: 'Fear of buying the wrong bike',
    body: 'Big purchase, online. The merchant lists a 1-year warranty and a 30-day return policy, and the GT20 frame is hydroformed 6061-T6 aluminum, which the merchant says passed 10,000+ collision tests.',
    match: 'Best match: any model, check policies',
  },
];

export default function PainPoints() {
  return (
    <section aria-labelledby="pain-heading" className="bg-slate-950 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="pain-heading" className="max-w-3xl text-2xl font-extrabold text-white sm:text-3xl">
          We know what’s really stopping you from riding more
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {POINTS.map((p) => (
            <article key={p.title} className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-lg font-bold text-white">{p.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-slate-300">{p.body}</p>
              <p className="mt-4 text-sm font-bold text-amber-400">{p.match}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
