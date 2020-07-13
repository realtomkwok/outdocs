import React from "react";
// import { Link, useRouteMatch } from "react-router-dom";

import "./styles.scss";

import Navbar from "../../components/nav/navbar";
import Footer from "../../components/footer/footer";
import { Gallery } from "../../components/sections/gallery";
import { Header } from "../../components/header/header";

import FigureData from "../../data/zh-cn/figureData/figures.json";

const Figures = (props) => {
	return (
		<div className="container">
			<Navbar />
			<div className="contents">
				<Header title={props.title} />
				<Gallery data={FigureData} galleryClassName='figure-gallery'></Gallery>
			</div>
			<Footer />
		</div>
	);
};

export default Figures;
