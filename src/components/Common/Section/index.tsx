'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUpVariant } from '@/styles';
import { SectionWrapper, SectionContainer, SectionHeader, SectionTitle, SectionSubtitle, SectionContent } from './styles';

export interface SectionProps {
  children: React.ReactNode;
  id?: string;
  title?: string;
  subtitle?: string;
  background?: 'default' | 'alt' | 'dark';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  centered?: boolean;
  fullWidth?: boolean;
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  id,
  title,
  subtitle,
  background = 'default',
  padding = 'lg',
  centered = false,
  fullWidth = false,
  className,
}) => {
  return (
    <SectionWrapper
      id={id}
      $background={background}
      $padding={padding}
      className={className}
      data-testid="section"
    >
      <SectionContainer $fullWidth={fullWidth}>
        {(title || subtitle) && (
          <SectionHeader
            as={motion.div}
            variants={fadeInUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            $centered={centered}
          >
            {title && <SectionTitle>{title}</SectionTitle>}
            {subtitle && <SectionSubtitle>{subtitle}</SectionSubtitle>}
          </SectionHeader>
        )}
        <SectionContent $centered={centered}>{children}</SectionContent>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default Section;
