import React from "react"
import tw, { styled } from "twin.macro"
import Img, { FluidObject } from "gatsby-image"
import { TagStyle02 } from "./Tags"
import { Heading4, Subheading1 } from "../utils/typography"

type CardProps = {
    imgSrc: FluidObject
    imgAlt: string
    tag: string
    tagLinkedPage: string
    headline: string
    subheadline: string
}

function NewsCard(props: CardProps) {
    const Container = tw.div`flex flex-col space-y-8`
    const InfoWrapper = tw.div`space-y-2`

    return (
        <Container>
            <Img fluid={props.imgSrc} alt={props.imgAlt} />
            <InfoWrapper>
                <TagStyle02 to={props.tagLinkedPage}>{props.tag}</TagStyle02>
                <Heading4>{props.headline}</Heading4>
                <Subheading1>{props.subheadline}</Subheading1>
            </InfoWrapper>
        </Container>
    )
}

export { NewsCard }
