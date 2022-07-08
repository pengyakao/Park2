import React, { Component } from 'react'
import $ from 'jquery'
import Title from '../../../commons/title/Title'
import StoreCard from './StoreCard'
import { getStore } from '../../../../api/storeApi'

class StoreHot extends Component {
    state = {}
    render() {
        return (
            <div class="StoreCardHotArea">
                <Title title="本月主打" />
                <div class="StoreCard_01">
                    <section class="hotcard">
                        <button class="pre-btn">
                            <img src="/store/icon/right_s.svg" alt="" />
                        </button>
                        <button class="nxt-btn">
                            <img src="/store/icon/right_s.svg" alt="" />
                        </button>
                        <div class="hotcard-container">
                            <StoreCard />
                        </div>
                    </section>
                </div>
            </div>
        )
    }

    preDataHandle = () => {
        getStore().then((result) => {
            console.log(result)
            let isMain = result.filter((e) => e.sto_main == 1)
            console.log(isMain)
        })
    }

    //套件左右滑動功能
    componentDidMount() {
        this.preDataHandle()
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

        // var newdata = [
        //     {
        //         img: '/home/news1.jpeg',
        //         date: '2022/05/16',
        //         title: '《我出去一下．生活裝飾篇》活動取消公告',
        //         text: `本週的天氣仍不穩定，期望讓參與活動的品牌主理人、和來到這裡遊逛的大家，都能夠完整體驗到活動的呈現，故審慎評估過後，決定本週《我出去一下．生活裝飾篇》活動取消。<br>但星際大戰為主題的品牌出店計畫仍會在 PARK2 B1舉行！除了會在現場販售星際大戰相關的周邊外，也邀請到重量級的星戰收藏家，在5/7活動當天帶來期間限定的精緻收藏展示！星戰迷絕對不能錯過！`,
        //     }
        // ]
        // // 帶入arr資料
        // $('.card-body>h2')
        //     .html(`${newdata[0].title}<p className="home_newsDateTitle"><span className="home_newsDate">公告時間 | ${newdata[0].date}</span></p>
        // `)
        // $('.card-text>span').html(`${newdata[0].text}`)
    }
}

export default StoreHot
