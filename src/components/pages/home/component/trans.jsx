import React, { Component } from 'react';
import Title from '../../../commons/title/Title'
import $ from 'jquery';
import Marquee from '../../../commons/marquee/Marquee';

class trans extends Component {
    state = {}
    render() {
        return (
            <div className='transWrapper'>
                <div id="home_transArea">
                    <Title title="交通資訊" />
                    {/* <div className="home_titleBlock">
                        <div className="home_titleBg">
                            交通資訊
                        </div>
                        <div className="home_customTitle" id="home_title5">
                            交通資訊
                        </div>
                    </div> */}
                    <Marquee />
                    <div id="home_trans">
                        <div id="home_transMap">
                            <div id="home_transMapT">
                            </div>
                            <div id="home_transMap1">
                                <div id="home_transMap2">
                                    <div id="home_transGoogle"><iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.635525279142!2d120.66095182695311!3d24.149434799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693daba4011f25%3A0x24706fd7ca2587ec!2zUEFSSzLojYnmgp_lu6PloLQ!5e0!3m2!1szh-TW!2stw!4v1654939108974!5m2!1szh-TW!2stw"
                                        style={{ width: '100%', height: '100%', border: '0' }} allowFullScreen="" loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"></iframe></div>
                                    <div id="home_transMapArrow">
                                        <img src={process.env.PUBLIC_URL + "/icon/arrow.gif"} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div id="home_transMapR">
                            </div>
                        </div>
                        <div id="home_transInfo">
                            <div id="home_transInfoPub">
                                <div className="home_transTitle">
                                    <p>大眾運輸</p>
                                </div>
                                <div className="flip8"><span className="1">高鐵烏日站</span><img src={process.env.PUBLIC_URL + "/icon/arrow_G.gif"} /></div>
                                <div className="panel8">
                                    <p className="home_transCont">1.捷運市政府站➔轉公車300/304/307/310至中正國小➔步行約7分鐘<br />
                                        2.公車151至新光遠百➔轉BRT 300/304/307/310至中正國小➔步行約7分鐘</p>
                                </div>
                                <div className="flip9"><span className="1">台中火車站</span><img src={process.env.PUBLIC_URL + "/icon/arrow_G.gif"} /></div>
                                <div className="panel9">
                                    <p className="home_transCont">轉公車27至英才向上北路口➔步行約1分鐘</p>
                                </div>
                            </div>
                            <div id="home_transInfoCar">
                                <div className="home_transTitle">
                                    <p>自行開車</p>
                                </div>
                                <div className="flip10"><span className="1">停車資訊</span><img src={process.env.PUBLIC_URL + "/icon/arrow_G.gif"} /></div>
                                <div className="panel10">
                                    <p className="home_transCont">至草悟廣場(台中市西區英才路534號)<br />
                                        可停至草悟廣場附設24小時地下停車場</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }

    componentDidMount() {
        console.log('transdid')

        //向下展開
        $(function () {
            $(".flip8").click(function () {
                $(".panel8").slideToggle("slow");

            });
        });
        $(function () {
            $(".flip9").click(function () {
                $(".panel9").slideToggle("slow");

            });
        });
        $(function () {
            $(".flip10").click(function () {
                $(".panel10").slideToggle("slow");

            });
        });


    }


}

export default trans;