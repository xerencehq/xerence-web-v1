import { Metadata } from 'next';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Section } from '@/components/Common';
import CalendlyEmbed from '@/components/Common/CalendlyEmbed';
import { ConsultationHero, WhatToExpect, LeadQualifier } from '@/components/UI/ConsultationPage';

export const metadata: Metadata = {
  title: 'Book a Free Consultation | Xerence Innovations',
  description: 'Schedule a free 30-minute consultation to discuss your project. No commitment required.',
};

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
          <CalendlyEmbed url={CALENDLY_URL} />
        </Section>
      </main>
      <Footer />
    </>
  );
}
