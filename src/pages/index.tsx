import React, { useEffect } from "react"
import { graphql } from "gatsby"
import tw, { TwComponent } from "twin.macro"
import { FluidObject } from "gatsby-image"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import { NewsCard } from "../components/Cards"
import Link from "../utils/Link"

type heroType = {
    heroImage: {
        fluid: FluidObject
        title: string
    }
    title: string
    tag: string
    linkText: string
    linkTo: string
}

type newsType = {
    headline: string
    subheadline: string
    tag: {
        tag: string
        linkedPage: string
    }
    linkedWeChatArticle: string
    heroImage: {
        fluid: FluidObject
        title: string
    }
}

type dataType = {
    data: {
        IndexHero: heroType
        IndexNews: {
            nodes: newsType
        }
    }
}

function News(props: { data: Array<newsType> }) {
    const Featured = tw.div`col-span-6`
    const List = tw.div`col-span-6 flex flex-row`

    const featured: newsType = props.data[0]
    const others: Array<newsType> = props.data.slice(1)

    return (
        <>
            <Featured>
                <Link
                    to={featured.linkedWeChatArticle}
                    activeClassName={undefined}
                    partiallyActive={undefined}
                >
                    <NewsCard
                        imgSrc={featured.heroImage.fluid}
                        imgAlt={featured.heroImage.title}
                        tag={featured.tag.tag}
                        tagLinkedPage={featured.tag.linkedPage}
                        headline={featured.headline}
                        subheadline={featured.subheadline}
                    />
                </Link>
            </Featured>
            <List>
                {others.map((news, i) => (
                    <NewsCard
                        imgSrc={news.heroImage.fluid}
                        imgAlt={news.heroImage.title}
                        tag={news.tag.tag}
                        tagLinkedPage={news.tag.linkedPage}
                        headline={news.headline}
                        subheadline={news.subheadline}
                        key={i}
                    />
                ))}
            </List>
        </>
    )
}

export default function Home({ data }: dataType) {
    const Main = tw.main`container p-16 grid grid-cols-12 gap-10`
    const hero: heroType = data.IndexHero
    //❓
    const news: Array<newsType> = data.IndexNews.nodes

    return (
        <Layout isTop={true}>
            <Hero
                imgSrc={hero.heroImage.fluid}
                imgAlt={hero.title}
                cardTag={hero.tag}
                cardHeadline={hero.title}
                cardBtnText={hero.linkText}
                cardLinkedPage={hero.linkTo}
            />
            <Main>
                <News data={news} />
            </Main>
        </Layout>
    )
}

export const query = graphql`
    {
        IndexHero: contentfulHeroIndex(node_locale: { eq: "zh-Hans" }) {
            linkText
            linkTo
            node_locale
            title
            tag
            heroImage {
                fluid(maxHeight: 800, cropFocus: CENTER, quality: 100) {
                    ...GatsbyContentfulFluid_withWebp
                }
            }
        }
        IndexNews: allContentfulNews(
            filter: { node_locale: { eq: "zh-Hans" } }
            sort: { order: DESC, fields: publishedDate }
        ) {
            nodes {
                headline
                subheadline
                tag {
                    tag
                    linkedPage
                }
                linkedWeChatArticle
                heroImage {
                    fluid(quality: 100) {
                        ...GatsbyContentfulFluid_withWebp
                    }
                    title
                }
                publishedDate(fromNow: false)
            }
        }
    }
`
