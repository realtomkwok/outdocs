import React from 'react';
import '../../App.scss';
import './styles.scss';

import Navbar from '../../components/nav/navbar';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

import filmData from '../../data/zh-cn/showcaseFilms.json';

const SearchBar = (props) => (
    <div className="search__container">
        <input className="search__input" type="text" placeholder='搜寻 '></input>
    </div>
)

const FilmCard = (props) => (
    <div className="film-card__img" style={{ backgroundImage: `${props.imageUrl}` }}>
        <div className="film-card__info">
            <div className="film-card__title">{props.title}</div>
            <div className="film-card__director">{props.director}</div>
            <div className="film-card__award">{props.award}</div>
        </div>
    </div>
)

class Showcase extends React.Component {
    render() {
        return (
			<div className="container">
				<Navbar />
				<div className="contents">
					<Header
						title="作品展示"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
					/>
					<SearchBar />
					<div className="showcase__gallery">
						{filmData.map(
							({ title, director, imageURL, award }, index) => (
								<div
									className="film-card__container"
									key={index}
								>
									<FilmCard
										imageUrl={imageURL}
										title={title}
										director={director}
										award={award}
									></FilmCard>
								</div>
							)
						)}
					</div>
					<Footer />
				</div>
			</div>
		);
    }
}

export default Showcase;