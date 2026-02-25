import Link from 'next/link';

export default function ConstructionPage() {
    return (
        <>
            <div className="page-hero">
                <div className="container page-hero-content">
                    <h1>Construction, Erection & Commissioning</h1>
                    <div className="breadcrumb">
                        <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
                        <Link href="/services/basic-engineering">Services</Link><span className="breadcrumb-sep">›</span>
                        <span>Construction & Commissioning</span>
                    </div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-14 items-start">
                        <div>
                            <h2 className="section-heading">Construction, Erection &amp; <span>Commissioning</span></h2>
                            <p className="mt-5 leading-relaxed" style={{ color: 'var(--c-text-mid)' }}>
                                ChemSepT™ can self-perform construction or act as the construction manager on both large and small
                                sized projects.
                            </p>
                            <p className="mt-4 leading-relaxed" style={{ color: 'var(--c-text-mid)' }}>
                                Our construction team brings decades of experience in erecting process plants and equipment, from
                                small lab-scale installations to large-scale industrial facilities. We manage every aspect of
                                construction to ensure safety, quality, and on-schedule delivery.
                            </p>
                            <div className="mt-8">
                                <h3 className="font-bold text-base mb-4" style={{ color: 'var(--c-navy)' }}>Our Construction Services:</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {['Site Preparation & Civil Works', 'Equipment Erection & Alignment', 'Mechanical Installation', 'Piping Fabrication & Installation', 'Electrical & Instrumentation', 'Pre-Commissioning Checks', 'Cold Commissioning', 'Hot Commissioning & Start-up', 'Performance Testing', 'Handover & Documentation'].map(item => (
                                        <div key={item} className="flex items-start gap-3 p-3 rounded-lg" style={{ background: 'var(--c-slate)', border: '1px solid var(--c-border)' }}>
                                            <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5"
                                                style={{ background: 'var(--c-coral)' }}>✓</span>
                                            <span className="text-sm font-medium" style={{ color: 'var(--c-text)' }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className="card text-center py-8">
                                <div className="text-5xl mb-4">🔧</div>
                                <h3 className="font-bold text-base mb-2" style={{ color: 'var(--c-navy)' }}>Start Construction</h3>
                                <p className="text-sm mb-6" style={{ color: 'var(--c-text-muted)' }}>We handle your project from ground-breaking to handover.</p>
                                <Link href="/contact" className="btn btn-primary w-full">Contact Us</Link>
                            </div>
                            <div className="card">
                                <h4 className="font-bold text-sm mb-3" style={{ color: 'var(--c-navy)' }}>Contact Us</h4>
                                <a href="tel:+917972840160" className="block text-sm mb-2 hover:text-[var(--c-coral)] transition-colors" style={{ color: 'var(--c-text-mid)' }}>📞 +91-7972-84-0160</a>
                                <a href="mailto:info@chemsept.in" className="block text-sm hover:text-[var(--c-coral)] transition-colors" style={{ color: 'var(--c-text-mid)' }}>✉️ info@chemsept.in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
