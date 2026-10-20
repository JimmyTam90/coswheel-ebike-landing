import LegalLayout from '@/components/LegalLayout';
import { SITE } from '@/lib/config';

export const metadata = {
  title: 'Contact | PrimeGearLab',
  description: 'Contact PrimeGearLab.',
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE.canonical}/contact` },
};

export default function Page() {
  return (
    <LegalLayout title="Contact">
      <p>For questions about this guide, corrections or partnership requests, email <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
      <p>For orders, shipping, warranty or returns, please contact COSWHEEL directly through coswheelebike.com, because the merchant handles all purchases.</p>
    </LegalLayout>
  );
}
