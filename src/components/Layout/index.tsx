'use client';

import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from '../../../libs/registry';
import { theme, GlobalStyles } from '@/styles';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Layout;
