"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projectCategories } from "./projectsData";

const categoryColors: Record<string, string> = {
  petroleum: "#d97706",
  pharma: "#7c3aed",
  chemical: "#0891b2",
  dryer: "#dc2626",
};

const categoryImages: Record<string, string> = {
  petroleum: "/images/projects/Used-Oil-refining.jpeg",
  pharma: "/images/projects/Modularskid.jpg",
  chemical: "/images/projects/NMP-Solvent-Extraction.jpg",
  dryer: "/images/products/agitated-thin-film-dryer/1-Agitated-Thin-film-dryer.jpg",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-[280px] md:h-[340px] overflow-hidden">
        <Image src="/images/banners/page-banner.jpg" alt="Our Projects" fill quality={90} className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,22,50,0.65)] to-[rgba(10,22,50,0.85)]" />
        <div className="container relative z-10 h-full flex flex-col items-center justify-center text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-3">Our Projects</motion.h1>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Link href="/" className="text-[var(--c-coral-light)] hover:text-white transition-colors">Home</Link>
            <span className="text-white/40">›</span>
            <span>Projects</span>
          </div>
        </div>
      </div>

      {projectCategories.map((cat, ci) => (
        <section key={cat.slug} className={`section ${ci % 2 === 1 ? "bg-[var(--c-slate)]" : "bg-white"}`}>
          <div className="container">
            {/* Category header with image */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 mb-10 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                className="rounded-2xl overflow-hidden shadow-[var(--shadow-md)] border border-[var(--c-border)]">
                <Image src={categoryImages[cat.slug] || "/images/banners/page-banner.jpg"} alt={cat.name} width={500} height={300}
                  className="w-full h-[220px] object-cover" />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ background: `${categoryColors[cat.slug]}15` }}>
                    {cat.icon}
                  </div>
                  <div>
                    <h2 className="section-heading">{cat.name}</h2>
                    <p className="text-sm mt-1 text-[var(--c-text-muted)]">{cat.projects.length} project{cat.projects.length > 1 ? "s" : ""}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Project cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.projects.map((proj, pi) => (
                <motion.div key={proj.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: pi * 0.08 }}>
                  <Link href={`/projects/${proj.slug}`}
                    className="card group cursor-pointer block no-underline">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                        style={{ background: `${categoryColors[cat.slug]}15` }}>
                        {proj.icon}
                      </div>
                      <h3 className="font-bold text-sm text-[var(--c-text)]">{proj.title}</h3>
                    </div>
                    <p className="text-xs leading-relaxed mb-4 text-[var(--c-text-mid)]">
                      {proj.description.split("\n")[0].slice(0, 150)}…
                    </p>
                    <span className="text-xs font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all text-[var(--c-coral)]">
                      Learn More <span>→</span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
