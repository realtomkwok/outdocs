import React from "react"
import tw from "twin.macro"
import { graphql } from "gatsby"
import { FluidObject } from "gatsby-image"

import Layout from "components/Layout"
import Header from "components/Header"
import { PersonCard } from "components/Cards"

type DataProps = {
    data: {
        Guests: {
            nodes: GuestProps[]
        }
    }
}

type GuestProps = {
    name: string
    titles: string
    avatar: {
        description: string
        fluid: FluidObject
    }
}

export default function Index({ data }: DataProps) {
    const Main = tw.div`py-16`
    const CardWrapper = tw.div`grid lg:grid-cols-4 gap-10`

    const guestsData: GuestProps[] = data.Guests.nodes

    return (
        <Layout hasPadding title="嘉宾">
            <Header category="carnival" titleId={2} />
            <Main>
                <CardWrapper>
                    {guestsData.map((item, i) => (
                        <PersonCard
                            size="large"
                            name={item.name}
                            description={item.titles}
                            imgFluid={item.avatar.fluid}
                            imgAlt={item.avatar.description}
                            key={i}
                        />
                    ))}
                </CardWrapper>
            </Main>
        </Layout>
    )
}

export const query = graphql`
    {
        Guests: allContentfulEventsGuests(
            filter: { node_locale: { eq: "zh-Hans" } }
        ) {
            nodes {
                name
                titles
                avatar {
                    description
                    fluid(quality: 100) {
                        ...GatsbyContentfulFluid_withWebp
                    }
                }
            }
        }
    }
`
