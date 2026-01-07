import React from 'react';
import { render, screen, fireEvent } from '@/__tests__/test-utils';
import { ProjectHero } from './ProjectHero';
import { ProjectContent } from './ProjectContent';
import { ProjectGallery } from './ProjectGallery';
import { ProjectSidebar } from './ProjectSidebar';
import type { Project, SanityImage } from '@/types/sanity';

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

// Mock PortableText
jest.mock('@portabletext/react', () => ({
  PortableText: ({ value }: { value: unknown[] }) => (
    <div data-testid="portable-text">
      {Array.isArray(value) ? `Content with ${value.length} blocks` : 'No content'}
    </div>
  ),
}));

// Mock project data
const mockProject: Project = {
  _id: 'project-1',
  title: 'Insyt Analytics Platform',
  slug: { _type: 'slug', current: 'insyt' },
  description: 'An AI-powered analytics platform for business intelligence.',
  techStack: ['React', 'TypeScript', 'Python', 'TensorFlow', 'PostgreSQL'],
  isFeatured: true,
  publishedAt: '2024-01-15',
  featuredImage: {
    _type: 'image',
    asset: { _ref: 'image-123', _type: 'reference' },
    alt: 'Insyt dashboard screenshot',
  },
  clientName: 'Tech Innovations Inc',
  clientLogo: {
    _type: 'image',
    asset: { _ref: 'logo-456', _type: 'reference' },
    alt: 'Tech Innovations logo',
  },
  problem: [
    {
      _type: 'block',
      _key: 'block1',
      children: [{ _type: 'span', text: 'The client needed a solution...' }],
    },
  ],
  solution: [
    {
      _type: 'block',
      _key: 'block2',
      children: [{ _type: 'span', text: 'We built a comprehensive platform...' }],
    },
  ],
  outcomes: [
    '50% reduction in analysis time',
    'Real-time anomaly detection',
    '99.9% uptime achieved',
  ],
  gallery: [
    {
      _type: 'image',
      asset: { _ref: 'gallery-1', _type: 'reference' },
      alt: 'Dashboard view',
    },
    {
      _type: 'image',
      asset: { _ref: 'gallery-2', _type: 'reference' },
      alt: 'Analytics chart',
    },
  ],
  projectUrl: 'https://insyt.example.com',
};

const mockProjectMinimal: Project = {
  _id: 'project-2',
  title: 'Simple Project',
  slug: { _type: 'slug', current: 'simple' },
  description: 'A minimal project without optional fields.',
  techStack: ['Node.js'],
  isFeatured: false,
  publishedAt: '2024-02-01',
};

describe('ProjectHero', () => {
  it('renders project title', () => {
    render(<ProjectHero project={mockProject} />);
    expect(screen.getByRole('heading', { name: mockProject.title })).toBeInTheDocument();
  });

  it('renders project description', () => {
    render(<ProjectHero project={mockProject} />);
    expect(screen.getByText(mockProject.description)).toBeInTheDocument();
  });

  it('renders tech stack tags', () => {
    render(<ProjectHero project={mockProject} />);
    mockProject.techStack.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it('renders featured image when provided', () => {
    render(<ProjectHero project={mockProject} />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('alt', mockProject.featuredImage?.alt);
  });

  it('does not render image section when no featured image', () => {
    render(<ProjectHero project={mockProjectMinimal} />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('has proper heading structure', () => {
    render(<ProjectHero project={mockProject} />);
    const heading = screen.getByRole('heading', { name: mockProject.title });
    expect(heading.tagName).toBe('H1');
  });
});

describe('ProjectContent', () => {
  it('renders the challenge section when problem exists', () => {
    render(<ProjectContent project={mockProject} />);
    expect(screen.getByRole('heading', { name: 'The Challenge' })).toBeInTheDocument();
  });

  it('renders the solution section when solution exists', () => {
    render(<ProjectContent project={mockProject} />);
    expect(screen.getByRole('heading', { name: 'The Solution' })).toBeInTheDocument();
  });

  it('renders outcomes list when outcomes exist', () => {
    render(<ProjectContent project={mockProject} />);
    expect(screen.getByRole('heading', { name: 'Outcomes' })).toBeInTheDocument();
    mockProject.outcomes?.forEach((outcome) => {
      expect(screen.getByText(outcome)).toBeInTheDocument();
    });
  });

  it('does not render sections when data is missing', () => {
    render(<ProjectContent project={mockProjectMinimal} />);
    expect(screen.queryByRole('heading', { name: 'The Challenge' })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'The Solution' })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Outcomes' })).not.toBeInTheDocument();
  });

  it('renders portable text content', () => {
    render(<ProjectContent project={mockProject} />);
    const portableTexts = screen.getAllByTestId('portable-text');
    expect(portableTexts.length).toBeGreaterThan(0);
  });
});

describe('ProjectSidebar', () => {
  it('renders client name when provided', () => {
    render(<ProjectSidebar project={mockProject} />);
    expect(screen.getByText(mockProject.clientName!)).toBeInTheDocument();
  });

  it('renders tech stack list', () => {
    render(<ProjectSidebar project={mockProject} />);
    expect(screen.getByRole('heading', { name: 'Tech Stack' })).toBeInTheDocument();
    mockProject.techStack.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it('renders project URL button when provided', () => {
    render(<ProjectSidebar project={mockProject} />);
    const link = screen.getByRole('link', { name: /visit project/i });
    expect(link).toHaveAttribute('href', mockProject.projectUrl);
  });

  it('does not render project URL when not provided', () => {
    render(<ProjectSidebar project={mockProjectMinimal} />);
    expect(screen.queryByRole('link', { name: /visit project/i })).not.toBeInTheDocument();
  });

  it('does not render client section when not provided', () => {
    render(<ProjectSidebar project={mockProjectMinimal} />);
    expect(screen.queryByRole('heading', { name: 'Client' })).not.toBeInTheDocument();
  });

  it('project URL opens in new tab', () => {
    render(<ProjectSidebar project={mockProject} />);
    const link = screen.getByRole('link', { name: /visit project/i });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});

describe('ProjectGallery', () => {
  const mockImages: SanityImage[] = mockProject.gallery!;

  it('renders gallery section', () => {
    render(<ProjectGallery images={mockImages} projectTitle={mockProject.title} />);
    expect(screen.getByTestId('project-gallery')).toBeInTheDocument();
  });

  it('renders gallery title', () => {
    render(<ProjectGallery images={mockImages} projectTitle={mockProject.title} />);
    expect(screen.getByRole('heading', { name: 'Project Gallery' })).toBeInTheDocument();
  });

  it('renders all gallery images', () => {
    render(<ProjectGallery images={mockImages} projectTitle={mockProject.title} />);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(mockImages.length);
  });

  it('images have proper alt text', () => {
    render(<ProjectGallery images={mockImages} projectTitle={mockProject.title} />);
    const images = screen.getAllByRole('img');
    images.forEach((img, index) => {
      expect(img).toHaveAttribute('alt', mockImages[index].alt);
    });
  });

  it('opens lightbox when image is clicked', () => {
    render(<ProjectGallery images={mockImages} projectTitle={mockProject.title} />);
    const firstImage = screen.getAllByRole('button')[0];
    fireEvent.click(firstImage);
    expect(screen.getByTestId('lightbox')).toBeInTheDocument();
  });

  it('closes lightbox when close button is clicked', () => {
    render(<ProjectGallery images={mockImages} projectTitle={mockProject.title} />);
    const firstImage = screen.getAllByRole('button')[0];
    fireEvent.click(firstImage);

    const closeButton = screen.getByLabelText(/close/i);
    fireEvent.click(closeButton);

    expect(screen.queryByTestId('lightbox')).not.toBeInTheDocument();
  });

  it('closes lightbox when overlay is clicked', () => {
    render(<ProjectGallery images={mockImages} projectTitle={mockProject.title} />);
    const firstImage = screen.getAllByRole('button')[0];
    fireEvent.click(firstImage);

    const lightbox = screen.getByTestId('lightbox');
    fireEvent.click(lightbox);

    expect(screen.queryByTestId('lightbox')).not.toBeInTheDocument();
  });
});

describe('ProjectContent accessibility', () => {
  it('outcome items use proper list structure', () => {
    render(<ProjectContent project={mockProject} />);
    const list = screen.getByRole('list');
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(mockProject.outcomes?.length || 0);
  });

  it('sections have proper heading hierarchy', () => {
    render(<ProjectContent project={mockProject} />);
    const h2Headings = screen.getAllByRole('heading', { level: 2 });
    expect(h2Headings.length).toBeGreaterThan(0);
  });
});

describe('ProjectSidebar accessibility', () => {
  it('tech stack uses proper list structure', () => {
    render(<ProjectSidebar project={mockProject} />);
    const lists = screen.getAllByRole('list');
    expect(lists.length).toBeGreaterThan(0);
  });
});
