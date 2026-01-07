/**
 * Performance monitoring utilities
 *
 * Provides Web Vitals measurement and preloading helpers
 * for performance optimization.
 */

// Web Vitals metric type
interface WebVitalMetric {
  name: string;
  value: number;
  id: string;
  rating?: 'good' | 'needs-improvement' | 'poor';
}

// Callback type for Web Vitals reporting
type WebVitalCallback = (metric: WebVitalMetric) => void;

/**
 * Report Web Vitals to analytics
 * Logs to console in development and sends to GA in production
 */
const reportWebVitals: WebVitalCallback = (metric) => {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vitals] ${metric.name}:`, metric.value, metric.rating);
  }

  // Send to Google Analytics in production
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.value),
      non_interaction: true,
    });
  }
};

/**
 * Initialize Web Vitals measurement
 * Dynamically imports web-vitals library to avoid bundle bloat
 */
export const measureWebVitals = (): void => {
  if (typeof window === 'undefined') return;

  // Dynamically import web-vitals
  // Note: onFID is deprecated, onINP replaces it in web-vitals v4+
  import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
    onCLS(reportWebVitals);
    onFCP(reportWebVitals);
    onLCP(reportWebVitals);
    onTTFB(reportWebVitals);
    onINP(reportWebVitals);
  }).catch(() => {
    // Silently fail if web-vitals is not available
    if (process.env.NODE_ENV === 'development') {
      console.warn('[Web Vitals] Failed to load web-vitals library');
    }
  });
};

/**
 * Preload an image by creating a link element
 * Useful for hero images and other critical above-fold images
 */
export const preloadImage = (src: string): void => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
};

/**
 * Preload a font file
 * Should be used sparingly for critical fonts only
 */
export const preloadFont = (href: string, type = 'font/woff2'): void => {
  if (typeof document === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'font';
  link.type = type;
  link.href = href;
  link.crossOrigin = 'anonymous';
  document.head.appendChild(link);
};

/**
 * Defer loading of non-critical resources
 * Uses requestIdleCallback when available, falls back to setTimeout
 */
export const deferLoad = (callback: () => void, timeout = 2000): void => {
  if (typeof window === 'undefined') return;

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(callback, { timeout });
  } else {
    setTimeout(callback, 100);
  }
};

/**
 * Check if user prefers reduced motion
 * Useful for conditionally disabling animations
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;

  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  return mediaQuery.matches;
};

/**
 * Performance thresholds based on Google's Core Web Vitals
 */
export const WEB_VITALS_THRESHOLDS = {
  LCP: { good: 2500, needsImprovement: 4000 }, // milliseconds
  FID: { good: 100, needsImprovement: 300 }, // milliseconds
  CLS: { good: 0.1, needsImprovement: 0.25 }, // score
  FCP: { good: 1800, needsImprovement: 3000 }, // milliseconds
  TTFB: { good: 800, needsImprovement: 1800 }, // milliseconds
  INP: { good: 200, needsImprovement: 500 }, // milliseconds
} as const;

/**
 * Determine rating for a Web Vital metric
 */
export const getWebVitalRating = (
  name: keyof typeof WEB_VITALS_THRESHOLDS,
  value: number
): 'good' | 'needs-improvement' | 'poor' => {
  const threshold = WEB_VITALS_THRESHOLDS[name];
  if (value <= threshold.good) return 'good';
  if (value <= threshold.needsImprovement) return 'needs-improvement';
  return 'poor';
};
