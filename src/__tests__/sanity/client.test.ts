import { client, getClient } from '@/sanity/lib/client';

// Mock the environment variables
jest.mock('@/sanity/env', () => ({
  projectId: 'test-project-id',
  dataset: 'test-dataset',
  apiVersion: '2024-01-01',
  useCdn: false,
}));

describe('Sanity Client', () => {
  describe('client', () => {
    it('should be defined', () => {
      expect(client).toBeDefined();
    });

    it('should have fetch method', () => {
      expect(typeof client.fetch).toBe('function');
    });
  });

  describe('getClient', () => {
    it('should return client when preview is false', () => {
      const result = getClient(false);
      expect(result).toBeDefined();
    });

    it('should return client when preview is undefined', () => {
      const result = getClient();
      expect(result).toBeDefined();
    });
  });
});
