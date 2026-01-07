import React from 'react';
import { render, screen, fireEvent } from '@/__tests__/test-utils';
import FAQ from './index';

describe('FAQ', () => {
  it('should render the section title', () => {
    render(<FAQ />);
    expect(screen.getByText(/Frequently Asked Questions/i)).toBeInTheDocument();
  });

  it('should render FAQ items', () => {
    render(<FAQ />);
    expect(screen.getByText(/How long does a typical project take/i)).toBeInTheDocument();
    expect(screen.getByText(/What technologies do you use/i)).toBeInTheDocument();
  });

  it('should expand answer when question is clicked', () => {
    render(<FAQ />);
    const question = screen.getByText(/How long does a typical project take/i);
    fireEvent.click(question);
    expect(screen.getByText(/Project timelines vary based on scope/i)).toBeInTheDocument();
  });

  it('should have proper section structure', () => {
    render(<FAQ />);
    expect(screen.getByTestId('faq-section')).toBeInTheDocument();
  });
});
