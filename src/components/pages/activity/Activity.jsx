import React, { Component } from 'react';
import { getActivity } from '../../../api/activity';
import ActClass from './component/ActClass';
// import ActCalendar from './component/ActCalendar';
import ActCard from './component/ActCard';
import GoToTop from './component/GoToTop';
import './activities_layout.css';
import './activities_layout_w992_mainpage.css';
import './activities_components.css';

class Activity extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            origin_list: [],
        }
        this.hello = this.hello.bind(this)
    }
    hello(new_state) {
        this.setState((state) => ({
            list: new_state,
        }))
    }
    render() {
        return (
            <div>
                <div className="activity-aside">
                    <ActClass listData={this.state.origin_list} hello={this.hello} />
                    {/* <ActCalendar /> */}
                </div>
                <div className="activity-article">
                    <ActCard list={this.state.list} />
                    <GoToTop />
                </div>
            </div>

        )
    }
    componentDidMount() {
        const that = this
        var preDataHandle = () => {
            getActivity().then((result) => {
                var newdata = result.filter(e => e.act_sta == 1)
                that.setState({ list: newdata, origin_list: newdata })
            })
        }
        preDataHandle()
    }
}

export default Activity;


// 方法二：
// class Activity extends Component {
//     state = {}
//     render() {
//         return (
//             <div>
//                 <div className="activity-aside">
//                     <ActClass />
//                     {/* <ActCalendar /> */}
//                 </div>
//                 <div className="activity-article">
//                     <ActCard />
//                 </div>
//             </div>

//         )
//     };
// }

// export default Activity;

// 方法一：
// class Activity extends Component {
//     state = {}
//     render() {
//         return (
//             <React.Fragment>
//                 <aside className="activity-aside">
//                     <div className="titleSW" id="activeType">活動類別</div>
//                     <div id="btnSelect">
//                         <button className="type-btn btn-live"><a href="#">現場LIVE</a></button>
//                         <button className="type-btn btn-popup"><a href="#">快閃活動</a></button>
//                         <button className="type-btn btn-car"><a href="#">風格餐車</a></button>
//                         <button className="type-btn btn-market"><a href="#">商家市集</a></button>
//                         <button className="type-btn btn-forum"><a href="#">創作者論壇</a></button>
//                     </div>
//                     <div className="calendar">
//                         <div className="calendar-header">
//                             <div className="year-picker">
//                                 <span className="year-change" id="prev-year">
//                                     <img src="/activity/icon/left_s.svg" alt=""/>
//                                 </span>
//                                 <span id="year">2022</span>
//                                 <span className="year-change" id="next-year">
//                                     <img src="/activity/icon/right_s.svg" alt=""/>
//                                 </span>
//                             </div>
//                             <span className="month-picker" id="month-picker">June</span>
//                         </div>
//                         <div className="calendar-body">
//                             <div className="calendar-week-day">
//                                 <div>日</div>
//                                 <div>一</div>
//                                 <div>二</div>
//                                 <div>三</div>
//                                 <div>四</div>
//                                 <div>五</div>
//                                 <div>六</div>
//                             </div>
//                             <div className="calendar-days"></div>
//                         </div>
//                         <div className="month-list"></div>
//                     </div>
//                 </aside>

//                 <article className="activity-article">
//                     <Title title="近期活動" />
//                     <div class="title-block titleBG">
//                         <div class="custom-title active-title">近期活動</div>
//                         <div class="title-bg">近期活動</div>
//                     </div>
//                     <div id="active-card">
//                         <div className="card">
//                             <a href="/activity/activity1" target="_blank">
//                                 <img src="/activity/img/activities/我出去一下_城市裡的戶外生活篇.jpeg" className="card-img-top"/>
//                                 <div className="card-info">
//                                     <div className="card-title">我出去一下_城市裡的戶外生活篇</div>
//                                     <div className="card-text">6/18 Sat.~6/19 Sun.</div>
//                                     <div className="triangle-market"></div>
//                                     <div className="card-label-market">商家市集</div>
//                                 </div>
//                             </a>
//                         </div>
//                         <div className="card">
//                             <a href="#" target="_blank">
//                                 <img src="/activity/img/activities/我出去一下_城市裡的戶外生活篇.jpeg" className="card-img-top"/>
//                                 <div className="card-info">
//                                     <div className="card-title">我出去一下_城市裡的戶外生活篇</div>
//                                     <div className="card-text">6/18 Sat.~6/19 Sun.</div>
//                                     <div className="triangle-live"></div>
//                                     <div className="card-label-live">現場LIVE</div>
//                                 </div>
//                             </a>
//                         </div>
//                         <div className="card">
//                             <a href="#" target="_blank">
//                                 <img src="/activity/img/activities/我出去一下_城市裡的戶外生活篇.jpeg" className="card-img-top"/>
//                                 <div className="card-info">
//                                     <div className="card-title">我出去一下_城市裡的戶外生活篇</div>
//                                     <div className="card-text">6/18 Sat.~6/19 Sun.</div>
//                                     <div className="triangle-popup"></div>
//                                     <div className="card-label-popup">快閃活動</div>
//                                 </div>
//                             </a>
//                         </div>
//                         <div className="card">
//                             <a href="#" target="_blank">
//                                 <img src="/activity/img/activities/我出去一下_城市裡的戶外生活篇.jpeg" className="card-img-top"/>
//                                 <div className="card-info">
//                                     <div className="card-title">我出去一下_城市裡的戶外生活篇</div>
//                                     <div className="card-text">6/18 Sat.~6/19 Sun.</div>
//                                     <div className="triangle-car"></div>
//                                     <div className="card-label-car">風格餐車</div>
//                                 </div>
//                             </a>
//                         </div>
//                         <div className="card">
//                             <a href="#" target="_blank">
//                                 <img src="/activity/img/activities/我出去一下_城市裡的戶外生活篇.jpeg" className="card-img-top"/>
//                                 <div className="card-info">
//                                     <div className="card-title">我出去一下_城市裡的戶外生活篇</div>
//                                     <div className="card-text">6/18 Sat.~6/19 Sun.</div>
//                                     <div className="triangle-market"></div>
//                                     <div className="card-label-market">商家市集</div>
//                                 </div>
//                             </a>
//                         </div>
//                         <div className="card">
//                             <a href="#" target="_blank">
//                                 <img src="/activity/img/activities/我出去一下_城市裡的戶外生活篇.jpeg" className="card-img-top"/>
//                                 <div className="card-info">
//                                     <div className="card-title">我出去一下_城市裡的戶外生活篇</div>
//                                     <div className="card-text">6/18 Sat.~6/19 Sun.</div>
//                                     <div className="triangle-forum"></div>
//                                     <div className="card-label-forum">創作者論壇</div>
//                                 </div>
//                             </a>
//                         </div>
//                     </div>
//                 </article>
//             </React.Fragment>
//         )
//     };
//     componentDidMount = () => {
//         // calendar選擇器
//         // 每個月的名稱
//         const month_names = ['January','February','March','April','May','June','July','August','September','October','November','December']
            
//         // 設定閏月的規則
//         // 1.西元年份除以400可整除，為閏年
//         // 2.西元年份除以4可整除但除以100不可整除，為閏年
//         // 3.西元年份除以4不可整除，為平年
//         // 4.西元年份除以100可整除但除以400不可整除，為平年
//         let isLeapYear = (year) => {
//             return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 === 0)
//         }
        
//         // 抓閏月
//         let getFebDays = (year) => {
//              return isLeapYear(year) ? 29:28
//         }
        
//         // 抓calendar CSS
//         let calendar = document.querySelector('.calendar')
        
//         // 產生年月
//         let generateCalendar = (month, year) => {
//             let calendar_days = calendar.querySelector('.calendar-days')
//             let calendar_header_year = calendar.querySelector('#year')
        
//             let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
            
//             calendar_days.innerHTML = ''
        
//             // 抓現在的日期
//             let currDate = new Date()
//             if (!month) month = currDate.getMonth()
//             if (!year) year = currDate.getFullYear()
            
//             let curr_month = `${month_names[month]}`
//             month_picker.innerHTML = curr_month
//             calendar_header_year.innerHTML = year
            
//                 let first_day = new Date(year, month, 1)
            
//                 for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
//                     let day = document.createElement('div')
//                     if (i >= first_day.getDay()) {
//                         day.classList.add('calendar-day-hover')
//                         day.innerHTML = i - first_day.getDay() + 1
//                         day.innerHTML += `<span></span>
//                                           <span></span>
//                                           <span></span>
//                                           <span></span>`
//                         if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear()) {
//                             console.log(i)
//                             day.classList.add('curr-date')
//                         }   
//                     }
//                     calendar_days.appendChild(day)
//                 }
//         }
//         // 秀出每個月份
//         let month_list = calendar.querySelector('.month-list')
        
//         month_names.forEach((e, index) => {
//             let month = document.createElement('div')
//             month.innerHTML = `<div date-month="${index}">${e}</div>`
//             month.querySelector('div').onclick = () => {
//                 month_list.classList.remove('show')
//                 curr_month.value = index
//                 generateCalendar(index, curr_year.value)
//             }
//             month_list.appendChild(month)
//         })
        
//         // 按下月份的時候會跳出各個月份
//         let month_picker = calendar.querySelector('#month-picker')
        
//         month_picker.onclick = () => {
//             month_list.classList.add('show')
//         }
        
//         let currDate = new Date()
        
//         let curr_month = { value: currDate.getMonth() }
//         let curr_year = { value: currDate.getFullYear() }
        
//         generateCalendar(curr_month.value, curr_year.value)
        
//         document.querySelector('#prev-year').onclick = () => {
//             --curr_year.value
//             generateCalendar(curr_month.value, curr_year.value)
//         }
        
//         document.querySelector('#next-year').onclick = () => {
//             ++curr_year.value
//             generateCalendar(curr_month.value, curr_year.value)
//         }
//     }
// }

// export default Activity;