import React from 'react';
import { render, screen } from '@/__tests__/test-utils';
import Footer from './index';
import { FOOTER_LINKS, SOCIAL_LINKS, COMPANY_INFO } from './constants';

describe('Footer', () => {
  it('should render the footer', () => {
    render(<Footer />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('should render the brand logo', () => {
    render(<Footer />);
    expect(screen.getByText('Xerence')).toBeInTheDocument();
  });

  it('should render the tagline', () => {
    render(<Footer />);
    expect(screen.getByText(COMPANY_INFO.tagline)).toBeInTheDocument();
  });

  it('should render social links', () => {
    render(<Footer />);
    SOCIAL_LINKS.forEach((social) => {
      expect(screen.getByLabelText(social.name)).toBeInTheDocument();
    });
  });

  it('should render company links', () => {
    render(<Footer />);
    FOOTER_LINKS.company.forEach((link) => {
      // Use getByRole to target links specifically since "Services" also appears as a heading
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument();
    });
  });

  it('should render services links', () => {
    render(<Footer />);
    FOOTER_LINKS.services.forEach((link) => {
      expect(screen.getByText(link.label)).toBeInTheDocument();
    });
  });

  it('should render CTA section', () => {
    render(<Footer />);
    expect(screen.getByText('Ready to Start Your Project?')).toBeInTheDocument();
    expect(screen.getByText('Book a Free Consultation')).toBeInTheDocument();
  });

  it('should render copyright with current year', () => {
    render(<Footer />);
    expect(screen.getByText(/Xerence Innovations, Ltd/)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(String(COMPANY_INFO.year)))).toBeInTheDocument();
  });

  it('should render legal links', () => {
    render(<Footer />);
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('Terms of Service')).toBeInTheDocument();
  });

  it('should have correct link destinations', () => {
    render(<Footer />);
    const ctaLink = screen.getByText('Book a Free Consultation');
    expect(ctaLink).toHaveAttribute('href', '/book-consultation');
  });

  it('should have brand logo link to home', () => {
    render(<Footer />);
    const brandLink = screen.getByText('Xerence');
    expect(brandLink).toHaveAttribute('href', '/');
  });

  it('should have social links open in new tab', () => {
    render(<Footer />);
    SOCIAL_LINKS.forEach((social) => {
      const link = screen.getByLabelText(social.name);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('should render contact information', () => {
    render(<Footer />);
    expect(screen.getByText('hello@xerence.com')).toBeInTheDocument();
  });
});
