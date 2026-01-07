import styled, { css } from 'styled-components';

interface StyledTagProps {
  $variant: 'default' | 'outline';
}

export const StyledTag = styled.span<StyledTagProps>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[3]}`};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all ${({ theme }) => theme.transitions.fast};

  ${({ $variant }) =>
    $variant === 'default'
      ? css`
          background-color: rgba(236, 255, 136, 0.1);
          color: ${({ theme }) => theme.colors.primary};
        `
      : css`
          background-color: transparent;
          border: 1px solid ${({ theme }) => theme.colors.darkGray};
          color: ${({ theme }) => theme.colors.lightGray};
        `}
`;

export const TagRemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  padding: 0;
  margin-left: ${({ theme }) => theme.spacing[1]};
  background: none;
  border: none;
  color: inherit;
  font-size: 14px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity ${({ theme }) => theme.transitions.fast};

  &:hover {
    opacity: 1;
  }
`;
