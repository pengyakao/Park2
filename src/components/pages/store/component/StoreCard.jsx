import React, { Component } from 'react'
import $ from 'jquery'
import Title from '../../../commons/title/Title'

const StoreCard = ({ id, name, img, info }) => {
    // 改掉<>標籤
    const htmlWord = info
    const StoEachPage = () => {
        window.location.href = `/store/${id}/`
    }

    return (
        <div class="hotcard-card card" onClick={StoEachPage}>
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
}

export default StoreCard
