import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { getActivity } from '../../../../api/activity';
import Title from '../../../commons/title/Title';
import GoToTop from '../component/GoToTop';
import '../activities_layout.css';
import '../activities_layout_w992_infopage.css';
import '../activities_components.css';

export default function ActivityInfo(props) {

    const [list, setList] = useState([])
    const preDataHandle = () => {
        getActivity().then((result) => {
            setList(result)
            console.log(result)
        })
    }
    
    useEffect(() => {
        preDataHandle()
    }, [])

    return (
        <div>
            {list.map((item, index) => {
                if (item.act_id == props.match.params.activityId) {

                    let actClass
                    let triangle
                    let cardLabel

                    if (item.act_class == "1"){
                        actClass = "現場LIVE";
                        triangle = "triangle-live";
                        cardLabel = "card-label-live";
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
                        <div>
                            <aside>
                                <div id="activeSecondInfo" className="mobileHidden">
                                    <div>
                                        <div className="titleSG">活動名稱</div>
                                        <div>{item.act_title}</div>
                                    </div>
                                    <div>
                                        <div className="titleSG">活動時間</div>
                                        <div>{item.act_Sdate + "~" + item.act_Edate}</div>
                                        <div>{item.act_Stime.slice(0,5) + "~" + item.act_Etime.slice(0,5)}</div>
                                    </div>
                                    <div>
                                        <div className="titleSG">活動地點</div>
                                        <div>{item.act_location}</div>
                                    </div>
                                </div>
                                <div id="activeForthInfo" className="mobileHidden">
                                    <div>
                                        <div className="titleSW">活動嘉賓</div>
                                        <div><pre>{item.act_guests}</pre></div>
                                    </div>
                                    <div>
                                        <div className="titleSW">主辦單位</div>
                                        <div>{item.acr_org}</div>
                                    </div>
                                </div>
                            </aside>

                            <article className='activity-article'>
                                <div id="activeFirstInfo">
                                    <div id="activeImg">
                                        <img src={item.act_img} alt=""/>
                                    </div>
                                    <Title title={item.act_title}/>
                                    <div id="activeLabel">
                                        <div class={triangle}></div>
                                        <div class={cardLabel}>{actClass}</div>
                                    </div>
                                </div>
                                <div id="activeSecondInfo" className="pcHidden">
                                    <div>
                                        <div className="titleSG">活動名稱</div>
                                        <div>{item.act_title}</div>
                                    </div>
                                    <div>
                                        <div className="titleSG">活動時間</div>
                                        <div>{item.act_Sdate + "~" + item.act_Edate}</div>
                                        <div>{item.act_Stime.slice(0,5) + "~" + item.act_Etime.slice(0,5)}</div>
                                    </div>
                                    <div>
                                        <div className="titleSG">活動地點</div>
                                        <div>{item.act_location}</div>
                                    </div>
                                </div>
                                <div id="activeThirdInfo">
                                    <div>
                                        <div className="titleSG">活動介紹</div>
                                        <div><pre>{item.act_info}</pre></div>
                                    </div>
                                </div>
                                <div id="activeForthInfo" className="pcHidden">
                                    <div>
                                        <div className="titleSW">活動嘉賓</div>
                                        <div><pre>{item.act_guests}</pre></div>
                                    </div>
                                    <div>
                                        <div className="titleSW">主辦單位</div>
                                        <div>{item.acr_org}</div>
                                    </div>
                                </div>
                            </article>
                            <GoToTop />
                        </div>
                    )
                }
            })}
        </div>
    )
}