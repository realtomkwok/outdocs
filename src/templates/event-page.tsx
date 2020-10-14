import React from "react"
import tw, { styled } from "twin.macro"
import { graphql } from "gatsby"
import { FluidObject } from "gatsby-image"

import Layout from "components/Layout"
import Tag from "components/Tags"
import { Heading2, Subheading2, Body } from "utils/typography"
import BackgroundImage from "gatsby-background-image"
import { OutlinedBtn } from "components/Buttons"
import { PersonCard, EventCard } from "components/Cards"
import { Parallax } from "react-scroll-parallax"

type DataProps = {
    data: {
        contentfulEventsSessions: Omit<EventProps, "detailPage">
        allContentfulEventsSessions: {
            nodes: Pick<
                EventProps,
                | "category"
                | "dateAndTime"
                | "name"
                | "location"
                | "heroImage"
                | "detailPage"
            >[]
        }
    }
}

type EventProps = {
    category: string
    name: string
    date: Date
    dateAndTime: Date
    location: string
    onlineEventUrl: string
    offlineEventUrl: string
    info: {
        info: string
    }
    guest: {
        avatar: {
            description: string
            fluid: FluidObject
        }
        name: string
        titles: string
        info: {
            info: string
        }
    }[]
    heroImage: {
        description: string
        fluid: FluidObject
    }
    detailPage: string
}

export default function EventDetail({ data }: DataProps) {
    const Container = tw.div`container mx-auto space-y-32`
    const Header = tw.header`grid lg:grid-cols-2 gap-10`
    const HeaderInfo = tw.div`flex flex-col justify-between`
    const HeaderHero = styled.div`
        height: 24rem;
    `
    const Main = tw.div`space-y-32`
    const Info = tw.div`space-y-8 lg:w-2/3`
    const Guests = tw.div`space-y-8`
    const GuestWrapper = tw.div`grid lg:grid-cols-2 gap-16`
    const Others = tw.div`space-y-8`
    const OthersWrapper = tw.div`grid md:grid-cols-2 lg:grid-cols-3 gap-10`

    const thisEvent = data.contentfulEventsSessions
    const allOtherEvents = data.allContentfulEventsSessions.nodes

    const selectedEvents = allOtherEvents
        .map((n, i, all) => {
            const j = i + Math.floor(Math.random() * (all.length - i))
            const v = all[j]
            all[j] = n
            return v
        })
        .slice(0, 3)

    return (
        <Layout hasPadding title={thisEvent.name}>
            <Container>
                <Header>
                    <HeaderInfo>
                        <div tw="space-y-2">
                            <Tag tagStyle="secondary">{thisEvent.category}</Tag>
                            <Heading2>{thisEvent.name}</Heading2>
                        </div>
                        <div tw="space-y-4">
                            <div>
                                <Subheading2>
                                    {thisEvent.dateAndTime}
                                </Subheading2>
                                <Subheading2>{thisEvent.location}</Subheading2>
                            </div>
                            {thisEvent.offlineEventUrl && (
                                <OutlinedBtn
                                    btnText="报名"
                                    to={thisEvent.offlineEventUrl}
                                />
                            )}
                            {thisEvent.onlineEventUrl && (
                                <OutlinedBtn
                                    btnText="预约"
                                    to={thisEvent.onlineEventUrl}
                                />
                            )}
                        </div>
                    </HeaderInfo>
                    <HeaderHero>
                        <BackgroundImage
                            fluid={thisEvent.heroImage.fluid}
                            alt={thisEvent.heroImage.description}
                            style={tw`h-full`}
                        />
                    </HeaderHero>
                </Header>
                <Main>
                    <Info>
                        <Tag tagStyle="primary">简介</Tag>
                        <Body>{thisEvent.info.info}</Body>
                    </Info>
                    <Guests>
                        <Tag tagStyle="primary">嘉宾</Tag>
                        <GuestWrapper>
                            {thisEvent.guest &&
                                thisEvent.guest.map((item, i) => (
                                    <PersonCard
                                        key={i}
                                        size="small"
                                        imgFluid={item.avatar.fluid}
                                        imgAlt={item.avatar.description}
                                        name={item.name}
                                        titles={item.titles}
                                        description={item.info.info}
                                    />
                                ))}
                        </GuestWrapper>
                    </Guests>

                    <Others>
                        <Tag tagStyle="primary">你可能会感兴趣的活动</Tag>
                        <OthersWrapper>
                            {selectedEvents.map((item, i) => (
                                <EventCard
                                    detailPage={item.detailPage}
                                    tag={item.category}
                                    title={item.name}
                                    location={item.location}
                                    dateAndTime={item.dateAndTime}
                                    imgSrc={item.heroImage.fluid}
                                    imgAlt={item.heroImage.description}
                                    key={i}
                                />
                            ))}
                        </OthersWrapper>
                    </Others>
                </Main>
            </Container>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        contentfulEventsSessions(
            node_locale: { eq: "zh-Hans" }
            detailPage: { eq: $slug }
        ) {
            category
            name
            date(formatString: "MM/DD ddd ", locale: "zh-cn")
            dateAndTime(formatString: "MM/DD ddd HH:mm", locale: "zh-cn")
            location
            onlineEventUrl
            offlineEventUrl
            info {
                info
            }
            guest {
                avatar {
                    description
                    fluid {
                        ...GatsbyContentfulFluid_withWebp
                    }
                }
                name
                titles
                info {
                    info
                }
            }
            heroImage {
                description
                fluid {
                    ...GatsbyContentfulFluid_withWebp
                }
            }
        }
        allContentfulEventsSessions(
            filter: {
                node_locale: { eq: "zh-Hans" }
                detailPage: { ne: $slug }
            }
        ) {
            nodes {
                heroImage {
                    fluid {
                        ...GatsbyContentfulFluid_withWebp
                    }
                    description
                }
                category
                name
                dateAndTime(formatString: "MM/DD ddd HH:mm", locale: "zh-cn")
                location
                detailPage
            }
        }
    }
`
