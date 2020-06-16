import React from 'react';
import './styles.scss';


function Hero({ height, imageURL }: { height: string; imageURL: string }) {
	return(
		<section
			className="hero__container"
			style={{ height: `${height}` }}
		>
			<div
				className="hero__img"
				style={{ backgroundImage: `url('${imageURL}')` }}
			></div>
		</section>
	)
}

Hero.defaultProps = {
	height: '100vh',
	imageURL: undefined,
};

export default Hero