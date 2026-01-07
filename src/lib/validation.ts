export interface ValidationRule {
  validate: (value: string) => boolean;
  message: string;
}

export const required = (message = 'This field is required'): ValidationRule => ({
  validate: (value) => value.trim().length > 0,
  message,
});

export const email = (message = 'Please enter a valid email'): ValidationRule => ({
  validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  message,
});

export const minLength = (min: number, message?: string): ValidationRule => ({
  validate: (value) => value.length >= min,
  message: message || `Must be at least ${min} characters`,
});

export const maxLength = (max: number, message?: string): ValidationRule => ({
  validate: (value) => value.length <= max,
  message: message || `Must be no more than ${max} characters`,
});

export const phone = (message = 'Please enter a valid phone number'): ValidationRule => ({
  validate: (value) => /^[\d\s\-+()]+$/.test(value) && value.replace(/\D/g, '').length >= 10,
  message,
});

export const url = (message = 'Please enter a valid URL'): ValidationRule => ({
  validate: (value) => {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  },
  message,
});

export const validate = (value: string, rules: ValidationRule[]): string | null => {
  for (const rule of rules) {
    if (!rule.validate(value)) {
      return rule.message;
    }
  }
  return null;
};

export const validateForm = <T extends Record<string, string>>(
  values: T,
  validationRules: Partial<Record<keyof T, ValidationRule[]>>
): Partial<Record<keyof T, string>> => {
  const errors: Partial<Record<keyof T, string>> = {};

  for (const [field, rules] of Object.entries(validationRules)) {
    if (rules) {
      const error = validate(values[field as keyof T] || '', rules as ValidationRule[]);
      if (error) {
        errors[field as keyof T] = error;
      }
    }
  }

  return errors;
};
