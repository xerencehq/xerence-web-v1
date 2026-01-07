import { groq } from 'next-sanity';

// Project queries
export const allProjectsQuery = groq`
  *[_type == "project"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    techStack,
    featuredImage,
    clientName,
    clientLogo,
    isFeatured,
    publishedAt
  }
`;

export const featuredProjectsQuery = groq`
  *[_type == "project" && isFeatured == true] | order(publishedAt desc)[0...4] {
    _id,
    title,
    slug,
    description,
    techStack,
    featuredImage,
    clientName,
    clientLogo,
    isFeatured,
    publishedAt
  }
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    problem,
    solution,
    outcomes,
    techStack,
    featuredImage,
    gallery,
    clientName,
    clientLogo,
    projectUrl,
    isFeatured,
    publishedAt
  }
`;

export const projectSlugsQuery = groq`
  *[_type == "project" && defined(slug.current)][].slug.current
`;

// Site settings queries
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteName,
    siteDescription,
    logo,
    socialLinks,
    contactEmail,
    contactPhone,
    address
  }
`;
