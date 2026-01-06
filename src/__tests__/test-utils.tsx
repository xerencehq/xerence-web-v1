import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

// This will be replaced with the actual theme from T003
// For now, use a placeholder theme
const theme = {
  colors: {
    background: '#070606',
    white: '#ffffff',
    lightGray: '#dcdcdc',
    linkColor: '#bdbdbc',
    green: '#ECFF88',
    emerald: '#ECFF88',
  },
  breakpoints: {
    mobile: '768px',
  },
};

interface AllTheProvidersProps {
  children: React.ReactNode;
}

const AllTheProviders = ({ children }: AllTheProvidersProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything
export * from '@testing-library/react';
export { customRender as render };
export { theme as testTheme };
