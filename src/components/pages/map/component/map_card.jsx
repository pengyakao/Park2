import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div>
        <div id="infoCard">
          <img id="cardImg" src="/map/park2.jpg" alt="" />
          <div id="storeName">Park2草悟廣場</div>
          <div id="cardText"></div>
          <a href="" id="cardAncher">
            more
          </a>
          <div id="card_bg"></div>
          <div id="card_shadow"></div>
        </div>

      </div>
    );
  }
}

export default Card;
