import React, { Component } from 'react';
import './style.css';
// import { findDOMNode } from 'react-dom';
// import Lightbox from 'rc-lightbox';
// import $ from "jquery";

class StoreEach extends Component {
    state = {}
    render() {
        return (
            <div className="container store-each">

                <div className="circleImg pcHidden">
                    <img src="/store/store/酉 logo.jpeg" alt="" />
                </div>

                <div className="storeIntro pcHidden">
                    <div className="title-block">
                        <div className="title-bg">
                            酉5PM TWCAUDEX
                        </div>
                        <div className="custom-title">
                            酉5PM TWCAUDEX
                        </div>
                    </div>
                    <div className="tagsArea pcHidden">
                        <div className="tags" id="landscape">
                            <span>景觀設計</span>
                        </div>
                        <div className="tags" id="art">
                            <span>藝術設計</span>
                        </div>
                    </div>
                </div>

                <div className="bigImg pcHidden">
                    <a href="/store/store/酉.jpeg" data-lightbox="store"><img src="/store/store/酉.jpeg" alt="" /></a>
                </div>


                <div className="leftInfoArea">
                    <div id="leftInfo">
                        <div className="circleImg phoneHidden">
                            <img src="/store/store/酉 logo.jpeg" alt="" />
                        </div>
                        <div className="leftInfo-container titleName">
                            <div>
                                <div>
                                    <p>店家名稱</p>
                                </div>
                                <div>
                                    <span>酉5PM TWCAUDEX</span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p>店家位置</p>
                                </div>
                                <div>
                                    <span>PARK2 - 1F</span>
                                </div>
                            </div>
                            <div>
                                <div className="leftInfoPhoneLeft">
                                    <p>營業時間</p>
                                </div>
                                <div>
                                    <span>週一 12:00~20:00</span><br />
                                    <span>週二 12:00~20:00</span><br />
                                    <span>週三 12:00~20:00</span><br />
                                    <span>週四 12:00~20:00</span><br />
                                    <span>週五 12:00~20:00</span><br />
                                    <span>週六 12:00~20:00</span><br />
                                    <span>週日 12:00~20:00</span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p>聯絡電話</p>
                                </div>
                                <div><span>04-2302-0269</span></div>
                            </div>
                            <div>
                                <div>
                                    <p>支付方式</p>
                                </div>
                                <div>
                                    <span><img className="icon" src="/store/store/svg/cash-coin.svg" alt="" /></span>
                                    <span><img className="icon" src="/store/store/svg/credit-card.svg" alt="" /></span>
                                    <span><img className="icon" src="/store/store/svg/phone.svg" alt="" /></span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p>支付方式</p>
                                </div>
                                <div>
                                    <span><img className="icon" src="/store/store/svg/facebook.svg" alt="" /></span>
                                    <span><img className="icon" src="/store/store/svg/instagram.svg" alt="" /></span>
                                    <span><img className="icon" src="/store/store/svg/line.svg" alt="" /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="rightContentArea">
                    <div className="bigImg phoneHidden">
                        <img src="/store/store/酉.jpeg" alt="" />
                    </div>

                    <div className="titleName">
                        <div className="storeIntro phoneHidden">
                            <div className="title-block phoneHidden">
                                <div className="title-bg">
                                    酉5PM TWCAUDEX
                                </div>
                                <div className="custom-title">
                                    酉5PM TWCAUDEX
                                </div>
                            </div>
                            <div className="tagsContainer">
                                <div className="tags phoneHidden" id="landscape">
                                    <span>景觀設計</span>
                                </div>
                                <div className="tags phoneHidden" id="art">
                                    <span>藝術設計</span>
                                </div>
                            </div>
                        </div>
                        <div className="storeIntro">
                            <p>店家介紹</p>
                            <div id="storeContent">
                                「酉」台灣第一間專為塊根植物所建立的專門店，從店內到店外及建築物均為老闆一手設計，簡約的幾何清水模建築及透亮的玻璃溫室，並搭配戶外的沙漠造景，營造出原始生態的生長樣貌。
                                <br />
                                <br />
                                酉 —— 代表傍晚5點至7點。<br />
                                日落的夕陽，溫暖的光綫<br />
                                照射在植物上是最美的時刻<br />
                                酉時，也是澆水的最佳時間<br />
                                漫射的光，輝映在水珠上，更顯植物獨特的美。<br />

                                專營乾旱植栽造景規劃及特殊品種植物進口<br />
                                藝術家及創作者聯名合作器皿、花器、藝術擺件<br />
                                目前主設計公司為 — 泳豐澤有限公司<br />
                                <br />
                                公司旗下品牌<br />
                                「酉Succulent & Artwork」<br />
                                ｜酉5PM LANDSCAPE｜<br />
                                ｜酉5PM TWCAUDEX｜<br />
                                ｜酉5PM DESSERT｜<br />
                                <br />
                                公司積極投入及鑽研於建築環境綠化及特殊造景<br />
                                目標為結合建築本身及室內外空間使用<br />
                                致力成為新尺度景觀規劃的新興企業<br />
                                未來將投入於集合住宅及都會型景觀空間規劃，<br />
                                創造更多與自然空間接觸機會，使現社會與自然並行，<br />
                                支持國內外新一代創作者，並提供更友善之交流平台。
                            </div>
                        </div>
                        {/* <Lightbox
                            imgSource={this.state.lightboxImgData}
                            isOpen={this.state.lightboxIsOpen}
                            currentImage = {this.state.currentImage}
                            onClose={this.closeLightBox}
                        /> */}
                        <div className="storeImg storeIntro ">
                            <p>店家照片</p>
                            <div className="storeImgGroup phoneHidden">
                                <a href="/store/store/酉1.jpeg" data-lightbox="store" className="width">
                                    <img src="/store/store/酉1.jpeg" /></a>
                                <a href="/store/store/酉2.jpeg" data-lightbox="store">
                                    <img src="/store/store/酉2.jpeg" /></a>
                                <a href="/store/store/酉3.jpeg" data-lightbox="store" className="height">
                                    <img src="/store/store/酉3.jpeg" /></a>
                                <a href="/store/store/酉1.jpeg" data-lightbox="store">
                                    <img src="/store/store/酉1.jpeg" /></a>
                                <a href="/store/store/酉2.jpeg" data-lightbox="store" className="big">
                                    <img src="/store/store/酉2.jpeg" /></a>
                                <a href="/store/store/酉3.jpeg" data-lightbox="store">
                                    <img src="/store/store/酉3.jpeg" /></a>
                                <a href="/store/store/酉1.jpeg" data-lightbox="store">
                                    <img src="/store/store/酉1.jpeg" /></a>
                            </div>
                        </div>
                        <div id="demo" className="storeImgGroup pcHidden carousel slide" data-ride="carousel">
                            <ul className="carousel-indicators">
                                <li data-target="#demo" data-slide-to="0" class="active"></li>
                                <li data-target="#demo" data-slide-to="1"></li>
                                <li data-target="#demo" data-slide-to="2"></li>
                                <li data-target="#demo" data-slide-to="3"></li>
                            </ul>

                            <div className="carousel-inner">
                                <div className="carousel-item">
                                    <img src="/store/store/酉en01.webp" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/store/store/酉en02.webp" alt="Chicago" />
                                </div>
                                <div className="carousel-item active">
                                    <img src="/store/store/酉en01.webp" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/store/store/酉en02.webp" alt="Chicago" />
                                </div>
                            </div>

                            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                                <span className="carousel-control-prev-icon"><img src="/img/store/icon/right_s.svg" />

                                </span>
                            </a>
                            <a className="carousel-control-next" href="#demo" data-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
    componentDidMount = () => {
        // Lightbox.option({
        //     'resizeDuration': 200,
        //     'wrapAround': true,
        //     'alwaysShowNavOnTouchDevices': true,
        //     'fitImagesInViewport': true
        // })
    }

}

export default StoreEach;