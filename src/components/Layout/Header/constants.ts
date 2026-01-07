export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const CTA_LINK = {
  label: 'Book a Consultation',
  href: '/book-consultation',
} as const;

export type NavLink = (typeof NAV_LINKS)[number];
