import React from "react"
import tw, { TwComponent, styled, TwStyle} from "twin.macro"
import { Tag as TagText } from "../utils/typography"

type TagProps = {
    children: React.ReactNode
    tagStyle: string
}

const containerStyle: TwStyle = {
    primary: tw`inline-block w-16 border-b-2 border-black`,
    secondary: tw`inline-block bg-black border-black border-2 px-3 py-2 text-white overflow-auto`,
}

const textStyle: TwStyle = {
    primary: tw``,
    secondary: tw`relative top-1`
}

const getContainerStyle = ({ tagStyle }) => containerStyle[tagStyle]
const getTextStyle = ({tagStyle}) => textStyle[tagStyle]
const Container: TwComponent<"div"> = styled.div(getContainerStyle)
const TextWrapper: TwComponent<"div"> = styled.div(getTextStyle)

export default function Tag(props: TagProps) {
    return (
        // 🐛 fix "Property does not exist on type..." https://stackoverflow.com/a/46216024
        // ❓ how to register a customized property?
        <Container tagStyle={props.tagStyle}>
            <TextWrapper tagStyle={props.tagStyle}>
                <TagText>{props.children}</TagText>
            </TextWrapper>
        </Container>
    )
}
