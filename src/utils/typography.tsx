import React from "react"
import tw, { TwStyle } from "twin.macro"
import { SerializedStyles } from "@emotion/core"

type TypeProps = {
    children: React.ReactNode
    styles?: SerializedStyles | TwStyle
}

const Heading1 = ({ children, styles }: TypeProps) => (
    <div css={[tw`font-black text-heading1`, styles]}>{children}</div>
)

const Heading2 = ({ children, styles }: TypeProps) => (
    <div css={[tw`font-black text-heading2`, styles]}>{children}</div>
)

const Heading3 = ({ children, styles }: TypeProps) => (
    <div css={[tw`font-bold text-heading3`, styles]}>{children}</div>
)

const Heading4 = ({ children, styles }: TypeProps) => (
    <div css={[tw`font-bold text-heading4 relative`, styles]}>{children}</div>
)

const Subheading1 = ({ children, styles }: TypeProps) => (
    <div css={[tw`font-normal text-subheading`, styles]}>{children}</div>
)

const Subheading2 = ({ children, styles }: TypeProps) => (
    <div css={[tw`font-bold text-subheading`, styles]}>{children}</div>
)

const Button = ({ children, styles }: TypeProps) => (
    <div css={[tw`font-bold text-button uppercase`, styles]}>{children}</div>
)

const Body = ({ children, styles }: TypeProps) => (
    <div css={[tw`font-normal text-body leading-relaxed`, styles]}>
        {children}
    </div>
)

const Tag = ({ children, styles }: TypeProps) => (
    <div css={[tw`font-bold text-tag uppercase`, styles]}>{children}</div>
)

const Tag2 = ({ children, styles }: TypeProps) => (
    <div css={[tw`font-normal text-tag uppercase`, styles]}>{children}</div>
)

export {
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Subheading1,
    Subheading2,
    Button,
    Body,
    Tag,
    Tag2,
}
