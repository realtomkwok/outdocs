import React from "react"
import tw, { TwComponent } from "twin.macro"
import { graphql } from "gatsby"
import { FluidObject } from "gatsby-image"

import Layout from "components/Layout"
import Header from "components/Header"
import { Heading2, Body, Heading4 } from "utils/typography"
import { OutlinedBtn } from "components/Buttons"
import { HeroImage, FotCard, PersonCard3Cols } from "components/Cards"

import copy from "content/Copy-Carnival.yaml"

type DataProps = {
    data: {
        Guests: {
            group: {
                nodes: GuestProps[]
            }[]
        }
        FeaturedFilm: {
            group: FFProps[]
        }
    }
}

type GuestProps = {
    contenfulid: number
    name: string
    titles: string
    avatar: {
        fluid: FluidObject
        description: string
    }
}

type FFProps = {
    nodes: {
        filmTitle: string
        filmInfo: string[]
        detailPage: string
        filmHeroImage: {
            fluid: FluidObject
            description: string
        }
    }[]
}

function Intro() {
    const Container: TwComponent<"div"> = tw.div`py-16 col-span-6 space-y-8`
    const BtnWrapper: TwComponent<"div"> = tw.div`flex flex-row space-x-4`

    return (
        <Container>
            <Heading4>{copy.date}</Heading4>
            <Heading2>{copy.slogan.zhHans}</Heading2>
            <Body>{copy.body.zhHans}</Body>
            <BtnWrapper>
                {copy.buttons.map(
                    (
                        item: { zhHans: string; enUS: string; to: string },
                        i: number
                    ) => (
                        <OutlinedBtn
                            btnText={item.zhHans}
                            styles={undefined}
                            to={item.to}
                            key={i}
                        />
                    )
                )}
            </BtnWrapper>
        </Container>
    )
}

function Guests(props: { data: GuestProps[] }) {
    const Container = tw.section`space-y-8`
    const CardWrapper = tw.div`grid grid-cols-4 gap-10`

    return (
        <Container>
            <Heading4>有玩嘉宾</Heading4>
            {props.data.map((item, i) => (
                <CardWrapper key={i}>
                    <PersonCard3Cols
                        imgSrc={item.avatar.fluid}
                        imgAlt={item.avatar.description}
                        name={item.name}
                        titles={item.titles}
                    />
                </CardWrapper>
            ))}
        </Container>
    )
}

function FeaturedFilm(props: { data: FFProps[] }) {
    const Container = tw.section`w-full h-auto relative`

    const selectedFilm: number = Math.floor(
        Math.random() * Math.floor(props.data[1].nodes.length)
    )
    const img: { fluid: FluidObject; description: string } =
        props.data[1].nodes[selectedFilm].filmHeroImage

    const info: { filmTitle: string; filmInfo: string[]; detailPage: string } =
        props.data[1].nodes[selectedFilm]
    const engTitle: string = props.data[0].nodes[selectedFilm].filmTitle

    return (
        <Container>
            <HeroImage imgSrc={img.fluid} imgAlt={img.description} />
            <FotCard
                chnTitle={info.filmTitle}
                engTitle={engTitle}
                detailPage={info.detailPage}
                info={info.filmInfo}
            />
        </Container>
    )
}

export default function Index({ data }: DataProps) {
    const Main: TwComponent<"main"> = tw.main`container mx-auto grid grid-cols-12 gap-10`

    const guestData: GuestProps[] = data.Guests.group[1].nodes
    const filmData: FFProps[] = data.FeaturedFilm.group

    return (
        <Layout hasPadding={false} isTop={false} title="嘉年华">
            <div tw="p-16">
                <Header category="carnival" titleId={2} />
                <Main>
                    <Intro />
                </Main>
                <Guests data={guestData} />
            </div>
            <FeaturedFilm data={filmData} />
        </Layout>
    )
}

export const query = graphql`
    {
        Guests: allContentfulEventsGuests {
            group(field: node_locale) {
                nodes {
                    contentfulid
                    name
                    avatar {
                        fluid(quality: 100) {
                            ...GatsbyContentfulFluid_withWebp
                        }
                        description
                    }
                    titles
                }
            }
        }
        FeaturedFilm: allContentfulLibraryFilm(
            sort: { fields: contentfulid, order: ASC }
            filter: {
                yearOfCompetition: {} # 🚩 requires year setting
                screening: { id: {} }
                hasScreening: { eq: true }
            }
        ) {
            group(field: node_locale) {
                nodes {
                    filmTitle
                    filmInfo
                    detailPage
                    filmHeroImage {
                        fluid(quality: 100) {
                            ...GatsbyContentfulFluid_withWebp
                        }
                        description
                    }
                    contentfulid
                }
            }
        }
    }
`
