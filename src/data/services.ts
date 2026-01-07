export interface Service {
  id: string;
  icon: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  technologies?: string[];
}

export const SERVICES: Service[] = [
  {
    id: 'custom-software',
    icon: 'code',
    title: 'Custom Software Development',
    shortDescription: 'Bespoke software solutions tailored to your unique business needs.',
    fullDescription: 'We build custom software that solves your specific challenges. From internal tools to customer-facing platforms, we create scalable, maintainable solutions that grow with your business.',
    benefits: [
      'Tailored to your exact requirements',
      'Scalable architecture for growth',
      'Full ownership of your codebase',
      'Ongoing support and maintenance',
    ],
    technologies: ['React', 'Node.js', 'Python', 'PostgreSQL', 'AWS'],
  },
  {
    id: 'mobile-apps',
    icon: 'mobile',
    title: 'Mobile App Development',
    shortDescription: 'Native and cross-platform mobile applications.',
    fullDescription: 'We create beautiful, performant mobile apps for iOS and Android. Whether you need a native app for maximum performance or a cross-platform solution for faster time-to-market, we deliver exceptional mobile experiences.',
    benefits: [
      'Native iOS and Android development',
      'Cross-platform with React Native',
      'Optimized for performance',
      'App Store submission support',
    ],
    technologies: ['React Native', 'Swift', 'Kotlin', 'Flutter'],
  },
  {
    id: 'ai-ml',
    icon: 'brain',
    title: 'AI/ML Solutions',
    shortDescription: 'Intelligent automation and machine learning integration.',
    fullDescription: 'Harness the power of artificial intelligence to automate processes, gain insights from data, and create intelligent features. We integrate cutting-edge AI/ML capabilities into your products.',
    benefits: [
      'Custom ML model development',
      'Natural language processing',
      'Computer vision solutions',
      'Predictive analytics',
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'AWS SageMaker'],
  },
  {
    id: 'cloud',
    icon: 'cloud',
    title: 'Cloud Infrastructure',
    shortDescription: 'Scalable, secure cloud architecture and DevOps.',
    fullDescription: 'We design and implement cloud infrastructure that scales with your needs. Our DevOps practices ensure reliable deployments, monitoring, and security.',
    benefits: [
      'Cloud architecture design',
      'Infrastructure as code',
      'CI/CD pipeline setup',
      '24/7 monitoring and alerts',
    ],
    technologies: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
  },
  {
    id: 'web-apps',
    icon: 'globe',
    title: 'Web Application Development',
    shortDescription: 'Modern, responsive web applications.',
    fullDescription: 'We build fast, accessible web applications using the latest technologies. From single-page applications to complex enterprise platforms, we deliver exceptional web experiences.',
    benefits: [
      'Modern React/Next.js development',
      'Responsive design',
      'Performance optimization',
      'SEO-friendly architecture',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'GraphQL'],
  },
  {
    id: 'api',
    icon: 'api',
    title: 'API Development & Integration',
    shortDescription: 'RESTful APIs and third-party integrations.',
    fullDescription: 'We design and build robust APIs that power your applications. We also integrate with third-party services to extend your capabilities.',
    benefits: [
      'RESTful API design',
      'GraphQL implementation',
      'Third-party integrations',
      'API documentation',
    ],
    technologies: ['Node.js', 'Python', 'GraphQL', 'REST', 'OAuth'],
  },
  {
    id: 'ui-ux',
    icon: 'design',
    title: 'UI/UX Design',
    shortDescription: 'User-centered design and prototyping.',
    fullDescription: 'We create intuitive, beautiful interfaces that users love. Our design process is grounded in research and validated through testing.',
    benefits: [
      'User research and testing',
      'Wireframing and prototyping',
      'Visual design systems',
      'Accessibility compliance',
    ],
    technologies: ['Figma', 'Adobe XD', 'Framer', 'Storybook'],
  },
  {
    id: 'consulting',
    icon: 'consulting',
    title: 'Technical Consulting',
    shortDescription: 'Architecture review and technology strategy.',
    fullDescription: 'Not sure where to start? Our consultants help you make informed technology decisions, review your architecture, and plan your roadmap.',
    benefits: [
      'Technology stack selection',
      'Architecture review',
      'Technical due diligence',
      'Roadmap planning',
    ],
    technologies: [],
  },
];
