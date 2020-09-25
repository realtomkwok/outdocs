import React from "react"
import { Link } from "gatsby"
import tw, { styled, TwComponent } from "twin.macro"

type MenuProps = {
    category: string
    // the solution to declare an array of objects correctly except 'any': https://github.com/typescript-cheatsheets/react#basic-prop-types-examples
    menuLinks: {
        name: string
        link: string
        node_locale: string
        order: number
        category: string
    }[] // don't forget the bracket at last!
    partiallyActive: boolean
    isDark: boolean
}

type ItemProps = {
    to: string
    name: string
    partiallyActive: boolean
    isDark: boolean
}

function MenuItem(props: ItemProps) {
    const Item: TwComponent<"li"> = styled.li`
        //
        ${tw`p-4 inline-flex font-bold relative`}
        &:before {
            content: "";
            position: absolute;
            width: 0;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: ${props.isDark ? "#FFF" : "#000"};
            visibility: visible;
            transition: all 150ms ease-in-out;
        }
        &:hover&:before {
            visibility: visibile;
            width: 100%;
        }
    `
    // 📖 How to create a CSS class for use in activeClassName: https://stackoverflow.com/questions/57117445/how-to-create-a-css-class-for-use-in-activeclassname
    const NavLink = styled(Link)`
        position: relative;
        &.active {
            cursor: default;
            &:before {
                content: "";
                position: absolute;
                width: 0;
                height: 2px;
                bottom: 0;
                left: 0;
                background-color: ${props.isDark ? "#FFF" : "#000"};
                visibility: visible;
                width: 100%;
            }
        }
    `

    return (
        <NavLink
            to={props.to}
            activeClassName="active"
            partiallyActive={props.partiallyActive}
        >
            <Item>{props.name}</Item>
        </NavLink>
    )
}

export default function NavMenu(props: MenuProps) {
    type LinkType = {
        order: number
        link: string
        name: string
        node_locale: string
        category: string
    }

    const Menu = tw.ul`flex list-none`
    //⚠️ filter by locale
    const menuLinks: LinkType[] = props.menuLinks.filter(function (el) {
        return el.node_locale === "zh-Hans" && el.category === props.category
    })
    //   const menuLinks_eng = props.menuLinks.filter(function (el) {
    //     return el.node_locale === "en-US"
    //   })
    return (
        <>
            <Menu>
                {menuLinks.map(item => (
                    <MenuItem
                        key={item.order}
                        to={item.link}
                        name={item.name}
                        partiallyActive={props.partiallyActive}
                        isDark={props.isDark}
                    />
                ))}
            </Menu>
        </>
    )
}
