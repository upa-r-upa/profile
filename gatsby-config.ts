import type { GatsbyConfig } from 'gatsby';

import siteMetaConfig from './site-meta-config';

const config: GatsbyConfig = {
  siteMetadata: siteMetaConfig,

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-root-import`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/assets/images/icon.png`,
      },
    },
  ],
};

export default config;
