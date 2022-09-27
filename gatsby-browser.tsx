import type { GatsbyBrowser } from 'gatsby';
import * as React from 'react';

import Layout from './src/components/Layout';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return <Layout>{element}</Layout>;
};
