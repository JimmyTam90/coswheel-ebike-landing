import LegalLayout from '@/components/LegalLayout';
import { SITE } from '@/lib/config';

export const metadata = {
  title: 'Privacy Policy | PrimeGearLab',
  description: 'How PrimeGearLab handles visitor data on the COSWHEEL guide.',
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE.canonical}/privacy` },
};

export default function Page() {
  return (
    <LegalLayout title="Privacy Policy">
      <p>This page explains what happens to information when you use this PrimeGearLab guide. We keep data collection to a minimum.</p>
      <h2 className="text-xl font-bold text-white">Analytics</h2>
      <p>We may use Google Analytics 4 to measure page views and clicks on outbound links (for example, which button was clicked). This data is aggregated and is not used to identify you personally.</p>
      <h2 className="text-xl font-bold text-white">Email signup</h2>
      <p>If you subscribe through the signup form, your email address is collected and processed by our email provider, Brevo, so we can send price alerts and guides. You can unsubscribe from any email.</p>
      <h2 className="text-xl font-bold text-white">Third-party sites</h2>
      <p>Buttons on this site lead to coswheelebike.com, which has its own privacy policy and cookies. The merchant, not PrimeGearLab, handles your order, payment and personal data at checkout. An embedded YouTube video loads only after you press play.</p>
      <h2 className="text-xl font-bold text-white">Contact</h2>
      <p>Questions or removal requests: <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
      <p className="text-sm text-slate-400">This page is general information, not legal advice. Have it reviewed for your jurisdiction.</p>
    </LegalLayout>
  );
}
