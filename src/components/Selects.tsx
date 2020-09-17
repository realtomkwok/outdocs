import React, { ChangeEvent } from "react"
import tw, { TwComponent } from "twin.macro"
import { Tag } from "utils/typography"

type DropdownType = {
    helperText: string
    options: string[]
    defaultValue: string
    value: string
    onChange: (newValue: string) => void
}

// 📖 Use generics in props in a functional component: https://stackoverflow.com/questions/53958028/how-to-use-generics-in-props-in-react-in-a-functional-component
export default function Dropdown(props: DropdownType) {
    const Container: TwComponent<"div"> = tw.div``
    const Select: TwComponent<"select"> = tw.select`border-black border-2 p-1 text-button font-bold relative top-1`

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        props.onChange(e.target.value)
    }

    return (
        <Container>
            <Tag>{props.helperText}</Tag>
            <Select value={props.value} onChange={handleChange}>
                {/* 🌎 i18n required! */}
                <option value="">不限</option>
                {props.options.map((item, i) => (
                    <option value={item} key={i}>
                        {item}
                    </option>
                ))}
            </Select>
        </Container>
    )
}
