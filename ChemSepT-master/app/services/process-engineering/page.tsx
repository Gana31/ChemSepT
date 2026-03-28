"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ServiceImageSlider from "@/components/ServiceImageSlider";

const deliverables = [
  "Process Flow Diagrams (PFD)", "Piping & Instrumentation Diagrams (P&ID)",
  "Equipment Specifications & Datasheets", "Line Sizing & Hydraulic Calculations",
  "Instrument Specifications", "Control & Safety Systems Design",
  "Piping Material Specifications", "Equipment Layout & Plot Plans",
  "Hazard Analysis (HAZOP)", "Utility Flow Diagrams",
];

export default function ProcessEngineeringPage() {
  return (
    <>
      <div className="relative h-[280px] md:h-[340px] overflow-hidden">
        <Image src="/images/banners/page-banner.jpg" alt="Process Engineering" fill quality={90} className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,22,50,0.65)] to-[rgba(10,22,50,0.85)]" />
        <div className="container relative z-10 h-full flex flex-col items-center justify-center text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-3">Process Detailed Engineering</motion.h1>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Link href="/" className="text-[var(--c-coral-light)] hover:text-white transition-colors">Home</Link>
            <span className="text-white/40">›</span>
            <Link href="/services/process-engineering" className="text-[var(--c-coral-light)] hover:text-white transition-colors">Services</Link>
            <span className="text-white/40">›</span><span>Process Engineering</span>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-14 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="section-heading">Process Detailed <span>Engineering</span></h2>
              <p className="mt-5 leading-relaxed text-[var(--c-text-mid)]">
                A &quot;Completed Process Design Package&quot; that includes all necessary information required by an
                Engineering/Construction firm for performing the Detailed Engineering of a process plant.
              </p>
              <p className="mt-4 leading-relaxed text-[var(--c-text-mid)]">
                Our process engineering team provides comprehensive detailed design covering all aspects from process
                simulation to final design documentation.
              </p>

              {/* Service Image */}
              {/* Service Image */}
              <ServiceImageSlider images={[{ src: "/images/services/process-detailed-engineering.jpg", alt: "Process Detailed Engineering" }]} />

              <div className="mt-8">
                <h3 className="font-bold text-base mb-4 text-[var(--c-navy)]">Package Includes:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {deliverables.map((d, idx) => (
                    <motion.div key={d} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }} transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-[var(--c-slate)] border border-[var(--c-border)]">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5 bg-[var(--c-coral)]">✓</span>
                      <span className="text-sm font-medium text-[var(--c-text)]">{d}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-5 sticky top-[100px]">
              <div className="card text-center py-8">
                <div className="text-5xl mb-4">⚙️</div>
                <h3 className="font-bold text-base mb-2 text-[var(--c-navy)]">Get a Quote</h3>
                <p className="text-sm mb-6 text-[var(--c-text-muted)]">Contact us for a detailed engineering proposal.</p>
                <Link href="/contact" className="btn btn-primary w-full">Enquire Now</Link>
              </div>
              <div className="card">
                <h4 className="font-bold text-sm mb-3 text-[var(--c-navy)]">Contact Us</h4>
                <a href="tel:+917972840160" className="block text-sm mb-2 text-[var(--c-text-mid)] hover:text-[var(--c-coral)] transition-colors">📞 +91-7972-84-0160</a>
                <a href="mailto:info@chemsept.in" className="block text-sm text-[var(--c-text-mid)] hover:text-[var(--c-coral)] transition-colors">✉️ info@chemsept.in</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
