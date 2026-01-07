import styled, { css } from 'styled-components';

interface StyledBadgeProps {
  $variant: 'default' | 'success' | 'warning' | 'error' | 'info';
  $size: 'sm' | 'md';
}

const variantStyles = {
  default: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
  `,
  success: css`
    background-color: ${({ theme }) => theme.colors.success};
    color: white;
  `,
  warning: css`
    background-color: ${({ theme }) => theme.colors.warning};
    color: ${({ theme }) => theme.colors.background};
  `,
  error: css`
    background-color: ${({ theme }) => theme.colors.error};
    color: white;
  `,
  info: css`
    background-color: ${({ theme }) => theme.colors.info};
    color: white;
  `,
};

const sizeStyles = {
  sm: css`
    padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};
    font-size: ${({ theme }) => theme.fontSizes.xs};
  `,
  md: css`
    padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[3]}`};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  `,
};

export const StyledBadge = styled.span<StyledBadgeProps>`
  display: inline-flex;
  align-items: center;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  text-transform: uppercase;
  letter-spacing: 0.05em;

  ${({ $variant }) => variantStyles[$variant]}
  ${({ $size }) => sizeStyles[$size]}
`;
