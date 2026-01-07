import React from 'react';
import { render, screen, fireEvent } from '@/__tests__/test-utils';
import Header from './index';
import { CTA_LINK } from './constants';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('Header', () => {
  it('should render the header', () => {
    render(<Header />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('should render the logo', () => {
    render(<Header />);
    expect(screen.getByText('Xerence')).toBeInTheDocument();
  });

  it('should render the logo as a link to home', () => {
    render(<Header />);
    const logoLink = screen.getByLabelText('Xerence Home');
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('should render the CTA button', () => {
    render(<Header />);
    expect(screen.getByTestId('header-cta')).toBeInTheDocument();
    expect(screen.getByText(CTA_LINK.label)).toBeInTheDocument();
  });

  it('should render CTA button with correct href', () => {
    render(<Header />);
    const ctaButton = screen.getByTestId('header-cta');
    expect(ctaButton).toHaveAttribute('href', CTA_LINK.href);
  });

  it('should render mobile menu button', () => {
    render(<Header />);
    expect(screen.getByTestId('mobile-menu-button')).toBeInTheDocument();
  });

  it('should toggle mobile menu on button click', () => {
    render(<Header />);
    const menuButton = screen.getByTestId('mobile-menu-button');

    // Menu should not be visible initially
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument();

    // Click to open
    fireEvent.click(menuButton);
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument();

    // Click to close
    fireEvent.click(menuButton);
    // AnimatePresence may delay unmount, so we check for aria-expanded
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('should have accessible menu button with aria-label', () => {
    render(<Header />);
    const menuButton = screen.getByTestId('mobile-menu-button');
    expect(menuButton).toHaveAttribute('aria-label');
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('should update aria-expanded when menu is opened', () => {
    render(<Header />);
    const menuButton = screen.getByTestId('mobile-menu-button');

    expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');
  });

  it('should render desktop navigation', () => {
    render(<Header />);
    expect(screen.getByTestId('desktop-navigation')).toBeInTheDocument();
  });

  it('should render hamburger icon with three lines', () => {
    render(<Header />);
    const menuButton = screen.getByTestId('mobile-menu-button');
    const spans = menuButton.querySelectorAll('span');
    expect(spans).toHaveLength(3);
  });
});
