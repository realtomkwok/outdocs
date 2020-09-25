import React, { useState } from "react"
import tw, { TwComponent } from "twin.macro"
import { graphql } from "gatsby"
import { FluidObject } from "gatsby-image"

import Layout from "components/Layout"
import Header from "components/Header"
import { FilmCard } from "components/Cards"
import Dropdown from "components/Selects"
import EmptyState from "components/EmptyState"

type DataType = {
    FilmLibrary: {
        group: {
            nodes: FilmType[]
        }[]
    }
}

type FilmType = {
    contentfulid: number
    category: string
    yearOfCompetition: string
    filmHeroImage: {
        fluid: FluidObject
        description: string
    }
    filmTitle: string
    filmInfo: string[]
    detailPage: string
}

export default function Index(props: { data: DataType }) {
    const Main: TwComponent<"main"> = tw.main`container mx-auto`
    const CardContainer: TwComponent<"div"> = tw.div`grid grid-cols-3 grid-flow-row gap-10 py-16`
    const Filters: TwComponent<"div"> = tw.div`flex flex-row space-x-4 py-8 justify-center`

    const filmData: FilmType[] = props.data.FilmLibrary.group[1].nodes //0: en-US 1: zh-Hans

    // 📖 Utilizing ES6 'Set' object to get distinct values from an array: https://codeburst.io/javascript-array-distinct-5edc93501dc4
    const yearsOptions: string[] = [
        ...new Set(filmData.map(x => x.yearOfCompetition)),
    ]
    const defaultYear: string = yearsOptions[1] // set default value of the 'Year' dropdown filter.
    const [year, setYear] = useState(defaultYear)
    function handleYearChange(newValue: string) {
        setYear(newValue)
    }

    const categoryOptions: string[] = [
        ...new Set(filmData.map(x => x.category)),
    ]
    const defaultCategory: string = ""
    const [category, setCategory] = useState(defaultCategory)
    function handleCategoryChange(newValue: string) {
        setCategory(newValue)
    }

    const filteredFilmData: FilmType[] = filmData.filter(function (el) {
        if (year === "" && category === "") {
            return filmData
        }
        if (category === "") {
            return el.yearOfCompetition === year
        } else {
            return el.yearOfCompetition === year && el.category === category
        }
    })

    return (
        <Layout hasPadding isTop={false} title="入围影片" isDark={false}>
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
                    {filteredFilmData.length === 0 ? (
                        <EmptyState />
                    ) : (
                        filteredFilmData.map((item, i) => (
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
                        ))
                    )}
                </CardContainer>
            </Main>
        </Layout>
    )
}

export const query = graphql`
    query {
        FilmLibrary: allContentfulLibraryFilm(
            sort: { order: ASC, fields: contentfulid }
        ) {
            group(field: node_locale) {
                nodes {
                    contentfulid
                    category
                    yearOfCompetition
                    filmHeroImage {
                        fluid(cropFocus: CENTER, quality: 100) {
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
