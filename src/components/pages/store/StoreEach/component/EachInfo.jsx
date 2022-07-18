import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import { getStore } from '../../../../../api/storeApi'
import $ from 'jquery'
import Title from '../../../../commons/title/Title'

const EachInfo = ({
    name,
    img,
    info,
    tag,
    location,
    fri,
    sat,
    tel,
    fb,
    ins,
    line,
    sto_img_id,
    sto_first_img,
    sto_img,
}) => {
    const htmlWord = info
    return (
        <div className="leftOuterInfo">
            <div className="pcCircleImg pcHidden">
                <div className="circleImg ">
                    <img src={sto_img} alt="" />
                </div>
            </div>

            <div className="storeIntro pcHidden">
                <Title title={name} />
                <div className="tagsArea pcHidden">
                    <div className="tags" id="landscape">
                        <span>{tag}</span>
                    </div>
                </div>
            </div>

            <div className="bigImg pcHidden">
                <a data-lightbox="store">
                    <img src={sto_first_img} alt="" />
                </a>
            </div>

            <div id="leftInfoArea">
                <div id="leftInfo">
                    <div className="circleContainer">
                        <div className="circleImg phoneHidden">
                            <img src={sto_img} alt="" />
                        </div>
                    </div>
                    <div className="leftInfo-container titleName">
                        <div>
                            <p className="titleGreen">店家名稱</p>
                        </div>
                        <div>
                            <span>{name}</span>
                        </div>
                        <div>
                            <p className="titleGreen">店家位置</p>
                        </div>
                        <div>
                            <span>{location}</span>
                        </div>
                        <div>
                            <p className="titleGreen">營業時間</p>
                        </div>
                        <div>
                            <span>平日 {fri}</span>
                            <br />
                            <span>假日 {sat}</span>
                        </div>
                        <div>
                            <p className="titleGreen">聯絡電話</p>
                        </div>
                        <div>
                            <span>{tel}</span>
                        </div>
                        <div>
                            <p className="titleGreen">支付方式</p>
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
                        <div>
                            <p className="titleGreen">粉絲專頁</p>
                        </div>
                        <div>
                            <span>
                                <a href={fb}>
                                    <img className="icon" src="/store/store/svg/facebook.svg" alt="" />
                                </a>
                            </span>
                            <span>
                                <a href={ins}>
                                    <img className="icon" src="/store/store/svg/instagram.svg" alt="" />
                                </a>
                            </span>
                            <span>
                                <a href={line}>
                                    <img className="icon" src="/store/store/svg/line.svg" alt="" />
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EachInfo
