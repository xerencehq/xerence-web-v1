import styled from 'styled-components';
import { containerStyles, flexColumnCenter } from '@/styles';

export const CTAWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing[20]} 0;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.backgroundAlt} 0%,
    ${({ theme }) => theme.colors.background} 100%
  );
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 600px;
    background: radial-gradient(
      circle,
      rgba(236, 255, 136, 0.08) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

export const CTAContainer = styled.div`
  ${containerStyles}
  ${flexColumnCenter}
  text-align: center;
  position: relative;
  z-index: 1;
  gap: ${({ theme }) => theme.spacing[6]};
  max-width: 800px;
`;

export const CTATitle = styled.h2`
  font-size: clamp(
    ${({ theme }) => theme.fontSizes['2xl']},
    5vw,
    ${({ theme }) => theme.fontSizes['4xl']}
  );
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  line-height: ${({ theme }) => theme.lineHeights.tight};
`;

export const CTASubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.mediumGray};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  max-width: 600px;
`;

export const BenefitsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[4]};
  list-style: none;
  margin: ${({ theme }) => theme.spacing[4]} 0;
`;

export const BenefitItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightGray};

  &::before {
    content: '✓';
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }
`;
