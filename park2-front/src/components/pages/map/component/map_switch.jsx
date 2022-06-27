import React, { Component } from "react";
import "./btnStyle.css";

class SwitchBtn extends Component {
  render() {
    return (
      // <div id="floorSwitch">
      //   <input type="checkbox" id="chkSwitch" name="chkSwitch" />
      //   <label for="chkSwitch"></label>
      // </div>

      <div className="custom-btn_map remove-popup re-upload" id="layerSwitch">
        <div className="bg_map"></div>
        <div className="front-btn_map">樓層切換</div>
      </div>
    );
  }
}

export default SwitchBtn;
