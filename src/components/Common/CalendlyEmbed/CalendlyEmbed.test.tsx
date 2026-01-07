import React from 'react';
import { render, screen } from '@/__tests__/test-utils';
import CalendlyEmbed from './index';

describe('CalendlyEmbed', () => {
  const testUrl = 'https://calendly.com/xerence/30min';

  it('renders the calendly container', () => {
    render(<CalendlyEmbed url={testUrl} />);
    expect(screen.getByTestId('calendly-embed')).toBeInTheDocument();
  });

  it('renders the iframe with correct id', () => {
    render(<CalendlyEmbed url={testUrl} />);
    const iframe = document.getElementById('calendly-inline-widget');
    expect(iframe).toBeInTheDocument();
    expect(iframe?.tagName).toBe('IFRAME');
  });

  it('applies custom minHeight when provided', () => {
    render(<CalendlyEmbed url={testUrl} minHeight="800px" />);
    const iframe = document.getElementById('calendly-inline-widget');
    expect(iframe).toHaveStyle({ height: '800px' });
  });

  it('renders fallback link with correct URL', () => {
    render(<CalendlyEmbed url={testUrl} />);
    const fallbackLink = screen.getByRole('link', { name: /book directly on calendly/i });
    expect(fallbackLink).toHaveAttribute('href', testUrl);
  });

  it('fallback link opens in new tab', () => {
    render(<CalendlyEmbed url={testUrl} />);
    const fallbackLink = screen.getByRole('link', { name: /book directly on calendly/i });
    expect(fallbackLink).toHaveAttribute('target', '_blank');
    expect(fallbackLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders "Having trouble?" text', () => {
    render(<CalendlyEmbed url={testUrl} />);
    expect(screen.getByText(/having trouble/i)).toBeInTheDocument();
  });

  it('iframe has accessible title', () => {
    render(<CalendlyEmbed url={testUrl} />);
    const iframe = screen.getByTitle(/schedule a consultation/i);
    expect(iframe).toBeInTheDocument();
  });
});
