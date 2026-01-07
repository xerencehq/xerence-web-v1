import styled from 'styled-components';
import { flexColumn, flexColumnCenter, containerStyles } from '@/styles';

export const HeroWrapper = styled.section`
  min-height: 100vh;
  ${flexColumnCenter}
  position: relative;
  padding: ${({ theme }) => theme.spacing[20]} 0;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.background} 0%,
    ${({ theme }) => theme.colors.backgroundAlt} 100%
  );
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      ellipse at 50% 0%,
      rgba(236, 255, 136, 0.08) 0%,
      transparent 60%
    );
    pointer-events: none;
  }
`;

export const HeroContent = styled.div`
  ${containerStyles}
  ${flexColumnCenter}
  text-align: center;
  position: relative;
  z-index: 1;
  gap: ${({ theme }) => theme.spacing[8]};
  max-width: 900px;
`;

export const Headline = styled.h1`
  font-size: clamp(
    ${({ theme }) => theme.fontSizes['3xl']},
    8vw,
    ${({ theme }) => theme.fontSizes['6xl']}
  );
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  line-height: ${({ theme }) => theme.lineHeights.tight};
  letter-spacing: -0.02em;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Subheadline = styled.p`
  font-size: clamp(
    ${({ theme }) => theme.fontSizes.md},
    3vw,
    ${({ theme }) => theme.fontSizes.xl}
  );
  color: ${({ theme }) => theme.colors.lightGray};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  max-width: 600px;
`;

export const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-top: ${({ theme }) => theme.spacing[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;
  }
`;
