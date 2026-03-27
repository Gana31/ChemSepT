"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceImageSliderProps {
  images: { src: string; alt: string }[];
}

export default function ServiceImageSlider({ images }: ServiceImageSliderProps) {
  const [current, setCurrent] = useState(0);

  // Auto-slide only when multiple images
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length]);

  // Single image — no slider
  if (images.length === 1) {
    return (
      <div className="mt-8 rounded-2xl overflow-hidden shadow-[var(--shadow-md)] border border-[var(--c-border)]">
        <Image src={images[0].src} alt={images[0].alt} width={700} height={400}
          className="w-full h-[350px] object-cover" />
      </div>
    );
  }

  // Multiple images — auto-sliding carousel
  return (
    <div className="mt-8 rounded-2xl overflow-hidden shadow-[var(--shadow-md)] border border-[var(--c-border)] relative">
      {/* Slides */}
      <div className="relative w-full h-[350px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image src={images[current].src} alt={images[current].alt}
              fill className="object-cover" sizes="(max-width:1024px) 100vw, 60vw" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2.5 h-2.5 rounded-full border-none cursor-pointer transition-all duration-300 ${idx === current
                ? "bg-white scale-125 shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                : "bg-white/50 hover:bg-white/80"
              }`}
          />
        ))}
      </div>

      {/* Counter badge */}
      <div className="absolute top-3 right-3 z-10 px-3 py-1 rounded-md text-xs font-bold bg-black/40 backdrop-blur-sm text-white">
        {current + 1} / {images.length}
      </div>
    </div>
  );
}
