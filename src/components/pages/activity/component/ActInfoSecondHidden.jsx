import React, { Component } from 'react';
import '../activities_components.css';
// import '../activities_layout_w992_infopage';
import Title from '../../../commons/title/Title';

class ActInfoSecondHidden extends Component {
    state = {}
    render() {
        return (
            <div id="activeSecondInfo" className="pcHidden">
                <div>
                    <div className="titleSG">活動名稱</div>
                    <p>我出去一下．風格品牌出店計劃《城市裡的戶外生活篇》</p>
                </div>
                <div>
                    <div className="titleSG">活動時間</div>
                    <p>
                        <span>
                            6/18 Sat.~6/19 Sun.
                            14:00-21:00
                        </span>
                    </p>
                </div>
                <div>
                    <div className="titleSG">活動地點</div>
                    <p>PARK2草悟廣場 1F & B1</p>
                </div>
            </div>
        );
    }
}

export default ActInfoSecondHidden;