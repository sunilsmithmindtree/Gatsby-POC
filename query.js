module.exports = {
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