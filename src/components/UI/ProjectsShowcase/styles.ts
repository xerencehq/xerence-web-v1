import styled from 'styled-components';
import { containerStyles, flexColumn } from '@/styles';

export const ProjectsWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing[20]} 0;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
`;

export const ProjectsContainer = styled.div`
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

export const SectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.mediumGray};
  max-width: 600px;
  margin: 0 auto;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[8]};
  margin-bottom: ${({ theme }) => theme.spacing[12]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ProjectCard = styled.a`
  ${flexColumn}
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.normal};
  border: 1px solid transparent;

  &:hover {
    border-color: rgba(236, 255, 136, 0.2);
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

export const ProjectImage = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  background-color: ${({ theme }) => theme.colors.darkGray};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${({ theme }) => theme.transitions.slow};
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
`;

export const ProjectContent = styled.div`
  ${flexColumn}
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[6]};
`;

export const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.white};
`;

export const ProjectDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.mediumGray};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const CTAWrapper = styled.div`
  text-align: center;
`;
