import React from 'react';
import "../../App.scss";

import NavBar from "../../components/nav/navbar";
import Footer from "../../components/footer/footer";
import { Header } from "../../components/header/header";


class About extends React.Component {
    render() {
        return (
			<div className="container">
				<NavBar></NavBar>
				<div className="contents">
					<Header
						title="我们是谁"
						subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					></Header>
					<Footer></Footer>
				</div>
			</div>
		);
    }
}

export default About;