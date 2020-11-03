import React from "react"
import tw from "twin.macro"
import { graphql } from "gatsby"
import SVG from "react-inlinesvg"
import Img, { FluidObject } from "gatsby-image"

import Layout from "components/Layout"
import { Heading2, Heading4, Subheading2, Body } from "utils/typography"
import { FilmCard, HeroImage, PersonCard } from "components/Cards"
import Tag from "components/Tags"
import { OutlinedBtn } from "components/Buttons"
import { Parallax } from "react-scroll-parallax"

type DataProps = {
    data: {
        contentfulLibraryFilm: FilmProps
        allContentfulLibraryFilm: {
            group: {
                nodes: Pick<
                    FilmProps,
                    | "filmTitle"
                    | "filmInfo"
                    | "filmHeroImage"
                    | "detailPage"
                    | "director"
                >[]
            }[]
        }
    }
}

type ImgTypes = {
    title: string
    image: {
        fluid: FluidObject
    }
}

type FilmProps = {
    detailPage: string
    filmTitle: string
    filmAward: {
        title: string
        file: {
            url: string
        }
    }[]
    filmHeroImage: ImgTypes
    screening: ScreeningProps
    filmInfo: string[]
    filmSynopsis: {
        filmSynopsis: string
    }
    director: {
        name: string
        info?: {
            info: string
        }
        photo?: ImgTypes
    }[]
    filmPhotos: ImgTypes[]
}

type ScreeningProps = {
    dateAndTime: Date
    location: string
    onlineUrl: string
    ticketUrl: string
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
                    <Subheading2>{props.data.dateAndTime}</Subheading2>
                    <Subheading2>{props.data.location}</Subheading2>
                </div>
                {props.data.ticketUrl && (
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
                )}
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

    const thisFilm: FilmProps = data.contentfulLibraryFilm
    const engTitle: string[] = data.allContentfulLibraryFilm.group[0].nodes
        .filter(el => el.detailPage === thisFilm.detailPage)
        .map(obj => obj.filmTitle)

    const allOtherFilms = data.allContentfulLibraryFilm.group[1].nodes.filter(
        el => el.detailPage !== thisFilm.detailPage
    )

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
        <Layout title={thisFilm.filmTitle} isDark>
            <Header>
                <AwardsWrapper>
                    {thisFilm.filmAward &&
                        thisFilm.filmAward.map((item, i) => (
                            <Award key={i}>
                                <SVG
                                    src={item.file.url}
                                    css={tw`h-full fill-white`}
                                    title={item.title}
                                    description={item.title}
                                ></SVG>
                            </Award>
                        ))}
                </AwardsWrapper>
                <TitleXL>
                    <Heading2>{thisFilm.filmTitle}</Heading2>
                    <Heading2>{engTitle}</Heading2>
                </TitleXL>
                <TitleSM>
                    <Heading4 styles={tw`font-black`}>
                        {thisFilm.filmTitle}
                    </Heading4>
                    <Heading4 styles={tw`font-black`}>{engTitle}</Heading4>
                </TitleSM>
            </Header>
            <HeroContainer>
                <HeroImage
                    imgSrc={thisFilm.filmHeroImage.image.fluid}
                    imgAlt={thisFilm.filmHeroImage.title}
                />
            </HeroContainer>
            <Parallax y={[0, -30]}>
                <Main>
                    <Screening data={thisFilm.screening} />
                    <Content>
                        <InfoSection tagText="影片资讯">
                            <Body>{thisFilm.filmInfo.join(" | ")}</Body>
                        </InfoSection>
                        <InfoSection tagText="简介">
                            <Body>{thisFilm.filmSynopsis.filmSynopsis}</Body>
                        </InfoSection>
                        <InfoSection tagText="导演">
                            <Directors>
                                {thisFilm.director.map((item, i) => (
                                    <PersonCard
                                        size="small"
                                        imgFluid={item.photo.image.fluid}
                                        imgAlt={item.photo.title}
                                        name={item.name}
                                        description={item.info.info}
                                        key={i}
                                    />
                                ))}
                            </Directors>
                        </InfoSection>
                    </Content>
                </Main>
            </Parallax>
            <PhotosXL>
                {thisFilm.filmPhotos.map((item, i) => (
                    <Parallax
                        y={[-30, 20]}
                        styleOuter={
                            item.image.fluid.aspectRatio >= 1
                                ? { margin: "10% auto 10%", width: "65%" }
                                : { margin: "10% 40% 10%", width: "45%" }
                        }
                        key={i}
                    >
                        <Img fluid={item.image.fluid} alt={item.title} />
                    </Parallax>
                ))}
            </PhotosXL>
            <PhotoSM>
                <Parallax y={[-20, -5]}>
                    {thisFilm.filmPhotos.map((item, i) => (
                        <Img
                            fluid={item.image.fluid}
                            alt={item.title}
                            key={i}
                        />
                    ))}
                </Parallax>
            </PhotoSM>
            <Parallax y={[0, 5]}>
                <OthersList>
                    {selectedFilms.map((item, i) => (
                        <FilmCard
                            imgSrc={item.filmHeroImage.image.fluid}
                            imgAlt={item.filmHeroImage.title}
                            filmTitle={item.filmTitle}
                            filmInfo={item.filmInfo}
                            detailPage={item.detailPage}
                            director={item.director}
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
        contentfulLibraryFilm(
            node_locale: { eq: "zh-Hans" }
            detailPage: { eq: $slug }
        ) {
            detailPage
            filmTitle
            filmAward {
                title
                file {
                    url
                }
            }
            filmHeroImage {
                image {
                    fluid(quality: 100) {
                        ...GatsbyContentfulFluid_withWebp
                    }
                    description
                }
            }
            screening {
                dateAndTime(formatString: "MM/DD ddd HH:mm", locale: "zh-cn")
                category
                location
                onlineLocation
                ticketsUrl
                onlineUrl
            }
            filmInfo
            filmSynopsis {
                filmSynopsis
            }
            director {
                name
                info {
                    info
                }
                photo {
                    title
                    image {
                        fluid(quality: 100) {
                            ...GatsbyContentfulFluid_withWebp
                        }
                    }
                }
            }
            filmPhotos {
                title
                image {
                    fluid(quality: 100) {
                        aspectRatio
                        ...GatsbyContentfulFluid_withWebp
                    }
                }
            }
        }
        allContentfulLibraryFilm(filter: { detailPage: { ne: null } }) {
            group(field: node_locale) {
                nodes {
                    filmTitle
                    filmInfo
                    detailPage
                    filmHeroImage {
                        image {
                            fluid {
                                ...GatsbyContentfulFluid_withWebp
                            }
                            description
                        }
                    }
                    director {
                        name
                    }
                }
            }
        }
    }
`
