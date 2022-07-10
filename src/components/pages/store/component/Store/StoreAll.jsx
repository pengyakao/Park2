import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import $ from 'jquery'
import Title from '../../../../commons/title/Title'
import StoreCard from '../StoreCard'
import { getStore } from '../../../../../api/storeApi'
// import { useSelector } from 'react-redux'

const StoreAll = ({ list }) => {
    //個別頁id
    // const stoEach = () => {
    //     window.location.href = `/store/${id}`
    // }
    const [data, setList] = useState([])
    console.log(data)
    const preDataHandle = () => {
        // list.
        // getStore().then((result) => {
        //     setList(result)
        //     console.log(result)
        // })
    }
    useEffect(() => {
        preDataHandle()
    }, [list])

    // console.log('listData', listData)

    // tags
    // const filter = useSelector((StoreCard) => StoreCard.filterReducer)

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
                            info={item.sto_info.replace(/<[^>]+>/g, '')}
                        />
                    )
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
