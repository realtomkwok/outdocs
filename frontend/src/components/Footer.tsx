import React from "react"
import tw from "twin.macro"
import { Link } from "gatsby"

import logo from '../img/logo/outdocs-brand-name.svg'
import SNSLinks from '../components/SNSLinks'

export default function Footer() {
  const Container = tw.footer`w-full p-16 absolute bottom-0`
  const Row = tw.div`flex items-start justify-between`
  const Logo = tw.img`h-20`

  return (
    <Container>
      <Row>
        <Logo src={logo} />
        <SNSLinks />
      </Row>
      <Row></Row>
    </Container>
  )
}
