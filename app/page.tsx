import HeroSection from '../components/home/HeroSection';
import SocialsSection from '../components/home/SocialsSection';
import MenuItemGallery from '../components/MenuItemGallery';
import MapSection from '../components/home/MapSection';
export default function HomePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CafeOrCoffeeShop',
    name: 'Destination Cafe',
    url: 'https://destinationcafe.co.nz',
    image: ['https://destinationcafe.co.nz/logo.jpeg'],
    telephone: '+64 22 057 3327',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1 Marewa Road',
      addressLocality: 'Greenlane',
      addressRegion: 'Auckland',
      postalCode: '1051',
      addressCountry: 'NZ',
    },
    servesCuisine: ['Coffee', 'Brunch', 'Cafe Food'],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <HeroSection />
        <SocialsSection />
        <MenuItemGallery />
        <MapSection />
      </main>
    </>
  );
}
