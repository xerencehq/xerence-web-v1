import { css } from 'styled-components';
import type { Theme } from './theme';

// Responsive breakpoint helpers
export const media = {
  xs: (styles: ReturnType<typeof css>) => css`
    @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
      ${styles}
    }
  `,
  sm: (styles: ReturnType<typeof css>) => css`
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      ${styles}
    }
  `,
  md: (styles: ReturnType<typeof css>) => css`
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      ${styles}
    }
  `,
  lg: (styles: ReturnType<typeof css>) => css`
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      ${styles}
    }
  `,
  xl: (styles: ReturnType<typeof css>) => css`
    @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
      ${styles}
    }
  `,
  '2xl': (styles: ReturnType<typeof css>) => css`
    @media (min-width: ${({ theme }) => theme.breakpoints['2xl']}) {
      ${styles}
    }
  `,
};

// Mobile-first responsive helper
export const respondTo = (breakpoint: keyof Theme['breakpoints']) =>
  `@media (min-width: ${({ theme }: { theme: Theme }) => theme.breakpoints[breakpoint]})`;

// Container mixin
export const containerStyles = css`
  width: 100%;
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding-left: ${({ theme }) => theme.container.padding.mobile};
  padding-right: ${({ theme }) => theme.container.padding.mobile};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: ${({ theme }) => theme.container.padding.tablet};
    padding-right: ${({ theme }) => theme.container.padding.tablet};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-left: ${({ theme }) => theme.container.padding.desktop};
    padding-right: ${({ theme }) => theme.container.padding.desktop};
  }
`;

// Flexbox helpers
export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const flexBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const flexColumnCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Grid helpers
export const gridCenter = css`
  display: grid;
  place-items: center;
`;

// Typography helpers
export const truncate = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const lineClamp = (lines: number) => css`
  display: -webkit-box;
  -webkit-line-clamp: ${lines};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

// Visual helpers
export const visuallyHidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export const overlay = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const absoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// Button base styles
export const buttonReset = css`
  appearance: none;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

// Input base styles
export const inputReset = css`
  appearance: none;
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  font: inherit;
  color: inherit;

  &:focus {
    outline: none;
  }
`;

// Smooth scroll anchor offset
export const scrollMargin = (offset = '100px') => css`
  scroll-margin-top: ${offset};
`;

// Gradient text
export const gradientText = (gradient: string) => css`
  background: ${gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

// Glass morphism effect
export const glassMorphism = css`
  background: rgba(7, 6, 6, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;
