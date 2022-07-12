import React, { Component } from 'react';

class ActCalendar extends Component {
    state = {}
    render() {
        return (
            <div className="calendar">
                <div className="calendar-header">
                    <div className="year-picker">
                        <span className="year-change" id="prev-year">
                            <img src="/activity/icon/left_s.svg" alt=""/>
                        </span>
                        <span id="year">2022</span>
                        <span className="year-change" id="next-year">
                            <img src="/activity/icon/right_s.svg" alt=""/>
                        </span>
                    </div>
                    <span className="month-picker" id="month-picker">June</span>
                </div>
                <div className="calendar-body">
                    <div className="calendar-week-day">
                        <div>日</div>
                        <div>一</div>
                        <div>二</div>
                        <div>三</div>
                        <div>四</div>
                        <div>五</div>
                        <div>六</div>
                    </div>
                    <div className="calendar-days"></div>
                </div>
                <div className="month-list"></div>
            </div>
        );
    }

    componentDidMount = () => {
        // calendar選擇器
        // 每個月的名稱
        const month_names = ['January','February','March','April','May','June','July','August','September','October','November','December']
            
        // 設定閏月的規則
        // 1.西元年份除以400可整除，為閏年
        // 2.西元年份除以4可整除但除以100不可整除，為閏年
        // 3.西元年份除以4不可整除，為平年
        // 4.西元年份除以100可整除但除以400不可整除，為平年
        let isLeapYear = (year) => {
            return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 === 0)
        }
        
        // 抓閏月
        let getFebDays = (year) => {
            return isLeapYear(year) ? 29:28
        }
        
        // 抓calendar CSS
        let calendar = document.querySelector('.calendar')
        
        // 產生年月
        let generateCalendar = (month, year) => {
            let calendar_days = calendar.querySelector('.calendar-days')
            let calendar_header_year = calendar.querySelector('#year')
        
            let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
            
            calendar_days.innerHTML = ''
        
            // 抓現在的日期
            let currDate = new Date()
            if (!month) month = currDate.getMonth()
            if (!year) year = currDate.getFullYear()
            
            let curr_month = `${month_names[month]}`
            month_picker.innerHTML = curr_month
            calendar_header_year.innerHTML = year
            
                let first_day = new Date(year, month, 1)
            
                for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
                    let day = document.createElement('div')
                    if (i >= first_day.getDay()) {
                        day.classList.add('calendar-day-hover')
                        day.innerHTML = i - first_day.getDay() + 1
                        day.innerHTML += `<span></span>
                                          <span></span>
                                          <span></span>
                                          <span></span>`
                        if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear()) {
                            console.log(i)
                            day.classList.add('curr-date')
                        }   
                    }
                    calendar_days.appendChild(day)
                }
        }
        // 秀出每個月份
        let month_list = calendar.querySelector('.month-list')
        
        month_names.forEach((e, index) => {
            let month = document.createElement('div')
            month.innerHTML = `<div date-month="${index}">${e}</div>`
            month.querySelector('div').onclick = () => {
                month_list.classList.remove('show')
                curr_month.value = index
                generateCalendar(index, curr_year.value)
            }
            month_list.appendChild(month)
        })
        
        // 按下月份的時候會跳出各個月份
        let month_picker = calendar.querySelector('#month-picker')
        
        month_picker.onclick = () => {
            month_list.classList.add('show')
        }
        
        let currDate = new Date()
        
        let curr_month = { value: currDate.getMonth() }
        let curr_year = { value: currDate.getFullYear() }
        
        generateCalendar(curr_month.value, curr_year.value)
        
        document.querySelector('#prev-year').onclick = () => {
            --curr_year.value
            generateCalendar(curr_month.value, curr_year.value)
        }
        
        document.querySelector('#next-year').onclick = () => {
            ++curr_year.value
            generateCalendar(curr_month.value, curr_year.value)
        }
    }

}

export default ActCalendar;