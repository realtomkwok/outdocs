import React from "react";

import "./styles.scss";

import Navbar from "../../components/nav/navbar";
import Footer from "../../components/footer/footer";
import { Header } from "../../components/header/header";

import SponsorsData from "../../data/sponsors.json";

const SponsorsGird = (props) => (
	<div className="grid__container">
		{SponsorsData.map(
			({ sponsor_name, category, logo_path, logo_width, sponsor_website }, index) => (
				<a className="sponsor__container" href={sponsor_website} key={index}>
					<img
						className="sponsor__logo"
						src={logo_path}
                        style={{ width: `${logo_width}` }}
                        alt={sponsor_name}
					></img>
					<div className="sponsor__description">
						<div className="sponsor__category">{category}</div>
						<h3 className="sponsor__name">{sponsor_name}</h3>
					</div>
				</a>
			)
		)}
	</div>
);

const Sponsors = (props) => (
	<div className="container">
		<Navbar />
		<div className="contents">
			<Header
				title={props.title}
				subtitle="OUTDOCS 非常感谢能与以下主要伙伴进行积极融洽的合作，他们慷慨的支持助力了 OUTDOCS 项目的实现，共同为体育精神与文化、户外探险运动、极限影像、旅行人文故事等领域的发展做出创造性的贡献。"
			/>
			<SponsorsGird />
		</div>
		<Footer />
	</div>
);

export default Sponsors;
