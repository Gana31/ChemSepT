"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const technologies = [
  { title: "Chemical Process Technology", icon: "", desc: "A comprehensive approach examining both the fundamental concepts and applied nature of this subject. Modern process development relies on a knowledge of many different disciplines and an application and integration of this knowledge." },
  { title: "Heat Transfer Technology", icon: "", desc: "Heat transfer is a discipline of thermal engineering that concerns the generation, use, conversion, and exchange of thermal energy (heat) between physical systems. We apply this knowledge across all our equipment design." },
  { title: "Mass Transfer Technology", icon: "", desc: "Mass transfer is used by different scientific disciplines for different processes and mechanisms. Our expertise covers distillation, absorption, extraction, adsorption and leaching operations." },
  { title: "Environmental Technology", icon: "", desc: "Environmental engineers in a chemical engineering program tend to focus on environmental chemistry, fluid mechanics, and ecosystem restoration. We design eco-friendly processes that minimize impact." },
  { title: "Reaction Engineering & Mixing Technology", icon: "", desc: "Our Experts are best in Reaction Engineering and Mixing Technology. We design reactors for batch, semi-batch and continuous operations across all scales of production." },
  { title: "Oil & Gas Processing Technology", icon: "", desc: "Connect with us to see our works on Oil & Gas Processing Technology. We provide complete engineering solutions for upstream, midstream and downstream oil & gas processing facilities." },
  { title: "Used Oil Refining Technology", icon: "", desc: "ChemSepT™ uses Oil Refining Technology to create new products from used and waste oils. Our technology enables clients to convert low-value waste into valuable refined products." },
  { title: "Tire & Plastic Pyrolysis Oil Technology", icon: "", desc: "ChemSepT™ also deals with Tire & Plastic Pyrolysis Oil Technology — converting waste materials into valuable fuel oil, gas and carbon black through thermal decomposition processes." },
  { title: "Industrial Solvent Recovery", icon: "", desc: "Solvent recovery is the process of extracting useful materials from waste or by-product solvents generated during the manufacturing process. We design complete solvent recovery systems." },
];

export default function TechnologyPage() {
  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[280px] md:h-[340px] overflow-hidden">
        <Image src="/images/banners/page-banner.jpg" alt="Technology" fill quality={90} className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,22,50,0.65)] to-[rgba(10,22,50,0.85)]" />
        <div className="container relative z-10 h-full flex flex-col items-center justify-center text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-3">Our Technologies</motion.h1>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Link href="/" className="text-[var(--c-coral-light)] hover:text-white transition-colors">Home</Link>
            <span className="text-white/40">›</span>
            <span>Technology</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="max-w-2xl mb-14">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="section-heading">Technical <span>Expertise</span></motion.h2>
            <p className="mt-5 leading-relaxed text-[var(--c-text-mid)]">
              ChemSepT™ has their own technical expert&apos;s team spanning multiple fields of chemical and process engineering.
              Our multi-disciplinary expertise enables us to provide holistic solutions to complex engineering challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map(({ title, icon, desc }, idx) => (
              <motion.div key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="card group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="icon-box text-2xl">{icon}</div>
                  <h3 className="font-bold text-sm leading-snug text-[var(--c-navy)]">{title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-[var(--c-text-muted)]">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[var(--c-slate)]">
        <div className="container text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="section-heading heading-center">Need Technical <span>Consultation?</span></motion.h2>
          <p className="mt-4 mb-8 text-[var(--c-text-muted)]">Our team of experts is ready to discuss your specific technology requirements.</p>
          <Link href="/contact" className="btn btn-primary">Talk to an Expert</Link>
        </div>
      </section>
    </>
  );
}
