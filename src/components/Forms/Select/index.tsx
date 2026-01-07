'use client';

import React, { forwardRef } from 'react';
import { SelectWrapper, StyledSelect, SelectIcon } from './styles';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  options: SelectOption[];
  placeholder?: string;
  error?: boolean;
  selectSize?: 'sm' | 'md' | 'lg';
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, placeholder, error = false, selectSize = 'md', className, ...props }, ref) => {
    return (
      <SelectWrapper className={className}>
        <StyledSelect
          ref={ref}
          $error={error}
          $size={selectSize}
          data-testid="select"
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
        <SelectIcon>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
            <path d="M6 8L2 4h8L6 8z" />
          </svg>
        </SelectIcon>
      </SelectWrapper>
    );
  }
);

Select.displayName = 'Select';

export default Select;
