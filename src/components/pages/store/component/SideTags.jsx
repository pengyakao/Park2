import React, { Component } from 'react'
import $ from 'jquery'

// import '.'
// import $ from 'jquery'
// import Title from '../../commons/title/Title'

class SideTags extends Component {
    state = {}
    render() {
        return (
            <div class="leftTagsArea">
                <div class="leftTagsContainer">
                    <div class="leftTags titleName">
                        <p id="leftTitle">店家分類</p>
                        <button id="tagName" class="tag btn_coffee">
                            咖啡輕食
                        </button>
                        <button id="tagName" class="tag btn_art">
                            藝術設計
                        </button>
                        <button id="tagName" class="tag btn_eat">
                            餐廳
                        </button>
                        <button id="tagName" class="tag btn_shop">
                            購物
                        </button>
                        <div id="search">
                            <span></span>
                            <input id="leftSearch" placeholder="輸入店家名稱" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        var newdata = [
            {
                img: '/home/news1.jpeg',
                date: '2022/05/16',
                title: '《我出去一下．生活裝飾篇》活動取消公告',
                text: `本週的天氣仍不穩定，期望讓參與活動的品牌主理人、和來到這裡遊逛的大家，都能夠完整體驗到活動的呈現，故審慎評估過後，決定本週《我出去一下．生活裝飾篇》活動取消。<br>但星際大戰為主題的品牌出店計畫仍會在 PARK2 B1舉行！除了會在現場販售星際大戰相關的周邊外，也邀請到重量級的星戰收藏家，在5/7活動當天帶來期間限定的精緻收藏展示！星戰迷絕對不能錯過！`,
            },
        ]
        // 帶入arr資料
        // $('.flip>span')
        //     .html(`${newdata[0].title}<p className="home_newsDateTitle"><span className="home_newsDate">公告時間 | ${newdata[0].date}</span></p>
        // `)
        // $('.panel>p').html(`${newdata[0].text}`)
        // $('.flip1>span')
        //     .html(`${newdata[1].title}<p className="home_newsDateTitle"><span className="home_newsDate">公告時間 | ${newdata[1].date}</span></p>
        // `)
        // $('.panel1>p').html(`${newdata[1].text}`)
        // $('.flip2>span')
        //     .html(`${newdata[2].title}<p className="home_newsDateTitle"><span className="home_newsDate">公告時間 | ${newdata[2].date}</span></p>
        // `)
        // $('.panel2>p').html(`${newdata[2].text}`)
        // $('.flip3>span')
        //     .html(`${newdata[3].title}<p className="home_newsDateTitle"><span className="home_newsDate">公告時間 | ${newdata[3].date}</span></p>
        // `)
        // $('.panel3>p').html(`${newdata[3].text}`)
    }
}

export default SideTags
