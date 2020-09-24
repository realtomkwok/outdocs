import React from "react"
import tw, { styled } from "twin.macro"
import { graphql } from "gatsby"
import { FluidObject } from "gatsby-image"

import Layout from "components/Layout"
import Header from "components/Header"
import { FilmScheduleCard } from "components/Cards"
import { Subheading2 } from "utils/typography"

type DataProps = {
    data: {
        Schedules: SchedulesProps
    }
}

type SchedulesProps = {
    group: {
        nodes: {
            contentfulid: number
            date: Date
            dateAndTime: Date
            location: string
            onlineUrl: string
            ticketsUrl: string
            filmInfo: {
                filmTitle: string
                filmInfo: string[]
                detailPage: string
                filmHeroImage: {
                    fluid: FluidObject
                    description: string
                }
            }
        }[]
    }[]
}

function ScheduleList(props: { data: SchedulesProps }) {
    const Container = tw.div`py-16 gap-10`
    const List = tw.div``
    const ListHeader = styled.div`
        ${tw`w-1/2`};
        margin-left: 50%;
    `
    const Divider = tw.div`border-t-2 border-black `
    const ItemWrapper = styled.div`
        ${tw`space-y-8 py-4`};
    `

    return (
        <Container>
            {props.data.group.map((list, i) => (
                <List key={i}>
                    <ListHeader>
                        <Subheading2>{list.nodes[0].date}</Subheading2>
                        <Divider />
                    </ListHeader>
                    <ItemWrapper>
                        {list.nodes.map((item, i) => {
                            let btnText: string, btnTo: string
                            if (item.onlineUrl !== null) {
                                btnText = "预约"
                                btnTo = item.onlineUrl
                            } else {
                                btnText = "购票"
                                btnTo = item.ticketsUrl
                            }

                            return (
                                <FilmScheduleCard
                                    filmImgSrc={
                                        item.filmInfo.filmHeroImage.fluid
                                    }
                                    filmImgAlt={
                                        item.filmInfo.filmHeroImage.description
                                    }
                                    filmTitle={item.filmInfo.filmTitle}
                                    filmInfo={item.filmInfo.filmInfo}
                                    filmDeatail={item.filmInfo.detailPage}
                                    dnt={item.dateAndTime}
                                    location={item.location}
                                    btnText={btnText}
                                    btnTo={btnTo}
                                    key={i}
                                />
                            )
                        })}
                    </ItemWrapper>
                </List>
            ))}
        </Container>
    )
}

export default function Index({ data }: DataProps) {
    const scheduleData: SchedulesProps = data.Schedules

    return (
        <Layout hasPadding isTop={false} title="展映">
            <Header category="carnival" titleId={2} />
            <ScheduleList data={scheduleData} />
        </Layout>
    )
}

export const query = graphql`
    {
        Schedules: allContentfulEventsScreening(
            sort: { fields: dateAndTime, order: ASC }
            filter: { node_locale: { eq: "zh-Hans" } }
        ) {
            group(field: date) {
                nodes {
                    contentfulid
                    date(formatString: "MM/DD ddd", locale: "zh-cn")
                    dateAndTime(formatString: "HH:mm", locale: "zh-cn")
                    location
                    onlineUrl
                    ticketsUrl
                    filmInfo {
                        filmTitle
                        filmInfo
                        detailPage
                        filmHeroImage {
                            fluid(quality: 100) {
                                srcSetWebp
                            }
                        }
                    }
                }
            }
        }
    }
`
