'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Select, TextArea, FormField } from '@/components/Forms';
import { Button } from '@/components/Common';
import { fadeInUpVariant } from '@/styles';
import {
  QualifierWrapper,
  QualifierHeader,
  QualifierForm,
  OptionalNote,
  SuccessNote,
} from './styles';

const BUDGET_OPTIONS = [
  { value: 'under-10k', label: 'Under $10,000' },
  { value: '10k-25k', label: '$10,000 - $25,000' },
  { value: '25k-50k', label: '$25,000 - $50,000' },
  { value: '50k-100k', label: '$50,000 - $100,000' },
  { value: 'over-100k', label: '$100,000+' },
  { value: 'not-sure', label: 'Not sure yet' },
];

const LeadQualifier: React.FC = () => {
  const [budget, setBudget] = useState('');
  const [overview, setOverview] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store in localStorage for later retrieval
    localStorage.setItem('leadQualifier', JSON.stringify({ budget, overview }));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <QualifierWrapper
        as={motion.div}
        variants={fadeInUpVariant}
        initial="hidden"
        animate="visible"
      >
        <SuccessNote data-testid="qualifier-success">
          ✓ Thanks! We&apos;ll review this before our call.
        </SuccessNote>
      </QualifierWrapper>
    );
  }

  return (
    <QualifierWrapper
      as={motion.div}
      variants={fadeInUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      data-testid="lead-qualifier"
    >
      <QualifierHeader>
        <h3>Help Us Prepare</h3>
        <OptionalNote>Optional - you can fill this out after booking too</OptionalNote>
      </QualifierHeader>

      <QualifierForm onSubmit={handleSubmit}>
        <FormField label="Budget Range" htmlFor="budget">
          <Select
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            options={BUDGET_OPTIONS}
            placeholder="Select a range"
          />
        </FormField>

        <FormField
          label="Project Overview"
          htmlFor="overview"
          helperText="Brief description of what you're looking to build"
        >
          <TextArea
            id="overview"
            value={overview}
            onChange={(e) => setOverview(e.target.value)}
            placeholder="Tell us about your project..."
            rows={4}
          />
        </FormField>

        <Button type="submit" variant="secondary" size="sm">
          Save for Our Call
        </Button>
      </QualifierForm>
    </QualifierWrapper>
  );
};

export default LeadQualifier;
