import React from "react"
import tw, { TwComponent } from "twin.macro"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import Header from "components/Header"
import { Body, Heading4, Heading1 } from "utils/typography"
import { OutlinedBtn } from "components/Buttons"
import Link from "utils/Link"

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
    const Container = tw.div`py-16 col-span-6 space-y-8`
    const data = {
        zhHans:
            "中国国际户外影像嘉年华（OUTDOCS）旨在用纪录片定格与致敬壮美的世界景观和人类不断进取的探险精神，以影像的力量去传播人们以生命的敬畏与热爱，启发人们对生活的创造力。OUTDOCS通过挖掘、表彰兼具艺术价值和人文关怀的优秀作品、鼓励和支持世界各地优秀创作者，打造体育运动、户外文化、旅行人文、自然探险与环保等题材影像的人文价值高地。",
        enUS:
            "The International Outdoor Documentary Film Festival of China（OUTDOCS）adhered to its goal of recording and paying respect to magnificent nature landscape and indomitable spirit of human beings. With films,  we promotes a positive lifestyle for the public and inspires the creativity of life. By exploring, encouraging  excellent outdoor films and its artistic and cultural contribution, OUTDOCS is striving to  create a humanistic value highland for documentary films on outdoor adventures, sports, travel and humanities, as well as environmental protection.",
    }

    return (
        <Container>
            <Body>
                {data.zhHans}
            </Body>
            <OutlinedBtn
                disabled
                btnText="全球征集已截止"
                styles={undefined}
            ></OutlinedBtn>
        </Container>
    )
}

function Sections(props: { data: SectionProps[] }) {
    const Container: TwComponent<"div"> = tw.div`grid grid-cols-2 h-64 -mx-16`
    const Section: TwComponent<"div"> = tw.div`col-span-1 bg-white space-y-2 p-16`
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
                        <Heading1>{item.edges[0].node.name}</Heading1>
                    </Section>
                </Link>
            ))}
        </Container>
    )
}

export default function Index({ data }: DataProps) {
    const Main: TwComponent<"main"> = tw.main`container mx-auto grid grid-cols-12 gap-10`
    const sectionData: SectionProps[] = data.allContentfulMenuLinks.group

    return (
        <Layout isTop={false}>
            <Header category="competition" titleId={1} />
            <Main>
                <Intro />
            </Main>
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
    }
`
