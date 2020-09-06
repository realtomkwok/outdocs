import React from "react"
import Img from "gatsby-image"
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"

type HeroType = {
    imgUrl: undefined
    imgAlt: string
    cardHeadline: string
    cardBtnText: string
    cardLinkedPage: string
}

type HeroImageProps = {
    imgUrl: undefined
    imgAlt: string
}

function HeroImage(props: HeroImageProps) {
    const Grid = styled.div`
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(12, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        max-height: 800px;
    `
    const gridAreaSettings: Array<string> = []
    for (let i: number = 13; i > 9; i--) {
        gridAreaSettings.push(`1/1/${i}/${i}`)
    }
    
    return (
        <Grid>
            {gridAreaSettings.map((item, i) => (
                <Img fluid={props.imgUrl} alt={props.imgAlt} style={{gridArea: `${item}`}} key={i} />
            ))}
        </Grid>
    )
}

export default function Hero(props: HeroType) {
    const Container = tw.div`w-full h-auto bg-gray-300 relative`
    const CardContainer = tw.div`container mx-auto p-16 absolute bottom-0 left-0 right-0`
    const Card = tw.div``

    return (
        <Container>
            {/* 🐛 fix the maxHeight bug of 'Gatsby-image': https://github.com/gatsbyjs/gatsby/issues/15167#issuecomment-517995500 */}
            {/* 📖 Grid stack: https://css-tricks.com/how-to-stack-elements-in-css/ */}
            {/* 📖 CSS Grid Generator https://cssgrid-generator.netlify.app/ */}
            <HeroImage imgUrl={props.imgUrl} imgAlt={props.imgAlt}/>
            <CardContainer>
                <Card>
                    <p>{props.cardHeadline}</p>
                    <Link to={props.cardLinkedPage}>
                        <p>{props.cardBtnText}</p>
                    </Link>
                </Card>
            </CardContainer>
        </Container>
    )
}
