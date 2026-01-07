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
    icon: '💻',
    title: 'Custom Software Development',
    description: 'Bespoke solutions tailored to your unique business needs.',
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    description: 'Native and cross-platform apps for iOS and Android.',
  },
  {
    icon: '🧠',
    title: 'AI/ML Solutions',
    description: 'Intelligent automation and machine learning integration.',
  },
  {
    icon: '☁️',
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
