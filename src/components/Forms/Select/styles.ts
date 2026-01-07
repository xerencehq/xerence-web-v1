import styled, { css } from 'styled-components';

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

interface StyledSelectProps {
  $error: boolean;
  $size: 'sm' | 'md' | 'lg';
}

const sizeStyles = {
  sm: css`
    padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[8]} ${theme.spacing[2]} ${theme.spacing[3]}`};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  `,
  md: css`
    padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[10]} ${theme.spacing[3]} ${theme.spacing[4]}`};
    font-size: ${({ theme }) => theme.fontSizes.base};
  `,
  lg: css`
    padding: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[12]} ${theme.spacing[4]} ${theme.spacing[5]}`};
    font-size: ${({ theme }) => theme.fontSizes.md};
  `,
};

export const StyledSelect = styled.select<StyledSelectProps>`
  appearance: none;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border: 2px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  ${({ $size }) => sizeStyles[$size]}

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

  option {
    background-color: ${({ theme }) => theme.colors.backgroundLight};
    color: ${({ theme }) => theme.colors.white};
  }

  ${({ $error }) =>
    $error &&
    css`
      border-color: ${({ theme }) => theme.colors.error};
    `}
`;

export const SelectIcon = styled.span`
  position: absolute;
  right: ${({ theme }) => theme.spacing[4]};
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.mediumGray};
  pointer-events: none;
`;
