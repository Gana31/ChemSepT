import Link from 'next/link';
import { projectCategories } from './projectsData';

const categoryColors: Record<string, string> = {
    petroleum: '#d97706',
    pharma: '#7c3aed',
    chemical: '#0891b2',
    dryer: '#dc2626',
};

export default function ProjectsPage() {
    return (
        <>
            <div className="page-hero">
                <div className="container page-hero-content">
                    <h1>Our Projects</h1>
                    <div className="breadcrumb">
                        <Link href="/">Home</Link>
                        <span className="breadcrumb-sep">›</span>
                        <span>Projects</span>
                    </div>
                </div>
            </div>

            {projectCategories.map((cat, ci) => (
                <section key={cat.slug} className={ci % 2 === 0 ? 'section' : 'section'} style={{ background: ci % 2 === 1 ? 'var(--c-slate)' : 'var(--c-white)' }}>
                    <div className="container">
                        {/* Category heading */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="icon-box text-3xl" style={{
                                width: 56, height: 56,
                                background: `${categoryColors[cat.slug]}15`,
                            }}>
                                {cat.icon}
                            </div>
                            <div>
                                <h2 className="section-heading">{cat.name}</h2>
                                <p className="text-sm mt-1" style={{ color: 'var(--c-text-muted)' }}>{cat.projects.length} project{cat.projects.length > 1 ? 's' : ''}</p>
                            </div>
                        </div>

                        {/* Project cards grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {cat.projects.map((proj, pi) => (
                                <Link href={`/projects/${proj.slug}`} key={proj.slug}
                                    className="card group cursor-pointer"
                                    style={{ animationDelay: `${pi * 80}ms` }}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                                            style={{ background: `${categoryColors[cat.slug]}15` }}>
                                            {proj.icon}
                                        </div>
                                        <h3 className="font-bold text-sm" style={{ color: 'var(--c-text)' }}>{proj.title}</h3>
                                    </div>
                                    <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--c-text-mid)' }}>
                                        {proj.description.split('\n')[0].slice(0, 150)}…
                                    </p>
                                    <span className="text-xs font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                                        style={{ color: 'var(--c-coral)' }}>
                                        Learn More <span>→</span>
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
}
