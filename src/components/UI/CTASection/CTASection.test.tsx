import React from 'react';
import { render, screen } from '@/__tests__/test-utils';
import CTASection from './index';

describe('CTASection', () => {
  it('should render the headline', () => {
    render(<CTASection />);
    expect(screen.getByText(/Ready to bring your idea to life/i)).toBeInTheDocument();
  });

  it('should render the CTA button', () => {
    render(<CTASection />);
    const ctaButton = screen.getByRole('link', { name: /Book a Free Consultation/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute('href', '/book-consultation');
  });

  it('should render supporting text', () => {
    render(<CTASection />);
    // The subtitle contains "30-minute consultation"
    expect(screen.getByText(/We'll discuss your project/i)).toBeInTheDocument();
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
