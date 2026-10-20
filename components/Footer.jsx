import Link from 'next/link';
import { NEWSLETTER, SITE, SOCIAL, withBase } from '@/lib/config';

const LEGAL = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/affiliate-disclosure', label: 'Affiliate Disclosure' },
  { href: '/contact', label: 'Contact' },
];

const iconCls = 'h-5 w-5';
const SocialLink = ({ href, label, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
     className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-amber-400 hover:text-amber-400">
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800 bg-slate-950">
      {/* Newsletter / VIP lead capture (Brevo hosted form) */}
      <section id="vip" aria-labelledby="vip-heading" className="border-b border-slate-800 bg-slate-900/60">
        <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6">
          <h2 id="vip-heading" className="text-2xl font-extrabold text-white sm:text-3xl">{NEWSLETTER.heading}</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">{NEWSLETTER.subheading}</p>
          <div className="mx-auto mt-6 max-w-[540px] overflow-hidden rounded-2xl bg-white">
            <iframe
              src={NEWSLETTER.formUrl}
              title="COSWHEEL VIP email signup"
              loading="lazy"
              className="block h-[460px] w-full border-0"
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

          <div className="flex items-center gap-3 md:justify-end">
            <SocialLink href={SOCIAL.facebook} label="PrimeGearLab on Facebook">
              <svg className={iconCls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </SocialLink>
            <SocialLink href={SOCIAL.x} label="PrimeGearLab on X">
              <svg className={iconCls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </SocialLink>
            <SocialLink href={SOCIAL.instagram} label="PrimeGearLab on Instagram">
              <svg className={iconCls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
            </SocialLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
