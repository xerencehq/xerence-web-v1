export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Type definitions for gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}

// Check if analytics is available
export const isAnalyticsAvailable = (): boolean => {
  return typeof window !== 'undefined' && !!GA_MEASUREMENT_ID && !!window.gtag;
};

// Track page views
export const pageview = (url: string): void => {
  if (!isAnalyticsAvailable()) return;

  window.gtag('config', GA_MEASUREMENT_ID!, {
    page_path: url,
  });
};

// Track events
export const event = (
  action: string,
  category: string,
  label?: string,
  value?: number
): void => {
  if (!isAnalyticsAvailable()) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track conversions
export const trackConversion = (conversionId: string, value?: number): void => {
  if (!isAnalyticsAvailable()) return;

  window.gtag('event', 'conversion', {
    send_to: conversionId,
    value: value,
  });
};
