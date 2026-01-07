import React from 'react';
import { render, screen } from '@/__tests__/test-utils';
import ProjectsShowcase from './index';

describe('ProjectsShowcase', () => {
  it('should render the section title', () => {
    render(<ProjectsShowcase />);
    expect(screen.getByText(/Featured Projects/i)).toBeInTheDocument();
  });

  it('should render project cards', () => {
    render(<ProjectsShowcase />);
    const cards = screen.getAllByTestId('project-card');
    expect(cards.length).toBeGreaterThanOrEqual(2);
  });

  it('should render View All Projects link', () => {
    render(<ProjectsShowcase />);
    const link = screen.getByRole('link', { name: /View All Projects/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/projects');
  });

  it('should have proper section structure', () => {
    render(<ProjectsShowcase />);
    expect(screen.getByTestId('projects-showcase-section')).toBeInTheDocument();
  });
});
