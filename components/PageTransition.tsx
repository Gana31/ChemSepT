"use client";

import React, { useState, useEffect, Suspense } from "react";
// import { usePathname, useSearchParams } from 'next/navigation';
import { AnimatePresence } from "framer-motion";
import SplashScreen from "./SplashScreen";

const TransitionContent = ({ children }: { children: React.ReactNode }) => {
  // const pathname = usePathname();
  // const searchParams = useSearchParams();
  // const [isTransitioning, setIsTransitioning] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  // Trigger on initial mount and route changes
  // useEffect(() => {
  //   setIsTransitioning(true);

  //   const timer = setTimeout(() => {
  //     setIsTransitioning(false);
  //   }, 1500);

  //   return () => clearTimeout(timer);
  // }, [pathname, searchParams]);
  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("splashShown");

    if (!hasSeenSplash) {
      setIsTransitioning(true);

      const timer = setTimeout(() => {
        setIsTransitioning(false);
        sessionStorage.setItem("splashShown", "true");
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);
  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && <SplashScreen key="splash" />}
      </AnimatePresence>
      <div
        className={
          isTransitioning
            ? "opacity-0 invisible"
            : "opacity-100 transition-opacity duration-500 ease-in-out"
        }
      >
        {children}
      </div>
    </>
  );
};

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={null}>
      <TransitionContent>{children}</TransitionContent>
    </Suspense>
  );
}
