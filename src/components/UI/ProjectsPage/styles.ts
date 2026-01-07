import styled from 'styled-components';

// Hero styles
export const HeroWrapper = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing[20]} ${theme.spacing[4]} ${theme.spacing[12]}`};
`;

export const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  margin: 0 0 ${({ theme }) => theme.spacing[4]};
  line-height: ${({ theme }) => theme.lineHeights.tight};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['5xl']};
  }
`;

export const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightGray};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  margin: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

// Grid styles
export const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]};
`;

export const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const SearchWrapper = styled.div`
  max-width: 400px;
`;

export const TagFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const ProjectsGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[6]};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing[12]};
  color: ${({ theme }) => theme.colors.mediumGray};

  p {
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }

  button {
    color: ${({ theme }) => theme.colors.primary};
    background: none;
    border: none;
    cursor: pointer;
    text-decoration: underline;
    font-size: ${({ theme }) => theme.fontSizes.base};

    &:hover {
      color: ${({ theme }) => theme.colors.primaryHover};
    }
  }
`;

// Card styles
export const CardWrapper = styled.a`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: all ${({ theme }) => theme.transitions.normal};
  border: 1px solid rgba(255, 255, 255, 0.05);

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: rgba(236, 255, 136, 0.2);
    transform: translateY(-4px);
  }
`;

export const CardImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 16 / 10;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${({ theme }) => theme.transitions.normal};
  }

  ${CardWrapper}:hover & img {
    transform: scale(1.05);
  }
`;

export const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.backgroundAlt} 0%,
    ${({ theme }) => theme.colors.backgroundLight} 100%
  );
  color: ${({ theme }) => theme.colors.darkGray};

  svg {
    width: 48px;
    height: 48px;
    opacity: 0.5;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[5]};
`;

export const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
  line-height: ${({ theme }) => theme.lineHeights.snug};
`;

export const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightGray};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[2]};
`;

export const CardMeta = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.darkGray};
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing[2]};
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

export const FilterTag = styled.button<{ $isActive: boolean }>`
  display: inline-flex;
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[3]}`};
  background: ${({ theme, $isActive }) =>
    $isActive ? 'rgba(236, 255, 136, 0.2)' : 'rgba(255, 255, 255, 0.05)'};
  border: 1px solid ${({ theme, $isActive }) =>
    $isActive ? theme.colors.primary : 'rgba(255, 255, 255, 0.1)'};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.primary : theme.colors.mediumGray};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: rgba(236, 255, 136, 0.1);
    border-color: rgba(236, 255, 136, 0.3);
    color: ${({ theme }) => theme.colors.primary};
  }
`;
