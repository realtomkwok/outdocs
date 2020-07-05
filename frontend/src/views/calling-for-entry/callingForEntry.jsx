import React, { useContext, useState } from "react";
import { HashLink } from "react-router-hash-link";
import StickyBox from "react-sticky-box";

import "./styles.scss";
import LangContext from "../../locale/langContext";

import Navbar from "../../components/nav/navbar";
import Footer from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { useHistory } from "react-router-dom";

const submissionForm = {
	eng:
		"https://dev.azure.com/junhaotom/9b1798c6-e4d0-474b-bffe-2a2fc6de65cf/_apis/git/repositories/aa86caed-bb30-46c9-ae95-f7078c2c018a/items?path=%2FOUTDOCS%202020%20Film%20Submission%20Form.xlsx&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0&download=true",
	chn:
		"https://dev.azure.com/junhaotom/9b1798c6-e4d0-474b-bffe-2a2fc6de65cf/_apis/git/repositories/aa86caed-bb30-46c9-ae95-f7078c2c018a/items?path=%2FOUTDOCS%202020%E5%BD%B1%E7%89%87%E6%8A%A5%E5%90%8D%E8%A1%A8.xlsx&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0&download=true",
};

const ArticleCHN = () => (
	<article id="regulations__chn">
		<h1>2020中国国际户外影像嘉年华作品征集章程</h1>
		<h2 id="reg__introduction">一、关于中国国际户外影像嘉年华</h2>
		<p>
			中国国际户外影像嘉年华（以下简称“OUTDOCS”）旨在用纪录片定格与致敬壮美的世界景观和人类不断进取的运动与探险精神。OUTDOCS以影像为载体，为大众推广积极的生活方式，启发生命创造力；以影像为聚合力，弘扬与发展中国在全球范围内体育精神、自然探险、户外文化与运动的发展，打造体育运动、户外文化、旅行人文、自然探险与环保等题材影像的人文价值高地，实现户外文化价值共创，全民共享体育盛宴。
		</p>
		<h2 id="reg__dateOfEvent">二、户外影像嘉年华举办日期及地点</h2>
		<p>2020中国国际户外影像嘉年华将于2020年11月举办。</p>
		<h2 id="reg__elligibility">三、参评资格</h2>
		<ol>
			<li>
				影片征集对以下两类影片开放报名：
				纪录短片：时长30分钟以下，包括30分钟；
				纪录长片：时长30分钟以上。
			</li>
			<li>
				报名参加2020中国国际户外影像嘉年华的作品，须为
				<span className="highlight">2018年1月1日</span>
				之后制作完成的影片。
			</li>
			<li>
				报名影片需为完整的作品，不接受粗剪、预告片或未完成作品。如影片的任何版本（包括重新剪辑的版本）曾参加往届中国国际户外影像嘉年华并入围复评环节、或曾在往届中国国际户外影像嘉年华上展映，则该影片不具备报名资格。
			</li>
			<li>
				影片可以由专业或业余的电影制作人、品牌代表提交，允许部分品牌曝光，但不鼓励提交品牌广告。
			</li>
		</ol>
		<h2 id="reg__guidance"> 四、报名须知</h2>
		<h3>（一）报名时间</h3>
		<p>
			2020中国国际户外影像嘉年华影片征集时间为
			<span className="highlight">
				北京时间2020年6月28日00:00至9月15日24:00
			</span>
			，报名影片需在截止日期前按要求将所有相关报名材料发送、寄送至组委会常务办公室。请自行估算邮寄所需时间，超期未抵达组委会常务办公室或报名材料不完整的影片将不被纳入评审流程。
		</p>
		<h3>（二）报名步骤及所需材料</h3>
		<p>报名作品须完成以下报名材料的提交，方可成功报名：</p>
		<ol>
			<li>
				请下载<a href={submissionForm.chn}>报名表↗</a>并填写完整。
			</li>
			<li>
				将填写完整的报名表及以下报名材料发送至指定邮箱
				<a href="mailto:outdocs@gzdoc.cn">outdocs@gzdoc.cn↗</a>
			</li>
			<ul>
				<li>
					<span className="highlight">影片评审版本</span>
					<div>
						要求：
						<ol>
							<li>
								MP4格式，尺寸1080P及以上，码率2000kbps至5000kbps。
							</li>
							<li>
								中文对白影片须配有全片中英双语字幕，非中文对白影片（包括英语对白影片）须配有全片英语字幕或中文字幕。
							</li>
							<li>
								如需添加水印，请于右上角标注“OUTDOCS评审版”或“OUTDOCS
								Preview”，此外画面内容不得有任何其他水印标记，以免影响评审预览效果。
							</li>
						</ol>
					</div>
				</li>
				<li>
					<span className="highlight">影片预告片</span>
					<div>
						要求：
						<ol>
							<li>
								MP4格式，片长3分钟以下，尺寸1080P及以上，码率2000kbps至5000kbps。
							</li>
							<li>
								中文对白影片须配有全片中英双语字幕，非中文对白影片（包括英语对白影片）须配有全片英语字幕或中文字幕。
							</li>
						</ol>
					</div>
				</li>
				<li>
					非中文对白影片需提交影片全片字幕文件（SRT或ASS格式）或字幕文本（word文件或txt文件）。
				</li>
				<li>
					<strong>影片海报</strong>1-3张，要求：JPG格式，150 DPI以上。
				</li>
				<li>
					<strong>影片剧照</strong>3-5张，要求：JPG格式，150 DPI以上。
				</li>
				<li>
					<strong>导演照片</strong>1-2张，要求：JPG格式，150 DPI以上。
				</li>
			</ul>
			<li>
				请选择以下<strong>其中一种方式</strong>提交材料：
				<div>
					<ul>
						<li>
							<span className="highlight">网络传输</span>
							<p>
								将影片评审版本等报名材料上传至网盘（如：百度网盘），并将分享链接及密码随报名表一起通过电子邮件发送至邮箱
								<a href="mailto:outdocs@gzdoc.cn">
									outdocs@gzdoc.cn↗
								</a>{" "}
								（请标注影片名、联系人及联系电话）
							</p>
						</li>
						<li>
							<span className="highlight">寄送材料</span>
							<p>
								将影片评审版本等报名资料拷贝到数据格式光盘、U盘或移动硬盘等储存介质内，寄送到组委会常务办公室（请标注影片名、联系人及联系电话）：
							</p>
							<div className="contact-block">
								<p className="contact">
									<strong>地址：</strong>{" "}
									广东省广州市天河区黄埔大道西76号富力盈隆广场3303房
								</p>
								<p className="contact">
									<strong>联系人：</strong> 梁小姐
								</p>
								<p className="contact">
									<strong>联系电话：</strong>{" "}
									86-020-38780150-815
								</p>
								<p className="contact">
									<strong>邮编：</strong> 510632
								</p>
							</div>
						</li>
					</ul>
				</div>
			</li>
		</ol>
		<h3>（三）报名费用</h3>
		<p>
			所有报名参加中国国际户外影像嘉年华的影片，组委会常务办公室不收取报名费用。
		</p>
		<h3>（四）材料寄送注意事项</h3>
		<p>
			如选择寄送报名材料，为保证材料顺利准时抵达组委会常务办公室，请使用须签收、可追踪的寄送服务，请勿使用平邮。如从海外地区寄送，请使用国际快递服务（如DHL或FEDEX），在包裹上注明“无商业价值”及“仅供文化用途”，并填写10
			美元以内的海关申报价值。所有报名材料将不会被退还，组委会不承担报名造成的运费，并有权拒收到付包裹。
		</p>
		<h3>（五）关于报名信息及报名材料的使用</h3>
		<ol>
			<li>
				请正确、完整填写报名表，所填写信息将在入围、评审、结果公布等工作环节及相关的信息公开中采用，如有信息错漏，责任由报名方承担。
			</li>
			<li>
				组委会常务办公室将以报名表中所填写的报名联系人为准，后续与该作品相关的评选、入围情况将优先告知该联系人，请保持电话、邮箱畅通。
			</li>
			<li>
				影片报名后，其报名表、寄送报名材料中涉及的报名信息及报名材料，将可能呈
				现于OUTDOCS官网、线上及线下媒体宣传中。组委会常务办公室有权对OUTDOCS官方途径呈现的影片信息、材料进行编辑及公开使用，包括影片报名信息、海报、剧照、预告片及影片正片中总长度不超过3分钟的片段。
			</li>
		</ol>
		<h3>（六）报名信息、材料的更替及补充</h3>
		<ol>
			<li>
				如报名完成后需进行报名信息或材料更替，请发送电子邮件至
				<a href="mailto:outdocs@gzdoc.cn">outdocs@gzdoc.cn↗</a>
				并以更替前后对照的方式详细说明更替需求，经组委会常务办公室审核同意后方可进行材料更替。
			</li>
			<li>
				如有影片后续报名材料（如海报、剧照、宣传资料包、获奖情况等）需补充，请发送材料至
				<a href="mailto:outdocs@gzdoc.cn">outdocs@gzdoc.cn↗</a>
				并加以说明。
			</li>
			<li>
				如报名影片的评审版本为工作版，报名方可在入围后提交最终展映版本，评审过程中无法进行版本更替。
			</li>
		</ol>
		<h3>（七）版权信息</h3>
		<p>
			影片报名方（及公司）须拥有其报名影片的著作权或全权代理权，同时保证该影片无版权纠纷，其中所采用的音乐及影片视频图像、创意文本等已获得版权，或取得该作品版权人授权使用，或为原创且未侵犯任何第三人的版权及其他民事权益。因影片版权引起的纠纷，由影片报名方（及公司）负责全部侵权责任及损失赔偿责任。
		</p>
		<h2 id="reg__awards">五、评选项目设置</h2>
		<ul>
			<li>年度优秀纪录片（1部）</li>
			<li>优秀山地运动纪录片（1部）</li>
			<li>优秀自然环境与生态纪录片（1部）</li>
			<li>优秀探险精神纪录片（1部）</li>
			<li>优秀户外人文纪录片（1部）</li>
			<li>优秀视觉呈现纪录片（1部）</li>
			<li>媒体特别推荐纪录片（1部）</li>
			<li>组委会特别推荐纪录片（1部）</li>
		</ul>
		<h2 id="reg__evaluation">六、评选流程</h2>
		<p>
			参评影片将经过初评、复评、终评三轮筛选，分别由初评选片委员会、复评评审委员会、终评评审委员会进行观看评审并决定入围、优胜影片。由组委会常务办公室负责邀请相关人士出任选片委员会及评审委员会成员。
		</p>
		<ol>
			<li>
				初评选片委员会负责从报名参评影片中评选出复评入围片单，初评评选结果将在10月通过电子邮件告知复评入围影片的报名联系人，并在官网公布复评入围名单。
			</li>
			<li>
				复评评审委员会负责从复评入围影片中评选出终评入围片单。复评评选结果将在
				11月上旬通过电子邮件告知终评入围影片的报名联系人，并在官网公布终评入围名单。
			</li>
			<li>
				终评评审委员会负责从终评入围影片中评选出最终优胜影片名单。优胜结果将在11月的2020中国国际户外影像嘉年华分享会上公布。
			</li>
		</ol>
		<h2 id="reg__notice">七、入围影片须知</h2>
		<h3>1、入围确认</h3>
		<ul>
			<li>
				<span className="highlgiht">
					优秀户外纪录片评选活动入围确认
				</span>
				<p>
					影片报名方应在收到组委会常务办公室发出的终评入围通知（电子邮件）后的三个工作日内回复电子邮件并确认是否参评。影片报名方一旦确认接受纪录片节邀请并参评，即不得以任何理由擅自撤回入围影片。
				</p>
			</li>
			<li>
				<span className="highlgiht">户外影像纪录片展映入围确认</span>
				<p>
					影片报名方应在收到组委会常务办公室发出的展映入围通知（电子邮件）后的三个工作日内回复电子邮件并确认授权展映。影片报名方一旦确认接受OUTDOCS邀请并参展，即不得以任何理由擅自撤回入围影片。{" "}
				</p>
			</li>
		</ul>
		<h3>2、展映版本</h3>
		<p>
			确认参评参展后，须提交正式展映版本至组委会常务办公室。除后期混录、画面调色、字幕翻译等技术性调整以外，正式展映版本影片的剪辑须与评审版本影片一致，不允许在评审工作过程中进行影片版本的更替。
		</p>
		<h3>3、入围影片信息、材料的使用</h3>
		<p>
			影片入围后，其报名表及发送、寄送的报名材料中涉及的报名信息及报名材料，将呈现于电影节手册、官网、线上及线下媒体宣传中。组委会常务办公室有权对OUTDOCS官方途径呈现的影片信息、材料进行编辑及公开使用，包括影片报名信息、海报、剧照、预告片及影片正片中总长度不超过3分钟的片段。如报名阶段有任何信息或材料缺失，须在入围阶段补齐所有材料。
		</p>
		<h3>4、首映影片界定</h3>
		<ol>
			<li>
				<span className="highlight">世界首映</span>
				——报名影片未曾在任何电影节展展映或在电影院、电视、网络新媒体等方式面向公众进行放映、展播，具有首次公开放映权。
			</li>
			<li>
				<span className="highlight">国际首映</span>
				报名影片只在制片国家放映、展播过，只参加过制片国家的国家性节展或者该国国际性节展的国内环节，未曾在制片国家以外的电影节展、公共场所公开放映过，具有国际首映权。
			</li>
			<li>
				<span className="highlight">亚洲首映</span>
				——报名影片未曾在亚洲境内电影节展或电影院、电视、网络新媒体等渠道公开放映过，具有亚洲首映权。
			</li>
			<li>
				<span className="highlight">中国首映</span>
				——报名影片未曾中国境内电影节展电影院、电视、网络新媒体等渠道公开放映过，具有中国首映权（该部分主要针对境内影片）。
			</li>
		</ol>
		<h3>5、首映状况</h3>
		<p>
			在评审过程中，影片的首映状况不会影响评分。符合首映资格的影片确认参评参展后，即视为将该片首映权授予纪录片节组委会，影片不得再将同性质首映权授予第三方或擅自进行改变首映性质的放映活动。
		</p>
		<h3>6、展映排期</h3>
		<p>
			所有入围影片将在2020年11月至12月期间进行1-2场公开展映，展映排期及场地由组委会全权决定。如参加评选活动的影片最终优胜，将在2020年12月30日前进行优胜影片展映，优胜影片展映次数最少为1场，最多不超过该影片所获优胜项目数量。
		</p>
		<h3>7、宣传要求</h3>
		<p>
			影片入围及优胜后，组委会将提供相应标识，影片须在后续所有宣传材料中呈现OUTDOCS入围标识或优胜标识，标识严禁修改。
		</p>
		<h2 id="reg__statement">八、声明</h2>
		<ol>
			<li>
				本规则一旦发生变动，组委会将在官方网站的
				“全球征集”页面上以公告的形式告知规则修改的内容，影片报名方若不接受修改条款，有权退出此次活动。如果报名方在公告发出十个工作日后仍未通知组委会常务办公室放弃参评，则视同报名方接受所有变动。
			</li>
			<li>如有任何以上规则未能规定的情况，以组委会最终解释说明为准。</li>
			<li>
				影片报名参加2020中国国际户外影像嘉年华，即表示接受以上所有条款与规则，如有任何纠纷，中国司法机关有独立裁判权。
			</li>
		</ol>
	</article>
);

const ArticleENG = () => (
	<article id="regulations__eng">
		<h1>
			Regulations for 2020 The International Outdoor Documentary Film
			Festival of China
		</h1>
		<h2 id="reg__introduction">
			I. Introduction to the 2020 The International Outdoor Documentary
			Film Festival of China（OUTDOCS）
		</h2>
		<p>
			The International Outdoor Documentary Film Festival of
			China（OUTDOCS）adhered to its goal of recording and paying respect
			to magnificent nature landscape and indomitable spirit of human
			beings. With films as the carrier, OUTDOCS promotes a positive
			lifestyle for the public and inspires the creativity of life; with
			films as power, it shares and develops China's development of
			sportsmanship, adventure and exploration, outdoor culture and
			sports. To award excellent outdoor films and its artistic and
			cultural contribution, create a humanistic value highland for
			documentary films on outdoor adventures, sports, travel and
			humanities, as well as environmental protection, OUTDOCS Award
			Competition and Screening session start. We are calling for entries
			around the world.
		</p>
		<h2 id="reg__dateOfEvent">II. Date of Event </h2>
		<p>
			2020 The International Outdoor Documentary Film Festival of China
			will be held in November, 2020.
		</p>
		<h2 id="reg__elligibility">III. Eligibility for OUTDOCS</h2>
		<ol>
			<li>
				The International Outdoor Documentary Film Festival of China
				Award Competition and screening session is open for the
				following 2 types of films:
				<div>
					<ul>
						<li>
							Documentary Short: motion pictures with a running
							time of 30 minutes or less (including Opening
							Credits);
						</li>
						<li>
							Documentary Feature: motion pictures with a running
							time of more than 30 minutes (including Opening
							Credits);
						</li>
					</ul>
				</div>
			</li>
			<li>
				To be eligible for 2020 OUTDOCS, a film entering the award
				competition and screening session must be produced{" "}
				<span className="highlight">
					no earlier than January 1, 2018.
				</span>{" "}
			</li>
			<li>
				{" "}
				Completed films need to be uploaded at the time of entry. We do
				not accept rough cuts, trailers or unfinished projects. Films
				that, in any version (including the re-edited version), had
				participated or been screened in the previous OUTDOCS, will not
				be eligible for the Award Competition and screening session.{" "}
			</li>
			<li>
				{" "}
				Films can be submitted by both professional and amateur
				filmmakers, and can include brand representation, although the
				submission of ‘adverts’ is discouraged.{" "}
			</li>
		</ol>
		<h2 id="reg__guidance">IV. Submission Guidance</h2>
		<h3>(i) Submission Deadline</h3>
		<p>
			Submissions for{" "}
			<span className="highlight">
				{" "}
				the 2020 OUTDOCS are open from June 28, 2020, (GMT+8) to
				September 15, 2020 (GMT+8).
			</span>{" "}
			The submission must be completed and all the other required
			submission materials should be sent to the General Office of the
			Organizing Committee (OC) by the deadline. The application received
			after the deadline or the application with incomplete materials will
			not be accepted as qualified entries.{" "}
		</p>
		<h3>(ii) Application process and required materials </h3>
		<ol>
			<li>
				Please download and complete the{" "}
				<a href={submissionForm.eng}>2020 OUTDOCS submission form↗</a>.
			</li>
			<li>Please submit the following submission materials:</li>
			<div>
				<ul>
					<li>
						<span className="highlight">The preview version</span>
						<div>
							<ol>
								<li>
									Film in MP4 format, 1080P and above, data
									rate 2000kbps to 5000kbps;
								</li>
								<li>
									For Chinese dialogue films, complete Chinese
									and English subtitles are required. For
									NON-MANDARINE dialogues (including English)
									films, English subtitles are required.
								</li>
								<li>
									To add a watermark, please mark "OUTDOCS
									Preview" in the upper right corner. Any
									other watermarks should not be applied, in a
									bid to ensure the viewing effects.
								</li>
							</ol>
						</div>
					</li>
					<li>
						<span className="highlight"> Trailer </span>
						<div>
							<ol>
								<li>
									Motion Pictures with a running time of less
									than 3 minutes, in MP4 format, 1080P and
									above, data rate 2000kbps to 5000kbps
								</li>
								<li>
									For Chinese dialogue films, complete Chinese
									and English subtitles are required. For
									NON-MANDARINE dialogues (including English)
									films, English subtitles are required.
								</li>
								<li>
									For non-Chinese dialogue films, a
									full-length
									<strong>English </strong> subtitle file (SRT
									or ASS format) or subtitle script (word file
									or txt file) is required.
								</li>
								<li>
									1-3 poster in JPG format, pixel no less than
									150 dpi;
								</li>
								<li>
									3-5 Film stills in JPG format, pixel no less
									than 150 dpi;
								</li>
								<li>
									1-2 photo of{" "}
									<span className="highlight">
										each director
									</span>{" "}
									in JPG format, pixel no less than 150 dpi;
								</li>
							</ol>
						</div>
					</li>
				</ul>
			</div>
			<li>
				Please submit your video material in{" "}
				<span className="highlight">one of the following ways</span>{" "}
				<div>
					<ul>
						<li>
							<span className="highlight">
								Internet transmission
							</span>
							<p>
								Upload the film’s preview version and trailer
								into Cloud Storage (such as WeTransfer) and send
								the download link and password to{" "}
								<a href="mailto:outdocs@gzdoc.cn">
									outdocs@gzdoc.cn↗
								</a>
								along with film title and contact information.{" "}
							</p>
						</li>
						<li>
							<span className="highlight">Mailing</span>
							<p>
								Please mail the copies of preview film and
								trailer in DVD/USB /Mobile Hard Disk along with
								the film title and contact information to:
							</p>
							<div className="contact-block">
								<p className="contact">
									<strong>Address: </strong> Room 3303,
									YingLong Plaza, No.76, West Huangpu Avenue,
									Tianhe District, Guangzhou, Guangdong
									Province, China.
								</p>
								<p className="contact">
									<strong>Contacts:</strong> Ms. Liang
								</p>
								<p className="contact">
									<strong>Tel:</strong> 86-020-38780150-815
								</p>
								<p className="contact">
									<strong>Zip code:</strong> 510632
								</p>
							</div>
						</li>
					</ul>
				</div>
			</li>
		</ol>
		<h3>(ii) Registration fee </h3>
		<p>
			<strong>Free entry</strong>
		</p>
		<h3>(iv) Notices for material delivery </h3>
		<p>
			If you choose to post your materials, in order to ensure the
			materials delivered on time, please use the traceable and
			signature-required express delivery service. Please do not use the
			surface mail. If the materials are sent from overseas, please use
			the international express (such as DHL or FEDEX), indicated "no
			commercial value" and "for cultural use only" on the package, and
			fill in the customs declaration value less than 10 US dollars. No
			application materials will be returned. Do not send film prints,
			master tapes or other originals. The Organizing Committee will not
			pay for the delivery fee caused by the application, and has the
			right to refuse the delivery unpaid.{" "}
		</p>
		<h3>(v) The use of information and application materials </h3>
		<ol>
			<li>
				Please fill in submission form correctly and completely. The
				information in the form will be used and published in the
				process of pre-selection, evaluation, and final announcement. If
				there is any information wrong or missing, the responsibility
				will be borne by the applicant.{" "}
			</li>
			<li>
				The contact used in the submission form will be used as the
				contact of applicant by default. The follow-up notification
				related to preselection and evaluation will be delivered to this
				contact first. Please keep the call and the mailbox accessible.{" "}
			</li>
			<li>
				After the film is submitted to OUTDOCS, the application
				information and materials will be presented on the official
				website, as well as online and offline media for publicity. The
				Organizing Committee has the right to edit and use the film
				information and materials submitted, including the film
				application information, posters, stills, trailers, or snippet
				less than 3 minutes, on OUTDOCS’s official channels.
			</li>
		</ol>
		<h3>
			(vi) Update and supplement registration information and materials{" "}
		</h3>
		<ol>
			<li>
				If applicant wants to update information or material after
				submission, please send an email to{" "}
				<a href="mailto:outdocs@gzdoc.cn">outdocs@gzdoc.cn↗</a> and
				explain the update in detail. After reviewed and approved by the
				Organizing Committee, the update will be completed.
			</li>
			<li>
				If there are follow-up materials (such as posters, stills,
				promotional materials, awards, etc.), please send the materials
				to <a href="mailto:outdocs@gzdoc.cn">outdocs@gzdoc.cn↗</a> and
				explain the updated materials.{" "}
			</li>
			<li>
				If the preview version is the version in post-production, the
				applicant can submit the final screening version after being
				selected, but applicant cannot update the version during the
				evaluation process.{" "}
			</li>
		</ol>
		<h3>(vii) Copyright Statement </h3>
		<p>
			Applicant (and applying company) shall own the copyrights or
			distribution rights of the film submitted by him/her; shall ensure
			that there is no dispute over copyright of the film; guarantee it
			has acquired the copyrights/authorizations from the copyright owners
			for the music, video, image and text contained and used in the
			films; ensure the original contents in the film do not violate the
			copyrights or legal rights of any other third parties. Any disputes,
			damages or compensations arising out of or in relation to the
			copyright infringement of the film shall be borne by its applicant
			(and applying company). The International Outdoor Documentary Film
			Festival of China reserves the right to disqualify any film with
			unauthorized copyrighted materials.
		</p>
		<h2 id="reg__awards">V. Awards </h2>
		<ul>
			<li>Grand Prize(1)</li>
			<li>Best Mountaineering Documentary Award(1) </li>
			<li>Best Nature and Biodiversity Documentary Award (1)</li>
			<li>Best Adventure Spirit Award(1)</li>
			<li>Best Outdoor Culture and Lifestyle Documentary Award (1)</li>
			<li>Best Visual Effects Award(1)</li>
			<li>Media Special Recommendation Award (1)</li>
			<li>Special Jury Award (1)</li>
		</ul>
		<h2 id="reg__evaluation">VI. Evaluation process </h2>
		<p>
			The entries will be screened for the initial evaluation, semi-final
			evaluation and final evaluation. They will be reviewed and selected
			by the Selection Committee and Jury Committee. The OC is responsible
			for inviting professionals and setting up the Selection Committee
			and the Jury Committee.{" "}
		</p>
		<ol>
			<li>
				The initial Selection committee is responsible for presenting
				the semi-finalist from all the applicants. The applicant who is
				selected for semi-finalist will be notified by email in October,
				and the list will be released on the official website.
			</li>
			<li>
				The Semi-final Jury committee is responsible for presenting the
				finalist from the semi-finalists. The finalist will be notified
				by e-mail in early November and released on the official
				website.{" "}
			</li>
			<li>
				The winners will be selected from finalists by Jury Committee
				and will be announced at The International Outdoor Documentary
				Film Festival of China Ceremony, held in November, 2020.{" "}
			</li>
		</ol>
		<h2 id="reg__notice">VII. The Notice for Finalists </h2>
		<h3>1. Finalist confirmation </h3>
		<ul>
			<li>
				<span className="highlight">
					Confirmation of Award Competition
				</span>{" "}
				<p>
					The applicant shall confirm the participation in the final
					evaluation with the OC within three working days after
					receiving the notification (email) from the OC. Once the
					applicant confirms the participation, the finalist film
					cannot be withdrawn for any reason.{" "}
				</p>
			</li>
			<li>
				<span className="highlight">
					Confirmation of Screening Session{" "}
				</span>
				<p>
					The applicant shall reply to the email and confirm whether
					to participate in the screening within three working days
					after receiving the notification (email) from the OC. Once
					the applicant confirms their participation in the screening,
					the applicant shall not withdraw for any reason.
				</p>
			</li>
		</ul>
		<h3>2. The screening version </h3>
		<p>
			After the film is selected for finalist, the official screening
			version must be submitted to the OC. Apart from the technical
			adjustments such as mixing, grading, and subtitle translation, the
			screening version must be in consistent with the preview version. OC
			Films cannot be updated during the evaluation process.{" "}
		</p>
		<h3>3. Use of information and materials of films selected</h3>
		<p>
			Once the film is selected, the application information and material
			submitted online and offline will be presented on the festival
			brochure, official website, or for online and offline media
			promotion events. The OC is entitled to edit and publicly use the
			materials, including film entry information, posters, stills,
			trailers and clips of no more than 3 minutes and on OUTDOCS’s
			official channels. If there is any information or material missing
			during the application phase, all materials must be completed at the
			finalist stage.{" "}
		</p>
		<h3>4. Classification of Premiere </h3>
		<ol>
			<li>
				<span className="highlight">Worldwide Premiere</span> - Films
				that have been internationally broadcast, screened at film
				festivals, are available online, or have been released via
				streaming, home video, or any other public platform are{" "}
				<strong>not</strong> eligible.{" "}
			</li>
			<li>
				<span className="highlight">International Premiere</span> –
				Films that have been broadcast, screened at film festivals, are
				available online, or have been released via streaming, home
				video, or any other public platform{" "}
				<strong>outside the production countries</strong> are{" "}
				<strong>not</strong> eligible.{" "}
			</li>
			<li>
				<span className="highlight">Asia Premiere</span> - Films that
				have been broadcast, screened at film festivals, are available
				online, or have been released via streaming, home video, or any
				other public platform <strong>in Asia</strong> are{" "}
				<strong>not</strong> eligible.
			</li>
			<li>
				<span className="highlight">China Premiere</span> - Films that
				have been broadcast, screened at film festivals, are available
				online, or have been released via streaming, home video, or any
				other public platform <strong>in China</strong> are{" "}
				<strong>not</strong> eligible. (This category is mainly for
				domestic work).
			</li>
		</ol>
		<h3>5. Premiere Screening Term</h3>
		<p>
			The evaluation process will not be affected by a film’s premiere
			status. Once a film, that is qualified for the premiere screening,
			also get selected into the finalist competition, it’s agreed that
			Organizing Committee has the right to premiere the film during
			documentary festival. Any third party shall not premiere the film or
			conduct any activity that will breach the premiere screening term
			between the film owner and the OC.{" "}
		</p>
		<h3>Screening schedule</h3>
		<p>
			The finalist films will be publicly screened once or twice from
			November to December, 2020. The screening schedule and venue will be
			decided by the Organizing Committee. The winning films will be
			screened at least once before December 30, 2020. The screening times
			would not exceed the number of awards the film will obtain.{" "}
		</p>
		<h3>7. Publicity requirements </h3>
		<p>
			After the film is selected, the OC will provide the OUTDOCS logos
			for Finalist or Winner. The film selected must include the OUTDOCS
			logos in all its subsequent promotional materials, and it’s strictly
			forbidden to modify the logo.{" "}
		</p>
		<h2 id="reg__statement">VIII. Statement</h2>
		<ol>
			<li>
				Any changes against the regulations will be posted on the "
				Submission " page of the official website. The applicant can
				withdraw from the event if he/she thinks the modified clauses
				are unacceptable by notifying the Organizing Committee within 10
				working days after the announcement is posted. Otherwise, it
				will be deemed that the applicant accepts all the modified
				clauses.
			</li>
			<li>
				If there were any situations that are not specified above, the
				OC reserves all rights for the final explanation of the
				regulations.
			</li>
			<li>
				The applicant signing up for The International Outdoor
				Documentary Film Festival of China should accept all the above
				terms and conditions. If there is any dispute, it shall be
				governed by and construed in accordance with the laws of PRC.{" "}
			</li>
		</ol>
	</article>
);

const Sidebar = (props) => {
	const url = useHistory().location.pathname;
	const anchors = [
		{
			id: 1,
			chnName: "关于中国国际户外影像嘉年华",
			engName: "Introduction",
			anchor: "#reg__introduction",
		},
		{
			id: 2,
			chnName: "户外影像嘉年华举办日期及地点",
			engName: "Date of Event",
			anchor: "#reg__dateOfEvent",
		},
		{
			id: 3,
			chnName: "参评资格",
			engName: "Eligibility",
			anchor: "#reg__elligibility",
		},
		{
			id: 4,
			chnName: "报名须知",
			engName: "Submission Guidance",
			anchor: "#reg__guidance",
		},
		{
			id: 5,
			chnName: "评选项目设置",
			engName: "Awards",
			anchor: "#reg__awards",
		},
		{
			id: 6,
			chnName: "评选流程",
			engName: "Evaluation Process",
			anchor: "#reg__evaluation",
		},
		{
			id: 7,
			chnName: "入围影片须知",
			engName: "The Notice for Finalists",
			anchor: "#reg__notice",
		},
		{
			id: 8,
			chnName: "声明",
			engName: "Statement",
			anchor: "#reg__statement",
		},
	];

	function scrollToAnchor(el) {
		const elementPosition = el.offsetTop - 3;
		window.scroll({
			top: elementPosition,
			left: 0,
			behavior: "smooth",
		});
	}

	return (
		<aside className="sidebar" style={props.style}>
			<div className="sidebar__menu">
				{anchors.map((i) => (
					<div key={i.id} onClick={props.onChange}>
						<HashLink
							to={i.anchor}
							scroll={(el) => scrollToAnchor(el)}
						>
							{props.isEng ? i.engName : i.chnName}
						</HashLink>
					</div>
				))}
			</div>
			<div className="sidebar__contacts">
				<h2>
					{props.isEng
						? "Questions? \nFeel free to contact us!"
						: "仍有疑问？欢迎联系我们。"}
				</h2>
				<div className="sidebar__contacts">
					<p className="contact-name">
						{props.isEng ? "Ms.Liang" : "梁小姐"}
					</p>
					<p>
						{props.isEng ? "Tel: " : "联系电话："}020-38780150-815
					</p>
					<p>
						{props.isEng ? "Email: " : "工作邮箱："}outdocs@gzdoc.cn
					</p>
				</div>
			</div>
		</aside>
	);
};

const CallingForEntry = (props) => {
	const { isEng } = useContext(LangContext);
	const [isExpanded, toggleExpansion] = useState(false);

	// function scrollThere() {
	// 	let rem = 16;
	// 	window.scrollTo({ top: 20 * rem, behavior: "smooth" });
	// }

	return (
		<div className="container">
			<Navbar />
			<div className="contents">
				<Header title={props.title} />
				<div className="fast-links">
					{/* <a className="text-btn" onClick={scrollThere}>
						{isEng ? "Regualtions" : "阅读章程"}↓
					</a> */}
					<a
						href={isEng ? submissionForm.eng : submissionForm.chn}
						className="btn"
					>
						{isEng ? "Submission Form" : "下载报名表格"}↗
					</a>
				</div>
				<div
					className="sidebar__mobile"
					style={
						isExpanded ? { display: "block" } : { display: "none" }
					}
				>
					<Sidebar isEng={isEng} onChange={() => toggleExpansion(!isExpanded)}/>
				</div>
				<div className="article__container">
					<Sidebar isEng={isEng} />
					{isEng ? <ArticleENG /> : <ArticleCHN />}
				</div>
				<button
					className="menu-btn"
					onClick={() => toggleExpansion(!isExpanded)}
				>
					<div className="icon_holder">{isExpanded ? "✗" : "Ⅲ"}</div>
				</button>
			</div>
			<Footer />
		</div>
	);
};

export default CallingForEntry;
