import React from "react"
import tw, { styled } from "twin.macro"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import Layout from "components/Layout"
import Header from "components/Header"
import { Body, Button, Subheading2 } from "utils/typography"

type DataProps = {
    data: {
        FAQ: {
            group: FaqProps[]
        }
    }
}

type FaqProps = {
    nodes: {
        category: string
        question: string
        answer: {
            json: any //⚠️ type requried!
        }
    }[]
}

function Sidebar(props: { data: FaqProps[] }) {
    const Container = tw.aside`fixed`
    const Item = tw.li`text-black hover:opacity-50 transition duration-150`
    const List = styled.ul`
        ${tw`flex flex-col space-y-2`};
        &:hover > li {
            ${tw`opacity-50`}
        }
        &:hover > li:hover {
            ${tw`opacity-100`}
        }
    `

    return (
        <Container>
            <List>
                {props.data.map((item, i) => {
                    let category = item.nodes[0].category
                    return (
                        <Item key={i}>
                            <AnchorLink to={`/carnival/faq/#${category}`}>
                                <Button>{category}</Button>
                            </AnchorLink>
                        </Item>
                    )
                })}
            </List>
        </Container>
    )
}

function Content(props: { data: FaqProps[] }) {
    const Container = styled.div`
        ${tw`w-2/3`};
        margin-left: 33.3%;
    `
    const List = tw.div`pb-8`
    const ListHeader = tw.div``
    const Divider = tw.div`border-t-2 border-black`
    const ItemWrapper = tw.div`py-8 grid grid-cols-2 gap-10`
    const Item = tw.div`space-y-2`

    return (
        <Container>
            {props.data.map((list, i) => (
                <List key={i} id={list.nodes[0].category}>
                    <ListHeader>
                        <Subheading2>{list.nodes[0].category}</Subheading2>
                        <Divider />
                    </ListHeader>
                    <ItemWrapper>
                        {list.nodes.map((item, i) => {
                            let answer: React.ReactNode = documentToReactComponents(
                                item.answer.json
                            )
                            return (
                                <Item key={i}>
                                    <Subheading2>{item.question}</Subheading2>
                                    <Body>{answer}</Body>
                                </Item>
                            )
                        })}
                    </ItemWrapper>
                </List>
            ))}
        </Container>
    )
}

export default function Index({ data }: DataProps) {
    const Main = tw.main`relative py-16`

    const FaqData: FaqProps[] = data.FAQ.group

    return (
        <Layout hasPadding isTop={false} isDark={false} title="有问必答">
            <Header category="carnival" titleId={2} />
            <Main>
                <Sidebar data={FaqData}></Sidebar>
                <Content data={FaqData}></Content>
            </Main>
        </Layout>
    )
}

export const query = graphql`
    {
        FAQ: allContentfulCarnivalFaq(
            filter: { node_locale: { eq: "zh-Hans" } }
            sort: { fields: categoryId, order: DESC }
        ) {
            group(field: categoryId) {
                nodes {
                    category
                    question
                    answer {
                        json
                    }
                }
            }
        }
    }
`
