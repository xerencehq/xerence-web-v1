export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const CTA_LINK = {
  label: "Let's talk",
  href: '/book-meeting',
} as const;

export type NavLink = (typeof NAV_LINKS)[number];
