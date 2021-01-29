const dotenv = require('dotenv');
if(process.env.NODE_ENV!='production'){
  dotenv.config()
}
module.exports = {
  siteMetadata: {
    title: "Hi, I'm Stackbit Exto Portfolio Theme.",
    para:"This section can contain a subtitle or tagline. The recommended length is one to three sentences, but can be changed as you prefer."
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
