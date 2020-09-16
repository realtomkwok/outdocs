import React from "react"
import tw, { TwComponent } from "twin.macro"
import { graphql } from "gatsby"
import { FluidObject } from "gatsby-image"

import Layout from "components/Layout"
import Header from "components/Header"
import { FilmCard } from "components/Cards"

type DataType = {
    FilmLibrary: {
        group: {
            nodes: FilmType[]
        }[]
    }
}

type FilmType = {
    category: string
    yearOfCompetition: string
    filmHeroImage: {
        fluid: FluidObject
        description: string
    }
    filmTitle: string
    filmInfo: string
    detailPage: string
}

export default function Index(props: { data: DataType }) {
    const Main: TwComponent<"main"> = tw.main`container mx-auto`
    const CardContainer: TwComponent<"div"> = tw.div`grid grid-cols-3 grid-flow-row gap-10`

    const filmData: FilmType[] = props.data.FilmLibrary.group[1].nodes //0: en-US 1: zh-Hans

    return (
        <Layout isTop={false}>
            <Header category="competition" titleId={1} />
            <Main>
                <CardContainer>
                    {filmData.map((item, i) => (
                        <FilmCard
                            category={item.category}
                            year={item.yearOfCompetition}
                            imgSrc={item.filmHeroImage.fluid}
                            imgAlt={item.filmHeroImage.description}
                            filmTitle={item.filmTitle}
                            filmInfo={item.filmInfo}
                            detailPage={item.detailPage}
                            key={i}
                        />
                    ))}
                </CardContainer>
            </Main>
        </Layout>
    )
}

export const query = graphql`
    query {
        FilmLibrary: allContentfulLibraryFilm {
            group(field: node_locale) {
                nodes {
                    category
                    yearOfCompetition
                    filmHeroImage {
                        fluid(cropFocus: FACES, quality: 100) {
                            ...GatsbyContentfulFluid_withWebp
                        }
                        description
                    }
                    filmTitle
                    filmInfo
                    detailPage
                }
            }
        }
    }
`
