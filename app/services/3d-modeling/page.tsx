import Link from 'next/link';

export default function ModelingPage() {
    return (
        <>
            <div className="page-hero">
                <div className="container page-hero-content">
                    <h1>3D Plant Modeling</h1>
                    <div className="breadcrumb">
                        <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
                        <Link href="/services/basic-engineering">Services</Link><span className="breadcrumb-sep">›</span>
                        <span>3D Plant Modeling</span>
                    </div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-14 items-start">
                        <div>
                            <h2 className="section-heading">3D Plant <span>Modeling</span></h2>
                            <p className="mt-5 leading-relaxed" style={{ color: 'var(--c-text-mid)' }}>
                                Based on your requirements ChemSepT offer all services like piping design, Stress analysis and
                                3D modelling of all pharmaceutical, chemical, petrochemical and petroleum plant.
                            </p>
                            <p className="mt-4 leading-relaxed" style={{ color: 'var(--c-text-mid)' }}>
                                Our 3D plant modeling services provide an accurate digital representation of your plant, enabling
                                clash detection, walkthrough visualization, and precise material take-offs before construction begins.
                            </p>
                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {['Piping Design & Engineering', 'Stress Analysis (Caesar II)', '3D Plant Layout & Modeling', 'Isometric Drawings', 'Equipment Arrangement', 'Foundation & Civil Drawings', 'Structural Steel Design', 'Clash Detection & Resolution', 'Bill of Materials (BOM)', 'Construction Support Drawings'].map(item => (
                                    <div key={item} className="flex items-start gap-3 p-3 rounded-lg" style={{ background: 'var(--c-slate)', border: '1px solid var(--c-border)' }}>
                                        <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5"
                                            style={{ background: 'var(--c-coral)' }}>✓</span>
                                        <span className="text-sm font-medium" style={{ color: 'var(--c-text)' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {['PDMS', 'SP3D', 'Caesar II', 'AutoCAD', 'SolidWorks', 'HAD'].map(tool => (
                                    <span key={tool} className="tag tag-navy">{tool}</span>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className="card text-center py-8">
                                <div className="text-5xl mb-4">🏗️</div>
                                <h3 className="font-bold text-base mb-2" style={{ color: 'var(--c-navy)' }}>3D Modeling Services</h3>
                                <p className="text-sm mb-6" style={{ color: 'var(--c-text-muted)' }}>Get a complete 3D model for your plant or facility.</p>
                                <Link href="/contact" className="btn btn-primary w-full">Request a Quote</Link>
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
