"use client";

import Link from "next/link";

const serviceLinks = [
  { href: "/services/basic-engineering", label: "Basic Engineering Packages" },
  {
    href: "/services/process-engineering",
    label: "Process Detailed Engineering",
  },
  { href: "/services/procurement", label: "Procurement & Vendor Sourcing" },
  { href: "/services/3d-modeling", label: "3D Plant Modeling" },
  { href: "/services/construction", label: "Construction & Commissioning" },
  { href: "/services/site-labour", label: "Site Work & Labour Services" },
];
const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/technology", label: "Technology" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];
//l
export default function Footer() {
  return (
    <footer>
      {/* MAIN FOOTER */}
      <div style={{ background: "#0f1e3d" }} className="py-14">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-[1.8fr_1fr_1fr_1.4fr] gap-10">
            {/* Brand */}
            <div>
              <Link href="/" className="inline-flex items-center mb-4">
                <img
                  src="/chemlogo1.png"
                  alt="ChemSepT Logo"
                  className="h-auto w-auto object-contain"
                  style={{ maxWidth: "180px", maxHeight: "70px" }}
                />
              </Link>
              <p className="text-white/75 text-sm leading-relaxed mb-5">
                ChemSepT™ Engineering Pvt. Ltd. is a one-stop Engineering
                Consultancy offering complete Turn-Key Based Process &amp;
                Mechanical Engineering Solutions.
              </p>
              <div className="flex flex-col gap-2 text-sm text-white/75">
                <a
                  href="tel:+917972840160"
                  className="hover:text-[var(--c-coral)] transition-colors flex items-center gap-2"
                >
                  📞 +91-7972-84-0160
                </a>
                <a
                  href="mailto:info@chemsept.in"
                  className="hover:text-[var(--c-coral)] transition-colors flex items-center gap-2"
                >
                  ✉️ info@chemsept.in
                </a>
                <p className="flex items-start gap-2">
                  📍 Rama Equator, Office 612, Near Finolex Chowk, Morwadi,
                  Pimpri, Pune – 411 018
                </p>
              </div>
            </div>

            {/* Services */}
            <div>
              <p className="text-white font-bold text-sm uppercase tracking-widest mb-5">
                Services
              </p>
              <ul className="flex flex-col gap-2.5">
                {serviceLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-white text-sm hover:text-[var(--c-coral)] transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div>
              <p className="text-white font-bold text-sm uppercase tracking-widest mb-5">
                Links
              </p>
              <ul className="flex flex-col gap-2.5">
                {quickLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-white text-sm hover:text-[var(--c-coral)] transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certification */}
            <div>
              <p className="text-white font-bold text-sm uppercase tracking-widest mb-5">
                Factory Address
              </p>
              <p className="text-white text-sm leading-relaxed mb-4">
                Gate No. 776, Nighoje-Kuruli Road, Pune, Maharashtra, India –
                410501
              </p>
              <div
                className="flex items-center gap-3 p-4 rounded-lg"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="w-8 h-8 relative">
                  <img
                    src="/iso-certification.webp"
                    alt="ISO Certification"
                    className="object-contain w-full h-full"
                  />
                </div>
                <div>
                  <p className="text-white/80 text-xs font-semibold">
                    ISO Certified
                  </p>
                  <p className="text-white/40 text-xs">
                    Engineering Excellence Since 2015
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div
        style={{
          background: "#080f21",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
        className="py-4"
      >
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/60">
          <p>
            {new Date().getFullYear()} ChemSepT™ Engineering Pvt. Ltd. All
            rights reserved.
          </p>
          <p>www.chemsept.in &nbsp;|&nbsp; www.chemsept.com</p>
        </div>
      </div>
    </footer>
  );
}
