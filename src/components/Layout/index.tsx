import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'styles/GlobalStyle';
import theme from 'styles/theme';

import 'styles/font.css';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
