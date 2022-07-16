import React, { Component } from 'react';
import '../activities_components.css';

const ActClass = ({ listData, hello }) => {
    const actClass1 = () => {
        let filterData = listData.filter((e) => e.act_class == 1)
        hello(filterData)
    }
    const actClass2 = () => {
        let filterData = listData.filter((e) => e.act_class == 2)
        hello(filterData)
    }
    const actClass3 = () => {
        let filterData = listData.filter((e) => e.act_class == 3)
        hello(filterData)
    }
    const actClass4 = () => {
        let filterData = listData.filter((e) => e.act_class == 4)
        hello(filterData)
    }
    const actClass5 = () => {
        let filterData = listData.filter((e) => e.act_class == 5)
        hello(filterData)
    }

    return(
        <div>
            <div id="activeType" className="titleSW">活動類別</div>
            <div className="btnSelect">
                <button onClick={actClass1} className="type-btn btn-live"><a href="#">現場LIVE</a></button>
                <button onClick={actClass2} className="type-btn btn-popup"><a href="#">快閃活動</a></button>
                <button onClick={actClass3} className="type-btn btn-car"><a href="#">風格餐車</a></button>
                <button onClick={actClass4} className="type-btn btn-market"><a href="#">商家市集</a></button>
                <button onClick={actClass5} className="type-btn btn-forum"><a href="#">創作者論壇</a></button>
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