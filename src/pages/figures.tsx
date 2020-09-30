import React from "react"
import { graphql } from "gatsby"
import { FluidObject } from "gatsby-image"
import tw from "twin.macro"
import { Parallax } from "react-scroll-parallax"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/Layout"
import Header from "../components/Header"
import { Heading2, Heading4 } from "utils/typography"
import Link from "utils/Link"
import { TextBtn } from "components/Buttons"

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
    const Container = tw.div`pb-64 grid grid-cols-12 gap-10`
    const Info = tw.div`p-8 flex flex-col justify-between space-y-4 bg-accentColor whitespace-pre-wrap`

    const thisFigure = props.data[0]
    const engName = props.data[1].name

    return (
        <Container>
            <Parallax
                y={[-20, 50]}
                styleOuter={{ gridArea: " 1 / 1 / 9 / 9", zIndex: "0" }}
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
            <Parallax
                y={[-30, 60]}
                styleOuter={{
                    gridArea: " 1 / 1 / 13 / 13",
                    zIndex: "10",
                    margin: "30% 0 0 50%",
                }}
            >
                <Info>
                    <Link to={thisFigure.detailPage}>
                        <Heading2>{thisFigure.slogan.slogan}</Heading2>
                    </Link>
                    <div tw="flex flex-row justify-between items-end">
                        <div>
                            <Heading4>{thisFigure.name}</Heading4>
                            <Heading4>{engName}</Heading4>
                        </div>
                        <TextBtn btnText="阅读 ta 的故事" />
                    </div>
                </Info>
            </Parallax>
        </Container>
    )
}

export default function Home({ data }: DataProps) {
    const figureData: { nodes: FigureProps[] }[] =
        data.allContentfulFigure.group

    return (
        <Layout hasPadding title="有玩人物">
            <Header category="figures" titleId={3} />
            {figureData.map((item, i) => (
                <Figure data={item.nodes} key={i} />
            ))}
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
