import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import $ from 'jquery'
import { getStore } from '../../../../../api/storeApi'
//tag
// import { useSelector } from 'react-redux'

const SideTags = ({ listData }) => {
    const [list, setList] = useState([])

    //tags
    // const filter = useSelector((Store) => store.filterReducer);

    // const Tagscoffee = () => {
    //     getStore().then((result) => {
    //         setList(result.filter((e) => e.sto_class.includes(1)))
    //     })
    // }
    const stoClass1 = () => {
        window.location.href = `/class/1`
    }
    const stoClass2 = () => {
        window.location.href = `/class/2`
    }
    const stoClass3 = () => {
        window.location.href = `/class/3`
    }
    const stoClass4 = () => {
        window.location.href = `/class/4`
    }

    return (
        <div class="leftTagsArea">
            <div class="leftTagsContainer">
                <div class="leftTags titleName">
                    <p id="leftTitle">店家分類</p>
                    <button onClick={stoClass1} id="tagName" class="tag btn_coffee">
                        咖啡輕食
                    </button>
                    <button onClick={stoClass2} id="tagName" class="tag btn_art">
                        藝術設計
                    </button>
                    <button onClick={stoClass3} id="tagName" class="tag btn_eat">
                        餐廳
                    </button>
                    <button onClick={stoClass4} id="tagName" class="tag btn_shop">
                        購物
                    </button>
                    {/* <div id="search">
                        <span></span>
                        <input id="leftSearch" placeholder="輸入店家名稱" />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default SideTags
