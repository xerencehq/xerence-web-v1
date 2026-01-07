import { Metadata } from 'next';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { ContactHero, ContactContent } from '@/components/UI/ContactPage';

export const metadata: Metadata = {
  title: 'Contact Us | Xerence Innovations',
  description: 'Get in touch with Xerence Innovations. Send us a message or book a free consultation to discuss your project.',
};

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
