module.exports = {
  siteMetadata: {
    title: `André Caminhos`,
    description: `Blog de um ciclista, alpinista.`,
    author: `mott4a`,
    lang: `pt-br`
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pensamentos`,
        path: `${__dirname}/src/pages/posts/pensamentos`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `historias`,
        path: `${__dirname}/src/pages/posts/historias`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `andrecaminhos`,
        short_name: `andrecaminhos`,
        start_url: `/`,
        background_color: `#fafafafa`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `album01`,
        path: `${__dirname}/src/fotos/01`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto', 'Chelsea Market', 'Avenir', 'Montserrat']
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
