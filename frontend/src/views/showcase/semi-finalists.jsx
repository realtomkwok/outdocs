import React from "react";
import './styles.scss';

import NavBar from "../../components/nav/navbar";
import Footer from "../../components/footer/footer";
import { Header } from "../../components/header/header";

import FilmData from "../../data/zh-cn/filmData/semiFinalists.json";

const FilmList = (props) => {

    const renderHeader = (props) => (
		<thead>
			<tr>
				<th>片名</th>
				<th>时长</th>
				<th>导演</th>
			</tr>
		</thead>
	);

    const renderRows = (props) => (
		<React.Fragment>
			<tbody>
				{FilmData.map(
					(
						{ title, title_eng, duration, director, director_eng },
						index
					) => (
						<tr key={index}>
							<tr className="table__film-title">
								<td className="chn">{title}</td>
								<td className="eng">{title_eng}</td>
							</tr>
							<td>{duration}</td>
							<tr className="table__film-director">
								<td className="chn">{director}</td>
								<td className="eng">{director_eng}</td>
							</tr>
						</tr>
					)
				)}
			</tbody>
		</React.Fragment>
	);

    return (
		<div id={props.id}>
			<table>
				{renderHeader()}
				{renderRows()}
			</table>
		</div>
	);
}

const SemiFinalist = (props) => (
	<div className="container">
		<NavBar></NavBar>
		<div className="contents">
			<Header
				title="复评入围影片"
				displayBackBtn={true}
				prevPage="参展作品"
				// subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
			></Header>
            <FilmList id="semi-finalists"></FilmList>
			<Footer></Footer>
		</div>
	</div>
);

export default SemiFinalist;
