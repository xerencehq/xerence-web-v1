import styled from 'styled-components';

export const Heading1 = styled.h1`
  font-size: clamp(
    ${({ theme }) => theme.fontSizes['3xl']},
    8vw,
    ${({ theme }) => theme.fontSizes['6xl']}
  );
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  line-height: ${({ theme }) => theme.lineHeights.tight};
  letter-spacing: -0.02em;
`;

export const Heading2 = styled.h2`
  font-size: clamp(
    ${({ theme }) => theme.fontSizes['2xl']},
    5vw,
    ${({ theme }) => theme.fontSizes['4xl']}
  );
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  line-height: ${({ theme }) => theme.lineHeights.tight};
`;

export const Heading3 = styled.h3`
  font-size: clamp(
    ${({ theme }) => theme.fontSizes.xl},
    4vw,
    ${({ theme }) => theme.fontSizes['2xl']}
  );
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.white};
  line-height: ${({ theme }) => theme.lineHeights.snug};
`;

export const Heading4 = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.white};
  line-height: ${({ theme }) => theme.lineHeights.snug};
`;

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.lightGray};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
`;

export const Lead = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightGray};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

export const Small = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.mediumGray};
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;
