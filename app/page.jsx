import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import TrustBar from '@/components/TrustBar';
import ProductGrid from '@/components/ProductGrid';
import Showcase from '@/components/Showcase';
import ComparisonTable from '@/components/ComparisonTable';
import Reviews from '@/components/Reviews';
import BuyerGallery from '@/components/BuyerGallery';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import { PRODUCTS } from '@/lib/products';
import { SITE } from '@/lib/config';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Organization', name: 'PrimeGearLab', url: SITE.origin },
      {
        '@type': 'WebPage',
        name: SITE.title,
        url: SITE.canonical,
        description: SITE.description,
        inLanguage: 'en-US',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: PRODUCTS.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.name, url: p.sourceUrl })),
        },
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <PainPoints />
      <TrustBar />
      <ProductGrid />
      <Showcase />
      <ComparisonTable />
      <Reviews />
      <BuyerGallery />
      <FAQ />
      <FinalCTA />
    </>
  );
}
