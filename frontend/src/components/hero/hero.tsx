import React from "react";
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
	return (
		<section className={`hero__container ${heroClassName}`} style={{ height: `${height}` }}>
			<div
				className="hero__img"
				style={{
					backgroundImage: `url('${imageURL}'), linear-gradient(${imagePreLoad})`,
					backgroundPosition: `${imagePosition}`,
				}}
			></div>
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
