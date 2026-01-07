'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/Common';
import { fadeInUpVariant, staggerContainerVariant } from '@/styles';
import {
  CTAWrapper,
  CTAContainer,
  CTATitle,
  CTASubtitle,
  BenefitsList,
  BenefitItem,
} from './styles';

export interface CTASectionProps {
  title?: string;
  subtitle?: string;
  showBenefits?: boolean;
  buttonText?: string;
  buttonHref?: string;
}

const DEFAULT_BENEFITS = [
  'Free 30-minute consultation',
  'No obligation',
  'Expert advice',
  'Actionable insights',
];

const CTASection: React.FC<CTASectionProps> = ({
  title = 'Ready to bring your idea to life?',
  subtitle = 'Book a free 30-minute consultation with our team. We\'ll discuss your project, provide expert insights, and outline a path forward.',
  showBenefits = true,
  buttonText = 'Book a Free Consultation',
  buttonHref = '/book-consultation',
}) => {
  return (
    <CTAWrapper data-testid="cta-section">
      <CTAContainer
        as={motion.div}
        variants={staggerContainerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div variants={fadeInUpVariant}>
          <CTATitle>{title}</CTATitle>
        </motion.div>

        <motion.div variants={fadeInUpVariant}>
          <CTASubtitle>{subtitle}</CTASubtitle>
        </motion.div>

        {showBenefits && (
          <BenefitsList as={motion.ul} variants={fadeInUpVariant}>
            {DEFAULT_BENEFITS.map((benefit, index) => (
              <BenefitItem key={index}>{benefit}</BenefitItem>
            ))}
          </BenefitsList>
        )}

        <motion.div variants={fadeInUpVariant}>
          <Button href={buttonHref} size="lg">
            {buttonText}
          </Button>
        </motion.div>
      </CTAContainer>
    </CTAWrapper>
  );
};

export default CTASection;
