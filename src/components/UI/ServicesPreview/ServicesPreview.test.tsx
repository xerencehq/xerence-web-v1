import React from 'react';
import { render, screen } from '@/__tests__/test-utils';
import ServicesPreview from './index';

describe('ServicesPreview', () => {
  it('should render the section title', () => {
    render(<ServicesPreview />);
    expect(screen.getByText(/Our Services/i)).toBeInTheDocument();
  });

  it('should render at least 4 service cards', () => {
    render(<ServicesPreview />);
    expect(screen.getByText(/Custom Software Development/i)).toBeInTheDocument();
    expect(screen.getByText(/Mobile App Development/i)).toBeInTheDocument();
    expect(screen.getByText(/AI\/ML Solutions/i)).toBeInTheDocument();
    expect(screen.getByText(/Cloud Infrastructure/i)).toBeInTheDocument();
  });

  it('should render View All Services link', () => {
    render(<ServicesPreview />);
    const link = screen.getByRole('link', { name: /View All Services/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/services');
  });

  it('should have proper section structure', () => {
    render(<ServicesPreview />);
    expect(screen.getByTestId('services-preview-section')).toBeInTheDocument();
  });
});
