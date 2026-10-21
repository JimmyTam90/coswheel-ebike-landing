import './globals.css';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import ExitPopup from '@/components/ExitPopup';
import { GA4_ID, OG_IMAGE, SITE, withBase } from '@/lib/config';

export const metadata = {
  metadataBase: new URL(SITE.origin),
  title: SITE.title,
  description: SITE.description,
  alternates: { canonical: SITE.canonical },
  icons: {
    icon: [
      { url: withBase('/favicon.ico') },
      { url: withBase('/favicon.png'), type: 'image/png', sizes: '512x512' },
    ],
    shortcut: withBase('/favicon.ico'),
    apple: withBase('/apple-touch-icon.png'),
  },
  openGraph: {
    type: 'website',
    url: SITE.canonical,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    locale: 'en_US',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Coswheel R19 electric dirt bike' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
    images: [OG_IMAGE],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <div className="w-full bg-slate-950 pb-20 md:pb-0">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <StickyCTA />
        <ExitPopup />
        {GA4_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA4_ID}',{anonymize_ip:true});`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
