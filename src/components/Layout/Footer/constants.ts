export const FOOTER_LINKS = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Custom Software', href: '/services#custom-software' },
    { label: 'Mobile Apps', href: '/services#mobile-apps' },
    { label: 'AI/ML Solutions', href: '/services#ai-ml' },
    { label: 'Cloud Infrastructure', href: '/services#cloud' },
  ],
} as const;

export const SOCIAL_LINKS = [
  // { name: 'Twitter', href: 'https://twitter.com/xerence', icon: 'twitter' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/xerence', icon: 'linkedin' },
  // { name: 'GitHub', href: 'https://github.com/xerence', icon: 'github' },
] as const;

export const CONTACT_INFO = {
  email: 'hello@xerence.com',
  phone: '+1 (619) 853-7564',
  address: '1021 E Lincolnway Suite #9497, Cheyenne, Wyoming 82001, United States',
} as const;

export const COMPANY_INFO = {
  name: 'Xerence Innovations, Ltd.',
  tagline: 'Building the future of intelligent software',
  year: new Date().getFullYear(),
} as const;
