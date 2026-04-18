"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ===== DATA ===== */
const heroBanners = [
  {
    src: "/images/banners/banner-1.jpg",
    mobileSrc: "/images/banners/banner-1_mobile.jpg",
    headline: "Complete Turnkey Solutions Expert",
    sub: "Engineering │ Process Design │ Manufacturing │ Procurement │ Service │ Commissioning",
  },
  {
    src: "/images/banners/banner-2.jpg",
    mobileSrc: "/images/banners/banner-2_mobile.jpg",
    headline: "One Stop Solution Provider",
    sub: "Engineering │ Process Design │ Manufacturing │ Procurement │ Service │ Commissioning",
  },
  {
    src: "/images/banners/banner-3.jpg",
    mobileSrc: "/images/banners/banner-3_mobile.jpg",
    headline: "Leaders in Separation Technology",
    sub: "Engineering │ Process Design │ Manufacturing │ Procurement │ Service │ Commissioning",
  },
  {
    src: "/images/banners/banner-4.jpg",
    mobileSrc: "/images/banners/banner-4_mobile.jpg",
    headline: "Making Technology Easy",
    sub: "Engineering │ Process Design │ Manufacturing │ Procurement │ Service │ Commissioning",
  },
];

const services = [
  {
    icon: "/images/services/service-1.png",
    title: "Basic Engineering Packages",
    desc: "BEP is designed so that all important engineering & technology information can efficiently and successfully be transferred to Clients.",
    href: "/services/basic-engineering",
  },
  {
    icon: "/images/services/service-2.png",
    title: "Process Detailed Engineering",
    desc: 'A "Completed Process Design Package" that includes all necessary information required by an Engineering/Construction firm.',
    href: "/services/process-engineering",
  },
  {
    icon: "/images/services/service-3.png",
    title: "Procurement & Vendor Sourcing",
    desc: "We believe in procuring right things at right time with best quality at low cost at the right time of project schedule/execution.",
    href: "/services/procurement",
  },
  {
    icon: "/images/services/service-4.png",
    title: "3D Plant Modeling",
    desc: "Piping design, Stress analysis and 3D modelling of pharmaceutical, chemical, petrochemical and petroleum plant.",
    href: "/services/3d-modeling",
  },
  {
    icon: "/images/services/service-5.png",
    title: "Construction, Erection & Commissioning",
    desc: "We can self-perform construction or act as the construction manager on both large and small sized projects.",
    href: "/services/construction",
  },
  {
    icon: "/images/services/service-6.png",
    title: "Site Work & Labour Services",
    desc: "Specialists for mechanical installation as well as cold and hot commissioning with quality checks and coordination.",
    href: "/services/site-labour",
  },
];

const productCards = [
  {
    name: "Jacketed Reactors",
    img: "/images/products/jacketed-reactors/1-jacketed-rector-1.jpg",
    href: "/products/jacketed-reactors",
    cat: "Reactors",
  },
  {
    name: "Limpet Reactors",
    img: "/images/products/limpet-reactors/1-limpet-rector-3.jpg",
    href: "/products/limpet-reactors",
    cat: "Reactors",
  },
  {
    name: "Falling Film Evaporator",
    img: "/images/products/falling-film-evaporator/1-Falling-Evaporator1.jpg",
    href: "/products/falling-film-evaporator",
    cat: "Evaporators",
  },
  {
    name: "Distillation Column",
    img: "/images/products/distillation-equipment/1-distillitionequ-04.jpg",
    href: "/products/distillation-equipment",
    cat: "Distillation",
  },
  {
    name: "Pressure Vessels & Tanks",
    img: "/images/products/pressure-vessels/1-pressure-vessel-01.jpg",
    href: "/products/pressure-vessels",
    cat: "Vessels",
  },
  {
    name: "Phase Separators",
    img: "/images/products/oil-gas-separators/1-Phase-separators-1.jpg",
    href: "/products/oil-gas-separators",
    cat: "Separators",
  },
];

const clients = [
  { name: "Aqua Tech", logo: "/images/clients/atee.jpg" },
  { name: "Brofind", logo: "/images/clients/brofind.jpg" },
  { name: "Eternis", logo: "/images/clients/eternis.jpg" },
  { name: "Technova", logo: "/images/clients/technova.jpg" },
  { name: "Trustin Tape", logo: "/images/clients/trustintape.jpg" },
  { name: "21st Century Enviro", logo: "/images/clients/21century-enviro.jpg" },
];

/* ===== PRODUCT CARD ===== */
function ProductCard({
  name,
  img,
  href,
  cat,
}: {
  name: string;
  img: string;
  href: string;
  cat: string;
}) {
  return (
    <Link
      href={href}
      className="group block no-underline rounded-2xl overflow-hidden border border-[var(--c-border)] bg-white shadow-sm hover:shadow-[0_20px_50px_rgba(30,58,110,0.18)] hover:-translate-y-2 hover:border-transparent transition-all duration-400"
    >
      <div className="relative w-full h-[260px] overflow-hidden">
        <Image
          src={img}
          alt={name}
          fill
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
          quality={90}
          className="object-cover transition-transform duration-600 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[rgba(10,22,50,0.6)]" />
        <span className="absolute top-3.5 left-3.5 z-[3] px-3.5 py-1 rounded-md text-[0.7rem] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-[var(--c-navy)] shadow-md">
          {cat}
        </span>
        <div className="absolute inset-0 z-[2] flex items-center justify-center bg-[rgba(30,58,110,0.6)] backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-350">
          <span className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-[var(--c-navy)] text-sm font-bold shadow-lg translate-y-2.5 group-hover:translate-y-0 transition-transform duration-350">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            View Details
          </span>
        </div>
      </div>
      <div className="px-5 py-4 flex items-center justify-between">
        <h3 className="text-[0.95rem] font-bold text-[var(--c-navy)] m-0">
          {name}
        </h3>
        <span className="text-xl text-[var(--c-coral)] font-bold group-hover:translate-x-1 transition-transform duration-300">
          →
        </span>
      </div>
    </Link>
  );
}

/* ===== CLIENT CARD ===== */
function ClientLogoCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="shrink-0 flex flex-col items-center gap-2.5 px-9 py-6 bg-white border border-[var(--c-border)] rounded-[14px] shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-[var(--c-navy-light)] transition-all duration-300 min-w-[180px]">
      <Image
        src={logo}
        alt={name}
        width={180}
        height={100}
        className="max-h-[60px] w-auto h-auto object-contain"
      />
      <span className="text-[0.75rem] font-semibold text-[var(--c-text-muted)] uppercase tracking-wider">
        {name}
      </span>
    </div>
  );
}

/* ===== HERO SLIDER ===== */
function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);

  const goTo = useCallback(
    (idx: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setProgress(0);
      setCurrent(idx);
      setTimeout(() => setIsTransitioning(false), 800);
    },
    [isTransitioning],
  );

  const next = useCallback(
    () => goTo((current + 1) % heroBanners.length),
    [current, goTo],
  );

  useEffect(() => {
    const interval = 5000;
    const step = 50;
    let elapsed = 0;
    const timer = setInterval(() => {
      elapsed += step;
      setProgress((elapsed / interval) * 100);
      if (elapsed >= interval) {
        next();
        elapsed = 0;
        setProgress(0);
      }
    }, step);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[92vh] min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Slides — lighter overlay so images are clearly visible */}
      {heroBanners.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-800 ease-in-out ${i === current ? "z-[2] opacity-100" : "z-[1] opacity-0"}`}
        >
          <div className="hidden md:block absolute inset-0">
            <Image
              src={slide.src}
              alt={slide.headline}
              fill
              priority={i === 0}
              quality={100}
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="block md:hidden absolute inset-0">
            <Image
              src={slide.mobileSrc}
              alt={slide.headline}
              fill
              priority={i === 0}
              quality={100}
              className="object-cover"
              sizes="100vw"
            />
          </div>
          {/* Lighter overlay — only bottom gradient so banner is clearly visible */}
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[rgba(10,22,50,0.35)] via-[rgba(10,22,50,0.20)] to-[rgba(10,22,50,0.75)] pointer-events-none" />
        </div>
      ))}

      {/* Content — left aligned, no stats panel */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="container w-full">
          <div className="max-w-[680px] flex flex-col gap-5 max-md:items-center max-md:text-center max-md:max-w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${current}`}
                className="flex flex-col gap-5 max-md:items-center"
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[0.78rem] font-semibold tracking-wide bg-[var(--c-coral)] text-white shadow-lg w-fit"
                >
                  ChemSepT™ Engineering Pvt. Ltd.
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-[clamp(2.4rem,5vw,4rem)] font-extrabold text-white leading-[1.08] tracking-tight m-0 drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                >
                  {heroBanners[current].headline}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="text-[clamp(0.9rem,1.4vw,1.1rem)] text-white/80 leading-relaxed max-w-[520px] drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
                >
                  {heroBanners[current].sub}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                  className="flex gap-4 flex-wrap mt-2 max-md:justify-center"
                >
                  <Link
                    href="/products"
                    className="btn btn-primary px-8 py-3.5 text-[0.95rem]"
                  >
                    View Our Products
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-3.5 text-[0.95rem] font-semibold text-white bg-white/15 backdrop-blur-lg border border-white/30 rounded hover:bg-white/25 hover:border-white/50 hover:-translate-y-0.5 transition-all duration-300 no-underline"
                  >
                    Get In Touch
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between px-6 pb-6 max-md:px-4 max-md:pb-4">
        <div className="flex gap-1.5">
          {heroBanners.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`relative h-1 rounded-sm border-none cursor-pointer overflow-hidden p-0 transition-all duration-300 ${i === current ? "w-20 bg-white/20" : "w-15 bg-white/30 max-md:w-10"}`}
            >
              <span
                className={`hidden md:block absolute -top-5.5 left-0 text-[0.65rem] font-bold tracking-wider ${i === current ? "text-[var(--c-coral)]" : "text-white/50"}`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {i === current && (
                <span
                  className="absolute left-0 top-0 h-full bg-[var(--c-coral)] rounded-sm"
                  style={{
                    width: `${progress}%`,
                    transition: "width 0.05s linear",
                  }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={() =>
              goTo((current - 1 + heroBanners.length) % heroBanners.length)
            }
            className="w-11 h-11 rounded-full border border-white/30 bg-white/10 backdrop-blur-lg text-white flex items-center justify-center cursor-pointer hover:bg-[var(--c-coral)] hover:border-[var(--c-coral)] hover:scale-110 transition-all duration-300"
            aria-label="Previous"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => next()}
            className="w-11 h-11 rounded-full border border-white/30 bg-white/10 backdrop-blur-lg text-white flex items-center justify-center cursor-pointer hover:bg-[var(--c-coral)] hover:border-[var(--c-coral)] hover:scale-110 transition-all duration-300"
            aria-label="Next"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ===== MAIN PAGE ===== */
export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <HeroSlider />

      {/* QUICK LINKS */}
      <section className="py-14 bg-[var(--c-slate)]">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "/images/icons/services.png",
              title: "Services",
              href: "/services/basic-engineering",
              desc: "High value engineering, cost-effective Engineering, Design Drafting and 3D Modeling Services.",
            },
            {
              icon: "/images/icons/products.png",
              title: "Products",
              href: "/products",
              desc: "Complete design & supply of Oil-Gas & Chemical Process equipment — ASME, EN, IS, TEMA & API standards.",
            },
            {
              icon: "/images/icons/technology.png",
              title: "Technology",
              href: "/technology",
              desc: "Expert technical team in Chemical Process, Heat Transfer, Mass Transfer, Oil & Gas, and more.",
            },
          ].map(({ icon, title, href, desc }) => (
            <div key={title} className="card flex gap-5 items-start group">
              <div className="shrink-0 w-16 h-16 rounded-lg flex items-center justify-center bg-[rgba(30,58,110,0.08)]">
                <Image
                  src={icon}
                  alt={title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-base font-bold mb-1.5 text-[var(--c-navy)]">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed mb-3 text-[var(--c-text-muted)]">
                  {desc}
                </p>
                <Link
                  href={href}
                  className="text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all text-[var(--c-coral)]"
                >
                  View Page <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WELCOME */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-heading">
                Welcome to <span>ChemSepT™</span>
              </h2>
              <div className="mt-4 space-y-4">
                <p className="leading-relaxed text-[var(--c-text-mid)]">
                  <strong className="text-[var(--c-navy)]">
                    &quot;ChemSepT™ Engineering Pvt. Ltd.&quot;
                  </strong>{" "}
                  is a one-stop Engineering Consultancy that offers the complete
                  range of Turn-Key Based Process &amp; Mechanical Engineering
                  Solutions.
                </p>
                <p className="leading-relaxed text-[var(--c-text-mid)]">
                  ChemSepT™ is a team of qualified professionals having hands on
                  experience in relevant field of engineering &amp; technology.
                </p>
                <p className="leading-relaxed text-[var(--c-text-mid)]">
                  ChemSepT™ delivers engineering services including Feasibility
                  Studies, Conceptual Engineering, Detailed Design, Project
                  Management, Procurement, Construction Management,
                  Commissioning &amp; Startup, as well as Operations &amp;
                  Maintenance support.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "Turn-Key Solutions",
                  "International Standards (ASME, EN)",
                  "PED & CE Certified",
                  "Export-Ready Equipment",
                ].map((feat) => (
                  <div key={feat} className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold bg-[var(--c-coral)]">
                      ✓
                    </span>
                    <span className="text-sm font-medium text-[var(--c-text)]">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn btn-navy mt-8 inline-flex">
                Learn More About Us
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-lg)] border border-[var(--c-border)]">
                <Image
                  src="/images/welcome-image.jpeg"
                  alt="ChemSepT Engineering Facility"
                  width={768}
                  height={1024}
                  quality={90}
                  className="w-full h-auto object-cover max-h-[500px]"
                />
              </div>
              <div className="absolute -bottom-3 -left-3 rounded-xl p-3 shadow-[var(--shadow-lg)] flex items-center gap-3 bg-white border border-[var(--c-border)]">
                <Image
                  src="/images/iso-certification.jpg"
                  alt="ISO"
                  width={40}
                  height={40}
                  className="rounded object-contain"
                />
                <div>
                  <p className="text-xs font-bold text-[var(--c-navy)] m-0">
                    ISO 9001:2015
                  </p>
                  <p className="text-[0.65rem] text-[var(--c-text-muted)] m-0">
                    Certified Company
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section bg-[var(--c-slate)]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-heading heading-center">
              Our <span>Services</span>
            </h2>
            <p className="mt-6 text-base max-w-2xl mx-auto text-[var(--c-text-muted)]">
              Comprehensive engineering services from concept to commissioning
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon, title, desc, href }, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card group"
              >
                <div className="icon-box mb-5">
                  <Image
                    src={icon}
                    alt={title}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold text-base mb-3 text-[var(--c-navy)]">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed mb-5 text-[var(--c-text-muted)]">
                  {desc}
                </p>
                <Link
                  href={href}
                  className="text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all text-[var(--c-coral)]"
                >
                  Read More <span>→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-14">
            <span className="tag tag-navy mb-3">Our Equipment Range</span>
            <h2 className="section-heading heading-center">
              Our <span>Products</span>
            </h2>
            <p className="mt-5 text-base max-w-2xl mx-auto text-[var(--c-text-muted)]">
              We follow international standards like ASME, EN, IS, TEMA &amp;
              API for manufacturing all process equipment with TPI involvement.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCards.map((p, idx) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <ProductCard {...p} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/products"
              className="btn btn-navy px-8 py-3.5 text-[0.95rem]"
            >
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* CLIENTS — Marquee */}
      <section className="py-[72px] pb-[60px] bg-[var(--c-slate)] border-t border-[var(--c-border)] overflow-hidden">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="section-heading heading-center">
              Trusted By <span>Industry Leaders</span>
            </h2>
            <p className="mt-4 text-sm text-[var(--c-text-muted)]">
              Proudly serving top companies across multiple industries
            </p>
          </div>
        </div>

        <div className="relative py-7 overflow-hidden">
          <div className="absolute top-0 bottom-0 left-0 w-[100px] z-[2] pointer-events-none bg-gradient-to-r from-[var(--c-slate)] to-transparent" />
          <div className="absolute top-0 bottom-0 right-0 w-[100px] z-[2] pointer-events-none bg-gradient-to-l from-[var(--c-slate)] to-transparent" />
          <div className="marquee-track flex gap-8 w-max">
            {[...clients, ...clients, ...clients].map(({ name, logo }, i) => (
              <ClientLogoCard key={`${name}-${i}`} name={name} logo={logo} />
            ))}
          </div>
        </div>

        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-0 mt-9 py-6 px-8 bg-[var(--c-navy)] rounded-[14px]">
            {[
              { icon: "🏆", title: "ISO 9001:2015", sub: "Certified Company" },
              { icon: "🌍", title: "Global Exports", sub: "Europe & Asia" },
              { icon: "⚡", title: "PED & CE", sub: "Certified Equipment" },
            ].map(({ icon, title, sub }, idx) => (
              <div key={title} className="flex items-center gap-6">
                {idx > 0 && (
                  <div className="hidden md:block w-px h-9 bg-white/12 mr-6" />
                )}
                <div className="flex items-center gap-3">
                  <span className="text-[1.4rem] w-[42px] h-[42px] flex items-center justify-center bg-[rgba(248,109,112,0.15)] rounded-[10px] shrink-0">
                    {icon}
                  </span>
                  <div>
                    <strong className="block text-sm font-bold text-white">
                      {title}
                    </strong>
                    <span className="text-xs text-white/55">{sub}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Bright coral gradient so text is fully visible */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[var(--c-coral)] to-[var(--c-coral-dark)]">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/svg%3E')]" />
        <div className="container relative z-[2] text-center flex flex-col items-center gap-5">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[clamp(1.8rem,3vw,2.8rem)] font-extrabold text-white m-0 drop-shadow-md"
          >
            Ready to Start Your Project?
          </motion.h2>
          <p className="text-lg text-white/90 max-w-[520px] m-0">
            Talk with our Executive for Best Deals. We deliver worldwide with
            international quality standards.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-3">
            <a
              href="tel:+917972840160"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-[0.95rem] font-bold text-[var(--c-coral)] bg-white rounded shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 no-underline"
            >
              📞 Call Us Now
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-[0.95rem] font-semibold text-white bg-white/15 backdrop-blur-lg border-2 border-white/40 rounded hover:bg-white/25 hover:border-white/60 hover:-translate-y-0.5 transition-all duration-300 no-underline"
            >
              Enquire Online →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
