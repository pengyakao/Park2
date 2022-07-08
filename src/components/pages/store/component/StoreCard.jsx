import React, { Component } from 'react'
import $ from 'jquery'
import Title from '../../../commons/title/Title'

const StoreCard = ({ key, id, name, img, info }) => {
    // state = {}
    // render() {
    // 改掉<>標籤
    const htmlWord = info
    return (
        <div class="hotcard-card card">
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body">
                <div class="card-title">{name}</div>
                <div class="card-text">
                    <div dangerouslySetInnerHTML={{ __html: htmlWord }} />
                </div>
                <div class="card-footer"></div>
            </div>
        </div>
    )

    // componentDidMount() {
    //     var newdata = [
    //         {
    //             img: '/store/store/酉.jpeg',
    //             title: '酉5PM TWCAUDEX',
    //             text: `「酉」台灣第一間專為塊根植物所建立的專門店，從店內到店外及建築物均為老闆一手設計，簡約的幾何清水模建築及透亮的玻璃溫室，並搭配戶外的沙漠造景，營造出原始生態的生長樣貌。`,
    //             floor: '2F',
    //         },
    //
    //     ]
    //     // 帶入arr資料
    //     $('.card-img-top').html(`${newdata[0].img}`)
    //     $('.card-title').html(`${newdata[0].title}`)
    //     $('.card-text>span').html(`${newdata[0].text}`)
    //     $('.card-footer').html(`${newdata[0].floor}`)
    //  }
}

export default StoreCard
