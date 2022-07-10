import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './style.css'
import Title from '../../commons/title/Title'
import { Pagination, Navigation } from 'swiper'

class Store extends Component {
    state = {}
    render() {
        return (
            <div class="store-container">
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

                <div class="rightStoreCardArea">
                    <div class="StoreCardHotArea">
                        {/* <div class="title-block">
                            <div class="custom-title active-title" id="title-1">本月主打</div>
                            <div class="title-bg">本月主打</div>
                        </div> */}
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
                                    <div class="hotcard-card card">
                                        <img src="/store/store/米弎豆Misato.jpeg" class="card-img-top" alt="" />
                                        <div class="card-body">
                                            <h2 class="card-title">米弎豆お茶処MISATO</h2>
                                            <p class="card-text">
                                                <span>
                                                    misato 日式小食小判燒-在大人系公園現身！鹿港最夯的名店－怎能放過！
                                                </span>
                                            </p>
                                        </div>
                                        <div class="card-footer">1F</div>
                                    </div>

                                    <div class="hotcard-card card">
                                        <img src="/store/store/泱茶YUMTEA.jpeg" class="card-img-top" alt="" />
                                        <div class="card-body">
                                            <h2 class="card-title">泱茶YUMTEA</h2>
                                            <p class="card-text">
                                                <span>
                                                    misato 日式小食小判燒-在大人系公園現身！鹿港最夯的名店－怎能放過！
                                                </span>
                                            </p>
                                        </div>
                                        <div class="card-footer">1F</div>
                                    </div>

                                    <div class="hotcard-card card">
                                        <img src="/store/store/Coffe and John.jpeg" class="card-img-top" alt="" />
                                        <div class="card-body">
                                            <h2 class="card-title">COFFEE AND JOHN</h2>
                                            <p class="card-text">
                                                <span>
                                                    「COFFEE AND JOHN」是一個以 JOHN
                                                    為主角，結合美、日的街頭文化、音樂、咖啡的空間。
                                                </span>
                                            </p>
                                        </div>
                                        <div class="card-footer">1F</div>
                                    </div>

                                    <div class="hotcard-card card">
                                        <img src="/store/store/飪室Renshi.jpeg" class="card-img-top" alt="" />
                                        <div class="card-body">
                                            <h2 class="card-title">飪室Renshi</h2>
                                            <p class="card-text">
                                                <span>
                                                    《飪室》是間印度咖哩專賣店，以不同的方式呈現最道地的咖哩來讓各位嚐鮮。
                                                </span>
                                            </p>
                                        </div>
                                        <div class="card-footer">1F</div>
                                    </div>

                                    <div class="hotcard-card card">
                                        <img src="/store/store/ROCKLAND.jpeg" class="card-img-top" alt="" />
                                        <div class="card-body">
                                            <h2 class="card-title">ROCKLAND</h2>
                                            <p class="card-text">
                                                <span>
                                                    堅守著「讓大家能無憂的享受戶外生活；幫忙嚴選把關」的理念，成為多個嚴選戶外品牌的台灣獨家代理。代理品牌以環境為出發點，在進行戶外活動的同時，也倡導人與自然和平共存的環境永續。
                                                </span>
                                            </p>
                                        </div>
                                        <div class="card-footer">1F</div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div class="StoreCardAllArea">
                        {/* <div class="title-block">
                            <div class="custom-title active-title" id="title-2">所有店家</div>
                            <div class="title-bg">所有店家</div>
                        </div> */}
                        <Title title="所有店家" />
                        <div class="StoreCard_02">
                            <a href="/store/store1">
                                <div class="card">
                                    <img src="/store/store/酉.jpeg" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <div class="card-title">酉5PM TWCAUDEX</div>
                                        <div class="card-text">
                                            <span>
                                                「酉」台灣第一間專為塊根植物所建立的專門店，從店內到店外及建築物均為老闆一手設計，簡約的幾何清水模建築及透亮的玻璃溫室，並搭配戶外的沙漠造景，營造出原始生態的生長樣貌。
                                            </span>
                                        </div>
                                        <div class="card-footer">1F</div>
                                    </div>
                                </div>
                            </a>
                            <div class="card">
                                <img src="/store/store/米弎豆Misato.jpeg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <div class="card-title">米弎豆お茶処MISATO</div>
                                    <div class="card-text">
                                        <span>
                                            misato 日式小食小判燒-在大人系公園現身！鹿港最夯的名店－怎能放過！misato
                                            日式小食小判燒-在大人系公園現身！鹿港最夯的名店－怎能放過！
                                        </span>
                                    </div>
                                    <div class="card-footer">1F</div>
                                </div>
                            </div>
                            <div class="card">
                                <img src="/store/store/泱茶YUMTEA.jpeg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <div class="card-title">泱茶YUMTEA</div>
                                    <div class="card-text">
                                        <span>
                                            泱茶YUMTEA創立於2018年。是來自南台灣-高雄的台茶美學專賣店.
                                            泱有水面廣闊之意，初衷就是想把好茶推廣給每個人
                                        </span>
                                    </div>
                                    <div class="card-footer">1F</div>
                                </div>
                            </div>
                            <div class="card">
                                <img src="/store/store/Coffe and John.jpeg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <div class="card-title">COFFEE AND JOHN</div>
                                    <div class="card-text">
                                        <span>
                                            「COFFEE AND JOHN」是一個以 JOHN
                                            為主角，結合美、日的街頭文化、音樂、咖啡的空間。
                                        </span>
                                    </div>
                                    <div class="card-footer">1F</div>
                                </div>
                            </div>
                            <div class="card">
                                <img src="/store/store/飪室Renshi.jpeg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <div class="card-title">飪室Renshi</div>
                                    <div class="card-text">
                                        <span>
                                            《飪室》是間印度咖哩專賣店，以不同的方式呈現最道地的咖哩來讓各位嚐鮮。
                                        </span>
                                    </div>
                                    <div class="card-footer">1F</div>
                                </div>
                            </div>
                            <div class="card">
                                <img src="/store/store/ROCKLAND.jpeg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <div class="card-title">ROCKLAND</div>
                                    <div class="card-text">
                                        <span>
                                            堅守著「讓大家能無憂的享受戶外生活；幫忙嚴選把關」的理念，成為多個嚴選戶外品牌的台灣獨家代理。代理品牌以環境為出發點，在進行戶外活動的同時，也倡導人與自然和平共存的環境永續。
                                        </span>
                                    </div>
                                    <div class="card-footer">1F</div>
                                </div>
                            </div>
                            <div class="card">
                                <img src="/store/store/新村站著吃烤肉.jpeg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <div class="card-title">新村站著吃烤肉</div>
                                    <div class="card-text">
                                        <span>
                                            源於1953年開幕至今的首爾名店，被列為「首爾未來遺產」之一。店內特色為繞著石油桶站著吃烤肉，保留了自韓戰以來的獨特用餐方式，同時也打破了傳統燒烤店的座位限制，讓店內每個人都能夠自由移動暢談酣飲，呈現了特別的活絡氣氛。台灣團隊經過將近1年的接洽溝通，打破首爾本店「絕無分店」的營運原則，終於在台北市信義區開設全球第一間分店，更於2021年12月於台中開設2號店，未來也積極規劃在全台擴點，讓大家都能體驗到輕鬆愉快並獨具特色的韓式烤肉。
                                        </span>
                                    </div>
                                    <div class="card-footer">1F</div>
                                </div>
                            </div>
                            <div class="card">
                                <img src="/store/store/MOLINO.jpeg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <div class="card-title">MOLINO</div>
                                    <div class="card-text">
                                        <span>
                                            全台第一間以石臼現磨鮮麥，提供手工義大利麵的義式餐廳，義大利文的MOLINO，指的是「石臼研磨」。MOLINO以石臼磨麥製麵傳統，研發出最美味的手工義大利麵。
                                        </span>
                                    </div>
                                    <div class="card-footer">1F</div>
                                </div>
                            </div>
                            <div class="card">
                                <img src="/store/store/Draft Land Taichung.jpeg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <div class="card-title">Draft Land Taichung</div>
                                    <div class="card-text">
                                        <span>
                                            Draft Land 是亞洲第一間以 Cocktails On Tap
                                            形式為主的汲飲式雞尾酒吧。團隊​透過汲飲系統，將氮氣及二氧化碳注入酒精飲品及非酒精飲品中，創造出快速、高品質、永續且可負擔的專業調酒。
                                        </span>
                                    </div>
                                    <div class="card-footer">1F</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount = () => {
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

        // var swiper = new Swiper(".mySwiper", {
        //     slidesPerView: 1,
        //     spaceBetween: 10,
        //     slidesPerGroup: 1,
        //     loop: true,
        //     loopFillGroupWithBlank: true,
        //     pagination: {
        //         el: ".swiper-pagination",
        //         clickable: true
        //     },
        //     navigation: {
        //         nextEl: ".swiper-button-next",
        //         prevEl: ".swiper-button-prev"
        //     },
        //     pagination: {
        //         el: ".swiper-pagination",
        //         clickable: true
        //     },
        //     breakpoints: {
        //         "550": {
        //             slidesPerView: 1,
        //             spaceBetween: 10
        //         },
        //         "880": {
        //             slidesPerView: 2,
        //             spaceBetween: 20
        //         },
        //         "1200": {
        //             slidesPerView: 3,
        //             spaceBetween: 40,
        //         },
        //         "1600": {
        //             slidesPerView: 4,
        //             spaceBetween: 50
        //         }
        //     }
        // });
    }
}

export default Store
