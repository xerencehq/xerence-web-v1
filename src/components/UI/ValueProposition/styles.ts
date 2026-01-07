import styled from 'styled-components';
import { containerStyles, flexColumn, flexCenter } from '@/styles';

export const ValueWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing[20]} 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ValueContainer = styled.div`
  ${containerStyles}
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing[16]};
`;

export const SectionTitle = styled.h2`
  font-size: clamp(
    ${({ theme }) => theme.fontSizes['2xl']},
    5vw,
    ${({ theme }) => theme.fontSizes['4xl']}
  );
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

export const SectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.mediumGray};
  max-width: 600px;
  margin: 0 auto;
`;

export const DifferentiatorsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[8]};
  margin-bottom: ${({ theme }) => theme.spacing[16]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const DifferentiatorCard = styled.div`
  ${flexColumn}
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing[8]};
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  transition: transform ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-4px);
  }
`;

export const IconWrapper = styled.div`
  ${flexCenter}
  width: 64px;
  height: 64px;
  background: rgba(236, 255, 136, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 28px;
`;

export const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

export const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.mediumGray};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing[6]};
  padding: ${({ theme }) => theme.spacing[8]};
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${({ theme }) => theme.borderRadius.xl};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const StatItem = styled.div`
  text-align: center;
`;

export const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`;

export const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.mediumGray};
`;
