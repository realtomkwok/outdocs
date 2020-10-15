import React from "react"
import { ParallaxProvider } from "react-scroll-parallax"

import "tailwindcss/dist/base.min.css"
import "tailwindcss/tailwind.css"

export const onClientEntry = () => {
    // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
    if (!(`IntersectionObserver` in window)) {
        import(`intersection-observer`)
        console.log(`# IntersectionObserver is polyfilled!`)
    }
}

export const wrapRootElement = ({ element }) => {
    return <ParallaxProvider>{element}</ParallaxProvider>
}
