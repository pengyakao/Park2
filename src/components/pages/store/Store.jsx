import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './style.css'
import { Pagination, Navigation } from 'swiper'
import Title from '../../commons/title/Title'
import SideTags from './component/SideTags'
import StoreCard from './component/StoreCard'
import StoreHot from './component/StoreHot'
import StoreAll from './component/StoreAll'

class Store extends Component {
    state = {}
    render() {
        return (
            <div class="store-container">
                <SideTags />
                <div class="rightStoreCardArea">
                    <StoreHot />
                    <StoreAll />
                </div>
            </div>
        )
    }

    // componentDidMount() {}
}

export default Store
