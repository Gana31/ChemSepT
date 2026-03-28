import { notFound } from 'next/navigation';
import { getAllProjects, getProjectBySlug } from '../projectsData';
import ProjectDetail from '@/components/ProjectDetail';

// Generate static params for all project slugs
export function generateStaticParams() {
    return getAllProjects().map(p => ({ slug: p.slug }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) return {};
    return {
        title: `${project.title} – ChemSepT Engineering`,
        description: project.description.split('\n')[0].slice(0, 160),
    };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) notFound();

    return (
        <ProjectDetail
            title={project.title}
            icon={project.icon}
            category={project.category}
            images={project.images}
            description={project.description}
            sections={project.sections}
        />
    );
}
