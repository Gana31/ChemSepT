import Link from 'next/link';

const galleryItems = [
    { label: 'Jacketed Reactor', icon: '⚗️' },
    { label: 'Distillation Column', icon: '🏗️' },
    { label: 'Heat Exchanger', icon: '🌡️' },
    { label: 'Storage Tank', icon: '🛢️' },
    { label: 'Pressure Vessel', icon: '⚙️' },
    { label: 'Agitated Dryer', icon: '🔬' },
    { label: 'Evaporator System', icon: '💧' },
    { label: 'Static Mixer', icon: '➰' },
    { label: 'Industrial Scrubber', icon: '🌫️' },
    { label: 'Limpet Reactor', icon: '🧪' },
    { label: 'Oil Separator', icon: '⛽' },
    { label: 'Plant 3D Model', icon: '🏭' },
];

export default function GalleryPage() {
    return (
        <>
            <div className="page-hero">
                <div className="container page-hero-content">
                    <h1>Our Gallery</h1>
                    <div className="breadcrumb">
                        <Link href="/">Home</Link>
                        <span className="breadcrumb-sep">›</span>
                        <span>Gallery</span>
                    </div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="section-heading heading-center">Our <span>Gallery</span></h2>
                        <p className="mt-5 text-base max-w-xl mx-auto" style={{ color: 'var(--c-text-muted)' }}>
                            A visual showcase of our manufacturing capabilities, process equipment, and completed projects.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {galleryItems.map(({ label, icon }, i) => (
                            <div key={label}
                                className="group aspect-square rounded-2xl flex flex-col items-center justify-center gap-4 cursor-pointer transition-all duration-300 hover:-translate-y-2"
                                style={{
                                    background: i % 3 === 0 ? 'var(--c-slate)' : i % 3 === 1 ? 'rgba(30,58,110,0.06)' : 'rgba(248,109,112,0.06)',
                                    border: '1px solid var(--c-border)',
                                    boxShadow: 'var(--shadow-sm)',
                                }}>
                                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{icon}</span>
                                <p className="text-xs font-semibold text-center px-4" style={{ color: 'var(--c-navy)' }}>{label}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center p-10 rounded-2xl" style={{ background: 'var(--c-slate)', border: '1px solid var(--c-border)' }}>
                        <p className="text-base font-medium mb-4" style={{ color: 'var(--c-text-mid)' }}>
                            Want to see more of our work? Contact us for a detailed portfolio.
                        </p>
                        <Link href="/contact" className="btn btn-navy">Request Full Portfolio</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
