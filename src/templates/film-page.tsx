import React from "react"
import tw, { styled } from "twin.macro"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import { Heading2 } from "utils/typography"

type DataType = {
    data: {
        allContentfulLibraryFilm: {
            nodes: FilmType[]
        }
    }
}

type FilmType = {
    filmTitle: string
}

export default function FilmDetail({ data }: DataType) {
    const filmData: FilmType = data.allContentfulLibraryFilm.nodes[0]
    const engTitle: string = data.allContentfulLibraryFilm.nodes[1].filmTitle

    return (
        <Layout isTop={false} hasPadding={false} title={filmData.filmTitle} isDark>
            <Heading2>{filmData.filmTitle}</Heading2>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        allContentfulLibraryFilm(
            filter: {
                detailPage: { eq: $slug }
            }
        ) {
            nodes {
                filmTitle
            }
        }
    }
`
