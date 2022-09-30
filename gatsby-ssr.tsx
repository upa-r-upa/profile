import type { GatsbySSR } from 'gatsby';
import * as React from 'react';

import Layout from './src/components/templates/Layout';

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element }) => {
  return <Layout>{element}</Layout>;
};
