import React, { useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";

import "./styles.scss";

import Navbar from "../../components/nav/navbar";
import Footer from "../../components/footer/footer";
import { Header } from "../../components/header/header";

import { FilmGallery } from "../../components/sections/gallery";

const SearchBar = (props) => (
	<div className="search__container">
		<input className="search__input" type="text" placeholder="搜寻"></input>
	</div>
);

const Showcase = (props) => {
	let { url } = useRouteMatch();
	
	return (
		<div className="container">
			<Navbar />
			<div className="contents">
				<Header title={props.title} />
				{/* <SearchBar /> */}
				<FilmGallery category="winners"></FilmGallery>
				<FilmGallery category="finalist"></FilmGallery>
				<div id="showcase_semi-finalist" className="showcase">
					<Link to={`${url}/semi-finalists`}>
						<h2 className="showcase__heading">
							2019复评入围影片↗
						</h2>
						<h3 className="showcase__heading-alt">
							Semi-finalists
						</h3>
					</Link>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Showcase;
