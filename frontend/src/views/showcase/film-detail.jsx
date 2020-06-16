import React from 'react';
import { useParams } from 'react-router-dom';

import './styles.scss';
import filmData from '../../data/zh-cn/filmData.json'

import Navbar from '../../components/nav/navbar';
import Hero from '../../components/hero/hero'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const FilmDetail = ({ props }) => {
    let content;
    let { id } = useParams();
    
    for (var i = 0; i < filmData.length; i++) {
        if (filmData[i].path_name === id ){
            content = filmData[i]
            // console.log(data)
        }
    }

    return (
		<div className="container">
            <Navbar />
            <Hero height="80vh" imageURL={content.img_url}></Hero>
            <Footer />
		</div>
	);
}

export default FilmDetail