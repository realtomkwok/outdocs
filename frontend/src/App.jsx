import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 
import { motion } from "framer-motion";

import NavBar from './components/navbar/navbar';

class SplashScreen extends React.Component {
  render() {
    return (
      <div>
        
      </div>
      )
  }
}

class Hero extends React.Component {
  render() {
    return (
      <div className="hero__container">
        <div className="hero__img"></div>
        <NavBar></NavBar>
      </div>
	);
  }
}

class App extends React.Component {
  render() {
    return (
		<div className="container">
			<Hero></Hero>
			<SplashScreen></SplashScreen>
		</div>
	);
  }
}

export default App;
