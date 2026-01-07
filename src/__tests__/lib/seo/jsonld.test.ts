import {
  organizationJsonLd,
  websiteJsonLd,
  createServiceJsonLd,
  createProjectJsonLd,
  renderJsonLd,
} from '@/lib/seo/jsonld';

describe('JSON-LD Structured Data', () => {
  describe('organizationJsonLd', () => {
    it('should have correct @context', () => {
      expect(organizationJsonLd['@context']).toBe('https://schema.org');
    });

    it('should have correct @type', () => {
      expect(organizationJsonLd['@type']).toBe('Organization');
    });

    it('should have organization name', () => {
      expect(organizationJsonLd.name).toBe('Xerence Innovations');
    });

    it('should have url', () => {
      expect(organizationJsonLd.url).toBeDefined();
      expect(typeof organizationJsonLd.url).toBe('string');
    });

    it('should have logo', () => {
      expect(organizationJsonLd.logo).toBeDefined();
      expect(organizationJsonLd.logo).toContain('logo.png');
    });

    it('should have description', () => {
      expect(organizationJsonLd.description).toBeDefined();
      expect(typeof organizationJsonLd.description).toBe('string');
    });

    it('should have contactPoint with correct type', () => {
      expect(organizationJsonLd.contactPoint).toBeDefined();
      expect(organizationJsonLd.contactPoint['@type']).toBe('ContactPoint');
      expect(organizationJsonLd.contactPoint.email).toBe('hello@xerence.com');
      expect(organizationJsonLd.contactPoint.contactType).toBe('customer service');
    });

    it('should have sameAs array with social links', () => {
      expect(Array.isArray(organizationJsonLd.sameAs)).toBe(true);
      expect(organizationJsonLd.sameAs.length).toBeGreaterThan(0);
    });
  });

  describe('websiteJsonLd', () => {
    it('should have correct @context', () => {
      expect(websiteJsonLd['@context']).toBe('https://schema.org');
    });

    it('should have correct @type', () => {
      expect(websiteJsonLd['@type']).toBe('WebSite');
    });

    it('should have name', () => {
      expect(websiteJsonLd.name).toBe('Xerence Innovations');
    });

    it('should have url', () => {
      expect(websiteJsonLd.url).toBeDefined();
    });

    it('should have search action', () => {
      expect(websiteJsonLd.potentialAction).toBeDefined();
      expect(websiteJsonLd.potentialAction['@type']).toBe('SearchAction');
    });

    it('should have search action target', () => {
      expect(websiteJsonLd.potentialAction.target).toContain('/projects?search=');
    });

    it('should have query-input specification', () => {
      expect(websiteJsonLd.potentialAction['query-input']).toBe(
        'required name=search_term_string'
      );
    });
  });

  describe('createServiceJsonLd', () => {
    it('should create service with correct @context', () => {
      const service = createServiceJsonLd(
        'Custom Software',
        'Description',
        'SoftwareDevelopment'
      );
      expect(service['@context']).toBe('https://schema.org');
    });

    it('should create service with correct @type', () => {
      const service = createServiceJsonLd(
        'Custom Software',
        'Description',
        'SoftwareDevelopment'
      );
      expect(service['@type']).toBe('Service');
    });

    it('should create service with name', () => {
      const service = createServiceJsonLd(
        'Custom Software Development',
        'Description',
        'SoftwareDevelopment'
      );
      expect(service.name).toBe('Custom Software Development');
    });

    it('should create service with description', () => {
      const service = createServiceJsonLd(
        'Custom Software',
        'Build custom software solutions',
        'SoftwareDevelopment'
      );
      expect(service.description).toBe('Build custom software solutions');
    });

    it('should create service with serviceType', () => {
      const service = createServiceJsonLd(
        'Custom Software',
        'Description',
        'SoftwareDevelopment'
      );
      expect(service.serviceType).toBe('SoftwareDevelopment');
    });

    it('should create service with provider organization', () => {
      const service = createServiceJsonLd(
        'Custom Software',
        'Description',
        'SoftwareDevelopment'
      );
      expect(service.provider['@type']).toBe('Organization');
      expect(service.provider.name).toBe('Xerence Innovations');
    });
  });

  describe('createProjectJsonLd', () => {
    it('should create project with correct @context', () => {
      const project = createProjectJsonLd(
        'Test Project',
        'Description',
        'test-project'
      );
      expect(project['@context']).toBe('https://schema.org');
    });

    it('should create project with correct @type', () => {
      const project = createProjectJsonLd(
        'Test Project',
        'Description',
        'test-project'
      );
      expect(project['@type']).toBe('CreativeWork');
    });

    it('should create project with name', () => {
      const project = createProjectJsonLd(
        'My Amazing Project',
        'Description',
        'amazing-project'
      );
      expect(project.name).toBe('My Amazing Project');
    });

    it('should create project with description', () => {
      const project = createProjectJsonLd(
        'Test Project',
        'This is an amazing project',
        'test-project'
      );
      expect(project.description).toBe('This is an amazing project');
    });

    it('should create project with correct URL using slug', () => {
      const project = createProjectJsonLd(
        'Test Project',
        'Description',
        'test-project'
      );
      expect(project.url).toContain('/projects/test-project');
    });

    it('should create project with image when provided', () => {
      const imageUrl = 'https://example.com/image.png';
      const project = createProjectJsonLd(
        'Test Project',
        'Description',
        'test-project',
        imageUrl
      );
      expect(project.image).toBe(imageUrl);
    });

    it('should create project without image when not provided', () => {
      const project = createProjectJsonLd(
        'Test Project',
        'Description',
        'test-project'
      );
      expect(project.image).toBeUndefined();
    });

    it('should create project with creator organization', () => {
      const project = createProjectJsonLd(
        'Test Project',
        'Description',
        'test-project'
      );
      expect(project.creator['@type']).toBe('Organization');
      expect(project.creator.name).toBe('Xerence Innovations');
    });
  });

  describe('renderJsonLd', () => {
    it('should stringify object to JSON', () => {
      const data = { test: 'value', number: 123 };
      const result = renderJsonLd(data);
      expect(result).toBe(JSON.stringify(data));
    });

    it('should handle nested objects', () => {
      const data = {
        '@context': 'https://schema.org',
        nested: { key: 'value' },
      };
      const result = renderJsonLd(data);
      expect(result).toBe(JSON.stringify(data));
    });

    it('should handle arrays', () => {
      const data = { items: [1, 2, 3] };
      const result = renderJsonLd(data);
      expect(result).toBe(JSON.stringify(data));
    });

    it('should produce valid JSON', () => {
      const result = renderJsonLd(organizationJsonLd);
      expect(() => JSON.parse(result)).not.toThrow();
    });
  });
});
