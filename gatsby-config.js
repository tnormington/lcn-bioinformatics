module.exports = {
  siteMetadata: {
    title: `LCN Bio Informatics`,
    description: `A bioinformatics consulting company offering state of the art transcriptomics analyses, bioinformatics support and educational materials for your lab or business.`,
    author: `@tnormington`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#173160`,
        theme_color: `#173160`,
        display: `minimal-ui`,
        icon: `src/images/lcn-logo.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
