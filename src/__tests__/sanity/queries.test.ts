import {
  allProjectsQuery,
  featuredProjectsQuery,
  projectBySlugQuery,
  projectSlugsQuery,
  siteSettingsQuery,
} from '@/sanity/lib/queries';

describe('Sanity Queries', () => {
  describe('allProjectsQuery', () => {
    it('should be a valid GROQ query string', () => {
      expect(typeof allProjectsQuery).toBe('string');
      expect(allProjectsQuery).toContain('*[_type == "project"]');
    });

    it('should order by publishedAt desc', () => {
      expect(allProjectsQuery).toContain('order(publishedAt desc)');
    });

    it('should select required fields', () => {
      expect(allProjectsQuery).toContain('_id');
      expect(allProjectsQuery).toContain('title');
      expect(allProjectsQuery).toContain('slug');
      expect(allProjectsQuery).toContain('description');
    });
  });

  describe('featuredProjectsQuery', () => {
    it('should filter for featured projects only', () => {
      expect(featuredProjectsQuery).toContain('isFeatured == true');
    });

    it('should limit to 4 results', () => {
      expect(featuredProjectsQuery).toContain('[0...4]');
    });
  });

  describe('projectBySlugQuery', () => {
    it('should filter by slug parameter', () => {
      expect(projectBySlugQuery).toContain('slug.current == $slug');
    });

    it('should return single result', () => {
      expect(projectBySlugQuery).toContain('[0]');
    });

    it('should include detailed fields', () => {
      expect(projectBySlugQuery).toContain('problem');
      expect(projectBySlugQuery).toContain('solution');
      expect(projectBySlugQuery).toContain('outcomes');
      expect(projectBySlugQuery).toContain('gallery');
    });
  });

  describe('projectSlugsQuery', () => {
    it('should select only slug.current', () => {
      expect(projectSlugsQuery).toContain('slug.current');
    });

    it('should filter for defined slugs', () => {
      expect(projectSlugsQuery).toContain('defined(slug.current)');
    });
  });

  describe('siteSettingsQuery', () => {
    it('should query siteSettings type', () => {
      expect(siteSettingsQuery).toContain('_type == "siteSettings"');
    });

    it('should return single result', () => {
      expect(siteSettingsQuery).toContain('[0]');
    });
  });
});
