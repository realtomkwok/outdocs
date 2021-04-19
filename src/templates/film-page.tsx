import React from "react"
import tw from "twin.macro"
import { graphql } from "gatsby"
import SVG from "react-inlinesvg"
import { IGatsbyImageData, StaticImage } from "gatsby-plugin-image"

import Layout from "components/Layout"
import {
    Heading2,
    Heading4,
    Subheading2,
    Body,
    Subheading1,
} from "utils/typography"
import { FilmCard, HeroImage, PersonCard } from "components/Cards"
import Tag from "components/Tags"
import { OutlinedBtn } from "components/Buttons"
import { Parallax } from "react-scroll-parallax"

type DataProps = {
    data: {
        strapiFilm: FilmProps
        allStrapiFilm: {
            nodes: Pick<
                FilmProps,
                "title" | "info" | "detailPageUrl" | "heroImage" | "directors"
            >[]
        }
    }
}

type FilmProps = {
    filmId: string
    detailPageUrl: string
    title: string
    title_eng: string
    award: {
        url: string
        caption: string
    }[]
    heroImage: {
        childImageSharp: ImgProps
    }
    screnning?: ScreeningProps
    info: string
    synopsis: string
    directors: DirectorsProps[]
    filmStills: {
        url: string
        width: number
        height: number
    }[]
}

type ImgProps = {
    gatsbyImageData: IGatsbyImageData
}

type ScreeningProps = {
    category: string
    date: Date
    screeningUnit: string
    locationOffline: string
}

type DirectorsProps = {
    name: string
    name_eng: string
    bio: string
    avatar: {
        childImageSharp: ImgProps
    }
}

function Screening(props: { data: ScreeningProps | null }) {
    const Container = tw.div`col-span-1 space-y-4`

    if (props.data) {
        return (
            <Container>
                <Tag tagStyle="primary" isWhite>
                    展映信息
                </Tag>
                <div>
                    <Subheading1>{props.data.screeningUnit}</Subheading1>
                    <Subheading2>{props.data.date}</Subheading2>
                    <Subheading2>{props.data.locationOffline}</Subheading2>
                </div>
                {/* {props.data.ticketUrl && (
                    <OutlinedBtn
                        to={props.data.ticketUrl}
                        btnText="线下购票"
                        isWhite
                    />
                )}
                {props.data.onlineUrl && (
                    <OutlinedBtn
                        to={props.data.onlineUrl}
                        btnText="在线观影"
                        isWhite
                    />
                )} */}
            </Container>
        )
    } else {
        return null
    }
}

function InfoSection(props: { tagText: string; children: React.ReactNode }) {
    const Container = tw.div`space-y-4`

    return (
        <Container>
            <Tag tagStyle="primary" isWhite>
                {props.tagText}
            </Tag>
            {props.children}
        </Container>
    )
}

export default function FilmDetail({ data }: DataProps) {
    const Header = tw.header`container mx-auto space-y-8 sm:px-8 lg:px-16 relative`
    const AwardsWrapper = tw.div`flex flex-row justify-end space-x-10`
    const Award = tw.div`sm:h-12 md:h-20`
    const TitleXL = tw.div`sm:hidden md:block md:w-2/3 lg:w-1/2 pb-16`
    const TitleSM = tw.div`sm:block  md:hidden pb-8`
    const HeroContainer = tw.div`w-full h-auto relative`
    const Main = tw.div`container mx-auto sm:p-8 sm:space-y-16 lg:space-y-0 lg:p-16 grid lg:grid-cols-3 bg-black`
    const Content = tw.div`lg:col-start-2 lg:col-end-4 space-y-16`
    const Directors = tw.div`flex flex-col space-y-8`
    const PhotosXL = tw.div`sm:hidden md:block p-16 w-screen flex flex-row flex-wrap justify-between content-center`
    const PhotoSM = tw.div`sm:block md:hidden w-screen`
    const OthersList = tw.div`container mx-auto sm:my-16 sm:px-8 lg:p-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10 bg-black`

    const thisFilm: FilmProps = data.strapiFilm

    const allOtherFilms = data.allStrapiFilm.nodes

    // 📖 ❓ A solution by usign Fisher-Yates shuffle algorithm: https://segmentfault.com/q/1010000006819233/a-1020000006822187 | https://segmentfault.com/q/1010000007449441
    const selectedFilms = allOtherFilms
        .map((n, i, all) => {
            const j = i + Math.floor(Math.random() * (all.length - i))
            const v = all[j]
            all[j] = n
            return v
        })
        .slice(0, 3)

    return (
        <Layout title={thisFilm.title} isDark>
            <Header>
                <AwardsWrapper>
                    {thisFilm.award &&
                        thisFilm.award.map((item, i) => (
                            <Award key={i}>
                                <SVG
                                    src={item.url}
                                    css={tw`h-full fill-white`}
                                    description={item.caption}
                                ></SVG>
                            </Award>
                        ))}
                </AwardsWrapper>
                <TitleXL>
                    <Heading2>{thisFilm.title}</Heading2>
                    <Heading2>{thisFilm.title_eng}</Heading2>
                </TitleXL>
                <TitleSM>
                    <Heading4 styles={tw`font-black`}>
                        {thisFilm.title}
                    </Heading4>
                    <Heading4 styles={tw`font-black`}>
                        {thisFilm.title_eng}
                    </Heading4>
                </TitleSM>
            </Header>
            <HeroContainer>
                <HeroImage
                    imgSrc={thisFilm.heroImage.childImageSharp.gatsbyImageData}
                    imgAlt={thisFilm.title}
                />
            </HeroContainer>
            <Parallax y={[0, -30]}>
                <Main>
                    <Screening data={thisFilm.screnning} />
                    <Content>
                        <InfoSection tagText="影片资讯">
                            <Body>{thisFilm.info}</Body>
                        </InfoSection>
                        <InfoSection tagText="简介">
                            <Body>{thisFilm.synopsis}</Body>
                        </InfoSection>
                        <InfoSection tagText="导演">
                            <Directors>
                                {thisFilm.directors.map((item, i) => (
                                    <PersonCard
                                        size="small"
                                        imgSrc={
                                            item.avatar.childImageSharp
                                                .gatsbyImageData
                                        }
                                        imgAlt={item.name}
                                        name={item.name}
                                        description={item.bio}
                                        key={i}
                                    />
                                ))}
                            </Directors>
                        </InfoSection>
                    </Content>
                </Main>
            </Parallax>
            <PhotosXL>
                {thisFilm.filmStills.map((item, i) => {
                    const aspectRatio = item.width / item.height
                    return (
                        <Parallax
                            y={[-30, 20]}
                            styleOuter={
                                aspectRatio >= 1
                                    ? {
                                          margin: "10% auto 10%",
                                          width: "65%",
                                      }
                                    : {
                                          margin: "10% 40% 10%",
                                          width: "45%",
                                      }
                            }
                            key={i}
                        >
                            <StaticImage src={item.url} alt="" />
                        </Parallax>
                    )
                })}
            </PhotosXL>
            <PhotoSM>
                <Parallax y={[-20, -5]}>
                    {thisFilm.filmStills.map((item, i) => (
                        <StaticImage src={item.url} alt="" key={i} />
                    ))}
                </Parallax>
            </PhotoSM>
            <Parallax y={[0, 5]}>
                <OthersList>
                    {selectedFilms.map((item, i) => (
                        <FilmCard
                            imgSrc={item.heroImage.childImageSharp.gatsbyImageData}
                            imgAlt={item.title}
                            filmTitle={item.title}
                            filmInfo={item.info}
                            detailPage={item.detailPageUrl}
                            director={item.directors}
                            key={i}
                        />
                    ))}
                </OthersList>
            </Parallax>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        strapiFilm(detailPageUrl: { eq: $slug }) {
            filmId
            detailPageUrl
            title
            title_eng
            award {
                url
                caption
            }
            heroImage {
                childImageSharp {
                    gatsbyImageData(formats: WEBP)
                }
            }
            screening {
                category
                date(formatString: "MM/DD ddd HH:mm", locale: "zh-cn")
                screeningUnit
                locationOffline
            }
            info
            synopsis
            directors {
                name
                name_eng
                bio
                avatar {
                    childImageSharp {
                        gatsbyImageData(formats: WEBP)
                    }
                }
            }
            filmStills {
                url
                width
                height
            }
        }
        allStrapiFilm(filter: { detailPageUrl: { ne: $slug } }) {
            nodes {
                title
                info
                detailPageUrl
                heroImage {
                    childImageSharp {
                        gatsbyImageData(formats: WEBP)
                    }
                }
                directors {
                    name
                }
            }
        }
    }
`
