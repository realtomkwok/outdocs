import React from "react"
import { graphql } from "gatsby"
import tw from "twin.macro"

import Layout from "../components/Layout"
import Header from "../components/Header"
import { Body, Subheading2 } from "utils/typography"
import Tag from "components/Tags"

import contacts from "content/Contacts.yaml"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

type DataProps = {
    data: {
        contentfulAboutUs: {
            copy: {
                json: any
            }
        }
    }
}

export default function Home({ data }: DataProps) {
    const Main = tw.main`py-16 grid grid-cols-3 gap-10`
    const Contacts = tw.aside`col-span-1 flex flex-col space-y-4`
    const ContactItems = tw.div`space-y-8`
    const Article = tw.article`col-start-2 col-end-4`

    const typography = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => (
                <div tw="my-4">
                    <Body>{children}</Body>
                </div>
            ),
        },
    }
    const copy: React.ReactNode = documentToReactComponents(
        data.contentfulAboutUs.copy.json,
        typography
    )

    return (
        <Layout title="我们是谁" hasPadding>
            <Header category="about-us" titleId={5} />
            <Main>
                <Contacts>
                    <Subheading2>与我们联系</Subheading2>
                    {contacts.email.map((item, i: number) => (
                        <ContactItems key={i}>
                            <Tag tagStyle="primary">{item.category.zhHans}</Tag>
                            <a href={`mailto:${item.address}`}>
                                <Body>{item.address}</Body>
                            </a>
                        </ContactItems>
                    ))}
                </Contacts>
                <Article>
                    <Body>{copy}</Body>
                </Article>
            </Main>
        </Layout>
    )
}

export const query = graphql`
    {
        contentfulAboutUs(node_locale: { eq: "zh-Hans" }) {
            copy {
                json
            }
        }
    }
`
