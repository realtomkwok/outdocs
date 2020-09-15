import React from "react"
import tw, { TwComponent } from "twin.macro"

import NavBar from "./NavBar"
import Footer from "./Footer"

type LayoutProps = {
    isTop: boolean,
    children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
    const Container: TwComponent<"div"> = tw.div`mx-auto font-sans h-full`
    const Content: TwComponent<"div"> = tw.div`container mx-auto p-16`

    return (
        <Container>
            <NavBar isTop={props.isTop} />
            <Content>{props.children}</Content>
            <Footer />
        </Container>
    )
}
 