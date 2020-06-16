import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom'

import '../../App.scss';
import './styles.scss';

import Navbar from '../../components/nav/navbar';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { FilmCard } from '../../components/sections/cards';

import filmData from '../../data/zh-cn/filmData.json';

const SearchBar = (props) => (
    <div className="search__container">
        <input className="search__input" type="text" placeholder='搜寻'></input>
    </div>
)

function Showcase() {
	let { url } = useRouteMatch();

	return (
		<div className="container">
			<Navbar />
			<div className="contents">
				<Header
					title="作品展示"
					// description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				/>
				{/* <SearchBar /> */}
				<div className="showcase__gallery">
					{filmData.map(
						(
							{ title, director, img_url, award, path_name },
							index
						) => (
							<Link
								to={{
									pathname: `${url}/${path_name}`,
								}}
								className="film-card__container"
								key={index}
							>
								<FilmCard
									imageURL={img_url}
									title={title}
									director={director}
									award={award}
								></FilmCard>
							</Link>
						)
					)}
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default Showcase;