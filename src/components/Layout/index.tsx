import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'styles/GlobalStyle';
import getTheme from 'styles/theme';

import 'styles/font.css';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    // FIX: Should be able to re-deliver the theme whenever resizing occurs.
    <ThemeProvider theme={getTheme(window.innerWidth)}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
