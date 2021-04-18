import React from "react"
import { graphql } from "gatsby"
import tw from "twin.macro"

import Layout from "components/Layout"
import { OutlinedBtn, TextBtn } from "components/Buttons"

import { Body, Heading2, Heading4 } from "utils/typography"
import Link from "utils/Link"

type DataProps = {
    data: {
        allContentfulLibraryFile: {
            nodes: FileProps[]
        }
    }
}

type FileProps = {
    fileName: {
        file: {
            url: string
        }
    }
}

function Header() {
    return <TextBtn btnText="← Back" to="/competition" />
}

function Copies(props: { data: FileProps[] }) {
    return (
        <>
            <Heading2>Before signing up...</Heading2>
            <Heading4>Eligibility for OUTDOCS</Heading4>
            <div>
                <Body>
                    1.To be eligible for 2021 OUTDOCS, a film entering the award
                    competition and screening session must be produced no
                    earlier than January 1, 2019.
                </Body>
                <Body>
                    2.Completed films need to be uploaded at the time of entry.
                    We do not accept rough cuts, trailers or unfinished
                    projects. Films that, in any version (including the
                    re-edited version), had participated or been screened in the
                    previous OUTDOCS, will not be eligible for the Award
                    Competition and screening session.
                </Body>
            </div>
            <Heading4>Submission Deadline</Heading4>
            <div>
                <Body>April 15, 2021, (GMT+8)-August 15, 2021 (GMT+8)</Body>
            </div>
            <Heading4>Application Process</Heading4>
            <Body>
                Upload submission materials below into Cloud Storage and send
                the download link and password to{" "}
                <Link to="mailto:film@outdocs.cn">film@outdocs.cn</Link> along
                with film title and contact information.
            </Body>
            <div>
                <Body>
                    1. Download and complete the OUTDOCS 2021 submission form.
                </Body>
                <Body>
                    2. he preview version (MP4/MOV format, 1080P and above)
                </Body>
                <Body>
                    3. Trailer (less than 3 minutes, in MP4/MOV format, 1080P and
                    above)
                </Body>
                <Body>
                    4. For NON-MANDARINE dialogues (including English) films, a
                    full-length English subtitle file (SRT or ASS format) or
                    subtitle script (word file or txt file) is required.
                </Body>
                <Body>5. 1-3 poster (JPG format, pixel no less than 150 dpi)</Body>
                <Body>
                    6. 3-5 Film stills (JPG format, pixel no less than 150 dpi)
                </Body>
                <Body>
                    7. 1-2 photo of each director (JPG format, pixel no less than
                    150 dpi)
                </Body>
            </div>
            <OutlinedBtn
                to={props.data[0].fileName.file.url}
                btnText="↘ Download Sign-Up Kit"
            />
        </>
    )
}

export default function SubmissonChn({ data }: DataProps) {
    const Main = tw.main`py-16 sm:flex sm:flex-col-reverse lg:grid lg:grid-cols-3 gap-10`
    const Side = tw.aside`col-span-1 flex flex-col space-y-4`
    const Article = tw.article`col-start-2 col-end-4 space-y-8`

    const urlData: FileProps[] = data.allContentfulLibraryFile.nodes

    return (
        <Layout hasPadding title="报名指引">
            <Header />
            <Main>
                <Side></Side>
                <Article>
                    <Copies data={urlData} />
                </Article>
            </Main>
        </Layout>
    )
}

export const query = graphql`
    query SubmissionEng {
        allContentfulLibraryFile(filter: { node_locale: { eq: "en-US" } }) {
            nodes {
                fileName {
                    file {
                        url
                    }
                }
            }
        }
    }
`
