import React from 'react';
import { render, screen, fireEvent } from '@/__tests__/test-utils';
import Tag from './index';

describe('Tag', () => {
  it('should render tag with text', () => {
    render(<Tag>React</Tag>);
    expect(screen.getByTestId('tag')).toHaveTextContent('React');
  });

  it('should render with default variant', () => {
    render(<Tag>Default</Tag>);
    expect(screen.getByTestId('tag')).toBeInTheDocument();
  });

  it('should render with outline variant', () => {
    render(<Tag variant="outline">Outline</Tag>);
    expect(screen.getByTestId('tag')).toBeInTheDocument();
  });

  it('should render remove button when onRemove is provided', () => {
    const handleRemove = jest.fn();
    render(<Tag onRemove={handleRemove}>Removable</Tag>);
    const removeButton = screen.getByRole('button', { name: /remove tag/i });
    expect(removeButton).toBeInTheDocument();
  });

  it('should call onRemove when remove button is clicked', () => {
    const handleRemove = jest.fn();
    render(<Tag onRemove={handleRemove}>Removable</Tag>);
    const removeButton = screen.getByRole('button', { name: /remove tag/i });
    fireEvent.click(removeButton);
    expect(handleRemove).toHaveBeenCalledTimes(1);
  });

  it('should not render remove button when onRemove is not provided', () => {
    render(<Tag>Not Removable</Tag>);
    expect(screen.queryByRole('button', { name: /remove tag/i })).not.toBeInTheDocument();
  });
});
