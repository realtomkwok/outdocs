import React from "react"
import tw, { TwComponent } from "twin.macro"

export default function EmptyState() {
    const Container: TwComponent<"div"> = tw.div`grid grid-cols-12`
    const Shrug: TwComponent<"div"> = tw.div`col-span-12 mx-auto text-6xl`

    return <Shrug>🤷‍♂️/🤷‍♀️</Shrug>
}
