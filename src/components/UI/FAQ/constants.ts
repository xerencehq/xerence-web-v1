type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Frequently Asked', 'Questions'];
export const mobileHeaderPhrase = ['Frequently', 'Asked', 'Questions'];

export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'How long does a typical project take?',
    answer:
      "Project timelines vary based on scope and complexity. A simple MVP might take 8-12 weeks, while larger enterprise solutions can span several months. We'll provide a detailed timeline during our consultation.",
  },
  {
    question: 'What technologies do you use?',
    answer:
      "We use modern, battle-tested technologies including React, Next.js, Node.js, Python, and cloud platforms like AWS and GCP. We select the best tools for each project's specific needs.",
  },
  {
    question: 'Do you provide ongoing support?',
    answer:
      'Yes! We offer maintenance and support packages to ensure your product continues to perform optimally after launch.',
  },
  {
    question: 'What does the consultation include?',
    answer:
      "Our free 30-minute consultation covers your project goals, technical requirements, timeline, and budget considerations. You'll receive actionable insights regardless of whether we work together.",
  },
  {
    question: 'What industries do you work with?',
    answer:
      "We're industry-agnostic but have experience across finance, health, e-commerce, education, and government sectors.",
  },
  {
    question: 'Is security a core part of your development process?',
    answer:
      'Absolutely. We integrate strong security practices at every stage — from architecture to deployment — using encryption, compliance standards, and secure coding techniques.',
  },
];
