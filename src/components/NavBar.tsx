import React, { useState, useLayoutEffect } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import tw, { styled } from "twin.macro"
import { motion } from "framer-motion"

import { Cinemadow } from "assets/Logo"
import NavMenu, { NavScreen } from "components/NavMenu"

type NavBarProps = {
    isTop: boolean
    isDark: boolean
    children?: React.ReactNode
}

type ToggleProps = {
    toggle: React.MouseEventHandler<HTMLButtonElement>
    isDark: boolean
}
function useLockBodyScroll() {
    useLayoutEffect(() => {
        // Get original body overflow
        const originalStyle = window.getComputedStyle(document.body).overflow
        // Prevent scrolling on mount
        document.body.style.overflow = "hidden"
        // Re-enable scrolling when component unmounts
        return () => (document.body.style.overflow = originalStyle)
    }, []) // Empty array ensures effect is only run on mount and unmount
}

const MenuToggle = (props: ToggleProps) => {
    // useLockBodyScroll()
    return (
        <button onClick={props.toggle} css={tw`z-20`}>
            <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="transparent"
                strokeWidth="3"
                stroke={props.isDark ? "white" : "black"}
            >
                <motion.path
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" },
                    }}
                />
                <motion.path
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                    }}
                    transition={{ duration: 0.1 }}
                />
                <motion.path
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" },
                    }}
                />
            </svg>
        </button>
    )
}

const MenuBackground = {
    open: {
        height: "100vh",
        transition: { type: "spring", stiffness: 40, velocity: 2 },
    },
    closed: {
        height: "0",
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 40,
        },
    },
}

export default function NavBar(props: NavBarProps) {
    const [isOpen, toggleOpen] = useState(false)
    const [isBlack, toggleColor] = useState(props.isDark)

    function handleToggleOpen() {
        toggleOpen(!isOpen)
        if (props.isDark) {
            toggleColor(!isBlack)
        } else {
            toggleColor(isBlack)
        }
    }

    const ContainerXL = styled.nav<{
        isTop: boolean
    }>`
        ${tw`sm:hidden lg:flex container mx-auto max-w-screen-xl w-full h-32 p-16 z-50 bg-transparent items-center justify-between`} ${({
            isTop,
        }) =>
            isTop &&
            tw`absolute top-0 left-0 right-0 hover:bg-white transition duration-300`}
    `
    const Logo = tw.div`h-12`

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
                <>
                    <ContainerXL isTop={props.isTop}>
                        <Link to="/">
                            <Logo>
                                <Cinemadow isWhite={isBlack} />
                            </Logo>
                        </Link>
                        <NavMenu
                            category="navbar"
                            menuLinks={data.allContentfulMenuLinks.nodes}
                            partiallyActive={true}
                            isDark={isBlack}
                        />
                    </ContainerXL>
                    {/* ContainerSM */}
                    <motion.nav
                        initial={false}
                        animate={isOpen ? "open" : "closed"}
                        css={[
                            tw`sm:block lg:hidden p-8 h-32 z-50`,
                            props.isTop && tw`absolute top-0 left-0 right-0`,
                        ]}
                    >
                        <motion.div
                            variants={MenuBackground}
                            css={tw`absolute top-0 left-0 right-0 w-full bg-accentColor z-20 fixed`}
                        />
                        <div tw="container mx-auto flex items-center justify-between z-30">
                            <Link to="/" css={tw`z-30`}>
                                <Logo>
                                    <Cinemadow isWhite={isBlack} />
                                </Logo>
                            </Link>
                            <MenuToggle
                                toggle={() => handleToggleOpen()}
                                isDark={isBlack}
                            />
                        </div>

                        <NavScreen
                            category="navbar"
                            menuLinks={data.allContentfulMenuLinks.nodes}
                            partiallyActive={true}
                        ></NavScreen>
                    </motion.nav>
                </>
            )}
        />
    )
}
