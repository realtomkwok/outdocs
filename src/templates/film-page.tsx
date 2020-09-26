import React from "react"
import tw, { styled } from "twin.macro"
import { graphql } from "gatsby"
import SVG from "react-inlinesvg"

import Layout from "components/Layout"
import { Heading2, Heading3 } from "utils/typography"
import { HeroImage } from "components/Cards"
import { FluidObject } from "gatsby-image"
import Tag from "components/Tags"

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
    filmHeroImage: {
        title: string
        image: {
            fluid: FluidObject
        }
    }
}

export default function FilmDetail({ data }: DataType) {
    const Header = tw.header`container mx-auto p-16 space-y-8 relative`
    const AwardsWrapper = tw.div`flex flex-row justify-end space-x-10`
    const Award = tw.div`h-20`
    const Titles = tw.div`w-1/2`
    const HeroContainer = tw.div`w-full h-auto relative`
    const Main = tw.div`p-16 grid grid-cols-3`
    const ScreeningInfo = tw.div`col-span-1 flex flex-row`
    const FilmInfo = tw.div`col-start-2 col-end-3`

    const filmData: FilmType = data.allContentfulLibraryFilm.nodes[0]
    const engTitle: string = data.allContentfulLibraryFilm.nodes[1].filmTitle

    return (
        <Layout title={filmData.filmTitle} isDark>
            <Header>
                <AwardsWrapper>
                    {filmData.filmAward &&
                        filmData.filmAward.map((item, i) => (
                            <Award key={i}>
                                <SVG
                                    src={item.file.url}
                                    style={tw`h-full fill-white`}
                                    title={item.title}
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
            <HeroContainer>
                <HeroImage
                    imgSrc={filmData.filmHeroImage.image.fluid}
                    imgAlt={filmData.filmHeroImage.title}
                />
            </HeroContainer>
            <Main>
                <ScreeningInfo>
                    <Tag tagStyle="primary" isWhite>
                        展映信息
                    </Tag>
                </ScreeningInfo>
                <FilmInfo></FilmInfo>
            </Main>
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
                filmHeroImage {
                    title
                    image {
                        fluid {
                            ...GatsbyContentfulFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`
