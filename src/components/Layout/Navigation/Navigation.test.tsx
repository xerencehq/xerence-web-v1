import React from 'react';
import { render, screen } from '@/__tests__/test-utils';
import Navigation from './index';
import { NAV_LINKS } from '../Header/constants';

describe('Navigation', () => {
  const defaultProps = {
    links: NAV_LINKS,
    currentPath: '/',
  };

  it('should render navigation', () => {
    render(<Navigation {...defaultProps} />);
    expect(screen.getByTestId('desktop-navigation')).toBeInTheDocument();
  });

  it('should render all navigation links', () => {
    render(<Navigation {...defaultProps} />);
    NAV_LINKS.forEach((link) => {
      expect(screen.getByText(link.label)).toBeInTheDocument();
    });
  });

  it('should mark active link with aria-current', () => {
    render(<Navigation {...defaultProps} currentPath="/" />);
    const homeLink = screen.getByText('Home');
    expect(homeLink).toHaveAttribute('aria-current', 'page');
  });

  it('should not mark inactive links with aria-current', () => {
    render(<Navigation {...defaultProps} currentPath="/" />);
    const servicesLink = screen.getByText('Services');
    expect(servicesLink).not.toHaveAttribute('aria-current');
  });

  it('should handle nested paths correctly', () => {
    render(<Navigation {...defaultProps} currentPath="/projects/some-project" />);
    const projectsLink = screen.getByText('Projects');
    expect(projectsLink).toHaveAttribute('aria-current', 'page');
  });

  it('should have correct href attributes for all links', () => {
    render(<Navigation {...defaultProps} />);
    NAV_LINKS.forEach((link) => {
      const linkElement = screen.getByText(link.label);
      expect(linkElement).toHaveAttribute('href', link.href);
    });
  });
});
