import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import StationedEntrance from './entrance/StationedEntrance';

import StoreApply from './store/store-apply/StoreApply';
import StoreSteps from './store/store-steps/StoreSteps';
import StoreForm from './store/store-form/StoreForm';

import MarketApply from './market/market-apply/MarketApply';
import MarketForm from './market/market-form/MarketForm';
import MarketSearch from './market/market-search/MarketSearch';
import MarketState from './market/market-state/MarketState';

class StationedMain extends Component {
  state = {  } 
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/stationed" component={StationedEntrance} exact />
          <Route path="/stationed/store-apply" component={StoreApply} exact />
          <Route path="/stationed/store-apply-steps" component={StoreSteps} exact />
          <Route path="/stationed/store-form" component={StoreForm} exact />
          <Route path="/stationed/market-apply" component={MarketApply} exact />
          <Route path="/stationed/market-form" component={MarketForm} exact />
          <Route path="/stationed/market-search" component={MarketSearch} exact />
          <Route path="/stationed/market-state" component={MarketState} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}
 
export default StationedMain;