import React from "react"
import tw, { styled } from "twin.macro"
import { graphql, Link, useStaticQuery } from "gatsby"

import wechat from "../img/social_network/wechat.svg"

type IconProps = {
    url: string
    link: string
    alt: string
    id: string
}



// const Icon = tw.object`w-8 ml-6`

const Icon = styled.img`${tw`w-8 ml-6`}`

function SNSIcon(props: IconProps) {
    return (
        <div tw="hover:scale-50">
            <Link key={props.id} to={props.link}>
                <Icon src={props.url} />
            </Link>
        </div>
    )
}

function WeChat() {
    return <Icon src={wechat} />
}

export default function SNSLinks() {
    const IconList = tw.div`flex flex-row`

    //📖 Declare for nested objects: https://stackoverflow.com/questions/38245081/nested-objects-in-typescript
    type platformIconType = {
        file: fileType
    }

    type fileType = {
        url: string
    }

    type dataType = {
        platform: string
        link: string
        platformIcon: platformIconType
        id: string
    }

    const rawSnsData = useStaticQuery(graphql`
        query SNSData {
            allContentfulSocialNetworks(
                sort: { fields: order, order: ASC }
                filter: { node_locale: { eq: "en-US" } }
            ) {
                nodes {
                    platform
                    link
                    platformIcon {
                        file {
                            url
                        }
                    }
                    id
                }
            }
        }
    `)
    const snsData: Array<dataType> =
        rawSnsData.allContentfulSocialNetworks.nodes

    return (
        <IconList>
            <WeChat />
            {snsData.map(img => (
                <SNSIcon
                    url={img.platformIcon.file.url}
                    alt={img.platform}
                    link={img.link}
                    id={img.id}
                />
            ))}
        </IconList>
    )
}
