import styled from 'styled-components';
import { flexColumn } from '@/styles';

export const FieldWrapper = styled.div`
  ${flexColumn}
  gap: ${({ theme }) => theme.spacing[2]};
  width: 100%;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.lightGray};

  span {
    color: ${({ theme }) => theme.colors.error};
  }
`;

export const ErrorMessage = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.error};
`;

export const HelperText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.darkGray};
`;
