import React, { Component } from 'react';
import '../activities_components.css';
// import '../activities_layout_w992_infopage';
import Title from '../../../commons/title/Title';

class ActInfoFirst extends Component {
    state = {}
    render() {
        return (
            <div id="activeFirstInfo">
                <div id="activeImg">
                    <img src="/activity/img/activities/我出去一下_城市裡的戶外生活篇-2.jpeg" alt=""/>
                </div>
                <Title title="我出去一下．風格品牌出店計劃《城市裡的戶外生活篇》"/>
                <div id="activeLabel">
                    <div class="triangle-market"></div>
                    <div class="card-label-market">商家市集</div>
                </div>
            </div>
        );
    }
}

export default ActInfoFirst;