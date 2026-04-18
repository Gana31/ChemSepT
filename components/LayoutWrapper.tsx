"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import PageTransition from "./PageTransition";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isCalculationPage = pathname === "/calculation";

  return (
    <PageTransition>
      {!isCalculationPage && <Navbar />}
      <main 
        style={{ 
          paddingTop: isCalculationPage ? "0" : "calc(var(--nav-h) + var(--topbar-h))" 
        }}
      >
        {children}
      </main>
      {!isCalculationPage && <Footer />}
      {!isCalculationPage && <WhatsAppButton />}
    </PageTransition>
  );
}
