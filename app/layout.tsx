import './globals.css';
import Navbar from '../components/Navbar';
import { Playfair_Display, Inter } from 'next/font/google';
import Footer from '../components/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata = {
  title: 'Destination Cafe',
  description: 'Simple cafe website',
  icons: {
    icon: '/logo.jpeg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable}`}>
        <Navbar />
        {children}
      </body>
      <Footer />
    </html>
  );
}
