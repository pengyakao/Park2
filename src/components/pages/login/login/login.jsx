import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div id="park2_login">
        <img src="" alt="" />
        <input id="account" type="text" placeholder="帳號" />
        <input id="password" type="text" placeholder="密碼" />
        <button id="login_btn" onClick={this.login_confirm}>
          登入
        </button>
      </div>
    );
  }

  login_confirm = () => {
    // 利用帳號索引資料
    var array = {
      account: "泱茶",
      password: "111",
      permission: "1",
    };

    var account = document.getElementById("account");
    var password = document.getElementById("password");

    if (account.value === array["account"]) {
      console.log("帳號正確");
      if (password.value === array["password"]) {
        alert("登入成功");
      } else {
        alert("密碼錯誤，請確認後再次輸入!");
      }
    } else {
      alert("此帳號不存在，請確認後再次輸入!");
    }
  };
}

export { Login };
