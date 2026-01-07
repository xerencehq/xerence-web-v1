const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://xerence.com';

export interface OrganizationJsonLd {
  '@context': 'https://schema.org';
  '@type': 'Organization';
  name: string;
  url: string;
  logo: string;
  description: string;
  contactPoint: {
    '@type': 'ContactPoint';
    email: string;
    contactType: string;
  };
  sameAs: string[];
}

export const organizationJsonLd: OrganizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Xerence Innovations',
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description:
    'Xerence Innovations builds custom software, mobile apps, and AI solutions.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@xerence.com',
    contactType: 'customer service',
  },
  sameAs: [
    'https://twitter.com/xerence',
    'https://linkedin.com/company/xerence',
    'https://github.com/xerence',
  ],
};

export interface WebsiteJsonLd {
  '@context': 'https://schema.org';
  '@type': 'WebSite';
  name: string;
  url: string;
  potentialAction: {
    '@type': 'SearchAction';
    target: string;
    'query-input': string;
  };
}

export const websiteJsonLd: WebsiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Xerence Innovations',
  url: BASE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${BASE_URL}/projects?search={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export interface ServiceJsonLd {
  '@context': 'https://schema.org';
  '@type': 'Service';
  name: string;
  description: string;
  provider: {
    '@type': 'Organization';
    name: string;
  };
  serviceType: string;
}

export const createServiceJsonLd = (
  name: string,
  description: string,
  serviceType: string
): ServiceJsonLd => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  provider: {
    '@type': 'Organization',
    name: 'Xerence Innovations',
  },
  serviceType,
});

export interface ProjectJsonLd {
  '@context': 'https://schema.org';
  '@type': 'CreativeWork';
  name: string;
  description: string;
  url: string;
  image?: string;
  creator: {
    '@type': 'Organization';
    name: string;
  };
}

export const createProjectJsonLd = (
  name: string,
  description: string,
  slug: string,
  image?: string
): ProjectJsonLd => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name,
  description,
  url: `${BASE_URL}/projects/${slug}`,
  image,
  creator: {
    '@type': 'Organization',
    name: 'Xerence Innovations',
  },
});

// Helper to render JSON-LD script
export const renderJsonLd = <T extends object>(data: T): string => {
  return JSON.stringify(data);
};
