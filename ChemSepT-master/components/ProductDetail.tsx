import Link from 'next/link';
import React from 'react';
import ServiceImageSlider from './ServiceImageSlider';

interface Spec { label: string; value: string; }
interface Section { heading: string; items: string[]; }

interface ProductDetailProps {
    title: string;
    icon: string;
    tagline?: string;
    images?: string[];
    description: string | React.ReactNode;
    specs?: Spec[];
    certifications?: string[];
    sections?: Section[];
    extraContent?: React.ReactNode;
}

export default function ProductDetail({
    title, icon, tagline, images, description, specs = [], certifications = [], sections = [], extraContent
}: ProductDetailProps) {
    return (
        <>
            <div className="page-hero">
                <div className="container page-hero-content">
                    <h1>{title}</h1>
                    <div className="breadcrumb">
                        <Link href="/">Home</Link>
                        <span className="breadcrumb-sep">›</span>
                        <Link href="/products">Products</Link>
                        <span className="breadcrumb-sep">›</span>
                        <span>{title}</span>
                    </div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-14 items-start">

                        {/* MAIN CONTENT */}
                        <div>
                            <div className="flex items-center gap-4 mb-5">
                                <div className="icon-box text-3xl" style={{ width: 64, height: 64 }}>{icon}</div>
                                <div>
                                    <h2 className="section-heading" style={{ fontSize: '1.6rem' }}>{title}</h2>
                                    {tagline && <p className="text-sm italic mt-1" style={{ color: 'var(--c-coral)' }}>{tagline}</p>}
                                </div>
                            </div>

                            {/* PRODUCT IMAGES */}
                            {images && images.length > 0 && (
                                <div className="mb-8">
                                    <ServiceImageSlider images={images.map(img => ({ src: img, alt: title }))} />
                                </div>
                            )}

                            <div className="text-base leading-relaxed space-y-3 mb-8" style={{ color: 'var(--c-text-mid)' }}>
                                {typeof description === 'string'
                                    ? description.split('\n').filter(Boolean).map((p, i) => <p key={i}>{p}</p>)
                                    : description}
                            </div>

                            {/* SPECS TABLE */}
                            {specs.length > 0 && (
                                <div className="rounded-xl overflow-hidden mb-8" style={{ border: '1px solid var(--c-border)' }}>
                                    <div className="px-5 py-3 font-bold text-xs uppercase tracking-widest text-white" style={{ background: 'var(--c-navy)' }}>
                                        Technical Specifications
                                    </div>
                                    <div className="divide-y" style={{ borderColor: 'var(--c-border)' }}>
                                        {specs.map(({ label, value }) => (
                                            <div key={label} className="grid grid-cols-[180px_1fr] text-sm">
                                                <div className="px-5 py-3 font-semibold" style={{ background: 'var(--c-slate)', color: 'var(--c-navy)' }}>{label}</div>
                                                <div className="px-5 py-3" style={{ color: 'var(--c-text-mid)' }}>{value}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* FEATURE SECTIONS */}
                            {sections.map(({ heading, items }) => (
                                <div key={heading} className="mb-7">
                                    <h3 className="font-bold text-base mb-4" style={{ color: 'var(--c-navy)' }}>{heading}</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                        {items.map(item => (
                                            <div key={item} className="flex items-start gap-3 p-3 rounded-lg" style={{ background: 'var(--c-slate)', border: '1px solid var(--c-border)' }}>
                                                <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5"
                                                    style={{ background: 'var(--c-coral)' }}>✓</span>
                                                <span className="text-sm" style={{ color: 'var(--c-text)' }}>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            {extraContent}
                        </div>

                        {/* SIDEBAR */}
                        <div className="flex flex-col gap-5">
                            {/* Certifications */}
                            {certifications.length > 0 && (
                                <div className="card">
                                    <h4 className="font-bold text-sm mb-4" style={{ color: 'var(--c-navy)' }}>Certifications</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {certifications.map(c => (
                                            <span key={c} className="tag tag-navy">{c}</span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Enquiry CTA */}
                            <div className="card text-center py-8">
                                <div className="text-5xl mb-3">{icon}</div>
                                <h3 className="font-bold text-base mb-1" style={{ color: 'var(--c-navy)' }}>Get a Quote</h3>
                                <p className="text-xs mb-5" style={{ color: 'var(--c-text-muted)' }}>Tell us your requirements and we'll get back to you promptly.</p>
                                <Link href="/contact" className="btn btn-primary w-full">Enquire Now</Link>
                                <div className="mt-4 pt-4 space-y-2" style={{ borderTop: '1px solid var(--c-border)' }}>
                                    <a href="tel:+917972840160" className="block text-xs hover:text-[var(--c-coral)] transition-colors" style={{ color: 'var(--c-text-muted)' }}>📞 +91-7972-84-0160</a>
                                    <a href="mailto:info@chemsept.in" className="block text-xs hover:text-[var(--c-coral)] transition-colors" style={{ color: 'var(--c-text-muted)' }}>✉️ info@chemsept.in</a>
                                </div>
                            </div>

                            {/* Back to products */}
                            <Link href="/products" className="btn btn-outline w-full text-center">← All Products</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
