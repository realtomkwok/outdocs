import React from "react"
import tw, { styled } from "twin.macro"
import { graphql } from "gatsby"
import { FluidObject } from "gatsby-image"

import Layout from "components/Layout"
import Header from "components/Header"
import Dropdown from "components/Selects"
import { EventCard } from "components/Cards"
import { Heading2 } from "utils/typography"

type DataProps = {
    data: {
        Events: {
            group: EventProps[]
        }
    }
}

type EventProps = {
    nodes: {
        category: string
        name: string
        date: Date
        dateAndTime: Date | string
        registerRequired: boolean
        offlineEventUrl: string
        onlineEventUrl: string
        location: string
        detailPage: string
        heroImage: {
            fluid: FluidObject
            description: string
        }
    }[]
}

export default function Index({ data }: DataProps) {
    const Main = tw.div`relative`
    const Filter = tw.div`flex justify-center py-8`
    const Content = tw.div`grid grid-cols-3 relative py-16`
    const List = tw.div`col-start-2 col-end-4 mb-16`
    const Divider = tw.div`border-t-2 border-black`
    const Date = tw.aside`col-span-1 w-3/5`
    const ItemWrapper = tw.div`py-8 grid grid-cols-2 gap-10`

    const eventData: EventProps[] = data.Events.group

    const categories: string[] = []
    for (let order: number = 0; order < eventData.length; order++) {
        for (let item of eventData[order].nodes) {
            categories.push(item.category)
        }
    }
    const categoryOption: string[] = [...new Set(categories.map(x => x))]
    const defaultCategory: string = ""
    const [catergory, setCategory] = React.useState(defaultCategory)
    function handleCategoryChange(newValue: string) {
        setCategory(newValue)
    }
    const filteredCategoryData: EventProps[] = eventData.filter(function (el) {
        if (catergory === "") {
            return eventData
        } else {
            return el.nodes.find(el => el.category === catergory)
        }
    })

    return (
        <Layout hasPadding isTop={false} title="活动" isDark={false}>
            <Header category="carnival" titleId={2} />
            <Main>
                <Filter>
                    <Dropdown
                        allowUndefined
                        options={categoryOption}
                        helperText="分类"
                        defaultValue=""
                        value={catergory}
                        onChange={handleCategoryChange}
                    />
                </Filter>
                <Content>
                    {filteredCategoryData.map((list, i) => (
                        <React.Fragment key={i}>
                            <Date>
                                <Heading2>{list.nodes[0].date}</Heading2>
                            </Date>
                            <List>
                                <Divider />
                                <ItemWrapper>
                                    {list.nodes.map((item, i) => {
                                        let btnTo: string, btnText: string
                                        if (item.dateAndTime === null) {
                                            item.dateAndTime = "全天"
                                        }
                                        if (item.onlineEventUrl === null) {
                                            btnTo = item.offlineEventUrl
                                            btnText = "报名"
                                        } else if (
                                            item.offlineEventUrl === null
                                        ) {
                                            btnTo = item.onlineEventUrl
                                            btnText = "预约"
                                        }

                                        return (
                                            <EventCard
                                                detailPage={item.detailPage}
                                                tag={item.category}
                                                title={item.name}
                                                subtitle=""
                                                dateAndTime={item.dateAndTime}
                                                location={item.location}
                                                imgSrc={item.heroImage.fluid}
                                                imgAlt={
                                                    item.heroImage.description
                                                }
                                                key={i}
                                                hasButton={
                                                    item.registerRequired
                                                }
                                                btnText={btnText}
                                                btnTo={btnTo}
                                            />
                                        )
                                    })}
                                </ItemWrapper>
                            </List>
                        </React.Fragment>
                    ))}
                </Content>
            </Main>
        </Layout>
    )
}

export const query = graphql`
    {
        Events: allContentfulEventsSessions(
            filter: { node_locale: { eq: "zh-Hans" } }
            sort: { fields: dateAndTime, order: ASC }
        ) {
            group(field: date) {
                nodes {
                    category
                    name
                    date(formatString: "MM/DD ddd", locale: "en")
                    dateAndTime(formatString: "HH:mm", locale: "zh-cn")
                    registerRequired
                    offlineEventUrl
                    onlineEventUrl
                    location
                    detailPage
                    heroImage {
                        fluid(quality: 100) {
                            ...GatsbyContentfulFluid_withWebp
                        }
                        description
                    }
                }
            }
        }
    }
`
