import React, { Component } from 'react';
import Title from '../../../commons/title/Title'
import Btn from '../../../commons/btn/Btn'
import './style.css'
class StationedEntrance extends Component {
  state = {  } 
  render() { 
    return (
      <div className="stationed">
        <div className="space"></div>
        <div className="stationed-container">
          <div className="store inner-block">
            <Title title="風格市集出店計畫"/>
            <div className="img-block">
              <img src="/stationed/market.png" alt="" />
            </div>
            <Btn name="我要申請" link="/stationed/market-apply" shouldCheck={false}/>
          </div>
          <div className="market inner-block">
            <Title title="常駐店家進駐申請"/>
            <div className="img-block">
              <img src="/stationed/store.png" alt="" />
            </div>
            <Btn name="我要申請" link="/stationed/store-apply" shouldCheck={false}/>
          </div>
        </div>
      </div>
    );
  }
}
 
export default StationedEntrance;