import React from "react"
import tw, { TwComponent } from "twin.macro"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import Header from "components/Header"
import { Body, Heading4, Heading2, Heading3 } from "utils/typography"
import { OutlinedBtn } from "components/Buttons"
import Link from "utils/Link"

import copy from "content/Competition-Overview-Copy.yaml"

type DataProps = {
    data: {
        allContentfulMenuLinks: {
            group: SectionProps[]
        }
    }
}

type SectionProps = {
    edges: {
        node: {
            name: string
            link: string
        }
    }[]
}


function Intro() {
    const Container: TwComponent<"div"> = tw.div`py-16 lg:w-1/2 space-y-8`
    const BtnWrapper: TwComponent<"div"> = tw.div`flex flex-row space-x-4`

    return (
        <Container>
            <Heading4>{copy.date}</Heading4>
            <div>
                <Heading2>{copy.headline.zhHans}</Heading2>
                <Heading3 styles={tw`uppercase`}>{copy.headline.enUS}</Heading3>
            </div>
            <Body>{copy.intro.zhHans}</Body>
            <Body>{copy.intro.enUS}</Body>
            <BtnWrapper>
                <OutlinedBtn
                    to={copy.btnTo.zhHans.url}
                    btnText={copy.btnTo.zhHans.text}
                />
                <OutlinedBtn
                    to={copy.btnTo.enUS.url}
                    btnText={copy.btnTo.enUS.text}
                />
            </BtnWrapper>
        </Container>
    )
}

function Sections(props: { data: SectionProps[] }) {
    const Container: TwComponent<"div"> = tw.div`md:grid md:grid-cols-2 lg:-mx-16`
    const Section: TwComponent<"div"> = tw.div`col-span-1 bg-white space-y-2 sm:py-4 lg:p-16`
    // const engTitle = props.data[0].edges[]

    return (
        <Container>
            {props.data.map((item, i) => (
                <Link to={item.edges[0].node.link} key={i}>
                    <Section>
                        <Heading4>
                            <span tw="uppercase">
                                {item.edges[1].node.name}
                            </span>
                        </Heading4>
                        <Heading2>{item.edges[0].node.name}</Heading2>
                    </Section>
                </Link>
            ))}
        </Container>
    )
}

export default function Index({ data }: DataProps) {
    const sectionData: SectionProps[] = data.allContentfulMenuLinks.group

    return (
        <Layout hasPadding title="全球征集">
            <Header category="competition" titleId={1} />
            <Intro />
            <Sections data={sectionData} />
        </Layout>
    )
}

export const query = graphql`
    query SubPages {
        allContentfulMenuLinks(
            filter: { category: { eq: "competition" } }
            sort: { fields: order, order: ASC }
            skip: 2
        ) {
            group(field: order) {
                edges {
                    node {
                        name
                        link
                    }
                }
            }
        }
        allContentfulLibraryFile {
            nodes {
                fileName {
                    file {
                        url
                    }
                    description
                }
            }
        }
    }
`
