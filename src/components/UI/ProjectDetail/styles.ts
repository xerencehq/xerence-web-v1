import styled from 'styled-components';

// Hero styles
export const HeroWrapper = styled.section`
  position: relative;
`;

export const HeroImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 500px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      ${({ theme }) => theme.colors.background} 100%
    );
  }
`;

export const HeroContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing[8]} ${theme.spacing[4]}`};
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  margin: 0 0 ${({ theme }) => theme.spacing[4]};
  line-height: ${({ theme }) => theme.lineHeights.tight};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }
`;

export const HeroDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightGray};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  margin: 0 0 ${({ theme }) => theme.spacing[6]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

export const HeroTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

// Content styles
export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[8]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 300px;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[10]};
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.white};
  margin: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }
`;

export const ContentText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.lightGray};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};

  p {
    margin: 0 0 ${({ theme }) => theme.spacing[4]};

    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    color: ${({ theme }) => theme.colors.white};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
  }
`;

export const OutcomesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const OutcomeItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.lightGray};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};

  .check {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    flex-shrink: 0;
  }
`;

// Sidebar styles
export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    position: sticky;
    top: ${({ theme }) => theme.spacing[24]};
    height: fit-content;
  }
`;

export const SidebarSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[5]};
  background: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

export const SidebarTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.mediumGray};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
`;

export const ClientInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const ClientLogo = styled.div`
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.backgroundAlt};

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const TechList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[2]};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.lightGray};

    &::before {
      content: '';
      width: 6px;
      height: 6px;
      border-radius: ${({ theme }) => theme.borderRadius.full};
      background: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const ExternalLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[5]}`};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.fast};
  width: 100%;

  &:hover {
    background: rgba(236, 255, 136, 0.1);
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

// Gallery styles
export const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};
`;

export const GalleryTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const GalleryItem = styled.button`
  position: relative;
  aspect-ratio: 4 / 3;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  cursor: pointer;
  border: none;
  padding: 0;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  transition: ${({ theme }) => theme.transitions.normal};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${({ theme }) => theme.transitions.normal};
  }

  &:hover {
    transform: scale(1.02);

    img {
      transform: scale(1.1);
    }
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const Lightbox = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.modal};
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.9);
  padding: ${({ theme }) => theme.spacing[4]};
`;

export const LightboxContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;

  img {
    max-width: 100%;
    max-height: 90vh;
    object-fit: contain;
    border-radius: ${({ theme }) => theme.borderRadius.lg};
  }
`;

export const LightboxClose = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing[4]};
  right: ${({ theme }) => theme.spacing[4]};
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;
