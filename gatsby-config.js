/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'G-M6Q3HZL21B', // Google Analytics / GA
        ],
        gtagConfig: {
          optimize_id: 'OPT_CONTAINER_ID',
          anonymize_ip: true,
          cookie_expires: 0,
        },
      },
    },
    `gatsby-plugin-emotion`,
    'gatsby-plugin-root-import',
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'amylin.co.uk',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prettier`,
            options: {
              // Look for local .prettierrc file.
              // The same as `prettier.resolveConfig(process.cwd())`
              usePrettierrc: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static/, // See below to configure properly
        },
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `static/makers-mark-green.svg`, // This path is relative to the root of the site.
        name: `Amy Lin`,
        short_name: `AmyLin`,
        start_url: `/`,
        background_color: `#c8d8d2`,
        theme_color: `#c8d8d2`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
