module.exports = {
  siteMetadata: {
    title: "Ed Bentley",
    description: "Personal portfolio website",
    author: "@edsbentley",
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
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: "gatsby-source-dev",
      options: {
        username: "edbentley",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ed Bentley`,
        short_name: `edbentley.dev`,
        start_url: `/`,
        background_color: `#166bfe`,
        theme_color: `#166bfe`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
