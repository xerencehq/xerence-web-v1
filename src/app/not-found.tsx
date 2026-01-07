'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/Common';
import { containerStyles, flexColumnCenter, fadeInUpVariant } from '@/styles';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.section`
  flex: 1;
  ${flexColumnCenter}
  ${containerStyles}
  text-align: center;
  padding: ${({ theme }) => theme.spacing[20]} 0;
`;

const ErrorCode = styled.h1`
  font-size: clamp(6rem, 20vw, 12rem);
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.3;
  line-height: 1;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const Title = styled.h2`
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

export default function NotFound() {
  return (
    <Wrapper>
      <Header />
      <Content
        as={motion.section}
        variants={fadeInUpVariant}
        initial="hidden"
        animate="visible"
      >
        <ErrorCode>404</ErrorCode>
        <Title>Page Not Found</Title>
        <Description>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </Description>
        <Button href="/" size="lg">
          Go Home
        </Button>
      </Content>
      <Footer />
    </Wrapper>
  );
}
