import React, { Component, startTransition } from "react";

class Card extends Component {
  render() {
    return (
      <div id="infoCard">
        <img id="cancel" src="/map/cancel.svg" alt="" />
        <img id="cardImg" src="" alt="" />
        <div id="cardText"></div>
        <a href="" id="cardAncher">
          more
        </a>
      </div>
    );
  }
}

export default Card;
