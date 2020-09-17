import React, { useState } from "react"
import tw, { TwComponent } from "twin.macro"
import { graphql } from "gatsby"
import { FluidObject } from "gatsby-image"

import Layout from "components/Layout"
import Header from "components/Header"
import Dropdown from "components/Selects"
import { PersonCard3Cols } from "components/Cards"
import EmptyState from "components/EmptyState"

type DataType = {
    Juries: {
        group: {
            nodes: JuryType[]
        }[]
    }
}

type JuryType = {
    year: string
    category: string
    name: string
    titles: string
    photo: {
        fluid: FluidObject
        description: string
    }
}

export default function Index(props: { data: DataType }) {
    const Main: TwComponent<"main"> = tw.main`container mx-auto`
    const CardContainer: TwComponent<"div"> = tw.div`grid grid-cols-4 grid-flow-row gap-10 py-16`
    const Filters: TwComponent<"div"> = tw.div`flex flex-row space-x-4 py-8`

    const juryData: JuryType[] = props.data.Juries.group[1].nodes

    const yearOptions: string[] = [...new Set(juryData.map(x => x.year))]
    const defaultYear: string = yearOptions[0]
    const [year, setYear] = useState(defaultYear)
    function handleYearChange(newValue: string) {
        setYear(newValue)
    }

    const categoryOption: string[] = [...new Set(juryData.map(x => x.category))]
    const defaultCategory: string = categoryOption[0]
    const [category, setCategory] = useState(defaultCategory)
    function handleCategoryChange(newValue: string) {
        setCategory(newValue)
    }

    const filterJuryData: JuryType[] = juryData.filter(function (el) {
        if (category === "") {
            return el.year === year
        } else {
            return el.year === year && el.category === category
        }
    })

    return (
        <Layout isTop={false} title="竞赛评审">
            <Header category="competition" titleId={1} />
            <Main>
                <Filters>
                    <Dropdown
                        allowUndefined={false}
                        helperText="年份"
                        options={yearOptions}
                        defaultValue={defaultYear}
                        value={year}
                        onChange={handleYearChange}
                    />
                    <Dropdown
                        allowUndefined={false}
                        helperText="阶段"
                        options={categoryOption}
                        defaultValue={defaultCategory}
                        value={category}
                        onChange={handleCategoryChange}
                    />
                </Filters>
                <CardContainer>
                    {filterJuryData.length === 0 ? (
                        <EmptyState />
                    ) : (
                        filterJuryData.map((item, i) => (
                            <PersonCard3Cols
                                imgSrc={item.photo.fluid}
                                imgAlt={item.photo.description}
                                name={item.name}
                                titles={item.titles}
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
        Juries: allContentfulJuries(sort: { fields: name, order: ASC }) {
            group(field: node_locale) {
                nodes {
                    year
                    category
                    name
                    titles
                    photo {
                        fluid(quality: 100, cropFocus: CENTER) {
                            ...GatsbyContentfulFluid_withWebp
                        }
                        description
                    }
                }
            }
        }
    }
`
