import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { TwStyle } from "twin.macro"
import { SerializedStyles } from "@emotion/core"
;
type LinkProps = {
    children: React.ReactNode
    to: string
    activeClassName?: string
    partiallyActive?: boolean
    styles?: TwStyle | SerializedStyles
}

const defaultProps: Pick<LinkProps, "activeClassName" | "partiallyActive"> = {
    activeClassName: undefined,
    partiallyActive: true,
}

// 📖 How to specify an optional default props with TS: https://stackoverflow.com/a/40209674
const Link: React.FunctionComponent<LinkProps> = props => {
    const internal: boolean = /^\/(?!\/)/.test(props.to)

    if (internal) {
        return (
            <GatsbyLink
                to={props.to}
                activeClassName={props.activeClassName}
                partiallyActive={props.partiallyActive}
                css={props.styles}
            >
                {props.children}
            </GatsbyLink>
        )
    }
    return <a href={props.to}>{props.children}</a>
}

Link.defaultProps = defaultProps

export default Link
