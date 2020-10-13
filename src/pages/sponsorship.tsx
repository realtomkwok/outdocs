import React from "react"
import { graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"
import tw, { css } from "twin.macro"
import { SerializedStyles } from "@emotion/core"

import Layout from "components/Layout"
import Header from "components/Header"
import { Body, Heading4 } from "utils/typography"

import intro from "content/Sponsorship-Overview-Copy.yaml"
import Tag from "components/Tags"

type DataProps = {
    data: {
        allContentfulSponsors: {
            group: {
                nodes: {
                    logo: {
                        description: string
                        file: {
                            url: string
                        }
                    }
                    titles: string
                    name: string
                    url: string
                }[]
            }[]
        }
    }
}

export default function Home({ data }: DataProps) {
    const Intro = tw.div`py-16 space-y-8 lg:w-1/2`
    const CardContainer = tw.div`grid lg:grid-cols-3 gap-10`
    const Card = tw.div`flex flex-col justify-between h-64`
    const TextContainer = tw.div`space-y-2`
    const Logo = tw.a`flex justify-center items-center h-full`
    const logoStyle: SerializedStyles = css`
        width: 12rem;
        height: 6rem;
        object-fit: contain;
        mix-blend-mode: multiply;
    `

    // locale: zh-Hans
    const sponsorData = data.allContentfulSponsors.group[1].nodes

    return (
        <Layout title="有趣机构" hasPadding>
            <Header category="sponsorship" titleId={4} />
            <Intro>
                <Body>{intro.zhHans}</Body>
            </Intro>
            <CardContainer>
                {sponsorData.map((item, i) => (
                    <Card key={i}>
                        <Logo href={item.url}>
                            <img src={item.logo.file.url} css={logoStyle} />
                        </Logo>
                        <TextContainer>
                            <Tag tagStyle="primary">{item.titles}</Tag>
                            <Heading4>{item.name}</Heading4>
                        </TextContainer>
                    </Card>
                ))}
            </CardContainer>
        </Layout>
    )
}

export const query = graphql`
    {
        allContentfulSponsors(sort: { fields: contentfulid, order: ASC }) {
            group(field: node_locale) {
                nodes {
                    logo {
                        description
                        file {
                            url
                        }
                    }
                    titles
                    name
                    url
                }
            }
        }
    }
`
