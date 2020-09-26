import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"

export default function Home() {
    return (
        <Layout title="有趣机构" hasPadding>
            <Header category="sponsorship" titleId={4} />
        </Layout>
    )
}
