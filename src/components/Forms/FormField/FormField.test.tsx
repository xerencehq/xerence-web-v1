import React from 'react';
import { render, screen } from '@/__tests__/test-utils';
import FormField from './index';

describe('FormField', () => {
  it('should render form field with label', () => {
    render(
      <FormField label="Email" htmlFor="email">
        <input id="email" />
      </FormField>
    );
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('should associate label with input via htmlFor', () => {
    render(
      <FormField label="Email" htmlFor="email">
        <input id="email" />
      </FormField>
    );
    const label = screen.getByText('Email');
    expect(label).toHaveAttribute('for', 'email');
  });

  it('should show required indicator', () => {
    render(
      <FormField label="Email" htmlFor="email" required>
        <input id="email" />
      </FormField>
    );
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('should show error message', () => {
    render(
      <FormField label="Email" htmlFor="email" error="Email is required">
        <input id="email" />
      </FormField>
    );
    expect(screen.getByText('Email is required')).toBeInTheDocument();
  });

  it('should have error message with alert role for accessibility', () => {
    render(
      <FormField label="Email" htmlFor="email" error="Email is required">
        <input id="email" />
      </FormField>
    );
    expect(screen.getByRole('alert')).toHaveTextContent('Email is required');
  });

  it('should show helper text when no error', () => {
    render(
      <FormField label="Email" htmlFor="email" helperText="Enter your email">
        <input id="email" />
      </FormField>
    );
    expect(screen.getByText('Enter your email')).toBeInTheDocument();
  });

  it('should not show helper text when error is present', () => {
    render(
      <FormField label="Email" htmlFor="email" error="Error" helperText="Helper">
        <input id="email" />
      </FormField>
    );
    expect(screen.queryByText('Helper')).not.toBeInTheDocument();
    expect(screen.getByText('Error')).toBeInTheDocument();
  });

  it('should render children', () => {
    render(
      <FormField label="Email" htmlFor="email">
        <input id="email" data-testid="child-input" />
      </FormField>
    );
    expect(screen.getByTestId('child-input')).toBeInTheDocument();
  });

  it('should have proper data-testid', () => {
    render(
      <FormField label="Email" htmlFor="email">
        <input id="email" />
      </FormField>
    );
    expect(screen.getByTestId('form-field')).toBeInTheDocument();
  });
});
