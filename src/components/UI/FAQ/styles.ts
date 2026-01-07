'use client';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { containerStyles, flexColumn } from '@/styles';

export const Wrapper = styled.section`
  padding: ${({ theme }) => theme.spacing[20]} 0;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
`;

export const Inner = styled.div`
  ${containerStyles}
  ${flexColumn}
  gap: ${({ theme }) => theme.spacing[12]};
`;

export const SectionHeader = styled.div`
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(
    ${({ theme }) => theme.fontSizes['2xl']},
    5vw,
    ${({ theme }) => theme.fontSizes['4xl']}
  );
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const Accordion = styled.div`
  ${flexColumn}
  gap: ${({ theme }) => theme.spacing[4]};
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
`;

export const AccordionItem = styled(motion.div)`
  ${flexColumn}
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
`;

export const Question = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[6]};
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.white};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  svg {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    transition: transform ${({ theme }) => theme.transitions.fast};
  }

  &[aria-expanded='true'] svg {
    transform: rotate(180deg);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.base};
    padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[4]};
    gap: ${({ theme }) => theme.spacing[3]};
  }
`;

export const Answer = styled(motion.div)`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.fontSizes.base};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  padding: 0 ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[5]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[4]};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;
