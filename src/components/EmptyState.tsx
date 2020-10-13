import React from "react"
import tw, { TwComponent } from "twin.macro"

export default function EmptyState() {
    const Shrug: TwComponent<"div"> = tw.div`container mx-auto lg:col-start-2 lg:col-end-3 text-6xl text-center`

    return <Shrug>🤷‍♂️/🤷‍♀️</Shrug>
}
