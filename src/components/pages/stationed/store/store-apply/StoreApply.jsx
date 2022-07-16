import React, { Component } from 'react';
import './style.css'
import Title from '../../../../commons/title/Title'
import Btn from '../../../../commons/btn/Btn'
import {getStore, getStoreApply} from '../../../../../api/stationed/storeApi'

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
            <Btn name="確定" shouldCheck={true} onHandle={this.removePopup}/>
          </div>
        </div>
        <img src="/stationed/bg.png" alt="" className="bg-img" />
        <div className="apply-container">
          <Title title="常駐店家進駐申請" />
          <img src="/stationed/store.png" alt="" className="main-img" />
          <div className="btn-block">
            <Btn name="我要申請" link="/stationed/store-apply-steps" shouldCheck={this.state.isFull} onHandle={this.handleClick}/>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount = ()=>{
    let location = {
      '101': false,
      '102': false,
      '103': false,
      '104': false,
      '105': false,
      '106': false,
      '107': false,
      '108': false,
      'B101': false,
      'B102': false,
      'B103': false,
      'B104': false,
      'B105': false,
      'B106': false,
      'B107': false
    }
    let getData = async () => {
      let store = await getStore().then((result)=>{
        const filter = result.filter(e=>e.sto_sta == 1 || e.sto_sta == 2 )
        const newResult = filter.map(e=>e.sto_location)
        return newResult
      })
      let storeApply = await getStoreApply().then((result)=>{
        const filter = result.filter(e=>e.sto_apply_sta == 1 || e.sto_apply_sta == 2)
        const newResult = filter.map(e=>e.sto_apply_location)
        return newResult
      })
      let data = store.concat(storeApply)
      data.forEach(e=>{
        if(Object.keys(location).includes(e)){
          location[e] = true
        }
      })
      console.log(data,location)
      if(Object.values(location).every(e => e == true)){
        this.setState({
          isFull: true
        })
      }
    }
    getData()
    
    // if(this.state.isFull){
    //   this.showPopup();
    // }
    // document.querySelector('.remove-popup').addEventListener('click', this.removePopup)
  }
  handleClick = () => {
    console.log(this.state.isFull)
    if(this.state.isFull){
      this.showPopup()
    }
  }

  showPopup = () => {
    document.querySelector('.popup').classList.add('show-popup')
  }
  removePopup = () => {
    document.querySelector('.popup').classList.remove('show-popup')
  }
}
 
export default StoreApply;