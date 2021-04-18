import React from "react"
import tw, { css, styled } from "twin.macro"
import { SerializedStyles } from "@emotion/core"
import Link from "utils/Link"

type BtnProps = {
    to?: string
    btnText: string
    styles?: SerializedStyles
    isActive?: boolean
    isWhite?: boolean
    disabled?: boolean
    activeClassName?: undefined
    partiallyActive?: boolean
}

const defaultProps: Omit<BtnProps, "btnText" | "styles"> = {
    activeClassName: undefined,
    partiallyActive: true,
    disabled: false,
    isActive: true,
    isWhite: false,
    to: undefined,
}

TextBtn.defaultProps = defaultProps
OutlinedBtn.defaultProps = defaultProps

function ButtonBase(props: Omit<BtnProps, "isActive" | "disabled">) {
    const TextWrapper = styled.div`
        ${tw`inline-flex flex-row items-start relative top-1`}
    `
    const Text = styled.div`
        ${tw`flex-auto font-bold text-button`};
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
            isWhite={props.isWhite}
        />
    )
}

function OutlinedBtn(props: Omit<BtnProps, "styles">) {
    const styles = css`
        ${tw`px-3 border-2 border-solid h-12 outline-none`}
        ${
            !props.isWhite
                ? tw`border-black text-black hover:text-white hover:bg-black`
                : tw`border-white text-white hover:text-black hover:bg-white`
        }
        ${
            !props.disabled
                ? tw`bg-transparent transition-colors duration-150 `
                : tw`bg-disabled border-disabled text-disabledText cursor-not-allowed hover:border-disabled hover:text-disabledText hover:bg-disabled`
        }
    `

    return (
        <ButtonBase
            styles={styles}
            to={props.to}
            activeClassName={props.activeClassName}
            partiallyActive={props.partiallyActive}
            btnText={props.btnText}
            isWhite={props.isWhite}
        />
    )
}

TextBtn.defaultProps = defaultProps
OutlinedBtn.defaultProps = defaultProps

export { TextBtn, OutlinedBtn }
