import React from "react"
import 'twin.macro'

type childrenProps = {
    children: React.ReactNode
}

const Heading1 = ({ children }: childrenProps) => (
    <div tw="font-black text-heading1">{children}</div>
)

const Heading2 = ({ children }: childrenProps) => (
    <div tw="font-black text-heading2">{children}</div>
)

const Heading3 = ({ children }: childrenProps) => (
    <div tw="font-bold text-heading3">{children}</div>
)

const Heading4 = ({ children }: childrenProps) => (
    <div tw="font-bold text-heading4">{children}</div>
)

const Subheading1 = ({ children }: childrenProps) => (
    <div tw="font-normal text-subheading">{children}</div>
)

const Subheading2 = ({ children }: childrenProps) => (
    <div tw="font-bold text-subheading">{children}</div>
)

const Button = ({ children }: childrenProps) => (
    <div tw="font-bold text-button">{children}</div>
)

const Body = ({ children }: childrenProps) => (
    <div tw="font-normal text-body">{children}</div>
)

const Tag = ({ children }: childrenProps) => (
    <div tw="font-bold text-tag">{children}</div>
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
}
