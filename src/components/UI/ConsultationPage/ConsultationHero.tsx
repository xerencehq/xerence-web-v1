'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUpVariant, staggerContainerVariant } from '@/styles';
import { PageHero, PageTitle, PageSubtitle } from './styles';

export interface ConsultationHeroProps {
  title: string;
  subtitle: string;
}

const ConsultationHero: React.FC<ConsultationHeroProps> = ({ title, subtitle }) => {
  return (
    <PageHero
      as={motion.div}
      variants={staggerContainerVariant}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={fadeInUpVariant}>
        <PageTitle>{title}</PageTitle>
      </motion.div>
      <motion.div variants={fadeInUpVariant}>
        <PageSubtitle>{subtitle}</PageSubtitle>
      </motion.div>
    </PageHero>
  );
};

export default ConsultationHero;
