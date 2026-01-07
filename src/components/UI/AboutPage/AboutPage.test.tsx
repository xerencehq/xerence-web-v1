import React from 'react';
import { render, screen, within } from '@/__tests__/test-utils';
import { AboutHero } from './AboutHero';
import { Story } from './Story';
import { Values } from './Values';
import { Team } from './Team';
import { Milestones } from './Milestones';
import { VALUES } from '@/data/values';
import { MILESTONES } from '@/data/milestones';
import type { TeamMember } from '@/data/team';

// Mock team members for testing
const mockTeamMembers: TeamMember[] = [
  {
    name: 'John Doe',
    role: 'Founder & CEO',
    bio: 'Passionate about building products.',
    linkedin: 'https://linkedin.com/in/johndoe',
    twitter: 'https://twitter.com/johndoe',
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    bio: 'Tech enthusiast and problem solver.',
  },
];

describe('AboutHero', () => {
  it('renders title correctly', () => {
    render(<AboutHero title="About Xerence" subtitle="Building tomorrow's technology, today." />);
    expect(screen.getByRole('heading', { name: 'About Xerence' })).toBeInTheDocument();
  });

  it('renders subtitle correctly', () => {
    render(<AboutHero title="About Xerence" subtitle="Building tomorrow's technology, today." />);
    expect(screen.getByText("Building tomorrow's technology, today.")).toBeInTheDocument();
  });

  it('has proper heading structure', () => {
    render(<AboutHero title="About Xerence" subtitle="Building tomorrow's technology, today." />);
    const heading = screen.getByRole('heading', { name: 'About Xerence' });
    expect(heading.tagName).toBe('H1');
  });
});

describe('Story', () => {
  it('renders the story section', () => {
    render(<Story />);
    expect(screen.getByTestId('about-story')).toBeInTheDocument();
  });

  it('renders the section title', () => {
    render(<Story />);
    expect(screen.getByRole('heading', { name: 'Our Story' })).toBeInTheDocument();
  });

  it('renders mission statement', () => {
    render(<Story />);
    expect(screen.getByText('Our Mission')).toBeInTheDocument();
    // Also verify the mission content is present
    expect(screen.getAllByText(/mission/i).length).toBeGreaterThanOrEqual(1);
  });

  it('renders vision statement', () => {
    render(<Story />);
    expect(screen.getByText('Our Vision')).toBeInTheDocument();
    // Also verify the vision content is present
    expect(screen.getAllByText(/vision/i).length).toBeGreaterThanOrEqual(1);
  });
});

describe('Values', () => {
  it('renders the values section', () => {
    render(<Values values={VALUES} />);
    expect(screen.getByTestId('about-values')).toBeInTheDocument();
  });

  it('renders the section title', () => {
    render(<Values values={VALUES} />);
    expect(screen.getByRole('heading', { name: 'Our Values' })).toBeInTheDocument();
  });

  it('renders all values', () => {
    render(<Values values={VALUES} />);
    VALUES.forEach((value) => {
      expect(screen.getByRole('heading', { name: value.title })).toBeInTheDocument();
    });
  });

  it('renders value descriptions', () => {
    render(<Values values={VALUES} />);
    VALUES.forEach((value) => {
      expect(screen.getByText(value.description)).toBeInTheDocument();
    });
  });

  it('renders correct number of value cards', () => {
    render(<Values values={VALUES} />);
    const cards = screen.getAllByTestId(/^value-card-/);
    expect(cards).toHaveLength(VALUES.length);
  });

  it('renders value icons', () => {
    render(<Values values={VALUES} />);
    const icons = screen.getAllByTestId('value-icon');
    expect(icons).toHaveLength(VALUES.length);
  });
});

describe('Team', () => {
  it('renders the team section', () => {
    render(<Team members={mockTeamMembers} />);
    expect(screen.getByTestId('about-team')).toBeInTheDocument();
  });

  it('renders the section title', () => {
    render(<Team members={mockTeamMembers} />);
    expect(screen.getByRole('heading', { name: 'The Team' })).toBeInTheDocument();
  });

  it('renders all team members', () => {
    render(<Team members={mockTeamMembers} />);
    mockTeamMembers.forEach((member) => {
      expect(screen.getByRole('heading', { name: member.name })).toBeInTheDocument();
    });
  });

  it('renders team member roles', () => {
    render(<Team members={mockTeamMembers} />);
    mockTeamMembers.forEach((member) => {
      expect(screen.getByText(member.role)).toBeInTheDocument();
    });
  });

  it('renders team member bios when provided', () => {
    render(<Team members={mockTeamMembers} />);
    mockTeamMembers.forEach((member) => {
      if (member.bio) {
        expect(screen.getByText(member.bio)).toBeInTheDocument();
      }
    });
  });

  it('renders social links when provided', () => {
    render(<Team members={mockTeamMembers} />);
    const linkedinLinks = screen.getAllByLabelText(/linkedin/i);
    expect(linkedinLinks.length).toBeGreaterThan(0);
    expect(linkedinLinks[0]).toHaveAttribute('href', mockTeamMembers[0].linkedin);
  });

  it('does not render social links when not provided', () => {
    const memberWithoutSocials: TeamMember[] = [
      { name: 'No Social', role: 'Developer' },
    ];
    render(<Team members={memberWithoutSocials} />);
    expect(screen.queryByLabelText(/linkedin/i)).not.toBeInTheDocument();
  });

  it('renders correct number of team cards', () => {
    render(<Team members={mockTeamMembers} />);
    const cards = screen.getAllByTestId(/^team-card-/);
    expect(cards).toHaveLength(mockTeamMembers.length);
  });
});

describe('Milestones', () => {
  it('renders the milestones section', () => {
    render(<Milestones milestones={MILESTONES} />);
    expect(screen.getByTestId('about-milestones')).toBeInTheDocument();
  });

  it('renders the section title', () => {
    render(<Milestones milestones={MILESTONES} />);
    expect(screen.getByRole('heading', { name: 'Our Journey' })).toBeInTheDocument();
  });

  it('renders all milestones', () => {
    render(<Milestones milestones={MILESTONES} />);
    MILESTONES.forEach((milestone) => {
      expect(screen.getByRole('heading', { name: milestone.title })).toBeInTheDocument();
    });
  });

  it('renders milestone years', () => {
    render(<Milestones milestones={MILESTONES} />);
    MILESTONES.forEach((milestone) => {
      expect(screen.getByText(milestone.year)).toBeInTheDocument();
    });
  });

  it('renders milestone descriptions', () => {
    render(<Milestones milestones={MILESTONES} />);
    MILESTONES.forEach((milestone) => {
      expect(screen.getByText(milestone.description)).toBeInTheDocument();
    });
  });

  it('renders correct number of milestone items', () => {
    render(<Milestones milestones={MILESTONES} />);
    const items = screen.getAllByTestId(/^milestone-item-/);
    expect(items).toHaveLength(MILESTONES.length);
  });

  it('renders milestones in chronological order', () => {
    render(<Milestones milestones={MILESTONES} />);
    const years = screen.getAllByTestId('milestone-year');
    years.forEach((yearElement, index) => {
      expect(yearElement).toHaveTextContent(MILESTONES[index].year);
    });
  });
});

describe('Values accessibility', () => {
  it('has proper heading structure', () => {
    render(<Values values={VALUES} />);
    const sectionHeading = screen.getByRole('heading', { name: 'Our Values' });
    expect(sectionHeading.tagName).toBe('H2');

    const valueHeadings = screen.getAllByRole('heading', { level: 3 });
    expect(valueHeadings).toHaveLength(VALUES.length);
  });
});

describe('Team accessibility', () => {
  it('has proper heading structure', () => {
    render(<Team members={mockTeamMembers} />);
    const sectionHeading = screen.getByRole('heading', { name: 'The Team' });
    expect(sectionHeading.tagName).toBe('H2');

    const memberHeadings = screen.getAllByRole('heading', { level: 3 });
    expect(memberHeadings).toHaveLength(mockTeamMembers.length);
  });

  it('social links open in new tab', () => {
    render(<Team members={mockTeamMembers} />);
    const linkedinLinks = screen.getAllByLabelText(/linkedin/i);
    linkedinLinks.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});

describe('Milestones accessibility', () => {
  it('has proper heading structure', () => {
    render(<Milestones milestones={MILESTONES} />);
    const sectionHeading = screen.getByRole('heading', { name: 'Our Journey' });
    expect(sectionHeading.tagName).toBe('H2');

    const milestoneHeadings = screen.getAllByRole('heading', { level: 3 });
    expect(milestoneHeadings).toHaveLength(MILESTONES.length);
  });
});
