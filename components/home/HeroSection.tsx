import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="split-hero">
      <div className="split-hero-container">
        <div className="split-hero-content">
          <p className="section-kicker">Greenlane, Auckland</p>
          <h1>Destination Cafe</h1>
          <p className="split-hero-description">
            Fresh coffee, good food, and a warm neighbourhood atmosphere.
          </p>

          <div className="split-hero-buttons">
            <Link href="/menu" className="button-link">
              Explore Menu
            </Link>
            <Link href="/address" className="button-link secondary-dark">
              Visit Us
            </Link>
          </div>
        </div>

        <div className="split-hero-image-wrap">
          <Image
            src="/hero.jpeg"
            alt="Destination Cafe interior"
            fill
            priority
            className="split-hero-image"
          />
        </div>
      </div>
    </section>
  );
}
