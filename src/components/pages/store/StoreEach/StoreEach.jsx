import React, { Component } from 'react'
import './style.css'
import { useState, useEffect } from 'react'
// import { Pagination, Navigation } from 'swiper'
import EachInfo from './component/EachInfo'
import { getStore } from '../../../../api/storeApi'
import EachContent from './component/EachContent'

export default function StoreEach(props) {
    const [list, setList] = useState([])
    const preDataHandle = () => {
        getStore().then((result) => {
            setList(result)
            console.log(result)
        })
    }

    useEffect(() => {
        preDataHandle()
    }, [])

    return (
        <div className="container store-each">
            <div>
                {list.map((item, index) => {
                    if (item.sto_id == props.match.params.storeId) {
                        let stoClass
                        if (item.sto_class == '1') {
                            stoClass = '現場LIVE'
                        } else if (item.sto_class == '2') {
                            stoClass = '快閃活動'
                        } else if (item.sto_class == '3') {
                            stoClass = '快閃活動'
                        } else if (item.sto_class == '4') {
                            stoClass = '快閃活動'
                        } else if (item.sto_class == '5') {
                            stoClass = '快閃活動'
                        }
                        return (
                            <EachInfo
                                id={item.sto_id}
                                img={item.sto_first_img}
                                name={item.sto_name}
                                tag={item.sto_class}
                                location={item.sto_location}
                                fri={item.sto_fri}
                                sat={item.sto_sat}
                                tel={item.sto_tel}
                                info={item.sto_info}
                                img01={item.sto_img01}
                                img02={item.sto_img02}
                                img03={item.sto_img03}
                                img04={item.sto_img04}
                                img05={item.sto_img05}
                                img06={item.sto_img06}
                                img07={item.sto_img07}
                                tags={item.sto_class}
                            />
                        )
                    }
                })}
            </div>

            <div>
                {list.map((item, index) => {
                    if (item.sto_id == props.match.params.storeId) {
                        return (
                            <EachContent
                                id={item.sto_id}
                                name={item.sto_name}
                                info={item.sto_info}
                                tag={item.sto_class}
                                img={item.sto_first_img}
                                img01={item.sto_img01}
                                img02={item.sto_img02}
                                img03={item.sto_img03}
                                img04={item.sto_img04}
                                img05={item.sto_img05}
                                img06={item.sto_img06}
                                img07={item.sto_img07}
                            />
                        )
                    }
                })}
            </div>
        </div>
    )
}

// componentDidMount() {}

// export default StoreEach
