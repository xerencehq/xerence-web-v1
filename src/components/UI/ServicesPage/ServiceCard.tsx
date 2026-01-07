'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/Common';
import { fadeInUpVariant } from '@/styles';
import { Service } from '@/data/services';
import {
  ServiceCardWrapper,
  ServiceIconWrapper,
  ServiceContent,
  ServiceTitle,
  ServiceDescription,
  BenefitsList,
  BenefitItem,
  TechnologiesSection,
  TechTag,
  ServiceActions,
} from './styles';

// Icon components for each service type
const ServiceIcons: Record<string, React.ReactNode> = {
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  mobile: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  brain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4 4 4 0 0 1-4-4V6a4 4 0 0 1 4-4z" />
      <path d="M16 11c2.2 0 4 1.8 4 4v1a4 4 0 0 1-8 0v-1c0-2.2 1.8-4 4-4z" />
      <path d="M8 11c-2.2 0-4 1.8-4 4v1a4 4 0 0 0 8 0v-1c0-2.2-1.8-4-4-4z" />
      <path d="M12 11v5" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  api: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h6v6H4z" />
      <path d="M14 4h6v6h-6z" />
      <path d="M4 14h6v6H4z" />
      <path d="M17 14v3a2 2 0 0 1-2 2h-3" />
      <path d="M14 17h6" />
    </svg>
  ),
  design: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  ),
  consulting: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <line x1="9" y1="10" x2="15" y2="10" />
      <line x1="12" y1="7" x2="12" y2="13" />
    </svg>
  ),
};

export interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const icon = ServiceIcons[service.icon] || ServiceIcons.code;
  const hasTechnologies = service.technologies && service.technologies.length > 0;

  return (
    <ServiceCardWrapper
      as={motion.article}
      variants={fadeInUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      id={service.id}
      data-testid={`service-card-${service.id}`}
    >
      <ServiceIconWrapper data-testid="service-icon">
        {icon}
      </ServiceIconWrapper>

      <ServiceContent>
        <ServiceTitle>{service.title}</ServiceTitle>
        <ServiceDescription>{service.fullDescription}</ServiceDescription>

        <BenefitsList>
          {service.benefits.map((benefit, index) => (
            <BenefitItem key={index}>{benefit}</BenefitItem>
          ))}
        </BenefitsList>

        {hasTechnologies && (
          <TechnologiesSection data-testid="technologies-section">
            {service.technologies!.map((tech, index) => (
              <TechTag key={index}>{tech}</TechTag>
            ))}
          </TechnologiesSection>
        )}

        <ServiceActions>
          <Button href="/book-consultation" variant="outline" size="sm">
            Book a Call
          </Button>
        </ServiceActions>
      </ServiceContent>
    </ServiceCardWrapper>
  );
};

export default ServiceCard;
