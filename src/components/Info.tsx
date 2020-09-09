import React from "react"
import tw from "twin.macro"

import { TagStyle02 } from "./Tags"
import { Heading4 } from "../utils/typography"

type newsProps = {
    tag: string
    tagLinkedPage: string
    headline: string
    subheadline: string
}

function News(props: newsProps) {
    const Container = tw.div`flex flex-col`

    return (
        <Container>
            <TagStyle02 text={props.text} to={props.to} />
            <Heading4>{props.</Heading4>
        </Container>
    )
}
