import React from 'react';
import './styles.scss';


function Hero({ height, imagePosition, imageURL }: { height: string; imagePosition:string; imageURL: string }) {
	return(
		<section
			className="hero__container"
			style={{ height: `${height}` }}
		>
			<div
				className="hero__img"
				style={{ backgroundImage: `url('${imageURL}')`, backgroundPosition: `${imagePosition}`}}
			></div>
		</section>
	)
}

Hero.defaultProps = {
	height: '100vh',
	imageURL: undefined,
	imagePosition: 'center'
};

export default Hero