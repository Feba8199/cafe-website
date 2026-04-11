import HeroSection from '../components/home/HeroSection';
import SocialsSection from '../components/home/SocialsSection';
import MenuItemGallery from '../components/MenuItemGallery';
import MapSection from '../components/home/MapSection';
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SocialsSection />
      <MenuItemGallery />
      <MapSection />
    </main>
  );
}
