import Link from 'next/link';

const deliverables = [
    'Process Flow Diagrams (PFD)', 'Piping & Instrumentation Diagrams (P&ID)',
    'Equipment Data Sheets and Specifications', 'Line List and Piping Specifications',
    'Instrument Index and Data Sheets', 'Cause and Effect Diagrams',
    'Safety Requirements Specifications', 'Heat & Material Balance',
    'Hydraulic Calculations', 'Process Narrative & Descriptions',
    'Control System Philosophy', 'Relief Device Design',
];

export default function ProcessEngineeringPage() {
    return (
        <>
            <div className="page-hero">
                <div className="container page-hero-content">
                    <h1>Process Detailed Engineering</h1>
                    <div className="breadcrumb">
                        <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
                        <Link href="/services/basic-engineering">Services</Link><span className="breadcrumb-sep">›</span>
                        <span>Process Detailed Engineering</span>
                    </div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-14 items-start">
                        <div>
                            <h2 className="section-heading">Process Detailed <span>Engineering</span></h2>
                            <p className="mt-5 leading-relaxed" style={{ color: 'var(--c-text-mid)' }}>
                                ChemSepT™ Process Detailed Engineering refers to a "Completed Process Design Package" that includes all
                                the necessary information required by an Engineering/Construction firm.
                            </p>
                            <p className="mt-4 leading-relaxed" style={{ color: 'var(--c-text-mid)' }}>
                                Our experienced team of process engineers prepare a comprehensive detailed engineering package that serves
                                as the single most important reference for all stakeholders involved in the execution of a project. This
                                package ensures seamless information transfer from licensor to engineering company to construction firm.
                            </p>
                            <div className="mt-8">
                                <h3 className="font-bold text-base mb-4" style={{ color: 'var(--c-navy)' }}>Scope of Work Includes:</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {deliverables.map(d => (
                                        <div key={d} className="flex items-start gap-3 p-3 rounded-lg" style={{ background: 'var(--c-slate)', border: '1px solid var(--c-border)' }}>
                                            <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5"
                                                style={{ background: 'var(--c-coral)' }}>✓</span>
                                            <span className="text-sm font-medium" style={{ color: 'var(--c-text)' }}>{d}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className="card text-center py-8">
                                <div className="text-5xl mb-4">⚙️</div>
                                <h3 className="font-bold text-base mb-2" style={{ color: 'var(--c-navy)' }}>Start Your Project</h3>
                                <p className="text-sm mb-6" style={{ color: 'var(--c-text-muted)' }}>Let our engineers design the perfect process package for your needs.</p>
                                <Link href="/contact" className="btn btn-primary w-full">Get in Touch</Link>
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
