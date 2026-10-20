import AffiliateCTA from './AffiliateCTA';

export default function FinalCTA() {
  return (
    <section aria-labelledby="final-heading" className="border-t border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900 py-14 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 id="final-heading" className="text-2xl font-extrabold text-white sm:text-3xl">Ready to ride further than you thought you could?</h2>
        <p className="mt-3 text-slate-300">Check live pricing, stock and the latest merchant offers on the official COSWHEEL store.</p>
        <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <AffiliateCTA dest="default" placement="final" className="bg-brand text-white hover:bg-brand-dark">Visit the COSWHEEL Store</AffiliateCTA>
          <AffiliateCTA dest="dirt-ebikes" placement="final-dirt" className="border border-slate-600 text-slate-100 hover:border-amber-400 hover:text-amber-400">See the Dirt Ebike</AffiliateCTA>
        </div>
        <p className="mt-4 text-xs text-slate-500">This website contains affiliate links. We may earn a commission at no extra cost to you.</p>
      </div>
    </section>
  );
}
