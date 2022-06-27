import React, { Component, startTransition } from "react";

class Location extends Component {
  render() {
    return (
      // 1F
      <div id="loaction_caontainer">
        {/* <img id="F101" class="shop1F" src="./img/map/1.svg" alt="泱茶" /> */}
        <img
          id="F102"
          class="shop1F"
          src={require("./img/2.svg").default}
          alt="米弎豆"
        />
        <img
          id="F103"
          class="shop1F"
          src={require("./img/3.svg").default}
          alt="12AM"
        />
        <img
          id="F104"
          class="shop1F"
          src={require("./img/4.svg").default}
          alt="每果發光"
        />
        <img
          id="F105"
          class="shop1F"
          src={require("./img/5.svg").default}
          alt="para coffee"
        />
        <img
          id="F106"
          class="shop1F"
          src={require("./img/6.svg").default}
          alt="正面奶酥"
        />
        <img
          id="F107"
          class="shop1F"
          src={require("./img/7.svg").default}
          alt="COFFEE AND JOHN"
        />
        <img
          id="F108"
          class="shop1F"
          src={require("./img/8.svg").default}
          alt="酉5PM"
        />

        {/* 2F */}
        {/* <img
          id="B101"
          class="shopB1"
          src={require("./img/1.svg").default}
          alt="MOLION"
        />
        <img
          id="B102"
          class="shopB1"
          src={require("./img/2.svg").default}
          alt="新村站著吃"
        />
        <img
          id="B103"
          class="shopB1"
          src={require("./img/3.svg").default}
          alt="ROCKLAND PLUS"
        />
        <img
          id="B104"
          class="shopB1"
          src={require("./img/4.svg").default}
          alt="TOASTERIA"
        />
        <img
          id="B105"
          class="shopB1"
          src={require("./img/5.svg").default}
          alt="SUNMAI"
        />
        <img
          id="B106"
          class="shopB1"
          src={require("./img/6.svg").default}
          alt="SUNDAY"
        />
        <img
          id="B107"
          class="shopB1"
          src={require("./img/7.svg").default}
          alt="Draft Land"
        /> */}
      </div>
    );
  }
}

export default Location;
