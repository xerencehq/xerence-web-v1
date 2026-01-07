import React from 'react';
import { render, screen, fireEvent, waitFor } from '@/__tests__/test-utils';
import userEvent from '@testing-library/user-event';
import WhatToExpect from './WhatToExpect';
import LeadQualifier from './LeadQualifier';
import ConsultationHero from './ConsultationHero';

describe('WhatToExpect', () => {
  it('renders the section title', () => {
    render(<WhatToExpect />);
    expect(screen.getByRole('heading', { name: /what to expect/i })).toBeInTheDocument();
  });

  it('renders the introduction text', () => {
    render(<WhatToExpect />);
    expect(screen.getByText(/in this free 30-minute consultation/i)).toBeInTheDocument();
  });

  it('renders all expectation items', () => {
    render(<WhatToExpect />);
    expect(screen.getByText(/discuss your project goals/i)).toBeInTheDocument();
    expect(screen.getByText(/explore potential technical approaches/i)).toBeInTheDocument();
    expect(screen.getByText(/provide initial recommendations/i)).toBeInTheDocument();
    expect(screen.getByText(/answer any questions/i)).toBeInTheDocument();
  });

  it('renders the no commitment note', () => {
    render(<WhatToExpect />);
    expect(screen.getByText(/no commitment required/i)).toBeInTheDocument();
  });

  it('has correct test id', () => {
    render(<WhatToExpect />);
    expect(screen.getByTestId('what-to-expect')).toBeInTheDocument();
  });
});

describe('LeadQualifier', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders the section title', () => {
    render(<LeadQualifier />);
    expect(screen.getByRole('heading', { name: /help us prepare/i })).toBeInTheDocument();
  });

  it('renders optional note', () => {
    render(<LeadQualifier />);
    expect(screen.getByText(/optional.*after booking/i)).toBeInTheDocument();
  });

  it('renders budget select field', () => {
    render(<LeadQualifier />);
    expect(screen.getByLabelText(/budget range/i)).toBeInTheDocument();
  });

  it('renders project overview textarea', () => {
    render(<LeadQualifier />);
    expect(screen.getByLabelText(/project overview/i)).toBeInTheDocument();
  });

  it('renders submit button', () => {
    render(<LeadQualifier />);
    expect(screen.getByRole('button', { name: /save for our call/i })).toBeInTheDocument();
  });

  it('shows success message after submission', async () => {
    const user = userEvent.setup();
    render(<LeadQualifier />);

    await user.selectOptions(screen.getByLabelText(/budget range/i), '25k-50k');
    await user.type(screen.getByLabelText(/project overview/i), 'Test project description');

    fireEvent.submit(screen.getByTestId('lead-qualifier').querySelector('form')!);

    await waitFor(() => {
      expect(screen.getByTestId('qualifier-success')).toBeInTheDocument();
    });
  });

  it('saves data to localStorage on submission', async () => {
    const user = userEvent.setup();
    render(<LeadQualifier />);

    await user.selectOptions(screen.getByLabelText(/budget range/i), '50k-100k');
    await user.type(screen.getByLabelText(/project overview/i), 'My project details');

    fireEvent.submit(screen.getByTestId('lead-qualifier').querySelector('form')!);

    await waitFor(() => {
      const saved = JSON.parse(localStorage.getItem('leadQualifier') || '{}');
      expect(saved.budget).toBe('50k-100k');
      expect(saved.overview).toBe('My project details');
    });
  });

  it('has correct test id', () => {
    render(<LeadQualifier />);
    expect(screen.getByTestId('lead-qualifier')).toBeInTheDocument();
  });
});

describe('ConsultationHero', () => {
  it('renders title and subtitle', () => {
    render(
      <ConsultationHero
        title="Book a Free Consultation"
        subtitle="Let's discuss your project."
      />
    );
    expect(screen.getByRole('heading', { name: /book a free consultation/i })).toBeInTheDocument();
    expect(screen.getByText(/let's discuss your project/i)).toBeInTheDocument();
  });
});

describe('LeadQualifier accessibility', () => {
  it('form fields have proper labels', () => {
    render(<LeadQualifier />);
    const budgetSelect = screen.getByLabelText(/budget range/i);
    const overviewTextarea = screen.getByLabelText(/project overview/i);

    expect(budgetSelect).toHaveAttribute('id');
    expect(overviewTextarea).toHaveAttribute('id');
  });
});
