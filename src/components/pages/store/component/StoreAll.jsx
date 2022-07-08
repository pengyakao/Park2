import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import $ from 'jquery'
import Title from '../../../commons/title/Title'
import StoreCard from './StoreCard'
import { getStore } from '../../../../api/storeApi'

const StoreAll = ({ listData }) => {
    //個別頁id
    // const stoEach = () => {
    //     window.location.href = `/store/${id}`
    // }
    const [list, setList] = useState([])
    const preDataHandle = () => {
        getStore().then((result) => {
            setList(result)
        })
    }
    useEffect(() => {
        preDataHandle()
    }, [])

    console.log('listData', listData)
    // state = {}
    // render() {
    return (
        <div class="StoreCardAllArea">
            <Title title="所有店家" />
            <div class="StoreCard_02">
                {list.map((item, index) => {
                    return <StoreCard img={item.sto_img} name={item.sto_name} info={item.sto_info} />
                })}
            </div>
        </div>
    )
    // }

    // {
    //     listData.map((item) => {
    //         console.log(item)
    //         const { id, name, img, hidden } = item
    //         return <ActCard key={id} id={id} name={name} img={img} hidden={hidden} />
    //     })

    // }
}

export default StoreAll
