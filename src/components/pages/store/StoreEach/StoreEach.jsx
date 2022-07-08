import React, { Component } from 'react'
import './style.css'
import { useState, useEffect } from 'react'
// import { Pagination, Navigation } from 'swiper'
import StoreInfo from './component/StoreInfo'

class StoreEach extends Component {
    state = {}
    render() {
        return (
            <div class="container store-each">
                <StoreInfo />
            </div>
        )
    }

    // componentDidMount() {}
}

export default StoreEach
