module.exports = {
  siteMetadata: {
    siteUrl: `https://www.semantis.online`,
    title: `Semantis`,
    description: `Разработка сайтов и веб-приложений. Продвижение в интернете. Дизайн.`,
    author: `Semantis`
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#F6FAFF`,
        theme_color: `#085DDB`,
        display: `minimal-ui`,
        icon: `src/images/icon-192x192.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
