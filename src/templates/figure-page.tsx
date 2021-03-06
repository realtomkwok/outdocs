import React from "react"
import tw, { css, styled } from "twin.macro"
import { graphql } from "gatsby"
import { FluidObject } from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import { getFluidGatsbyImage } from "utils/getFluidGatsbyImage"

import Layout from "components/Layout"
import {
    Heading2,
    Heading4,
    Body,
    Subheading1,
    Subheading2,
} from "utils/typography"
import { Parallax, ParallaxBanner } from "react-scroll-parallax"
import { FilmCard, PersonCard } from "components/Cards"
import Tag from "components/Tags"

type DataProps = {
    data: {
        contentfulFigure: {
            detailPage: string
            name: string
            slogan: {
                slogan: string
            }
            avatar: {
                fluid: FluidObject
                description: string
            }
            paragraphs: {
                json: any //⚠️ type requried!
            }
        }
        allContentfulFigure: {
            nodes: {
                detailPage: string
                name: string
                avatar: {
                    fluid: FluidObject
                    description: string
                }
                slogan: {
                    slogan: string
                }
            }[]
        }
    }
}

export default function FigureDetail({ data }: DataProps) {
    const Container = tw.div`container mx-auto`
    const Header = tw.header`sm:px-4 md:px-8 lg:p-16 sm:flex sm:flex-col-reverse lg:grid lg:grid-cols-2 gap-10`
    const HeaderInfo = tw.div`flex flex-col justify-between`
    const HeaderHero = styled.div`
        height: 24rem;
    `
    const Main = tw.div`py-16 w-full`
    const Others = tw.div`sm:p-4 md:p-8 lg:p-16 space-y-8`
    const OthersWrapper = tw.div`sm:flex sm:flex-row sm:overflow-scroll sm:space-x-8 md:grid md:overflow-auto md:space-x-0 md:grid-cols-2 lg:grid-cols-3 md:gap-10`

    const thisFigure = data.contentfulFigure
    const otherFigures = data.allContentfulFigure.nodes

    const typographyOptions = {
        renderNode: {
            [BLOCKS.HEADING_2]: (node, children) => (
                <Subheading1
                    styles={tw`mx-auto sm:px-4 md:px-8 lg:w-3/5 leading-relaxed relative mb-8`}
                >
                    {children}
                </Subheading1>
            ),
            [BLOCKS.HEADING_3]: (node, children) => (
                <Subheading2
                    styles={tw`mx-auto sm:px-4 md:px-8 lg:w-3/5 mt-8 mb-4 relative`}
                >
                    {children}
                </Subheading2>
            ),
            [BLOCKS.PARAGRAPH]: (node, children) => (
                <Body
                    styles={tw`mx-auto sm:px-4 md:px-8 lg:w-3/5 my-2 relative`}
                >
                    {children}
                </Body>
            ),
            [BLOCKS.EMBEDDED_ASSET]: node => {
                const { file, title } = node.data.target.fields
                const image = { file: file["zh-Hans"] }
                return (
                    <div tw="my-8 relative">
                        <ParallaxBanner
                            layers={[{ image: image.file["url"], amount: 0.2 }]}
                            css={{
                                width: "100%",
                                height: "80vh",
                            }}
                        ></ParallaxBanner>
                    </div>
                )
            },
        },
    }

    const story: React.ReactNode = documentToReactComponents(
        thisFigure.paragraphs.json,
        typographyOptions
    )

    return (
        <Layout title={thisFigure.name}>
            <Container>
                <Header>
                    <HeaderInfo>
                        <Heading2>{thisFigure.slogan.slogan}</Heading2>
                        <Heading4>{thisFigure.name}</Heading4>
                    </HeaderInfo>
                    <HeaderHero>
                        <BackgroundImage
                            fluid={thisFigure.avatar.fluid}
                            alt={thisFigure.avatar.description}
                            css={tw`h-full`}
                        />
                    </HeaderHero>
                </Header>
                <Main>{story}</Main>
                <Others>
                    <Tag tagStyle="primary">更多有玩人物</Tag>
                    <OthersWrapper>
                        {otherFigures.map((item, i) => (
                            <PersonCard
                                scrollable
                                size="large"
                                detailPage={item.detailPage}
                                imgFluid={item.avatar.fluid}
                                imgAlt={item.avatar.description}
                                name={item.name}
                                description={item.slogan.slogan}
                                key={i}
                            />
                        ))}
                    </OthersWrapper>
                </Others>
            </Container>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        contentfulFigure(
            node_locale: { eq: "zh-Hans" }
            detailPage: { eq: $slug }
        ) {
            detailPage
            name
            slogan {
                slogan
            }
            avatar {
                fluid {
                    ...GatsbyContentfulFluid_withWebp
                }
                description
            }
            paragraphs {
                json
            }
        }
        allContentfulFigure(
            filter: {
                node_locale: { eq: "zh-Hans" }
                detailPage: { ne: $slug }
            }
        ) {
            nodes {
                detailPage
                name
                avatar {
                    fluid {
                        srcSetWebp
                    }
                }
                slogan {
                    slogan
                }
            }
        }
    }
`
