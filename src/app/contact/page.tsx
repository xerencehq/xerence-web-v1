import { createMetadata } from '@/lib/seo';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { ContactHero, ContactContent } from '@/components/UI/ContactPage';

export const metadata = createMetadata({
  title: 'Contact Us',
  description:
    "Get in touch with Xerence. Send us a message or book a 30-minute intro call to talk through your project.",
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero
          title="Get in Touch"
          subtitle="Have a question or want to work together? We'd love to hear from you."
        />

        <ContactContent />
      </main>
      <Footer />
    </>
  );
}
