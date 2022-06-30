import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div id="infoCard">
        <div id="card_bg"></div>
        <img id="cardImg" src="/map/park2.jpg" alt="" />
        <div id="cardText">Park2草悟廣場</div>
        <a href="" id="cardAncher">
          more
        </a>

      </div>
    );
  }
}

export default Card;
