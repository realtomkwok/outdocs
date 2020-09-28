import React from "react"
import tw, { styled } from "twin.macro"

import { BrandName } from "assets/Logo"
import SocialNetworks from "components/SocialNetworks"
import SponsorLogos from "components/SponsorLogos"
import { Body } from "utils/typography"

type FooterProps = {
    isDark: boolean
}

const defaultProps: FooterProps = {
    isDark: false,
}

function Footnote() {
    const tomsWebsite: string = "//realtomkwok.github.io/portfolio"

    return (
        <Body>
            ©2020 OUTDOCS. Site by <a href={tomsWebsite}>Tom Kwok.</a>
        </Body>
    )
}

function Footer(props: FooterProps) {
    const Container = tw.footer`container mx-auto w-full p-16 bottom-0 grid grid-rows-2 gap-20`
    const Row = styled.div<{ itemsStart: boolean }>`
        ${tw`flex justify-between h-24 `} ${({ itemsStart }) =>
            itemsStart ? tw`items-start` : tw`items-end`}
    `
    const Logo = tw.div`h-20`

    return (
        <Container>
            <Row itemsStart={true}>
                <Logo>
                    <BrandName isWhite={props.isDark} />
                </Logo>
                {/* <SNSLinks /> */}
                <SocialNetworks isWhite={props.isDark} />
            </Row>
            <Row itemsStart={false}>
                <SponsorLogos />
                <Footnote />
            </Row>
        </Container>
    )
}

Footer.defaultProps = defaultProps
export default Footer
