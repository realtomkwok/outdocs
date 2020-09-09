import React from "react"
import tw, { styled } from "twin.macro"

import logo from "../img/logo/outdocs-brand-name.svg"
import SNSLinks from "../components/SNSLinks"
import SponsorLogos from "../components/SponsorLogos"

function Footnote() {
    const Text = tw.p``
    const tomsWebsite: string = "//realtomkwok.github.io/portfolio"

    return (
        <Text>
            ©2020 OUTDOCS. Site by <a href={tomsWebsite}>Tom Kwok.</a>{" "}
        </Text>
    )
}

export default function Footer() {
    const Container = tw.footer`container mx-auto w-full p-16 bottom-0 grid grid-rows-2 gap-20`
    const Row = styled.div<{ itemsStart: boolean }>`
        ${tw`flex justify-between h-24 `} ${({ itemsStart }) =>
            itemsStart ? tw`items-start` : tw`items-end`}
    `
    const Logo = tw.img`h-20`

    return (
        <Container>
            <Row itemsStart={true}>
                <Logo src={logo} />
                <SNSLinks />
            </Row>
            <Row itemsStart={false}>
                <SponsorLogos />
                <Footnote />
            </Row>
        </Container>
    )
}
