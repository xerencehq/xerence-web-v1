import styled from 'styled-components';

export const CalendlyWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

export const CalendlyIframe = styled.iframe`
  width: 100%;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

export const FallbackLink = styled.p`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing[4]};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.mediumGray};

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.fast};

    &:hover {
      text-decoration: underline;
    }
  }
`;
