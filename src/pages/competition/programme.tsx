import React, { useState } from "react"
import tw, { styled, TwComponent } from "twin.macro"
import { graphql } from "gatsby"
import { FluidObject } from "gatsby-image"

import Layout from "components/Layout"
import Header from "components/Header"
import { FilmCard, FilmScheduleCard } from "components/Cards"
import Dropdown from "components/Selects"
import EmptyState from "components/EmptyState"
import { Heading3 } from "utils/typography"

type DataProps = {
    data: {
        Finalists: {
            group: {
                nodes: FilmProps[]
            }[]
        }
        SemiFinalists: {
            group: {
                nodes: FilmProps[]
            }
        }
    }
}

type FilmProps = {
    contentfulid: number
    category?: string
    yearOfCompetition: string
    filmHeroImage: {
        title: string
        image: {
            fluid: FluidObject
        }
    }
    filmTitle: string
    filmInfo: string[]
    detailPage?: string
    director: {
        name: string
    }[]
}

export default function Index({ data }: DataProps) {
    const Main: TwComponent<"main"> = tw.main`container mx-auto`
    const CardContainer: TwComponent<"div"> = tw.div`grid grid-cols-3 grid-flow-row gap-10 py-16`
    const Filters: TwComponent<"div"> = tw.div`flex flex-row space-x-4 py-8 justify-center`

    // list of semi-finalists
    const List = tw.div`mb-16 py-16`
    const ListHeader = styled.div``
    const ItemWrapper = styled.div`
        ${tw`space-y-8 py-4`};
    `

    const finalists: FilmProps[] = data.Finalists.group[1].nodes //0: en-US 1: zh-Hans
    const semiFinalists: FilmProps[] = data.SemiFinalists.group[1].nodes

    // 📖 Utilizing ES6 'Set' object to get distinct values from an array: https://codeburst.io/javascript-array-distinct-5edc93501dc4
    const yearsOptions: string[] = [
        ...new Set(semiFinalists.map(x => x.yearOfCompetition)),
    ]
    const defaultYear: string = yearsOptions[0] // set default value of the 'Year' dropdown filter.
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
                <CardContainer>
                    {filteredfinalists.length === 0 ? (
                        <EmptyState />
                    ) : (
                        filteredfinalists.map((item, i) => (
                            <FilmCard
                                imgSrc={item.filmHeroImage.image.fluid}
                                imgAlt={item.filmHeroImage.title}
                                filmTitle={item.filmTitle}
                                filmInfo={item.filmInfo}
                                detailPage={item.detailPage}
                                director={item.director}
                                key={i}
                            />
                        ))
                    )}
                </CardContainer>
                <List>
                    <div tw="flex justify-center mb-8">
                        <Heading3>复评入围影片</Heading3>
                    </div>
                    <ListHeader>
                        <ItemWrapper>
                            {filteredSemiFinalists.map((item, i) => (
                                <FilmScheduleCard
                                    key={i}
                                    filmImgSrc={item.filmHeroImage.image.fluid}
                                    filmImgAlt={item.filmHeroImage.title}
                                    filmTitle={item.filmTitle}
                                    filmInfo={item.filmInfo}
                                    filmDeatail={null}
                                    filmDirector={item.director}
                                    noButton
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
        Finalists: allContentfulLibraryFilm(
            sort: { order: ASC, fields: contentfulid }
            filter: { category: { nin: ["复评入围", "Semi-Finalist"] } }
        ) {
            group(field: node_locale) {
                nodes {
                    contentfulid
                    category
                    yearOfCompetition
                    filmHeroImage {
                        image {
                            title
                            fluid {
                                ...GatsbyContentfulFluid_withWebp
                            }
                        }
                    }
                    filmTitle
                    filmInfo
                    detailPage
                    director {
                        name
                    }
                }
            }
        }
        SemiFinalists: allContentfulLibraryFilm(
            sort: { order: ASC, fields: contentfulid }
            filter: { category: { in: ["复评入围", "Semi-Finalist"] } }
        ) {
            group(field: node_locale) {
                nodes {
                    contentfulid
                    yearOfCompetition
                    filmHeroImage {
                        image {
                            title
                            fluid {
                                ...GatsbyContentfulFluid_withWebp
                            }
                        }
                    }
                    filmTitle
                    filmInfo
                    director {
                        name
                    }
                }
            }
        }
    }
`
