import React, { Component } from "react";

class SideBar extends Component {
  render() {
    return (
        <div id="sideBar">
        <div id="sideBarTitle">公共設施</div>
        <br />
        <div id="secondBar">
          <span id="ctn1">
            <div id="toilet_icon">
              <img src="/map/icon/wc.svg" alt="wc" />
              <p>洗手間</p>
            </div>
            <br />
            <div id="parking_icon">
              <img src="/map/icon/parking.svg" alt="" />
              <p>停車場</p>
            </div>
          </span>

          <span id="ctn2">
            <div id="basketball_icon">
              <img src="/map/icon/basketball.svg" alt="" />
              <p> 球場 </p>
            </div>
            <br />
            <div id="elevator_icon">
              <img src="/map/icon/elevator.svg" alt="" />
              <p> 電梯 </p>
            </div>
          </span>
        </div>
        </div>
    );
  }
}
export default SideBar;
