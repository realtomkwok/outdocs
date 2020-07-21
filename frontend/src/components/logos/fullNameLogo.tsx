import React from "react";

function fullNameLogo({ className, fill }: { className: string; fill: string }) {
	return (
		<svg viewBox="0 0 321.19 89.25" className={className}>
			<path
				d="M20.11 74.12v10h-3.67v-.9h-4.63v5.88h-3.7v-5.9H3.5v1H0V74.12h8.11v-3.28h3.7v3.28zm-12 6.34v-3.59H3.5v3.59zm8.33 0v-3.59h-4.63v3.59zM44.21 71.53V89h-3.74v-.9H27.26v.9h-3.55V71.53zm-3.74 14V74.08H27.26v11.44zm-.51-3v2.24H27.84v-2.2h4.42v-1.75h-3.6V78.5h3.6v-1.31h-4.2v-2.42h11.56v2.42h-4.15v1.31h3.68v2.32h-.65a12.08 12.08 0 011.25 1.33l-1 .42zm-4.49 0H37c-.36-.42-.79-.88-1.18-1.27l1.18-.44h-1.53zM68.21 71.53V89h-3.74v-.9H51.26v.9h-3.55V71.53zm-3.74 14V74.08H51.26v11.44zm-.51-3v2.24H51.84v-2.2h4.42v-1.75h-3.6V78.5h3.6v-1.31h-4.2v-2.42h11.56v2.42h-4.15v1.31h3.68v2.32h-.65a12.08 12.08 0 011.25 1.33l-1 .42zm-4.49 0H61c-.36-.42-.79-.88-1.18-1.27l1.18-.44h-1.53zM80.3 72.51c-.64 1.65-1.44 3.61-2.13 5.07a5.29 5.29 0 011.7 3.91 2.74 2.74 0 01-1.27 2.71 4.49 4.49 0 01-1.58.46 14.29 14.29 0 01-1.68.06 5 5 0 00-.7-2.21V89h-3.31V71.59h5.93l.52-.1zm-5.66 9.83a5.93 5.93 0 00.82 0 1.46 1.46 0 00.67-.14c.26-.15.38-.52.38-1A4.51 4.51 0 0075 77.87c.4-1.08.86-2.58 1.2-3.81h-1.56zm9.29-1.15a20.09 20.09 0 01-3.07 6.22A20.53 20.53 0 0078.14 86a14 14 0 002.67-5.38zm4.2-2.13V86c0 1.3-.22 2.11-1.22 2.57a9.18 9.18 0 01-3.82.52 9.22 9.22 0 00-1-2.88h2.06c.31 0 .39-.06.39-.27v-6.88h-4.43v-2.6h13.11v2.6zm3.77-4.59H81.24v-2.59H91.9zm-.58 6a23 23 0 012.31 6.13l-3.12.92a23.51 23.51 0 00-2-6.26zM115.11 73.68v8.6h-3.61v-.86h-10.87c-.31 2.72-1.13 5.75-3 7.83a14.45 14.45 0 00-3.1-1.71c2.43-2.67 2.62-6.64 2.62-9.39v-4.47h7.7a22.84 22.84 0 00-1-2.26l3.5-.7a17 17 0 011.34 2.6l-1.6.36zm-3.61 5.15v-2.56h-10.7v2.56zM129 73.47l2.52.57c-1.08 7.88-4.56 12.64-10.16 14.8a13.18 13.18 0 00-2.92-2.36 13.22 13.22 0 006.12-4c-.84-.61-1.88-1.3-2.64-1.84l2.08-1.97c.58.39 1.37.85 2.09 1.31a15.83 15.83 0 001.25-3.78h-3.07a17.74 17.74 0 01-3 4.77 24.22 24.22 0 00-2.9-1.76c2-1.9 3.38-5.11 4.08-8.39l3.5.5c-.19.75-.4 1.52-.64 2.25h3.07zm9.72 9.44a38.32 38.32 0 00-3.17-3.26v9.44h-3.7V70.86h3.7v6.49l1.3-.75c1.44 1.34 3.76 3.24 4.87 4.43zM156.77 80h-13.85v-2.1h5.3c-.07-.13-.14-.27-.21-.38l1.85-.29h-5.93v-5.72h12v3.4a14.72 14.72 0 005.26-3.76l3.31 1a21.43 21.43 0 01-6.34 4.85 12.86 12.86 0 00-2.16-1.82v2h-4.44a5.72 5.72 0 01.41.67h4.85zM154 84.6a18.39 18.39 0 011.85 3l-2.59 1a19.38 19.38 0 00-1.73-3.19v1.36c0 1.1-.19 1.65-1.1 2a9.26 9.26 0 01-3.19.34 7.93 7.93 0 00-.75-1.88 14.89 14.89 0 01-1.22 1.39 20.5 20.5 0 00-2.33-1.46 10.45 10.45 0 002-2.54h-.5v-4.18h11.13v4.16zm-6.14.56a16.08 16.08 0 01-1.13 1.75h1.08c.24 0 .31-.06.31-.23V84.6h-2.56zm-.62-11.56h5.28v-.46h-5.28zm0 2h5.28v-.46h-5.28zm.4 7.26h4.54v-.66h-4.54zm5.79 1.74h-1.9v.66zm11.9-2a18.53 18.53 0 01-7.51 6.29 11.63 11.63 0 00-2.4-2.19 14.2 14.2 0 006.67-5zm-.4-5.17a24 24 0 01-6.7 5 11.19 11.19 0 00-2.4-2 17.23 17.23 0 005.9-4.11zM188.76 81.53c-.67.29-1.37.58-2.06.85a7 7 0 003.05 3.55 10.1 10.1 0 00-2.14 2 8.52 8.52 0 01-3.41-4.7l-.6.19c.58 1.94.19 3.86-.67 4.68a3.35 3.35 0 01-2.57 1h-1.39a4.88 4.88 0 00-.67-2.2 27.25 27.25 0 01-3.58 1.32 10.9 10.9 0 00-2-1.92 24 24 0 007.71-3c-.05-.14-.12-.25-.17-.38a24.06 24.06 0 01-5.26 2.3 10.77 10.77 0 00-1.8-1.69 21.48 21.48 0 006-2.15 2.76 2.76 0 00-.24-.21 19.19 19.19 0 01-4.37 1.49A13.93 13.93 0 00172.7 81a20 20 0 004.35-1.44h-2.47V77l-.36.23a9.68 9.68 0 00-1.83-1.59v13.42H169v-9.18c-.33.33-.67.65-1 .94a17.79 17.79 0 00-1.82-2.94 19.21 19.21 0 005-7l3.28.82a31.23 31.23 0 01-1.66 3.3 13.71 13.71 0 004.32-4.09l3.24.5c-.19.29-.38.56-.6.84h3.34l.62-.13 1.95 1.19c-.48.54-1 1.11-1.61 1.65h4v4.68h-6.81l-.29.27a7.72 7.72 0 011.8 1.81 32.62 32.62 0 003.74-1.85zM178 74.22q-.33.34-.72.69h3.14c.22-.21.46-.44.7-.69zm1.58 3.41a3.16 3.16 0 00.44-.76h-2.41v.76zm.94 8.74a1.58 1.58 0 00.26-.79 23.52 23.52 0 01-2.23 1.19h1.11a.86.86 0 00.87-.4zm4.3-9.5h-2a2.9 2.9 0 01-.24.76h2.24zM207.84 81.69h4.85v2h-14.81c0 .19 0 .38-.07.58h4.37s0 .51-.08.8c-.21 1.81-.48 2.77-1 3.21a2.74 2.74 0 01-1.64.57 23 23 0 01-2.52.06 4.22 4.22 0 00-.55-1.73 8.46 8.46 0 01-4.25 1.92 5.9 5.9 0 00-1.56-1.82 7.39 7.39 0 003-1.09h-2v-1.91h3.15a4.09 4.09 0 00.09-.58h-3.62v-2h5.23a2.51 2.51 0 00-.36-.64l2.11-.19h-4.68v-4.12h16.85v4.11h-4.17l2 .21zm5-9.87v2h-9.14v.51h7.3v1.87h-17.92v-1.89h7.06v-.51h-8.84v-2h8.84v-1h3.53v1zM197.16 86.2a4.09 4.09 0 01-.55.78 9.85 9.85 0 001.25 0 1 1 0 00.64-.15 1.37 1.37 0 00.32-.67zm-.38-7.07H207v-.65h-10.22zm2.85 1.73a2.82 2.82 0 01.51.83h4.1a7.57 7.57 0 00.29-.83zm3.22 3.26h8.86v4.94h-3.22v-.37h-2.57v.37h-3.07zm3.07 1.88v.84h2.57V86zM237.15 85.14h-8v3.94h-3.6v-3.94h-10.68v-2.69h3.72v-4.32c-.29.27-.57.54-.86.77a23.65 23.65 0 00-3-1.82 14.33 14.33 0 004.85-6.32l3.57.73c-.19.44-.41.9-.65 1.35h13.23v2.68h-6.55v2h6v2.59h-6v2.38h8zm-16.33-9.62a18.63 18.63 0 01-1.6 2h6.36v-2zm4.76 6.93v-2.38h-3.48v2.38zM242.62 76.79c-.58.37-1.13.71-1.68 1a23.12 23.12 0 00-2.48-2.13 17.35 17.35 0 006.54-4.88l3.29.94a19.21 19.21 0 01-2.19 2.36v6.74h-3.45zm9.26 6.07h9.22v2.68h-9.22v3.54h-3.72v-3.54H239v-2.68h9.12v-2.08h3.72zm-1.51-5.69c-.94.23-1.87.45-2.81.64a8.17 8.17 0 00-1.22-2.21c1.34-.29 2.71-.61 4-1v-3.43h3.5v2.3a33.11 33.11 0 004.3-1.92l2.45 2.21a42.57 42.57 0 01-6.75 2.51v1c0 .75.15.83 1 .83h2.19c.74 0 .91-.31 1-1.85a11.78 11.78 0 003 1c-.33 2.48-1.25 3.21-3.72 3.21h-3.07c-3.17 0-4-.77-4-3.17zM14.88 4h-4.73v10H4.73V4H0V.31h14.88zM32 .31V14h-5.46V9h-4.92v5H16.2V.31h5.42v4.8h4.92V.31zM39.31 4v1.38h7.95V9h-7.95v1.29h8.6V14h-14V.31h14V4zM54.86.31h5.43V14h-5.43zM78.24.31V14H72.6L69 9.12c-.6-.81-1.13-1.54-1.61-2.29.07 1.62.1 3.17.1 4.92V14h-5.28V.31h5.64l3.53 4.85c.52.73 1.1 1.65 1.65 2.58C73 6 73 4.4 73 2.53V.31zM94.44 4h-4.73v10h-5.42V4h-4.73V.31h14.88zM101.18 4v1.38h7.95V9h-7.95v1.29h8.6V14h-14V.31h14V4zM126.77 14h-5.55a2.81 2.81 0 01-.33-1.38l-.08-1.36c-.07-1.31-.57-1.71-2.18-1.71h-1.87V14h-5.43V.31h8.43c5.14 0 6.57 1.88 6.57 4a3.22 3.22 0 01-2.56 3.26 3.07 3.07 0 012.4 3l.19 2a2.33 2.33 0 00.41 1.43zm-6-9c0-.94-.65-1.36-1.87-1.36h-2.16v2.73h2.16c1.24 0 1.89-.37 1.89-1.37zM144.05.31V14h-5.64l-3.6-4.85c-.6-.81-1.13-1.54-1.61-2.29.07 1.62.09 3.17.09 4.92V14H128V.31h5.64l3.53 4.85c.53.73 1.11 1.65 1.66 2.58-.07-1.71-.07-3.34-.07-5.21V.31zM156.91 12.19h-6.14l-.68 1.81h-5.42L150.45.31h6.63L163.2 14h-5.62zM155.71 9l-1.18-3.15c-.24-.67-.5-1.36-.72-2l-.72 2L151.92 9zM176.06 4h-4.73v10h-5.42V4h-4.73V.31h14.88zM177.38.31h5.43V14h-5.43zM184.22 7.14c0-4.38 3.72-7.14 9.05-7.14s9 2.76 9 7.14-3.72 7.16-9 7.16-9.05-2.76-9.05-7.16zm12.48 0a3.43 3.43 0 10-6.86 0c0 2.46 1.41 3.48 3.43 3.48s3.43-1.02 3.43-3.48zM219.77.31V14h-5.64l-3.6-4.85c-.6-.81-1.13-1.54-1.61-2.29.07 1.62.09 3.17.09 4.92V14h-5.28V.31h5.64l3.53 4.85c.53.73 1.11 1.65 1.66 2.58-.07-1.71-.07-3.34-.07-5.21V.31zM232.63 12.19h-6.14l-.68 1.81h-5.42L226.17.31h6.63L238.92 14h-5.62zM231.43 9l-1.18-3.15c-.24-.67-.5-1.36-.72-2l-.72 2L227.64 9zM252.31 10.25V14h-12.77V.31H245v9.94zM.1 29.14c0-4.38 3.72-7.14 9-7.14s9.05 2.76 9.05 7.14-3.72 7.16-9 7.16S.1 33.54.1 29.14zm12.48 0a3.1 3.1 0 00-3.44-3.45 3.09 3.09 0 00-3.43 3.45c0 2.46 1.42 3.48 3.43 3.48s3.44-1.02 3.44-3.48zM19.37 31v-8.69h5.42v8.52c0 1.08.6 1.79 2.4 1.79s2.4-.71 2.4-1.79v-8.52H35V31c0 3.39-2.79 5.35-7.83 5.35s-7.8-2.01-7.8-5.35zM50.86 26h-4.73v10H40.7V26H36v-3.69h14.86zM68.62 29.14c0 4.53-2.84 6.83-8.45 6.83h-8V22.31h8.07c5.57 0 8.38 2.3 8.38 6.83zm-5.62 0c0-2.36-.86-3.22-3.1-3.22h-2.3v6.45h2.3c2.24 0 3.1-.87 3.1-3.23zM69.53 29.14c0-4.38 3.72-7.14 9-7.14s9 2.76 9 7.14-3.72 7.16-9 7.16-9-2.76-9-7.16zm12.48 0a3.44 3.44 0 10-6.87 0c0 2.46 1.42 3.48 3.44 3.48S82 31.6 82 29.14zM88.54 29.14c0-4.38 3.72-7.14 9-7.14s9 2.76 9 7.14-3.72 7.16-9 7.16-9-2.76-9-7.16zm12.48 0a3.44 3.44 0 10-6.87 0c0 2.46 1.42 3.48 3.43 3.48S101 31.6 101 29.14zM123.48 36h-5.54a2.7 2.7 0 01-.34-1.38l-.07-1.36c-.07-1.31-.58-1.71-2.19-1.71h-1.87V36h-5.42V22.31h8.42c5.14 0 6.58 1.88 6.58 4a3.23 3.23 0 01-2.57 3.26 3.06 3.06 0 012.4 3l.19 2a2.4 2.4 0 00.41 1.43zm-6-9c0-.94-.64-1.36-1.87-1.36h-2.16v2.72h2.16c1.25.01 1.89-.36 1.89-1.36zM146.57 29.14c0 4.53-2.83 6.83-8.45 6.83h-8V22.31h8.06c5.58 0 8.39 2.3 8.39 6.83zm-5.62 0c0-2.36-.86-3.22-3.1-3.22h-2.3v6.45h2.3c2.24 0 3.15-.87 3.15-3.23zM147.48 29.14c0-4.38 3.72-7.14 9.05-7.14s9.05 2.76 9.05 7.14-3.73 7.16-9.05 7.16-9.05-2.76-9.05-7.16zm12.48 0a3.44 3.44 0 10-6.87 0c0 2.46 1.42 3.48 3.44 3.48S160 31.6 160 29.14zM166.49 29.12c0-4.36 3.52-7.12 9.16-7.12 5 0 7.83 2.21 8.6 5.55h-5.6c-.4-1.27-1.56-1.86-3.12-1.86-2.13 0-3.43 1-3.43 3.43s1.39 3.51 3.51 3.51c1.46 0 2.66-.53 3.07-1.84h5.54c-.69 3.21-4.13 5.53-8.88 5.53-5.21 0-8.85-2.8-8.85-7.2zM185.33 31v-8.69h5.42v8.52c0 1.08.6 1.79 2.4 1.79s2.4-.71 2.4-1.79v-8.52H201V31c0 3.39-2.78 5.35-7.82 5.35s-7.85-2.01-7.85-5.35zM222.79 22.31V36h-5.28v-3.9c0-1.86 0-3.5.12-5.22-.14.57-.31 1.17-.53 1.86L214.94 36h-4.41l-2.21-7.23c-.19-.66-.36-1.21-.51-1.75.1 1.69.12 3.28.12 5.11V36h-5.28V22.31H211l1.34 5.18c.14.54.26 1.08.41 1.63.12-.55.24-1.09.38-1.63l1.3-5.18zM230.13 26v1.35h8V31h-8v1.29h8.6V36h-14V22.31h14V26zM256.32 22.31V36h-5.64l-3.6-4.85c-.6-.81-1.13-1.54-1.61-2.29.07 1.62.09 3.17.09 4.92V36h-5.28V22.31h5.64l3.53 4.85c.53.73 1.11 1.65 1.66 2.58C251 28 251 26.4 251 24.53v-2.22zM272.52 26h-4.73v10h-5.42V26h-4.73v-3.69h14.88zM282.74 34.19h-6.14l-.68 1.81h-5.42l5.79-13.66h6.62L289 36h-5.62zm-1.2-3.19l-1.17-3.15c-.24-.67-.51-1.36-.72-2l-.72 2-1.18 3.15zM305.09 36h-5.55a2.81 2.81 0 01-.33-1.38l-.08-1.36c-.07-1.31-.57-1.71-2.18-1.71h-1.87V36h-5.43V22.31h8.43c5.13 0 6.57 1.88 6.57 4a3.22 3.22 0 01-2.56 3.26 3.07 3.07 0 012.4 3l.19 2a2.33 2.33 0 00.41 1.43zm-6-9c0-.94-.65-1.36-1.87-1.36h-2.16v2.72h2.16c1.24.01 1.89-.36 1.89-1.36zM321.19 22.31l-5.74 8.46V36H310v-5.2l-5.95-8.46h5.85L311 24c.67 1 1.25 2 1.77 2.93.48-1 1-1.9 1.59-2.93l1-1.73zM6 48v1.58h7.85v3.62H6V58H.6V44.31h13.63V48zM15.55 44.31H21V58h-5.45zM35.67 54.25V58H22.9V44.31h5.42v9.94zM57.12 44.31V58h-5.28v-3.9c0-1.86 0-3.5.12-5.22-.14.57-.31 1.17-.53 1.86L49.27 58h-4.41l-2.21-7.23c-.19-.66-.36-1.21-.51-1.75.1 1.69.12 3.28.12 5.11V58H37V44.31h8.36l1.34 5.18c.14.54.26 1.08.41 1.63.12-.55.24-1.09.38-1.63l1.3-5.18zM69.86 48v1.58h7.85v3.62h-7.85V58h-5.42V44.31h13.63V48zM84.82 48v1.35h7.94V53h-7.94v1.29h8.59V58h-14V44.31h14V48zM94.41 53.48h5.36c.12 1.27 1.1 1.58 2.61 1.58s2.24-.31 2.24-.94-.58-.91-2.43-1.12l-2.06-.23c-3.1-.34-5.31-1.69-5.31-4.3 0-2.15 1.42-4.47 7.27-4.47 4.47 0 7.2 1.34 7.52 4.51h-5c-.12-.82-.67-1.3-2.3-1.3s-2.07.34-2.07.88.58.81 1.61.92l2.06.23c4.28.48 6.2 1.79 6.2 4.22 0 2.94-2.67 4.84-7.8 4.84s-7.73-1.96-7.9-4.82zM125.13 48h-4.72v10H115V48h-4.73v-3.69h14.88zM126.45 44.31h5.43V58h-5.43zM150.55 44.31L145 58h-6.62l-5.79-13.66h5.62l1.87 5c.5 1.36 1.1 3 1.66 4.64.52-1.69 1-3.28 1.56-4.64l1.8-5zM160.8 56.19h-6.15L154 58h-5.42l5.78-13.66H161L167.09 58h-5.62zM159.6 53l-1.18-3.15c-.24-.67-.5-1.36-.72-2l-.72 2-1.17 3.15zM180.48 54.25V58h-12.77V44.31h5.42v9.94zM186.69 51.14c0-4.38 3.72-7.14 9.05-7.14s9 2.76 9 7.14-3.72 7.16-9 7.16-9.05-2.76-9.05-7.16zm12.48 0a3.43 3.43 0 10-6.86 0c0 2.46 1.42 3.48 3.43 3.48s3.43-1.02 3.43-3.48zM211.63 48v1.58h7.85v3.62h-7.85V58h-5.42V44.31h13.63V48zM226.05 51.12c0-4.36 3.53-7.12 9.17-7.12 5 0 7.83 2.21 8.59 5.55h-5.59c-.41-1.27-1.56-1.86-3.12-1.86-2.14 0-3.43 1.05-3.43 3.43a3.15 3.15 0 003.5 3.51c1.47 0 2.67-.53 3.08-1.84h5.54c-.7 3.21-4.13 5.53-8.88 5.53-5.21 0-8.86-2.8-8.86-7.2zM260.9 44.31V58h-5.42v-5h-4.92v5h-5.43V44.31h5.43v4.8h4.92v-4.8zM262.82 44.31h5.43V58h-5.43zM286.2 44.31V58h-5.64L277 53.12c-.6-.81-1.13-1.54-1.61-2.29.07 1.62.09 3.17.09 4.92V58h-5.28V44.31h5.64l3.53 4.85c.53.73 1.11 1.65 1.66 2.58-.07-1.71-.07-3.34-.07-5.21v-2.22zM299.06 56.19h-6.14l-.68 1.81h-5.42l5.78-13.66h6.63L305.35 58h-5.62zm-1.2-3.19l-1.18-3.15c-.23-.67-.5-1.36-.72-2l-.71 2-1.18 3.15z"
				fill={fill}
			/>
		</svg>
	);
}

fullNameLogo.defaultProps = {
	className: undefined,
	fill: "#000",
};

export default fullNameLogo;