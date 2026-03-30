"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { getProjectsNav } from "@/app/projects/projectsData";

const services = [
  { href: "/services/basic-engineering", label: "Basic Engineering Packages" },
  {
    href: "/services/process-engineering",
    label: "Process Detailed Engineering",
  },
  { href: "/services/procurement", label: "Procurement & Vendor Sourcing" },
  { href: "/services/3d-modeling", label: "3D Plant Modeling" },
  {
    href: "/services/construction",
    label: "Construction, Erection & Commissioning",
  },
  { href: "/services/site-labour", label: "Site Work & Labour Services" },
];

const productsNav = [
  {
    label: "Reactors & Blenders",

    isLink: false,
    items: [
      { href: "/products/jacketed-reactors", label: "Jacketed Reactors" },
      { href: "/products/limpet-reactors", label: "Limpet Reactors" },
    ],
  },
  {
    label: "Agitators & Impellers",

    isLink: false,
    items: [
      {
        href: "/products/hydrofoil-low-viscosity",
        label: "Hydrofoil for Low Viscosity",
      },
      {
        href: "/products/hydrofoil-high-viscosity",
        label: "Hydrofoil for High Viscosity",
      },
      { href: "/products/axial-flow", label: "Axial Flow for Gas-Liquid" },
      { href: "/products/pitched-blade", label: "Pitched Blade Turbine Type" },
      { href: "/products/anchor-type", label: "Anchor Type" },
      { href: "/products/rushtor-type", label: "Rushtor Type" },
    ],
  },
  {
    label: "Evaporators",

    isLink: false,
    items: [
      {
        href: "/products/falling-film-evaporator",
        label: "Falling Film Evaporator",
      },
      {
        href: "/products/forced-circulation-evaporator",
        label: "Forced Circulation Evaporator",
      },
      {
        href: "/products/multi-effect-evaporator",
        label: "Multi Effect Evaporator",
      },
      {
        href: "/products/rising-film-evaporator",
        label: "Rising Film Evaporator",
      },
      {
        href: "/products/wiped-film-evaporator",
        label: "Wiped Film Evaporator",
      },
      {
        href: "/products/agitated-thin-film-dryer",
        label: "Agitated Thin film dryer",
      },
    ],
  },
  {
    label: "Distillation Column",

    isLink: false,
    items: [
      {
        href: "/products/distillation-equipment",
        label: "Distillation Auxillary Equipment",
      },
    ],
  },
  {
    href: "/products/pressure-vessels",
    label: "Pressure Vessels & Storage Tanks",

    isLink: true,
  },
  {
    href: "/products/oil-gas-separators",
    label: "Oil & Gas Separators & Internals",

    isLink: true,
  },
  {
    href: "/products/static-mixers",
    label: "Static Mixers",

    isLink: true,
  },
  {
    href: "/products/heat-exchangers",
    label: "Heat Exchangers, Condensers & Reboilers",

    isLink: true,
  },
  {
    href: "/products/industrial-scrubbers",
    label: "Industrial Scrubbers",

    isLink: true,
  },
  {
    href: "/products/silos-hoppers",
    label: "Silo’s & Hoppers",

    isLink: true,
  },
];

const projectsNav = getProjectsNav();

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servOpen, setServOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);
  const [projOpen, setProjOpen] = useState(false);
  const [projSub, setProjSub] = useState<string | null>(null);
  const [prodSub, setProdSub] = useState<string | null>(null);

  // Mobile slide-over states
  const [mobileView, setMobileView] = useState<
    "main" | "products" | "services" | "projects"
  >("main");

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const linkCls = (href: string) =>
    `relative px-3 py-1.5 text-[0.8rem] tracking-[0.04em] whitespace-nowrap font-semibold transition-colors duration-200
     ${isActive(href) ? "text-[var(--c-coral)]" : "text-[var(--c-text)] hover:text-[var(--c-coral)]"}`;

  return (
    <>
      {/* TOP INFO BAR */}
      <div
        className="fixed top-0 inset-x-0 z-50 flex items-center justify-center gap-8 px-6 text-xs text-white/80"
        style={{
          height: "var(--topbar-h)",
          background: "var(--c-navy-dark)",
        }}
      >
        <a
          href="tel:+917972840160"
          className="flex items-center gap-1.5 hover:text-white transition-colors"
        >
          <span>📞</span> +91-7972-84-0160
        </a>
        <span className="opacity-30">|</span>
        <a
          href="mailto:info@chemsept.in"
          className="flex items-center gap-1.5 hover:text-white transition-colors"
        >
          <span>✉️</span> info@chemsept.in
        </a>
      </div>

      {/* MAIN NAVBAR */}
      <nav
        className="fixed inset-x-0 z-40 bg-white transition-all duration-300"
        style={{
          top: "var(--topbar-h)",
          height: "var(--nav-h)",
          boxShadow: scrolled ? "var(--shadow-md)" : "var(--shadow-sm)",
          borderBottom: "1px solid var(--c-border)",
        }}
      >
        <div className="container h-full flex items-center gap-6">
          {/* LOGO */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/chemlogo1.png"
              alt="ChemSepT Logo"
              width={200}
              height={80}
              priority
              className="h-auto w-auto max-h-16 object-contain"
            />
            {/* <video
                            autoPlay
                            loop
                            muted
                            className="h-auto w-auto max-h-14 object-contain"
                            style={{ maxWidth: '200px' }}
                        >
                            <source src="/Logo_Animation_for_Manufacturing_Business.mp4" type="video/mp4" />
                        </video> */}
          </Link>

          {/* DESKTOP NAV */}
          <ul className="hidden lg:flex items-center gap-0.5 ml-auto list-none">
            {[
              ["/", "HOME"],
              ["/about", "ABOUT US"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className={linkCls(href)}>
                  {label}
                  {isActive(href) && (
                    <span
                      className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                      style={{ background: "var(--c-coral)" }}
                    />
                  )}
                </Link>
              </li>
            ))}

            {/* ============ PROJECTS MEGA DROPDOWN ============ */}
            <li
              className="relative"
              onMouseEnter={() => setProjOpen(true)}
              onMouseLeave={() => {
                setProjOpen(false);
                setProjSub(null);
              }}
            >
              <Link
                href="/projects"
                className={`text-[0.8rem] tracking-[0.04em] whitespace-nowrap font-semibold px-3 py-1.5 flex items-center gap-1 transition-colors duration-200
                                ${pathname.startsWith("/projects") ? "text-[var(--c-coral)]" : "text-[var(--c-text)] hover:text-[var(--c-coral)]"}`}
              >
                PROJECTS{" "}
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                {isActive("/projects") && (
                  <span
                    className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                    style={{ background: "var(--c-coral)" }}
                  />
                )}
              </Link>
              {projOpen && (
                <div
                  className="absolute top-full left-0 flex animate-fadeIn"
                  style={{ zIndex: 100 }}
                >
                  {/* Category column */}
                  <div className="w-52 bg-white border border-[var(--c-border)] rounded-l-xl shadow-[var(--shadow-lg)] py-2">
                    {projectsNav.map((cat) => (
                      <div
                        key={cat.label}
                        onMouseEnter={() => setProjSub(cat.label)}
                        className={`flex items-center justify-between px-5 py-2.5 text-sm font-medium cursor-pointer transition-colors
                                                    ${projSub === cat.label ? "bg-[var(--c-slate)] text-[var(--c-coral)]" : "text-[var(--c-text-mid)] hover:text-[var(--c-coral)] hover:bg-[var(--c-slate)]"}`}
                      >
                        <span className="flex items-center gap-2">
                          <span>{cat.icon}</span> {cat.label}
                        </span>
                        <span className="text-[0.6rem] opacity-50">›</span>
                      </div>
                    ))}
                  </div>
                  {/* Sub-items column */}
                  {projSub && (
                    <div className="w-64 bg-white border border-l-0 border-[var(--c-border)] rounded-r-xl shadow-[var(--shadow-lg)] py-2 animate-fadeIn">
                      {projectsNav
                        .find((c) => c.label === projSub)
                        ?.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-5 py-2 text-sm font-medium text-[var(--c-text-mid)] hover:text-[var(--c-coral)] hover:bg-[var(--c-slate)] transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                    </div>
                  )}
                </div>
              )}
            </li>

            {/* PRODUCTS DROPDOWN */}
            <li
              className="relative"
              onMouseEnter={() => setProdOpen(true)}
              onMouseLeave={() => {
                setProdOpen(false);
                setProdSub(null);
              }}
            >
              <Link
                href="/products"
                className={`text-[0.8rem] tracking-[0.04em] whitespace-nowrap font-semibold px-3 py-1.5 flex items-center gap-1 transition-colors duration-200
                                ${pathname.startsWith("/products") ? "text-[var(--c-coral)]" : "text-[var(--c-text)] hover:text-[var(--c-coral)]"}`}
              >
                PRODUCTS{" "}
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                {isActive("/products") && (
                  <span
                    className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                    style={{ background: "var(--c-coral)" }}
                  />
                )}
              </Link>
              {prodOpen && (
                <div
                  className="absolute top-full left-0 flex animate-fadeIn"
                  style={{ zIndex: 100 }}
                >
                  {/* Category column */}
                  <div
                    className="w-80 bg-white border border-[var(--c-border)] rounded-l-xl shadow-[var(--shadow-lg)] py-2 max-h-[70vh] overflow-y-auto"
                    style={{ scrollbarWidth: "thin" }}
                  >
                    {productsNav.map((cat) =>
                      cat.isLink ? (
                        <Link
                          key={cat.label}
                          href={cat.href!}
                          onMouseEnter={() => setProdSub(cat.label)}
                          className={`flex items-center justify-between px-5 py-2.5 text-sm font-medium transition-colors
                                                        ${prodSub === cat.label ? "bg-[var(--c-slate)] text-[var(--c-coral)]" : "text-[var(--c-text-mid)] hover:text-[var(--c-coral)] hover:bg-[var(--c-slate)]"}`}
                        >
                          <span className="flex items-center gap-2">
                            <span>{cat.icon}</span> {cat.label}
                          </span>
                        </Link>
                      ) : (
                        <div
                          key={cat.label}
                          onMouseEnter={() => setProdSub(cat.label)}
                          className={`flex items-center justify-between px-5 py-2.5 text-sm font-medium cursor-pointer transition-colors
                                                        ${prodSub === cat.label ? "bg-[var(--c-slate)] text-[var(--c-coral)]" : "text-[var(--c-text-mid)] hover:text-[var(--c-coral)] hover:bg-[var(--c-slate)]"}`}
                        >
                          <span className="flex items-center gap-2">
                            <span>{cat.icon}</span> {cat.label}
                          </span>
                          <span className="text-xl leading-none opacity-50">
                            ›
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                  {/* Sub-items column */}
                  {prodSub &&
                    productsNav.find((c) => c.label === prodSub)?.items && (
                      <div
                        className="w-64 bg-white border border-l-0 border-[var(--c-border)] rounded-r-xl shadow-[var(--shadow-lg)] py-2 animate-fadeIn max-h-[70vh] overflow-y-auto"
                        style={{ scrollbarWidth: "thin" }}
                      >
                        {productsNav
                          .find((c) => c.label === prodSub)
                          ?.items?.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block px-5 py-2 text-sm font-medium text-[var(--c-text-mid)] hover:text-[var(--c-coral)] hover:bg-[var(--c-slate)] transition-colors border-b border-gray-50 last:border-0"
                            >
                              {item.label}
                            </Link>
                          ))}
                      </div>
                    )}
                </div>
              )}
            </li>

            {/* SERVICES DROPDOWN */}
            <li
              className="relative"
              onMouseEnter={() => setServOpen(true)}
              onMouseLeave={() => setServOpen(false)}
            >
              <button
                className={`text-[0.8rem] tracking-[0.04em] whitespace-nowrap font-semibold px-3 py-1.5 flex items-center gap-1 transition-colors duration-200
                  ${pathname.startsWith("/services") ? "text-[var(--c-coral)]" : "text-[var(--c-text)] hover:text-[var(--c-coral)]"}`}
              >
                SERVICES{" "}
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {servOpen && (
                <div className="absolute top-full left-0 w-72 bg-white border border-[var(--c-border)] rounded-xl shadow-[var(--shadow-lg)] py-2 animate-fadeIn">
                  {services.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="block px-5 py-2.5 text-sm font-medium text-[var(--c-text-mid)] hover:text-[var(--c-coral)] hover:bg-[var(--c-slate)] transition-colors"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
            {[
              ["/technology", "TECHNOLOGY"],
              ["/gallery", "GALLERY"],
              ["/contact", "CONTACT US"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className={linkCls(href)}>
                  {label}
                  {isActive(href) && (
                    <span
                      className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                      style={{ background: "var(--c-coral)" }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href="/contact"
            className="max-lg:!hidden lg:inline-flex btn btn-primary ml-4 whitespace-nowrap"
            style={{ padding: "10px 22px", fontSize: "0.8rem" }}
          >
            Get a Quote
          </Link>

          {/* HAMBURGER */}
          <button
            onClick={() => {
              setMenuOpen(!menuOpen);
              if (menuOpen) setMobileView("main");
            }}
            className="lg:hidden ml-auto p-2 flex flex-col gap-[5px]"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-6 h-0.5 rounded transition-all duration-300"
                style={{
                  background: "var(--c-navy)",
                  transform: menuOpen
                    ? i === 0
                      ? "translateY(7px) rotate(45deg)"
                      : i === 2
                        ? "translateY(-7px) rotate(-45deg)"
                        : "scaleX(0)"
                    : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-400 bg-white border-t border-[var(--c-border)]
          ${menuOpen ? "max-h-[80vh] overflow-y-auto" : "max-h-0"}`}
        >
          {/* MAIN VIEW */}
          <div
            className={`container py-2 flex flex-col transition-transform duration-300 ${mobileView === "main" ? "translate-x-0 block" : "-translate-x-full hidden"}`}
          >
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="py-3 px-2 font-bold border-b border-gray-100/50 text-[var(--c-navy)] text-[15px]"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="py-3 px-2 font-bold border-b border-gray-100/50 text-[var(--c-navy)] text-[15px]"
            >
              About Us
            </Link>

            <button
              onClick={() => setMobileView("projects")}
              className="py-3 px-2 font-bold border-b border-gray-100/50 flex justify-between items-center text-[var(--c-navy)] text-[15px] w-full text-left"
            >
              Projects <span className="text-xl">›</span>
            </button>
            <button
              onClick={() => setMobileView("products")}
              className="py-3 px-2 font-bold border-b border-gray-100/50 flex justify-between items-center text-[var(--c-navy)] text-[15px] w-full text-left"
            >
              Products <span className="text-xl">›</span>
            </button>
            <button
              onClick={() => setMobileView("services")}
              className="py-3 px-2 font-bold border-b border-gray-100/50 flex justify-between items-center text-[var(--c-navy)] text-[15px] w-full text-left"
            >
              Services <span className="text-xl">›</span>
            </button>

            <Link
              href="/technology"
              onClick={() => setMenuOpen(false)}
              className="py-3 px-2 font-bold border-b border-gray-100/50 text-[var(--c-navy)] text-[15px]"
            >
              Technology
            </Link>
            <Link
              href="/gallery"
              onClick={() => setMenuOpen(false)}
              className="py-3 px-2 font-bold border-b border-gray-100/50 text-[var(--c-navy)] text-[15px]"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="py-3 px-2 font-bold text-[var(--c-navy)] text-[15px]"
            >
              Contact Us
            </Link>

            <div className="mt-4 px-2 pb-4">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="btn btn-primary w-full text-center py-3"
              >
                ✉️ Get a Quote
              </Link>
            </div>
          </div>

          {/* PRODUCTS VIEW */}
          <div
            className={`container py-2 pb-6 flex flex-col transition-transform duration-300 ${mobileView === "products" ? "translate-x-0 block" : "translate-x-full hidden"}`}
          >
            <button
              onClick={() => setMobileView("main")}
              className="py-3 px-2 mb-2 font-bold bg-[var(--c-slate)] flex items-center gap-2 text-[var(--c-coral)] rounded-lg text-[15px]"
            >
              <span className="text-xl leading-none">‹</span> Main Menu
            </button>
            {productsNav.map((cat, idx) =>
              cat.isLink ? (
                <Link
                  key={idx}
                  href={cat.href!}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 px-2 border-b border-gray-100/50 flex items-center gap-2 text-[15px] font-bold text-[var(--c-text-mid)]"
                >
                  <span className="opacity-70 text-[11px]">{cat.icon}</span>{" "}
                  {cat.label}
                </Link>
              ) : (
                <div key={idx} className="mb-2">
                  <p className="text-[11px] font-bold uppercase tracking-widest px-2 py-2 text-[var(--c-text-muted)] border-b bg-gray-50">
                    {cat.icon} {cat.label}
                  </p>
                  <div className="flex flex-col pl-4 border-l border-gray-100 ml-2 mt-1">
                    {cat.items?.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="py-2.5 px-2 text-[14px] text-[var(--c-text-mid)] border-b border-gray-100/50 last:border-0 font-medium tracking-wide"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ),
            )}
          </div>

          {/* SERVICES VIEW */}
          <div
            className={`container py-2 flex flex-col transition-transform duration-300 ${mobileView === "services" ? "translate-x-0 block" : "translate-x-full hidden"}`}
          >
            <button
              onClick={() => setMobileView("main")}
              className="py-3 px-2 mb-2 font-bold bg-[var(--c-slate)] flex items-center gap-2 text-[var(--c-coral)] rounded-lg text-[15px]"
            >
              <span className="text-xl leading-none">‹</span> Main Menu
            </button>
            <div className="flex flex-col">
              {services.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 px-4 text-[15px] font-medium text-[var(--c-text-mid)] border-b border-gray-100/50"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* PROJECTS VIEW */}
          <div
            className={`container py-2 flex flex-col transition-transform duration-300 ${mobileView === "projects" ? "translate-x-0 block" : "translate-x-full hidden"}`}
          >
            <button
              onClick={() => setMobileView("main")}
              className="py-3 px-2 mb-2 font-bold bg-[var(--c-slate)] flex items-center gap-2 text-[var(--c-coral)] rounded-lg text-[15px]"
            >
              <span className="text-xl leading-none">‹</span> Main Menu
            </button>
            {projectsNav.map((cat, idx) => (
              <div key={idx} className="mb-4">
                <p className="text-[11px] font-bold uppercase tracking-widest px-2 py-2 text-[var(--c-text-muted)] border-b">
                  {cat.icon} {cat.label}
                </p>
                <div className="flex flex-col">
                  {cat.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="py-2.5 px-4 text-sm text-[var(--c-text-mid)] border-b border-gray-100/50 font-medium"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
