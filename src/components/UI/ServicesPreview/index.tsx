'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/Common';
import { fadeInUpVariant, staggerContainerVariant } from '@/styles';
import {
  ServicesWrapper,
  ServicesContainer,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  ServicesGrid,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
  CTAWrapper,
} from './styles';

const SERVICES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Custom Software Development',
    description: 'Bespoke solutions tailored to your unique business needs.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: 'Mobile App Development',
    description: 'Native and cross-platform apps for iOS and Android.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4 4 4 0 0 1-4-4V6a4 4 0 0 1 4-4z" />
        <path d="M16 11c2.2 0 4 1.8 4 4v1a4 4 0 0 1-8 0v-1c0-2.2 1.8-4 4-4z" />
        <path d="M8 11c-2.2 0-4 1.8-4 4v1a4 4 0 0 0 8 0v-1c0-2.2-1.8-4-4-4z" />
        <path d="M12 11v5" />
      </svg>
    ),
    title: 'AI/ML Solutions',
    description: 'Intelligent automation and machine learning integration.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    title: 'Cloud Infrastructure',
    description: 'Scalable, secure cloud architecture and DevOps.',
  },
];

const ServicesPreview: React.FC = () => {
  return (
    <ServicesWrapper data-testid="services-preview-section">
      <ServicesContainer>
        <SectionHeader
          as={motion.div}
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <SectionTitle>Our Services</SectionTitle>
          <SectionSubtitle>
            Comprehensive software development services to help your business thrive
          </SectionSubtitle>
        </SectionHeader>

        <ServicesGrid
          as={motion.div}
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {SERVICES.map((service, index) => (
            <ServiceCard
              as={motion.div}
              key={index}
              variants={fadeInUpVariant}
            >
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGrid>

        <CTAWrapper
          as={motion.div}
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Button href="/services" variant="outline">
            View All Services
          </Button>
        </CTAWrapper>
      </ServicesContainer>
    </ServicesWrapper>
  );
};

export default ServicesPreview;
