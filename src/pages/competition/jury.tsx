import React, { useState } from "react"
import tw, { TwComponent } from "twin.macro"
import { graphql } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"

import Layout from "components/Layout"
import Header from "components/Header"
import Dropdown from "components/Selects"
import { PersonCard } from "components/Cards"
import EmptyState from "components/EmptyState"

type DataType = {
    data: {
        Juries: {
            group: JuryGroupType[]
        }
    }
}

type JuryGroupType = {
    fieldValue: string
    nodes: JuryType[]
}

type JuryType = {
    year: string[]
    name: string
    name_eng: string
    category: string
    titles: string
    avatar: {
        childImageSharp: {
            gatsbyImageData: IGatsbyImageData
        }
    }
}

export default function Index({ data }: DataType) {
    const Main: TwComponent<"main"> = tw.main`container mx-auto`
    const CardContainer: TwComponent<"div"> = tw.div`grid md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-10 py-16`
    const Filters: TwComponent<"div"> = tw.div`flex flex-row space-x-4 justify-center py-8`

    const juriesData: JuryGroupType[] = data.Juries.group

    const categoryOptions: string[] = [
        ...new Set(juriesData.map(x => x.fieldValue)),
    ]
    const defaultCategory: string = categoryOptions[0]
    const [category, setCategory] = useState(defaultCategory)
    function handleCategoryChange(newValue: string) {
        setCategory(newValue)
    }

    // set an array of all posible values of 'year'
    const years: string[] = []
    for (let category: number = 0; category < juriesData.length; category++) {
        for (let node of juriesData[category].nodes) {
            for (let year of node.year) {
                years.push(year)
            }
        }
    }

    const yearOptions: string[] = [...new Set(years.map(x => x))]
    const defaultYear: string = yearOptions[0]
    const [year, setYear] = useState(defaultYear)
    function handleYearChange(newValue: string) {
        setYear(newValue)
    }

    const selectedCategoryJuries: JuryGroupType[] = juriesData.filter(
        el => el.fieldValue === category
    )
    const filteredJuries: JuryType[] = selectedCategoryJuries[0].nodes.filter(
        el => el.year.find(el => el === year)
    )

    return (
        <Layout hasPadding title="竞赛评审">
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
                        options={categoryOptions}
                        defaultValue={defaultCategory}
                        value={category}
                        onChange={handleCategoryChange}
                    />
                </Filters>
                {filteredJuries.length === 0 ? (
                    <div tw="py-16">
                        <EmptyState />
                    </div>
                ) : (
                    <CardContainer>
                        {filteredJuries.map((item, i) => (
                            <PersonCard
                                size="large"
                                imgSrc={
                                    item.avatar.childImageSharp.gatsbyImageData
                                }
                                imgAlt={item.name}
                                name={item.name}
                                description={item.titles}
                                key={i}
                            />
                        ))}
                    </CardContainer>
                )}
            </Main>
        </Layout>
    )
}

export const query = graphql`
    {
        Juries: allStrapiJury(sort: { fields: name_eng }) {
            group(field: category) {
                fieldValue
                nodes {
                    year
                    name
                    category
                    name_eng
                    titles
                    avatar {
                        childImageSharp {
                            gatsbyImageData(
                                transformOptions: {
                                    cropFocus: CENTER
                                    grayscale: true
                                }
                            )
                        }
                    }
                }
            }
        }
    }
`
