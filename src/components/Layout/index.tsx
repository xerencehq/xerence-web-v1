'use client';

import StyledComponentsRegistry from '../../../libs/registry';
import { GlobalStyles } from './GlobalStyles';
import { Footer, Header } from '..';
// import { useState } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  // const [complete, setComplete] = useState(false);
  return (
    <StyledComponentsRegistry>
        <GlobalStyles />
        {/* <Preloader setComplete={setComplete} /> */}
        {/* <div className={complete ? 'complete' : 'not_complete'}> */}
          <Header />
          {children}
          <Footer />
        {/* </div> */}
    </StyledComponentsRegistry>
  );
};

export default Layout;
