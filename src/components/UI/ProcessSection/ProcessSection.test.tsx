import React from 'react';
import { render, screen } from '@/__tests__/test-utils';
import ProcessSection from './index';

describe('ProcessSection', () => {
  it('should render the section title', () => {
    render(<ProcessSection />);
    expect(screen.getByText(/How We Work/i)).toBeInTheDocument();
  });

  it('should render all 4 process steps', () => {
    render(<ProcessSection />);
    expect(screen.getByText(/Discovery/i)).toBeInTheDocument();
    expect(screen.getByText(/Design/i)).toBeInTheDocument();
    expect(screen.getByText(/Build/i)).toBeInTheDocument();
    expect(screen.getByText(/Launch/i)).toBeInTheDocument();
  });

  it('should render step numbers', () => {
    render(<ProcessSection />);
    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('02')).toBeInTheDocument();
    expect(screen.getByText('03')).toBeInTheDocument();
    expect(screen.getByText('04')).toBeInTheDocument();
  });

  it('should have proper section structure', () => {
    render(<ProcessSection />);
    expect(screen.getByTestId('process-section')).toBeInTheDocument();
  });
});
