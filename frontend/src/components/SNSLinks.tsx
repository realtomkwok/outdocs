import React from "react"
import tw, { styled } from "twin.macro"
import { graphql, useStaticQuery } from "gatsby"
import useHover from "../utils/useHover"

type IconProps = {
    url: string
    link: string
    alt: string
}

type WeChatProps = {
    iconUrl: string
    qrCodeUrl: string
    alt: string
}

const Icon = styled.img`
    ${tw`w-8 ml-6`}
`

function SNSIcon(props: IconProps) {
    return (
        <a href={props.link}>
            <Icon src={props.url} alt={props.alt} />
        </a>
    )
}

function WeChat(props: WeChatProps) {
    const [hoverRef, isHovered] = useHover()
    const PopUp = tw.img`h-20 w-20`

    return (
        <div ref={hoverRef}>
            {isHovered ? (
                <PopUp src={props.qrCodeUrl}></PopUp>
            ) : (
                <Icon src={props.iconUrl} />
            )}
        </div>
    )
}

export default function SNSLinks() {
    const IconList = tw.div`flex flex-row`

    //📖 Declare for nested objects: https://stackoverflow.com/questions/38245081/nested-objects-in-typescriptr
    type imgType = {
        file: fileType
    }

    type fileType = {
        url: string
    }

    type dataType = {
        platform: string
        link: string
        platformIcon: imgType
        id: string
        qrCode: imgType
    }

    const rawSnsData = useStaticQuery(graphql`
        query {
            OtherData: allContentfulSocialNetworks(
                sort: { fields: order, order: ASC }
                filter: { node_locale: { eq: "en-US" }, order: {ne: 5} }
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
                    qrCode {
                        file {
                            url
                        }
                    }
                }
            }
            WeChatData: allContentfulSocialNetworks(
                sort: { fields: order, order: ASC }
                filter: { node_locale: { eq: "en-US" }, order: { eq: 5 } }
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
                    qrCode {
                        file {
                            url
                        }
                    }
                }
            }
        }
    `)
    const snsData: Array<dataType> = rawSnsData.OtherData.nodes
    const WeChatData: Array<dataType> = rawSnsData.WeChatData.nodes

    return (
        <IconList>
            <WeChat
                iconUrl={WeChatData[0].platformIcon.file.url}
                qrCodeUrl={WeChatData[0].qrCode.file.url}
                alt={WeChatData[0].platform}
            />
            {snsData.map(img => (
                <SNSIcon
                    url={img.platformIcon.file.url}
                    alt={img.platform}
                    link={img.link}
                    key={img.id}
                />
            ))}
        </IconList>
    )
}
