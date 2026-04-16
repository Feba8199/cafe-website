import type { Metadata } from 'next';
import MenuClient from './MenuClient';

export const metadata: Metadata = {
  title: 'Menu | Destination Cafe Auckland',
  description:
    'Browse the Destination Cafe menu in Greenlane, Auckland, including food and drinks.',
};

export default function MenuPage() {
  return <MenuClient />;
}
