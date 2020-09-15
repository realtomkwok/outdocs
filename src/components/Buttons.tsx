import React from "react"
import tw, { css, styled } from "twin.macro"
import { SerializedStyles } from "@emotion/core"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import Link from '../utils/Link'

type BtnProps = {
    to: string
    btnText: string
    styles: SerializedStyles,
    isActive: boolean
    activeClassName: undefined
    partiallyActive: boolean
}

const defaultProps: Pick<BtnProps, "activeClassName" | "partiallyActive"> = {
    activeClassName: undefined,
    partiallyActive: undefined
}

TextBtn.defaultProps = defaultProps
OutlinedBtn.defaultProps = defaultProps

function ButtonBase(props: Omit<BtnProps, "isActive">) {
    const TextWrapper = styled.div`${tw`inline-flex flex-row items-start`}` 
    const Text = styled.div`${tw`flex-auto font-bold text-button`}; baseline-shift:10%`
    const Icon = styled.div`${tw`flex-auto`}`
    
    return (
        <button css={[tw`py-2`, props.styles]}>
            <Link
                to={props.to}
                activeClassName={props.activeClassName}
                partiallyActive={props.partiallyActive}
            >
                <TextWrapper>
                    <Text>{props.btnText}</Text>
                    {/* <Icon>
                        <ChevronRightIcon />
                    </Icon> */}
                </TextWrapper>
            </Link>
        </button>
    )
}

function TextBtn(props: Omit<BtnProps, "styles">) {
    const styles = css`
        ${tw`text-left`} ${props.isActive
            ? tw`text-black`
            : tw`text-gray-500`}
    `
    return (
        <ButtonBase
            styles={styles}
            to={props.to}
            activeClassName={props.activeClassName}
            partiallyActive={props.partiallyActive}
            btnText={props.btnText}
        />
    )
}

function OutlinedBtn(props: BtnProps) {
    const styles = css`
        ${tw`px-3 border-2 border-solid`} ${props.isActive
            ? tw`bg-transparent border-black text-black`
            : tw`bg-gray-400 border-gray-400 text-gray-700`}
    `

    return (
        <ButtonBase
            styles={styles}
            to={props.to}
            activeClassName={props.activeClassName}
            partiallyActive={props.partiallyActive}
            btnText={props.btnText}
        />
    )
}


export { TextBtn, OutlinedBtn }