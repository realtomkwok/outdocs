import React, { useState } from "react"
import tw from "twin.macro"
import { FluidObject } from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Header from "../components/Header"
import { NewsCard } from "components/Cards"
import Dropdown from "components/Selects"

type DataProps = {
    data: {
        allContentfulNews: {
            nodes: NewsProps[]
        }
    }
}

type NewsProps = {
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

export default function Home({ data }: DataProps) {
    const Container = tw.div`py-16 grid grid-cols-3 gap-10`
    const Filters = tw.div`flex flex-row space-x-4 justify-center py-8`

    const newsData: NewsProps[] = data.allContentfulNews.nodes

    const categoryOptions: string[] = [...new Set(newsData.map(x => x.tag.tag))]
    const [category, setCategory] = useState("")
    function handleCategoryChange(newValue: string) {
        setCategory(newValue)
    }
    const filteredNews: NewsProps[] = newsData.filter(el => {
        if (category === "") {
            return newsData
        } else {
            return el.tag.tag === category
        }
    })

    return (
        <Layout title="新闻中心" hasPadding>
            <Header category="newsroom" titleId={6} />
            <Filters>
                <Dropdown
                    allowUndefined
                    helperText="分类"
                    options={categoryOptions}
                    defaultValue=""
                    value={category}
                    onChange={handleCategoryChange}
                />
            </Filters>
            <Container>
                {filteredNews.map((item, i) => (
                    <NewsCard
                        key={i}
                        imgSrc={item.heroImage.fluid}
                        imgAlt={item.heroImage.title}
                        headline={item.headline}
                        subheadline={item.subheadline}
                        tag={item.tag.tag}
                        linkedWeChatArticle={item.linkedWeChatArticle}
                    />
                ))}
            </Container>
        </Layout>
    )
}

export const query = graphql`
    {
        allContentfulNews(
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
