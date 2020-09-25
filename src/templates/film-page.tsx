import React from "react"
import tw, { styled } from "twin.macro"
import { graphql } from "gatsby"
import SVG from "react-inlinesvg"

import Layout from "components/Layout"
import { Heading2, Heading3 } from "utils/typography"

type DataType = {
    data: {
        allContentfulLibraryFilm: {
            nodes: FilmType[]
        }
    }
}

type FilmType = {
    filmTitle: string
    filmAward: {
        title: string
        file: {
            url: string
        }
    }[]
}

export default function FilmDetail({ data }: DataType) {
    const Header = tw.header`p-16 space-y-8 relative`
    const AwardsWrapper = tw.div`flex flex-row justify-end space-x-10`
    const Award = tw.div`h-20`
    const Titles = tw.div`w-1/2`
    const Main = tw.div`p-16`

    const filmData: FilmType = data.allContentfulLibraryFilm.nodes[0]
    const engTitle: string = data.allContentfulLibraryFilm.nodes[1].filmTitle

    return (
        <Layout
            isTop={false}
            hasPadding={false}
            title={filmData.filmTitle}
            isDark
        >
            <Header>
                <AwardsWrapper>
                    {filmData.filmAward.map((item, i) => (
                        <Award key={i}>
                            <SVG
                                src={item.file.url}
                                style={tw`h-full fill-white`}
                                description={item.title}
                            ></SVG>
                        </Award>
                    ))}
                </AwardsWrapper>
                <Titles>
                    <Heading2>{filmData.filmTitle}</Heading2>
                    <Heading2>{engTitle}</Heading2>
                </Titles>
            </Header>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        allContentfulLibraryFilm(filter: { detailPage: { eq: $slug } }) {
            nodes {
                filmTitle
                filmAward {
                    title
                    file {
                        url
                    }
                }
            }
        }
    }
`
