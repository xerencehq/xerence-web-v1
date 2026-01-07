import React from 'react';
import { render, screen, within } from '@/__tests__/test-utils';
import ServiceCard from './ServiceCard';
import ServicesList from './ServicesList';
import ServicesHero from './ServicesHero';
import { SERVICES, Service } from '@/data/services';

// Mock service for testing
const mockService: Service = {
  id: 'test-service',
  icon: 'code',
  title: 'Test Service',
  shortDescription: 'A short description',
  fullDescription: 'A full description of the service.',
  benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3'],
  technologies: ['React', 'Node.js', 'TypeScript'],
};

const mockServiceNoTech: Service = {
  id: 'no-tech-service',
  icon: 'consulting',
  title: 'Consulting Service',
  shortDescription: 'A short description',
  fullDescription: 'A full description.',
  benefits: ['Benefit 1'],
  technologies: [],
};

describe('ServiceCard', () => {
  it('renders service title', () => {
    render(<ServiceCard service={mockService} />);
    expect(screen.getByRole('heading', { name: mockService.title })).toBeInTheDocument();
  });

  it('renders service description', () => {
    render(<ServiceCard service={mockService} />);
    expect(screen.getByText(mockService.fullDescription)).toBeInTheDocument();
  });

  it('renders all benefits', () => {
    render(<ServiceCard service={mockService} />);
    mockService.benefits.forEach((benefit) => {
      expect(screen.getByText(benefit)).toBeInTheDocument();
    });
  });

  it('renders technologies when provided', () => {
    render(<ServiceCard service={mockService} />);
    mockService.technologies?.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it('does not render technologies section when empty', () => {
    render(<ServiceCard service={mockServiceNoTech} />);
    expect(screen.queryByTestId('technologies-section')).not.toBeInTheDocument();
  });

  it('has correct anchor id for hash navigation', () => {
    render(<ServiceCard service={mockService} />);
    const card = screen.getByTestId('service-card-test-service');
    expect(card).toHaveAttribute('id', 'test-service');
  });

  it('renders CTA button linking to consultation', () => {
    render(<ServiceCard service={mockService} />);
    const link = screen.getByRole('link', { name: /book a call/i });
    expect(link).toHaveAttribute('href', '/book-consultation');
  });

  it('renders icon', () => {
    render(<ServiceCard service={mockService} />);
    expect(screen.getByTestId('service-icon')).toBeInTheDocument();
  });
});

describe('ServicesList', () => {
  it('renders all services', () => {
    render(<ServicesList services={SERVICES} />);
    SERVICES.forEach((service) => {
      expect(screen.getByRole('heading', { name: service.title })).toBeInTheDocument();
    });
  });

  it('renders correct number of service cards', () => {
    render(<ServicesList services={SERVICES} />);
    const cards = screen.getAllByTestId(/^service-card-/);
    expect(cards).toHaveLength(SERVICES.length);
  });

  it('renders services in correct order', () => {
    render(<ServicesList services={SERVICES} />);
    const headings = screen.getAllByRole('heading', { level: 3 });
    headings.forEach((heading, index) => {
      expect(heading).toHaveTextContent(SERVICES[index].title);
    });
  });

  it('renders empty state when no services provided', () => {
    render(<ServicesList services={[]} />);
    expect(screen.queryByTestId(/^service-card-/)).not.toBeInTheDocument();
  });
});

describe('ServiceCard accessibility', () => {
  it('has proper heading structure', () => {
    render(<ServiceCard service={mockService} />);
    const heading = screen.getByRole('heading', { name: mockService.title });
    expect(heading.tagName).toBe('H3');
  });

  it('benefits list has proper list structure', () => {
    render(<ServiceCard service={mockService} />);
    const list = screen.getByRole('list');
    const items = within(list).getAllByRole('listitem');
    expect(items).toHaveLength(mockService.benefits.length);
  });
});

describe('ServicesHero', () => {
  it('renders title and subtitle correctly', () => {
    render(
      <ServicesHero
        title="Our Services"
        subtitle="Transform your ideas into reality."
      />
    );
    expect(screen.getByRole('heading', { name: 'Our Services' })).toBeInTheDocument();
    expect(screen.getByText('Transform your ideas into reality.')).toBeInTheDocument();
  });
});
