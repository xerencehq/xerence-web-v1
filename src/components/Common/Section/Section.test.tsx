import React from 'react';
import { render, screen } from '@/__tests__/test-utils';
import Section from './index';

describe('Section', () => {
  it('should render section with children', () => {
    render(
      <Section>
        <div>Section content</div>
      </Section>
    );
    expect(screen.getByText('Section content')).toBeInTheDocument();
  });

  it('should render title when provided', () => {
    render(<Section title="Section Title">Content</Section>);
    expect(screen.getByText('Section Title')).toBeInTheDocument();
  });

  it('should render subtitle when provided', () => {
    render(<Section subtitle="Section subtitle">Content</Section>);
    expect(screen.getByText('Section subtitle')).toBeInTheDocument();
  });

  it('should apply id when provided', () => {
    render(<Section id="test-section">Content</Section>);
    expect(screen.getByTestId('section')).toHaveAttribute('id', 'test-section');
  });

  it('should apply custom className', () => {
    render(<Section className="custom-class">Content</Section>);
    expect(screen.getByTestId('section')).toHaveClass('custom-class');
  });
});
