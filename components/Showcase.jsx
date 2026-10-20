import FitmentFinder from './FitmentFinder';
import VideoShowcase from './VideoShowcase';

export default function Showcase() {
  return (
    <section aria-labelledby="showcase-heading" className="border-t border-slate-800 bg-slate-950 py-14 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 id="showcase-heading" className="mb-6 text-2xl font-extrabold text-white sm:text-3xl">Find your fit, then watch it ride</h2>
        <FitmentFinder />
        <VideoShowcase />
      </div>
    </section>
  );
}
