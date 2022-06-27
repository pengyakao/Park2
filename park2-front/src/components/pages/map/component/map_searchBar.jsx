import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div id="search_container">
        <input
          id="search"
          type="text"
          placeholder="搜尋"
          list="searchShop"
          // onfocus="this.placeholder=''"
          // onblur="this.placeholder='搜尋'"
        />
        <button id="searchBtn">搜尋</button>

        <datalist id="searchShop">
          <option id="abc" value={"泱茶"} />
          <option value={"MISATO"} />
          <option value={"12AM"} />
          <option value={"每果發光"} />
          <option value={"para coffee"} />
          <option value={"正面奶酥"} />
          <option value={"COFFEE AND JOHN"} />
          <option value={"酉 5pm.twcaude"} />
        </datalist>

        <datalist id="searchInit"></datalist>
      </div>
    );
  }
}

export default SearchBar;
