import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"

export default function Home() {
    return (
        <Layout title="新闻中心" hasPadding>
            <Header category="newsroom" titleId={6} />
        </Layout>
    )
}
