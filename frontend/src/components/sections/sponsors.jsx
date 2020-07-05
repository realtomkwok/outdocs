import React, { useState } from "react";
import { Link } from "react-router-dom";
import CrossfadeImage from "react-crossfade-image";

import OutdocsTextLogo from "../logos/outdocsTextLogo";
import sponsorsData from "../../data/sponsors.json";

const logos = [];
for (var i = 0; i < sponsorsData.length; i++) {
	logos.push(sponsorsData[i].logo_path);
}

class Sponsors extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imageIndex: 0,
		};
	}

	changeImage = () => {
		if (this.state.imageIndex === logos.length - 1) {
			this.setState({ imageIndex: 0 });
		} else {
			this.setState({ imageIndex: this.state.imageIndex + 1 });
		}
	};

	componentDidMount() {
		setInterval(() => this.changeImage(), 5000);
	}

	render() {
		return (
			<div className="sponsors">
				<div className="sponsors__header">
					<OutdocsTextLogo></OutdocsTextLogo>
					<span>感谢以下有趣机构支持</span>
				</div>
				<div className="sponsors__container">
					<Link to="/sponsors">
						<CrossfadeImage
							src={logos[this.state.imageIndex]}
							duration={300}
							timingFunction={"ease"}
							containerClass="sponsors__logo"
						></CrossfadeImage>
					</Link>
				</div>
			</div>
		);
	}
}

export default Sponsors;
