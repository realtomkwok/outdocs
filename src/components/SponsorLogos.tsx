import { graphql, StaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import tw from "twin.macro"
import CrossfadeImage from "react-crossfade-image"
import { Body } from "utils/typography"
import Link from "utils/Link"

type DataProps = {
    allContentfulSponsors: {
        nodes: {
            logo: {
                file: {
                    url: string
                }
                title: string
            }
        }[]
    }
}

export default function SponsorLogos() {
    const Container = tw.div`grid grid-cols-1 gap-4`
    //⚠️ fixed height may be not compatible for every logo
    const Logo = tw.img`bg-white h-12 p-1`

    return (
        <StaticQuery
            query={graphql`
                query {
                    allContentfulSponsors(
                        sort: { fields: contentfulid, order: ASC }
                        filter: { node_locale: { eq: "zh-Hans" } }
                    ) {
                        nodes {
                            logo {
                                file {
                                    url
                                }
                            }
                        }
                    }
                }
            `}
            render={(data: DataProps) => {
                const images = []
                for (let image of data.allContentfulSponsors.nodes) {
                    images.push(image.logo.file.url)
                }

                const [imageIndex, setImageIndex] = useState(0)
                function changeImage() {
                    if (imageIndex === images.length - 1) {
                        setImageIndex(0)
                    } else {
                        setImageIndex(imageIndex + 1)
                    }
                }

                useEffect(() => {
                    let timer = setTimeout(() => changeImage(), 5000)
                    return () => {
                        clearTimeout(timer)
                    }
                })

                return (
                    <Container>
                        <Body>感谢以下有趣机构支持</Body>
                        <Link to="/sponsorship" tw="h-10">
                            <CrossfadeImage
                                style={{ height: "2.5rem" }}
                                src={images[imageIndex]}
                                duration={2000}
                                timeFunction={"ease-in"}
                            />
                        </Link>
                    </Container>
                )
            }}
        />
    )
}
