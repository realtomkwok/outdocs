import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Navigation from "../../locale/navigations.json";
import LangContext from "../../locale/langContext";

import "./styles.scss";

function Hero({
	height,
	imagePosition,
	imageURL,
	imagePreLoad,
	heroClassName
}: {
	height: string;
	imagePosition: string;
	imageURL: string;
	imagePreLoad: string;
	heroClassName: string;
}) {
	const { isEng } = useContext(LangContext);

	return (
		<section
			className={`hero__container ${heroClassName}`}
			style={{ height: `${height}` }}
		>
			<div
				className="hero__img"
				style={{
					backgroundImage: `url('${imageURL}'), linear-gradient(${imagePreLoad})`,
					backgroundPosition: `${imagePosition}`,
				}}
			></div>
			<div className="hero__contents">
				<div className="hero__text">
					<h1 className="hero__title">
						{isEng ? "Submissions Now Open." : "全球征集现已开始。"}
					</h1>
					<Link
						to={Navigation.primaryBtn.path}
						className="hero__link text-btn"
					>
						{isEng ? "Learn More↗" : "请即报名↗"}
					</Link>
				</div>
			</div>
		</section>
	);
}

Hero.defaultProps = {
	height: "100vh",
	imageURL: undefined,
	imagePosition: "center",
	imagePreLoad: "#FFF, #FFF",
	heroClassName: undefined
};

export default Hero;
