import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Section } from '@/components/Common';
import {
  ProjectHero,
  ProjectContent,
  ProjectSidebar,
  ProjectGallery,
  ProjectLayout,
} from '@/components/UI/ProjectDetail';
import CTASection from '@/components/UI/CTASection';
import { getProjectBySlug, getProjectSlugs } from '@/sanity/lib/fetch';
import { urlForImage } from '@/sanity/lib/image';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static paths for all projects
export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for each project
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found | Xerence Innovations',
    };
  }

  const imageUrl = project.featuredImage
    ? urlForImage(project.featuredImage)?.width(1200).height(630).url()
    : undefined;

  return {
    title: `${project.title} | Projects | Xerence Innovations`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

// Revalidate every hour
export const revalidate = 3600;

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const hasContent =
    (project.problem && project.problem.length > 0) ||
    (project.solution && project.solution.length > 0) ||
    (project.outcomes && project.outcomes.length > 0);

  return (
    <>
      <Header />
      <main>
        <ProjectHero project={project} />

        {hasContent && (
          <Section padding="lg">
            <ProjectLayout>
              <ProjectContent project={project} />
              <ProjectSidebar project={project} />
            </ProjectLayout>
          </Section>
        )}

        {project.gallery && project.gallery.length > 0 && (
          <Section padding="md" background="alt">
            <ProjectGallery
              images={project.gallery}
              projectTitle={project.title}
            />
          </Section>
        )}

        <CTASection
          title="Want to build something similar?"
          subtitle="Let's discuss how we can create something amazing for you."
          buttonText="Book a Free Consultation"
          buttonHref="/book-consultation"
          showBenefits={false}
        />
      </main>
      <Footer />
    </>
  );
}
