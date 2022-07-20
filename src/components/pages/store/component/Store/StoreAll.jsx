import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import $ from 'jquery'
import Title from '../../../../commons/title/Title'
import StoreCard from '../StoreCard'
import { getStore } from '../../../../../api/storeApi'

const StoreAll = ({ list, clicked }) => {
    const [data, setList] = useState([])
    const preDataHandle = () => {}
    useEffect(() => {
        preDataHandle()
    }, [list])
    return (
        <div class="StoreCardAllArea">
            <Title title="所有店家" />
            <div class="StoreCard_02">
                {list.map((item, index) => {
                    return (
                        <StoreCard
                            id={item.sto_id}
                            img={item.sto_first_img}
                            name={item.sto_name}
                            info={item.sto_info}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default StoreAll
