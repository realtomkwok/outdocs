import React from "react"
import tw, { css, styled, TwComponent } from "twin.macro"
import { SerializedStyles } from "@emotion/core"
// import ArrowForwardIcon from "@material-ui/icons/ArrowForward"
// import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import Link from "utils/Link"

type BtnProps = {
    to: string
    btnText: string
    styles: SerializedStyles
    isActive: boolean
    disabled: boolean
    activeClassName: undefined
    partiallyActive: boolean
}

const defaultProps: Omit<BtnProps, "btnText" | "styles"> = {
    activeClassName: undefined,
    partiallyActive: true,
    disabled: false,
    isActive: true,
    to: undefined,
}

TextBtn.defaultProps = defaultProps
OutlinedBtn.defaultProps = defaultProps

function ButtonBase(props: Omit<BtnProps, "isActive" | "disabled">) {
    const TextWrapper: TwComponent<"div"> = styled.div`
        ${tw`inline-flex flex-row items-start relative top-1`}
    `
    const Text: TwComponent<"div"> = styled.div`
        ${tw`flex-auto font-bold text-button`};
        baseline-shift: 10%;
    `
    // const Icon: TwComponent<"div"> = styled.div`${tw`flex-auto`}`

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
        ${tw`text-left`} ${props.isActive ? tw`text-black` : tw`text-inactive`}
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
        ${tw`px-3 border-2 border-solid`} ${!props.disabled
            ? tw`bg-transparent border-black text-black transition-colors duration-150 hover:text-white hover:bg-black `
            : tw`bg-disabled border-disabled text-disabledText cursor-not-allowed`}
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

TextBtn.defaultProps = defaultProps
OutlinedBtn.defaultProps = defaultProps

export { TextBtn, OutlinedBtn }
