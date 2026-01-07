import { createMetadata } from '@/lib/seo';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { ContactHero, ContactContent } from '@/components/UI/ContactPage';

export const metadata = createMetadata({
  title: 'Contact Us',
  description:
    'Get in touch with Xerence Innovations. Send us a message or book a free consultation to discuss your project.',
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
