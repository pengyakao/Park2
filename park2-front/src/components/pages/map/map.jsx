import React, { Component } from "react";
import Header from "../../commons/header/Header";
import "./style.css";
import { ReactComponent as Svg1F } from "./component/img/park2-1f.svg";
// import { ReactComponent as SvgB1 } from "./component/img/park2-b1.svg";

import SideBar from "./component/sideBar";
// import Svg from "./component/svg";
// import Svg2 from "./component/svg2";
import SwitchBtn from "./component/switch";

class Map extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <SideBar />
        <Svg1F />
        {/* <SvgB1 /> */}
        <SwitchBtn />
      </div>
    );
  }
}

export default Map;
