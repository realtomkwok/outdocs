import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

import "../../App.scss";
import "./styles.scss";

import Navbar from "../../components/nav/navbar";
import Footer from "../../components/footer/footer";
import { Header } from "../../components/header/header";

import Gallery from "../../components/sections/gallery";

const SearchBar = (props) => (
	<div className="search__container">
		<input className="search__input" type="text" placeholder="搜寻"></input>
	</div>
);

// const Showcase = (props) => {

// 	return(
// 		<ParallaxProvider>

// 		</ParallaxProvider>
// 	)
// }
// 
function Showcase() {
	let { url } = useRouteMatch();

	return (
		<div className="container">
			<Navbar />
			<div className="contents">
				<Header
					title="参展作品"
					// subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				/>
				{/* <SearchBar /> */}
				<Gallery category="winners"></Gallery>
				<Gallery category="finalist"></Gallery>
				<div id="showcase_semi-finalist" className="showcase">
					<Link to={`${url}/semi-finalists`}>
						<div className="showcase__heading">
							<h2>复评入围影片↗</h2>
							<h2></h2>
						</div>
						<h3 className="showcase__heading-alt">
							Semi-finalists
						</h3>
					</Link>
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default Showcase;
