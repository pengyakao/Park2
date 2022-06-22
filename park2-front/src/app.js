import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/pages/home/Home.jsx';
import Map from './components/pages/map/map.jsx';
import Activities from './components/pages/activities/activities.jsx';
import Store from './components/pages/store/store.jsx';
import Stationed from './components/pages/stationed/stationed.jsx';

class App extends Component {
    render() {
      return (      
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/Park2/Index" component={Home} />
            <Route path="/Park2/Activities" component={Activities} />
            <Route path="/Park2/Map" component={Map} />
            <Route path="/Park2/Store" component={Store} />
            <Route path="/Park2/Stationed" component={Stationed} />
          </Switch>
        </BrowserRouter>
      );
    }
  }
   
  export default App;