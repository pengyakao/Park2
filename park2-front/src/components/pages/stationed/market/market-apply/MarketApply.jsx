import React, { Component } from 'react';
import './style.css'
import Title from '../../../../commons/title/Title'
import Btn from '../../../../commons/btn/Btn'
class MarketApply extends Component {
  state = { 
    isFull: false
  } 
  render() { 
    return (
      <div className="apply">
        <div className="popup">
          <div className="popup-box">
            <img src="/stationed/sad.svg" alt="" className="face" />
            <div className="msg">
              所有檔期已額滿
            </div>
            <Btn name="確定" shouldCheck={false} onHandle={this.removePopup}/>
          </div>
        </div>
        <img src="/stationed/bg.png" alt="" className="bg-img" />
        <div className="apply-container">
          <Title title="風格市集出店計畫" />
          <img src="/stationed/main.png" alt="" className="main-img" />
          <div className="btn-block">
            <Btn name="我要申請" link="/stationed/market-form" shouldCheck={true} isFull={this.state.isFull} onHandle={this.handlePopup}/>
            <Btn name="申請查詢" link="/stationed/market-search" shouldCheck={false}/>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount = ()=>{
    // function showPopup() {
    //   document.querySelector('.popup').classList.add('show-popup')
    // }
    // function removePopup() {
    //   document.querySelector('.popup').classList.remove('show-popup')
    // }
    // if(this.state.isFull){
    //   showPopup();
    // }
    // document.querySelector('.remove-popup').addEventListener('click', removePopup)
  }
  handlePopup = () => {
    document.querySelector('.popup').classList.add('show-popup')
  }
  removePopup = () => {
    document.querySelector('.popup').classList.remove('show-popup')
  }
}
 
export default MarketApply;