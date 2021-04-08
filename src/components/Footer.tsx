import React from "react"
import tw, { styled } from "twin.macro"

import { BrandName } from "assets/Logo"
import SocialNetworks from "components/SocialNetworks"
import SponsorLogos from "components/SponsorLogos"
import { Tag2 } from "utils/typography"

type FooterProps = {
    isDark: boolean
}

const defaultProps: FooterProps = {
    isDark: false,
}

function Footnote() {
    const tomsWebsite: string = "//realtomkwok.github.io/portfolio"

    return (
        <>
            <Tag2>
                ©2020 OUTDOCS. <br tw="md:hidden" />
                Site by <a href={tomsWebsite}>Tom Kwok.</a>
            </Tag2>
            <Tag2>
                <a href="http://beian.miit.gov.cn">粤ICP备2021042570号-1</a>
            </Tag2>
        </>
    )
}

function Footer(props: FooterProps) {
    const Container = tw.footer`w-full bg-white text-black sm:py-16 bottom-0 grid grid-rows-2 gap-20 `
    const Row = styled.div<{ itemsStart: boolean }>`
        ${tw`container mx-auto flex sm:flex-col sm:px-4 md:px-8 lg:px-16 sm:space-y-4 md:space-y-0 md:flex-row justify-between lg:h-24 `} ${({
            itemsStart,
        }) => (itemsStart ? tw`md:items-start` : tw`md:items-end`)}
    `
    const Logo = tw.div`md:h-20`

    return (
        <Container>
            <Row itemsStart={true}>
                <Logo>
                    <BrandName isWhite={false} />
                </Logo>
                {/* <SNSLinks /> */}
                <SocialNetworks isWhite={false} />
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
