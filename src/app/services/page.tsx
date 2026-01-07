import { createMetadata } from '@/lib/seo';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Section } from '@/components/Common';
import { ServicesList } from '@/components/UI/ServicesPage';
import ServicesHero from '@/components/UI/ServicesPage/ServicesHero';
import CTASection from '@/components/UI/CTASection';
import { SERVICES } from '@/data/services';

export const metadata = createMetadata({
  title: 'Services',
  description:
    'End-to-end software development services including custom software, mobile apps, AI/ML solutions, cloud infrastructure, and more.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesHero
          title="Our Services"
          subtitle="End-to-end software solutions tailored to transform your ideas into reality."
        />

        <Section padding="lg">
          <ServicesList services={SERVICES} />
        </Section>

        <CTASection
          title="Not sure which service you need?"
          subtitle="Book a free consultation and we'll help you figure out the best approach for your project."
          buttonText="Book a Free Consultation"
          buttonHref="/book-consultation"
          showBenefits={false}
        />
      </main>
      <Footer />
    </>
  );
}
