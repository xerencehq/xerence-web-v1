import React from 'react';
import { render, screen, fireEvent } from '@/__tests__/test-utils';
import TextArea from './index';

describe('TextArea', () => {
  it('should render textarea', () => {
    render(<TextArea placeholder="Enter text" />);
    expect(screen.getByTestId('textarea')).toBeInTheDocument();
  });

  it('should handle value changes', () => {
    const handleChange = jest.fn();
    render(<TextArea onChange={handleChange} />);
    fireEvent.change(screen.getByTestId('textarea'), { target: { value: 'test' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('should show placeholder', () => {
    render(<TextArea placeholder="Test placeholder" />);
    expect(screen.getByPlaceholderText('Test placeholder')).toBeInTheDocument();
  });

  it('should be disabled when disabled prop is true', () => {
    render(<TextArea disabled />);
    expect(screen.getByTestId('textarea')).toBeDisabled();
  });

  it('should apply error styles when error prop is true', () => {
    render(<TextArea error />);
    expect(screen.getByTestId('textarea')).toBeInTheDocument();
  });

  it('should forward ref to textarea element', () => {
    const ref = React.createRef<HTMLTextAreaElement>();
    render(<TextArea ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
  });

  it('should support rows attribute', () => {
    render(<TextArea rows={5} />);
    expect(screen.getByTestId('textarea')).toHaveAttribute('rows', '5');
  });

  it('should support name attribute', () => {
    render(<TextArea name="message" />);
    expect(screen.getByTestId('textarea')).toHaveAttribute('name', 'message');
  });

  it('should support different resize options', () => {
    const { rerender } = render(<TextArea resize="none" />);
    expect(screen.getByTestId('textarea')).toBeInTheDocument();

    rerender(<TextArea resize="vertical" />);
    expect(screen.getByTestId('textarea')).toBeInTheDocument();

    rerender(<TextArea resize="horizontal" />);
    expect(screen.getByTestId('textarea')).toBeInTheDocument();

    rerender(<TextArea resize="both" />);
    expect(screen.getByTestId('textarea')).toBeInTheDocument();
  });
});
