import Link from 'next/link';
import React from 'react';
import ServiceImageSlider from './ServiceImageSlider';

interface Section { heading: string; items: string[]; }

interface ProjectDetailProps {
    title: string;
    icon: string;
    category: string;
    images?: string[];
    description: string | React.ReactNode;
    sections?: Section[];
}

export default function ProjectDetail({
    title, icon, category, images, description, sections = []
}: ProjectDetailProps) {
    return (
        <>
            <div className="page-hero">
                <div className="container page-hero-content">
                    <h1>{title}</h1>
                    <div className="breadcrumb">
                        <Link href="/">Home</Link>
                        <span className="breadcrumb-sep">›</span>
                        <Link href="/projects">Projects</Link>
                        <span className="breadcrumb-sep">›</span>
                        <span>{category}</span>
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
                                    <p className="text-xs mt-1 font-semibold uppercase tracking-widest" style={{ color: 'var(--c-coral)' }}>{category}</p>
                                </div>
                            </div>

                            {/* PROJECT IMAGES */}
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
                        </div>

                        {/* SIDEBAR */}
                        <div className="flex flex-col gap-5">
                            {/* Enquiry CTA */}
                            <div className="card text-center py-8">
                                <div className="text-5xl mb-3">{icon}</div>
                                <h3 className="font-bold text-base mb-1" style={{ color: 'var(--c-navy)' }}>Get a Quote</h3>
                                <p className="text-xs mb-5" style={{ color: 'var(--c-text-muted)' }}>Tell us your requirements and we&apos;ll get back to you promptly.</p>
                                <Link href="/contact" className="btn btn-primary w-full">Enquire Now</Link>
                                <div className="mt-4 pt-4 space-y-2" style={{ borderTop: '1px solid var(--c-border)' }}>
                                    <a href="tel:+917972840160" className="block text-xs hover:text-[var(--c-coral)] transition-colors" style={{ color: 'var(--c-text-muted)' }}>📞 +91-7972-84-0160</a>
                                    <a href="mailto:info@chemsept.in" className="block text-xs hover:text-[var(--c-coral)] transition-colors" style={{ color: 'var(--c-text-muted)' }}>✉️ info@chemsept.in</a>
                                </div>
                            </div>

                            {/* Certifications */}
                            <div className="card">
                                <h4 className="font-bold text-sm mb-4" style={{ color: 'var(--c-navy)' }}>Certifications & Standards</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['ASME', 'API', 'TEMA', 'BIS', 'cGMP'].map(c => (
                                        <span key={c} className="tag tag-navy">{c}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Back to projects */}
                            <Link href="/projects" className="btn btn-outline w-full text-center">← All Projects</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
