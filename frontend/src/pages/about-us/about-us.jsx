import React from 'react';
import "../../App.scss";

import NavBar from "../../components/nav/navbar";
import Footer from "../../components/footer/footer";

class About extends React.Component {
    render() {
        return (
            <div className="container">
                <NavBar></NavBar>
                <Footer></Footer>
            </div>
        )
    }
}

export default About;