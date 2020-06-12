import React from 'react';
import '../../App.scss';
import './styles.scss';

import Navbar from '../../components/nav/navbar';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

const SearchBar = (props) => (
    <div className="search__container">
        <input className="search__input" type="text" placeholder='搜寻 '></input>
    </div>
)

const FilmCard = (props) => (
    <div className="film-card__container">
        <div className="film-card__info">
            <div className="film-card__title"></div>
            <div className="film-card__"
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
					<Footer />
				</div>
			</div>
		);
    }
}

export default Showcase;