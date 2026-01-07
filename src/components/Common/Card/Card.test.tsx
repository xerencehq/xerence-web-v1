import React from 'react';
import { render, screen, fireEvent } from '@/__tests__/test-utils';
import Card from './index';

describe('Card', () => {
  it('should render card with title', () => {
    render(<Card title="Test Card" />);
    expect(screen.getByText('Test Card')).toBeInTheDocument();
  });

  it('should render description when provided', () => {
    render(<Card title="Test" description="Test description" />);
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('should render image when provided', () => {
    render(<Card title="Test" image="/test.jpg" imageAlt="Test image" />);
    expect(screen.getByAltText('Test image')).toBeInTheDocument();
  });

  it('should render as link when href provided', () => {
    render(<Card title="Test" href="/test" />);
    const card = screen.getByTestId('card');
    expect(card).toHaveAttribute('href', '/test');
  });

  it('should handle click when onClick provided', () => {
    const handleClick = jest.fn();
    render(<Card title="Test" onClick={handleClick} />);
    fireEvent.click(screen.getByTestId('card'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('should render footer when provided', () => {
    render(<Card title="Test" footer={<span>Footer content</span>} />);
    expect(screen.getByText('Footer content')).toBeInTheDocument();
  });

  it('should render children', () => {
    render(
      <Card title="Test">
        <span>Child content</span>
      </Card>
    );
    expect(screen.getByText('Child content')).toBeInTheDocument();
  });
});
