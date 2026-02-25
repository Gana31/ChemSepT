import Link from 'next/link';

const services = [
  {
    icon: '📋',
    title: 'Basic Engineering Packages',
    desc: 'BEP is designed so that all important engineering & technology information can efficiently and successfully be transferred to Clients.',
    href: '/services/basic-engineering',
  },
  {
    icon: '⚙️',
    title: 'Process Detailed Engineering',
    desc: 'A "Completed Process Design Package" that includes all necessary information required by an Engineering/Construction firm.',
    href: '/services/process-engineering',
  },
  {
    icon: '🔗',
    title: 'Procurement & Vendor Sourcing',
    desc: 'We believe in procuring right things at right time with best quality at low cost at the right time of project schedule/execution.',
    href: '/services/procurement',
  },
  {
    icon: '🏗️',
    title: '3D Plant Modeling',
    desc: 'Piping design, Stress analysis and 3D modelling of pharmaceutical, chemical, petrochemical and petroleum plant.',
    href: '/services/3d-modeling',
  },
  {
    icon: '🔧',
    title: 'Construction, Erection & Commissioning',
    desc: 'We can self-perform construction or act as the construction manager on both large and small sized projects.',
    href: '/services/construction',
  },
  {
    icon: '👷',
    title: 'Site Work & Labour Services',
    desc: 'Specialists for mechanical installation as well as cold and hot commissioning with quality checks and coordination.',
    href: '/services/site-labour',
  },
];

const products = [
  { name: 'Jacketed Reactors', href: '/products/jacketed-reactors' },
  { name: 'Limpet Reactors', href: '/products/limpet-reactors' },
  { name: 'Agitators & Impellers', href: '/products/agitators-impellers' },
  { name: 'Falling Film Evaporator', href: '/products/falling-film-evaporator' },
  { name: 'Forced Circulation Evap.', href: '/products/forced-circulation-evaporator' },
  { name: 'Multi Effect Evaporator', href: '/products/multi-effect-evaporator' },
  { name: 'Rising Film Evaporator', href: '/products/rising-film-evaporator' },
  { name: 'Wiped Film Evaporator', href: '/products/wiped-film-evaporator' },
  { name: 'Agitated Thin Film Dryer', href: '/products/agitated-thin-film-dryer' },
  { name: 'Distillation Equipment', href: '/products/distillation-equipment' },
  { name: 'Pressure Vessels', href: '/products/pressure-vessels' },
  { name: 'Storage Tanks', href: '/products/pressure-vessels' },
  { name: 'Oil & Gas Separators', href: '/products/oil-gas-separators' },
  { name: 'Static Mixers', href: '/products/static-mixers' },
  { name: 'Heat Exchangers', href: '/products/heat-exchangers' },
  { name: 'Industrial Scrubbers', href: '/products/industrial-scrubbers' },
  { name: "Silo's & Hoppers", href: '/products/silos-hoppers' },
];

const clients = ['Eternis', 'Tecnova', 'BT Group', '21st Century Energy', 'ATEE'];

const stats = [
  { value: '100+', label: 'Projects Completed' },
  { value: '50+', label: 'Happy Clients' },
  { value: '17+', label: 'Product Categories' },
  { value: '10+', label: 'Years Experience' },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden" style={{ minHeight: '540px', background: 'linear-gradient(135deg, #0f2044 0%, var(--c-navy) 50%, #1a3a7e 100%)' }}>
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, var(--c-coral) 0%, transparent 70%)' }} />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #4fc3f7 0%, transparent 70%)' }} />

        <div className="container relative z-10 flex flex-col items-center justify-center text-center py-24 gap-5">
          <span className="tag tag-coral" style={{ background: 'rgba(248,109,112,0.2)', color: '#ffa0a2', border: '1px solid rgba(248,109,112,0.3)' }}>
            ChemSepT™ Engineering Pvt. Ltd.
          </span>
          <h1 className="text-white text-5xl lg:text-6xl font-black leading-tight tracking-tight max-w-4xl">
            Leaders in<br />
            <span style={{ color: 'var(--c-coral)' }}>Separation Technology</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            Engineering │ Process Design │ Manufacturing │ Procurement │ Service │ Commissioning
          </p>
          <p className="text-white/50 text-base max-w-xl leading-relaxed">
            Complete Turnkey Solutions Expert — One Stop Solution Provider — Making Technology Easy
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-3">
            <Link href="/products" className="btn btn-primary">View Our Products</Link>
            <Link href="/contact" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>Get In Touch</Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 border-t border-white/10" style={{ background: 'rgba(0,0,0,0.25)' }}>
          <div className="container grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map(({ value, label }) => (
              <div key={label} className="py-5 px-6 text-center">
                <div className="text-2xl font-black text-white">{value}</div>
                <div className="text-white/50 text-xs mt-1 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== QUICK LINKS ===== */}
      <section className="py-14" style={{ background: 'var(--c-slate)' }}>
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '🛠️', title: 'Services', href: '/services/basic-engineering', desc: 'High value engineering, cost-effective Engineering, Design Drafting and 3D Modeling Services.' },
            { icon: '🏭', title: 'Products', href: '/products', desc: 'Complete design & supply of Oil-Gas & Chemical Process equipment — ASME, EN, IS, TEMA & API standards.' },
            { icon: '💡', title: 'Technology', href: '/technology', desc: 'Expert technical team in Chemical Process, Heat Transfer, Mass Transfer, Oil & Gas, and more.' },
          ].map(({ icon, title, href, desc }) => (
            <div key={title} className="card flex gap-5 items-start">
              <div className="icon-box text-2xl shrink-0" style={{ width: 60, height: 60, fontSize: '1.8rem' }}>{icon}</div>
              <div>
                <h3 className="text-base font-bold mb-1.5" style={{ color: 'var(--c-navy)' }}>{title}</h3>
                <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--c-text-muted)' }}>{desc}</p>
                <Link href={href} className="text-sm font-semibold" style={{ color: 'var(--c-coral)' }}>
                  View Page →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WELCOME SECTION ===== */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-heading">Welcome to <span>ChemSepT™</span></h2>
              <div className="mt-4 space-y-4">
                <p className="leading-relaxed" style={{ color: 'var(--c-text-mid)' }}>
                  <strong style={{ color: 'var(--c-navy)' }}>"ChemSepT™ Engineering Pvt. Ltd."</strong> is a one-stop Engineering Consultancy
                  that offers the complete range of Turn-Key Based Process &amp; Mechanical Engineering Solutions.
                </p>
                <p className="leading-relaxed" style={{ color: 'var(--c-text-mid)' }}>
                  ChemSepT™ is a team of qualified professionals having hands on experience in relevant field of
                  engineering &amp; technology.
                </p>
                <p className="leading-relaxed" style={{ color: 'var(--c-text-mid)' }}>
                  ChemSepT™ delivers engineering services including Feasibility Studies, Conceptual Engineering,
                  Detailed Design, Project Management, Procurement, Construction Management, Commissioning &amp; Startup,
                  as well as Operations &amp; Maintenance support.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {['Turn-Key Solutions', 'International Standards (ASME, EN)', 'PED & CE Certified', 'Export-Ready Equipment'].map(feat => (
                  <div key={feat} className="flex items-start gap-2">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
                      style={{ background: 'var(--c-coral)' }}>✓</span>
                    <span className="text-sm font-medium" style={{ color: 'var(--c-text)' }}>{feat}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn btn-navy mt-8 inline-flex">Learn More About Us</Link>
            </div>
            {/* Visual panel */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-lg)]" style={{ background: 'var(--c-slate)', border: '1px solid var(--c-border)', minHeight: 380 }}>
                <div className="h-full flex flex-col items-center justify-center gap-6 p-10 text-center">
                  <div className="text-6xl">🏭</div>
                  <h3 className="text-xl font-bold" style={{ color: 'var(--c-navy)' }}>State-of-the-art Manufacturing</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--c-text-muted)' }}>
                    Our facility in Pune follows all international standards for manufacturing process equipment
                    with TPI involvement for export to European and Asian countries.
                  </p>
                  <div className="grid grid-cols-3 gap-4 w-full mt-4">
                    {['🧪', '⚗️', '🔬'].map((e, i) => (
                      <div key={i} className="rounded-xl p-4 flex flex-col items-center gap-2"
                        style={{ background: 'rgba(30,58,110,0.06)', border: '1px solid var(--c-border)' }}>
                        <span className="text-2xl">{e}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 rounded-2xl p-4 shadow-[var(--shadow-lg)] text-center"
                style={{ background: 'var(--c-navy)', minWidth: 110 }}>
                <div className="text-2xl font-black text-white">100+</div>
                <div className="text-white/60 text-[0.65rem] font-medium mt-1">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR SERVICES ===== */}
      <section className="section" style={{ background: 'var(--c-slate)' }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-heading heading-center">Our <span>Services</span></h2>
            <p className="mt-6 text-base max-w-2xl mx-auto" style={{ color: 'var(--c-text-muted)' }}>
              Comprehensive engineering services from concept to commissioning
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon, title, desc, href }) => (
              <div key={title} className="card group">
                <div className="icon-box mb-5">{icon}</div>
                <h3 className="font-bold text-base mb-3" style={{ color: 'var(--c-navy)' }}>{title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--c-text-muted)' }}>{desc}</p>
                <Link href={href} className="text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
                  style={{ color: 'var(--c-coral)' }}>
                  Read More <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR PRODUCTS ===== */}
      <section className="section">
        <div className="container">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <h2 className="section-heading">Our <span>Products</span></h2>
            <Link href="/products" className="btn btn-outline" style={{ padding: '10px 22px', fontSize: '0.85rem' }}>
              View All Products
            </Link>
          </div>
          <p className="mb-8 text-base max-w-3xl" style={{ color: 'var(--c-text-mid)' }}>
            We follow all international standards like ASME, EN, IS, TEMA &amp; API for manufacturing all process equipment's.
            We have expertise in Designing and Manufacturing Pressure equipment with TPI involvement to be exported in various
            European and Asian Countries.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {products.slice(0, 15).map(({ name, href }) => (
              <Link key={name} href={href}
                className="rounded-xl p-4 text-sm font-medium text-center transition-all duration-200 hover:-translate-y-1"
                style={{ background: 'var(--c-slate)', border: '1px solid var(--c-border)', color: 'var(--c-navy)', boxShadow: 'var(--shadow-sm)' }}>
                {name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR CLIENTS ===== */}
      <section className="section-sm" style={{ background: 'var(--c-slate)', borderTop: '1px solid var(--c-border)' }}>
        <div className="container">
          <h2 className="section-heading heading-center mb-10">Our <span>Clients</span></h2>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {clients.map(name => (
              <div key={name}
                className="px-8 py-5 rounded-xl font-bold text-lg transition-all duration-200 hover:-translate-y-1"
                style={{ background: '#fff', border: '1px solid var(--c-border)', color: 'var(--c-navy)', boxShadow: 'var(--shadow-sm)' }}>
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA STRIP ===== */}
      <section className="py-16" style={{ background: 'var(--c-navy)' }}>
        <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-white text-2xl font-bold mb-2">Ready to Start Your Project?</h2>
            <p className="text-white/60">Talk with our Executive for Best Deals.</p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <a href="tel:+917972840160" className="btn btn-primary">📞 Call Us Now</a>
            <Link href="/contact" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>Enquire Online</Link>
          </div>
        </div>
      </section>
    </>
  );
}
