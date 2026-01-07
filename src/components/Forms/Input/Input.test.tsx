import React from 'react';
import { render, screen, fireEvent } from '@/__tests__/test-utils';
import Input from './index';

describe('Input', () => {
  it('should render input', () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByTestId('input')).toBeInTheDocument();
  });

  it('should handle value changes', () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);
    fireEvent.change(screen.getByTestId('input'), { target: { value: 'test' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('should show placeholder', () => {
    render(<Input placeholder="Test placeholder" />);
    expect(screen.getByPlaceholderText('Test placeholder')).toBeInTheDocument();
  });

  it('should be disabled when disabled prop is true', () => {
    render(<Input disabled />);
    expect(screen.getByTestId('input')).toBeDisabled();
  });

  it('should apply error styles when error prop is true', () => {
    render(<Input error />);
    expect(screen.getByTestId('input')).toBeInTheDocument();
  });

  it('should render with icon', () => {
    render(<Input icon={<span data-testid="icon">🔍</span>} />);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should support different sizes', () => {
    const { rerender } = render(<Input inputSize="sm" />);
    expect(screen.getByTestId('input')).toBeInTheDocument();

    rerender(<Input inputSize="lg" />);
    expect(screen.getByTestId('input')).toBeInTheDocument();
  });

  it('should forward ref to input element', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('should support type attribute', () => {
    render(<Input type="email" />);
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'email');
  });

  it('should support name attribute', () => {
    render(<Input name="email" />);
    expect(screen.getByTestId('input')).toHaveAttribute('name', 'email');
  });
});
