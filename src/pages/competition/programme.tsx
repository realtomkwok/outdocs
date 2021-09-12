import React, { useState } from "react"
import tw, { styled, TwComponent } from "twin.macro"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import Header from "components/Header"
import { FilmCard, FilmScheduleCard } from "components/Cards"
import Dropdown from "components/Selects"
import EmptyState from "components/EmptyState"
import { Heading3 } from "utils/typography"
import { IGatsbyImageData } from "gatsby-plugin-image"

type DataProps = {
    data: {
        Finalists: {
            nodes: FilmProps[]
        }
        SemiFinalists: {
            nodes: FilmProps[]
        }
    }
}

type FilmProps = {
    filmId: number
    category?: string
    yearOfCompetition: string
    heroImage: {
        childImageSharp: {
            gatsbyImageData: IGatsbyImageData
        }
    }
    title: string
    info: string
    detailPageUrl?: string
    directors: {
        name: string
    }[]
}

export default function Index({ data }: DataProps) {
    const Main: TwComponent<"main"> = tw.main`container mx-auto`
    const CardContainer: TwComponent<"div"> = tw.div`grid md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-10`
    const Filters: TwComponent<"div"> = tw.div`flex flex-row space-x-4 py-8 justify-center`

    // list of semi-finalists
    const List = tw.div`mb-16 py-16`
    const ListHeader = styled.div``
    const ItemWrapper = styled.div`
        ${tw`space-y-8 py-4`};
    `

    const finalists: FilmProps[] = data.Finalists.nodes
    const semiFinalists: FilmProps[] = data.SemiFinalists.nodes

    // 📖 Utilizing ES6 'Set' object to get distinct values from an array: https://codeburst.io/javascript-array-distinct-5edc93501dc4
    const yearsOptions: string[] = [
        ...new Set(semiFinalists.map(x => x.yearOfCompetition)),
    ]
    const defaultYear: string = yearsOptions[1] // set default value of the 'Year' dropdown filter.
    const [year, setYear] = useState(defaultYear)
    function handleYearChange(newValue: string) {
        setYear(newValue)
    }

    const categoryOptions: string[] = [
        ...new Set(finalists.map(x => x.category)),
    ]
    const defaultCategory: string = ""
    const [category, setCategory] = useState(defaultCategory)
    function handleCategoryChange(newValue: string) {
        setCategory(newValue)
    }

    const filteredfinalists: FilmProps[] = finalists.filter(function (el) {
        if (year === "" && category === "") {
            return finalists
        }
        if (category === "") {
            return el.yearOfCompetition === year
        } else {
            return el.yearOfCompetition === year && el.category === category
        }
    })

    const filteredSemiFinalists: FilmProps[] = semiFinalists.filter(
        el => el.yearOfCompetition === year
    )

    return (
        <Layout hasPadding title="入围影片">
            <Header category="competition" titleId={1} />
            <Main>
                <Filters>
                    <Dropdown
                        allowUndefined={false}
                        helperText="参赛年份"
                        options={yearsOptions}
                        defaultValue={defaultYear}
                        value={year}
                        onChange={handleYearChange}
                    />
                    <Dropdown
                        allowUndefined
                        helperText="入围类型"
                        options={categoryOptions}
                        defaultValue={defaultCategory}
                        value={category}
                        onChange={handleCategoryChange}
                    />
                </Filters>
                <div tw="py-16">
                    {filteredfinalists.length === 0 ? (
                        <EmptyState />
                    ) : (
                        <CardContainer>
                            {filteredfinalists.map((item, i) => (
                                <FilmCard
                                    imgSrc={
                                        item.heroImage.childImageSharp
                                            .gatsbyImageData
                                    }
                                    imgAlt={item.title}
                                    filmTitle={item.title}
                                    filmInfo={item.info}
                                    detailPage={item.detailPageUrl}
                                    director={item.directors}
                                    key={i}
                                />
                            ))}
                        </CardContainer>
                    )}
                </div>
                <List>
                    <div tw="flex justify-center mb-8">
                        <Heading3>复评入围影片</Heading3>
                    </div>
                    <ListHeader>
                        <ItemWrapper>
                            {filteredSemiFinalists.map((item, i) => (
                                <FilmScheduleCard
                                    key={i}
                                    filmImgSrc={
                                        item.heroImage.childImageSharp
                                            .gatsbyImageData
                                    }
                                    filmImgAlt={item.title}
                                    filmTitle={item.title}
                                    filmInfo={item.info}
                                    filmDeatail={null}
                                    filmDirector={item.directors}
                                />
                            ))}
                        </ItemWrapper>
                    </ListHeader>
                </List>
            </Main>
        </Layout>
    )
}

export const query = graphql`
    {
        Finalists: allStrapiFilm(
            sort: { order: ASC, fields: filmId }
            filter: { category: { ne: "复评入围" } }
        ) {
            nodes {
                filmId
                category
                yearOfCompetition
                heroImage {
                    childImageSharp {
                        gatsbyImageData(formats: WEBP)
                    }
                }
                title
                title_eng
                detailPageUrl
                directors {
                    name
                }
                info
            }
        }
        SemiFinalists: allStrapiFilm(
            sort: { order: ASC, fields: filmId }
            filter: { category: { in: "复评入围" } }
        ) {
            nodes {
                filmId
                yearOfCompetition
                heroImage {
                    childImageSharp {
                        gatsbyImageData(formats: WEBP)
                    }
                }
                title
                title_eng
                detailPageUrl
                directors {
                    name
                }
                info
            }
        }
    }
`
