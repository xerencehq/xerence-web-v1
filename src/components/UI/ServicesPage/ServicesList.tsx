'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainerVariant } from '@/styles';
import { Service } from '@/data/services';
import ServiceCard from './ServiceCard';
import { ServicesListWrapper } from './styles';

export interface ServicesListProps {
  services: Service[];
}

const ServicesList: React.FC<ServicesListProps> = ({ services }) => {
  if (services.length === 0) {
    return null;
  }

  return (
    <ServicesListWrapper
      as={motion.div}
      variants={staggerContainerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </ServicesListWrapper>
  );
};

export default ServicesList;
