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
    return <TextBtn btnText="← 全球征集" to="/competition" />
}

function Copies(props: { data: FileProps[] }) {
    return (
        <>
            <Heading2>报名指引</Heading2>
            <Heading4>参评资格</Heading4>
            <div>
                <Body>
                    1、报名参加 2021 中国国际户外影像嘉年华的作品，须为 2019 年
                    1 月 1 日之后制作完成的影片。
                </Body>
                <Body>
                    2、报名影片需为完整的作品，不接受粗剪、预告片或未完成作品。如影片的任何版本（包括重新剪辑的版本）曾参加往届中国国际户外影像嘉年华并入围复评环节、或曾在往届中国国际户外影像嘉年华上展映，则该影片不具备报名资格。
                </Body>
            </div>
            <Heading4>报名时间</Heading4>
            <div>
                <Body>
                    北京时间 2021 年 4 月 15 日 00:00 至 8 月 15 日 24:00。
                </Body>
            </div>
            <Heading4>报名步骤及所需材料</Heading4>
            <Body>
                请将下列材料上传至网盘，将分享链接发送至邮箱：
                <Link to="mailto:film@outdocs.cn">film@outdocs.cn</Link>
            </Body>
            <div>
                <Body>1、请下载报名表并填写完整。</Body>
                <Body>2、影片评审版本（MP4或MOV格式，尺寸1080P及以上）</Body>
                <Body>
                    3、影片预告片（MP4或MOV格式，片长3分钟以下，尺寸1080P及以上）
                </Body>
                <Body>
                    4、非中文对白影片须提交非内嵌式全片英文字幕文件（SRT或ASS格式）或英文字幕文本（word文件或txt文件），中文对白或已配有中文字幕的影片无需提交。
                </Body>
                <Body>5、影片海报1-3张（JPG格式，150 DPI以上）</Body>
                <Body>6、影片剧照3-5张（JPG格式，150 DPI以上）</Body>
                <Body>7、导演照片1-2张（JPG格式，150 DPI以上）</Body>
            </div>
            <OutlinedBtn
                to={props.data[0].fileName.file.url}
                btnText="↘ 下载报名材料"
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
    query SubmissionChn {
        allContentfulLibraryFile(filter: { node_locale: { eq: "zh-Hans" } }) {
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
