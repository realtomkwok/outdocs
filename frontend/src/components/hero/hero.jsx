import React from 'react';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import './styles.scss';

export const Hero = () => {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);

    return (
		// <div className="ss__wrapper">
		// 	<section className="hero__container">
		// 		<div className="hero__img"></div>
		// 	</section>
		// 	<motion.div className="ss__container" style={{ scale }}>
		// 		<svg viewBox="0 0 235 100" className="ss__cinemadow">
		// 			<defs>
		// 				<mask id="ss__mask">
		// 					<path d="M0 0v100h235V0zm18.43 95C10.46 95 5 91.11 5 85s5.5-10 13.43-10 13.49 3.86 13.49 10-5.55 10-13.49 10zM57 87.49C57 92.24 52.83 95 45.32 95s-11.65-2.73-11.65-7.48v-12.1h8.08v11.91c0 1.5.89 2.49 3.57 2.49s3.58-1 3.58-2.49V75.42H57zm23.6-6.87h-7v13.9h-8.14v-13.9h-7v-5.2h22.12zm13.88 13.9H82.55v-19.1h12c8.3 0 12.48 3.22 12.48 9.55s-4.2 9.55-12.57 9.55zm27.42.45c-8 0-13.48-3.86-13.48-10s5.54-10 13.48-10 13.49 3.86 13.49 10S129.82 95 121.88 95zm28.43-5.12c2.18 0 4-.75 4.58-2.57h8.26c-1 4.47-6.15 7.72-13.23 7.72-7.76 0-13.2-3.92-13.2-10.06S142 75 150.38 75c7.48 0 11.66 3.09 12.8 7.75h-8.33c-.61-1.77-2.32-2.6-4.65-2.6-3.18 0-5.11 1.48-5.11 4.8s2.07 4.9 5.22 4.9zM175.88 95c-7.8 0-11.48-2.73-11.73-6.73h8c.18 1.77 1.65 2.2 3.9 2.2s3.33-.43 3.33-1.31-.86-1.26-3.62-1.56l-3.07-.32c-4.61-.48-7.9-2.36-7.9-6 0-3 2.11-6.25 10.83-6.25 6.65 0 10.73 1.88 11.19 6.3h-7.47c-.18-1.15-1-1.82-3.43-1.82-2.22 0-3.08.48-3.08 1.23s.86 1.13 2.4 1.29l3.07.32c6.37.67 9.23 2.5 9.23 5.9-.03 4.07-4 6.75-11.65 6.75z" />
		// 				</mask>
		// 			</defs>
		// 			<rect
		// 				x="0"
		// 				y="0"
		// 				width="100%"
		// 				height="1"
		// 				className="ss__background"
		// 			></rect>
		// 		</svg>
		// 	</motion.div>
		// </div>
        <section className="hero__container">
            <div className="hero__img"></div>
        </section>
	);
}