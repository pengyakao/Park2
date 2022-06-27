import React, { Component } from 'react';
import './style.css'
import Title from '../../../../commons/title/Title'
import Btn from '../../../../commons/btn/Btn'
class StoreApply extends Component {
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
              所有櫃位已額滿
            </div>
            <Btn name="確定" link="/stationed"/>
          </div>
        </div>
        <img src="/stationed/bg.png" alt="" className="bg-img" />
        <div className="apply-container">
          <Title title="常駐店家進駐申請" />
          <img src="/stationed/store.png" alt="" className="main-img" />
          <div className="btn-block">
            <Btn name="我要申請" link="/stationed/store-apply-steps" />
          </div>
        </div>
      </div>
    );
  }
  componentDidMount = ()=>{
    function showPopup() {
      document.querySelector('.popup').classList.add('show-popup')
    }
    function removePopup() {
      document.querySelector('.popup').classList.remove('show-popup')
    }
    if(this.state.isFull){
      showPopup();
    }
    document.querySelector('.remove-popup').addEventListener('click', removePopup)
  }
}
 
export default StoreApply;