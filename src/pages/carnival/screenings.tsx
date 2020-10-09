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
            category: string[]
            onlineLocation: string
            location: string
            onlineUrl: string
            ticketsUrl: string
            filmInfo: {
                filmTitle: string
                filmInfo: string[]
                detailPage: string
                filmHeroImage: {
                    title: string
                    image: {
                        fluid: FluidObject
                    }
                }
                director: {
                    name: string
                }[]
            }
        }[]
    }[]
}

function ScheduleList(props: { data: SchedulesProps }) {
    const Container = tw.div`py-16`
    const List = tw.div`mb-16`
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
                            let btnText: string, btnTo: string, location: string
                            if (item.category.length > 1) {
                                location = item.location
                            } else {
                                if (item.category[0] === "线上展映") {
                                    location = item.onlineLocation
                                } else if (item.category[0] === "线下展映") {
                                    location = item.location
                                }
                            }
                            return (
                                <FilmScheduleCard
                                    filmImgSrc={
                                        item.filmInfo.filmHeroImage.image.fluid
                                    }
                                    filmImgAlt={
                                        item.filmInfo.filmHeroImage.title
                                    }
                                    filmTitle={item.filmInfo.filmTitle}
                                    filmDirector={item.filmInfo.director}
                                    filmInfo={item.filmInfo.filmInfo}
                                    filmDeatail={item.filmInfo.detailPage}
                                    dnt={item.dateAndTime}
                                    location={location}
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
        <Layout hasPadding title="展映">
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
                    category
                    onlineLocation
                    location
                    onlineUrl
                    ticketsUrl
                    filmInfo {
                        filmTitle

                        filmInfo
                        detailPage
                        filmHeroImage {
                            image {
                                fluid(quality: 100) {
                                    ...GatsbyContentfulFluid_withWebp
                                }
                                title
                            }
                        }
                        director {
                            name
                        }
                    }
                }
            }
        }
    }
`
