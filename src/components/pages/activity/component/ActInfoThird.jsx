import React, { Component } from 'react';
import '../activities_components.css';
// import '../activities_layout_w992_infopage';
import Title from '../../../commons/title/Title';

class ActInfoThird extends Component {
    state = {}
    render() {
        return (
            <div id="activeThirdInfo">
                <div>
                    <div className="titleSG">活動介紹</div>
                    <span>
                        PARK2講了這麼久的城市裡的戶外生活，終於要認真的玩一場了！
                        <br></br>
                        《我出去一下．風格品牌出店計劃》這次集結包含BUTEO、AURMO TENT TAIWAN、Bell's Camping、BASE 550、樹德企業 SHUTER、逐露天下、Forest
                        Outdoor、BARRACK09、地主品牌ROCKLAND及ROCKLAND
                        P.L.U.S等10大露營品牌帶來帳篷、裝備、燈具等露營用具，當天也將在現場舉辦限時限定的啤酒瑜珈、精油按摩、露營講座、野外求生傘繩編織、波希米亞編織等5大體驗活動，限定營火晚會也將搭配特殊的手碟音樂表演限時登場！
                        <br></br>
                        邀請各式戶外生活風格品牌齊聚，一起在城市綠洲中搭營帳、燃營火、點營燈！以戶外露營為主盛大開場的市集活動不只邀請品牌店家「我出去一下」，更邀請大家當天帶上裝備，穿出你的Outdoor風，一起加入我們！
                        <br></br>
                    </span>
                </div>
                <div>
                    <div className="titleSG">活動照片</div>
                    {/* <div class="tripleArrow float-left pcHidden">
                        <img src="/activity/icon/triple_left_s.svg" alt=""/>
                    </div> */}
                    <div>
                        <div className="activePhoto float-center">
                            <img src="/activity/img/activities/我出去一下_城市裡的戶外生活篇.jpeg" alt=""/>
                        </div>
                    </div>
                    {/* <div class="tripleArrow float-right pcHidden">
                        <img src="/activity/icon/triple_right_s.svg" alt=""/>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default ActInfoThird;