import { ReactDOM } from 'react'
import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import $ from 'jquery'
import { getStore } from '../../../../../api/storeApi'

const SideTags = ({ listData, hello }) => {
    //const [list, setList] = useState([])
    //tags
    // const filter = useSelector((Store) => store.filterReducer);
    const stoClass1 = () => {
        let filterData = listData.filter((e) => e.sto_class == 1)

        let classTag = document.querySelectorAll('.custom-title')[1]
        classTag.textContent = '咖啡輕食'
        classTag = document.querySelectorAll('.title-shadow')[1]
        classTag.textContent = '咖啡輕食'
        classTag = document.querySelectorAll('.title-bg')[1]
        classTag.textContent = '咖啡輕食'
        hello(filterData)
    }
    const stoClass2 = () => {
        let filterData = listData.filter((e) => e.sto_class == 2)
        let classTag = document.querySelectorAll('.custom-title')[1]
        classTag.textContent = '藝術設計'
        classTag = document.querySelectorAll('.title-shadow')[1]
        classTag.textContent = '藝術設計'
        classTag = document.querySelectorAll('.title-bg')[1]
        classTag.textContent = '藝術設計'
        hello(filterData)
    }
    const stoClass3 = () => {
        let filterData = listData.filter((e) => e.sto_class == 3)
        let classTag = document.querySelectorAll('.custom-title')[1]
        classTag.textContent = '餐廳'
        classTag = document.querySelectorAll('.title-shadow')[1]
        classTag.textContent = '餐廳'
        classTag = document.querySelectorAll('.title-bg')[1]
        classTag.textContent = '餐廳'
        hello(filterData)
    }
    const stoClass4 = () => {
        let filterData = listData.filter((e) => e.sto_class == 4)
        let classTag = document.querySelectorAll('.custom-title')[1]
        classTag.textContent = '購物'
        classTag = document.querySelectorAll('.title-shadow')[1]
        classTag.textContent = '購物'
        classTag = document.querySelectorAll('.title-bg')[1]
        classTag.textContent = '購物'
        hello(filterData)
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
