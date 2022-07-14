import React, { Component, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './style.css'
import { Pagination, Navigation } from 'swiper'
import Title from '../../commons/title/Title'
import SideTags from './component/Store/SideTags'
import StoreCard from './component/StoreCard'
import StoreHot from './component/StoreHot'
import StoreAll from './component/Store/StoreAll'
import { getStore } from '../../../api/storeApi'

class Store extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            origin_list: [],
            hot_list: [],
        }

        this.hello = this.hello.bind(this)
    }
    hello(new_state) {
        this.setState((state) => ({
            list: new_state,
        }))
    }
    render() {
        return (
            <div class="store-container">
                <SideTags listData={this.state.origin_list} hello={this.hello} />
                <div class="rightStoreCardArea">
                    <StoreHot list={this.state.hot_list} />
                    <StoreAll list={this.state.list} />
                </div>
            </div>
        )
    }

    componentDidMount() {
        const that = this
        var preDataHandle = () => {
            getStore().then((result) => {
                that.setState({ list: result, origin_list: result, hot_list: result })
            })
        }
        preDataHandle()
    }
}

export default Store
