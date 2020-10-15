const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const films = await graphql(`
        {
            allContentfulLibraryFilm(
                filter: {
                    node_locale: { eq: "zh-Hans" }
                    detailPage: { ne: null }
                }
            ) {
                edges {
                    node {
                        detailPage
                    }
                }
            }
        }
    `).then(res => res.data)

    films.allContentfulLibraryFilm.edges.forEach(({ node }) => {
        createPage({
            path: node.detailPage,
            component: path.resolve(`./src/templates/film-page.tsx`),
            context: {
                slug: node.detailPage,
            },
        })
    })

    const events = await graphql(`
        query {
            allContentfulEventsSessions(
                filter: { node_locale: { eq: "zh-Hans" } }
            ) {
                edges {
                    node {
                        detailPage
                    }
                }
            }
        }
    `).then(res => res.data)

    events.allContentfulEventsSessions.edges.forEach(({ node }) => {
        createPage({
            path: node.detailPage,
            component: path.resolve(`./src/templates/event-page.tsx`),
            context: {
                slug: node.detailPage,
            },
        })
    })

    const figures = await graphql(`
        query {
            allContentfulFigure(filter: { node_locale: { eq: "zh-Hans" } }) {
                edges {
                    node {
                        detailPage
                    }
                }
            }
        }
    `).then(res => res.data)

    figures.allContentfulFigure.edges.forEach(({ node }) => {
        createPage({
            path: node.detailPage,
            component: path.resolve(`./src/templates/figure-page.tsx`),
            context: {
                slug: node.detailPage,
            },
        })
    })
}
