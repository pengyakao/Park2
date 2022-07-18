import React, { Component } from 'react'
import './style.css'
import { useState, useEffect } from 'react'
// import { Pagination, Navigation } from 'swiper'
import EachInfo from './component/EachInfo'
import { getStore, getStoreImg } from '../../../../api/storeApi'
import EachContent from './component/EachContent'

export default function StoreEach(props) {
    const [list, setList] = useState([])
    const preDataHandle = () => {
        getStore().then((result) => {
            setList(result)
            console.log(result)
        })
    }
    const [img, setImg] = useState("")
    const preDataHandle2 = () => {
        getStoreImg(props.match.params.storeId).then((result) => {
            setImg(result[0].sto_img_url)
        })
    }

    useEffect(() => {
        preDataHandle()
        preDataHandle2()
    }, [])

    return (
        <div id="storeEach" className="stoContainer">
            <div id="leftOuter">
                {list.map((item, index) => {
                    let tagClass
                    if (item.sto_class == '1') {
                        tagClass = '咖啡輕食'
                    } else if (item.sto_class == '2') {
                        tagClass = '藝術設計'
                    } else if (item.sto_class == '3') {
                        tagClass = '餐廳'
                    } else if (item.sto_class == '4') {
                        tagClass = '購物'
                    }

                    // console.log(item.sto_class)

                    // console.log(index)
                    // })
                    if (item.sto_id == props.match.params.storeId) {
                        return (
                            <EachInfo
                                id={item.sto_id}
                                sto_first_img={item.sto_first_img}
                                sto_img={item.sto_img}
                                name={item.sto_name}
                                tag={tagClass}
                                location={item.sto_location}
                                fri={item.sto_fri}
                                sat={item.sto_sat}
                                tel={item.sto_tel}
                                info={item.sto_info}
                                sto_img_url={img}
                                fb={item.sto_fb}
                                ins={item.sto_ins}
                                line={item.sto_line}
                            />
                        )
                    }
                })}
            </div>

            <div id="rightOuter">
                {list.map((item, index) => {
                    if (item.sto_id == props.match.params.storeId) {
                        let tagClass
                        // stoClass(() => {
                        if (item.sto_class == '1') {
                            tagClass = '咖啡輕食'
                        } else if (item.sto_class == '2') {
                            tagClass = '藝術設計'
                        } else if (item.sto_class == '3') {
                            tagClass = '餐廳'
                        } else if (item.sto_class == '4') {
                            tagClass = '購物'
                        }
                        // console.log(item)
                        return (
                            <EachContent
                                id={item.sto_id}
                                name={item.sto_name}
                                info={item.sto_info}
                                tag={tagClass}
                                // img={item.sto_first_img}
                                sto_first_img={item.sto_first_img}
                                sto_img_url={img}
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
