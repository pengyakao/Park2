import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/commons/header/Header'
import Footer from './components/commons/footer/Footer'

import Home from './components/pages/home/Home.jsx'
import Map from './components/pages/map/map.jsx'
import Activity from './components/pages/activity/Activity.jsx'
import Store from './components/pages/store/Store.jsx'
import Stationed from './components/pages/stationed/StationedMain.jsx'

import ActivityInfo from './components/pages/activity/infopage/ActivityInfo.jsx'
import StoreEach from './components/pages/store/StoreEach/StoreEach.jsx'

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/activity" component={Activity} exact />
                        <Route path="/activity/:activityId" component={ActivityInfo} />
                        <Route path="/map" component={Map} />
                        <Route path="/store" component={Store} exact />
                        <Route path="/store/:storeId" component={StoreEach} />
                        <Route path="/stationed" component={Stationed} />
                    </Switch>
                    {/* <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/Park2/Index" component={Home} />
              <Route path="/Park2/Activity" component={Activity} />
              <Route path="/Park2/Map" component={Map} />
              <Route path="/Park2/Store" component={Store} />
              <Route path="/Park2/Stationed" component={Stationed} />
            </Switch> */}
                </BrowserRouter>
                <Footer />
            </React.Fragment>
        )
    }
}

export default App
