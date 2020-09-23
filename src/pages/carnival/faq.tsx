import React from "react"
import tw from "twin.macro"

import Layout from "components/Layout"
import Header from "components/Header"

export default function Index() {
    const Main = tw.div`grid grid-cols-2`
    const Sidebar = tw.side``

    return (
        <Layout hasPadding isTop={false} title="有问必答">
            <Header category="carnival" titleId={2} />
            <Sidebar></Sidebar>
            <Main></Main>
        </Layout>
    )
}
