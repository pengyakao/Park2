import React, { Component } from "react";
import "./style.css";
import { ReactComponent as SvgMap } from "./component/park2-all.svg";

import { myJS } from "./func";
import SearchBar from "./component/map_searchBar";
import Card from "./component/map_card";
// import Btn from "../../commons/btn/Btn";
import SwitchBtn from "./component/map_switch";
import SideBar from "./component/map_sideBar";

class Map extends Component {
  state = {};
  render() {
    return (
      <div class="map-container">
        <SideBar />
        <SearchBar />
        <SvgMap />
        <SwitchBtn />
        <Card />
      </div>
    );
  }

  componentDidMount() {
    myJS();
  }
}

export default Map;
