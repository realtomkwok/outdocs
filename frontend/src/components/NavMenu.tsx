import React from "react"
import { Link } from "gatsby"
import tw, { css } from "twin.macro"

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
}

type ItemProps = {
  to: string
  name: string
}

function MenuItem(props: ItemProps) {
  //⚠️ 'hover:underline' needs to optimized
  const style = css`
    ${tw`p-4 inline-flex font-bold hover:underline`}
  `
  const activeStyles = {
    textDecoration: "underline",
  }

  return (
    <li css={style}>
      <Link to={props.to} activeStyle={activeStyles}>
        {props.name}
      </Link>
    </li>
  )
}

export default function NavMenu(props: MenuProps) {
  const Menu = tw.ul`flex list-none`
  //⚠️ filter by locale
  console.log(props.category)
  const menuLinks = props.menuLinks.filter(function (el) {
    return el.node_locale === "zh-Hans" && el.category === props.category
  })
  //   const menuLinks_eng = props.menuLinks.filter(function (el) {
  //     return el.node_locale === "en-US"
  //   })
  return (
    <>
      <Menu>
        {menuLinks.map(item => (
          <MenuItem key={item.order} to={item.link} name={item.name} />
        ))}
      </Menu>
    </>
  )
}
