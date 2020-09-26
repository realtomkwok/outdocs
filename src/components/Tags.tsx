import { SerializedStyles } from "@emotion/core"
import React from "react"
import tw, { styled, TwStyle, css } from "twin.macro"
import { Tag as TagText } from "../utils/typography"

type TagProps = {
    children: React.ReactNode
    tagStyle: string
    isWhite: boolean
}

const defaultProps: Pick<TagProps, "isWhite"> = {
    isWhite: false,
}

const containerStyle: {
    primary: SerializedStyles
    secondary: SerializedStyles
} = {
    primary: css`
        ${tw`inline-block w-16 border-b-2`};
    `,
    secondary: css`
        ${tw`inline-block bg-black border-2 px-3 py-2 text-white overflow-auto`}
    `,
}

const textStyle: TwStyle = {
    primary: tw``,
    secondary: tw`relative top-1`,
}

const getContainerStyle = ({ tagStyle }) => containerStyle[tagStyle]
const getTextStyle = ({ tagStyle }) => textStyle[tagStyle]
const Container = styled.div<{ tagStyle: string }>(getContainerStyle)
const TextWrapper = styled.div<{ tagStyle: string }>(getTextStyle)

function Tag(props: TagProps) {
    return (
        // 🐛 fix "Property does not exist on type..." https://stackoverflow.com/a/46216024
        // ❓ how to register a customized property?
        <Container
            tagStyle={props.tagStyle}
            css={props.isWhite ? tw`border-white` : tw`border-black`}
        >
            <TextWrapper tagStyle={props.tagStyle}>
                <TagText>{props.children}</TagText>
            </TextWrapper>
        </Container>
    )
}

Tag.defaultProps = defaultProps
export default Tag
