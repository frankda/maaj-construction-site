module.exports = {
  siteMetadata: {
    title: "Corporate Page",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        additionalData: `@import "./src/css/settings/_variables.scss";`
      },
    },
    `gatsby-plugin-fontawesome-css`
  ],
};
