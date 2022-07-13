import React, { Component } from 'react'
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
    state = {
        list: [],
    }
    render() {
        return (
            <div class="store-container">
                <SideTags />
                <div class="rightStoreCardArea">
                    <StoreHot list={this.state.list} />
                    <StoreAll list={this.state.list} />
                </div>
            </div>
        )
    }

    componentDidMount() {
        const that = this
        var preDataHandle = () => {
            getStore().then((result) => {
                that.setState({ list: result })
            })
        }
        preDataHandle()
        // preDataHandle = () => {
        //     const that = this
        //     getStore().then((result) => {
        //         that.setState({
        //             list: result,
        //         })
        //     })
        // }
    }
}

export default Store
