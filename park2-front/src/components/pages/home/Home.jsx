import React, { Component } from 'react';
import './style.css';
import Slider from './component/slider';
import About from './component/about';
import News from './component/news';
import FAQ from './component/faq';
import Weather from './component/weather';
import Trans from './component/trans';
import Header from '../../commons/header/Header';
import Footer from '../../commons/footer/footer';

class Home extends Component {
    state = {}
    render() {
        return (
            <div className="home">
                <Header />
                <Slider />
                <About />
                <News />
                <FAQ />
                <Weather />
                <Trans />
                <Footer />
            </div>
        );
    }
}

export default Home;