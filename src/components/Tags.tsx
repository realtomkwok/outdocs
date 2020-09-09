import React from "react"
import tw from "twin.macro"
import Link from "../utils/Link"

type TagProps = {
    to: string
    children: React.ReactNode
}

function TagStyle02(props: TagProps) {
    const Container = tw.div`inline-block bg-black border-black border-2 px-3 py-2`
    const Text = tw.span`text-tag text-white font-bold`

    return (
        <Container>
            <Link
                to={props.to}
            >
                <Text>{props.children}</Text>
            </Link>
        </Container>
    )
}

export { TagStyle02 }
