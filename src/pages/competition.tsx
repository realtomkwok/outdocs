import React from "react"
import tw from 'twin.macro'

import Layout from "../components/Layout"
import Header from "../components/Header"

function Intro() {
    return(
        <>
            
        </>
    )
}

export default function Home() {
    const Main: TwComponent<"main"> = tw.main`container mx-auto p-16 grid grid-cols-12 gap-10`

    return (
        <Layout isTop={false}>
            <Header category="competition" titleId={1} />
            <Main></Main>
        </Layout>
    )
}
