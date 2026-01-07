import styled, { css, keyframes } from 'styled-components';
import { buttonReset } from '@/styles';

interface StyledButtonProps {
  $variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  $size: 'sm' | 'md' | 'lg';
  $fullWidth: boolean;
  $disabled: boolean;
}

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const sizeStyles = {
  sm: css`
    padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[4]}`};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    min-height: 36px;
  `,
  md: css`
    padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[6]}`};
    font-size: ${({ theme }) => theme.fontSizes.base};
    min-height: 44px;
  `,
  lg: css`
    padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[8]}`};
    font-size: ${({ theme }) => theme.fontSizes.md};
    min-height: 52px;
  `,
};

const variantStyles = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.primaryHover};
      box-shadow: ${({ theme }) => theme.shadows.glow};
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    color: ${({ theme }) => theme.colors.white};

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.darkGray};
    }
  `,
  outline: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.background};
    }
  `,
  ghost: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.white};

    &:hover:not(:disabled) {
      background-color: rgba(255, 255, 255, 0.1);
    }
  `,
};

export const StyledButton = styled.button<StyledButtonProps>`
  ${buttonReset}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  transition: all ${({ theme }) => theme.transitions.fast};
  text-decoration: none;
  border: 2px solid transparent;

  ${({ $size }) => sizeStyles[$size]}
  ${({ $variant }) => variantStyles[$variant]}
  ${({ $fullWidth }) => $fullWidth && css`width: 100%;`}

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
    `}

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

interface ButtonContentProps {
  $loading: boolean;
}

export const ButtonContent = styled.span<ButtonContentProps>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  opacity: ${({ $loading }) => ($loading ? 0.7 : 1)};

  .icon-left,
  .icon-right {
    display: flex;
    align-items: center;
  }
`;

export const LoadingSpinner = styled.span`
  position: absolute;
  width: 18px;
  height: 18px;
  border: 2px solid transparent;
  border-top-color: currentColor;
  border-radius: 50%;
  animation: ${spin} 0.6s linear infinite;
`;
