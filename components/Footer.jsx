import Link from 'next/link';
import SocialIcons from './SocialIcons';
import { NEWSLETTER, SITE, withBase } from '@/lib/config';

const LEGAL = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/affiliate-disclosure', label: 'Affiliate Disclosure' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800 bg-slate-950">
      {/* Newsletter / VIP lead capture (Brevo hosted form) */}
      <section id="vip" aria-labelledby="vip-heading" className="border-b border-slate-800 bg-slate-900/60">
        <div className="mx-auto grid max-w-5xl items-center gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 md:gap-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-amber-400">VIP list</p>
            <h2 id="vip-heading" className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">{NEWSLETTER.heading}</h2>
            <p className="mt-3 text-slate-300">{NEWSLETTER.subheading}</p>
            <ul className="mt-5 space-y-2 text-sm text-slate-300">
              {['Seasonal price-drop alerts', 'Free accessory guides', 'Speed-tuning tips'].map((t) => (
                <li key={t} className="flex items-center gap-2"><span aria-hidden="true" className="text-amber-400">✓</span>{t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-2 shadow-xl shadow-black/30">
            <iframe
              src={NEWSLETTER.formUrl}
              title="COSWHEEL VIP email signup"
              loading="lazy"
              scrolling="no"
              style={{ overflow: 'hidden' }}
              className="block h-[620px] w-full rounded-xl border-0 bg-white sm:h-[560px] md:h-[600px] lg:h-[560px]"
            />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[auto_minmax(0,1fr)] md:gap-x-12">
          <Link href="/" aria-label="PrimeGearLab home" className="md:row-span-3">
            <img src={withBase('/logo.png')} alt="PrimeGearLab Independent Lab" width={1161} height={883} className="h-24 w-auto md:h-28" />
          </Link>

          <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-3 md:flex-nowrap md:justify-end md:whitespace-nowrap">
            {LEGAL.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm font-semibold text-slate-300 hover:text-amber-400">{l.label}</Link>
            ))}
          </nav>

          <div className="max-w-4xl space-y-3 text-left text-sm leading-relaxed text-slate-400">
            <p>
              PrimeGearLab is an independent affiliate publisher and is not COSWHEEL. This website contains affiliate links.
              We may earn a commission when you purchase through eligible links, at no additional cost to you.
            </p>
            <p>
              Prices, specifications and stock were checked on {SITE.checkedOn} and can change on the merchant site at any time.
              Always confirm details on coswheelebike.com before you buy.
            </p>
            <p>
              Contact: <a className="text-slate-200 underline hover:text-amber-400" href={`mailto:${SITE.email}`}>{SITE.email}</a>
              {' '}· © {new Date().getFullYear()} PrimeGearLab. COSWHEEL and product names belong to their respective owners.
            </p>
          </div>

          <div className="md:justify-self-end">
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
  );
}
