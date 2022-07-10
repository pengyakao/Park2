import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import { getStore } from '../../../../../api/storeApi'
import $ from 'jquery'
import Title from '../../../../commons/title/Title'

const EachContent = ({ name, info, tag, img, img01, img02, img03, img04, img05, img06, img07 }) => {
    const htmlWord = info
    return (
        <div className="rightContentArea">
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
                    <p>店家介紹</p>
                    <div id="storeContent" dangerouslySetInnerHTML={{ __html: htmlWord }} />
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
                        <a href={img01} data-lightbox="store" className="width">
                            <img src={img01} />
                        </a>
                        <a href={img02} data-lightbox="store">
                            <img src={img02} />
                        </a>
                        <a href={img03} data-lightbox="store" className="height">
                            <img src={img03} />
                        </a>
                        <a href={img04} data-lightbox="store">
                            <img src={img04} />
                        </a>
                        <a href={img05} data-lightbox="store" className="big">
                            <img src={img05} />
                        </a>
                        <a href={img06} data-lightbox="store">
                            <img src={img06} />
                        </a>
                        <a href={img07} data-lightbox="store">
                            <img src={img07} />
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
        </div>
    )
}

export default EachContent
