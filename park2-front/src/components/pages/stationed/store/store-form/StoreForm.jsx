import React, { Component } from 'react';
import './style.css'
import Title from '../../../../commons/title/Title'
import Btn from '../../../../commons/btn/Btn'

class StoreForm extends Component {
  state = {  } 
  render() { 
    return (
      <div className="store-form">
        <div className="popup">
          <div className="popup-box">
            <img src="./img/smile.svg" alt="" className="face" />
            <div className="msg">
              申請已送出。<br/>相關部門人員將於七天工作日內主動與您連絡
            </div>
            <Btn name="確定" link="/stationed/store-apply"/>
          </div>
        </div>
        <div className="form-container">
          <Title title="店家進駐申請資料" />
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
          </div>
          <form>
            <div className="form-row">
              <div className="form-group">
                <label for="inputState">請選擇欲進駐的櫃位(地圖)*</label>
                <select id="inputState" className="form-control">
                  <option selected>B1F L101</option>
                  <option>B1F L102</option>
                  <option>B1F L103</option>
                </select>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">品牌名稱中文/英文*</label>
                <input type="text" className="form-control" id="exampleInputPassword1" />
              </div>
            </div>
              <div className="form-row">
                <div className="form-group">
                  <label for="exampleInputPassword1">店家類型*</label>
                  <input type="text" class="form-control" id="exampleInputPassword1" />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">聯絡人姓名*</label>
                  <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label for="exampleInputPassword1">手機*</label>
                  <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">email*</label>
                  <input type="text" class="form-control" id="exampleInputPassword1" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>請上傳品牌介紹 (範本)</label>
                  <label for="upload-file" className="custom-input">
                    <img src="/stationed/upload.svg" alt="" />
                    <div className="file-name">點擊上傳檔案</div>
                  </label>
                  <input type="file" id="upload-file" />
                </div>
                <div className="form-group">
                  <label for="inputState">預計進駐日期*</label>
                  <select id="inputState" className="form-control">
                    <option selected>111/08/01</option>
                    <option>111/09/01</option>
                    <option>111/10/01</option>
                  </select>
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
 
export default StoreForm;