import React, { Component } from 'react';
import Title from '../../../../commons/title/Title'
import Btn from '../../../../commons/btn/Btn'
import './style.css'
class StoreSteps extends Component {
  state = { 
    isCheck: false
  } 
  render() { 
    return (
      <div className="store-apply">
          <div className="popup">
          <div className="popup-box">
            <img src="/stationed/sad.svg" alt="" className="face" />
            <div className="msg">
              請勾選“本人已閱讀及同意遵守上述條款及細則”。
            </div>
            <Btn name="確定" shouldCheck={true} onHandle={this.removePopup}/>
          </div>
        </div>
        <div className="apply-container">
          <Title title="店家進駐申請"/>
          <div className="step-block">
            <div className="step">
              <img src="/stationed/store-step/step1.svg" alt="" />
              <div className="step-text">
                STEP1<br/>填寫店家進駐申請表
              </div>
            </div>
            <div className="step">
              <img src="/stationed/store-step/step2.svg" alt="" />
              <div className="step-text">
                STEP2<br/>部門人員將於七日內主動連絡您
              </div>
            </div>
            <div className="step">
              <img src="/stationed/store-step/step3.svg" alt="" />
              <div className="step-text">
                STEP3<br/>期限內完成合約用印及訂金付款
              </div>
            </div>
            <div className="step">
              <img src="/stationed/store-step/step4.svg" alt="" />
              <div className="step-text">
                STEP4<br/>完成進駐申請
              </div>
            </div>
          </div>
          <div className="rule-block">
            歡迎您與park2「店家進駐」合作，請您確認條款及細則後，點擊「我要申請」填寫「櫃位申請表單」，相關部門人員將於七天工作日內主動與您連絡。
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="check" value={this.state.isCheck}
              onChange={
                (e)=>{
                  this.setState({
                    isCheck: e.target.checked
                  })
                }
              }
            />
            <label className="form-check-label" htmlFor="check">本人已閱讀及同意遵守上述條款及細則。</label>
          </div>
          <Btn name="我要申請" link="/stationed/store-form" shouldCheck={!this.state.isCheck} onHandle={this.handleClick}/>
        </div>
      </div>
    );
  }

  showPopup = () => {
    document.querySelector('.popup').classList.add('show-popup')
  }

  removePopup = () => {
    document.querySelector('.popup').classList.remove('show-popup')
  }

  handleClick = () => {
    this.showPopup()
  }
}
 
export default StoreSteps;