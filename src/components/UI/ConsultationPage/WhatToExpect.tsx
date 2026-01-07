'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainerVariant, fadeInUpVariant } from '@/styles';
import { ExpectWrapper, ExpectTitle, ExpectList, ExpectItem, ExpectNote } from './styles';

const EXPECTATIONS = [
  'Discuss your project goals and challenges',
  'Explore potential technical approaches',
  'Provide initial recommendations and insights',
  'Answer any questions you have about working together',
];

const WhatToExpect: React.FC = () => {
  return (
    <ExpectWrapper
      as={motion.div}
      variants={staggerContainerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      data-testid="what-to-expect"
    >
      <ExpectTitle as={motion.h2} variants={fadeInUpVariant}>
        What to Expect
      </ExpectTitle>

      <motion.p variants={fadeInUpVariant}>
        In this free 30-minute consultation, we&apos;ll:
      </motion.p>

      <ExpectList>
        {EXPECTATIONS.map((item, index) => (
          <ExpectItem
            key={index}
            as={motion.li}
            variants={fadeInUpVariant}
          >
            <span className="check">✓</span>
            {item}
          </ExpectItem>
        ))}
      </ExpectList>

      <ExpectNote as={motion.p} variants={fadeInUpVariant}>
        No commitment required. Just a friendly conversation about your project.
      </ExpectNote>
    </ExpectWrapper>
  );
};

export default WhatToExpect;
