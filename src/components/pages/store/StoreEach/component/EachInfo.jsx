import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import { getStore } from '../../../../../api/storeApi'
import $ from 'jquery'
import Title from '../../../../commons/title/Title'

const EachInfo = ({ name, img, info, tag, location, fri, sat, tel, sto_img_id }) => {
    const htmlWord = info
    return (
        <div>
            <div className="container store-each">
                <div className="circleImg pcHidden">
                    <img src={img} alt="" />
                </div>

                <div className="storeIntro pcHidden">
                    {/* <div className="title-block"> */}
                    <Title title={name} />
                    {/* <div className="title-bg">{name}</div>
                        <div className="custom-title">{name}</div> */}
                    {/* </div> */}
                    <div className="tagsArea pcHidden">
                        <div className="tags" id="landscape">
                            <span>咖啡輕食</span>
                        </div>
                        <div className="tags" id="art">
                            <span>餐廳</span>
                        </div>
                    </div>
                </div>

                <div className="bigImg pcHidden">
                    <a href={img} data-lightbox="store">
                        <img src={img} alt="" />
                    </a>
                </div>

                <div className="leftInfoArea">
                    <div id="leftInfo">
                        <div className="circleImg phoneHidden">
                            <img src={img} alt="" />
                        </div>
                        <div className="leftInfo-container titleName">
                            <div>
                                <div>
                                    <p className="titleGreen">店家名稱</p>
                                </div>
                                <div>
                                    <span>{name}</span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p className="titleGreen">店家位置</p>
                                </div>
                                <div>
                                    <span>{location}</span>
                                </div>
                            </div>
                            <div>
                                <div className="leftInfoPhoneLeft">
                                    <p className="titleGreen">營業時間</p>
                                </div>
                                <div>
                                    <span>平日 {fri}</span>
                                    <br />
                                    <span>假日 {sat}</span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p className="titleGreen">聯絡電話</p>
                                </div>
                                <div>
                                    <span>{tel}</span>
                                </div>
                            </div>
                            <div>
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
                            </div>
                            <div>
                                <div>
                                    <p className="titleGreen">粉絲專頁</p>
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

            {/* <div className="rightContentArea">
                <div className="bigImg phoneHidden">
                    <img src={img} alt="" />
                </div>

                <div className="titleName">
                    <div className="storeIntro phoneHidden">
                        <div className="title-block phoneHidden">
                            <div className="title-bg">{name}</div>
                            <div className="custom-title">{name}</div>
                        </div>
                        <div className="tagsContainer">
                            <div className="tags phoneHidden" id="landscape">
                                <span>{tag}</span>
                            </div>
                            <div className="tags phoneHidden" id="art">
                                <span>{tag}</span>
                            </div>
                        </div>
                    </div>
                    <div className="storeIntro">
                        <p className="titleGreen">店家介紹</p>
                        <div id="storeContent" dangerouslySetInnerHTML={{ __html: htmlWord }} />
                    </div>
                    <div className="storeImg storeIntro ">
                        <p className="titleGreen">店家照片</p>
                        <div className="storeImgGroup phoneHidden">
                            <a href={sto_img_id} data-lightbox="store" className="width">
                                <img src={sto_img_id} />
                            </a>
                            <a href={sto_img_id} data-lightbox="store">
                                <img src={sto_img_id} />
                            </a>
                            <a href={sto_img_id} data-lightbox="store" className="height">
                                <img src={sto_img_id} />
                            </a>
                            <a href={sto_img_id} data-lightbox="store">
                                <img src={sto_img_id} />
                            </a>
                            <a href={sto_img_id} data-lightbox="store" className="big">
                                <img src={sto_img_id} />
                            </a>
                            <a href={sto_img_id} data-lightbox="store">
                                <img src={sto_img_id} />
                            </a>
                            <a href={sto_img_id} data-lightbox="store">
                                <img src={sto_img_id} />
                            </a>
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
                            <span className="carousel-control-prev-icon">
                                <img src="/img/store/icon/right_s.svg" />
                            </span>
                        </a>
                        <a className="carousel-control-next" href="#demo" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </a>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default EachInfo
