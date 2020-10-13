import React from 'react'
import tw from 'twin.macro'

export default function SponsorLogos() {
    const Container = tw.div`grid grid-cols-1 gap-4`
    //⚠️ fixed height may be not compatible for every logo
    const Logos = tw.div`bg-gray-300 h-12`
    
    return (
        <Container>
            <p>感谢以下有趣机构支持</p>
            <Logos />
        </Container>
    )
}