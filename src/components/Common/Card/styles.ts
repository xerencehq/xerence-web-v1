import styled, { css } from 'styled-components';
import { flexColumn } from '@/styles';

interface CardWrapperProps {
  $variant: 'default' | 'featured' | 'compact';
  $clickable: boolean;
}

export const CardWrapper = styled.div<CardWrapperProps>`
  ${flexColumn}
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.normal};
  text-decoration: none;
  color: inherit;

  ${({ $clickable }) =>
    $clickable &&
    css`
      cursor: pointer;

      &:hover {
        box-shadow: ${({ theme }) => theme.shadows.lg};
      }
    `}

  ${({ $variant }) =>
    $variant === 'featured' &&
    css`
      border: 1px solid rgba(236, 255, 136, 0.2);
    `}

  ${({ $variant }) =>
    $variant === 'compact' &&
    css`
      flex-direction: row;
      align-items: center;
    `}
`;

interface CardImageProps {
  $variant: 'default' | 'featured' | 'compact';
}

export const CardImage = styled.div<CardImageProps>`
  position: relative;
  overflow: hidden;

  ${({ $variant }) =>
    $variant === 'compact'
      ? css`
          width: 120px;
          height: 120px;
          flex-shrink: 0;
        `
      : css`
          aspect-ratio: 16 / 9;
          width: 100%;
        `}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${({ theme }) => theme.transitions.slow};
  }

  ${CardWrapper}:hover & img {
    transform: scale(1.05);
  }
`;

interface CardContentProps {
  $variant: 'default' | 'featured' | 'compact';
}

export const CardContent = styled.div<CardContentProps>`
  ${flexColumn}
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme, $variant }) =>
    $variant === 'compact' ? theme.spacing[4] : theme.spacing[6]};
  flex: 1;
`;

interface CardTitleProps {
  $variant: 'default' | 'featured' | 'compact';
}

export const CardTitle = styled.h3<CardTitleProps>`
  font-size: ${({ theme, $variant }) =>
    $variant === 'compact' ? theme.fontSizes.md : theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.white};
  line-height: ${({ theme }) => theme.lineHeights.snug};
`;

export const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.mediumGray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
`;

export const CardFooter = styled.div`
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[6]};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;
