import React from 'react';
import { render, screen } from '@/__tests__/test-utils';
import Hero from './index';

describe('Hero', () => {
  it('should render the main headline', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Building the Future of/i);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Intelligent Software/i);
  });

  it('should render the subheadline', () => {
    render(<Hero />);
    expect(screen.getByText(/We craft cutting-edge software solutions/i)).toBeInTheDocument();
  });

  it('should render primary CTA button', () => {
    render(<Hero />);
    const ctaButton = screen.getByRole('link', { name: /Book a Free Consultation/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute('href', '/book-consultation');
  });

  it('should render secondary CTA button', () => {
    render(<Hero />);
    const secondaryButton = screen.getByRole('link', { name: /View Our Work/i });
    expect(secondaryButton).toBeInTheDocument();
    expect(secondaryButton).toHaveAttribute('href', '/projects');
  });

  it('should have proper section structure', () => {
    render(<Hero />);
    expect(screen.getByTestId('hero-section')).toBeInTheDocument();
  });
});
