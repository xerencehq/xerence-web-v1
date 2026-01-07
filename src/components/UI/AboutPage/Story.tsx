'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUpVariant, staggerContainerVariant } from '@/styles';
import {
  StoryWrapper,
  StoryContent,
  SectionTitle,
  StoryBlock,
  StoryLabel,
  StoryText,
} from './styles';

export const Story: React.FC = () => {
  return (
    <StoryWrapper data-testid="about-story">
      <motion.div
        variants={staggerContainerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div variants={fadeInUpVariant}>
          <SectionTitle>Our Story</SectionTitle>
        </motion.div>

        <StoryContent>
          <StoryBlock as={motion.div} variants={fadeInUpVariant}>
            <StoryLabel>Our Mission</StoryLabel>
            <StoryText>
              We believe that great software has the power to transform businesses and improve lives.
              Our mission is to partner with forward-thinking companies to build intelligent software
              solutions that solve real problems and create lasting value.
            </StoryText>
          </StoryBlock>

          <StoryBlock as={motion.div} variants={fadeInUpVariant}>
            <StoryLabel>Our Vision</StoryLabel>
            <StoryText>
              We envision a world where technology amplifies human potential rather than replacing it.
              By combining cutting-edge AI capabilities with thoughtful design and robust engineering,
              we help our clients stay ahead in an increasingly digital world.
            </StoryText>
          </StoryBlock>

          <StoryBlock as={motion.div} variants={fadeInUpVariant}>
            <StoryLabel>Our Approach</StoryLabel>
            <StoryText>
              We don&apos;t just write code - we craft solutions. Every project begins with deep
              understanding of your business, your users, and your goals. We then apply our expertise
              to deliver software that exceeds expectations and stands the test of time.
            </StoryText>
          </StoryBlock>
        </StoryContent>
      </motion.div>
    </StoryWrapper>
  );
};
