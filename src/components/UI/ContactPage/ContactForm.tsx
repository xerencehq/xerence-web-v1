'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input, TextArea, FormField, Select } from '@/components/Forms';
import { Button } from '@/components/Common';
import { required, email, minLength, validateForm } from '@/lib/validation';
import { fadeInUpVariant } from '@/styles';
import {
  FormWrapper,
  FormTitle,
  FormSubtitle,
  SuccessMessage,
  ErrorMessage,
} from './styles';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  [key: string]: string;
}

const SUBJECT_OPTIONS = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'partnership', label: 'Partnership Opportunity' },
  { value: 'support', label: 'Technical Support' },
  { value: 'other', label: 'Other' },
];

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validationRules = {
    name: [required('Name is required'), minLength(2, 'Name must be at least 2 characters')],
    email: [required('Email is required'), email('Please enter a valid email')],
    subject: [required('Please select a subject')],
    message: [required('Message is required'), minLength(10, 'Message must be at least 10 characters')],
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');

    const validationErrors = validateForm(formData, validationRules);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    // Replace with actual API call when ready
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <SuccessMessage
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        data-testid="success-message"
      >
        <h3>Message Sent!</h3>
        <p>Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
        <Button onClick={() => setSubmitStatus('idle')} variant="outline">
          Send Another Message
        </Button>
      </SuccessMessage>
    );
  }

  return (
    <FormWrapper
      as={motion.form}
      variants={fadeInUpVariant}
      initial="hidden"
      animate="visible"
      onSubmit={handleSubmit}
      data-testid="contact-form"
    >
      <div>
        <FormTitle>Send us a message</FormTitle>
        <FormSubtitle>Fill out the form below and we&apos;ll get back to you soon.</FormSubtitle>
      </div>

      <FormField label="Name" htmlFor="name" error={errors.name} required>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          error={!!errors.name}
        />
      </FormField>

      <FormField label="Email" htmlFor="email" error={errors.email} required>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          error={!!errors.email}
        />
      </FormField>

      <FormField label="Subject" htmlFor="subject" error={errors.subject} required>
        <Select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          options={SUBJECT_OPTIONS}
          placeholder="Select a subject"
          error={!!errors.subject}
        />
      </FormField>

      <FormField label="Message" htmlFor="message" error={errors.message} required>
        <TextArea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="How can we help you?"
          rows={5}
          error={!!errors.message}
        />
      </FormField>

      {submitStatus === 'error' && (
        <ErrorMessage>
          Something went wrong. Please try again or email us directly.
        </ErrorMessage>
      )}

      <Button type="submit" loading={isSubmitting}>
        Send Message
      </Button>
    </FormWrapper>
  );
};

export default ContactForm;
