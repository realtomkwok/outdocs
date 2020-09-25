import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"

export default function Home() {
  return (
    <Layout isDark={false} isTop={false} title="我们是谁" hasPadding>
      <Header category="about-us" titleId={5} />
    </Layout>
  )
}
