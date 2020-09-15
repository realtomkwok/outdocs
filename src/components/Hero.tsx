import React from "react"
import Img, { FluidObject } from "gatsby-image"
import tw, { styled } from "twin.macro"

import { Heading4 } from "../utils/typography"
import { TextBtn } from "../components/Buttons"
import Tag from "../components/Tags"

type HeroType = {
    imgSrc: FluidObject
    imgAlt: string
    cardTag: string
    cardHeadline: string
    cardBtnText: string
    cardLinkedPage: string
}

function HeroImage(props: Pick<HeroType, "imgSrc" | "imgAlt">) {
    const Grid = styled.div`
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
                    style={{ gridArea: `${item}` }}
                    key={i}
                />
            ))}
        </Grid>
    )
}

function HeroCard(props: Omit<HeroType, "imgSrc" | "imgAlt">) {
    const CardContainer = tw.div`container mx-auto p-16 absolute bottom-0 left-0 right-0 grid grid-cols-12 gap-10`
    const Card = tw.div`flex flex-col p-8 bg-white col-span-4 space-y-4`

    return (
        <CardContainer>
            <Card>
                <Tag tagStyle="primary">{props.cardTag}</Tag>
                <Heading4>{props.cardHeadline}</Heading4>
                <TextBtn
                    to={props.cardLinkedPage}
                    activeClassName={undefined}
                    partiallyActive={undefined}
                    btnText={props.cardBtnText}
                    isActive
                />
            </Card>
        </CardContainer>
    )
}

export default function Hero(props: HeroType) {
    const Container = tw.div`w-full h-auto bg-gray-300 relative`

    return (
        <Container>
            {/* 🐛 fix the maxHeight bug of 'Gatsby-image': https://github.com/gatsbyjs/gatsby/issues/15167#issuecomment-517995500 */}
            {/* 📖 Grid stack: https://css-tricks.com/how-to-stack-elements-in-css/ */}
            {/* 📖 CSS Grid Generator https://cssgrid-generator.netlify.app/ */}
            <HeroImage imgSrc={props.imgSrc} imgAlt={props.imgAlt} />
            <HeroCard
                cardTag={props.cardTag}
                cardHeadline={props.cardHeadline}
                cardLinkedPage={props.cardLinkedPage}
                cardBtnText={props.cardBtnText}
            />
        </Container>
    )
}
