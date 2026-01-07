import styled from 'styled-components';

// ServiceCard styles
export const ServiceCardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
  padding: ${({ theme }) => theme.spacing[8]};
  background: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    border-color: rgba(236, 255, 136, 0.2);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const ServiceIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  min-width: 64px;
  background: rgba(236, 255, 136, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.primary};

  svg {
    width: 32px;
    height: 32px;
  }
`;

export const ServiceContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  flex: 1;
`;

export const ServiceTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.white};
  margin: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }
`;

export const ServiceDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.lightGray};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  margin: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

export const BenefitsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: 0;
  margin: 0;
  list-style: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const BenefitItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightGray};

  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    min-width: 8px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
  }
`;

export const TechnologiesSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
  padding-top: ${({ theme }) => theme.spacing[2]};
`;

export const TechTag = styled.span`
  display: inline-flex;
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[3]}`};
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.mediumGray};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: rgba(236, 255, 136, 0.1);
    border-color: rgba(236, 255, 136, 0.3);
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ServiceActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  padding-top: ${({ theme }) => theme.spacing[2]};
`;

// ServicesList styles
export const ServicesListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
`;

// Page styles
export const PageHero = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing[20]} ${theme.spacing[4]} ${theme.spacing[12]}`};
`;

export const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  margin: 0 0 ${({ theme }) => theme.spacing[4]};
  line-height: ${({ theme }) => theme.lineHeights.tight};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['5xl']};
  }
`;

export const PageSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightGray};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  margin: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;
