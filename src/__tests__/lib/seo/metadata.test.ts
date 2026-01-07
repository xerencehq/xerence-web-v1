import { createMetadata, rootMetadata } from '@/lib/seo/metadata';

describe('SEO Metadata', () => {
  describe('createMetadata', () => {
    it('should create metadata with correct title format for non-homepage', () => {
      const metadata = createMetadata({
        title: 'Test Page',
        description: 'Test description',
        path: '/test',
      });

      expect(metadata.title).toBe('Test Page | Xerence Innovations');
    });

    it('should not append suffix for homepage', () => {
      const metadata = createMetadata({
        title: 'Xerence Innovations',
        description: 'Homepage description',
        path: '/',
      });

      expect(metadata.title).toBe('Xerence Innovations');
    });

    it('should set description', () => {
      const metadata = createMetadata({
        title: 'Test',
        description: 'This is a test description',
        path: '/test',
      });

      expect(metadata.description).toBe('This is a test description');
    });

    it('should set canonical URL in alternates', () => {
      const metadata = createMetadata({
        title: 'Test',
        description: 'Test',
        path: '/test',
      });

      expect(metadata.alternates?.canonical).toContain('/test');
    });

    it('should set metadataBase', () => {
      const metadata = createMetadata({
        title: 'Test',
        description: 'Test',
        path: '/test',
      });

      expect(metadata.metadataBase).toBeDefined();
    });

    it('should set OpenGraph data correctly', () => {
      const metadata = createMetadata({
        title: 'Test',
        description: 'Test description',
        path: '/test',
      });

      expect(metadata.openGraph?.title).toBe('Test | Xerence Innovations');
      expect(metadata.openGraph?.description).toBe('Test description');
      expect(metadata.openGraph?.siteName).toBe('Xerence Innovations');
      expect(metadata.openGraph?.locale).toBe('en_US');
      expect(metadata.openGraph?.type).toBe('website');
    });

    it('should set OpenGraph images with default og-image', () => {
      const metadata = createMetadata({
        title: 'Test',
        description: 'Test',
        path: '/test',
      });

      const images = metadata.openGraph?.images;
      expect(Array.isArray(images)).toBe(true);
      if (Array.isArray(images)) {
        expect(images[0]).toMatchObject({
          width: 1200,
          height: 630,
        });
      }
    });

    it('should use custom image when provided', () => {
      const customImage = 'https://example.com/custom-image.png';
      const metadata = createMetadata({
        title: 'Test',
        description: 'Test',
        path: '/test',
        image: customImage,
      });

      const images = metadata.openGraph?.images;
      expect(Array.isArray(images)).toBe(true);
      if (Array.isArray(images) && typeof images[0] === 'object') {
        expect(images[0].url).toBe(customImage);
      }
    });

    it('should set Twitter card data', () => {
      const metadata = createMetadata({
        title: 'Test',
        description: 'Test description',
        path: '/test',
      });

      expect(metadata.twitter?.card).toBe('summary_large_image');
      expect(metadata.twitter?.title).toBe('Test | Xerence Innovations');
      expect(metadata.twitter?.description).toBe('Test description');
    });

    it('should set robots to index and follow by default', () => {
      const metadata = createMetadata({
        title: 'Test',
        description: 'Test',
        path: '/test',
      });

      expect(metadata.robots).toEqual({ index: true, follow: true });
    });

    it('should handle noIndex flag', () => {
      const metadata = createMetadata({
        title: 'Private',
        description: 'Private page',
        path: '/private',
        noIndex: true,
      });

      expect(metadata.robots).toEqual({ index: false, follow: false });
    });
  });

  describe('rootMetadata', () => {
    it('should have title configuration with default and template', () => {
      expect(rootMetadata.title).toEqual({
        default: 'Xerence Innovations | Building Intelligent Software',
        template: '%s | Xerence Innovations',
      });
    });

    it('should have description', () => {
      expect(rootMetadata.description).toBeDefined();
      expect(typeof rootMetadata.description).toBe('string');
    });

    it('should have keywords array', () => {
      expect(Array.isArray(rootMetadata.keywords)).toBe(true);
      expect(rootMetadata.keywords?.length).toBeGreaterThan(0);
    });

    it('should have authors', () => {
      expect(Array.isArray(rootMetadata.authors)).toBe(true);
    });

    it('should have OpenGraph configuration', () => {
      expect(rootMetadata.openGraph?.type).toBe('website');
      expect(rootMetadata.openGraph?.locale).toBe('en_US');
      expect(rootMetadata.openGraph?.siteName).toBe('Xerence Innovations');
    });

    it('should have Twitter configuration', () => {
      expect(rootMetadata.twitter?.card).toBe('summary_large_image');
      expect(rootMetadata.twitter?.site).toBe('@xerence');
    });

    it('should have robots configuration', () => {
      expect(rootMetadata.robots).toBeDefined();
      expect(typeof rootMetadata.robots).toBe('object');
    });

    it('should disable format detection', () => {
      expect(rootMetadata.formatDetection).toEqual({
        email: false,
        address: false,
        telephone: false,
      });
    });
  });
});
