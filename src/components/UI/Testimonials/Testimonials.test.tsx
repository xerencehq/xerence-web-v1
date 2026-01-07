import React from 'react';
import { render, screen } from '@/__tests__/test-utils';
import Testimonials from './index';

describe('Testimonials', () => {
  it('should render the section title', () => {
    render(<Testimonials />);
    expect(screen.getByText(/What Our Clients Say/i)).toBeInTheDocument();
  });

  it('should render testimonial quotes', () => {
    render(<Testimonials />);
    const quotes = screen.getAllByTestId('testimonial-card');
    expect(quotes.length).toBeGreaterThanOrEqual(2);
  });

  it('should render client names', () => {
    render(<Testimonials />);
    expect(screen.getByText(/Sarah Johnson/i)).toBeInTheDocument();
  });

  it('should have proper section structure', () => {
    render(<Testimonials />);
    expect(screen.getByTestId('testimonials-section')).toBeInTheDocument();
  });
});
