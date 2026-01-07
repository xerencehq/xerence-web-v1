import React from 'react';
import { render, screen, fireEvent, waitFor } from '@/__tests__/test-utils';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import ContactHero from './ContactHero';

describe('ContactForm', () => {
  it('renders all form fields', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it('renders submit button', () => {
    render(<ContactForm />);
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('shows validation errors when submitting empty form', async () => {
    render(<ContactForm />);
    const submitButton = screen.getByRole('button', { name: /send message/i });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    });
  });

  it('shows email validation error for invalid email', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText(/name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email/i), 'invalid-email');
    await user.selectOptions(screen.getByLabelText(/subject/i), 'general');
    await user.type(screen.getByLabelText(/message/i), 'This is a test message');

    // Submit the form
    const form = screen.getByTestId('contact-form');
    fireEvent.submit(form);

    await waitFor(() => {
      expect(screen.getByText(/please enter a valid email/i)).toBeInTheDocument();
    });
  });

  it('clears errors when user starts typing', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    // Submit empty to trigger errors
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    });

    // Start typing in name field
    await user.type(screen.getByLabelText(/name/i), 'J');

    await waitFor(() => {
      expect(screen.queryByText(/name is required/i)).not.toBeInTheDocument();
    });
  });

  it('shows success message after successful submission', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText(/name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.selectOptions(screen.getByLabelText(/subject/i), 'general');
    await user.type(screen.getByLabelText(/message/i), 'This is a test message that is long enough');

    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByTestId('success-message')).toBeInTheDocument();
    }, { timeout: 3000 });

    expect(screen.getByText(/message sent/i)).toBeInTheDocument();
  });

  it('allows sending another message after success', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    // Fill and submit form
    await user.type(screen.getByLabelText(/name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.selectOptions(screen.getByLabelText(/subject/i), 'general');
    await user.type(screen.getByLabelText(/message/i), 'This is a test message that is long enough');

    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByTestId('success-message')).toBeInTheDocument();
    }, { timeout: 3000 });

    // Click to send another message
    fireEvent.click(screen.getByRole('button', { name: /send another message/i }));

    await waitFor(() => {
      expect(screen.getByTestId('contact-form')).toBeInTheDocument();
    });
  });
});

describe('ContactInfo', () => {
  it('renders email address', () => {
    render(<ContactInfo />);
    expect(screen.getByText('hello@xerence.com')).toBeInTheDocument();
  });

  it('renders email as clickable link', () => {
    render(<ContactInfo />);
    const emailLink = screen.getByRole('link', { name: /hello@xerence.com/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:hello@xerence.com');
  });

  it('renders social links', () => {
    render(<ContactInfo />);
    expect(screen.getByLabelText(/twitter/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/linkedin/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/github/i)).toBeInTheDocument();
  });

  it('social links open in new tab', () => {
    render(<ContactInfo />);
    const twitterLink = screen.getByLabelText(/twitter/i);
    expect(twitterLink).toHaveAttribute('target', '_blank');
    expect(twitterLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders consultation CTA', () => {
    render(<ContactInfo />);
    expect(screen.getByText(/looking for a consultation/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /book a call/i })).toHaveAttribute('href', '/book-consultation');
  });
});

describe('ContactHero', () => {
  it('renders title and subtitle', () => {
    render(<ContactHero title="Get in Touch" subtitle="We'd love to hear from you." />);
    expect(screen.getByRole('heading', { name: /get in touch/i })).toBeInTheDocument();
    expect(screen.getByText(/we'd love to hear from you/i)).toBeInTheDocument();
  });
});

describe('ContactPage accessibility', () => {
  it('form has proper labels', () => {
    render(<ContactForm />);
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const subjectSelect = screen.getByLabelText(/subject/i);
    const messageTextarea = screen.getByLabelText(/message/i);

    expect(nameInput).toHaveAttribute('id');
    expect(emailInput).toHaveAttribute('id');
    expect(subjectSelect).toHaveAttribute('id');
    expect(messageTextarea).toHaveAttribute('id');
  });

  it('required fields are marked', () => {
    render(<ContactForm />);
    // Check for required indicators (asterisks or aria-required)
    const requiredLabels = screen.getAllByText('*');
    expect(requiredLabels.length).toBeGreaterThanOrEqual(4);
  });
});
