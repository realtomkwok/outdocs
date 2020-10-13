import React from "react"
import tw, { TwComponent, styled } from "twin.macro"
import { Helmet } from "react-helmet"
import { createGlobalStyle } from "styled-components"

import NavBar from "components/NavBar"
import Footer from "components/Footer"

type LayoutProps = {
    isDark: boolean
    isTop: boolean
    hasPadding: boolean
    children: React.ReactNode
    title: string
}

const defalutProps: Pick<LayoutProps, "isTop" | "isDark" | "hasPadding"> = {
    isTop: false,
    isDark: false,
    hasPadding: false,
}

function Layout(props: LayoutProps) {
    const GlobalStyle = createGlobalStyle`
        html {
            color: ${props.isDark ? "white" : "black"};
            background-color: ${props.isDark ? "black" : "white"}
        }
    `
    const Container: TwComponent<"div"> = tw.div`mx-auto font-sans h-full`
    const Content: TwComponent<"div"> = styled.div`
        ${props.hasPadding && tw`container mx-auto sm:py-8 lg:p-16 h-full`}
    `

    return (
        <Container>
            <GlobalStyle />
            <Helmet>
                <meta charSet="utf-8" />
                <title>{`${props.title} | OUTDOCS`}</title>
            </Helmet>
            <NavBar isTop={props.isTop} isDark={props.isDark} />
            <Content>{props.children}</Content>
            <Footer isDark={props.isDark} />
        </Container>
    )
}

Layout.defaultProps = defalutProps
export default Layout
