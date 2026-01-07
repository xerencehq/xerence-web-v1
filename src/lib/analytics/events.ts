import { event } from './gtag';

// CTA Events
export const trackCTAClick = (ctaName: string, location: string): void => {
  event('cta_click', 'engagement', `${ctaName} - ${location}`);
};

export const trackConsultationBooking = (): void => {
  event('consultation_booking', 'conversion', 'book_consultation_page');
  // If you have a Google Ads conversion ID, uncomment:
  // trackConversion('AW-CONVERSION_ID/CONVERSION_LABEL');
};

// Navigation Events
export const trackNavigation = (destination: string): void => {
  event('navigation', 'engagement', destination);
};

// Project Events
export const trackProjectView = (projectName: string): void => {
  event('project_view', 'engagement', projectName);
};

export const trackProjectFilter = (filterType: string, filterValue: string): void => {
  event('project_filter', 'engagement', `${filterType}: ${filterValue}`);
};

// Contact Events
export const trackContactFormSubmit = (): void => {
  event('contact_form_submit', 'conversion', 'contact_page');
};

export const trackLeadQualifierSubmit = (budget: string): void => {
  event('lead_qualifier_submit', 'conversion', budget);
};

// Outbound Links
export const trackOutboundLink = (url: string): void => {
  event('outbound_click', 'engagement', url);
};

// Social Links
export const trackSocialClick = (platform: string): void => {
  event('social_click', 'engagement', platform);
};

// Scroll Depth
export const trackScrollDepth = (percentage: number): void => {
  event('scroll_depth', 'engagement', `${percentage}%`, percentage);
};
