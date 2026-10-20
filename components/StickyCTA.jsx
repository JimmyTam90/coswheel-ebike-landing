import AffiliateCTA from './AffiliateCTA';

export default function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-800 bg-slate-950/95 p-3 backdrop-blur md:hidden">
      <AffiliateCTA dest="default" placement="mobile-sticky" className="w-full bg-brand text-white hover:bg-brand-dark">
        Shop COSWHEEL E-Bikes
      </AffiliateCTA>
    </div>
  );
}
