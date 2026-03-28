"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const galleryItems = [
  { label: "Workshop Front View", src: "/images/gallery/Gallery1.jpg", desc: "Our main fabrication facility and manufacturing base." },
  { label: "Equipment Manufacturing", src: "/images/gallery/Gallery2.jpg", desc: "Heavy machinery and heavy equipment production." },
  { label: "Reactor Assembly", src: "/images/gallery/GalleryNew09.jpg", desc: "Precision assembly of industrial process reactors." },
  { label: "Pressure Vessel Testing", src: "/images/gallery/GalleryNew13.jpeg", desc: "Rigorous quality and high-pressure testing standards." },
  { label: "Heat Exchanger Fabrication", src: "/images/gallery/Gallery3.jpg", desc: "Custom heat exchanger manufacturing and scaling." },
  { label: "Quality Inspection", src: "/images/gallery/Gallery4.jpg", desc: "Comprehensive quality assurance checks and approvals." },
  { label: "Plant Equipment", src: "/images/gallery/Gallery5.jpg", desc: "Large-scale plant equipment readiness and shipping." },
  { label: "Heat Exchanger Detail", src: "/images/gallery/heat-exchanger-04.JPG", desc: "Detailed view of structured exchanger tubes." },
  { label: "Column Fabrication", src: "/images/gallery/GalleryNew-05.JPG", desc: "Distillation column structuring and heavy welding." },
  { label: "Evaporator System", src: "/images/gallery/GalleryNew-18.JPG", desc: "Multi-effect evaporator assembly and integration." },
  { label: "Rolling Process", src: "/images/gallery/GalleryNew-06.JPG", desc: "Heavy metal plate rolling and precision curving." },
  { label: "Welding Work", src: "/images/gallery/GalleryNew-07.JPeG", desc: "Expert industrial welding for process vessels." },
  { label: "Vessel Interior", src: "/images/gallery/GalleryNew11.jpg", desc: "Internal vessel finishing and smooth polishing." },
  { label: "Final Assembly", src: "/images/gallery/GalleryNew14.jpg", desc: "Preparing completed assemblies for final dispatch." },
  { label: "Factory Exterior", src: "/images/gallery/GalleryNew-08.JPeG", desc: "Expansive view of our manufacturing campus." },
  { label: "Manufacturing Yard", src: "/images/gallery/GalleryNew10.jpeg", desc: "Outdoor staging and heavy assembly area." },
  { label: "Workshop Interior", src: "/images/gallery/GalleryNew12.jpeg", desc: "Active shop floor environment with full capabilities." },
];

export default function GalleryPage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[280px] md:h-[340px] overflow-hidden">
        <Image src="/images/banners/page-banner.jpg" alt="Our Gallery" fill quality={90} className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,22,50,0.65)] to-[rgba(10,22,50,0.85)]" />
        <div className="container relative z-10 h-full flex flex-col items-center justify-center text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-3">Our Gallery</motion.h1>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Link href="/" className="text-[var(--c-coral-light)] hover:text-white transition-colors">Home</Link>
            <span className="text-white/40">›</span>
            <span>Gallery</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-heading heading-center">Our <span>Gallery</span></h2>
            <p className="mt-5 text-base max-w-xl mx-auto text-[var(--c-text-muted)]">
              A visual showcase of our manufacturing capabilities, process equipment, and completed projects.
            </p>
          </div>

          {/* Strictly Aligned Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map(({ label, src, desc }, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 relative bg-white dark:bg-slate-800 border border-[var(--c-border)] flex flex-col h-full"
                onClick={() => setSelected(i)}>
                
                {/* 16:9 Aspect Ratio Image Container */}
                <div className="relative w-full aspect-video overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-[var(--c-border)]">
                  <Image src={src} alt={label} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out" />
                  
                  {/* Subtle Interactive Overlay */}
                  <div className="absolute inset-0 bg-[var(--c-navy)]/0 group-hover:bg-[var(--c-navy)]/10 transition-colors duration-300 pointer-events-none flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-[var(--c-navy)] opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 shadow-xl border border-white/50">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Text Content Block */}
                <div className="p-5 flex-1 flex flex-col justify-center bg-[var(--c-bg)]">
                  <span className="text-[10px] font-bold text-[var(--c-coral)] tracking-wider uppercase mb-1 drop-shadow-sm">Project View</span>
                  <h3 className="font-bold text-lg text-[var(--c-navy)] mb-1">{label}</h3>
                  <p className="text-sm text-[var(--c-text-muted)] leading-relaxed m-0 text-opacity-80 line-clamp-2">{desc}</p>
                </div>

              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center p-10 rounded-2xl bg-[var(--c-slate)] border border-[var(--c-border)]">
            <p className="text-base font-medium mb-4 text-[var(--c-text-mid)]">
              Want to see more of our work? Contact us for a detailed portfolio.
            </p>
            <Link href="/contact" className="btn btn-navy">Request Full Portfolio</Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}>
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}>
              <Image src={galleryItems[selected].src} alt={galleryItems[selected].label}
                width={1200} height={900} className="w-full h-auto max-h-[85vh] object-contain bg-black rounded-2xl" />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-bold">{galleryItems[selected].label}</p>
              </div>
              <button onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-colors text-xl cursor-pointer border-none">
                ✕
              </button>
              {selected > 0 && (
                <button onClick={(e) => { e.stopPropagation(); setSelected(selected - 1); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-colors cursor-pointer border-none">
                  ‹
                </button>
              )}
              {selected < galleryItems.length - 1 && (
                <button onClick={(e) => { e.stopPropagation(); setSelected(selected + 1); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-colors cursor-pointer border-none">
                  ›
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
