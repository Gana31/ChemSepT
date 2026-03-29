import type { Metadata } from 'next';
import './globals.css';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'ChemSepT Engineering Pvt. Ltd. – Leaders in Separation Technology',
  description: 'ChemSepT™ Engineering Pvt. Ltd. is a one-stop Engineering Consultancy offering complete Turn-Key Based Process & Mechanical Engineering Solutions.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <PageTransition>
          <Navbar />
          <main style={{ paddingTop: 'calc(var(--nav-h) + var(--topbar-h))' }}>
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </PageTransition>
      </body>
    </html>
  );
}
