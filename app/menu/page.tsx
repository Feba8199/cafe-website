'use client';

import { useState } from 'react';
import Image from 'next/image';
import Footer from '../../components/Footer';

type MenuType = 'food' | 'drinks';

export default function MenuPage() {
  const [selectedMenu, setSelectedMenu] = useState<MenuType>('food');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <main className="page-content">
      <section className="menu-page-section">
        <h1 className="menu-page-title">Menu</h1>

        <div className="menu-switcher desktop-menu-switcher">
          <button
            type="button"
            className={`menu-switch-button ${selectedMenu === 'food' ? 'active' : ''}`}
            onClick={() => setSelectedMenu('food')}
          >
            Food Menu
          </button>

          <button
            type="button"
            className={`menu-switch-button ${selectedMenu === 'drinks' ? 'active' : ''}`}
            onClick={() => setSelectedMenu('drinks')}
          >
            Drinks Menu
          </button>
        </div>

        <div className="mobile-menu-select-wrap">
          <div className="custom-dropdown">
            <button
              type="button"
              className="custom-dropdown-trigger"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              aria-haspopup="listbox"
              aria-expanded={isDropdownOpen}
            >
              <span>
                {selectedMenu === 'food' ? 'Food Menu' : 'Drinks Menu'}
              </span>
              <span
                className={`custom-dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}
              >
                ▼
              </span>
            </button>

            {isDropdownOpen && (
              <div className="custom-dropdown-menu" role="listbox">
                <button
                  type="button"
                  className={`custom-dropdown-option ${selectedMenu === 'food' ? 'selected' : ''}`}
                  onClick={() => {
                    setSelectedMenu('food');
                    setIsDropdownOpen(false);
                  }}
                >
                  Food Menu
                </button>

                <button
                  type="button"
                  className={`custom-dropdown-option ${selectedMenu === 'drinks' ? 'selected' : ''}`}
                  onClick={() => {
                    setSelectedMenu('drinks');
                    setIsDropdownOpen(false);
                  }}
                >
                  Drinks Menu
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="menu-image-wrapper">
          <Image
            src={selectedMenu === 'food' ? '/menu_1.jpg' : '/menu_2.jpg'}
            alt={selectedMenu === 'food' ? 'Food menu' : 'Drinks menu'}
            width={1400}
            height={2000}
            className="menu-image"
          />
        </div>
      </section>
    </main>
  );
}
