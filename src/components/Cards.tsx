import React from "react"
import tw, { styled, TwComponent, css } from "twin.macro"
import Img, { FixedObject, FluidObject } from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import { SerializedStyles } from "@emotion/core"

import Tag from "./Tags"
import {
    Heading4,
    Subheading1,
    Subheading2,
    Body,
    Tag as TagText,
    Tag2,
} from "../utils/typography"
import { OutlinedBtn, TextBtn } from "../components/Buttons"
import Link from "../utils/Link"

type NewsProps = {
    imgSrc: FluidObject
    imgAlt: string
    tag: string
    // tagLinkedPage: string
    headline: string
    subheadline: string
    linkedWeChatArticle: string
}

type IndexHeroProps = {
    imgSrc: FluidObject
    imgAlt: string
    tag: string
    headline: string
    btnText: string
    btnLinkedPage: string
}

type FotProps = {
    chnTitle: string
    engTitle: string
    detailPage: string
    info: string[]
}

type EventProps = {
    detailPage: string
    tag: string
    title: string
    subtitle?: string
    dateAndTime: Date | string
    location: string
    imgSrc: FluidObject
    imgAlt: string
    hasButton?: boolean
    btnText?: string
    btnTo?: string
}

type FilmProps = {
    // category: string
    // year: string
    imgSrc: FluidObject
    imgAlt: string
    filmTitle: string
    director: {
        name: string
    }[]
    filmInfo: string[]
    detailPage: string
}

type PersonProps = {
    size: "large" | "small"
    imgFluid?: FluidObject
    imgFixed?: FixedObject
    imgAlt: string
    name: string
    titles?: string
    description: string
    detailPage?: string
}

type FSProps = {
    filmImgSrc: FluidObject
    filmImgAlt: string
    filmTitle: string
    filmInfo: string[]
    filmDeatail: string
    dnt: Date
    location: string
    btnText: string
    btnTo: string
}

function HeroImage(props: Pick<IndexHeroProps, "imgSrc" | "imgAlt">) {
    const Grid: TwComponent<"div"> = styled.div`
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(12, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        height: 80vh;
        max-height: 800px;
    `
    const gridAreaSettings: Array<string> = []
    for (let i: number = 13; i > 9; i--) {
        gridAreaSettings.push(`1/1/${i}/${i}`)
    }

    return (
        <Grid>
            {gridAreaSettings.map((item, i) => (
                <BackgroundImage
                    fluid={props.imgSrc}
                    alt={props.imgAlt}
                    style={{ gridArea: `${item}`, height: "100%" }}
                    key={i}
                />
            ))}
        </Grid>
    )
}

function IndexHeroCard(props: Omit<IndexHeroProps, "imgSrc" | "imgAlt">) {
    const CardContainer: TwComponent<"div"> = tw.div`container mx-auto p-16 absolute bottom-0 left-0 right-0 grid grid-cols-12 gap-10`
    const Card: TwComponent<"div"> = tw.div`flex flex-col p-8 bg-white shadow-2xl col-span-4 space-y-4`

    return (
        <CardContainer>
            <Card>
                <Tag tagStyle="primary">{props.tag}</Tag>
                <Heading4>{props.headline}</Heading4>
                <TextBtn
                    to={props.btnLinkedPage}
                    activeClassName={undefined}
                    partiallyActive={undefined}
                    btnText={props.btnText}
                    isActive
                />
            </Card>
        </CardContainer>
    )
}

function FotCard(props: FotProps) {
    const CardContainer: TwComponent<"div"> = tw.div`container mx-auto p-16 absolute bottom-0 left-0 right-0 grid grid-cols-12 gap-10`
    const Card: TwComponent<"div"> = tw.div`flex flex-col p-8 bg-white shadow-2xl col-span-4`
    const Titles: TwComponent<"div"> = tw.div``

    return (
        <CardContainer>
            <Card>
                <Link to={props.detailPage}>
                    <div tw="space-y-4">
                        <Tag tagStyle="primary">Film Of Today</Tag>
                        <Titles>
                            <Heading4>{props.chnTitle}</Heading4>
                            <Heading4>{props.engTitle}</Heading4>
                        </Titles>
                        <Subheading1>{props.info.join(" | ")}</Subheading1>
                    </div>
                </Link>
            </Card>
        </CardContainer>
    )
}

function NewsCard(props: NewsProps) {
    const Container: TwComponent<"div"> = tw.div`flex flex-col space-y-8`
    const InfoWrapper: TwComponent<"div"> = tw.div`mt-4`

    return (
        <Container>
            <Img fluid={props.imgSrc} alt={props.imgAlt} />
            <div>
                <Tag tagStyle="primary">{props.tag}</Tag>
                <Link to={props.linkedWeChatArticle}>
                    <InfoWrapper>
                        <Heading4>{props.headline}</Heading4>
                        <Subheading1>{props.subheadline}</Subheading1>
                    </InfoWrapper>
                </Link>
            </div>
        </Container>
    )
}

function NewsStrip(props: Omit<NewsProps, "imgSrc" | "imgAlt">) {
    const Container: TwComponent<"div"> = tw.div`flex flex-col` //border-black border-b-2
    const InfoWrapper: TwComponent<"div"> = tw.div`mt-4`

    return (
        <Container>
            <Tag tagStyle="primary">{props.tag}</Tag>
            <Link to={props.linkedWeChatArticle}>
                <InfoWrapper>
                    <Heading4>{props.headline}</Heading4>
                    <Subheading1>{props.subheadline}</Subheading1>
                </InfoWrapper>
            </Link>
        </Container>
    )
}

function EventCard(props: EventProps) {
    const Container: TwComponent<"div"> = tw.div`flex flex-col bg-white space-y-8`
    const InfoWrapper: TwComponent<"div"> = tw.div`mt-4`
    const Actions = tw.div`flex flex-wrap justify-between items-center`
    const DateAndLocation: TwComponent<"div"> = tw.div`mt-4`

    return (
        <Container>
            <Link to={props.detailPage}>
                <BackgroundImage
                    fluid={props.imgSrc}
                    tw="h-64 bg-center bg-cover"
                />
            </Link>

            <InfoWrapper>
                {props.tag !== null ? (
                    <Tag tagStyle="secondary">{props.tag}</Tag>
                ) : null}
                <Link to={props.detailPage} tw="space-y-4">
                    <Heading4>{props.title}</Heading4>
                    <Tag2>{props.subtitle}</Tag2>
                </Link>
                <Actions>
                    <DateAndLocation>
                        <Subheading2>{props.dateAndTime}</Subheading2>
                        <Subheading2>{props.location}</Subheading2>
                    </DateAndLocation>
                    {props.hasButton ? (
                        <OutlinedBtn btnText={props.btnText} to={props.btnTo} />
                    ) : null}
                </Actions>
            </InfoWrapper>
        </Container>
    )
}

function FilmCard(props: FilmProps) {
    const Container: TwComponent<"div"> = tw.div`flex flex-col space-y-8`
    const InfoWrapper: TwComponent<"div"> = tw.div`mt-4 space-y-2`

    let director: string
    if (props.director.length > 1) {
        let directors: string[] = []
        props.director.map(item => directors.push(item.name))
        director = directors.join("/")
    } else {
        director = props.director[0].name
    }

    return (
        <Link to={`..${props.detailPage}`}>
            <Container>
                <BackgroundImage
                    fluid={props.imgSrc}
                    tw="h-64 bg-center bg-cover"
                />
                <InfoWrapper>
                    <Heading4>{props.filmTitle}</Heading4>
                    <Subheading1>{director}</Subheading1>
                    <TagText>{props.filmInfo.slice(0, 3).join(" | ")}</TagText>
                </InfoWrapper>
            </Container>
        </Link>
    )
}

function PersonCard(props: PersonProps) {
    let Container: TwComponent<"div">,
        InfoWrapper: TwComponent<"div">,
        imgStyles: SerializedStyles

    if (props.size === "large") {
        Container = tw.div`flex flex-col bg-white space-y-8`
        InfoWrapper = tw.div`mt-4 space-y-2`
        imgStyles = css`
            ${tw`bg-center bg-cover`};
            height: 24rem;
        `
    } else if (props.size === "small") {
        Container = tw.div`flex flex-row space-x-8`
        InfoWrapper = tw.div` space-y-2`
        imgStyles = css`
            ${tw`w-40 h-40 flex-shrink-0`};
        `
    }

    return (
        <Link to={props.detailPage}>
            <Container>
                <BackgroundImage
                    fixed={props.imgFixed}
                    fluid={props.imgFluid}
                    alt={props.imgAlt}
                    css={imgStyles}
                />
                <InfoWrapper>
                    <Heading4>{props.name}</Heading4>
                    <Subheading1>{props.titles}</Subheading1>
                    <Body>{props.description}</Body>
                </InfoWrapper>
            </Container>
        </Link>
    )
}

function FilmScheduleCard(props: FSProps) {
    const Container = styled.div`
        ${tw`flex w-1/2`};
        margin-left: 50%;
    `
    const InfoWrapper = styled.div`
        ${tw`flex-1 grid grid-cols-3 space-x-8 justify-between`}
    `
    const MediaWrapper = styled.div`
        ${tw`absolute left-0 w-1/2 px-16 opacity-0 invisible transition duration-150`};
        height: 30%;
        ${Container}:hover & {
            ${tw`opacity-100 visible`}
        }
    `
    const FilmInfo = tw.div`col-span-2`
    const ScreeningInfo = tw.div``
    const ButtonsWrapper = tw.div`flex flex-row`

    return (
        <Container>
            <MediaWrapper>
                <BackgroundImage
                    fluid={props.filmImgSrc}
                    alt={props.filmImgAlt}
                    css={[
                        tw`bg-center bg-cover`,
                        css`
                            height: 100%;
                        `,
                    ]}
                />
            </MediaWrapper>
            <InfoWrapper>
                <FilmInfo>
                    <Link to={`..${props.filmDeatail}`}>
                        <div tw="space-y-2">
                            <Heading4>{props.filmTitle}</Heading4>
                            <Tag2>{props.filmInfo.join(" | ")}</Tag2>
                        </div>
                    </Link>
                </FilmInfo>
                <div tw="space-y-2">
                    <ScreeningInfo>
                        <Subheading2>{props.dnt}</Subheading2>
                        <Subheading2>{props.location}</Subheading2>
                    </ScreeningInfo>
                    <ButtonsWrapper>
                        <OutlinedBtn
                            to={props.btnTo}
                            btnText={props.btnText}
                        ></OutlinedBtn>
                    </ButtonsWrapper>
                </div>
            </InfoWrapper>
        </Container>
    )
}

export {
    HeroImage,
    IndexHeroCard,
    NewsCard,
    NewsStrip,
    FotCard,
    EventCard,
    FilmCard,
    PersonCard,
    FilmScheduleCard,
}
