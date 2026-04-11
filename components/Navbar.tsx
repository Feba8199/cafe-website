'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const googleMapsUrl =
  'https://www.google.com/maps/search/?api=1&query=Destination+Cafe+1+Marewa+Road+Greenlane+Auckland+1051';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setIsOpen(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pathname = usePathname();

  return (
    <header className="site-header">
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          <Link
            href="/"
            className="brand-logo"
            aria-label="Destination Cafe home"
            onClick={closeMenu}
          >
            <Image
              src="/logo.jpeg"
              alt="Destination Cafe logo"
              width={70}
              height={70}
              priority
            />
            {/* <span className="brand-text">Destination Cafe</span> */}
          </Link>

          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`nav-links ${isOpen ? 'open' : ''}`}>
            <Link
              href="/"
              onClick={closeMenu}
              // className={pathname.startsWith('/') ? 'active' : ''}
            >
              Home
            </Link>
            <Link
              href="/menu"
              onClick={closeMenu}
              // className={pathname === '/menu' ? 'active' : ''}
            >
              Menu
            </Link>
            <Link
              href="/address"
              onClick={closeMenu}
              // className={pathname === '/address' ? 'active' : ''}
            >
              Address
            </Link>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Map
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
