import { Metadata } from 'next';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Section } from '@/components/Common';
import { ProjectsHero, ProjectsGrid } from '@/components/UI/ProjectsPage';
import CTASection from '@/components/UI/CTASection';
import { getAllProjects } from '@/sanity/lib/fetch';

export const metadata: Metadata = {
  title: 'Projects | Xerence Innovations',
  description: 'Explore our portfolio of successful software projects. From AI-powered platforms to mobile apps and enterprise solutions.',
};

// Revalidate every hour
export const revalidate = 3600;

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <>
      <Header />
      <main>
        <ProjectsHero
          title="Our Projects"
          subtitle="Explore our portfolio of successful projects across industries."
        />

        <Section padding="lg">
          <ProjectsGrid projects={projects} />
        </Section>

        <CTASection
          title="Have a project in mind?"
          subtitle="Let's discuss how we can help bring your idea to life."
          buttonText="Book a Free Consultation"
          buttonHref="/book-consultation"
          showBenefits={false}
        />
      </main>
      <Footer />
    </>
  );
}
