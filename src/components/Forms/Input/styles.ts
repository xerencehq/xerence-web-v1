import styled, { css } from 'styled-components';
import { inputReset } from '@/styles';

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

interface InputIconProps {
  $size: 'sm' | 'md' | 'lg';
}

export const InputIcon = styled.span<InputIconProps>`
  position: absolute;
  left: ${({ theme }) => theme.spacing[4]};
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.mediumGray};
  display: flex;
  align-items: center;
  pointer-events: none;
`;

interface StyledInputProps {
  $error: boolean;
  $hasIcon: boolean;
  $size: 'sm' | 'md' | 'lg';
}

const sizeStyles = {
  sm: css`
    padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[3]}`};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  `,
  md: css`
    padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[4]}`};
    font-size: ${({ theme }) => theme.fontSizes.base};
  `,
  lg: css`
    padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[5]}`};
    font-size: ${({ theme }) => theme.fontSizes.md};
  `,
};

export const StyledInput = styled.input<StyledInputProps>`
  ${inputReset}
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border: 2px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.white};
  transition: all ${({ theme }) => theme.transitions.fast};

  ${({ $size }) => sizeStyles[$size]}

  ${({ $hasIcon }) =>
    $hasIcon &&
    css`
      padding-left: ${({ theme }) => theme.spacing[12]};
    `}

  &::placeholder {
    color: ${({ theme }) => theme.colors.darkGray};
  }

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.darkGray};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(236, 255, 136, 0.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ $error }) =>
    $error &&
    css`
      border-color: ${({ theme }) => theme.colors.error};

      &:focus {
        border-color: ${({ theme }) => theme.colors.error};
        box-shadow: 0 0 0 3px rgba(244, 67, 54, 0.1);
      }
    `}
`;
