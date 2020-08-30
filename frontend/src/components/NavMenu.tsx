import React from "react"
import { Link } from "gatsby"
import tw, { css } from "twin.macro"

type MenuProps = {
  menuLinks: any // why not declare as 'Array'?
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
      textDecoration: 'underline'
  }

  return (
    <li css={style}>
      <Link to={props.to} activeStyle={activeStyles}>{props.name}</Link>
    </li>
  )
}

export default function NavMenu(props: MenuProps) {
  const Menu = tw.ul`flex list-none`
  //⚠️ filter by locale 
  const menuLinks_chn = props.menuLinks.filter(function (el) {
    return el.node_locale === "zh-Hans"
  })
  const menuLinks_eng = props.menuLinks.filter(function (el) {
    return el.node_locale === "en-US"
  })
  return (
    <>
      <Menu>
        {menuLinks_chn.map(item => (
          <MenuItem key={item.order} to={item.link} name={item.name} />
        ))}
      </Menu>
    </>
  )
}
