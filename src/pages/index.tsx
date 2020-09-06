import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import { StaticQuery, graphql } from "gatsby"
import tw from "twin.macro"

function IndexHero() {
    return (
        <StaticQuery
            query={graphql`
                query IndexHero {
                    contentfulHeroIndex {
                        linkText
                        linkTo
                        order
                        title
                        node_locale
                        heroImage {
                            file {
                                url
                                fileName
                                contentType
                            }
                            fluid(
                                maxHeight: 800
                                quality: 100
                                cropFocus: CENTER
                            ) {
                                ...GatsbyContentfulFluid_withWebp
                            }
                        }
                    }
                }
            `}
            render={data => (
                <Hero
                    imgUrl={data.contentfulHeroIndex.heroImage.fluid}
                    imgAlt={data.contentfulHeroIndex.title}
                    cardHeadline={data.contentfulHeroIndex.title}
                    cardBtnText={data.contentfulHeroIndex.linkText}
                    cardLinkedPage={data.contentfulHeroIndex.linkTo}
                />
            )}
        />
    )
}

export default function Home() {
    const Main = tw.main`container p-16`

    return (
        <Layout isTop={true}>
            <IndexHero />
            <Main></Main>
        </Layout>
    )
}
