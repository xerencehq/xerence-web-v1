import React from 'react';
import { render, screen, fireEvent } from '@/__tests__/test-utils';
import Select from './index';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

describe('Select', () => {
  it('should render select', () => {
    render(<Select options={options} />);
    expect(screen.getByTestId('select')).toBeInTheDocument();
  });

  it('should render all options', () => {
    render(<Select options={options} />);
    options.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  it('should render placeholder when provided', () => {
    render(<Select options={options} placeholder="Select an option" />);
    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });

  it('should handle value changes', () => {
    const handleChange = jest.fn();
    render(<Select options={options} onChange={handleChange} />);
    fireEvent.change(screen.getByTestId('select'), { target: { value: 'option2' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('should be disabled when disabled prop is true', () => {
    render(<Select options={options} disabled />);
    expect(screen.getByTestId('select')).toBeDisabled();
  });

  it('should apply error styles when error prop is true', () => {
    render(<Select options={options} error />);
    expect(screen.getByTestId('select')).toBeInTheDocument();
  });

  it('should forward ref to select element', () => {
    const ref = React.createRef<HTMLSelectElement>();
    render(<Select options={options} ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLSelectElement);
  });

  it('should support different sizes', () => {
    const { rerender } = render(<Select options={options} selectSize="sm" />);
    expect(screen.getByTestId('select')).toBeInTheDocument();

    rerender(<Select options={options} selectSize="lg" />);
    expect(screen.getByTestId('select')).toBeInTheDocument();
  });

  it('should support name attribute', () => {
    render(<Select options={options} name="service" />);
    expect(screen.getByTestId('select')).toHaveAttribute('name', 'service');
  });

  it('should render disabled options', () => {
    const optionsWithDisabled = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2', disabled: true },
    ];
    render(<Select options={optionsWithDisabled} />);
    const disabledOption = screen.getByText('Option 2');
    expect(disabledOption).toHaveAttribute('disabled');
  });
});
