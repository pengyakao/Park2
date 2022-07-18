import React, { Component } from 'react';
import './style.css'
import Title from '../../../../commons/title/Title'
import Btn from '../../../../commons/btn/Btn'
import {getStore, getStoreApply, postStoreApply} from '../../../../../api/stationed/storeApi'
import dayjs from 'dayjs'

class StoreForm extends Component {
  state = { 
    storeList: [],
    dateList: [],
    isFull: false,
    form: {
      brand: '',
      location: '',
      type: '',
      person: '',
      tel: '',
      mail: '',
      time: '',
      file: '',
      state: 1, // 預設 1
    },
    check: {
      brand: false,
      type: false,
      tel: false,
      person: false,
      mail: false,
      file: false,
      agree: false
    }
  } 
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
                <label htmlFor="location">請選擇欲進駐的櫃位(地圖)*</label>
                <select id="location" className="form-control" value={this.state.form.location} 
                  onChange={
                    (e)=>{
                      this.setState(prevState => ({
                        form: {
                          ...prevState.form,
                          location: e.target.value
                        }
                      }))
                    }
                  }>
                  {this.state.storeList.map((item) =>
                    <option key={item.key} disabled={item.enable ? '' : 'disabled'} value={item.key}>{item.name}</option>
                  )}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="brandName">品牌名稱中文/英文*</label>
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
                  <label htmlFor="type">店家類型*</label>
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
                <div className="form-group">
                  <label htmlFor="person">聯絡人姓名*</label>
                  <input type="text" className="form-control" id="person"  value={this.state.form.person}
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
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="tel">聯絡電話*</label>
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
                <div className="form-group">
                  <label htmlFor="email">email*</label>
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
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>請上傳品牌介紹 (範本)</label>
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
                  <label htmlFor="inputState">預計進駐日期*</label>
                  <select id="inputState" className="form-control" value={this.state.dateList.startAt} 
                    onChange={
                      (e)=>{
                        this.setState(prevState => ({
                          form: {
                            ...prevState.form,
                            time: e.target.value
                          }
                        }), ()=>{
                          console.log(typeof(this.state.form.time))
                        })
                      }
                    }>
                    {this.state.dateList.map((item) =>
                      <option key={item.startAt} value={item.startAt}>{item.startAt}</option>
                    )}
                  </select>
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
    let options = [
      {
        key: '101',
        name: '1F 101',
        enable: false, 
      },
      {
        key: '102',
        name: '1F 102',
        enable: false, 
      },
      {
        key: '103',
        name: '1F 103',
        enable: false, 
      },
      {
        key: '104',
        name: '1F 104',
        enable: false, 
      },
      {
        key: '105',
        name: '1F 105',
        enable: false, 
      },
      {
        key: '106',
        name: '1F 106',
        enable: false, 
      },
      {
        key: '107',
        name: '1F 107',
        enable: false, 
      },
      {
        key: '108',
        name: '1F 108',
        enable: false, 
      },
      {
        key: 'B101',
        name: 'B1 101',
        enable: false, 
      },
      {
        key: 'B102',
        name: 'B1 102',
        enable: false, 
      },
      {
        key: 'B103',
        name: 'B1 103',
        enable: false, 
      },
      {
        key: 'B104',
        name: 'B1 104',
        enable: false, 
      },
      {
        key: 'B105',
        name: 'B1 105',
        enable: false, 
      },
      {
        key: 'B106',
        name: 'B1 106',
        enable: false, 
      },
      {
        key: 'B107',
        name: 'B1 107',
        enable: false, 
      }
    ]

    let getData = async () => {
      let store = await getStore().then((result)=>{
        const filter = result.filter(e=>e.sto_sta == 1 || e.sto_sta ==2)
        const newResult = filter.map(e=>e.sto_location)
        return newResult
      })
      let storeApply = await getStoreApply().then((result)=>{
        const filter = result.filter(e=>e.sto_apply_sta == 1 || e.sto_apply_sta == 2)
        const newResult = filter.map(e=>e.sto_apply_location)
        return newResult
      })
      let data = store.concat(storeApply)
      options.forEach(e=>{
        if(data.includes(e.key)){
          e.enable = false
        }else{
          e.enable = true
        }
      })
      let optionDefault = options.filter(e=>e.enable==true)
      this.setState({
        storeList: options
      })

      this.setState(prevState => ({
        form: {
          ...prevState.form,
          time: dateData[0].startAt
        }
      }))

      this.setState(prevState => ({
        form: {
          ...prevState.form,
          location: optionDefault[0].key
        }
      }))
    }
    getData()

    // 預計進駐日期
    let dateData = [
      {
        startAt: ''
      },
      {
        startAt: ''
      },
      {
        startAt: ''
      }
    ]
    let today = dayjs().date();
    if(today > 15){
      dateData.forEach((e, i)=>{
        e.startAt = dayjs().add(i+2, 'month').startOf('month').format('YYYY-MM-DD');
      })
    }else{
      dateData.forEach((e, i)=>{
        e.startAt = dayjs().add(i+1, 'month').startOf('month').format('YYYY-MM-DD');
      })
    }
    console.log(dateData)
    this.setState({
      dateList: dateData
    })

    const fileUploader = document.querySelector('#upload-file');
    fileUploader.addEventListener('change', (e) => {
      if(e.target.files){
        document.querySelector('.file-name').innerText = `${e.target.files[0].name}`;
      }
    });

    
  }

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


  handleSubmit = () => {
    console.log(this.state.form)
    if(this.state.check.brand && this.state.check.type && this.state.check.mail && this.state.check.tel 
      && this.state.check.file && this.state.check.agree && this.state.check.person)
    {
      const formData = new FormData();
      formData.append("brand", this.state.form.brand);
      formData.append("location", this.state.form.location);
      formData.append("type", this.state.form.type);
      formData.append("person", this.state.form.person);
      formData.append("tel", this.state.form.tel);
      formData.append("mail", this.state.form.mail);
      formData.append("time", this.state.form.time);
      formData.append("file", this.state.form.file);
      formData.append("state", this.state.form.state);
      postStoreApply(formData).then((result)=> {
        console.log(result)
      })
    }else{
      this.checkBrand(document.querySelector('input#brandName'), true)
      this.checkType(document.querySelector('input#type'), true)
      this.checkPerson(document.querySelector('input#person'), true)
      this.checkTel(document.querySelector('input#tel'), true)
      this.checkMail(document.querySelector('input#email'), true)
      this.checkFile(true)
    }
    document.querySelector('.popup').classList.add('show-popup')
  }

}
 
export default StoreForm;