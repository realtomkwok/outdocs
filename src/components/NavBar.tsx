import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import tw, { styled } from "twin.macro"

import { Cinemadow } from "assets/Logo"
import NavMenu from "components/NavMenu"

//styles
const Container = styled.nav<{
    isTop: boolean
}>`
    ${tw`container mx-auto max-w-screen-xl w-full flex h-32 lg:p-16 xl:p-16 z-50 items-center justify-between bg-transparent`} ${({
        isTop,
    }) =>
        isTop &&
        tw`absolute top-0 left-0 right-0 hover:bg-white transition duration-300`}
`
const Logo = tw.div`h-12`
// const MenuList = tw.div`flex items-center text-center`

type NavBarProps = {
    isTop: boolean
    isDark: boolean
}

export default function NavBar(props: NavBarProps) {
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
            render={data => (
                <Container isTop={props.isTop}>
                    <Link to="/">
                        <Logo>
                            <Cinemadow isWhite={props.isDark} />
                        </Logo>
                    </Link>
                    <NavMenu
                        category="navbar"
                        menuLinks={data.allContentfulMenuLinks.nodes}
                        partiallyActive={true}
                        isDark={props.isDark}
                    />
                </Container>
            )}
        />
    )
}
