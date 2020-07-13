import React, { useContext } from "react";

import LangContext from "../../locale/langContext";
import "./styles.scss";

import NavBar from "../../components/nav/navbar";
import Footer from "../../components/footer/footer";
import { Header } from "../../components/header/header";

const AboutCHN = () => (
	<article id="about__chn">
		<p id="brief-intro">
			中国国际户外影像嘉年华（以下简称“OUTDOCS”）旨在用纪录片定格与致敬壮美的世界景观和人类不断进取的运动与探险精神。
			<span className="highlight">
				中国拥有全世界最丰富的自然景观资源，培育了内涵丰富的山地文化，适合开展各样的户外运动。
			</span>
			OUTDOCS以影像为载体，为大众推广积极的生活方式，启发生命创造力；以影像为聚合力，
			<strong>
				弘扬与发展中国在全球范围内体育精神、自然探险、户外文化与运动，打造中国特色的体育运动与山地文化名片。
			</strong>
		</p>
		<p>
			自2017年开设户外题材纪录片展映活动以来，我们积极探索打造和传递优质户外文化的前进之路。
			<strong>
				2018年在广州媒体港首次举行互动沉浸体验的嘉年华，盛况空前。
			</strong>
			2019年“中国国际户外影像嘉年华（OUTDOCS）”首次开启全球影片征集，征集开启一个月内，共收到来自全球88个国家与地区993部/集作品，涵盖
			<span className="highlight">
				体育精神、自然探险、户外文化、极限运动、环境保护、旅行人文、山地文化
			</span>
			等主题，其中涉及攀登、滑雪、越野跑、滑翔伞、攀岩、攀冰、扁带、皮划艇、深潜、自行车等十余种户外体育运动品类，覆盖范围广，内容十分丰富，且其中不乏在国际知名山地电影节展中获奖、入围的影片，具备国际影响力。
		</p>
		<p>
			同时，OUTDOCS通过
			<strong>影片征集评选、公众展映、互动体验、产业展览</strong>
			等多种形式，为纪录片导演、制作人、机构、行业协会与户外运动爱好者提供
			<strong>爱好交流、文化创意融合孵化、商务合作</strong>
			的平台，鼓励更多创作者、更多平台，合力打造
			<strong>
				体育运动、户外文化、旅行人文、自然探险与环保等题材影像
			</strong>
			的人文价值高地，实现户外文化价值共创，全民共享体育盛宴。
		</p>
		<p>
			<span className="highlight">
				每一次探险都值得被记录，每一份热爱都值得被瞩目。对自然的敬畏与热爱人类的生命本能，对未知的探索与创造是世界的根本。
			</span>
			OUTDOCS希望通过优秀的户外影像和丰富的户外文化活动，打造和传播有深度、有广度、有力度、有温度、多角度的立体“五度”户外文化内容。让自然与户外文化通过真实影像的方式走进大众视野，让户外文化融入群众生活，成为探索自然、沟通文化、连接世界的视窗。
		</p>
	</article>
);

const AboutENG = () => (
	<article id="about__eng">
		<p>
			The International Outdoor Documentary Film Festival of China (herein
			after referred to as “OUTDOCS”) aims to pay tribute to the splendid
			world scenery and the progressive sports and adventure spirit of
			humanity. With films, we introduce our audience to the eye-opening
			outdoor lifestyle and remind them their love for life. With films,
			mankind can pay tribute to the splendid world scenery, the
			progressive sports, and the adventure spirit of humanity.
		</p>
		<p>
			In 2017, the very first outdoor film screening session was
			established and organized. Its primary aims were to explore the
			fields of outdoor documentaries’ content creations and developments.
			In 2018, an interactive experience outdoor carnival was held in
			Guangzhou International Media Harbor, causing an unprecedented grand
			occasion. In 2019, OUTDOCS was officially established, and for the
			first time, the global film award competition was launched. Within
			one month, a total of 993 submissions from 88 countries or regions
			around the world were collected, covering Sport spirits, adventure,
			outdoor culture, extreme sports, environment protection, travel
			stories, mountaineer culture and community and so on. Over 10 kinds
			of outdoor extreme sports were involved, including wingsuit flying,
			paragliding, climbing, rock climbing, ice climbing, canoeing, deep
			diving, ultra-running, cycling, etc. With broad coverage, rich
			content, and award-winning films and finalists in internationally
			renowned mountain film festivals, OUTDOCS enjoys its international
			influence.
		</p>
		<p>
			Through various cultural activities such as competitions, public
			screenings, interactive events, exhibitions etc., OUTDOCS provides
			extraordinary opportunities for outdoorsy people, extreme sports
			fans, adventurers, photographers, filmmakers and environmentalists
			to share their profound journeys, unexpected adventures, and
			ground-breaking expeditions.
		</p>
		<p>
			Every adventure is worthy of recording, and every passion is worthy
			of attention. OUTDOCS hopes to create and spread “five-dimensional”
			outdoor culture which is deep, broad, strong, warm, and
			multiple-angled through excellent outdoor images and rich outdoor
			activities. This allows outdoor documentary films to enter the
			public vision and integrate outdoor sports into the masses’ life.
			OUTDOCS is striving to become a platform for people to explore, to
			discover and to connect.
		</p>
	</article>
);

const About = (props) => {
	const { isEng } = useContext(LangContext);

	return (
		<div className="container">
			<div className="contents">
				<NavBar></NavBar>
				<Header title={props.title}></Header>
				<div className="article__container">
					{isEng ? <AboutENG /> : <AboutCHN />}
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default About;
