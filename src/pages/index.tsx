import React from "react"
import { graphql } from "gatsby"
import tw, { TwComponent } from "twin.macro"
import { FluidObject } from "gatsby-image"
import { Helmet } from "react-helmet"

import {
    HeroImage,
    IndexHeroCard,
    NewsCard,
    NewsStrip,
    FotCard,
    EventCard,
} from "components/Cards"
import { Heading2, Button as BtnText, Heading4 } from "utils/typography"
import NavBar from "components/NavBar"
import Footer from "components/Footer"
import EmptyState from "components/EmptyState"

type DataType = {
    data: {
        Hero: HeroType
        News: {
            nodes: NewsType[]
        }
        FilmOfToday: {
            group: FotType[]
        }
        Sessions: {
            group: SessionType[]
        }
        Screenings: {
            group: ScreeningType[]
        }
    }
}

type HeroType = {
    heroImage: {
        fluid: FluidObject
        description: string
    }
    title: string
    tag: string
    linkText: string
    linkTo: string
}

type NewsType = {
    headline: string
    subheadline: string
    tag: {
        tag: string
        linkedPage: string
    }
    linkedWeChatArticle: string
    heroImage: {
        fluid: FluidObject
        description: string
    }
}

type FotType = {
    edges: {
        node: {
            filmTitle: string
            filmInfo: string[]
            detailPage: string
            filmHeroImage: {
                fluid: FluidObject
                description: string
            }
        }
    }[]
}

type SessionType = {
    nodes: {
        detailePage: string
        category: string
        name: string
        dateAndTime: Date
        location: string
        heroImage: {
            description: string
            fluid: FluidObject
        }
    }[]
}

type ScreeningType = {
    nodes: {
        filmInfo: {
            detailPage: string
            filmTitle: string
            filmInfo: string[]
            filmHeroImage: {
                description: string
                fluid: FluidObject
            }
        }
        dateAndTime: Date
        location: string
    }[]
}

function News(props: { data: NewsType[] }) {
    const Featured: TwComponent<"div"> = tw.div`col-span-6`
    const List: TwComponent<"div"> = tw.div`col-span-6 grid grid-rows-3`

    const featured: NewsType = props.data[0]
    const others: NewsType[] = props.data.slice(1)

    return (
        <>
            <Featured>
                <NewsCard
                    imgSrc={featured.heroImage.fluid}
                    imgAlt={featured.heroImage.description}
                    tag={featured.tag.tag}
                    // tagLinkedPage={featured.tag.linkedPage}
                    headline={featured.headline}
                    subheadline={featured.subheadline}
                    linkedWeChatArticle={featured.linkedWeChatArticle}
                />
            </Featured>
            <List>
                {others.map((news, i) => (
                    <NewsStrip
                        key={i}
                        tag={news.tag.tag}
                        // tagLinkedPage={news.tag.linkedPage}
                        headline={news.headline}
                        subheadline={news.subheadline}
                        linkedWeChatArticle={news.linkedWeChatArticle}
                    />
                ))}
            </List>
        </>
    )
}

function FilmOfToday(props: { data: FotType[] }) {
    const selectedFilm: number = Math.floor(
        Math.random() * Math.floor(props.data.length)
    )

    const img: { fluid: FluidObject; description: string } =
        props.data[selectedFilm].edges[0].node.filmHeroImage //🚩 edges[locale]

    const info: { filmTitle: string; filmInfo: string[]; detailPage: string } =
        props.data[selectedFilm].edges[0].node
    const engTitle: string = props.data[selectedFilm].edges[1].node.filmTitle

    return (
        <div tw="w-full h-auto relative">
            <HeroImage imgSrc={img.fluid} imgAlt={img.description} />
            <FotCard
                chnTitle={info.filmTitle}
                engTitle={engTitle}
                detailPage={info.detailPage}
                info={info.filmInfo}
            />
        </div>
    )
}

function Carnival(props: {
    screenings: ScreeningType[]
    sessions: SessionType[]
}) {
    const HeadingWrapper: TwComponent<"div"> = tw.div`flex flex-row justify-between items-start`
    const BtnWrapper: TwComponent<"div"> = tw.div`inline-flex space-x-4`
    const CardsContainer: TwComponent<"div"> = tw.div`grid grid-cols-2 grid-flow-row gap-10`

    const screeningData: ScreeningType = props.screenings[1] //0: en-US, 1: zh-Hans
    const sessionData: SessionType = props.sessions[1]

    const [isTabOne, renderTab] = React.useState(true)
    const RenderScreening = () => {
        return screeningData.nodes.length === 0 ? (
            <EmptyState />
        ) : (
            screeningData.nodes.map((item, i) => (
                <EventCard
                    imgSrc={item.filmInfo.filmHeroImage.fluid}
                    imgAlt={item.filmInfo.filmHeroImage.description}
                    detailPage={item.filmInfo.detailPage}
                    title={item.filmInfo.filmTitle}
                    subtitle={item.filmInfo.filmInfo.join(" | ")}
                    dateAndTime={item.dateAndTime}
                    location={item.location}
                    tag={null}
                    hasButton
                    btnText="详情"
                    btnTo={item.filmInfo.detailPage}
                    key={i}
                />
            ))
        )
    }
    const RenderSessions = () => {
        return screeningData.nodes.length === 0 ? (
            <EmptyState />
        ) : (
            sessionData.nodes.map((item, i) => (
                <EventCard
                    imgSrc={item.heroImage.fluid}
                    imgAlt={item.heroImage.description}
                    detailPage={item.detailePage}
                    tag={item.category}
                    title={item.name}
                    subtitle={null}
                    dateAndTime={item.dateAndTime}
                    location={item.location}
                    hasButton
                    btnText="详情"
                    btnTo={item.detailePage}
                    key={i}
                />
            ))
        )
    }
    function handleClick() {
        renderTab(!isTabOne)
    }

    return (
        <div tw="col-span-12 space-y-8">
            <HeadingWrapper>
                <Heading2>嘉年华</Heading2>
                <BtnWrapper>
                    <button
                        disabled={isTabOne}
                        onClick={handleClick}
                        css={
                            isTabOne
                                ? tw`text-black cursor-default`
                                : tw`text-inactive hover:text-black transition duration-150 focus:outline-none`
                        }
                    >
                        <BtnText>展映</BtnText>
                    </button>
                    <button
                        disabled={!isTabOne}
                        onClick={handleClick}
                        css={
                            !isTabOne
                                ? tw`text-black cursor-default`
                                : tw`text-inactive hover:text-black transition duration-150 focus:outline-none`
                        }
                    >
                        <BtnText>活动</BtnText>
                    </button>
                </BtnWrapper>
            </HeadingWrapper>
            <CardsContainer>
                {isTabOne ? RenderScreening() : RenderSessions()}
            </CardsContainer>
        </div>
    )
}

function AboutUs() {
    const Container: TwComponent<"div"> = tw.div`h-24 w-full bg-gray-200 grid items-center`
    const Title: TwComponent<"div"> = tw.div`mx-auto`

    return (
        <Container>
            <Title>
                <Heading4>我们是谁？</Heading4>
            </Title>
        </Container>
    )
}

export default function Home({ data }: DataType) {
    const Container: TwComponent<"div"> = tw.div`mx-auto font-sans h-full`
    const Main: TwComponent<"main"> = tw.main`container mx-auto p-16 grid grid-cols-12 gap-10`

    const hero: HeroType = data.Hero
    const newsData: NewsType[] = data.News.nodes
    const fotData: FotType[] = data.FilmOfToday.group
    const sessionData: SessionType[] = data.Sessions.group
    const screeningData: ScreeningType[] = data.Screenings.group

    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>OUTDOCS | 中国国际户外影像嘉年华</title>
            </Helmet>
            <NavBar isTop={true} />
            <div tw="w-full h-auto relative">
                <HeroImage
                    imgSrc={hero.heroImage.fluid}
                    imgAlt={hero.heroImage.description}
                />
                <IndexHeroCard
                    tag={hero.tag}
                    headline={hero.title}
                    btnText={hero.linkText}
                    btnLinkedPage={hero.linkTo}
                />
            </div>
            <Main>
                <News data={newsData} />
            </Main>
            <FilmOfToday data={fotData} />
            <Main>
                <Carnival sessions={sessionData} screenings={screeningData} />
            </Main>
            <AboutUs />
            <Footer />
        </Container>
    )
}

export const query = graphql`
    {
        Hero: contentfulIndexHero(node_locale: { eq: "zh-Hans" }) {
            linkText
            linkTo
            title
            tag
            heroImage {
                fluid(maxHeight: 800, cropFocus: CENTER, quality: 100) {
                    ...GatsbyContentfulFluid_withWebp
                }
            }
        }
        News: allContentfulNews(
            filter: { node_locale: { eq: "zh-Hans" } }
            sort: { order: DESC, fields: publishedDate }
            limit: 4
        ) {
            nodes {
                headline
                subheadline
                tag {
                    tag
                    linkedPage
                }
                linkedWeChatArticle
                heroImage {
                    fluid(quality: 100) {
                        ...GatsbyContentfulFluid_withWebp
                    }
                    title
                }
                publishedDate(fromNow: false)
            }
        }
        FilmOfToday: allContentfulLibraryFilm {
            group(field: contentfulid) {
                edges {
                    node {
                        contentfulid
                        filmTitle
                        filmInfo
                        detailPage
                        filmHeroImage {
                            fluid(quality: 100, cropFocus: CENTER) {
                                ...GatsbyContentfulFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
        Sessions: allContentfulEventsSessions(
            sort: { fields: dateAndTime, order: ASC }
        ) {
            group(field: node_locale) {
                nodes {
                    detailPage
                    category
                    name
                    dateAndTime(
                        formatString: "MM/DD ddd HH:MM"
                        locale: "zh-cn"
                    )
                    location
                    heroImage {
                        description
                        fluid(cropFocus: CENTER, maxHeight: 240) {
                            ...GatsbyContentfulFluid_withWebp
                        }
                    }
                }
            }
        }
        Screenings: allContentfulEventsScreening(
            sort: { fields: dateAndTime, order: ASC }
        ) {
            group(field: node_locale) {
                nodes {
                    filmInfo {
                        detailPage
                        filmTitle
                        filmInfo
                        filmHeroImage {
                            description
                            fluid(cropFocus: CENTER, maxHeight: 240) {
                                ...GatsbyContentfulFluid_withWebp
                            }
                        }
                    }
                    dateAndTime(
                        formatString: "MM/DD ddd HH:MM"
                        locale: "zh-cn"
                    )
                    location
                }
            }
        }
    }
`
