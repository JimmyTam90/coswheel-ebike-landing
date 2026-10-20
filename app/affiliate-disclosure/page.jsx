import LegalLayout from '@/components/LegalLayout';
import { SITE } from '@/lib/config';

export const metadata = {
  title: 'Affiliate Disclosure | PrimeGearLab',
  description: 'How PrimeGearLab earns commissions from COSWHEEL links.',
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE.canonical}/affiliate-disclosure` },
};

export default function Page() {
  return (
    <LegalLayout title="Affiliate Disclosure">
      <p>This website contains affiliate links. We may earn a commission when you purchase through eligible links, at no additional cost to you.</p>
      <p>Buttons on this site open a PrimeGearLab redirect that sends you to coswheelebike.com with our affiliate reference attached. Not every click or purchase is guaranteed to earn a commission.</p>
      <p>Our rankings and explanations are written independently. Commissions do not change the price you pay.</p>
      <p>Questions? Email <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
    </LegalLayout>
  );
}
