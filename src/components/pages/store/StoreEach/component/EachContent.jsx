import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import { getStore, getStoreImg } from '../../../../../api/storeApi'
import $ from 'jquery'
import Title from '../../../../commons/title/Title'

const EachContent = ({ name, info, tag, sto_first_img, sto_img_url }) => {
    // const htmlWord = info
    console.log(sto_img_url)
    const imgList = sto_img_url.split(',')
    return (
        <div className="rightContentArea storeEach">
            <div className="bigImg phoneHidden">
                <img src={sto_first_img} alt="" />
            </div>

            <div className="IntroContainer">
                <div className="storeIntro phoneHidden">
                    <div className="title-block phoneHidden">
                        <div className="title-bg">{name}</div>
                        <div className="custom-title">{name}</div>
                    </div>
                    <div className="tagsContainer">
                        <div className="tags phoneHidden" id="landscape">
                            <span>{tag}</span>
                        </div>
                    </div>
                </div>
                <div className="storeIntro">
                    <p className="titleGreen">店家介紹</p>
                    {/* <div id="storeContent" dangerouslySetInnerHTML={{ __html: htmlWord }} /> */}
                    <div className="textArea">
                        <pre>{info}</pre>
                    </div>
                </div>
                <div className="storeImg storeIntro ">
                    <p className="titleGreen">店家照片</p>
                    <div className="storeImgGroup phoneHidden">
                        {imgList.map((item, index) => {
                            // console.log(item)
                            if (index == 0) {
                                return (
                                    <a data-lightbox="store" className="width">
                                        <img src={item} />
                                    </a>
                                )
                            } else if (index == 1) {
                                return (
                                    <a data-lightbox="store">
                                        <img src={item} />
                                    </a>
                                )
                            } else if (index == 2) {
                                return (
                                    <a data-lightbox="store" className="height">
                                        <img src={item} />
                                    </a>
                                )
                            } else if (index == 3) {
                                return (
                                    <a data-lightbox="store">
                                        <img src={item} />
                                    </a>
                                )
                            } else if (index == 4) {
                                return (
                                    <a data-lightbox="store" className="big">
                                        <img src={item} />
                                    </a>
                                )
                            } else if (index == 5) {
                                return (
                                    <a data-lightbox="store">
                                        <img src={item} />
                                    </a>
                                )
                            } else if (index == 6) {
                                return (
                                    <a data-lightbox="store">
                                        <img src={item} />
                                    </a>
                                )
                            }
                        })}
                    </div>
                </div>
                <div className="carouselContainer">
                    <div id="carousel" className="storeImgGroup pcHidden carousel slide" data-ride="carousel">
                        <ul className="carousel-indicators">
                            <li data-target="#carousel" data-slide-to="0" class="active"></li>
                            <li data-target="#carousel" data-slide-to="1"></li>
                            <li data-target="#carousel" data-slide-to="2"></li>
                            <li data-target="#carousel" data-slide-to="3"></li>
                        </ul>

                        <div className="carousel-inner">
                            {imgList.map((item, index) => {
                                console.log('apple', item, index)
                                if (index == 0) {
                                    return (
                                        <div className="carousel-item active">
                                            <img src={item} />
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div className="carousel-item">
                                            <img src={item} />
                                        </div>
                                    )
                                }
                            })}

                            {/* <div className="carousel-item  active">
                            <img src="/public/store/store/酉.jpeg" alt="Chicago" />
                        </div>
                        <div className="carousel-item">
                            <img src="/public/store/store/酉.jpeg" alt="Chicago" />
                        </div>
                        <div className="carousel-item">
                            <img src="/public/store/store/酉.jpeg" alt="Chicago" />
                        </div> */}
                            {/* <div className="carousel-item active">
                            <img src='/public/store/store/酉.jpeg" />
                        </div>
                        <div className="carousel-item">
                            <img src={imgList[0]} alt="Chicago" />
                        </div> */}
                        </div>

                        <a className="carousel-control-prev" href="#carousel" data-slide="prev">
                            <span className="carousel-control-prev-icon">
                                {/* <img src="/img/store/icon/right_s.svg" /> */}
                            </span>
                        </a>
                        <a className="carousel-control-next" href="#carousel" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EachContent
