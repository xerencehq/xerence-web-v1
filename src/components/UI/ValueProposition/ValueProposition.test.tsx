import React from 'react';
import { render, screen } from '@/__tests__/test-utils';
import ValueProposition from './index';

describe('ValueProposition', () => {
  it('should render the section title', () => {
    render(<ValueProposition />);
    expect(screen.getByText(/Why Partner With Xerence/i)).toBeInTheDocument();
  });

  it('should render differentiators', () => {
    render(<ValueProposition />);
    expect(screen.getByText(/Expert Team/i)).toBeInTheDocument();
    expect(screen.getByText(/Proven Process/i)).toBeInTheDocument();
    expect(screen.getByText(/End-to-End Support/i)).toBeInTheDocument();
  });

  it('should render stats section', () => {
    render(<ValueProposition />);
    expect(screen.getByText(/Years of Experience/i)).toBeInTheDocument();
    expect(screen.getByText(/Projects Delivered/i)).toBeInTheDocument();
  });

  it('should have proper section structure', () => {
    render(<ValueProposition />);
    expect(screen.getByTestId('value-proposition-section')).toBeInTheDocument();
  });
});
