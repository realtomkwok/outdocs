import React from "react"
import tw, { styled } from "twin.macro"
// import styled from "styled-components"

type LogoProps = {
    isWhite: boolean
}

const SVG = styled.svg<{ isWhite: boolean }>`
    ${props => (props.isWhite ? tw`fill-white` : tw`fill-black`)};
    height: 100%;
`

function BrandName(props: LogoProps) {
    return (
        <SVG viewBox="0 0 328.98 82.3" isWhite={props.isWhite}>
            <path d="M13.22 82.14H9.65v-5.55H1.82v-9.45h7.83v-3.42h3.57v3.42H21v9.43h-7.78zm-3.57-8.3v-3.93H5v3.93zm8 0v-3.93h-4.43v3.89zm26.75 7.59H24.85v-17H44.4zM41 78.82V67H28.09v11.8zm-1.13-1.36H29.34v-2h3.85v-1.61h-3v-2.12h3V70.5h-3.54v-2.19h10v2.19h-3.53v1.23h3.06v2.12h-.5a10.76 10.76 0 011 1.21l-.77.37h.95zM37.8 75.7c-.33-.41-.72-.89-1.07-1.26l1-.49h-1.45v1.75zm29.89 5.73H48.15v-17h19.54zm-3.4-2.61V67h-12.9v11.8zm-1.13-1.36H52.63v-2h3.86v-1.61h-3v-2.12h3V70.5H53v-2.19h9.9v2.19h-3.49v1.23h3.07v2.12H62a9.94 9.94 0 011 1.21l-.77.37h.94zm-2.07-1.76c-.33-.41-.72-.89-1.07-1.26l1-.49h-1.44v1.75zM80 64.5c-.23.62-.9 2.27-1.21 3l-.08.19c0 .14-.1.26-.15.39l-.08.2c-.39.87-.76 1.74-1.07 2.4a6.09 6.09 0 011.75 4 3 3 0 01-1.32 2.72 3.28 3.28 0 01-1.48.45 13.51 13.51 0 01-1.51 0l-.76-2.17v6.41h-3V64.5m3.73 11a2.28 2.28 0 00.76-.14 1.35 1.35 0 00.58-1A5 5 0 0074.49 71a29 29 0 001.32-4h-1.73v8.45a6.58 6.58 0 00.72.04zm5.28 5.16l-2.31-1.79a13.22 13.22 0 002.45-5.12l3 .58a21.18 21.18 0 01-3.16 6.32zm2.15 1.45L82 79.27h1.48c.27 0 .38-.08.38-.21v-6.91h-4.25v-2.6h12.33v2.6h-4.72v6.93c0 1.24-.23 2.09-1.16 2.54a8.74 8.74 0 01-3.83.48zm8.45-14.7h-9.84v-2.6h9.84zm-1.21 13.26a23.47 23.47 0 00-1.86-6.23l2.58-.8a24.2 24.2 0 012.1 6.1zm6.94 1.63l-2.84-1.69c2.22-2.52 2.49-6.75 2.49-9.36v-4.58h7.51c-.25-.68-.7-1.72-1-2.38l3.38-.72a18 18 0 011.24 2.68l-1.65.42h7.73v8.1h-14c-.29 2.37-1.14 5.57-2.86 7.53zM110 72.15v-2.86H99.44v2.86zm8.93 9.97l-1.5-2.77a13 13 0 005.34-3.79c-.77-.58-2.11-1.34-2.81-1.84l2-1.94c.52.37 1.45.87 2.11 1.32a18 18 0 001.22-3.88h-3.1a19.57 19.57 0 01-3 5l-2.37-2.07c1.67-1.63 3-5.36 3.63-8.47l3.22.51c-.17.72-.43 1.63-.64 2.35h6.17c-.92 7.46-4.6 13.29-10.27 15.58zm14.34 0h-3.36V63.74h3.36v6.7l1.25-.76c.52.53 1.2 1.17 1.88 1.85l.29.29.15.15.08.08.16.16c.73.73 1.41 1.43 1.88 2l-2.72 1.88a27.59 27.59 0 00-3-3.28zm20.73-9h-13.43V71h4.93c-.05-.11-.13-.31-.19-.41l1.94-.27h-5.74v-5.9h11.6v3.5a14.09 14.09 0 005.07-3.92l3 1.09a21.14 21.14 0 01-5.85 4.91 20.86 20.86 0 00-2.22-1.82v2.13h-4.29c.12.2.28.47.39.68H154zm-9.4 9l-.66-1.77a13.5 13.5 0 01-1.34 1.42l-1.84-1.6A10.67 10.67 0 00142.4 78h-.4v-3.94h10.58V78h-1.4c.24.3.49.64.74 1l.12.17a11.48 11.48 0 011 1.62l-2.55.9a10.53 10.53 0 00-.91-1.72l-.12-.16c-.21-.39-.44-.75-.64-1.08V80a1.75 1.75 0 01-1.3 1.82 8.56 8.56 0 01-2.97.34zm.53-2.19c.21 0 .29-.08.29-.23v-2H143l2.12.52a12.82 12.82 0 01-1 1.71zm4.68-13.17v-.75h-5.21v.75zm0 1.85v-.72h-5.21v.72zm-.32 7.57V75.1h-4.52v1.12zm-.62 2.14l1.83-.62h-1.83zm5.79 3.78l-1.5-2.54a13.85 13.85 0 005.84-4.77l2.93.95a18.09 18.09 0 01-7.32 6.4zm.42-6.36l-1.47-2.33a17.25 17.25 0 005.09-4l2.89 1.07a24.22 24.22 0 01-6.59 5.3zm20.57 6.42l-.91-2.16a27.35 27.35 0 01-3.74 1.43l-.92-2.16A23.06 23.06 0 00177 76.4a2.79 2.79 0 00-.15-.39 22.73 22.73 0 01-5.63 2.41l-.78-1.87a20.66 20.66 0 005.42-2l-.22-.22a28.9 28.9 0 01-4.85 1.59l-.79-1.87a17.76 17.76 0 003.65-1.34h-2.33V70l-.33.23-1.8-1.63-.21.08v13.44h-3.17V73c-.35.31-.66.68-.74.76l-2-2.6a20.7 20.7 0 004.85-7.4l3.07.87c-.45 1-.8 2.32-1.38 3.34a13.81 13.81 0 004.11-4.25l3.23.51a6.87 6.87 0 00-.59.89h6.15l-2.09 2.82H184v4.77h-6.25a4.11 4.11 0 00-.35.27 7.5 7.5 0 011.77 1.79 26.72 26.72 0 003.45-1.83l2.08 1.73-.78.35-.17.08c-.31.13-.64.29-.95.4a6.76 6.76 0 002.56 3.4l-1.55 2.25a8.56 8.56 0 01-3.28-4.75l-.57.19c.53 1.85.1 3.85-.68 4.62a3.11 3.11 0 01-2.38 1c-.35-.03-.82-.03-1.25-.05zM177 67.94c.22-.22.47-.53.68-.76h-3.16c-.12.15-.51.52-.76.76zm-.77 3a5.89 5.89 0 00.38-1.32h-2.44V71zm0 8.89a1 1 0 00.91-.42 1.79 1.79 0 00.15-.76 12.71 12.71 0 01-1.18.62l-.18.1c-.35.15-.68.31-1 .46.43.06 1.01.04 1.31.04zm5.16-8.83v-1.34h-2.13A8.25 8.25 0 01179 71zm6.51 11.24l-.67-2a6.4 6.4 0 002.46-1h-1.86v-1.9h2.91c0-.2.08-.37.1-.55h-3.34v-2h4.89a3.19 3.19 0 00-.35-.63l2.17-.19h-4.52v-4.13h16.17V74H202l1.9.21-.41.61h4.43v2h-14.09c-.1.18 0 .35-.06.55h4.13a6.24 6.24 0 01-.08.81c-.19 1.71-.5 2.74-1 3.17a2.55 2.55 0 01-1.49.56A20.11 20.11 0 01193 82l-.76-1.71c-.76.79-2.06 1.43-4.34 1.95zm18.5-13.33h-17.21v-1.58H196v-.6h-8.48v-2H196v-1h3.53v1H208v2h-8.5v.6h6.87zm-12.67 11.18a1.63 1.63 0 00.72-.18 1.2 1.2 0 00.29-.62H193a3.86 3.86 0 01-.58.78c.49.02.98.04 1.31.02zm9-7.7v-1h-10.09v1zm-2.64 2.42c.1-.28.22-.59.28-.82h-4.86a2.27 2.27 0 01.49.82zm1.6 7.31h-2.82v-4.89H207v4.89h-2.91v-.36h-2.4zm2.4-2.1V79h-2.4v1zm20.17 2.12h-3.53v-3.86h-10.29v-2.7h3.48v-4.35l-.1.1-.11.12a10.46 10.46 0 01-.88.79l-2.17-2.36c1.53-1.09 3.28-3.94 4.15-6.27l3.46.75c-.18.43-.37 1-.6 1.4h12.65v2.76h-6.06v2.06h5.54v2.62h-5.54v2.38h7.36v2.7h-7.36zm-3.53-11.56v-2.06H216a19.37 19.37 0 01-1.54 2.06zm0 5V73.2h-3.39v2.38zM240.36 74h-3.14v-4.16l-.16.09-.14.1c-.48.31-1 .64-1.65 1l-1.55-2.52a17.33 17.33 0 005.73-4.89l3.16 1a20.46 20.46 0 01-2.25 2.46zm5.84 8.19h-3.51v-3.5h-8.79V76h8.79v-2.09h3.51V76h8.68v2.72h-8.68zm4.31-8.58h-.85c-3.89 0-4.82-1-4.82-3.24v-.09c-1 .23-1.9.48-2.75.66-.18-.66 0 0-1.13-2.26 1.22-.27 2.84-.66 3.88-1v-3.61h3.32v2.39a25.19 25.19 0 004.06-2l2.23 2.25c-.7.37-1.45.72-2.25 1.07l-.17.1-.18.07-.19.06-.18.08a35.08 35.08 0 01-3.32 1.24v1c0 .7.24.84 1.73.84h.62c1.38 0 1.57-.41 1.65-1.58l2.8.47c-.35 2.61-1.19 3.5-4.45 3.5zm-8.42-2.67L241 68.63c1.22-.27 2.84-.66 3.88-1M4.93 3.71H0V.41h14.87v3.3h-5v9.64h-5zm11.4-3.3h5V5h5.78V.41H32v12.94h-4.94V8.27h-5.78v5.08h-5zm18.23 0h14.65v3.3h-9.7v1.43h8v3.3h-8v1.61h10.3v3.3H34.56zM57 .41h5v12.94h-5zm7.55 0h5.59l5.49 7.08V.41h5v12.94h-5.48l-5.65-7v7h-5zM87 3.71h-5V.41h14.91v3.3h-5v9.64H87zM98.37.41H113v3.3h-9.7v1.43h8v3.3h-8v1.61h10.31v3.3H98.37zm17.24 0h9.59c2.5 0 3.14.08 4 .44a3.33 3.33 0 011.8 3.28 3.75 3.75 0 01-.74 2.47 3 3 0 01-1.8.85c1.94.57 2.15 1 2.27 4.27 0 1 .06 1.15.35 1.63h-5.19a16.85 16.85 0 01-.15-1.7c-.12-2.74-.29-2.93-2.39-2.93h-2.81v4.63h-5zM123.84 6a2.68 2.68 0 001.4-.21 1.3 1.3 0 00.5-1.09c0-.93-.45-1.24-1.86-1.24h-3.32V6zM133.2.41h5.59l5.49 7.08V.41h4.95v12.94h-5.44l-5.64-7v7h-5zm22.48 0h6.54l5.18 12.94H162l-.54-1.18h-5.28l-.48 1.18h-5.19zm4.79 8.46l-1.67-4.76-1.74 4.76zm10.72-5.16h-4.93V.41h14.87v3.3h-5v9.64h-4.95zM182.6.41h5v12.94h-5zm22.62 1.41c1.34 1.07 2 2.76 2 5.07 0 4.68-2.8 6.89-8.76 6.89-3.24 0-5.28-.54-6.87-1.82-1.36-1.11-2-2.74-2-5.19a6.12 6.12 0 012-4.95C193.16.54 195.24 0 198.41 0s5.22.54 6.81 1.82zm-10.17 5q0 3.64 3.37 3.65c2.2 0 3.34-1.24 3.34-3.59s-1.14-3.59-3.35-3.59-3.36 1.25-3.36 3.54zM209.22.41h5.59l5.49 7.08V.41h4.95v12.94h-5.43l-5.65-7v7h-4.95zm22.48 0h6.54l5.18 12.94H238l-.54-1.18h-5.28l-.49 1.18h-5.18zm4.79 8.46l-1.66-4.76-1.75 4.76zm8.06-8.46h4.95v9.64h9.26v3.3h-14.21zM16.15 22.16c1.34 1.07 2 2.76 2 5.07 0 4.68-2.8 6.89-8.76 6.89-3.24 0-5.28-.54-6.87-1.83-1.36-1.1-2-2.73-2-5.18a6.12 6.12 0 012-4.95c1.58-1.28 3.65-1.82 6.82-1.82s5.22.54 6.81 1.82zM6 27.17c0 2.43 1.12 3.65 3.38 3.65s3.33-1.24 3.33-3.59-1.14-3.59-3.35-3.59S6 24.88 6 27.17zm19-6.42v6.63c0 2.45.8 3.42 2.82 3.42s2.81-1 2.81-3.42v-6.63h5v6.85c0 2.64-.21 3.51-1.1 4.54-1.17 1.34-3.3 2-6.68 2-3.73 0-5.92-.76-7-2.41-.6-.93-.76-1.78-.76-4v-7zm16.87 3.3h-4.93v-3.3h14.87v3.3h-5v9.64h-5zm11.4-3.3h8.58c2.66 0 3.92.21 5.07.83 1.92 1.05 2.89 3 2.89 5.8q0 4.52-3.26 5.83c-1 .37-2 .48-4.62.48h-8.66zm7.34 9.64c1.69 0 2.66-.21 3.12-.68a3.44 3.44 0 00.78-2.48c0-1.67-.64-2.76-1.84-3.05a6.89 6.89 0 00-2.12-.13h-2.33v6.34zm26.28-8.23c1.34 1.07 2 2.76 2 5.07 0 4.68-2.79 6.89-8.75 6.89-3.24 0-5.28-.54-6.87-1.83-1.36-1.1-2-2.73-2-5.18a6.12 6.12 0 012-4.95c1.57-1.28 3.65-1.82 6.81-1.82s5.22.54 6.81 1.82zm-10.17 5q0 3.64 3.38 3.65c2.19 0 3.34-1.24 3.34-3.59s-1.15-3.59-3.36-3.59-3.36 1.25-3.36 3.54zm29.28-5q2 1.61 2 5.07c0 4.68-2.8 6.89-8.76 6.89-3.24 0-5.28-.54-6.87-1.83-1.36-1.1-2-2.73-2-5.18a6.12 6.12 0 012-4.95c1.57-1.28 3.65-1.82 6.81-1.82s5.2.54 6.82 1.82zm-10.18 5q0 3.64 3.38 3.65c2.2 0 3.34-1.24 3.34-3.59s-1.14-3.59-3.36-3.59-3.38 1.25-3.38 3.54zM110 20.75h9.59c2.5 0 3.14.07 4 .44a3.33 3.33 0 011.79 3.28 3.77 3.77 0 01-.74 2.47 3 3 0 01-1.8.85c1.94.57 2.15.95 2.27 4.27 0 1 .06 1.15.35 1.63h-5.19a17.14 17.14 0 01-.15-1.71c-.12-2.73-.29-2.93-2.39-2.93h-2.81v4.64h-5zm8.23 5.57a2.55 2.55 0 001.4-.22 1.26 1.26 0 00.5-1.08c0-.94-.45-1.25-1.86-1.25h-3.32v2.55zm14.27-5.57h8.58c2.66 0 3.92.21 5.06.83 1.93 1.05 2.89 3 2.89 5.8 0 3-1.08 4.95-3.26 5.83-1 .37-2 .48-4.61.48h-8.66zm7.34 9.64c1.68 0 2.65-.21 3.12-.68a3.49 3.49 0 00.78-2.48c0-1.67-.64-2.76-1.85-3.05a6.76 6.76 0 00-2.11-.13h-2.33v6.34zm26.28-8.23c1.34 1.07 2 2.76 2 5.07 0 4.68-2.8 6.89-8.76 6.89-3.24 0-5.27-.54-6.87-1.83-1.36-1.1-2-2.73-2-5.18a6.12 6.12 0 012-4.95c1.58-1.28 3.65-1.82 6.82-1.82s5.22.54 6.81 1.82zm-10.17 5c0 2.43 1.12 3.65 3.38 3.65s3.33-1.24 3.33-3.59-1.14-3.59-3.35-3.59-3.31 1.25-3.31 3.54zm31.43 1.7a4.46 4.46 0 01-2.25 3.82c-1.64 1-3.46 1.42-6.68 1.42s-5-.49-6.56-1.71a6.3 6.3 0 01-2.31-5.24 6 6 0 012.25-5.08c1.63-1.21 3.69-1.73 6.73-1.73 3.52 0 5.89.7 7.42 2.13a5 5 0 011.4 3.23h-5.69c-.41-1.5-1.26-2.06-3.11-2.06-2.33 0-3.55 1.18-3.55 3.43s1.3 3.73 3.55 3.73a3.57 3.57 0 002.27-.64 3.32 3.32 0 00.84-1.3zm6.62-8.11v6.63c0 2.45.8 3.42 2.81 3.42s2.82-1 2.82-3.42v-6.63h5v6.85c0 2.64-.22 3.51-1.11 4.54-1.16 1.34-3.3 2-6.68 2-3.72 0-5.92-.76-7-2.41-.6-.93-.76-1.78-.76-4v-7zm13 0h8.13l2.08 5.93 2-5.93h8.07v12.94h-4.98v-8.93l-3.12 8.93h-4.08l-3.18-8.93v8.93H207zm22.8 0h14.65v3.3h-9.7v1.43h8v3.3h-8v1.61h10.3v3.3H229.8zm17.2 0h5.59l5.49 7.08v-7.08h4.95v12.94h-5.43l-5.65-7v7h-5zm22.46 3.3h-4.93v-3.3h14.87v3.3h-5v9.64h-5zm13.96-3.3H290l5.18 12.94h-5.41l-.55-1.18h-5.32l-.48 1.18h-5.18zm4.79 8.46l-1.67-4.76-1.74 4.76zm8.06-8.46h9.59c2.5 0 3.14.07 4 .44a3.34 3.34 0 011.78 3.28 3.77 3.77 0 01-.74 2.47 3 3 0 01-1.8.85c1.94.57 2.15.95 2.27 4.27 0 1 .06 1.15.35 1.63h-5.18a13.88 13.88 0 01-.16-1.71c-.11-2.73-.29-2.93-2.39-2.93h-2.81v4.64h-5zm8.23 5.57a2.53 2.53 0 001.4-.22 1.26 1.26 0 00.5-1.08c0-.94-.44-1.25-1.86-1.25h-3.32v2.55zm13.4 4.11l-6-9.68h5.82l2.74 4.79 2.77-4.79H329l-6.11 9.68v3.26h-5zM1.07 41.08h14.81v3.3H6v1.52h8.15v3.3H6V54H1.07zm16.58 0h5V54h-5zm7.53 0h4.95v9.65h9.26V54H25.18zm15.72 0H49L51.11 47l2-5.94h8.08V54h-4.95v-8.9L53.11 54H49l-3.15-8.9V54h-5zm28.02 0h14.81v3.3h-9.86v1.52H82v3.3h-8.13V54h-5zm16.54 0h14.65v3.3h-9.7v1.44h8v3.3h-8v1.61h10.31V54H85.46zm23.43 9.07c.45.72 1.09 1 2.31 1s1.77-.29 1.77-.84c0-.36-.2-.56-.61-.68a24.81 24.81 0 00-3.66-.44 19.91 19.91 0 01-4.08-.8 3.23 3.23 0 01-2.49-3.24c0-2.93 2.86-4.46 8.29-4.46 2.76 0 4.8.42 6.12 1.28a4.28 4.28 0 012 2.93H112c-.31-.82-1-1.19-2.32-1.19-1 0-1.67.33-1.67.86s.42.76 4.42 1.16a14.09 14.09 0 014.06.78 3.4 3.4 0 012.38 3.38c0 3.08-2.77 4.56-8.57 4.56a13.43 13.43 0 01-6.18-1.09 3.59 3.59 0 01-2.13-3.2zm15.76-5.77h-4.93v-3.3h14.87v3.3h-5V54h-4.95zm11.42-3.3h5V54h-5zm6.23 0h5.42l3.28 7.83 3.18-7.83h5.2l-5.51 13h-5.8zm20.95 0h6.54L175 54h-5.41l-.59-1.15h-5.28l-.47 1.15h-5.18zm4.75 8.47l-1.67-4.76-1.74 4.76zm8.1-8.47h5v9.65h9.26V54H176.1zm36.07 1.42c1.34 1.07 2 2.76 2 5.07 0 4.67-2.8 6.89-8.76 6.89-3.24 0-5.28-.55-6.87-1.83-1.36-1.1-2-2.73-2-5.18a6.12 6.12 0 012-5c1.58-1.28 3.65-1.82 6.81-1.82s5.23.59 6.82 1.87zm-10.17 5q0 3.65 3.37 3.65c2.2 0 3.34-1.24 3.34-3.59S207.57 44 205.35 44 202 45.22 202 47.51zm14.17-6.42H231v3.3h-9.86v1.52h8.15v3.3h-8.15V54h-5zm38.98 8.12a4.44 4.44 0 01-2.25 3.8c-1.63 1-3.46 1.42-6.68 1.42s-5-.49-6.56-1.71a6.33 6.33 0 01-2.31-5.24 6.07 6.07 0 012.25-5.09c1.63-1.2 3.69-1.72 6.74-1.72 3.51 0 5.88.7 7.41 2.13a4.91 4.91 0 011.4 3.22h-5.69c-.41-1.49-1.26-2.05-3.1-2.05-2.33 0-3.56 1.18-3.56 3.43s1.3 3.73 3.56 3.73a3.59 3.59 0 002.27-.64 3.44 3.44 0 00.83-1.3zm1.92-8.12H262v4.57h5.79v-4.57h4.95V54h-4.95v-5H262v5h-4.95zm18.39 0h5V54h-5zm7.54 0h5.59l5.49 7.09v-7.09H299V54h-5.43l-5.65-7v7H283zm22.47 0H312l5.19 13h-5.42l-.54-1.18H306l-.53 1.1h-5.18zm4.8 8.47l-1.67-4.76-1.75 4.76z" />
        </SVG>
    )
}

function Logo2020(props: LogoProps) {
    return (
        <SVG viewBox="0 0 227.83 132.58" isWhite={props.isWhite}>
            <g>
                <path
                    d="M95.75 132.58l-1.34-3.86a12.93 12.93 0 004.86-2h-3.68V123h5.74c.08-.38.15-.72.19-1.07H95v-4h9.63a6.39 6.39 0 00-.69-1.23l4.29-.38h-8.96v-8.18h31.85v8.18h-7.61l3.74.42-.8 1.19h8.72v4h-27.76c-.19.35-.08.69-.11 1.07h8.14a13.73 13.73 0 01-.15 1.61c-.38 3.36-1 5.39-2 6.23a5.12 5.12 0 01-3 1.11 41.45 41.45 0 01-4.62.11l-1.49-3.36c-1.4 1.59-3.96 2.85-8.43 3.88zM132.19 107H98.27v-3.75h13.42V102H95v-3.91h16.71v-1.91h7v1.91h16.69V102h-16.75v1.18h13.54zm-25 21.38a3.19 3.19 0 001.41-.35 2.17 2.17 0 00.58-1.22h-3.38a6.56 6.56 0 01-1.14 1.53c.95 0 1.91.04 2.56 0zM125 112.89v-1.34h-19.92v1.34zm-5.2 5c.19-.54.42-1.15.54-1.61h-9.56a4.65 4.65 0 011 1.61zm3.14 14.41h-5.55v-9.63h16v9.63h-5.73v-.72h-4.76zm4.74-4.43v-1.49h-4.78v1.49zm39.74 4.47h-7v-7.61h-20.27v-5.32H147v-8.51l-.2.19-.23.23a21.06 21.06 0 01-1.72 1.57l-4.28-4.67c3-2.14 6.46-7.76 8.18-12.35l6.81 1.5c-.34.83-.73 1.87-1.19 2.75h24.94v5.43h-11.93v4h10.89v5.16h-10.89v4.7h14.49v5.32h-14.49zm-7-22.79v-4h-9.33a37.73 37.73 0 01-3 4zm0 9.86v-4.7h-6.69v4.7zm38.66-3.21h-6.19v-8.1l-.31.19-.27.19c-.95.61-1.91 1.26-3.25 2l-3.06-5c3.79-1.72 8.68-6 11.28-9.64l6.24 1.91a40.77 40.77 0 01-4.44 4.86zm11.51 16.14h-6.92v-6.81h-17.32v-5.35h17.32v-4h6.92v4h17.09v5.35h-17.09zm8.49-16.9h-1.68c-7.65 0-9.49-1.87-9.49-6.39v-.19c-1.91.46-3.74 1-5.43 1.3-.34-1.3 0 0-2.21-4.43a76.15 76.15 0 007.64-2v-7h6.54v4.71a50 50 0 008-3.94l4.4 4.43c-1.37.73-2.87 1.42-4.43 2.11l-.35.19-.34.15-.38.11-.35.16c-2.14.91-4.36 1.75-6.54 2.44v2c0 1.38.46 1.65 3.41 1.65h1.22c2.72 0 3.1-.81 3.25-3.1l5.5.92c-.69 5.17-2.34 6.93-8.76 6.93zm-16.6-5.28l-2.21-4.43a76.15 76.15 0 007.64-2m-69.78-75.54c.23.2.49.37.73.55h30.81c.24-.18.49-.35.72-.55 3-2.6 4.69-6.67 4.69-11.54s-1.66-9-4.69-11.59C166.51 1.75 161 0 154.26 0s-12.34 1.8-16.13 5.06a15.11 15.11 0 00-4.68 11.35c0 5.11 1.61 9.13 4.68 11.78zM154.26 8c4.83 0 7.71 3.22 7.71 8.66s-2.88 8.61-7.71 8.61-7.71-3.22-7.71-8.75c0-5.31 2.94-8.52 7.71-8.52zM48.91 28.19c.23.2.49.37.73.55h30.81c.24-.18.49-.35.72-.55 3-2.6 4.68-6.67 4.68-11.54s-1.65-9-4.68-11.59C77.29 1.75 71.76 0 65 0S52.7 1.8 48.91 5.06a15.11 15.11 0 00-4.68 11.35c0 5.11 1.61 9.13 4.68 11.78zM65 8c4.83 0 7.71 3.22 7.71 8.66s-2.84 8.6-7.71 8.6-7.67-3.26-7.67-8.75C57.33 11.21 60.26 8 65 8zm40.77 1.08a10.77 10.77 0 015.11-1c3.45 0 5.21.8 5.21 2.37 0 1.22-1.14 1.89-4.64 2.64C96 16 90.63 19.49 89.24 28.74h40.51v-4.33H103c2.6-1.52 3.55-1.8 9.74-2.65 6.44-.9 9-1.42 11.35-2.27 4.26-1.56 6.34-4.31 6.34-8.28 0-7.38-7-11.21-20.29-11.21C102.65 0 97 1.23 93.76 3.64c-2.93 2.13-4.21 4.54-4.54 8.56h14.66a3.9 3.9 0 011.89-3.12zm-89.22 0a10.77 10.77 0 015.11-1c3.45 0 5.21.8 5.21 2.37 0 1.22-1.14 1.89-4.64 2.64C6.76 16 1.41 19.49 0 28.74h40.53v-4.33H13.81c2.6-1.52 3.55-1.8 9.74-2.65 6.44-.9 9-1.42 11.35-2.27 4.26-1.56 6.34-4.31 6.34-8.28C41.24 3.83 34.29 0 21 0 13.43 0 7.8 1.23 4.54 3.64 1.61 5.77.33 8.18 0 12.2h14.66a3.9 3.9 0 011.89-3.12zm136.69 36.81h8.45v13.62c0 .27-.23.42-.76.42H158l.12 1.72h9.91a10.44 10.44 0 00.18-2.11V45.89h9.29v-5.12h-24.26z"
                    className="cls-1"
                />
                <path
                    d="M169 50.41a48.61 48.61 0 013.53 11.24h3.27l2.42-.8a47.41 47.41 0 00-4.13-12zm-26.66 11.24v-8.8l1.49 4.29a22.22 22.22 0 003-.12 6.25 6.25 0 002.9-.88c1.65-1 2.6-2.83 2.6-5.35a12 12 0 00-3.44-7.8c.61-1.3 1.34-3 2.11-4.74l.15-.39a5.45 5.45 0 00.3-.76l.16-.38c.61-1.42 1.93-4.67 2.39-5.89h-17.58v30.82zm0-25.85h3.41a58.67 58.67 0 01-2.64 7.72 9.81 9.81 0 013.29 6.62 2.62 2.62 0 01-1.15 2.06 4.34 4.34 0 01-1.49.27 9.2 9.2 0 01-1.42 0zm13.35-4.36h19.39v5.12h-19.39zm4.66 18.74L154.43 49c-1 3.67-2.87 8.11-4.82 10.09l3.26 2.53h2a42 42 0 005.48-11.44zM15.41 61.65h7v-7h15.37V36H22.45v-5.29h-7V36H0v18.65h15.41zm7-20.15h8.79v7.64h-8.75zm-16.1 7.72V41.5h9.1v7.72zm77.55 12.43V30.71h-38.5v30.94zM51.74 35.8h25.43v23.25H51.74zm78.02 25.85V30.71H91.25v30.94zM97.64 35.8h25.42v23.25H97.64z"
                    className="cls-1"
                />
                <path
                    d="M75.68 52.09a24.13 24.13 0 00-2.22-2.64h1.11v-4.63h-6.69v-2.67h7.61v-4.78H53.77v4.78h7.72v2.67h-6.57v4.63h6.57v3.44h-8.41v4.44h23v-4.44H74zm-7.8.8v-3.44h2.9l-2 1c.69.72 1.45 1.68 2.1 2.48zm53.69-.8a23.94 23.94 0 00-2.21-2.64h1.1v-4.63h-6.69v-2.67h7.61v-4.78H99.66v4.78h7.73v2.67h-6.58v4.63h6.58v3.44H99v4.44h23v-4.44h-2.07zm-7.8.8v-3.44h2.91l-2 1c.69.72 1.45 1.68 2.11 2.48zm-12.45 20.18h6.12a35 35 0 01-2.44 7.65c-1.3-.88-3.14-1.87-4.17-2.6l-4 3.82c1.37 1 4 2.49 5.54 3.64A25.51 25.51 0 0191.88 93l1 1.88h8.24c7.58-5.72 12.52-15.35 14.07-27.11H103c.42-1.42.6-1.77.94-3.19l-6.34-1c-1.27 6.12-3.55 12-6.83 15.23l4.66 4.09a37.83 37.83 0 005.89-9.83zm60.84 20.46l.81 1.38h8a33.32 33.32 0 008.48-9l-5.78-1.87c-2.44 4.1-7.67 7.88-11.51 9.49zM53.05 94.91A34.44 34.44 0 0056.16 84h27.49V68H68.43l3.25-.84c-.5-1.37 0 0-1.55-3.6h-7.44c.65 1.3 1.42 3.11 1.92 4.44h-14.8v9c0 4.93-.53 12.8-4.45 17.82zm3.37-21.69h20.76v5.63H56.42zM163 81.41l3 4.59a47.76 47.76 0 0012.81-10.37l-5.7-2.1A33.78 33.78 0 01163 81.41zm.81-4.82h-9.33c-.23-.42-.54-1-.77-1.34h8.45v-4.2c4.36 3.59 3.45 2.6 4.36 3.59A41.61 41.61 0 00178 65l-5.89-2.14a27.66 27.66 0 01-10 7.69v-6.92H139.3v11.62h11.32l-3.83.54c.12.19.27.57.38.8h-9.71v4.17h26.35zm-18.51-9.75h10.25v1.07H145.3zm0 5.12v-1h10.25v1zM144 94.87h9.6a5.5 5.5 0 00.1-.85v-2.67c.39.69.85 1.45 1.27 2.26l.23.34c.18.32.36.64.53 1h5.9a27.88 27.88 0 00-1.63-2.68l-.23-.35c-.5-.72-1-1.45-1.46-2.06h2.76v-8.22h-20.85v8.22h.84a21.57 21.57 0 01-3.33 4.62l.46.43H144zm9.71-3.79v-1.22h3.6zM146 85.15h8.91v1.23H146zm.88 4.71v3.94c0 .3-.15.46-.57.46h-1.92a25.12 25.12 0 001.92-3.37l-4.17-1zm40.3-9.33v14.38h6.23V72.08l.43-.15 3.55 3.21.65-.46V80h4.59a35.47 35.47 0 01-7.19 2.64l1.49 3.63a59.35 59.35 0 009.56-3.13l.42.42c-2.52 1.64-7.84 3.4-10.67 4l1.53 3.67a44.63 44.63 0 0011.09-4.74 4.2 4.2 0 01.31.76c-3.25 2.33-9.6 4.74-13.62 5.66l.86 2h7l1.33-.62.26.62h9.77a11.94 11.94 0 00.26-7.31l1.11-.38a18.86 18.86 0 004.4 7.69h3.22l1.9-2.76c-2.07-1.14-4-3.9-5.05-6.69.61-.23 1.26-.53 1.87-.8l.35-.15 1.53-.69-4.09-3.41a54.71 54.71 0 01-6.81 3.6 14.5 14.5 0 00-3.46-3.52c.19-.19.5-.38.69-.54H223v-9.4h-7.15L220 65h-12.1a14.23 14.23 0 011.1-1.75l-6.34-1a27.54 27.54 0 01-8.11 8.37c1.15-2 1.84-4.62 2.71-6.57l-6-1.72c-2 4.93-5.5 11.09-9.56 14.56l4.03 5.11a20.37 20.37 0 011.45-1.47zm26.5-6.08h3.63v1.61h-4.13a7.23 7.23 0 00.5-1.61zm-6 1.61h-4.06v-1.61h4.82a5.55 5.55 0 01-.8 1.61zm1.87 17.16a1.92 1.92 0 01-1.8.84h-2.48c.57-.3 1.22-.61 1.91-.91l.34-.2a25.06 25.06 0 002.34-1.22 3.25 3.25 0 01-.35 1.49zm-5.24-24.16h6.24c-.42.46-.92 1.07-1.34 1.49h-6.39a18.82 18.82 0 001.45-1.49zm-81.23 25.85V80.07a58.91 58.91 0 015.85 6.46l5.35-3.71c-.92-1-2.25-2.41-3.71-3.86l-.3-.3-.15-.16-.31-.3-.57-.58c-1.34-1.34-2.68-2.6-3.71-3.63l-2.45 1.49V63.62h-6.62v31.29z"
                    className="cls-1"
                />
            </g>
        </SVG>
    )
}

function Cinemadow(props: LogoProps) {
    return (
        <SVG viewBox="0 0 235 100" isWhite={props.isWhite}>
            <path d="M0 0v100h235V0zm18.43 95C10.46 95 5 91.11 5 85s5.5-10 13.43-10 13.49 3.86 13.49 10-5.55 10-13.49 10zM57 87.49C57 92.24 52.83 95 45.32 95s-11.65-2.73-11.65-7.48v-12.1h8.08v11.91c0 1.5.89 2.49 3.57 2.49s3.58-1 3.58-2.49V75.42H57zm23.6-6.87h-7v13.9h-8.14v-13.9h-7v-5.2h22.12zm13.88 13.9H82.55v-19.1h12c8.3 0 12.48 3.22 12.48 9.55s-4.2 9.55-12.57 9.55zm27.42.45c-8 0-13.48-3.86-13.48-10s5.54-10 13.48-10 13.49 3.86 13.49 10S129.82 95 121.88 95zm28.43-5.12c2.18 0 4-.75 4.58-2.57h8.26c-1 4.47-6.15 7.72-13.23 7.72-7.76 0-13.2-3.92-13.2-10.06S142 75 150.38 75c7.48 0 11.66 3.09 12.8 7.75h-8.33c-.61-1.77-2.32-2.6-4.65-2.6-3.18 0-5.11 1.48-5.11 4.8s2.07 4.9 5.22 4.9zM175.88 95c-7.8 0-11.48-2.73-11.73-6.73h8c.18 1.77 1.65 2.2 3.9 2.2s3.33-.43 3.33-1.31-.86-1.26-3.62-1.56l-3.07-.32c-4.61-.48-7.9-2.36-7.9-6 0-3 2.11-6.25 10.83-6.25 6.65 0 10.73 1.88 11.19 6.3h-7.47c-.18-1.15-1-1.82-3.43-1.82-2.22 0-3.08.48-3.08 1.23s.86 1.13 2.4 1.29l3.07.32c6.37.67 9.23 2.5 9.23 5.9-.03 4.07-4 6.75-11.65 6.75z" />
        </SVG>
    )
}

export { BrandName, Logo2020, Cinemadow }