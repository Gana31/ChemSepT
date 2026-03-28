"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  { name: "Jacketed Reactors", img: "/images/products/jacketed-reactors/1-jacketed-rector-1.jpg", desc: "Double-jacketed reactors for precise temperature control in chemical reactions.", href: "/products/jacketed-reactors", cat: "Reactors" },
  { name: "Limpet Reactors", img: "/images/products/limpet-reactors/1-limpet-rector-3.jpg", desc: "Limpet coil reactors with external heating/cooling coils for efficient heat transfer.", href: "/products/limpet-reactors", cat: "Reactors" },
  { name: "Agitators & Impellers", img: "/images/products/hydrofoil-low-viscosity/1-HFLow-04.jpg", desc: "Custom designed agitators and impellers for mixing, blending and dispersion.", href: "/products/agitators-impellers", cat: "Mixing" },
  { name: "Falling Film Evaporator", img: "/images/products/falling-film-evaporator/1-Falling-Evaporator1.jpg", desc: "High-efficiency evaporators for concentration of heat-sensitive materials.", href: "/products/falling-film-evaporator", cat: "Evaporators" },
  { name: "Forced Circulation Evaporator", img: "/images/products/forced-circulation-evaporator/1-Forced-Circulation-Evaporator1.jpg", desc: "For processing high-viscosity or fouling-prone liquids at high evaporation rates.", href: "/products/forced-circulation-evaporator", cat: "Evaporators" },
  { name: "Multi Effect Evaporator", img: "/images/products/multi-effect-evaporator/1-Multi-Effect-Evaporator1.jpg", desc: "Energy-efficient systems for large-scale concentration and evaporation processes.", href: "/products/multi-effect-evaporator", cat: "Evaporators" },
  { name: "Rising Film Evaporator", img: "/images/products/rising-film-evaporator/1-Rising-Film-Evaporators.jpg", desc: "Vertical-tube evaporators for large volumes with low residence time requirements.", href: "/products/rising-film-evaporator", cat: "Evaporators" },
  { name: "Wiped Film Evaporator", img: "/images/products/wiped-film-evaporator/1-Wiped-Film-Evaporator.jpg", desc: "Thin-film evaporators for heat-sensitive, high-boiling, or viscous products.", href: "/products/wiped-film-evaporator", cat: "Evaporators" },
  { name: "Agitated Thin Film Dryer", img: "/images/products/agitated-thin-film-dryer/1-Agitated-Thin-film-dryer.jpg", desc: "For continuous drying and concentration of thermally sensitive materials.", href: "/products/agitated-thin-film-dryer", cat: "Dryers" },
  { name: "Distillation Equipment", img: "/images/products/distillation-equipment/1-distillitionequ-04.jpg", desc: "Reboilers, condensers, reflux drums and other distillation support equipment.", href: "/products/distillation-equipment", cat: "Distillation" },
  { name: "Pressure Vessels", img: "/images/products/pressure-vessels/1-pressure-vessel-01.jpg", desc: "ASME/EN-coded pressure vessels for storage and process applications.", href: "/products/pressure-vessels", cat: "Vessels" },
  { name: "Storage Tanks", img: "/images/products/pressure-vessels/4-storage-tank-1.jpg", desc: "API and IS standard storage tanks for liquid chemicals, solvents and gases.", href: "/products/pressure-vessels", cat: "Vessels" },
  { name: "Oil & Gas Separators", img: "/images/products/oil-gas-separators/1-Phase-separators-1.jpg", desc: "Two and three-phase separators, internals and filter separators for O&G.", href: "/products/oil-gas-separators", cat: "Separators" },
  { name: "Static Mixers", img: "/images/products/static-mixers/4-static-mixer-4.jpg", desc: "In-line static mixing elements for continuous blending without moving parts.", href: "/products/static-mixers", cat: "Mixing" },
  { name: "Heat Exchangers", img: "/images/products/heat-exchangers/1-heat-exchanger-1.jpg", desc: "Shell & tube, plate, and spiral heat exchangers per TEMA and API standards.", href: "/products/heat-exchangers", cat: "Heat Transfer" },
  { name: "Industrial Scrubbers", img: "/images/products/industrial-scrubbers/1-IndustrialScrubber-2.jpg", desc: "Wet scrubbers and packed towers for gas cleaning and air pollution control.", href: "/products/industrial-scrubbers", cat: "Environmental" },
  { name: "Silos & Hoppers", img: "/images/products/silos-hoppers/1-Silo-Hoppers-1.jpg", desc: "High-capacity chemical storage silos and hoppers for bulk solid handling.", href: "/products/silos-hoppers", cat: "Storage" },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[280px] md:h-[340px] overflow-hidden">
        <Image src="/images/banners/page-banner.jpg" alt="Our Products" fill quality={90} className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,22,50,0.7)] to-[rgba(10,22,50,0.85)]" />
        <div className="container relative z-10 h-full flex flex-col items-center justify-center text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-3">Our Products</motion.h1>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Link href="/" className="text-[var(--c-coral-light)] hover:text-white transition-colors">Home</Link>
            <span className="text-white/40">›</span>
            <span>Products</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mb-14">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="section-heading">Process Equipment Manufacturing <span>Expert</span></motion.h2>
            <p className="mt-5 leading-relaxed text-[var(--c-text-mid)]">
              We follow all international standards Like ASME, EN, IS, TEMA &amp; API for manufacturing all process
              equipment&apos;s. We have expertise in Designing and Manufacturing Pressure equipment with TPI involvement
              to be exported in Various European and Asian Countries.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--c-text-mid)]">
              We have expertise in manufacturing PED, CE, and DOSH like qualified equipment&apos;s. We offer various types
              of Blending Vessels with Agitator or magnetic mixers, Industrial Mixers, all types of organic-inorganic
              Chemical Manufacturing Plants, Pressure Vessels, Phase Separators, Skid Mounted Refineries for Oil &amp;
              Gas Industries, Lab based Mixing &amp; Distillation skids.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {["ASME", "EN", "IS", "TEMA", "API", "PED", "CE", "DOSH"].map(std => (
                <span key={std} className="tag tag-navy">{std}</span>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(({ name, img, desc, href, cat }, idx) => (
              <motion.div key={name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }}>
                <Link href={href} className="group block no-underline rounded-2xl overflow-hidden border border-[var(--c-border)] bg-white shadow-sm hover:shadow-[0_20px_50px_rgba(30,58,110,0.18)] hover:-translate-y-2 hover:border-transparent transition-all duration-400">
                  <div className="relative w-full h-[220px] overflow-hidden">
                    <Image src={img} alt={name} fill sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-600 ease-out group-hover:scale-110" />
                    <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[rgba(10,22,50,0.5)]" />
                    <span className="absolute top-3 left-3 z-[3] px-3 py-1 rounded-md text-[0.7rem] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-[var(--c-navy)] shadow-md">
                      {cat}
                    </span>
                    <div className="absolute inset-0 z-[2] flex items-center justify-center bg-[rgba(30,58,110,0.55)] backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-350">
                      <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-[var(--c-navy)] text-sm font-bold shadow-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-350">
                        View Details →
                      </span>
                    </div>
                  </div>
                  <div className="px-5 py-4">
                    <h3 className="text-[0.95rem] font-bold text-[var(--c-navy)] mb-1.5">{name}</h3>
                    <p className="text-xs leading-relaxed text-[var(--c-text-muted)] line-clamp-2">{desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 text-center bg-gradient-to-br from-[var(--c-coral)] to-[var(--c-coral-dark)]">
        <div className="container">
          <h2 className="text-white text-2xl font-bold mb-3">Need a Custom Product?</h2>
          <p className="text-white/80 mb-7">We design and manufacture custom process equipment to your specifications.</p>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-bold text-[var(--c-coral)] bg-white rounded shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 no-underline">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
