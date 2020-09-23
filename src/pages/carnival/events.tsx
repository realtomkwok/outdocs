import React from "react"
import tw from "twin.macro"

import Layout from "components/Layout"
import Header from "components/Header"

export default function Index() {
    return (
        <Layout hasPadding isTop={false} title="活动">
            <Header category="carnival" titleId={2} />
        </Layout>
    )
}
