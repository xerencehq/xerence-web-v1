import { createMetadata } from '@/lib/seo';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { AboutHero, Story, Values, Team, Milestones } from '@/components/UI/AboutPage';
import CTASection from '@/components/UI/CTASection';
import { VALUES } from '@/data/values';
import { MILESTONES } from '@/data/milestones';
import { TEAM_MEMBERS, SHOW_TEAM_SECTION } from '@/data/team';

export const metadata = createMetadata({
  title: 'About Us',
  description:
    'Learn about Xerence Innovations - our story, values, team, and mission to build intelligent software solutions.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero
          title="About Xerence"
          subtitle="Building tomorrow's technology, today."
        />

        <Story />

        <Values values={VALUES} />

        {SHOW_TEAM_SECTION && <Team members={TEAM_MEMBERS} />}

        <Milestones milestones={MILESTONES} />

        <CTASection
          title="Want to work with us?"
          subtitle="Let's discuss how we can help bring your vision to life."
          buttonText="Book a Free Consultation"
          buttonHref="/book-consultation"
          showBenefits={false}
        />
      </main>
      <Footer />
    </>
  );
}
