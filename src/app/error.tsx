'use client';

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Button } from '@/components/Common';
import { containerStyles, flexColumnCenter, fadeInUpVariant } from '@/styles';

const Wrapper = styled.div`
  min-height: 100vh;
  ${flexColumnCenter}
  background-color: ${({ theme }) => theme.colors.background};
`;

const Content = styled.section`
  ${flexColumnCenter}
  ${containerStyles}
  text-align: center;
  padding: ${({ theme }) => theme.spacing[20]} 0;
`;

const ErrorIcon = styled.div`
  font-size: 4rem;
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const Title = styled.h1`
  font-size: clamp(
    ${({ theme }) => theme.fontSizes['2xl']},
    5vw,
    ${({ theme }) => theme.fontSizes['4xl']}
  );
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.mediumGray};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  max-width: 500px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  flex-wrap: wrap;
  justify-content: center;
`;

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <Wrapper>
      <Content
        as={motion.section}
        variants={fadeInUpVariant}
        initial="hidden"
        animate="visible"
      >
        <ErrorIcon>⚠️</ErrorIcon>
        <Title>Something went wrong</Title>
        <Description>
          An unexpected error occurred. Don&apos;t worry, our team has been notified.
        </Description>
        <ButtonGroup>
          <Button onClick={() => reset()} size="lg">
            Try Again
          </Button>
          <Button href="/" variant="outline" size="lg">
            Go Home
          </Button>
        </ButtonGroup>
      </Content>
    </Wrapper>
  );
}
