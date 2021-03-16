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
        name: `Semantis.online`,
        short_name: `Semantis`,
        start_url: `.`,
        background_color: `#F6FAFF`,
        theme_color: `#085DDB`,
        display: `standalone`,
        orientation: `portrait`,
        icon: `src/icons/icon-512x512.png`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-K3ZBMHJ`,
        includeInDevelopment: false,
      },
    },
  ]
}
