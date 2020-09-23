import React from "react"
import tw from "twin.macro"

import Layout from "components/Layout"
import Header from "components/Header"

export default function Index() {
    const Main = tw.main`relative`
    const Sidebar = tw.aside`fixed`
    const Content = tw.div`grid grid-cols-2`

    return (
        <Layout hasPadding isTop={false} title="有问必答">
            <Header category="carnival" titleId={2} />
            <Main>
                <Sidebar></Sidebar>
                <Content></Content>
            </Main>
        </Layout>
    )
}
