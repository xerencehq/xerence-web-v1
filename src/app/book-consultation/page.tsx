import { createMetadata } from '@/lib/seo';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Section } from '@/components/Common';
import CalendlyEmbedWrapper from '@/components/Common/CalendlyEmbed/CalendlyEmbedWrapper';
import { ConsultationHero, WhatToExpect, LeadQualifier } from '@/components/UI/ConsultationPage';

export const metadata = createMetadata({
  title: 'Book a Free Consultation',
  description:
    'Schedule a free 30-minute consultation to discuss your project. No commitment required.',
  path: '/book-consultation',
});

const CALENDLY_URL = 'https://calendly.com/xerence/30min';

export default function BookConsultationPage() {
  return (
    <>
      <Header />
      <main>
        <ConsultationHero
          title="Book a Free Consultation"
          subtitle="Let's discuss how we can help bring your vision to life."
        />

        <Section padding="md" background="alt">
          <WhatToExpect />
        </Section>

        <Section padding="md">
          <LeadQualifier />
        </Section>

        <Section padding="lg" centered>
          <CalendlyEmbedWrapper url={CALENDLY_URL} />
        </Section>
      </main>
      <Footer />
    </>
  );
}
