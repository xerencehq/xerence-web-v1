type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Frequently asked', 'questions'];
export const mobileHeaderPhrase = ['Frequently', 'asked', 'questions'];
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
    question: 'What services does Xerence offer?',
    answer:
      'We specialize in AI-powered software development, technology consultancy, and custom-built digital products that prioritize security, innovation, and user experience.',
  },
  {
    question: 'Who are your solutions designed for?',
    answer:
      'Our solutions are built for startups, enterprises, and government organizations looking to innovate, scale securely, and stay ahead of the curve.',
  },
  {
    question: 'Do you offer fully custom software development?',
    answer:
      "Yes, we collaborate closely with clients to build tailored solutions from the ground up — whether it's a platform, mobile app, internal tool, or AI-driven system.",
  },
  {
    question: 'What industries do you work with?',
    answer:
      "We’re industry-agnostic but have experience across finance, health, e-commerce, education, and government sectors.",
  },
  {
    question: 'How does your AI integration work?',
    answer:
      "We leverage modern AI technologies to automate processes, enhance decision-making, and improve user interaction. We’ll work with you to determine the right models and architecture for your needs.",
  },
  {
    question: 'Is security a core part of your development process?',
    answer:
      "Absolutely. We integrate strong security practices at every stage — from architecture to deployment — using encryption, compliance standards, and secure coding techniques.",
  },
  {
    question: 'Can I consult with Xerence before starting a project?',
    answer:
      "Yes, we offer expert technology consulting to help define your vision, assess feasibility, and outline a strategic plan before development begins.",
  },
  {
    question: 'Do you work with existing systems or only build from scratch?',
    answer:
      "We do both. Whether you need to modernize an existing system, integrate AI into your workflows, or build a new solution, we can help.",
  },
  {
    question: 'How can I get started with Xerence?',
    answer:
      "Simply reach out through our email hello@xerence.com to request a free consultation. We’ll set up a discovery session to understand your needs and explore the best path forward.",
  },
];
