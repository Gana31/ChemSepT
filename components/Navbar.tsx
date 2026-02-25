'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const services = [
    { href: '/services/basic-engineering', label: 'Basic Engineering Packages' },
    { href: '/services/process-engineering', label: 'Process Detailed Engineering' },
    { href: '/services/procurement', label: 'Procurement & Vendor Sourcing' },
    { href: '/services/3d-modeling', label: '3D Plant Modeling' },
    { href: '/services/construction', label: 'Construction, Erection & Commissioning' },
    { href: '/services/site-labour', label: 'Site Work & Labour Services' },
];

const productsDropdown = [
    { href: '/products/jacketed-reactors', label: 'Jacketed Reactors' },
    { href: '/products/limpet-reactors', label: 'Limpet Reactors' },
    { href: '/products/agitators-impellers', label: 'Agitators & Impellers' },
    { href: '/products/falling-film-evaporator', label: 'Falling Film Evaporator' },
    { href: '/products/forced-circulation-evaporator', label: 'Forced Circulation' },
    { href: '/products/multi-effect-evaporator', label: 'Multi Effect Evaporator' },
    { href: '/products/rising-film-evaporator', label: 'Rising Film Evaporator' },
    { href: '/products/wiped-film-evaporator', label: 'Wiped Film Evaporator' },
    { href: '/products/agitated-thin-film-dryer', label: 'Agitated Thin Film Dryer' },
    { href: '/products/distillation-equipment', label: 'Distillation Equipment' },
    { href: '/products/pressure-vessels', label: 'Pressure Vessels & Tanks' },
    { href: '/products/oil-gas-separators', label: 'Oil & Gas Separators' },
    { href: '/products/static-mixers', label: 'Static Mixers' },
    { href: '/products/heat-exchangers', label: 'Heat Exchangers' },
    { href: '/products/industrial-scrubbers', label: 'Industrial Scrubbers' },
    { href: '/products/silos-hoppers', label: 'Silos & Hoppers' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [servOpen, setServOpen] = useState(false);
    const [prodOpen, setProdOpen] = useState(false);

    useEffect(() => {
        const h = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', h);
        return () => window.removeEventListener('scroll', h);
    }, []);

    const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

    const linkCls = (href: string) =>
        `relative px-3 py-1.5 text-sm font-semibold transition-colors duration-200
     ${isActive(href) ? 'text-[var(--c-coral)]' : 'text-[var(--c-text)] hover:text-[var(--c-coral)]'}`;

    return (
        <>
            {/* TOP INFO BAR */}
            <div
                className="fixed top-0 inset-x-0 z-50 flex items-center justify-center gap-8 px-6 text-xs text-white/80"
                style={{ height: 'var(--topbar-h)', background: 'var(--c-navy-dark)' }}
            >
                <a href="tel:+917972840160" className="flex items-center gap-1.5 hover:text-white transition-colors">
                    <span>📞</span> +91-7972-84-0160
                </a>
                <span className="opacity-30">|</span>
                <a href="mailto:info@chemsept.in" className="flex items-center gap-1.5 hover:text-white transition-colors">
                    <span>✉️</span> info@chemsept.in
                </a>
            </div>

            {/* MAIN NAVBAR */}
            <nav
                className="fixed inset-x-0 z-40 bg-white transition-all duration-300"
                style={{
                    top: 'var(--topbar-h)',
                    height: 'var(--nav-h)',
                    boxShadow: scrolled ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                    borderBottom: '1px solid var(--c-border)',
                }}
            >
                <div className="container h-full flex items-center gap-6">
                    {/* LOGO */}
                    <Link href="/" className="flex items-center shrink-0">
                        <Image
                            src="/logo01.webp"
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
                    <ul className="hidden lg:flex items-center gap-1 ml-auto list-none">
                        {[['/', 'HOME'], ['/about', 'ABOUT US']].map(([href, label]) => (
                            <li key={href}>
                                <Link href={href} className={linkCls(href)}
                                    style={{ fontSize: '0.8rem', letterSpacing: '0.04em' }}>
                                    {label}
                                    {isActive(href) && (
                                        <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                                            style={{ background: 'var(--c-coral)' }} />
                                    )}
                                </Link>
                            </li>
                        ))}
                        {/* PRODUCTS DROPDOWN */}
                        <li className="relative" onMouseEnter={() => setProdOpen(true)} onMouseLeave={() => setProdOpen(false)}>
                            <Link href="/products"
                                className={`text-[0.8rem] tracking-[0.04em] font-semibold px-3 py-1.5 flex items-center gap-1 transition-colors duration-200
                  ${pathname.startsWith('/products') ? 'text-[var(--c-coral)]' : 'text-[var(--c-text)] hover:text-[var(--c-coral)]'}`}
                            >
                                PRODUCTS <span className="text-[0.6rem]">▾</span>
                                {isActive('/products') && (
                                    <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                                        style={{ background: 'var(--c-coral)' }} />
                                )}
                            </Link>
                            {prodOpen && (
                                <div className="absolute top-full left-0 w-64 bg-white border border-[var(--c-border)] rounded-xl shadow-[var(--shadow-lg)] py-2 animate-fadeIn max-h-[70vh] overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
                                    {productsDropdown.map(({ href, label }) => (
                                        <Link key={href} href={href}
                                            className="block px-5 py-2 text-sm font-medium text-[var(--c-text-mid)] hover:text-[var(--c-coral)] hover:bg-[var(--c-slate)] transition-colors">
                                            {label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </li>

                        {/* SERVICES DROPDOWN */}
                        <li className="relative" onMouseEnter={() => setServOpen(true)} onMouseLeave={() => setServOpen(false)}>
                            <button
                                className={`text-[0.8rem] tracking-[0.04em] font-semibold px-3 py-1.5 flex items-center gap-1 transition-colors duration-200
                  ${pathname.startsWith('/services') ? 'text-[var(--c-coral)]' : 'text-[var(--c-text)] hover:text-[var(--c-coral)]'}`}
                            >
                                SERVICES <span className="text-[0.6rem]">▾</span>
                            </button>
                            {servOpen && (
                                <div className="absolute top-full left-0 w-72 bg-white border border-[var(--c-border)] rounded-xl shadow-[var(--shadow-lg)] py-2 animate-fadeIn">
                                    {services.map(({ href, label }) => (
                                        <Link key={href} href={href}
                                            className="block px-5 py-2.5 text-sm font-medium text-[var(--c-text-mid)] hover:text-[var(--c-coral)] hover:bg-[var(--c-slate)] transition-colors">
                                            {label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </li>
                        {[['/technology', 'TECHNOLOGY'], ['/gallery', 'GALLERY'], ['/contact', 'CONTACT US']].map(([href, label]) => (
                            <li key={href}>
                                <Link href={href} className={linkCls(href)}
                                    style={{ fontSize: '0.8rem', letterSpacing: '0.04em' }}>
                                    {label}
                                    {isActive(href) && (
                                        <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                                            style={{ background: 'var(--c-coral)' }} />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* CTA */}
                    <Link href="/contact" className="hidden lg:inline-flex btn btn-primary ml-4" style={{ padding: '10px 22px', fontSize: '0.8rem' }}>
                        Get Quote
                    </Link>

                    {/* HAMBURGER */}
                    <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden ml-auto p-2 flex flex-col gap-[5px]">
                        {[0, 1, 2].map(i => (
                            <span key={i} className="block w-6 h-0.5 rounded transition-all duration-300"
                                style={{
                                    background: 'var(--c-navy)',
                                    transform: menuOpen ? (i === 0 ? 'translateY(7px) rotate(45deg)' : i === 2 ? 'translateY(-7px) rotate(-45deg)' : 'scaleX(0)') : 'none',
                                    opacity: menuOpen && i === 1 ? 0 : 1
                                }} />
                        ))}
                    </button>
                </div>

                {/* MOBILE MENU */}
                <div className={`lg:hidden overflow-hidden transition-all duration-400 bg-white border-t border-[var(--c-border)]
          ${menuOpen ? 'max-h-[600px]' : 'max-h-0'}`}>
                    <div className="container py-4 flex flex-col gap-1">
                        {[['/', 'Home'], ['/about', 'About Us'], ['/products', 'Products'], ['/technology', 'Technology'], ['/gallery', 'Gallery'], ['/contact', 'Contact Us']].map(([href, label]) => (
                            <Link key={href} href={href} onClick={() => setMenuOpen(false)}
                                className="py-2.5 px-3 text-sm font-medium rounded-lg transition-colors"
                                style={{
                                    color: isActive(href) ? 'var(--c-coral)' : 'var(--c-text)',
                                    background: isActive(href) ? 'var(--c-slate)' : 'transparent'
                                }}>
                                {label}
                            </Link>
                        ))}

                        <div className="pt-2 pb-1 border-t border-[var(--c-border)] mt-2">
                            <p className="text-xs font-bold uppercase tracking-widest px-3 py-1" style={{ color: 'var(--c-text-muted)' }}>Products</p>
                            <div className="grid grid-cols-2 gap-1 px-1">
                                {productsDropdown.map(({ href, label }) => (
                                    <Link key={href} href={href} onClick={() => setMenuOpen(false)}
                                        className="block py-1.5 px-2 text-[0.8rem] rounded-md transition-colors leading-tight"
                                        style={{ color: 'var(--c-text-mid)' }}>
                                        — {label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="pt-2 pb-1 border-t border-[var(--c-border)] mt-1">
                            <p className="text-xs font-bold uppercase tracking-widest px-3 py-2" style={{ color: 'var(--c-text-muted)' }}>Services</p>
                            {services.map(({ href, label }) => (
                                <Link key={href} href={href} onClick={() => setMenuOpen(false)}
                                    className="block py-2 px-3 text-sm rounded-lg transition-colors"
                                    style={{ color: 'var(--c-text-mid)' }}>
                                    — {label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
