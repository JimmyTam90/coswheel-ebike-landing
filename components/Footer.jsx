import Link from 'next/link';
import SocialIcons from './SocialIcons';
import VipForm from './VipForm';
import { SITE, withBase } from '@/lib/config';

const LEGAL = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/affiliate-disclosure', label: 'Affiliate Disclosure' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800 bg-slate-950">
      {/* VIP lead capture: native dark-mode form posting to Brevo */}
      <section id="vip" aria-labelledby="vip-heading" className="border-b border-slate-800 bg-gradient-to-b from-slate-900/70 to-slate-950">
        <div className="mx-auto max-w-xl px-4 py-12 sm:px-6 sm:py-14">
          <VipForm />
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
