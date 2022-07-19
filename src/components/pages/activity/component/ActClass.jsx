import React, { Component } from 'react';
import '../activities_components.css';

const ActClass = ({ listData, hello }) => {
    const actClass1 = () => {
        let filterData = listData.filter((e) => e.act_class == 1)
        let classTag = document.querySelectorAll('.custom-title')[0]
        classTag.textContent = '現場LIVE'
        classTag = document.querySelectorAll('.title-shadow')[0]
        classTag.textContent = '現場LIVE'
        classTag = document.querySelectorAll('.title-bg')[0]
        classTag.textContent = '現場LIVE'
        hello(filterData)
    }
    const actClass2 = () => {
        let filterData = listData.filter((e) => e.act_class == 2)
        let classTag = document.querySelectorAll('.custom-title')[0]
        classTag.textContent = '快閃活動'
        classTag = document.querySelectorAll('.title-shadow')[0]
        classTag.textContent = '快閃活動'
        classTag = document.querySelectorAll('.title-bg')[0]
        classTag.textContent = '快閃活動'
        hello(filterData)
    }
    const actClass3 = () => {
        let filterData = listData.filter((e) => e.act_class == 3)
        let classTag = document.querySelectorAll('.custom-title')[0]
        classTag.textContent = '風格餐車'
        classTag = document.querySelectorAll('.title-shadow')[0]
        classTag.textContent = '風格餐車'
        classTag = document.querySelectorAll('.title-bg')[0]
        classTag.textContent = '風格餐車'
        hello(filterData)
    }
    const actClass4 = () => {
        let filterData = listData.filter((e) => e.act_class == 4)
        let classTag = document.querySelectorAll('.custom-title')[0]
        classTag.textContent = '商家市集'
        classTag = document.querySelectorAll('.title-shadow')[0]
        classTag.textContent = '商家市集'
        classTag = document.querySelectorAll('.title-bg')[0]
        classTag.textContent = '商家市集'
        hello(filterData)
    }
    const actClass5 = () => {
        let filterData = listData.filter((e) => e.act_class == 5)
        let classTag = document.querySelectorAll('.custom-title')[0]
        classTag.textContent = '創作者論壇'
        classTag = document.querySelectorAll('.title-shadow')[0]
        classTag.textContent = '創作者論壇'
        classTag = document.querySelectorAll('.title-bg')[0]
        classTag.textContent = '創作者論壇'
        hello(filterData)
    }

    return(
        <div>
            <div id="activeType" className="titleSW">活動類別</div>
            <div className="btnSelect">
                <button onClick={actClass1} className="type-btn btn-live">現場LIVE</button>
                <button onClick={actClass2} className="type-btn btn-popup">快閃活動</button>
                <button onClick={actClass3} className="type-btn btn-car">風格餐車</button>
                <button onClick={actClass4} className="type-btn btn-market">商家市集</button>
                <button onClick={actClass5} className="type-btn btn-forum">創作者論壇</button>
            </div>
        </div>
    )
}

export default ActClass;


// 方法一：
// class ActClass extends Component {
//     state = {}
//     render() {
//         return(
//             <div>
//                 <div id="activeType" className="titleSW">活動類別</div>
//                 <div className="btnSelect">
//                     <button className="type-btn btn-live"><a href="#">現場LIVE</a></button>
//                     <button className="type-btn btn-popup"><a href="#">快閃活動</a></button>
//                     <button className="type-btn btn-car"><a href="#">風格餐車</a></button>
//                     <button className="type-btn btn-market"><a href="#">商家市集</a></button>
//                     <button className="type-btn btn-forum"><a href="#">創作者論壇</a></button>
//                 </div>
//             </div>
//         )
//     }
// }

// export default ActClass;