// import React, { Component } from 'react'
// import { useState, useEffect } from 'react'
// import { getActivity } from '../../../../api/activity'
// import Title from '../../../commons/title/Title'
// import '../activities_components.css';

// const ActInfoArticle = ({ listData }) => {

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
//             {/* <div>
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
//                         <div>
//                             <div id="activeFirstInfo">
//                                 <div id="activeImg">
//                                     <img src="/activity/img/activities/我出去一下_城市裡的戶外生活篇-2.jpeg" alt=""/>
//                                 </div>
//                                 <Title title="我出去一下．風格品牌出店計劃《城市裡的戶外生活篇》"/>
//                                 <div id="activeLabel">
//                                     <div class="triangle-market"></div>
//                                     <div class="card-label-market">商家市集</div>
//                                 </div>
//                             </div>
//                             <div id="activeSecondInfo" className="pcHidden">
//                                 <div>
//                                     <div className="titleSG">活動名稱</div>
//                                     <p>我出去一下．風格品牌出店計劃《城市裡的戶外生活篇》</p>
//                                 </div>
//                                 <div>
//                                     <div className="titleSG">活動時間</div>
//                                     <p>
//                                         <span>
//                                             6/18 Sat.~6/19 Sun.
//                                             14:00-21:00
//                                         </span>
//                                     </p>
//                                 </div>
//                                 <div>
//                                     <div className="titleSG">活動地點</div>
//                                     <p>PARK2草悟廣場 1F & B1</p>
//                                 </div>
//                             </div>
//                             <div id="activeThirdInfo">
//                                 <div>
//                                     <div className="titleSG">活動資訊</div>
//                                     <span>
//                                         PARK2講了這麼久的城市裡的戶外生活，終於要認真的玩一場了！
//                                         <br></br>
//                                         《我出去一下．風格品牌出店計劃》這次集結包含BUTEO、AURMO TENT TAIWAN、Bell's Camping、BASE 550、樹德企業 SHUTER、逐露天下、Forest
//                                         Outdoor、BARRACK09、地主品牌ROCKLAND及ROCKLAND
//                                         P.L.U.S等10大露營品牌帶來帳篷、裝備、燈具等露營用具，當天也將在現場舉辦限時限定的啤酒瑜珈、精油按摩、露營講座、野外求生傘繩編織、波希米亞編織等5大體驗活動，限定營火晚會也將搭配特殊的手碟音樂表演限時登場！
//                                         <br></br>
//                                         邀請各式戶外生活風格品牌齊聚，一起在城市綠洲中搭營帳、燃營火、點營燈！以戶外露營為主盛大開場的市集活動不只邀請品牌店家「我出去一下」，更邀請大家當天帶上裝備，穿出你的Outdoor風，一起加入我們！
//                                         <br></br>
//                                     </span>
//                                 </div>
//                                 <div>
//                                     <div className="titleSG">活動照片</div>
//                                     <div>
//                                         <div className="activePhoto float-center">
//                                             <img src="/activity/img/activities/我出去一下_城市裡的戶外生活篇.jpeg" alt=""/>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div id="activeForthInfo" className="pcHidden">
//                                 <div>
//                                     <div className="titleSW">活動嘉賓</div>
//                                     <p>
//                                         <span>
//                                             ...
//                                         </span>
//                                     </p>
//                                 </div>
//                                 <div>
//                                     <div className="titleSW">主辦單位</div>
//                                     <p>PARK2 草悟廣場</p>
//                                 </div>
//                             </div>
//                         </div>
//                     )
//                 })}
//             </div> */}
//         </div>
//     )
// }

// export default ActInfoArticle