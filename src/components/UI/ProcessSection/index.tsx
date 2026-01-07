'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUpVariant, staggerContainerVariant } from '@/styles';
import {
  ProcessWrapper,
  ProcessContainer,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  StepsGrid,
  StepCard,
  StepNumber,
  StepTitle,
  StepDescription,
} from './styles';

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We dive deep into understanding your vision, goals, and challenges.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Our team crafts intuitive interfaces and robust architectures.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'We develop using modern technologies and best practices.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'We deploy, monitor, and iterate based on real-world feedback.',
  },
];

const ProcessSection: React.FC = () => {
  return (
    <ProcessWrapper data-testid="process-section">
      <ProcessContainer>
        <SectionHeader
          as={motion.div}
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <SectionTitle>How We Work</SectionTitle>
          <SectionSubtitle>
            Our proven process ensures quality delivery at every stage
          </SectionSubtitle>
        </SectionHeader>

        <StepsGrid
          as={motion.div}
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {PROCESS_STEPS.map((step, index) => (
            <StepCard
              as={motion.div}
              key={index}
              variants={fadeInUpVariant}
            >
              <StepNumber>{step.number}</StepNumber>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </StepCard>
          ))}
        </StepsGrid>
      </ProcessContainer>
    </ProcessWrapper>
  );
};

export default ProcessSection;
