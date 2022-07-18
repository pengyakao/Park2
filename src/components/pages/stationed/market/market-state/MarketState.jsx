import React, { Component } from 'react';
import './style.css'
import Btn from '../../../../commons/btn/Btn'
import Title from '../../../../commons/title/Title'
import {editMarketApplyProposal, editMarketApplyPay} from '../../../../../api/stationed/marketApi'

class MarketState extends Component {
  state = { 
    id: '',
    currentStep: '',
    clickState: 'toReUpload',
    deadline: '',
    count: '',
    pay: '',
    file: '',
    fileName: '',
    fileLink: ''
  } 
  render() { 
    return (
      <div className="state">
        <div className="popup">
          <div className="popup-box">
            <img src="/stationed/sad.svg" alt="" className="face" />
            <div className="msg">
            </div>
            <Btn name="確定" onHandle={this.handleClick} shouldCheck={true}/>
            {/* <Btn name="確定" transferMoney={this.state.transferMoneyBtn} onHandleTransfer={this.removeTransferPopUp}/> */}
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
                <Btn name="匯款資訊" onHandle={this.handleClick}  shouldCheck={true}/>
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

  // 企劃書內容不符
  showPopup_toReUpload() {
    document.querySelector('.popup').classList.add('show-popup');
    document.querySelector('.msg').innerHTML = '<div>企劃書內容不符，請修改上傳</div>';
  }

  // 企劃書重新上傳
  showPopup_reUpload() {
    document.querySelector('.msg').innerHTML = `<div class="form-group">
      <div>請上傳活動企劃書 (參考格式)</div>
        <label for="upload-file" class="custom-input">
          <img src="/stationed/upload.svg" alt="">
          <div class="file-name">點擊上傳檔案</div>
        </label>
        <input type="file" id="upload-file">
      </div>`;
    document.querySelector('#upload-file').addEventListener('change', (e) => {
      if(e.target.files.length !== 0){
        document.querySelector('.file-name').innerText = `${e.target.files[0].name}`;
        this.setState({
          file: e.target.files[0]
        })
        this.setState({
          fileName: e.target.files[0].name
        })
      }else if(e.target.files.length == 0){
        document.querySelector('.file-name').innerText = '點擊上傳檔案';
        this.setState({
          fileName: ''
        })
      }
    })
  }

  handleClick = () => {
    const that = this
    if(this.state.currentStep == 2 && this.state.clickState === 'toReUpload'){
      this.showPopup_reUpload();
      this.state.clickState = 'reUpload';
    }else if(this.state.currentStep == 2 && this.state.clickState === 'reUpload'){
      if(this.state.fileName !== ''){
        const formData = new FormData();
        console.log({
          "id": this.state.id,
          "state": 1,
          "file": this.state.file,
          "delete": this.state.fileLink
        })
        formData.append("id", this.state.id);
        formData.append("state", 1);
        formData.append("file", this.state.file);
        // formData.append("fileName", this.state.fileName);
        formData.append("delete", this.state.fileLink);
        editMarketApplyProposal(formData).then((result)=>{
          console.log(result)
          that.removePopup()
        })
      }else if(this.state.fileName == ''){
        this.removePopup()
      }  
    }else if(this.state.currentStep == 3){
      this.showPopup_pay()
      document.querySelector('#pay').addEventListener('change', (e)=>{
        this.setState({
          pay: e.target.value
        })
      })
      if(this.state.pay.length === 5){
        const data = {
          id: this.state.id,
          fee: this.state.pay,
          state: 4
        }
        editMarketApplyPay(data).then((result)=>{
          this.removePopup()
        })
      }
    }
  }

  // 狀態2 顯示匯款資訊
  showPopup_pay = () => {
    const date = this.state.deadline
    const num = this.state.count
    document.querySelector('.popup').classList.add('show-popup');
    document.querySelector('.msg').innerHTML = `
      <div class="transfer-info">
        <div class="unit">NT$800 / 攤位</div>
        <div class="group">
          <div class="group-title">總計費用 : 
            <div class="separate"></div>
          </div>
          <div class="price">NT$ ${800*num}</div>
        </div>
        <div class="group">
          <div class="group-title">匯款帳號 : </div>
          <div class="account">(700) 0090491745</div>
        </div>
        <div class="group">
          <div class="group-title">繳費期限 : </div>
          <div class="deadline">至 ${date} 為止</div>
        </div>
        
        <div class="res">如匯款完成，請填寫帳號後5碼</div>

        <div class="column-group">
          <label for="pay">帳號後5碼*</label>
          <input type="text" class="form-control" id="pay"/>
        </div>
      </div>
    `;
  }

  // 取消popup
  removePopup() {
    document.querySelector('.popup').classList.remove('show-popup')
  }

  setStateAsync = (state) => {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    });
  }

  componentDidMount = async () => {
    // localstorage
    let searchData = localStorage.getItem('searchData');
    let originData = JSON.parse(searchData);
    console.log(originData.mar_apply_file)

    // 將localStorage 資料放進state
    await this.setStateAsync({
      id: originData.mar_apply_id
    })
    await this.setStateAsync({
      currentStep: originData.mar_apply_sta
    })
    await this.setStateAsync({
      count: originData.mar_apply_count
    })
    await this.setStateAsync({
      fileLink: originData.mar_apply_file
    })
    await this.setStateAsync({
      deadline: originData.mar_apply_deadline
    })
    


    // 狀態1 企劃書有錯誤
    if(this.state.currentStep == 2) {
      this.showPopup_toReUpload();
    }


    // 依照state狀態顯示畫面
    let steps = document.querySelectorAll('.step');
    if(this.state.currentStep ==1 || this.state.currentStep ==2){
      steps[0].classList.add('current-state')
    }else if(this.state.currentStep ==3 || this.state.currentStep ==4){
      steps[1].classList.add('current-state')
      document.querySelector('.state-block').classList.add('current-state2')
    }else if(this.state.currentStep >= 5){
      steps[2].classList.add('current-state')
      document.querySelector('.state-block').classList.add('current-state3')
    }
  }
}
 
export default MarketState ;