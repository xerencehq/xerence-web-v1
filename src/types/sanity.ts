import type { PortableTextBlock, Image } from 'sanity';

export interface SanitySlug {
  _type: 'slug';
  current: string;
}

export interface SanityImage extends Image {
  alt?: string;
}

export interface ProjectListItem {
  _id: string;
  title: string;
  slug: SanitySlug;
  description: string;
  techStack: string[];
  featuredImage?: SanityImage;
  clientName?: string;
  clientLogo?: SanityImage;
  isFeatured: boolean;
  publishedAt: string;
}

export interface Project extends ProjectListItem {
  problem?: PortableTextBlock[];
  solution?: PortableTextBlock[];
  outcomes?: string[];
  gallery?: SanityImage[];
  projectUrl?: string;
}

export interface SocialLinks {
  twitter?: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
}

export interface SiteSettings {
  siteName: string;
  siteDescription: string;
  logo?: SanityImage;
  socialLinks?: SocialLinks;
  contactEmail: string;
  contactPhone?: string;
  address?: string;
}
