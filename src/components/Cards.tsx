import React from "react"
import tw, { styled, TwComponent } from "twin.macro"
import Img, { FluidObject } from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

import Tag from "./Tags"
import {
    Heading4,
    Subheading1,
    Subheading2,
    Body
} from "../utils/typography"
import { TextBtn } from "../components/Buttons"
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
    info: string[]
}

type EventProps = {
    detailPage: string
    tag: string
    title: string
    subtitle: string
    dateAndTime: Date
    location: string
    imgSrc: FluidObject
    imgAlt: string
}

function HeroImage(props: Pick<IndexHeroProps, "imgSrc" | "imgAlt">) {
    const Grid: TwComponent<"div"> = styled.div`
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(12, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        max-height: 800px;
    `
    const gridAreaSettings: Array<string> = []
    for (let i: number = 13; i > 9; i--) {
        gridAreaSettings.push(`1/1/${i}/${i}`)
    }

    return (
        <Grid>
            {gridAreaSettings.map((item, i) => (
                <Img
                    fluid={props.imgSrc}
                    alt={props.imgAlt}
                    style={{
                        gridArea: `${item}`,
                    }}
                    key={i}
                />
            ))}
        </Grid>
    )
}

function IndexHeroCard(props: Omit<IndexHeroProps, "imgSrc" | "imgAlt">) {
    const CardContainer: TwComponent<"div"> = tw.div`container mx-auto p-16 absolute bottom-0 left-0 right-0 grid grid-cols-12 gap-10`
    const Card: TwComponent<"div"> = tw.div`flex flex-col p-8 bg-white col-span-4 space-y-4`

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
    const Card: TwComponent<"div"> = tw.div`flex flex-col p-8 bg-white col-span-4 space-y-4`
    const Titles: TwComponent<"div"> = tw.div``
    const info: string = props.info.join(" | ")

    return (
        <CardContainer>
            <Card>
                <Tag tagStyle="primary">Film Of Today</Tag>
                <Titles>
                    <Heading4>{props.chnTitle}</Heading4>
                    <Heading4>{props.engTitle}</Heading4>
                </Titles>
                <Subheading1>{info}</Subheading1>
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

function SessionCard(props: EventProps) {
    const Container: TwComponent<"div"> = tw.div`flex flex-col bg-white space-y-8`
    const InfoWrapper: TwComponent<"div"> = tw.div`mt-4`
    const DateAndLocation: TwComponent<"div"> = tw.div`mt-4`

    return (
        <Link to={props.detailPage}>
            <Container>
                <BackgroundImage
                    fluid={props.imgSrc}
                    tw="h-64 bg-center bg-cover"
                />
                <InfoWrapper>
                    {props.tag !== null ? (
                        <Tag tagStyle="secondary">{props.tag}</Tag>
                    ) : null}
                    <Heading4>{props.title}</Heading4>
                    <Body>{props.subtitle}</Body>
                    <DateAndLocation>
                        <Subheading2>{props.dateAndTime}</Subheading2>
                        <Subheading2>{props.location}</Subheading2>
                    </DateAndLocation>
                </InfoWrapper>
            </Container>
        </Link>
    )
}

export { HeroImage, IndexHeroCard, NewsCard, NewsStrip, FotCard, SessionCard }
