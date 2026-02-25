import Link from 'next/link';

const products = [
    { name: 'Jacketed Reactors', icon: '⚗️', desc: 'Double-jacketed reactors for precise temperature control in chemical reactions.', href: '/products/jacketed-reactors' },
    { name: 'Limpet Reactors', icon: '🧪', desc: 'Limpet coil reactors with external heating/cooling coils for efficient heat transfer.', href: '/products/limpet-reactors' },
    { name: 'Agitators & Impellers', icon: '🔄', desc: 'Custom designed agitators and impellers for mixing, blending and dispersion.', href: '/products/agitators-impellers' },
    { name: 'Falling Film Evaporator', icon: '💧', desc: 'High-efficiency evaporators for concentration of heat-sensitive materials.', href: '/products/falling-film-evaporator' },
    { name: 'Forced Circulation Evaporator', icon: '🌀', desc: 'For processing high-viscosity or fouling-prone liquids at high evaporation rates.', href: '/products/forced-circulation-evaporator' },
    { name: 'Multi Effect Evaporator', icon: '♻️', desc: 'Energy-efficient systems for large-scale concentration and evaporation processes.', href: '/products/multi-effect-evaporator' },
    { name: 'Rising Film Evaporator', icon: '📈', desc: 'Vertical-tube evaporators for large volumes with low residence time requirements.', href: '/products/rising-film-evaporator' },
    { name: 'Wiped Film Evaporator', icon: '🔬', desc: 'Thin-film evaporators for heat-sensitive, high-boiling, or viscous products.', href: '/products/wiped-film-evaporator' },
    { name: 'Agitated Thin Film Dryer', icon: '🌡️', desc: 'For continuous drying and concentration of thermally sensitive materials.', href: '/products/agitated-thin-film-dryer' },
    { name: 'Distillation Auxiliary Equipment', icon: '🏭', desc: 'Reboilers, condensers, reflux drums and other distillation support equipment.', href: '/products/distillation-equipment' },
    { name: 'Pressure Vessels', icon: '⚙️', desc: 'ASME/EN-coded pressure vessels for storage and process applications.', href: '/products/pressure-vessels' },
    { name: 'Storage Tanks', icon: '🛢️', desc: 'API and IS standard storage tanks for liquid chemicals, solvents and gases.', href: '/products/pressure-vessels' },
    { name: 'Oil & Gas Separators', icon: '⛽', desc: 'Two and three-phase separators, internals and filter separators for O&G.', href: '/products/oil-gas-separators' },
    { name: 'Static Mixers', icon: '➰', desc: 'In-line static mixing elements for continuous blending without moving parts.', href: '/products/static-mixers' },
    { name: 'Heat Exchangers', icon: '🔥', desc: 'Shell & tube, plate, and spiral heat exchangers per TEMA and API standards.', href: '/products/heat-exchangers' },
    { name: 'Industrial Scrubbers', icon: '🌫️', desc: 'Wet scrubbers and packed towers for gas cleaning and air pollution control.', href: '/products/industrial-scrubbers' },
    { name: "Silo's & Hoppers", icon: '🏗️', desc: 'High-capacity chemical storage silos and hoppers for bulk solid handling.', href: '/products/silos-hoppers' },
];

export default function ProductsPage() {
    return (
        <>
            <div className="page-hero">
                <div className="container page-hero-content">
                    <h1>Our Products</h1>
                    <div className="breadcrumb">
                        <Link href="/">Home</Link>
                        <span className="breadcrumb-sep">›</span>
                        <span>Products</span>
                    </div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="max-w-3xl mb-12">
                        <h2 className="section-heading">Process Equipment Manufacturing <span>Expert</span></h2>
                        <p className="mt-5 leading-relaxed" style={{ color: 'var(--c-text-mid)' }}>
                            We follow all international standards Like ASME, EN, IS, TEMA &amp; API for manufacturing all process
                            equipment's. We have expertise in Designing and Manufacturing Pressure equipment with TPI involvement
                            to be exported in Various European and Asian Countries.
                        </p>
                        <p className="mt-4 leading-relaxed" style={{ color: 'var(--c-text-mid)' }}>
                            We have expertise in manufacturing PED, CE, and DOSH like qualified equipment's. We offer various types
                            of Blending Vessels with Agitator or magnetic mixers, Industrial Mixers, all types of organic-inorganic
                            Chemical Manufacturing Plants, Pressure Vessels, Phase Separators, Skid Mounted Refineries for Oil &amp;
                            Gas Industries, Lab based Mixing &amp; Distillation skids.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-6">
                            {['ASME', 'EN', 'IS', 'TEMA', 'API', 'PED', 'CE', 'DOSH'].map(std => (
                                <span key={std} className="tag tag-navy">{std}</span>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map(({ name, icon, desc, href }) => (
                            <div key={name} className="card group hover:shadow-[var(--shadow-md)] transition-all">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="icon-box text-2xl">{icon}</div>
                                    <h3 className="font-bold text-sm" style={{ color: 'var(--c-navy)' }}>{name}</h3>
                                </div>
                                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--c-text-muted)' }}>{desc}</p>
                                <Link href={href} className="text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all mt-auto"
                                    style={{ color: 'var(--c-coral)' }}>
                                    View Details →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 text-center" style={{ background: 'var(--c-navy)' }}>
                <div className="container">
                    <h2 className="text-white text-2xl font-bold mb-3">Need a Custom Product?</h2>
                    <p className="text-white/60 mb-7">We design and manufacture custom process equipment to your specifications.</p>
                    <Link href="/contact" className="btn btn-primary">Request a Quote</Link>
                </div>
            </section>
        </>
    );
}
