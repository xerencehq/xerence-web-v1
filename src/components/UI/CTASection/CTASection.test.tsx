import React from 'react';
import { render, screen } from '@/__tests__/test-utils';
import CTASection from './index';

describe('CTASection', () => {
  it('should render the headline', () => {
    render(<CTASection />);
    expect(screen.getByText(/Got something to build/i)).toBeInTheDocument();
  });

  it('should render the CTA button', () => {
    render(<CTASection />);
    const ctaButton = screen.getByRole('link', { name: /Let's talk/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute('href', '/book-meeting');
  });

  it('should render supporting text', () => {
    render(<CTASection />);
    expect(screen.getByText(/Tell us about your idea/i)).toBeInTheDocument();
  });

  it('should have proper section structure', () => {
    render(<CTASection />);
    expect(screen.getByTestId('cta-section')).toBeInTheDocument();
  });

  it('should accept custom title prop', () => {
    render(<CTASection title="Custom Title" />);
    expect(screen.getByText(/Custom Title/i)).toBeInTheDocument();
  });
});
