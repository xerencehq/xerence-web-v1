'use client';

import React, { forwardRef } from 'react';
import { InputWrapper, StyledInput, InputIcon } from './styles';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  error?: boolean;
  icon?: React.ReactNode;
  inputSize?: 'sm' | 'md' | 'lg';
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error = false, icon, inputSize = 'md', className, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        {icon && <InputIcon $size={inputSize}>{icon}</InputIcon>}
        <StyledInput
          ref={ref}
          $error={error}
          $hasIcon={!!icon}
          $size={inputSize}
          data-testid="input"
          {...props}
        />
      </InputWrapper>
    );
  }
);

Input.displayName = 'Input';

export default Input;
