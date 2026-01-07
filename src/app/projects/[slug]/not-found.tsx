import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Section, H1, Button } from '@/components/Common';

export default function ProjectNotFound() {
  return (
    <>
      <Header />
      <main>
        <Section padding="xl" centered>
          <H1>Project Not Found</H1>
          <p style={{ color: '#9A9A9A', marginBottom: '2rem' }}>
            The project you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
          <Button href="/projects">View All Projects</Button>
        </Section>
      </main>
      <Footer />
    </>
  );
}
