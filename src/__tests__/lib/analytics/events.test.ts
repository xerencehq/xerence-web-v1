/**
 * @jest-environment jsdom
 */

import * as gtag from '@/lib/analytics/gtag';

// Mock the gtag module
jest.mock('@/lib/analytics/gtag', () => ({
  event: jest.fn(),
  trackConversion: jest.fn(),
  isAnalyticsAvailable: jest.fn(() => true),
  GA_MEASUREMENT_ID: 'G-TEST123456',
}));

describe('Analytics Events', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('trackCTAClick', () => {
    it('should call event with correct parameters', async () => {
      const { trackCTAClick } = await import('@/lib/analytics/events');
      trackCTAClick('Book Consultation', 'Header');

      expect(gtag.event).toHaveBeenCalledWith(
        'cta_click',
        'engagement',
        'Book Consultation - Header'
      );
    });

    it('should handle different CTA names and locations', async () => {
      const { trackCTAClick } = await import('@/lib/analytics/events');
      trackCTAClick('Get Started', 'Hero Section');

      expect(gtag.event).toHaveBeenCalledWith(
        'cta_click',
        'engagement',
        'Get Started - Hero Section'
      );
    });
  });

  describe('trackConsultationBooking', () => {
    it('should call event with conversion category', async () => {
      const { trackConsultationBooking } = await import('@/lib/analytics/events');
      trackConsultationBooking();

      expect(gtag.event).toHaveBeenCalledWith(
        'consultation_booking',
        'conversion',
        'book_consultation_page'
      );
    });
  });

  describe('trackNavigation', () => {
    it('should call event with navigation destination', async () => {
      const { trackNavigation } = await import('@/lib/analytics/events');
      trackNavigation('/services');

      expect(gtag.event).toHaveBeenCalledWith(
        'navigation',
        'engagement',
        '/services'
      );
    });
  });

  describe('trackProjectView', () => {
    it('should call event with project name', async () => {
      const { trackProjectView } = await import('@/lib/analytics/events');
      trackProjectView('Insyt');

      expect(gtag.event).toHaveBeenCalledWith(
        'project_view',
        'engagement',
        'Insyt'
      );
    });
  });

  describe('trackProjectFilter', () => {
    it('should call event with filter type and value', async () => {
      const { trackProjectFilter } = await import('@/lib/analytics/events');
      trackProjectFilter('technology', 'React');

      expect(gtag.event).toHaveBeenCalledWith(
        'project_filter',
        'engagement',
        'technology: React'
      );
    });
  });

  describe('trackContactFormSubmit', () => {
    it('should call event with conversion category', async () => {
      const { trackContactFormSubmit } = await import('@/lib/analytics/events');
      trackContactFormSubmit();

      expect(gtag.event).toHaveBeenCalledWith(
        'contact_form_submit',
        'conversion',
        'contact_page'
      );
    });
  });

  describe('trackLeadQualifierSubmit', () => {
    it('should call event with budget parameter', async () => {
      const { trackLeadQualifierSubmit } = await import('@/lib/analytics/events');
      trackLeadQualifierSubmit('$10k-$25k');

      expect(gtag.event).toHaveBeenCalledWith(
        'lead_qualifier_submit',
        'conversion',
        '$10k-$25k'
      );
    });
  });

  describe('trackOutboundLink', () => {
    it('should call event with URL', async () => {
      const { trackOutboundLink } = await import('@/lib/analytics/events');
      trackOutboundLink('https://example.com');

      expect(gtag.event).toHaveBeenCalledWith(
        'outbound_click',
        'engagement',
        'https://example.com'
      );
    });
  });

  describe('trackSocialClick', () => {
    it('should call event with platform name', async () => {
      const { trackSocialClick } = await import('@/lib/analytics/events');
      trackSocialClick('LinkedIn');

      expect(gtag.event).toHaveBeenCalledWith(
        'social_click',
        'engagement',
        'LinkedIn'
      );
    });

    it('should handle different social platforms', async () => {
      const { trackSocialClick } = await import('@/lib/analytics/events');

      trackSocialClick('Twitter');
      expect(gtag.event).toHaveBeenCalledWith(
        'social_click',
        'engagement',
        'Twitter'
      );

      trackSocialClick('GitHub');
      expect(gtag.event).toHaveBeenCalledWith(
        'social_click',
        'engagement',
        'GitHub'
      );
    });
  });

  describe('trackScrollDepth', () => {
    it('should call event with percentage value', async () => {
      const { trackScrollDepth } = await import('@/lib/analytics/events');
      trackScrollDepth(50);

      expect(gtag.event).toHaveBeenCalledWith(
        'scroll_depth',
        'engagement',
        '50%',
        50
      );
    });

    it('should handle different scroll percentages', async () => {
      const { trackScrollDepth } = await import('@/lib/analytics/events');

      trackScrollDepth(25);
      expect(gtag.event).toHaveBeenCalledWith(
        'scroll_depth',
        'engagement',
        '25%',
        25
      );

      trackScrollDepth(100);
      expect(gtag.event).toHaveBeenCalledWith(
        'scroll_depth',
        'engagement',
        '100%',
        100
      );
    });
  });
});
