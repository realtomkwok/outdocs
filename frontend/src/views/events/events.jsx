import React from 'react';

import './styles.scss'

import Navbar from "../../components/nav/navbar";
import Footer from "../../components/footer/footer";
import { Gallery } from "../../components/sections/gallery";
import { Header } from "../../components/header/header";

const Events = (props) => (
	<div className="container">
		<Navbar />
		<div className="contents">
			<Header title={props.title} />
			{/* <Gallery /> */}
		</div>
		<Footer />
	</div>
);

export default Events;