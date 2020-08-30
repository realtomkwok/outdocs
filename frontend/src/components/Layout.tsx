import React from 'react'
import tw from "twin.macro"

import NavBar from "./NavBar"

const Content = tw.div`container font-sans mx-auto px-16`

export default function Layout({ children }) {
  return (
    <>
      <NavBar></NavBar>
      <Content>{children}</Content>
    </>
  )
}
