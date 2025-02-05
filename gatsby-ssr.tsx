import type { GatsbySSR } from 'gatsby';
import * as React from 'react';

import Layout from './src/components/templates/Layout';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link rel="preconnect" href="https://fonts.googleapis.com" key="google-fonts-preconnect" />,
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" key="google-fonts-gstatic" />,
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&family=Silkscreen:wght@400;700&display=swap"
      rel="stylesheet"
      key="google-fonts"
    />,
  ]);
};

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element }) => {
  return <Layout>{element}</Layout>;
};
