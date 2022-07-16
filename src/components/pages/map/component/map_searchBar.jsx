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
        </datalist>


      </div>
    );
  }
}

export default SearchBar;
