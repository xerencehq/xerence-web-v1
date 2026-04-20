import React from 'react';
import { render, screen } from '@/__tests__/test-utils';
import ProjectsShowcase from './index';
import type { ProjectListItem } from '@/types/sanity';

jest.mock('@/sanity/lib/image', () => ({
  urlForImage: jest.fn((source) => {
    if (!source?.asset?._ref) return undefined;
    return {
      width: jest.fn().mockReturnThis(),
      height: jest.fn().mockReturnThis(),
      url: jest.fn().mockReturnValue('https://cdn.sanity.io/test-image.jpg'),
    };
  }),
}));

const mockProjects: ProjectListItem[] = [
  {
    _id: 'p1',
    title: 'Insyt Analytics',
    slug: { _type: 'slug', current: 'insyt' },
    description: 'AI-powered analytics platform.',
    techStack: ['Next.js', 'Python'],
    isFeatured: true,
    publishedAt: '2026-01-01',
  },
  {
    _id: 'p2',
    title: 'FinFlow',
    slug: { _type: 'slug', current: 'finflow' },
    description: 'Financial management for startups.',
    techStack: ['React', 'Node.js'],
    isFeatured: true,
    publishedAt: '2026-01-02',
  },
];

describe('ProjectsShowcase', () => {
  it('should render the section title', () => {
    render(<ProjectsShowcase projects={mockProjects} />);
    expect(screen.getByText(/Featured Projects/i)).toBeInTheDocument();
  });

  it('should render project cards from Sanity data', () => {
    render(<ProjectsShowcase projects={mockProjects} />);
    const cards = screen.getAllByTestId('project-card');
    expect(cards).toHaveLength(2);
    expect(
      screen.getByRole('heading', { name: 'Insyt Analytics' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'FinFlow' })
    ).toBeInTheDocument();
  });

  it('should link cards to the project detail page via slug.current', () => {
    render(<ProjectsShowcase projects={mockProjects} />);
    const cards = screen.getAllByTestId('project-card');
    expect(cards[0]).toHaveAttribute('href', '/projects/insyt');
    expect(cards[1]).toHaveAttribute('href', '/projects/finflow');
  });

  it('should render View All Projects link', () => {
    render(<ProjectsShowcase projects={mockProjects} />);
    const link = screen.getByRole('link', { name: /View All Projects/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/projects');
  });

  it('should have proper section structure', () => {
    render(<ProjectsShowcase projects={mockProjects} />);
    expect(screen.getByTestId('projects-showcase-section')).toBeInTheDocument();
  });

  it('should render header and CTA but skip grid when no projects', () => {
    render(<ProjectsShowcase projects={[]} />);
    expect(screen.getByText(/Featured Projects/i)).toBeInTheDocument();
    expect(screen.queryAllByTestId('project-card')).toHaveLength(0);
    expect(
      screen.getByRole('link', { name: /View All Projects/i })
    ).toBeInTheDocument();
  });
});
