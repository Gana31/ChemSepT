"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const pillars = [
  { icon: "🏆", title: "Engineering Excellence", desc: "Qualified professionals with hands-on experience in relevant fields of engineering & technology." },
  { icon: "🔬", title: "Innovation Driven", desc: "Constantly evolving our methods and technologies to meet the highest standards of process engineering." },
  { icon: "✅", title: "Quality First", desc: "We follow ASME, EN, IS, TEMA & API international standards across all our design and manufacturing." },
  { icon: "⏱️", title: "On-Time Delivery", desc: '"We do right things at right time with best quality at low cost at right time." — Our core promise.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[280px] md:h-[340px] overflow-hidden">
        <Image src="/images/about/about-bg.jpg" alt="About ChemSepT" fill quality={90} className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,22,50,0.65)] to-[rgba(10,22,50,0.85)]" />
        <div className="container relative z-10 h-full flex flex-col items-center justify-center text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-3">About Us</motion.h1>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Link href="/" className="text-[var(--c-coral-light)] hover:text-white transition-colors">Home</Link>
            <span className="text-white/40">›</span>
            <span>About Us</span>
          </div>
        </div>
      </div>

      {/* WHO WE ARE */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="section-heading">Who We <span>Are</span></h2>
              <div className="mt-5 space-y-4">
                <p className="leading-relaxed text-base text-[var(--c-text-mid)]">
                  <strong className="text-[var(--c-navy)]">&quot;ChemSepT™ Engineering Pvt. Ltd.&quot;</strong> is a one-stop Engineering
                  Consultancy that offers the complete range of Turn-Key Based Process &amp; Mechanical Engineering Solutions.
                </p>
                <p className="leading-relaxed text-base text-[var(--c-text-mid)]">
                  ChemSepT™ is a team of qualified professionals having hands on experience in relevant field of
                  engineering &amp; technology.
                </p>
                <p className="leading-relaxed text-base text-[var(--c-text-mid)]">
                  ChemSepT™ delivers engineering services including:
                </p>
                <ul className="space-y-2">
                  {["Feasibility Studies", "Conceptual Engineering", "Detailed Design", "Project Management", "Procurement", "Construction Management", "Commissioning & Startup", "Operations & Maintenance Support"].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm text-[var(--c-text-mid)]">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 bg-[var(--c-coral)]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-6">
              {/* Facility Image */}
              <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-lg)] border border-[var(--c-border)]">
                <Image src="/images/about/aboutus-04.jpg" alt="ChemSepT Facility" width={700} height={500} className="w-full h-auto object-cover" />
              </div>

              {/* Quote Card */}
              <div className="rounded-2xl p-8 relative overflow-hidden bg-[var(--c-navy)]">
                <div className="text-5xl opacity-20 absolute top-4 left-6 font-serif">&quot;</div>
                <blockquote className="relative z-10 text-white text-lg font-semibold italic leading-relaxed">
                  &quot;We do right things at right time with best quality at low cost at right time.&quot;
                </blockquote>
                <p className="mt-4 text-white/50 text-sm relative z-10">— ChemSepT™ Core Motto</p>
              </div>

              {/* Contact Card */}
              <div className="card">
                <h4 className="font-bold text-base mb-4 text-[var(--c-navy)]">Contact Details</h4>
                <div className="space-y-3 text-sm text-[var(--c-text-mid)]">
                  <p className="flex items-start gap-3">
                    <span>📍</span>
                    <span><strong>Office:</strong> Rama Equator, Office No 612, Near Finolex Chowk, Morwadi, Pimpri, Pune, India – 411 018</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span>🏭</span>
                    <span><strong>Factory:</strong> Gate No. 776, Nighoje-Kuruli Road, Pune, Maharashtra, India – 410501</span>
                  </p>
                  <a href="tel:+917972840160" className="flex items-center gap-3 hover:text-[var(--c-coral)] transition-colors">📞 +91-7972-84-0160</a>
                  <a href="mailto:info@chemsept.in" className="flex items-center gap-3 hover:text-[var(--c-coral)] transition-colors">✉️ info@chemsept.in</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section bg-[var(--c-slate)]">
        <div className="container">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="section-heading heading-center">Our Core <span>Values</span></motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {pillars.map(({ icon, title, desc }, idx) => (
              <motion.div key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card text-center">
                <div className="text-4xl mx-auto mb-4 w-16 h-16 rounded-2xl flex items-center justify-center bg-[rgba(30,58,110,0.08)]">
                  {icon}
                </div>
                <h3 className="font-bold text-sm mb-2 text-[var(--c-navy)]">{title}</h3>
                <p className="text-xs leading-relaxed text-[var(--c-text-muted)]">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="section-heading">Process Equipment Manufacturing <span>Expert</span></h2>
              <p className="mt-5 leading-relaxed text-[var(--c-text-mid)]">
                We follow all international standards Like ASME, EN, IS, TEMA &amp; API for manufacturing all
                process equipment&apos;s. We have expertise in Designing and Manufacturing Pressure equipment with
                TPI involvement to be exported in Various European and Asian Countries.
              </p>
              <p className="mt-4 leading-relaxed text-[var(--c-text-mid)]">
                We have expertise in manufacturing PED, CE, and DOSH qualified equipment&apos;s. We offer various types of
                Blending Vessels, Industrial Mixers, Chemical Manufacturing Plants, Pressure Vessels, Phase Separators,
                Skid Mounted Refineries for Oil &amp; Gas Industries.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {["ASME", "EN", "IS", "TEMA", "API", "PED", "CE", "DOSH"].map(std => (
                  <span key={std} className="tag tag-navy">{std}</span>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4">
              {[
                { img: "/images/products/jacketed-reactors/1-jacketed-rector-1.jpg", label: "Reactors" },
                { img: "/images/products/pressure-vessels/1-pressure-vessel-01.jpg", label: "Pressure Vessels" },
                { img: "/images/products/distillation-equipment/1-distillitionequ-04.jpg", label: "Distillation" },
                { img: "/images/products/heat-exchangers/1-heat-exchanger-1.jpg", label: "Heat Exchangers" },
              ].map(({ img, label }) => (
                <div key={label} className="rounded-2xl overflow-hidden relative group border border-[var(--c-border)] shadow-sm">
                  <Image src={img} alt={label} width={300} height={250} className="w-full h-[160px] object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[rgba(10,22,50,0.8)] to-transparent">
                    <p className="text-xs font-bold text-white">{label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-gradient-to-br from-[var(--c-coral)] to-[var(--c-coral-dark)]">
        <div className="container">
          <h2 className="text-white text-2xl font-bold mb-3">Want to Work With Us?</h2>
          <p className="text-white/80 mb-7">Contact us today and let&apos;s discuss your project requirements.</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 font-bold text-[var(--c-coral)] bg-white rounded shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 no-underline">
            Contact Us Now
          </Link>
        </div>
      </section>
    </>
  );
}
