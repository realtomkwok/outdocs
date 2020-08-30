/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "OUTDOCS Film Festival",
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `dptre6qdgst5`,
        accessToken: `tKR8cP5Wpy49RIzS7pWmwa-bclLB_kg4PC514BDaNsc`,
        downloadLocal: true,
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: 'zh-CN',
        useLangKeyLayout: false,
        prefixDefault: false
      },
    },
  ],
}
