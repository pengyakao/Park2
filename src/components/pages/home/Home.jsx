import React, { Component } from 'react';
import './style.css';
import Slider from './component/slider';
import About from './component/about';
import News from './component/news';
import FAQ from './component/faq';
import Weather from './component/weather';
import Trans from './component/trans';




class Home extends Component {
    state = {}
    render() {
        return (
            <div className="home">
                <Slider />
                <About />
                <News />
                <FAQ />
                <Weather />
                <Trans />
            </div>
        );
    }
}

export default Home;