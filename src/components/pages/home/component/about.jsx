import React, { Component } from 'react';
import Title from '../../../commons/title/Title'

class about extends Component {
    state = {}
    render() {
        return (
            <div className='aboutWrapper'>
                <div id="home_aboutArea">
                    <Title title="關於Park2"/>
                    <p id="home_aboutContent">“ PARK2，一座大人系非典型公園， 這裡集結植物、戶外生活、咖啡選物、風格餐飲、酒吧、點心等16個個性品牌！是一處綜合公園及風格聚落特質的複合型場域。“</p>
                    <img src={process.env.PUBLIC_URL + '/home/about.svg'} />
                </div>
                <div>
                    <img className="home_buttom" src={process.env.PUBLIC_URL + '/home/about_bottom.svg'} />
                </div>
            </div>
        );
    }
}

export default about;