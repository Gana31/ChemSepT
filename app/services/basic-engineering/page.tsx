import Link from 'next/link';

const deliverables = [
    'Project Design Basis', 'Process Description', 'Equipment List',
    'Basic Process Diagrams (BFD, PFD and P&ID)', 'Process Equipment Datasheets',
    'Instrument & Valves Technical Datasheets', 'Instrument & Pipe Fittings List',
    'Piping Specifications', 'Control Philosophy & Logic Diagram',
    'Utility Stream Design & Consumptions', 'Effluent Stream List & Design',
];

export default function BasicEngineeringPage() {
    return (
        <>
            <div className="page-hero">
                <div className="container page-hero-content">
                    <h1>Basic Engineering Packages</h1>
                    <div className="breadcrumb">
                        <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
                        <Link href="/services/basic-engineering">Services</Link><span className="breadcrumb-sep">›</span>
                        <span>Basic Engineering Packages</span>
                    </div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-14 items-start">
                        <div>
                            <h2 className="section-heading">Basic Engineering <span>Packages (BEP)</span></h2>
                            <p className="mt-5 leading-relaxed" style={{ color: 'var(--c-text-mid)' }}>
                                ChemSepT™ Basic Engineering Package (BEP) is designed so that all important engineering &amp; technology
                                information can efficiently and successfully be transferred to Clients.
                            </p>
                            <p className="mt-4 leading-relaxed" style={{ color: 'var(--c-text-mid)' }}>
                                Our BEP provides a complete roadmap of the process, enabling clients and their engineering contractors to
                                understand the intended scope, design intent, safety requirements and technical integrity of the project.
                            </p>
                            <div className="mt-8">
                                <h3 className="font-bold text-base mb-4" style={{ color: 'var(--c-navy)' }}>BEP Includes:</h3>
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
                                <div className="text-5xl mb-4">📋</div>
                                <h3 className="font-bold text-base mb-2" style={{ color: 'var(--c-navy)' }}>Get Your BEP</h3>
                                <p className="text-sm mb-6" style={{ color: 'var(--c-text-muted)' }}>Ready to get started? Contact us for a detailed proposal.</p>
                                <Link href="/contact" className="btn btn-primary w-full">Enquire Now</Link>
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
