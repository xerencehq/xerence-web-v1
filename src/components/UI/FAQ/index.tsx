'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { fadeInUpVariant, staggerContainerVariant } from '@/styles';
import {
  Wrapper,
  Inner,
  SectionHeader,
  SectionTitle,
  Accordion,
  AccordionItem,
  Question,
  Answer,
} from './styles';
import { faqData, animate } from './constants';

const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <Wrapper id="faq" data-testid="faq-section">
      <Inner>
        <SectionHeader
          as={motion.div}
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <SectionTitle>Frequently Asked Questions</SectionTitle>
        </SectionHeader>

        <Accordion
          as={motion.div}
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              variants={animate}
              initial="initial"
              animate="open"
              custom={index}
            >
              <Question
                onClick={() => toggleItem(index)}
                aria-expanded={openItem === index}
                aria-controls={`faq-answer-${index}`}
              >
                {item.question}
                <ChevronIcon />
              </Question>
              <AnimatePresence>
                {openItem === index && (
                  <Answer
                    id={`faq-answer-${index}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.answer}
                  </Answer>
                )}
              </AnimatePresence>
            </AccordionItem>
          ))}
        </Accordion>
      </Inner>
    </Wrapper>
  );
};

export default FAQ;
