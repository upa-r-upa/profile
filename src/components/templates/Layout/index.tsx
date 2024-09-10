import 'styles/font.css';

import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'styles/GlobalStyle';
import getTheme from 'styles/theme';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={getTheme(document.body.clientWidth)}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
