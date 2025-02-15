import type { GatsbyConfig } from 'gatsby';

import siteMetaConfig from './site-meta-config';

const config: GatsbyConfig = {
  siteMetadata: siteMetaConfig,

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-root-import`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `static/images/icon.png`,
      },
    },
  ],
};

export default config;
