import Link from 'next/link';

const pillars = [
    { icon: '🏆', title: 'Engineering Excellence', desc: 'Qualified professionals with hands-on experience in relevant fields of engineering & technology.' },
    { icon: '🔬', title: 'Innovation Driven', desc: 'Constantly evolving our methods and technologies to meet the highest standards of process engineering.' },
    { icon: '✅', title: 'Quality First', desc: 'We follow ASME, EN, IS, TEMA & API international standards across all our design and manufacturing.' },
    { icon: '⏱️', title: 'On-Time Delivery', desc: '"We do right things at right time with best quality at low cost at right time." — Our core promise.' },
];

export default function AboutPage() {
    return (
        <>
            <div className="page-hero">
                <div className="container page-hero-content">
                    <h1>About Us</h1>
                    <div className="breadcrumb">
                        <Link href="/">Home</Link>
                        <span className="breadcrumb-sep">›</span>
                        <span>About Us</span>
                    </div>
                </div>
            </div>

            {/* WHO WE ARE */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="section-heading">Who We <span>Are</span></h2>
                            <div className="mt-5 space-y-4">
                                <p className="leading-relaxed text-base" style={{ color: 'var(--c-text-mid)' }}>
                                    <strong style={{ color: 'var(--c-navy)' }}>"ChemSepT™ Engineering Pvt. Ltd."</strong> is a one-stop Engineering
                                    Consultancy that offers the complete range of Turn-Key Based Process &amp; Mechanical Engineering Solutions.
                                </p>
                                <p className="leading-relaxed text-base" style={{ color: 'var(--c-text-mid)' }}>
                                    ChemSepT™ is a team of qualified professionals having hands on experience in relevant field of
                                    engineering &amp; technology.
                                </p>
                                <p className="leading-relaxed text-base" style={{ color: 'var(--c-text-mid)' }}>
                                    ChemSepT™ delivers engineering services including:
                                </p>
                                <ul className="space-y-2">
                                    {['Feasibility Studies', 'Conceptual Engineering', 'Detailed Design', 'Project Management', 'Procurement', 'Construction Management', 'Commissioning & Startup', 'Operations & Maintenance Support'].map(item => (
                                        <li key={item} className="flex items-center gap-3 text-sm" style={{ color: 'var(--c-text-mid)' }}>
                                            <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                                                style={{ background: 'var(--c-coral)' }}>✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Quote + address block */}
                        <div className="flex flex-col gap-6">
                            <div className="rounded-2xl p-8 relative overflow-hidden" style={{ background: 'var(--c-navy)' }}>
                                <div className="text-5xl opacity-20 absolute top-4 left-6 font-serif">"</div>
                                <blockquote className="relative z-10 text-white text-lg font-semibold italic leading-relaxed">
                                    "We do right things at right time with best quality at low cost at right time."
                                </blockquote>
                                <p className="mt-4 text-white/50 text-sm relative z-10">— ChemSepT™ Core Motto</p>
                            </div>
                            <div className="card">
                                <h4 className="font-bold text-base mb-4" style={{ color: 'var(--c-navy)' }}>Contact Details</h4>
                                <div className="space-y-3 text-sm" style={{ color: 'var(--c-text-mid)' }}>
                                    <p className="flex items-start gap-3">
                                        <span>📍</span>
                                        <span><strong>Office:</strong> Rama Equator, Office No 612, Near Finolex Chowk, Morwadi, Pimpri Pune, India – 411 018</span>
                                    </p>
                                    <p className="flex items-start gap-3">
                                        <span>🏭</span>
                                        <span><strong>Factory:</strong> Gat No. 70, Jyotiba Nagar, Talawade, Pune – 411062</span>
                                    </p>
                                    <a href="tel:+917972840160" className="flex items-center gap-3 hover:text-[var(--c-coral)] transition-colors">
                                        📞 +91-7972-84-0160
                                    </a>
                                    <a href="mailto:info@chemsept.in" className="flex items-center gap-3 hover:text-[var(--c-coral)] transition-colors">
                                        ✉️ info@chemsept.in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE VALUES */}
            <section className="section" style={{ background: 'var(--c-slate)' }}>
                <div className="container">
                    <h2 className="section-heading heading-center">Our Core <span>Values</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                        {pillars.map(({ icon, title, desc }) => (
                            <div key={title} className="card text-center">
                                <div className="text-4xl mx-auto mb-4 w-16 h-16 rounded-2xl flex items-center justify-center"
                                    style={{ background: 'rgba(30,58,110,0.08)' }}>{icon}</div>
                                <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--c-navy)' }}>{title}</h3>
                                <p className="text-xs leading-relaxed" style={{ color: 'var(--c-text-muted)' }}>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CAPABILITIES */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="section-heading">Process Equipment Manufacturing <span>Expert</span></h2>
                            <p className="mt-5 leading-relaxed" style={{ color: 'var(--c-text-mid)' }}>
                                We follow all international standards Like ASME, EN, IS, TEMA &amp; API for manufacturing all
                                process equipment's. We have expertise in Designing and Manufacturing Pressure equipment with
                                TPI involvement to be exported in Various European and Asian Countries.
                            </p>
                            <p className="mt-4 leading-relaxed" style={{ color: 'var(--c-text-mid)' }}>
                                We have expertise in manufacturing PED, CE, and DOSH qualified equipment's. We offer various types of
                                Blending Vessels, Industrial Mixers, Chemical Manufacturing Plants, Pressure Vessels, Phase Separators,
                                Skid Mounted Refineries for Oil &amp; Gas Industries.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-6">
                                {['ASME', 'EN', 'IS', 'TEMA', 'API', 'PED', 'CE', 'DOSH'].map(std => (
                                    <span key={std} className="tag tag-navy">{std}</span>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: 'Blending Vessels', icon: '🧪' },
                                { label: 'Pressure Vessels', icon: '⚗️' },
                                { label: 'Distillation Columns', icon: '🏗️' },
                                { label: 'Heat Exchangers', icon: '🌡️' },
                                { label: 'Reactors & Storage', icon: '🔬' },
                                { label: 'Oil & Gas Equipment', icon: '⛽' },
                            ].map(({ label, icon }) => (
                                <div key={label} className="card text-center py-6">
                                    <div className="text-3xl mb-2">{icon}</div>
                                    <p className="text-xs font-semibold" style={{ color: 'var(--c-navy)' }}>{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 text-center" style={{ background: 'var(--c-navy)' }}>
                <div className="container">
                    <h2 className="text-white text-2xl font-bold mb-3">Want to Work With Us?</h2>
                    <p className="text-white/60 mb-7">Contact us today and let's discuss your project requirements.</p>
                    <Link href="/contact" className="btn btn-primary">Contact Us Now</Link>
                </div>
            </section>
        </>
    );
}
