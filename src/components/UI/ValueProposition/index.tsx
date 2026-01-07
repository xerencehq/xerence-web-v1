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
  StatsGrid,
  StatItem,
  StatNumber,
  StatLabel,
} from './styles';

const DIFFERENTIATORS = [
  {
    icon: '👥',
    title: 'Expert Team',
    description: 'Senior engineers with deep expertise in modern technologies and best practices.',
  },
  {
    icon: '🔄',
    title: 'Proven Process',
    description: 'Battle-tested methodology that delivers results on time and within budget.',
  },
  {
    icon: '🛡️',
    title: 'End-to-End Support',
    description: 'From initial concept to ongoing maintenance, we\'re with you every step.',
  },
];

const STATS = [
  { number: '5+', label: 'Years of Experience' },
  { number: '50+', label: 'Projects Delivered' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' },
];

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

        <StatsGrid
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
        </StatsGrid>
      </ValueContainer>
    </ValueWrapper>
  );
};

export default ValueProposition;
