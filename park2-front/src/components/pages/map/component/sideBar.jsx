import React, { Component } from "react";

class SideBar extends Component {
  state = {};
  render() {
    return (
      <div id="sideBar">
        <div id="sideBarTitle">公共設施</div>
        <br />
        <span>
          <img src={require("./img/info.svg").default} alt="mySvgImage" />
        </span>
        <p>服務中心</p>
        <br />
        <img src={require("./img/parking.svg").default} alt="mySvgImage" />
        <p>停車場</p>
        <br />
      </div>
    );
  }
}
export default SideBar;
