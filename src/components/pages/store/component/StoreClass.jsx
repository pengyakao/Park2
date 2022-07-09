import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import $ from 'jquery'
import Title from '../../../commons/title/Title'
import StoreCard from './StoreCard'
import { getStore } from '../../../../api/storeApi'

export default function StoreClass(props) {
    const [list, setList] = useState([])
    const preDataHandle = () => {
        getStore().then((result) => {
            setList(result)
        })
    }
    useEffect(() => {
        preDataHandle()
    }, [])
    return (
        <div class="StoreCardAllArea">
            <Title title="所有店家" />
            <div class="StoreCard_02">
                {list.map((item, index) => {
                    if (item.sto_class == props.match.params.classId) {
                        return (
                            <StoreCard
                                id={item.sto_id}
                                img={item.sto_img}
                                name={item.sto_name}
                                info={item.sto_info.replace(/<[^>]+>/g, '')}
                            />
                        )
                    }
                })}
            </div>
        </div>
    )
}
