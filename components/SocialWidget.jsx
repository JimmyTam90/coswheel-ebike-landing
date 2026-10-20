import SocialIcons from './SocialIcons';

// Sticky social widget, bottom-right, desktop/tablet only (mobile already has the sticky CTA bar + footer icons).
export default function SocialWidget() {
  return (
    <aside aria-label="Social links" className="fixed bottom-6 right-4 z-40 hidden md:block">
      <SocialIcons className="flex-col rounded-full border border-slate-800 bg-slate-950/90 p-1.5 shadow-xl backdrop-blur" linkClassName="!h-10 !w-10 border-transparent" />
    </aside>
  );
}
