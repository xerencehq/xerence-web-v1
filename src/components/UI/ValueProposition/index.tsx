'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUpVariant, staggerContainerVariant } from '@/styles';
import {
  ValueWrapper,
  ValueContainer,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  DifferentiatorsGrid,
  DifferentiatorCard,
  IconWrapper,
  CardTitle,
  CardDescription,
  // StatsGrid,
  // StatItem,
  // StatNumber,
  // StatLabel,
} from './styles';

const DIFFERENTIATORS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Expert Team',
    description: 'Senior engineers with deep expertise in modern technologies and best practices.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10" />
        <path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14" />
      </svg>
    ),
    title: 'Proven Process',
    description: 'Battle-tested methodology that delivers results on time and within budget.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: 'End-to-End Support',
    description: 'From initial concept to ongoing maintenance, we\'re with you every step.',
  },
];

// const STATS = [
//   { number: '5+', label: 'Years of Experience' },
//   { number: '50+', label: 'Projects Delivered' },
//   { number: '98%', label: 'Client Satisfaction' },
//   { number: '24/7', label: 'Support Available' },
// ];

const ValueProposition: React.FC = () => {
  return (
    <ValueWrapper data-testid="value-proposition-section">
      <ValueContainer>
        <SectionHeader
          as={motion.div}
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <SectionTitle>Why Partner With Xerence?</SectionTitle>
          <SectionSubtitle>
            We combine technical excellence with strategic thinking to deliver
            solutions that drive real business value.
          </SectionSubtitle>
        </SectionHeader>

        <DifferentiatorsGrid
          as={motion.div}
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {DIFFERENTIATORS.map((item, index) => (
            <DifferentiatorCard
              as={motion.div}
              key={index}
              variants={fadeInUpVariant}
            >
              <IconWrapper>{item.icon}</IconWrapper>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </DifferentiatorCard>
          ))}
        </DifferentiatorsGrid>

        {/* <StatsGrid
          as={motion.div}
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {STATS.map((stat, index) => (
            <StatItem key={index}>
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatItem>
          ))}
        </StatsGrid> */}
      </ValueContainer>
    </ValueWrapper>
  );
};

export default ValueProposition;
