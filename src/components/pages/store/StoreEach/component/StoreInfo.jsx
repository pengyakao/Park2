import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import { getStore } from '../../../../../api/storeApi'
import $ from 'jquery'
import Title from '../../../../commons/title/Title'

const StoreInfo = ({ key, id, name, img, info }) => {
    return (
        <div className="container store-each">
            <div className="circleImg pcHidden">
                <img src={img} alt="" />
            </div>

            <div className="storeIntro pcHidden">
                <div className="title-block">
                    <div className="title-bg">酉5PM TWCAUDEX</div>
                    <div className="custom-title">酉5PM TWCAUDEX</div>
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
                <a href="/store/store/酉.jpeg" data-lightbox="store">
                    <img src="/store/store/酉.jpeg" alt="" />
                </a>
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
                                <span>週一 12:00~20:00</span>
                                <br />
                                <span>週二 12:00~20:00</span>
                                <br />
                                <span>週三 12:00~20:00</span>
                                <br />
                                <span>週四 12:00~20:00</span>
                                <br />
                                <span>週五 12:00~20:00</span>
                                <br />
                                <span>週六 12:00~20:00</span>
                                <br />
                                <span>週日 12:00~20:00</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>聯絡電話</p>
                            </div>
                            <div>
                                <span>04-2302-0269</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>支付方式</p>
                            </div>
                            <div>
                                <span>
                                    <img className="icon" src="/store/store/svg/cash-coin.svg" alt="" />
                                </span>
                                <span>
                                    <img className="icon" src="/store/store/svg/credit-card.svg" alt="" />
                                </span>
                                <span>
                                    <img className="icon" src="/store/store/svg/phone.svg" alt="" />
                                </span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>粉絲專頁</p>
                            </div>
                            <div>
                                <span>
                                    <img className="icon" src="/store/store/svg/facebook.svg" alt="" />
                                </span>
                                <span>
                                    <img className="icon" src="/store/store/svg/instagram.svg" alt="" />
                                </span>
                                <span>
                                    <img className="icon" src="/store/store/svg/line.svg" alt="" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoreInfo
