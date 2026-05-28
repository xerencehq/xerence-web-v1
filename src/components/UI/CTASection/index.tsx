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
  '30-min intro call',
  'No pitch deck',
  'Honest takes',
  'Clear next steps',
];

const CTASection: React.FC<CTASectionProps> = ({
  title = 'Got something to build?',
  subtitle = "Tell us about your idea. We'll dig into the problem, sketch an approach, and figure out if we're a fit.",
  showBenefits = true,
  buttonText = "Let's talk",
  buttonHref = '/book-meeting',
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
