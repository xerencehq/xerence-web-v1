import {
  required,
  email,
  minLength,
  maxLength,
  phone,
  url,
  validate,
  validateForm,
} from '@/lib/validation';

describe('Validation utilities', () => {
  describe('required', () => {
    it('should fail for empty string', () => {
      const rule = required();
      expect(rule.validate('')).toBe(false);
      expect(rule.validate('   ')).toBe(false);
    });

    it('should pass for non-empty string', () => {
      const rule = required();
      expect(rule.validate('test')).toBe(true);
    });

    it('should use custom message', () => {
      const rule = required('Name is required');
      expect(rule.message).toBe('Name is required');
    });
  });

  describe('email', () => {
    it('should fail for invalid emails', () => {
      const rule = email();
      expect(rule.validate('invalid')).toBe(false);
      expect(rule.validate('test@')).toBe(false);
      expect(rule.validate('@test.com')).toBe(false);
      expect(rule.validate('test@test')).toBe(false);
    });

    it('should pass for valid emails', () => {
      const rule = email();
      expect(rule.validate('test@example.com')).toBe(true);
      expect(rule.validate('test.name@example.co.uk')).toBe(true);
      expect(rule.validate('test+label@example.com')).toBe(true);
    });

    it('should use custom message', () => {
      const rule = email('Invalid email format');
      expect(rule.message).toBe('Invalid email format');
    });
  });

  describe('minLength', () => {
    it('should fail for strings shorter than minimum', () => {
      const rule = minLength(5);
      expect(rule.validate('test')).toBe(false);
      expect(rule.validate('')).toBe(false);
    });

    it('should pass for strings equal to or longer than minimum', () => {
      const rule = minLength(5);
      expect(rule.validate('tests')).toBe(true);
      expect(rule.validate('testing')).toBe(true);
    });

    it('should use custom message', () => {
      const rule = minLength(5, 'Too short');
      expect(rule.message).toBe('Too short');
    });
  });

  describe('maxLength', () => {
    it('should fail for strings longer than maximum', () => {
      const rule = maxLength(5);
      expect(rule.validate('testing')).toBe(false);
    });

    it('should pass for strings equal to or shorter than maximum', () => {
      const rule = maxLength(5);
      expect(rule.validate('tests')).toBe(true);
      expect(rule.validate('test')).toBe(true);
      expect(rule.validate('')).toBe(true);
    });

    it('should use custom message', () => {
      const rule = maxLength(5, 'Too long');
      expect(rule.message).toBe('Too long');
    });
  });

  describe('phone', () => {
    it('should fail for invalid phone numbers', () => {
      const rule = phone();
      expect(rule.validate('123')).toBe(false);
      expect(rule.validate('not-a-phone')).toBe(false);
      expect(rule.validate('abc1234567')).toBe(false);
    });

    it('should pass for valid phone numbers', () => {
      const rule = phone();
      expect(rule.validate('1234567890')).toBe(true);
      expect(rule.validate('+1 (555) 123-4567')).toBe(true);
      expect(rule.validate('555-123-4567')).toBe(true);
    });

    it('should use custom message', () => {
      const rule = phone('Invalid phone');
      expect(rule.message).toBe('Invalid phone');
    });
  });

  describe('url', () => {
    it('should fail for invalid URLs', () => {
      const rule = url();
      expect(rule.validate('not-a-url')).toBe(false);
      expect(rule.validate('www.example.com')).toBe(false);
      expect(rule.validate('example')).toBe(false);
    });

    it('should pass for valid URLs', () => {
      const rule = url();
      expect(rule.validate('https://example.com')).toBe(true);
      expect(rule.validate('http://localhost:3000')).toBe(true);
      expect(rule.validate('https://example.com/path?query=value')).toBe(true);
    });

    it('should use custom message', () => {
      const rule = url('Invalid URL format');
      expect(rule.message).toBe('Invalid URL format');
    });
  });

  describe('validate', () => {
    it('should return first error message when validation fails', () => {
      const rules = [required(), minLength(5)];
      expect(validate('', rules)).toBe('This field is required');
      expect(validate('test', rules)).toBe('Must be at least 5 characters');
    });

    it('should return null for valid input', () => {
      const rules = [required(), minLength(5)];
      expect(validate('testing', rules)).toBeNull();
    });

    it('should return null for empty rules array', () => {
      expect(validate('anything', [])).toBeNull();
    });
  });

  describe('validateForm', () => {
    it('should validate multiple fields', () => {
      const values = { email: '', name: 'ab' };
      const rules = {
        email: [required(), email()],
        name: [required(), minLength(3)],
      };
      const errors = validateForm(values, rules);
      expect(errors.email).toBe('This field is required');
      expect(errors.name).toBe('Must be at least 3 characters');
    });

    it('should return empty object for valid form', () => {
      const values = { email: 'test@example.com', name: 'John' };
      const rules = {
        email: [required(), email()],
        name: [required(), minLength(3)],
      };
      const errors = validateForm(values, rules);
      expect(Object.keys(errors)).toHaveLength(0);
    });

    it('should handle missing fields gracefully', () => {
      const values = { email: '' };
      const rules = {
        email: [required()],
        name: [required()],
      };
      const errors = validateForm(values, rules);
      expect(errors.email).toBe('This field is required');
      expect(errors.name).toBe('This field is required');
    });

    it('should skip fields without validation rules', () => {
      const values = { email: 'test@example.com', noRules: '' };
      const rules = {
        email: [required(), email()],
      };
      const errors = validateForm(values, rules);
      expect(Object.keys(errors)).toHaveLength(0);
    });
  });
});
