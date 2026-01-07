/**
 * @jest-environment jsdom
 */

// Mock the environment variable before importing the module
const mockGaId = 'G-TEST123456';

describe('Google Analytics gtag', () => {
  // Store original values
  const originalEnv = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  let originalWindow: Window & typeof globalThis;
  let mockGtag: jest.Mock;

  beforeEach(() => {
    // Reset modules to ensure fresh imports
    jest.resetModules();

    // Set up environment variable
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = mockGaId;

    // Store original window
    originalWindow = global.window;

    // Set up mock gtag
    mockGtag = jest.fn();
    Object.defineProperty(global, 'window', {
      value: {
        ...global.window,
        gtag: mockGtag,
        dataLayer: [],
      },
      writable: true,
    });
  });

  afterEach(() => {
    // Restore original values
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = originalEnv;
    global.window = originalWindow;
    jest.clearAllMocks();
  });

  describe('GA_MEASUREMENT_ID', () => {
    it('should export the measurement ID from environment', async () => {
      const { GA_MEASUREMENT_ID } = await import('@/lib/analytics/gtag');
      expect(GA_MEASUREMENT_ID).toBe(mockGaId);
    });
  });

  describe('isAnalyticsAvailable', () => {
    it('should return true when window, gtag, and GA_MEASUREMENT_ID exist', async () => {
      const { isAnalyticsAvailable } = await import('@/lib/analytics/gtag');
      expect(isAnalyticsAvailable()).toBe(true);
    });

    it('should return false when gtag is not defined', async () => {
      delete (window as unknown as Record<string, unknown>).gtag;
      const { isAnalyticsAvailable } = await import('@/lib/analytics/gtag');
      expect(isAnalyticsAvailable()).toBe(false);
    });

    it('should return false when GA_MEASUREMENT_ID is not set', async () => {
      jest.resetModules();
      process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID = '';
      const { isAnalyticsAvailable } = await import('@/lib/analytics/gtag');
      expect(isAnalyticsAvailable()).toBe(false);
    });
  });

  describe('pageview', () => {
    it('should call gtag with config command and page_path', async () => {
      const { pageview } = await import('@/lib/analytics/gtag');
      pageview('/test-page');

      expect(mockGtag).toHaveBeenCalledWith('config', mockGaId, {
        page_path: '/test-page',
      });
    });

    it('should not throw when analytics is unavailable', async () => {
      delete (window as unknown as Record<string, unknown>).gtag;
      jest.resetModules();
      const { pageview } = await import('@/lib/analytics/gtag');

      expect(() => {
        pageview('/test-page');
      }).not.toThrow();
    });
  });

  describe('event', () => {
    it('should call gtag with event command and parameters', async () => {
      const { event } = await import('@/lib/analytics/gtag');
      event('test_action', 'test_category', 'test_label', 100);

      expect(mockGtag).toHaveBeenCalledWith('event', 'test_action', {
        event_category: 'test_category',
        event_label: 'test_label',
        value: 100,
      });
    });

    it('should call gtag without optional parameters', async () => {
      const { event } = await import('@/lib/analytics/gtag');
      event('test_action', 'test_category');

      expect(mockGtag).toHaveBeenCalledWith('event', 'test_action', {
        event_category: 'test_category',
        event_label: undefined,
        value: undefined,
      });
    });

    it('should not throw when analytics is unavailable', async () => {
      delete (window as unknown as Record<string, unknown>).gtag;
      jest.resetModules();
      const { event } = await import('@/lib/analytics/gtag');

      expect(() => {
        event('test_action', 'test_category', 'test_label', 100);
      }).not.toThrow();
    });
  });

  describe('trackConversion', () => {
    it('should call gtag with conversion event', async () => {
      const { trackConversion } = await import('@/lib/analytics/gtag');
      trackConversion('AW-123456789/AbCdEfGh', 50);

      expect(mockGtag).toHaveBeenCalledWith('event', 'conversion', {
        send_to: 'AW-123456789/AbCdEfGh',
        value: 50,
      });
    });

    it('should call gtag without value when not provided', async () => {
      const { trackConversion } = await import('@/lib/analytics/gtag');
      trackConversion('AW-123456789/AbCdEfGh');

      expect(mockGtag).toHaveBeenCalledWith('event', 'conversion', {
        send_to: 'AW-123456789/AbCdEfGh',
        value: undefined,
      });
    });

    it('should not throw when analytics is unavailable', async () => {
      delete (window as unknown as Record<string, unknown>).gtag;
      jest.resetModules();
      const { trackConversion } = await import('@/lib/analytics/gtag');

      expect(() => {
        trackConversion('AW-123456789/AbCdEfGh');
      }).not.toThrow();
    });
  });
});
