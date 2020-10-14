import React from "react"
import { graphql } from "gatsby"
import { FluidObject } from "gatsby-image"
import tw from "twin.macro"
import { Parallax } from "react-scroll-parallax"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/Layout"
import Header from "../components/Header"
import { Heading2, Heading3, Heading4 } from "utils/typography"
import Link from "utils/Link"
import { OutlinedBtn } from "components/Buttons"

type DataProps = {
    data: {
        allContentfulFigure: {
            group: {
                nodes: FigureProps[]
            }[]
        }
    }
}

type FigureProps = {
    detailPage: string
    name: string
    avatar: {
        description: string
        fluid: FluidObject
    }
    slogan: {
        slogan: string
    }
}

function Figure(props: { data: FigureProps[] }) {
    const Container = tw.div`pb-64 grid lg:grid-cols-2 gap-10`
    const Info = tw.div`py-4 flex flex-col justify-between bg-white space-y-8 whitespace-pre-wrap`

    const thisFigure = props.data[0]
    const engName = props.data[1].name

    return (
        <Container>
            <Parallax
                y={[-20, 50]}
                styleOuter={tw``}
                styleInner={{ height: "60vh" }}
            >
                <Link to={thisFigure.detailPage}>
                    <BackgroundImage
                        fluid={thisFigure.avatar.fluid}
                        alt={thisFigure.avatar.description}
                        style={tw`h-full bg-top`}
                    />
                </Link>
            </Parallax>
            <Parallax y={[20, 60]} styleOuter={tw``}>
                <Info>
                    <Link to={thisFigure.detailPage}>
                        <Heading3>{thisFigure.slogan.slogan}</Heading3>
                    </Link>
                    <div tw="w-2/3 space-y-4">
                        <div>
                            <Heading4>{thisFigure.name}</Heading4>
                            <Heading4>{engName}</Heading4>
                        </div>
                        <OutlinedBtn
                            btnText="阅读 ta 的故事"
                            to={thisFigure.detailPage}
                        />
                    </div>
                </Info>
            </Parallax>
        </Container>
    )
}

export default function Home({ data }: DataProps) {
    const Container = tw.div`space-y-16`
    const figureData: { nodes: FigureProps[] }[] =
        data.allContentfulFigure.group

    return (
        <Layout hasPadding title="有玩人物">
            <Header category="figures" titleId={3} />
            <Container>
                {figureData.map((item, i) => (
                    <Figure data={item.nodes} key={i} />
                ))}
            </Container>
        </Layout>
    )
}

export const query = graphql`
    query {
        allContentfulFigure {
            group(field: contentfulid) {
                nodes {
                    detailPage
                    name
                    avatar {
                        fluid {
                            ...GatsbyContentfulFluid_withWebp
                        }
                        description
                    }
                    slogan {
                        slogan
                    }
                }
            }
        }
    }
`
