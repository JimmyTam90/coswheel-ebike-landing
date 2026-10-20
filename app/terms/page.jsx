import LegalLayout from '@/components/LegalLayout';
import { SITE } from '@/lib/config';

export const metadata = {
  title: 'Terms of Service | PrimeGearLab',
  description: 'Terms for using the PrimeGearLab COSWHEEL guide.',
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE.canonical}/terms` },
};

export default function Page() {
  return (
    <LegalLayout title="Terms of Service">
      <p>By using this website you agree to these terms.</p>
      <h2 className="text-xl font-bold text-white">Informational use</h2>
      <p>This site is an independent buying guide. Specifications, prices and stock come from the merchant and were checked on the date shown, but they can change at any time. Always confirm details on the merchant site.</p>
      <h2 className="text-xl font-bold text-white">No merchant relationship</h2>
      <p>PrimeGearLab is not COSWHEEL. Purchases, shipping, warranty, returns and support are provided by the merchant under its own policies.</p>
      <h2 className="text-xl font-bold text-white">Liability</h2>
      <p>The site is provided as is, without warranties. We are not liable for decisions made based on its content. Ride safely and follow local e-bike and motorcycle laws.</p>
      <p className="text-sm text-slate-400">General information, not legal advice.</p>
    </LegalLayout>
  );
}
