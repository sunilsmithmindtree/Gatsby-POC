// const { query } = require('./query');

module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: `https://api.graphcms.com/simple/v1/cjdv7zy7s0y9s0106tfr5x2rx`,
        query: `{
          allEvents {
            id
            eventTitle
            carousel {
              id
              title
              image {
                url
              }
            }
          }
          allHomePages {
            id
            title
            description
            slug
            url
          }
        }`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-114830382-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: false
      }
    }
  ]
};
