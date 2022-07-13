import React, { Component } from 'react';
import '../activities_components.css';

class ActClass extends Component {
    state = {}
    render() {
        return(
            <div>
                <div id="activeType" className="titleSW">活動類別</div>
                <div className="btnSelect">
                    <button className="type-btn btn-live"><a href="#">現場LIVE</a></button>
                    <button className="type-btn btn-popup"><a href="#">快閃活動</a></button>
                    <button className="type-btn btn-car"><a href="#">風格餐車</a></button>
                    <button className="type-btn btn-market"><a href="#">商家市集</a></button>
                    <button className="type-btn btn-forum"><a href="#">創作者論壇</a></button>
                </div>
            </div>
        );
    }
}

export default ActClass;