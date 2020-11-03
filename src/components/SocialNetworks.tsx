import React, { useRef } from "react"
import tw, { TwStyle } from "twin.macro"
import { graphql, useStaticQuery } from "gatsby"
import useHover from "@react-hook/hover"
import SVG from "react-inlinesvg"

import Link from "utils/Link"

type DataProps = {
    socialNetworks: {
        nodes: SNProps[]
    }
}

type SNProps = {
    platform: string
    link: string
    platformIcon: {
        file: {
            url: string
        }
    }
    id: string
    qrCode: {
        file: {
            url: string
        }
    }
}

type IconProps = {
    to: string
    imgSrc: string
    style: TwStyle
    description: string
}

function Icon(props: IconProps) {
    const Wrapper = tw.div`w-8`

    return (
        <Wrapper>
            <Link to={props.to}>
                <SVG
                    src={props.imgSrc}
                    css={props.style}
                    description={props.description}
                />
            </Link>
        </Wrapper>
    )
}

export default function SocialNetworks(props: { isWhite: boolean }) {
    const IconList = tw.div`flex flex-row space-x-6`
    const PopUp = tw.img`h-24 w-24`

    const target = useRef(null)
    const isHovering = useHover(target)

    const data: DataProps = useStaticQuery(graphql`
        {
            socialNetworks: allContentfulSocialNetworks(
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
                    qrCode {
                        file {
                            url
                        }
                    }
                }
            }
        }
    `)
    const snData: SNProps[] = data.socialNetworks.nodes

    return (
        <IconList>
            {snData.map((item, i) => {
                if (item.qrCode !== null) {
                    return (
                        <div ref={target} key={i}>
                            {isHovering ? (
                                <PopUp src={item.qrCode.file.url} />
                            ) : (
                                <Icon
                                    to={item.link}
                                    imgSrc={item.platformIcon.file.url}
                                    style={
                                        props.isWhite
                                            ? tw`fill-white hover:opacity-50`
                                            : tw`fill-black hover:opacity-50`
                                    }
                                    description={item.platform}
                                />
                            )}
                        </div>
                    )
                } else {
                    return (
                        <Icon
                            key={i}
                            to={item.link}
                            imgSrc={item.platformIcon.file.url}
                            style={
                                props.isWhite
                                    ? tw`fill-white hover:opacity-50`
                                    : tw`fill-black hover:opacity-50`
                            }
                            description={item.platform}
                        />
                    )
                }
            })}
        </IconList>
    )
}
