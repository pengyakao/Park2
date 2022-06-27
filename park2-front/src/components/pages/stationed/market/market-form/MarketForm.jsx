import React, { Component } from 'react';
import './style.css'
import Title from '../../../../commons/title/Title'
import Btn from '../../../../commons/btn/Btn'

class MarketForm extends Component {
  state = {  } 
  render() { 
    return (
      <div className="form">
        <div className="popup">
          <div className="popup-box">
            <img src="/stationed/smile.svg" alt="" className="face" />
            <div className="msg">
              申請資料已收到，您的申請編號為 AB1120530
            </div>
            <Btn name="確定" link="/stationed/market-apply" shouldCheck={false}/>
          </div>
        </div>
        <div className="form-container">
        <Title title="我出去一下》風格品牌出店計畫報名表" />
        <div className="intro-block">
          <p>
            PARK2，一座大人系非典型公園，探索公園與城市生活的更多可能！
            <br/>位於台中市民廣場旁，集結個性植物、戶外生活、咖啡選物、風格餐飲、酒吧、點心等全台16個個性品牌！
            <br/>是一處綜合都市綠洲及風格聚落特質的複合型場域。
            <br/><br/>
            這次以品牌出發，邀請具有獨特風格魅力的你們，一起構築這場特別的迷你市集！
          </p>
        </div>
        <div className="another-intro">
          <Title title="「 把PARK2當成是自家客廳吧！」" />
          <div className="intro-block">
            <p>
              攤數不多，但範圍使用大一點。<br/>
              單一主題，可以專心介紹自己的店面與特色。<br/>
              在這裡每攤都值得駐足停留。
            </p>
          </div>
        </div>
        <form>
          <div className="form-row">
            <div className="form-group">
              <label for="inputState">請選擇欲報名的場次*</label>
              <select id="inputState" className="form-control">
                <option selected>6/11-12 城市裡的戶外生活篇</option>
                <option>6/11-12 城市裡的戶外生活篇</option>
              </select>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">品牌名稱中文/英文*</label>
              <input type="text" className="form-control" id="exampleInputPassword1" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label for="exampleInputPassword1">品牌粉專名稱*</label>
              <input type="text" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">販售類型*</label>
              <input type="text" className="form-control" id="exampleInputPassword1" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label for="exampleInputPassword1">聯絡人姓名*</label>
              <input type="text" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">手機*</label>
              <input type="text" className="form-control" id="exampleInputPassword1" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label for="exampleInputPassword1">email*</label>
              <input type="text" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="form-group">
              <label for="inputState">需要幾個攤位</label>
              <select id="inputState" className="form-control">
                <option selected>1</option>
                <option>2</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>請上傳活動企劃書 (參考格式)</label>
              <label for="upload-file" className="custom-input">
                <img src="/stationed/upload.svg" alt="" />
                <div className="file-name">點擊上傳檔案</div>
              </label>
              <input type="file" id="upload-file" />
            </div>
            <div className="form-group">
              <select id="inputState" className="form-control">
                <option selected>我開發票</option>
                <option>不開發票</option>
              </select>
              <div className="remark">*本活動需要開立本場域發票(由我方代開發票)，請問是否為開發票之店家，若只能開收據，亦須負擔5%營業稅</div>
            </div>
          </div>
            <div className="submit-block">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">本人已詳閱了解並同意遵守本活動注意事項。</label>
              </div>
              <Btn name="確認送出" shouldCheck={true} onHandle={this.handlePopup}/>
            </div>
          </form>
        </div>
      </div>
    );
  }
  componentDidMount = () => {
    let isSubmit = false;
    // function showPopup() {
    //   document.querySelector('.popup').classList.add('show-popup')
    // }
    // function removePopup() {
    //   document.querySelector('.popup').classList.remove('show-popup')
    // }

    // document.querySelector('.submit-form').addEventListener('click', showPopup)
    // document.querySelector('.remove-popup').addEventListener('click', removePopup)

    const fileUploader = document.querySelector('#upload-file');
    fileUploader.addEventListener('change', (e) => {
      if(e.target.files){
        document.querySelector('.file-name').innerText = `${e.target.files[0].name}`;
      }
    });
  }
  handlePopup = () => {
    console.log('submit')
    document.querySelector('.popup').classList.add('show-popup')
  }
}
 
export default MarketForm;