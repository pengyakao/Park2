import React, { Component } from "react";

class SwitchBtn extends Component {
  state = {};
  render() {
    return (
      <div id="floorSwitch">
        <input type="checkbox" id="chkSwitch" name="chkSwitch" />
        <label for="chkSwitch"></label>
      </div>
    );
  }
}

export default SwitchBtn;
