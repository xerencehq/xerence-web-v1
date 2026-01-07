import styled from 'styled-components';
import { containerStyles, flexColumn } from '@/styles';

export const TestimonialsWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing[20]} 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const TestimonialsContainer = styled.div`
  ${containerStyles}
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing[12]};
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

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[8]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const TestimonialCard = styled.div`
  ${flexColumn}
  padding: ${({ theme }) => theme.spacing[8]};
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

export const QuoteIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.5;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

export const Quote = styled.blockquote`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.lightGray};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  flex: 1;
`;

export const ClientInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const ClientAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.primaryDark} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.background};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

export const ClientDetails = styled.div`
  ${flexColumn}
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const ClientName = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.white};
`;

export const ClientRole = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.mediumGray};
`;
