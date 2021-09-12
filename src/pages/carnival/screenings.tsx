import React from "react"
import tw, { styled } from "twin.macro"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import Header from "components/Header"
import { FilmScheduleCard } from "components/Cards"
import { Subheading2 } from "utils/typography"
import { OutlinedBtn } from "components/Buttons"
import { IGatsbyImageData } from "gatsby-plugin-image"

type DataProps = {
    data: {
        Schedules: SchedulesProps
    }
}

type SchedulesProps = {
    group: {
        fieldValue: Date
        nodes: {
            screeningUnit: string
            locationOffline: string
            date: Date
            films: {
                heroImage: {
                    childImageSharp: {
                        gatsbyImageData: IGatsbyImageData
                    }
                }
            }[]
        }[]
    }[]
}

function ScheduleList(props: { data: SchedulesProps }) {
    const Container = tw.div`pt-16`
    const List = tw.div`mb-16`
    const ListHeader = styled.div`
        ${tw`lg:w-1/2 lg:ml-1/2`};
    `
    const Divider = tw.div`border-t-2 border-black `
    const ItemWrapper = styled.div`
        ${tw`space-y-4 py-4`};
    `
    const ButtonWrapper = tw.div`flex lg:w-1/2 lg:ml-1/2`

    return (
        <Container>
            {props.data.group.map((list, i) => (
                <List key={i}>
                    <ListHeader>
                        <Subheading2>
                            {list.fieldValue.toLocaleDateString("zh-cn")}
                        </Subheading2>
                        <Divider />
                    </ListHeader>
                    {/* <ItemWrapper>
                        {list.nodes.map((item, i) => {
                            let location: string
                            if (item.category.length > 1) {
                                location =
                                    item.location + "/" + item.onlineLocation
                            } else {
                                if (item.category[0] === "线上展映") {
                                    location = item.onlineLocation
                                } else if (item.category[0] === "线下展映") {
                                    location = item.location
                                }
                            }
                            return (
                                <>
                                    <FilmScheduleCard
                                        filmImgSrc={
                                            item.filmInfo.filmHeroImage.image
                                                .fluid
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
                                        key={i}
                                    />
                                    <ButtonWrapper>
                                        {item.ticketsUrl && (
                                            <OutlinedBtn
                                                to={item.ticketsUrl}
                                                btnText="线下购票"
                                            />
                                        )}
                                        {item.onlineUrl && (
                                            <OutlinedBtn
                                                to={item.onlineUrl}
                                                btnText="在线观影"
                                            />
                                        )}
                                    </ButtonWrapper>
                                </>
                            )
                        })}
                    </ItemWrapper> */}
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
            1
            <ScheduleList data={scheduleData} />
        </Layout>
    )
}

export const query = graphql`
    {
        Schedules: allStrapiScreening(sort: { fields: date }) {
            group(field: date) {
                fieldValue
                nodes {
                    screeningUnit
                    locationOffline
                    date(formatString: "MM/DD ddd", locale: "zh-cn")
                    films {
                        heroImage {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        }
    }
`
