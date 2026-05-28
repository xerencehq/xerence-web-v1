import { createMetadata } from '@/lib/seo';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Section } from '@/components/Common';
import CalendlyEmbedWrapper from '@/components/Common/CalendlyEmbed/CalendlyEmbedWrapper';
import { ConsultationHero, WhatToExpect, LeadQualifier } from '@/components/UI/ConsultationPage';

export const metadata = createMetadata({
  title: "Let's talk",
  description:
    "Book a 30-minute intro call. Tell us about your idea and we'll figure out if we're a fit. No pitch deck required.",
  path: '/book-meeting',
});

const CALENDLY_URL = 'https://calendly.com/xerence/30min';

export default function BookConsultationPage() {
  return (
    <>
      <Header />
      <main>
        <ConsultationHero
          title="Let's talk"
          subtitle="Tell us about your idea. We'll figure out the rest together."
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
