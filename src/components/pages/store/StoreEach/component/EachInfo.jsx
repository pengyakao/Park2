import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import { getStore } from '../../../../../api/storeApi'
import $ from 'jquery'
import Title from '../../../../commons/title/Title'

const EachInfo = ({ key, id, name, first_img, info, tag, location, fri, sat, tel }) => {
    return (
        <div className="container store-each">
            <div className="circleImg pcHidden">
                <img src={first_img} alt="" />
            </div>

            <div className="storeIntro pcHidden">
                <div className="title-block">
                    <div className="title-bg">{name}</div>
                    <div className="custom-title">{name}</div>
                </div>
                <div className="tagsArea pcHidden">
                    <div className="tags" id="landscape">
                        <span>{tag}</span>
                    </div>
                    <div className="tags" id="art">
                        <span>{tag}</span>
                    </div>
                </div>
            </div>

            <div className="bigImg pcHidden">
                <a href={first_img} data-lightbox="store">
                    <img src={first_img} alt="" />
                </a>
            </div>

            <div className="leftInfoArea">
                <div id="leftInfo">
                    <div className="circleImg phoneHidden">
                        <img src={first_img} alt="" />
                    </div>
                    <div className="leftInfo-container titleName">
                        <div>
                            <div>
                                <p>店家名稱</p>
                            </div>
                            <div>
                                <span>{name}</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>店家位置</p>
                            </div>
                            <div>
                                <span>{location}</span>
                            </div>
                        </div>
                        <div>
                            <div className="leftInfoPhoneLeft">
                                <p>營業時間</p>
                            </div>
                            <div>
                                <span>平日 {fri}</span>
                                <br />
                                <span>假日 {sat}</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>聯絡電話</p>
                            </div>
                            <div>
                                <span>{tel}</span>
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

export default EachInfo
