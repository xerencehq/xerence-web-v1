import { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://xerence.com';

export interface PageMetadata {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
}

export const createMetadata = ({
  title,
  description,
  path,
  image,
  noIndex = false,
}: PageMetadata): Metadata => {
  const url = `${BASE_URL}${path}`;
  const fullTitle = path === '/' ? title : `${title} | Xerence Innovations`;
  const ogImage = image || `${BASE_URL}/og-image.png`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: 'Xerence Innovations',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
};

export const rootMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Xerence Innovations | Building Intelligent Software',
    template: '%s | Xerence Innovations',
  },
  description:
    'Xerence Innovations builds custom software, mobile apps, and AI solutions. Transform your ideas into reality with our expert team.',
  keywords: [
    'software development',
    'custom software',
    'mobile app development',
    'AI solutions',
    'machine learning',
    'cloud infrastructure',
    'web development',
    'tech consulting',
  ],
  authors: [{ name: 'Xerence Innovations' }],
  creator: 'Xerence Innovations',
  publisher: 'Xerence Innovations',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Xerence Innovations',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@xerence',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
