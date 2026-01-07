'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUpVariant, staggerContainerVariant } from '@/styles';
import { HeroWrapper, HeroTitle, HeroSubtitle } from './styles';

export interface ProjectsHeroProps {
  title: string;
  subtitle: string;
}

export const ProjectsHero: React.FC<ProjectsHeroProps> = ({ title, subtitle }) => {
  return (
    <HeroWrapper
      as={motion.div}
      variants={staggerContainerVariant}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={fadeInUpVariant}>
        <HeroTitle>{title}</HeroTitle>
      </motion.div>
      <motion.div variants={fadeInUpVariant}>
        <HeroSubtitle>{subtitle}</HeroSubtitle>
      </motion.div>
    </HeroWrapper>
  );
};
