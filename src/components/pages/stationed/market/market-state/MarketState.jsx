import React, { Component } from 'react';
import './style.css'
import Btn from '../../../../commons/btn/Btn'
import Title from '../../../../commons/title/Title'

class MarketState extends Component {
  state = { 
    currentStep: 2,
    hasError: true,
    moneyNotYet: true,
    transferMoneyBtn: false
  } 
  render() { 
    return (
      <div className="state">
        <div className="popup">
          <div className="popup-box">
            <img src="/stationed/sad.svg" alt="" className="face" />
            <div className="msg">
            </div>
            <Btn name="確定" transferMoney={this.state.transferMoneyBtn} onHandleTransfer={this.removeTransferPopUp}/>
          </div>
        </div>
        <div className="state-container">
          <Title title="報名進度查詢"/>
          <div className="state-block">
            <div className="inner-block">
              <div className="step step1">
                <img src="/stationed/step/step1.svg" alt="" />
                <div className="step-info">
                  STEP1<br/>
                  申請審核中<br/>
                  將於申請後14日內完成審核
                </div>
              </div>
              <div className="left-line"></div>
              <div className="step step2">
                <img src="/stationed/step/step2.svg" alt="" />
                <div className="step-info">
                  STEP2<br/>
                  感謝您的報名，審核已通過，請於期限內完成繳費<br/>
                </div>
                <Btn name="匯款資訊" onHandle={this.showTransferPopUp} />
              </div>
              <div className="right-line"></div>
              <div className="step step3">
                <img src="/stationed/step/step3.svg" alt="" />
                <div className="step-info">
                  STEP3<br/>
                  已確認款項，請查核您的電子郵件並詳閱相關說明，謝謝
                </div>
              </div>
            </div>
          </div>
          <div className="other">若有其他問題，歡迎來電04-2233-8899</div>
        </div>
      </div>
    );
  }
  showTransferPopUp = () => {
    if(this.state.moneyNotYet && this.state.currentStep === 2) {
      this.showPopup_step2();
    }
  }
  removeTransferPopUp = () => {
    document.querySelector('.popup').classList.remove('show-popup');
  }
  showPopup_step2 = () => {
    document.querySelector('.popup').classList.add('show-popup');
    document.querySelector('.msg').innerHTML = `
      <div class="transfer-info">
        <div class="unit">NT$800 / 攤位</div>
        <div class="group">
          <div class="group-title">總計費用 : 
            <div class="separate"></div>
          </div>
          <div class="price">NT$ 1600</div>
        </div>
        <div class="group">
          <div class="group-title">匯款帳號 : </div>
          <div class="account">(700) 0090491745</div>
        </div>
        <div class="group">
          <div class="group-title">繳費期限 : </div>
          <div class="deadline">至 2022/07/24 為止</div>
        </div>
        
        <div class="res">如匯款完成，請填寫帳號後5碼</div>

        <div class="column-group">
          <label for="exampleInputPassword1">帳號後5碼*</label>
          <input type="text" class="form-control" id="exampleInputPassword1" />
        </div>
      </div>
    `;
  }
  componentDidMount = () => {
    // let currentStep = 3;
    if(this.state.currentStep === 2 && this.state.moneyNotYet === true){
      this.setState({
        transferMoneyBtn: true
      })
      console.log( this.state.transferMoneyBtn)
    }
    let steps = document.querySelectorAll('.step');
    steps.forEach((e, i)=>{
      if(i+1 === this.state.currentStep){
      e.classList.add('current-state');
      }
    })
    if(this.state.currentStep === 2){
      document.querySelector('.state-block').classList.add('current-state2')
    }
    if(this.state.currentStep === 3){
      document.querySelector('.state-block').classList.add('current-state3')
    }

    // 彈跳視窗 -----------------
    // let hasError = false;

    if(this.state.hasError && this.state.currentStep === 1) {
      showPopup_step1();
    }
    function showPopup_step1() {
      document.querySelector('.popup').classList.add('show-popup');
      document.querySelector('.msg').innerHTML = '<div>企劃書內容不符，請修改上傳</div>';
    }

    document.querySelector('.re-upload').addEventListener('click', ()=>{
      document.querySelector('.msg').innerHTML = `<div class="form-group">
        <div>請上傳活動企劃書 (參考格式)</div>
          <label for="upload-file" class="custom-input">
            <img src="/stationed/upload.svg" alt="">
            <div>點擊上傳檔案</div>
          </label>
          <input type="file" id="upload-file">
        </div>`;
    })
    document.querySelector('.re-upload').addEventListener('click', ()=>{
      document.querySelector('.msg').innerHTML = `<div class="form-group">
        <div>請上傳活動企劃書 (參考格式)</div>
          <label for="upload-file" class="custom-input">
            <img src="/stationed/upload.svg" alt="">
            <div class="file-name">點擊上傳檔案</div>
          </label>
          <input type="file" id="upload-file">
        </div>`;
      document.querySelector('.re-upload').classList.add('close-btn');
      document.querySelector('.re-upload').classList.remove('re-upload');
      document.querySelector('.close-btn').addEventListener('click', removePopup)

      const fileUploader = document.querySelector('#upload-file');
      fileUploader.addEventListener('change', (e) => {
        if(e.target.files){
          document.querySelector('.file-name').innerText = `${e.target.files[0].name}`;
        }
          // File Object (Special Blob)
      });
    })

    
    function removePopup() {
      document.querySelector('.popup').classList.remove('show-popup')
    }

  }
}
 
export default MarketState ;