/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
    siteMetadata: {
        title: "OUTDOCS Film Festival",
    },
    plugins: [
        `gatsby-plugin-typescript`,
        `gatsby-plugin-emotion`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-transition-link`,
        `gatsby-plugin-react-helmet`,
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
            resolve: `gatsby-plugin-i18n`,
            options: {
                langKeyDefault: "zh-CN",
                useLangKeyLayout: false,
                prefixDefault: false,
            },
        },
        {
            resolve: `gatsby-plugin-root-import`,
            options: {
                components: path.join(__dirname, "src/components"),
                utils: path.join(__dirname, "src/utils"),
                content: path.join(__dirname, "src/content"),
                assets: path.join(__dirname, "src/assets"),
            },
        },
        {
            resolve: `gatsby-plugin-anchor-links`,
            options: {
                offset: -200,
            },
        },
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                base64Width: 20,
                forceBase64Format: ``, // valid formats: png,jpg,webp
                useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
                stripMetadata: true,
                defaultQuality: 100,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: "fonts",
                path: `${__dirname}/src/fonts`
            }
        }
        {
            resolve: `gatsby-plugin-web-font-loader`,
            options: {
                custom: {
                    families: ["Nimbus Sans Ext D, Glow Sans SC"],
                    urls: ["/fonts/fonts.css"],
                },
            },
        },
    ],
}
