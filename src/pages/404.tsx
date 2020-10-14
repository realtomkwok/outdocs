import React from "react"
import tw from "twin.macro"

import Layout from "components/Layout"
import { Heading1, Body, Subheading1 } from "utils/typography"
import { OutlinedBtn } from "components/Buttons"

export default function FourOFour() {
    const Header = tw.header`mb-8`

    return (
        <Layout title="页面找不到" hasPadding>
            <Header>
                <Heading1>Oops!</Heading1>
                <Subheading1>很抱歉，你要查找的网页找不到。</Subheading1>
            </Header>
            <OutlinedBtn btnText="返回主页" to="/" />
        </Layout>
    )
}
