import styled, { css } from 'styled-components';
import { inputReset } from '@/styles';

interface StyledTextAreaProps {
  $error: boolean;
  $resize: 'none' | 'vertical' | 'horizontal' | 'both';
}

export const StyledTextArea = styled.textarea<StyledTextAreaProps>`
  ${inputReset}
  width: 100%;
  min-height: 120px;
  padding: ${({ theme }) => theme.spacing[4]};
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border: 2px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.base};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  transition: all ${({ theme }) => theme.transitions.fast};
  resize: ${({ $resize }) => $resize};

  &::placeholder {
    color: ${({ theme }) => theme.colors.mediumGray};
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
