'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainerVariant } from '@/styles';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import { ContactWrapper } from './styles';

const ContactContent: React.FC = () => {
  return (
    <ContactWrapper
      as={motion.div}
      variants={staggerContainerVariant}
      initial="hidden"
      animate="visible"
    >
      <ContactInfo />
      <ContactForm />
    </ContactWrapper>
  );
};

export default ContactContent;
