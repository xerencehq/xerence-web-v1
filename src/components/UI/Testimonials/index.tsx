'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUpVariant, staggerContainerVariant } from '@/styles';
import {
  TestimonialsWrapper,
  TestimonialsContainer,
  SectionHeader,
  SectionTitle,
  TestimonialsGrid,
  TestimonialCard,
  QuoteIcon,
  Quote,
  ClientInfo,
  ClientAvatar,
  ClientDetails,
  ClientName,
  ClientRole,
} from './styles';

const TESTIMONIALS = [
  {
    quote: 'Xerence transformed our outdated systems into a modern, scalable platform. Their team understood our needs perfectly and delivered beyond expectations.',
    name: 'Sarah Johnson',
    role: 'CTO, TechStart Inc.',
    initials: 'SJ',
  },
  {
    quote: 'The AI solution they built for us has automated 60% of our data analysis tasks. Incredible ROI and the team was a pleasure to work with.',
    name: 'Michael Chen',
    role: 'CEO, DataFlow Analytics',
    initials: 'MC',
  },
  {
    quote: 'Professional, responsive, and technically excellent. They delivered our mobile app on time and on budget. Highly recommend!',
    name: 'Emily Rodriguez',
    role: 'Product Manager, HealthSync',
    initials: 'ER',
  },
];

const Testimonials: React.FC = () => {
  return (
    <TestimonialsWrapper data-testid="testimonials-section">
      <TestimonialsContainer>
        <SectionHeader
          as={motion.div}
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <SectionTitle>What Our Clients Say</SectionTitle>
        </SectionHeader>

        <TestimonialsGrid
          as={motion.div}
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              as={motion.div}
              key={index}
              variants={fadeInUpVariant}
              data-testid="testimonial-card"
            >
              <QuoteIcon>&ldquo;</QuoteIcon>
              <Quote>{testimonial.quote}</Quote>
              <ClientInfo>
                <ClientAvatar>{testimonial.initials}</ClientAvatar>
                <ClientDetails>
                  <ClientName>{testimonial.name}</ClientName>
                  <ClientRole>{testimonial.role}</ClientRole>
                </ClientDetails>
              </ClientInfo>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </TestimonialsContainer>
    </TestimonialsWrapper>
  );
};

export default Testimonials;
