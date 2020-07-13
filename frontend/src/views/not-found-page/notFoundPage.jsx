import React, { useContext } from "react";
import { Link } from "react-router-dom";

import LangContext from "../../locale/langContext";
import FilmData from "../../data/zh-cn/filmData/finalists.json";
import Navbar from "../../components/nav/navbar";

import "./styles.scss";

const NotFoundPage = () => {
	const { isEng } = useContext(LangContext);
	let maxNum = FilmData.length;
	let randomNum = Math.floor(Math.random(maxNum) * Math.floor(maxNum));

	const bkgd = {
		imageURL: FilmData[randomNum].hero_url,
		imagePreload: FilmData[randomNum].hero_preload,
		filmTitleCHN: FilmData[randomNum].title_chn,
		filmTitleENG: FilmData[randomNum].title_eng,
		filmDirectorCHN: FilmData[randomNum].director_chn,
		filmDirectorENG: FilmData[randomNum].director_eng,
		pagePath: FilmData[randomNum].path_name,
	};

	const bkgdStyle = {
		backgroundImage: `url(${bkgd.imageURL}), linear-gradient(${bkgd.imagePreload})`,
        backgroundPosition: `center`,
        backgroundSize: `cover`
	};

	return (
		<div className="not-found__container">
			<Navbar></Navbar>
			<div className="not-found__left">
				<div className="not-found__left-content">
					{/* <div className="not-found__404">404</div> */}
					<h1 className="not-found__title">
						{isEng
							? "We can't seem to find the page you're looking for."
							: "很抱歉，你要查找的网页找不到。"}
					</h1>
					<Link to="/" className="not-found__links text-btn">
						← {isEng ? "Back to Home" : "返回主页"}
					</Link>
					<div className="not-found__film-info">
						<Link to={`showcase/film/${bkgd.pagePath}`}>
							<h2>
								{isEng ? bkgd.filmTitleENG : bkgd.filmTitleCHN}{" "}
								↗
							</h2>
						</Link>
						<div>
							{isEng
								? bkgd.filmDirectorENG
								: bkgd.filmDirectorCHN}
						</div>
					</div>
				</div>
			</div>
			<div className="not-found__right" style={bkgdStyle}></div>
		</div>
	);
};

export default NotFoundPage;
