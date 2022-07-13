import React, { Component } from "react";
import "./btnStyle.css";

class SwitchBtn extends Component {
  render() {
    return (
      // <div id="floorSwitch">
      //   <input type="checkbox" id="chkSwitch" name="chkSwitch" />
      //   <label for="chkSwitch"></label>
      // </div>
      <div id="btnContainer">
        <div className="custom-btn_map remove-popup re-upload" id="layerSwitch">
          <div className="bg_map"></div>
          <div className="front-btn_map" id="btn_text">1F</div>
        </div>
      </div>
    );
  }
}

export default SwitchBtn;
