'use client';

import React from 'react';
import { FieldWrapper, Label, ErrorMessage, HelperText } from './styles';

export interface FormFieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  children: React.ReactNode;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  htmlFor,
  error,
  helperText,
  required = false,
  children,
}) => {
  return (
    <FieldWrapper data-testid="form-field">
      <Label htmlFor={htmlFor}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </Label>
      {children}
      {error && <ErrorMessage role="alert">{error}</ErrorMessage>}
      {!error && helperText && <HelperText>{helperText}</HelperText>}
    </FieldWrapper>
  );
};

export default FormField;
