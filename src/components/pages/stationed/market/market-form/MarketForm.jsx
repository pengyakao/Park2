import React, { Component } from 'react';
import './style.css'
import Title from '../../../../commons/title/Title'
import Btn from '../../../../commons/btn/Btn'

import { getMarket, getMarketApply, uploadFile} from '../../../../../api/stationed/marketApi'

class MarketForm extends Component {
  state = { 
    marketList: [],
    form: {
      relation: '', // market_id
      brand: '',
      type: '',
      url: '',
      person: '',
      tel: '',
      mail: '',
      count: '',
      bill: '',
      file: '',
      // fileName: '',
      state: 1, // 預設 1
      fee: null // 預設 NULL
    },
    check: {
      brand: false,
      type: false,
      tel: false,
      url: true,
      person: false,
      mail: false,
      file: false,
      agree: false
    }
  }
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
        <Title title="《我出去一下》風格品牌出店計畫報名表" />
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
              <label htmlFor="inputState">請選擇欲報名的場次 *</label>
              <select id="inputState" className="form-control" value={this.state.form.relation} 
                onChange={
                  (e)=>{
                    this.setState(prevState => ({
                      form: {
                        ...prevState.form,
                        relation: e.target.value
                      }
                    }))
                  }
                }>
                {this.state.marketList.map((item) =>
                  <option key={item.id} disabled={item.isFull ? 'disabled' : ''} value={item.id}>{item.title}</option>
                )}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="brandName">品牌名稱中文/英文 *</label>
              <input type="text" className="form-control" id="brandName" value={this.state.form.brand}
                onChange={
                  async (e)=>{
                    await this.setState(prevState => ({
                      form: {
                        ...prevState.form,
                        brand: e.target.value
                      }
                    }))
                    this.checkBrand(e.target, true)
                  }
                }
              />
              <div className="checkBrand check"></div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="socialUrl">品牌粉專連結（FB 或 IG）</label>
              <input type="text" className="form-control" id="socialUrl" value={this.state.form.url}
                onChange={
                  async (e)=>{
                    await this.setState(prevState => ({
                      form: {
                        ...prevState.form,
                        url: e.target.value
                      }
                    }))
                    this.checkUrl(e.target, false)
                  }
                }
              />
              <div className="checkUrl check"></div>
            </div>
            <div className="form-group">
              <label htmlFor="type">販售類型 *</label>
              <input type="text" className="form-control" id="type" value={this.state.form.type}
                onChange={
                  async (e)=>{
                    await this.setState(prevState => ({
                      form: {
                        ...prevState.form,
                        type: e.target.value
                      }
                    }))
                    this.checkType(e.target, true)
                  }
                }
              />
              <div className="checkType check"></div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="person">聯絡人姓名 *</label>
              <input type="text" className="form-control" id="person" value={this.state.form.person}
                onChange={
                  async (e)=>{
                    await this.setState(prevState => ({
                      form: {
                        ...prevState.form,
                        person: e.target.value
                      }
                    }))
                    this.checkPerson(e.target, true)
                  }
                }
              />
              <div className="checkPerson check"></div>
            </div>
            <div className="form-group">
              <label htmlFor="tel">聯絡電話 *</label>
              <input type="text" className="form-control" id="tel" value={this.state.form.tel}
                onChange={
                  async (e)=>{
                    await this.setState(prevState => ({
                      form: {
                        ...prevState.form,
                        tel: e.target.value
                      }
                    }))
                    this.checkTel(e.target, true)
                  }
                }
              />
              <div className="checkTel check"></div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">email *</label>
              <input type="text" className="form-control" id="email" value={this.state.form.mail}
                onChange={
                  async (e)=>{
                    await this.setState(prevState => ({
                      form: {
                        ...prevState.form,
                        mail: e.target.value
                      }
                    }))
                    this.checkMail(e.target, true)
                  }
                }
              />
              <div className="checkMail check"></div>
            </div>
            <div className="form-group">
              <label htmlFor="count">需要幾個攤位 *</label>
              <select id="count" className="form-control" value={this.state.form.count}
                onChange={
                  (e)=>{
                    this.setState(prevState => ({
                      form: {
                        ...prevState.form,
                        count: e.target.value
                      }
                    }))
                  }
                }
              >
                <option defaultValue>1</option>
                <option>2</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>請上傳活動企劃書 * (參考格式)</label>
              <label htmlFor="upload-file" className="custom-input">
                <img src="/stationed/upload.svg" alt="" />
                <div className="file-name">點擊上傳檔案</div>
              </label>
              <input type="file" id="upload-file" 
                onChange={
                  async (e)=>{
                    if(e.target.files.length !== 0){
                      await this.setState(prevState => ({
                        form: {
                          ...prevState.form,
                          file: e.target.files[0]
                        }
                      }))
                      // await this.setState(prevState => ({
                      //   form: {
                      //     ...prevState.form,
                      //     fileName: e.target.files[0].name
                      //   }
                      // }))
                      this.state.check.file = true
                      this.checkFile(true)
                    }else if(e.target.files.length == 0){
                      this.state.check.file = false
                      this.checkFile(true)
                    } 
                  }
                }
              />
            </div>
            <div className="form-group">
              <select id="bill" className="form-control" value={this.state.form.bill}
                onChange={
                  async (e)=>{
                    await this.setState(prevState => ({
                      form: {
                        ...prevState.form,
                        bill: e.target.value
                      }
                    }))
                    console.log(this.state.form.bill)
                  }
                }
              >
                <option defaultValue value="1">我開發票</option>
                <option value="0">不開發票</option>
              </select>
              <div className="remark">*本活動需要開立本場域發票(由我方代開發票)，請問是否為開發票之店家，若只能開收據，亦須負擔5%營業稅</div>
            </div>
          </div>
            <div className="submit-block">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="check" value={this.state.check.agree} onChange={
                  (e)=>{
                    this.setState(prevState => ({
                      check: {
                        ...prevState.check,
                        agree: e.target.checked
                      }
                    }))
                  }
                }/>
                <label className="form-check-label" htmlFor="check">本人已詳閱了解並同意遵守本活動注意事項。</label>
              </div>
              <Btn name="確認送出" shouldCheck={true} onHandle={this.handleSubmit}/>
            </div>
          </form>
        </div>
      </div>
    );
  }
  componentDidMount = () => {
    this.prevDataHandle()

    const fileUploader = document.querySelector('#upload-file');
    fileUploader.addEventListener('change', (e) => {
      if(e.target.files.length !== 0){
        document.querySelector('.file-name').innerText = `${e.target.files[0].name}`;
      }else if(e.target.files.length == 0){
        document.querySelector('.file-name').innerText = '點擊上傳檔案';
      }
    });
  }
  handleSubmit = () => {
    console.log(this.state.form)
    if(this.state.check.brand && this.state.check.type && this.state.check.mail && this.state.check.tel 
      && this.state.check.file && this.state.check.agree && this.state.check.person && this.state.check.url)
    {
      const formData = new FormData();
      formData.append("relation", this.state.form.relation);
      formData.append("brand", this.state.form.brand);
      formData.append("type", this.state.form.type);
      formData.append("url", this.state.form.url);
      formData.append("person", this.state.form.person);
      formData.append("tel", this.state.form.tel);
      formData.append("mail", this.state.form.mail);
      formData.append("count", this.state.form.count);
      formData.append("bill", this.state.form.bill);
      formData.append("file", this.state.form.file);
      // formData.append("fileName", this.state.form.fileName);
      formData.append("state", this.state.form.state);
      formData.append("fee", this.state.form.fee);
      uploadFile(formData).then((result)=> {
        console.log(result)
        if (window.confirm("已成功送出申請")) {
          window.location.href='/stationed/market-apply';
        }
      })
    }else{
      this.checkBrand(document.querySelector('input#brandName'), true)
      this.checkUrl(document.querySelector('input#socialUrl'), false)
      this.checkType(document.querySelector('input#type'), true)
      this.checkPerson(document.querySelector('input#person'), true)
      this.checkTel(document.querySelector('input#tel'), true)
      this.checkMail(document.querySelector('input#email'), true)
      this.checkFile(true)
    }
    // document.querySelector('.popup').classList.add('show-popup')
  }

  // 載入資料預處理
  prevDataHandle = () => {
    const that = this
    async function getData() {
      let market = await getMarket().then((result)=>{
        return result
      })
      let marketApply = await getMarketApply().then((result)=>{
        return result.filter(e => {
          return e.mar_apply_sta == '4' || e.mar_apply_sta == '5'
        })
      })
      let newArr = market.map(list => {
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
      let checkFull = market.map((data, i)=>{
        if(data.market_cnt > newArr[i].market_add_up){
          return {
            id: data.market_id,
            title: data.market_title,
            isFull: false
          }
        }else{
          return {
            id: data.market_id,
            title: data.market_title,
            isFull: true
          }
        }
      })
      // that.state.marketList = checkFull
      that.setState({
        marketList: checkFull
      })
      let defaultRelation = checkFull.filter(e=>e.isFull === false)[0]
      that.setState(prevState => ({
        form: {
          ...prevState.form,
          relation: defaultRelation.id
        }
      }))
      that.setState(prevState => ({
        form: {
          ...prevState.form,
          count: 1
        }
      }))
      that.setState(prevState => ({
        form: {
          ...prevState.form,
          bill: 1
        }
      }))
    }
    getData()
  }

  // 驗證相關
  checkFile = (isRequire) => {
    let fileInput = document.querySelector('.custom-input')
    let fileName = document.querySelector('.file-name')
    if(isRequire && this.state.check.file === false){
      fileName.innerText = '請上傳活動企劃書';
      // fileInput.style.backgroundColor = 'rgba(209,21,7,.5)';
      fileInput.style.border = 'solid 2px #d11507';
      fileInput.style.boxShadow = '0px 0px 0px 2px rgba(209,21,7,.5)';
    }else{
      fileInput.style.border = 'solid 2px #ced4da';
      fileInput.style.boxShadow = '0px 0px 0px 2px rgba(209,21,7,0)';
    }
  }
  checkBrand = (e, isRequire) => {
    let msg = document.querySelector('.checkBrand');
    if(isRequire && this.state.form.brand.length === 0){
      msg.innerText = '此為必填欄位';
      e.style.border = 'solid 2px #d11507';
      e.style.boxShadow = '0px 0px 0px 2px rgba(209,21,7,.5)';
      this.state.check.brand = false
    }else{
      msg.innerText = ''
      e.style.border = 'solid 1px #ced4da';
      e.style.boxShadow = '0px 0px 0px 2px rgba(209,21,7,0)';
      this.state.check.brand = true
    }
  }

  checkType = (e, isRequire) => {
    let msg = document.querySelector('.checkType');
    if(isRequire && this.state.form.type.length === 0){
      msg.innerText = '此為必填欄位';
      e.style.border = 'solid 2px #d11507';
      e.style.boxShadow = '0px 0px 0px 2px rgba(209,21,7,.5)';
      this.state.check.type = false
    }else{
      msg.innerText = ''
      e.style.border = 'solid 1px #ced4da';
      e.style.boxShadow = '0px 0px 0px 2px rgba(209,21,7,0)';
      this.state.check.type = true
    }
  }

  checkTel = (e, isRequire) => {
    let msg = document.querySelector('.checkTel');
    const telRegex = /(\d{2,3}-?|\(\d{2,3}\))\d{3,4}-?\d{4}|09\d{2}(\d{6}|-\d{3}-\d{3})/
    if(!telRegex.test(this.state.form.tel) && this.state.form.tel.length !== 0){
      msg.innerText = '請輸入正確格式';
      e.style.border = 'solid 2px #d11507';
      e.style.boxShadow = '0px 0px 0px 2px rgba(209,21,7,.5)';
      this.state.check.tel = false
    }else if(isRequire && this.state.form.tel.length === 0){
      msg.innerText = '此為必填欄位';
      e.style.border = 'solid 2px #d11507';
      e.style.boxShadow = '0px 0px 0px 2px rgba(209,21,7,.5)';
      this.state.check.tel = false
    }else{
      msg.innerText = ''
      e.style.border = 'solid 1px #ced4da';
      e.style.boxShadow = '0px 0px 0px 2px rgba(209,21,7,0)';
      this.state.check.tel = true
    }
  }

  checkMail = (e, isRequire) => {
    let msg = document.querySelector('.checkMail');
    const mailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    if(!mailRegex.test(this.state.form.mail) && this.state.form.mail.length !== 0){
      msg.innerText = '請輸入正確格式';
      e.style.border = 'solid 2px #d11507';
      e.style.boxShadow = '0px 0px 0px 2px rgba(209,21,7,.5)';
      this.state.check.mail = false
    }else if(isRequire && this.state.form.mail.length === 0){
      msg.innerText = '此為必填欄位';
      e.style.border = 'solid 2px #d11507';
      e.style.boxShadow = '0px 0px 0px 2px rgba(209,21,7,.5)';
      this.state.check.mail = false
    }else{
      msg.innerText = ''
      e.style.border = 'solid 1px #ced4da';
      e.style.boxShadow = '0px 0px 0px 2px rgba(209,21,7,0)';
      this.state.check.mail = true
    }
  }

  checkUrl = (e, isRequire) => {
    let msg = document.querySelector('.checkUrl');
    const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
    if(!urlRegex.test(this.state.form.url) && this.state.form.url.length !== 0){
      msg.innerText = '請輸入正確格式'
      e.style.border = 'solid 2px #d11507';
      e.style.boxShadow = '0px 0px 0px 2px rgba(209,21,7,.5)';
      this.state.check.url = false
    }else{
      msg.innerText = ''
      e.style.border = 'solid 1px #ced4da';
      e.style.boxShadow = '0px 0px 0px 2px rgba(209,21,7,0)';
      this.state.check.url = true
    }
  }

  checkPerson = (e, isRequire )=> {
    let msg = document.querySelector('.checkPerson');
    if(isRequire && this.state.form.person.length === 0){
      msg.innerText = '此為必填欄位';
      e.style.border = 'solid 2px #d11507';
      e.style.boxShadow = '0px 0px 0px 2px rgba(209,21,7,.5)';
      this.state.check.person = false
    }else{
      msg.innerText = ''
      e.style.border = 'solid 1px #ced4da';
      e.style.boxShadow = '0px 0px 0px 2px rgba(209,21,7,0)';
      this.state.check.person = true
    }
  }
}
 
export default MarketForm;