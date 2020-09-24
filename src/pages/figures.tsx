import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"

export default function Home() {
  return (
    <Layout isTop={false} hasPadding title='有玩人物'> 
      <Header category="figures" titleId={3} />
    </Layout>
  )
}
