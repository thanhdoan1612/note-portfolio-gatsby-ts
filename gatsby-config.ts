import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title:"Note's Studio",
    description: "Note Studio description"
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  flags: {
    FAST_DEV: true,
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-styled-components",
  ],
}

export default config
