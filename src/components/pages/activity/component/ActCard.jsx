import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { getActivity } from '../../../../api/activity';
import Title from '../../../commons/title/Title';
import '../activities_components.css';

const ActCard = ({ list, clicked }) => {
    
    const [data, setList] = useState([])
    const preDataHandle = () => {
        // getActivity().then((result) => {
        //     setList(result)
        //     console.log(result)
        // })
    }
    useEffect(() => {
        preDataHandle()
    }, [list])

    // console.log('listData', listData)
    return (
        <div>
            <Title title="近期活動" />
            <div>
                {list.map((item, index) => {

                    let actClass
                    let triangle
                    let cardLabel

                    if (item.act_class == "1"){
                        actClass = "現場LIVE";
                        triangle = "triangle-live";
                        cardLabel = "card-label-live";
                        // document.querySelector(".triangle").classList.add("triangle-live");
                        // document.querySelector(".card-label").setAttribute("card","card-label-live");
                    } else if (item.act_class == "2"){
                        actClass = "快閃活動";
                        triangle = "triangle-popup";
                        cardLabel = "card-label-popup";
                    } else if (item.act_class == "3"){
                        actClass = "風格餐車";
                        triangle = "triangle-car";
                        cardLabel = "card-label-car";
                    } else if (item.act_class == "4"){
                        actClass = "商家市集";
                        triangle = "triangle-market";
                        cardLabel = "card-label-market";
                    } else if (item.act_class == "5"){
                        actClass = "創作者論壇";
                        triangle = "triangle-forum";
                        cardLabel = "card-label-forum";
                    }

                    return (
                        <div className="active-card">
                            <div className="act-card">
                                <a href={`/activity/${item.act_id}`} target="_blank">
                                    <img src={item.act_img} className="card-img-top"/>
                                    <div className="card-info">
                                        <div className="card-title">{item.act_title}</div>
                                        <div className="card-text">{item.act_Sdate + "~" + item.act_Edate}</div>
                                        {/* <div className="card-text">{item.act_Sdate.slice(0,10) + "~" + item.act_Edate.slice(0,10)}</div> */}
                                        <div className={triangle}></div>
                                        <div className={cardLabel}>{actClass}</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ActCard;


// const ActCard = ({ listData }) => {

//     const [list, setList] = useState([])
//     const preDataHandle = () => {
//         getActivity().then((result) => {
//             setList(result)
//             console.log(result)
//         })
//     }
//     useEffect(() => {
//         preDataHandle()
//     }, [])

//     console.log('listData', listData)
//     return (
//         <div>
//             <Title title="近期活動" />
//             <div>
//                 {list.map((item, index) => {

//                     let actClass
//                     let triangle
//                     let cardLabel

//                     if (item.act_class == "1"){
//                         actClass = "現場LIVE";
//                         triangle = "triangle-live";
//                         cardLabel = "card-label-live";
//                         // document.querySelector(".triangle").classList.add("triangle-live");
//                         // document.querySelector(".card-label").setAttribute("card","card-label-live");
//                     } else if (item.act_class == "2"){
//                         actClass = "快閃活動";
//                         triangle = "triangle-popup";
//                         cardLabel = "card-label-popup";
//                     } else if (item.act_class == "3"){
//                         actClass = "風格餐車";
//                         triangle = "triangle-car";
//                         cardLabel = "card-label-car";
//                     } else if (item.act_class == "4"){
//                         actClass = "商家市集";
//                         triangle = "triangle-market";
//                         cardLabel = "card-label-market";
//                     } else if (item.act_class == "5"){
//                         actClass = "創作者論壇";
//                         triangle = "triangle-forum";
//                         cardLabel = "card-label-forum";
//                     }

//                     return (
//                         <div className="active-card">
//                             <div className="act-card">
//                                 <a href={`/activity/${item.act_id}`} target="_blank">
//                                     <img src={item.act_img} className="card-img-top"/>
//                                     <div className="card-info">
//                                         <div className="card-title">{item.act_title}</div>
//                                         <div className="card-text">{item.act_Sdate + "~" + item.act_Edate}</div>
//                                         {/* <div className="card-text">{item.act_Sdate.slice(0,10) + "~" + item.act_Edate.slice(0,10)}</div> */}
//                                         <div className={triangle}></div>
//                                         <div className={cardLabel}>{actClass}</div>
//                                     </div>
//                                 </a>
//                             </div>
//                         </div>
//                     )
//                 })}
//             </div>
//         </div>
//     )
// }

// export default ActCard;