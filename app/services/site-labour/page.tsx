import Link from 'next/link';

export default function SiteLabourPage() {
    return (
        <>
            <div className="page-hero">
                <div className="container page-hero-content">
                    <h1>Site Work & Labour Services</h1>
                    <div className="breadcrumb">
                        <Link href="/">Home</Link><span className="breadcrumb-sep">›</span>
                        <Link href="/services/basic-engineering">Services</Link><span className="breadcrumb-sep">›</span>
                        <span>Site Work & Labour Services</span>
                    </div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-14 items-start">
                        <div>
                            <h2 className="section-heading">Site Work &amp; <span>Labour Services</span></h2>
                            <p className="mt-5 leading-relaxed" style={{ color: 'var(--c-text-mid)' }}>
                                ChemSepT employs specialists for mechanical installation as well as cold and hot commissioning.
                                Our supervisors check the quality of delivered equipment and coordinate the erection works.
                            </p>
                            <p className="mt-4 leading-relaxed" style={{ color: 'var(--c-text-mid)' }}>
                                We provide highly skilled and experienced site personnel including engineers, supervisors, technicians
                                and skilled workers for all aspects of plant construction and commissioning. Our team follows strict
                                HSE protocols to ensure a safe working environment.
                            </p>
                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {['Site Supervision & Management', 'Mechanical Installation Specialists', 'Equipment Quality Inspection', 'Erection Coordination', 'Cold Commissioning Checks', 'Hot Commissioning Support', 'HSE Compliance Monitoring', 'Skilled Labour Provision', 'On-call Technical Support', 'Shutdown & Turnaround Services'].map(item => (
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
                                <div className="text-5xl mb-4">👷</div>
                                <h3 className="font-bold text-base mb-2" style={{ color: 'var(--c-navy)' }}>On-Site Support</h3>
                                <p className="text-sm mb-6" style={{ color: 'var(--c-text-muted)' }}>Expert workforce for all your site installation and commissioning needs.</p>
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
