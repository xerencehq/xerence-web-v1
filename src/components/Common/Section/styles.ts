import styled, { css } from 'styled-components';
import { containerStyles, flexColumn } from '@/styles';

interface SectionWrapperProps {
  $background: 'default' | 'alt' | 'dark';
  $padding: 'sm' | 'md' | 'lg' | 'xl';
}

const paddingStyles = {
  sm: css`
    padding: ${({ theme }) => theme.spacing[8]} 0;
  `,
  md: css`
    padding: ${({ theme }) => theme.spacing[12]} 0;
  `,
  lg: css`
    padding: ${({ theme }) => theme.spacing[16]} 0;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      padding: ${({ theme }) => theme.spacing[20]} 0;
    }
  `,
  xl: css`
    padding: ${({ theme }) => theme.spacing[20]} 0;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      padding: ${({ theme }) => theme.spacing[24]} 0;
    }
  `,
};

const backgroundStyles = {
  default: css`
    background-color: ${({ theme }) => theme.colors.background};
  `,
  alt: css`
    background-color: ${({ theme }) => theme.colors.backgroundAlt};
  `,
  dark: css`
    background-color: ${({ theme }) => theme.colors.backgroundLight};
  `,
};

export const SectionWrapper = styled.section<SectionWrapperProps>`
  ${({ $padding }) => paddingStyles[$padding]}
  ${({ $background }) => backgroundStyles[$background]}
`;

interface SectionContainerProps {
  $fullWidth: boolean;
}

export const SectionContainer = styled.div<SectionContainerProps>`
  ${({ $fullWidth }) => !$fullWidth && containerStyles}
`;

interface SectionHeaderProps {
  $centered: boolean;
}

export const SectionHeader = styled.div<SectionHeaderProps>`
  ${flexColumn}
  gap: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[12]};

  ${({ $centered }) =>
    $centered &&
    css`
      text-align: center;
      align-items: center;
    `}
`;

export const SectionTitle = styled.h2`
  font-size: clamp(
    ${({ theme }) => theme.fontSizes['2xl']},
    5vw,
    ${({ theme }) => theme.fontSizes['4xl']}
  );
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  line-height: ${({ theme }) => theme.lineHeights.tight};
`;

export const SectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.mediumGray};
  max-width: 600px;
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
`;

interface SectionContentProps {
  $centered: boolean;
}

export const SectionContent = styled.div<SectionContentProps>`
  ${({ $centered }) =>
    $centered &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
`;
