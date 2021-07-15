module.exports = {
  siteMetadata: {
    title: "Corporate Page",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        additionalData: `@import "./src/css/settings/_variables.scss";`
      },
    },
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'maaj-construction',
        schemas: {
          // homepage: require('./custom_types/homepage.json'),
          page: require('./custom_types/page.json')
        },
      },
    },
  ],
};
