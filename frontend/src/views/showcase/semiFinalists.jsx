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
			<tbody className="table__row">
				{FilmData.map(
					(
						{ title, title_eng, duration, director, director_eng },
						index
					) => (
						<tr key={index}>
							<td>
								<table className="table__film-title">
									<tbody>
										<tr>
											<td className="chn">{title}</td>
											<td className="eng">{title_eng}</td>
										</tr>
									</tbody>
								</table>
							</td>
							<td>{duration}</td>
							<td>
								<table>
									<tbody>
										<tr className="table__film-director">
											<td className="chn">{director}</td>
											<td className="eng">
												{director_eng}
											</td>
										</tr>
									</tbody>
								</table>
							</td>
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
				subtitle="经过 2019 OUTDOCS 初评委员会的多轮严格筛选，以下 63 部作品脱颖而出，入围复评。这些影片兼具艺术价值与人文关怀，在展现体育文化、自然奇观、讲述户外探险奇遇的同时，传递极具感染力的体育精神，启发大众对生命的敬畏与热爱。"
				displayBackBtn={true}
				prevPage="参展作品"
			></Header>
			<FilmList id="semi-finalists"></FilmList>
		</div>
		<Footer></Footer>
	</div>
);

export default SemiFinalist;
