import React from 'react'
import tw from "twin.macro"

import NavBar from "./NavBar"
import Footer from "./Footer"

const Container = tw.div`container mx-auto font-sans`
const Content = tw.div`container mx-auto px-16 font-sans `

export default function Layout({ children }) {
  return (
    <Container>
      <NavBar />
      <Content>{children}</Content>
      <Footer />
    </Container>
  )
}
