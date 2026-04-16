import './globals.css';
import Navbar from '../components/Navbar';
import { Playfair_Display, Inter } from 'next/font/google';
import Footer from '../components/Footer';
import type { Metadata } from 'next';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Destination Cafe Auckland | Coffee, Breakfast & Brunch in Greenlane',
  description:
    'Visit Destination Cafe in Greenlane, Auckland for fresh coffee, breakfast, brunch, and a welcoming cafe experience.',
  keywords: [
    'Destination Cafe',
    'Destination Cafe Auckland',
    'Auckland cafe',
    'Greenlane cafe',
    'coffee Auckland',
    'breakfast Auckland',
    'brunch Auckland',
  ],
  icons: {
    icon: '/logo.jpeg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} site-shell`}>
        <Navbar />
        <main className="site-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
