import React from "react"
import tw, { styled } from "twin.macro"

import NavBar from "./NavBar"
import Footer from "./Footer"

type LayoutProps = {
    isTop: boolean,
    children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
    const Container = tw.div`mx-auto font-sans h-full`
    const Content = styled.div<{ isTop: boolean }>`
        ${tw`mx-auto h-auto overflow-auto`} ${({ isTop }) => isTop && tw`top-0`}
    `
    return (
        <Container>
            <NavBar isTop={props.isTop} />
            <Content isTop={props.isTop}>{props.children}</Content>
            <Footer />
        </Container>
    )
}
 