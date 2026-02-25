import Link from 'next/link';

export default function ProcurementPage() {
    return (
        <>
            <div className="page-hero">
                <div className="container page-hero-content">
                    <h1>Procurement & Vendor Sourcing</h1>
                    <div className="breadcrumb">
                        <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
                        <Link href="/services/basic-engineering">Services</Link><span className="breadcrumb-sep">›</span>
                        <span>Procurement & Vendor Sourcing</span>
                    </div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-14 items-start">
                        <div>
                            <h2 className="section-heading">Procurement &amp; <span>Vendor Sourcing</span></h2>
                            <p className="mt-5 leading-relaxed" style={{ color: 'var(--c-text-mid)' }}>
                                ChemSepT™ believes in procuring right things at right time with best quality at low cost at right time of
                                project schedule/execution.
                            </p>
                            <p className="mt-4 leading-relaxed" style={{ color: 'var(--c-text-mid)' }}>
                                Our procurement services encompass everything from vendor identification and qualification through to
                                purchase order placement, expediting, inspection, and logistics management. We leverage our extensive
                                network of qualified vendors to ensure the best value for your project.
                            </p>
                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {['Vendor Identification & Qualification', 'Request for Quotation (RFQ)', 'Technical Bid Evaluation', 'Commercial Negotiations', 'Purchase Order Management', 'Expediting & Follow-up', 'Inspection & Quality Control', 'Import & Logistics Support'].map(item => (
                                    <div key={item} className="flex items-start gap-3 p-3 rounded-lg" style={{ background: 'var(--c-slate)', border: '1px solid var(--c-border)' }}>
                                        <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5"
                                            style={{ background: 'var(--c-coral)' }}>✓</span>
                                        <span className="text-sm font-medium" style={{ color: 'var(--c-text)' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className="card text-center py-8">
                                <div className="text-5xl mb-4">🔗</div>
                                <h3 className="font-bold text-base mb-2" style={{ color: 'var(--c-navy)' }}>Vendor Support</h3>
                                <p className="text-sm mb-6" style={{ color: 'var(--c-text-muted)' }}>Let us handle your procurement with our trusted vendor network.</p>
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
