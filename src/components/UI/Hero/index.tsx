'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/Common';
import { fadeInUpVariant, staggerContainerVariant } from '@/styles';
import {
  HeroWrapper,
  HeroContent,
  Headline,
  Subheadline,
  CTAContainer,
} from './styles';

const Hero: React.FC = () => {
  return (
    <HeroWrapper data-testid="hero-section">
      <HeroContent
        as={motion.div}
        variants={staggerContainerVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeInUpVariant}>
          <Headline>
            Building the Future of{' '}
            <span>Intelligent Software</span>
          </Headline>
        </motion.div>

        <motion.div variants={fadeInUpVariant}>
          <Subheadline>
            We craft cutting-edge software solutions that transform businesses.
            From AI-powered applications to scalable cloud infrastructure,
            we bring your vision to life.
          </Subheadline>
        </motion.div>

        <CTAContainer as={motion.div} variants={fadeInUpVariant}>
          <Button href="/book-consultation" size="lg">
            Book a Free Consultation
          </Button>
          <Button href="/projects" variant="outline" size="lg">
            View Our Work
          </Button>
        </CTAContainer>
      </HeroContent>
    </HeroWrapper>
  );
};

export default Hero;
