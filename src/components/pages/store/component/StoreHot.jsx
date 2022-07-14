import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import $ from 'jquery'
import Title from '../../../commons/title/Title'
import StoreCard from './StoreCard'
import { getStore } from '../../../../api/storeApi'

const StoreHot = ({ list }) => {
    const [data, setData] = useState([])
    const preDataHandle = () => {
        let filterData = list.filter((e) => e.sto_main == 1)

        setData(filterData)
    }
    useEffect(() => {
        preDataHandle()
    }, [list])

    //套件左右滑動功能
    const componentDidMount = () => {
        preDataHandle()
        const HotcardContainers = document.querySelectorAll('.hotcard-container')
        const nxtBtn = document.querySelectorAll('.nxt-btn')
        const preBtn = document.querySelectorAll('.pre-btn')

        HotcardContainers.forEach((item, i) => {
            let containerDimensions = item.getBoundingClientRect()
            let containerWidth = containerDimensions.width

            nxtBtn[i].addEventListener('click', () => {
                item.scrollLeft += containerWidth
            })

            preBtn[i].addEventListener('click', () => {
                item.scrollLeft -= containerWidth
            })
        })
    }

    return (
        <div class="StoreCardHotArea">
            <Title title="本月主打" />
            <div class="StoreCard_01">
                <section class="hotcard">
                    <button class="pre-btn" onClick={componentDidMount}>
                        <img src="/store/icon/right_s.svg" alt="" />
                    </button>
                    <button class="nxt-btn" onClick={componentDidMount}>
                        <img src="/store/icon/right_s.svg" alt="" />
                    </button>
                    <div class="hotcard-container">
                        {data.map((item, index) => {
                            return (
                                <StoreCard
                                    id={item.sto_id}
                                    img={item.sto_first_img}
                                    name={item.sto_name}
                                    info={item.sto_info.replace(/<[^>]+>/g, '')}
                                />
                            )
                        })}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default StoreHot
