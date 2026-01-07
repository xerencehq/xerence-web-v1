import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import Hero from '@/components/UI/Hero';
import ValueProposition from '@/components/UI/ValueProposition';
import ServicesPreview from '@/components/UI/ServicesPreview';
import ProcessSection from '@/components/UI/ProcessSection';
import ProjectsShowcase from '@/components/UI/ProjectsShowcase';
import Testimonials from '@/components/UI/Testimonials';
import CTASection from '@/components/UI/CTASection';
import FAQ from '@/components/UI/FAQ';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <ServicesPreview />
        <ProcessSection />
        <ProjectsShowcase />
        <Testimonials />
        <CTASection />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
