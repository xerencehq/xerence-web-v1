'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUpVariant, staggerContainerVariant } from '@/styles';
import { PageHero, PageTitle, PageSubtitle } from './styles';

export interface ContactHeroProps {
  title: string;
  subtitle: string;
}

const ContactHero: React.FC<ContactHeroProps> = ({ title, subtitle }) => {
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

export default ContactHero;
