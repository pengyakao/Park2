import React, { Component } from 'react';
import './style.css'
import Title from '../../../../commons/title/Title'
import Btn from '../../../../commons/btn/Btn'
import { getMarket, getMarketApply} from '../../../../../api/stationed/marketApi'
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
            <Btn name="確定" onHandle={this.removePopup}/>
          </div>
        </div>
        <img src="/stationed/bg.png" alt="" className="bg-img" />
        <div className="apply-container">
          <Title title="風格市集出店計畫" />
          <img src="/stationed/main.png" alt="" className="main-img" />
          <div className="btn-block">
            <Btn name="我要申請" link="/stationed/market-form" shouldCheck={this.state.isFull} onHandle={this.handleClick}/>
            <Btn name="申請查詢" link="/stationed/market-search" shouldCheck={false}/>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount = ()=>{
    const that = this
    async function getData() {
      let marketList = await getMarket().then((result)=>{
        return result
      })
      let marketApply = await getMarketApply().then((result)=>{
        return result.filter(e => {
          return e.mar_apply_sta != '6' && e.mar_apply_sta != '7' && e.mar_apply_sta != '8'
        })
      })
      console.log(marketApply)
      let newArr = marketList.map(list => {
        let total = 0
        marketApply.forEach(data => {
          if(list.market_id === data.market_id){
            total += data.mar_apply_count
          }
        })
        return {
          market_id: list.market_id,
          market_add_up: total
        }
      })
      let checkFull = marketList.map((data, i)=>{
        if(data.market_cnt > newArr[i].market_add_up){
          return {
            title: data.market_title,
            isFull: false
          }
        }else{
          return {
            title: data.market_title,
            isFull: true
          }
        }
      })
      let result = checkFull.every(e => e.isFull !== false)
      console.log(result)
      that.setState( {
        isFull: result
      });
    }
    getData()
  }

  handlePopup = () => {
    document.querySelector('.popup').classList.add('show-popup')
  }
  removePopup = () => {
    document.querySelector('.popup').classList.remove('show-popup')
  }


  handleClick = () => {
    console.log(this.state.isFull)
    if(this.state.isFull){
      this.handlePopup()
    }
  }
}
 
export default MarketApply;