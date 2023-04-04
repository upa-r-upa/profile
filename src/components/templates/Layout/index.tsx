import 'styles/font.css';

import React from 'react';
import { ThemeProvider } from 'styled-components';

import useResizeObserver from 'hooks/useResizeObserver';
import { GlobalStyle } from 'styles/GlobalStyle';
import getTheme from 'styles/theme';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const { targetRef, size } = useResizeObserver();

  targetRef.current = document.body;

  return (
    <ThemeProvider theme={getTheme(size.width || document.body.clientWidth)}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
