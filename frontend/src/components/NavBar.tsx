import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import tw from "twin.macro"

import logo from "../img/logo/outdocs-logo-cinemadow.svg"
import NavMenu from './NavMenu'

//styles
const Container = tw.nav`flex items-center justify-between bg-transparent h-32 max-w-screen-xl p-16 mx-auto`
const Logo = tw.img`h-12`
// const MenuList = tw.div`flex items-center text-center`

export default function NavBar() {
  return (
    <StaticQuery
      query={graphql`
        query menuLinks {
          allContentfulMenuLinks(
            sort: { fields: order, order: ASC }
          ) {
            nodes {
              name
              link
              node_locale
              order
              category
            }
          }
        }
      `}
      render={(data) => (
        <Container>
          <Link to="/">
            <Logo src={logo}></Logo>
          </Link>
          <NavMenu category="navbar" menuLinks={data.allContentfulMenuLinks.nodes} />
        </Container>
      )}
    />
  )
}
