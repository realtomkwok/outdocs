import React from "react"
import tw, { TwComponent } from "twin.macro"

export default function EmptyState() {
    const Shrug: TwComponent<"div"> = tw.div`col-span-3 mx-auto text-6xl`

    return <Shrug>🤷‍♂️/🤷‍♀️</Shrug>
}
