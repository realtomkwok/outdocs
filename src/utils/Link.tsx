import React from 'react'
import {Link as GatsbyLink} from 'gatsby'

type LinkProps = {
    children: React.ReactNode
    to: string
    activeClassName?: string
    partiallyActive?: boolean
}

const defaultProps: Pick<LinkProps, "activeClassName" | "partiallyActive"> = {
    activeClassName: undefined,
    partiallyActive: undefined
}

// 📖 How to specify an optional default props with TS: https://stackoverflow.com/a/40209674
const Link: React.FunctionComponent<LinkProps> = (props) => {
    const internal: boolean = /^\/(?!\/)/.test(props.to)

    if (internal) {
        return (
            <GatsbyLink
                to={props.to}
                activeClassName={props.activeClassName}
                partiallyActive={props.partiallyActive}
            >
                {props.children}
            </GatsbyLink>
        )
    }
    return <a href={props.to}>{props.children}</a>
}

Link.defaultProps = defaultProps

export default Link