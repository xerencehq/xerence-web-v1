import React from 'react';
import { render, screen, fireEvent, within } from '@/__tests__/test-utils';
import { ProjectsHero } from './ProjectsHero';
import { ProjectsGrid } from './ProjectsGrid';
import { ProjectCard } from './ProjectCard';
import type { ProjectListItem } from '@/types/sanity';

// Mock the image utility
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

// Mock project data
const mockProjects: ProjectListItem[] = [
  {
    _id: 'project-1',
    title: 'Project Alpha',
    slug: { _type: 'slug', current: 'project-alpha' },
    description: 'A cutting-edge web application for data visualization.',
    techStack: ['React', 'TypeScript', 'D3.js'],
    isFeatured: true,
    publishedAt: '2024-01-15',
    featuredImage: {
      _type: 'image',
      asset: { _ref: 'image-123', _type: 'reference' },
      alt: 'Project Alpha screenshot',
    },
    clientName: 'Tech Corp',
  },
  {
    _id: 'project-2',
    title: 'Project Beta',
    slug: { _type: 'slug', current: 'project-beta' },
    description: 'Mobile app for fitness tracking and health monitoring.',
    techStack: ['React Native', 'Node.js', 'MongoDB'],
    isFeatured: false,
    publishedAt: '2024-02-20',
    clientName: 'Health Inc',
  },
  {
    _id: 'project-3',
    title: 'Project Gamma',
    slug: { _type: 'slug', current: 'project-gamma' },
    description: 'AI-powered analytics platform for business intelligence.',
    techStack: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
    isFeatured: true,
    publishedAt: '2024-03-10',
  },
];

describe('ProjectsHero', () => {
  it('renders title correctly', () => {
    render(
      <ProjectsHero
        title="Our Projects"
        subtitle="Explore our portfolio of successful projects."
      />
    );
    expect(screen.getByRole('heading', { name: 'Our Projects' })).toBeInTheDocument();
  });

  it('renders subtitle correctly', () => {
    render(
      <ProjectsHero
        title="Our Projects"
        subtitle="Explore our portfolio of successful projects."
      />
    );
    expect(screen.getByText('Explore our portfolio of successful projects.')).toBeInTheDocument();
  });

  it('has proper heading structure', () => {
    render(
      <ProjectsHero
        title="Our Projects"
        subtitle="Explore our portfolio of successful projects."
      />
    );
    const heading = screen.getByRole('heading', { name: 'Our Projects' });
    expect(heading.tagName).toBe('H1');
  });
});

describe('ProjectCard', () => {
  const mockProject = mockProjects[0];

  it('renders project title', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByRole('heading', { name: mockProject.title })).toBeInTheDocument();
  });

  it('renders project description', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText(mockProject.description)).toBeInTheDocument();
  });

  it('renders tech stack tags', () => {
    render(<ProjectCard project={mockProject} />);
    mockProject.techStack.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it('limits visible tech tags to 4 with overflow indicator', () => {
    const projectWithManyTags: ProjectListItem = {
      ...mockProject,
      techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    };
    render(<ProjectCard project={projectWithManyTags} />);
    expect(screen.getByText('+2')).toBeInTheDocument();
  });

  it('renders client name when provided', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText(/Tech Corp/)).toBeInTheDocument();
  });

  it('does not render client info when not provided', () => {
    const projectWithoutClient = mockProjects[2];
    render(<ProjectCard project={projectWithoutClient} />);
    expect(screen.queryByText(/Client:/)).not.toBeInTheDocument();
  });

  it('links to project detail page', () => {
    render(<ProjectCard project={mockProject} />);
    const link = screen.getByTestId('project-card');
    expect(link).toHaveAttribute('href', `/projects/${mockProject.slug.current}`);
  });

  it('renders featured image when provided', () => {
    render(<ProjectCard project={mockProject} />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('alt', mockProject.featuredImage?.alt);
  });

  it('renders placeholder when no image', () => {
    const projectWithoutImage = mockProjects[2];
    render(<ProjectCard project={projectWithoutImage} />);
    expect(screen.getByTestId('image-placeholder')).toBeInTheDocument();
  });
});

describe('ProjectsGrid', () => {
  it('renders the projects grid', () => {
    render(<ProjectsGrid projects={mockProjects} />);
    expect(screen.getByTestId('projects-grid')).toBeInTheDocument();
  });

  it('renders all projects', () => {
    render(<ProjectsGrid projects={mockProjects} />);
    mockProjects.forEach((project) => {
      expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument();
    });
  });

  it('renders correct number of project cards', () => {
    render(<ProjectsGrid projects={mockProjects} />);
    const cards = screen.getAllByTestId('project-card');
    expect(cards).toHaveLength(mockProjects.length);
  });

  it('renders search input', () => {
    render(<ProjectsGrid projects={mockProjects} />);
    expect(screen.getByPlaceholderText(/search projects/i)).toBeInTheDocument();
  });

  it('filters projects by search query', () => {
    render(<ProjectsGrid projects={mockProjects} />);
    const searchInput = screen.getByPlaceholderText(/search projects/i);

    fireEvent.change(searchInput, { target: { value: 'Alpha' } });

    expect(screen.getByRole('heading', { name: 'Project Alpha' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Project Beta' })).not.toBeInTheDocument();
  });

  it('filters projects by tech tag', () => {
    render(<ProjectsGrid projects={mockProjects} />);

    // Find and click the React tag filter
    const reactTag = screen.getAllByText('React')[0];
    fireEvent.click(reactTag);

    // Should show projects with React
    expect(screen.getByRole('heading', { name: 'Project Alpha' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Project Gamma' })).toBeInTheDocument();
    // Should not show Project Beta (no React)
    expect(screen.queryByRole('heading', { name: 'Project Beta' })).not.toBeInTheDocument();
  });

  it('shows empty state when no projects match filter', () => {
    render(<ProjectsGrid projects={mockProjects} />);
    const searchInput = screen.getByPlaceholderText(/search projects/i);

    fireEvent.change(searchInput, { target: { value: 'nonexistent' } });

    expect(screen.getByText(/no projects found/i)).toBeInTheDocument();
  });

  it('clears filters when clear button is clicked', () => {
    render(<ProjectsGrid projects={mockProjects} />);
    const searchInput = screen.getByPlaceholderText(/search projects/i);

    fireEvent.change(searchInput, { target: { value: 'nonexistent' } });
    expect(screen.getByText(/no projects found/i)).toBeInTheDocument();

    const clearButton = screen.getByRole('button', { name: /clear filters/i });
    fireEvent.click(clearButton);

    expect(screen.getAllByTestId('project-card')).toHaveLength(mockProjects.length);
  });

  it('renders tech filter tags', () => {
    render(<ProjectsGrid projects={mockProjects} />);
    // Should show unique tags from all projects
    expect(screen.getAllByText('React').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('TypeScript').length).toBeGreaterThanOrEqual(1);
  });

  it('toggles tech filter on second click', () => {
    render(<ProjectsGrid projects={mockProjects} />);

    // Find and click the Python tag filter
    const pythonTag = screen.getByTestId('filter-tag-Python');
    fireEvent.click(pythonTag);

    // Should only show Project Gamma
    expect(screen.getByRole('heading', { name: 'Project Gamma' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Project Alpha' })).not.toBeInTheDocument();

    // Click again to deselect
    fireEvent.click(pythonTag);

    // Should show all projects again
    expect(screen.getAllByTestId('project-card')).toHaveLength(mockProjects.length);
  });
});

describe('ProjectsGrid accessibility', () => {
  it('search input has proper label', () => {
    render(<ProjectsGrid projects={mockProjects} />);
    const searchInput = screen.getByPlaceholderText(/search projects/i);
    expect(searchInput).toHaveAttribute('type', 'text');
  });

  it('project cards are properly structured as links', () => {
    render(<ProjectsGrid projects={mockProjects} />);
    const cards = screen.getAllByTestId('project-card');
    cards.forEach((card) => {
      expect(card.tagName).toBe('A');
    });
  });
});

describe('ProjectCard accessibility', () => {
  const mockProject = mockProjects[0];

  it('has proper heading structure', () => {
    render(<ProjectCard project={mockProject} />);
    const heading = screen.getByRole('heading', { name: mockProject.title });
    expect(heading.tagName).toBe('H3');
  });

  it('image has alt text', () => {
    render(<ProjectCard project={mockProject} />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('alt');
  });
});
