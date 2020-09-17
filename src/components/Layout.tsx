import React from "react"
import tw, { TwComponent } from "twin.macro"
import { Helmet } from "react-helmet"

import NavBar from "components/NavBar"
import Footer from "components/Footer"

type LayoutProps = {
    isTop: boolean
    children: React.ReactNode
    title: string
}

export default function Layout(props: LayoutProps) {
    const Container: TwComponent<"div"> = tw.div`mx-auto font-sans h-full`
    const Content: TwComponent<"div"> = tw.div`container mx-auto p-16`

    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{`${props.title} | OUTDOCS`}</title>
            </Helmet>
            <NavBar isTop={props.isTop} />
            <Content>{props.children}</Content>
            <Footer />
        </Container>
    )
}
