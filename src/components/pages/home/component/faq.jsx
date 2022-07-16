import React, { Component } from 'react';
import $ from 'jquery';
import Title from '../../../commons/title/Title'
import { getFaq } from '../../../../api/home/getFaq'



class FAQ extends Component {
    state = {}
    render() {
        return (
            <div className='FAQWrapper'>
                <div id="home_FAQArea">
                    <Title title="FAQ" isDark="true"></Title>
                    {/* <div className="home_titleBlock2">
                        <div className="home_titleBg2">
                            FAQ
                        </div>
                        <div className="home_customTitle2" id="home_title3">
                            FAQ
                        </div>
                    </div> */}
                    <div id="home_FAQ">
                        <div id="home_FAQContent">
                            {/* <div className="flip4"><span>Q1</span><img src={process.env.PUBLIC_URL + "/icon/arrow_G.gif"} /></div>
                            <div className="panel4">
                                <p>A1</p>
                            </div>
                            <div className="flip5"><span>Q2</span><img src={process.env.PUBLIC_URL + "/icon/arrow_G.gif"} /></div>
                            <div className="panel5">
                                <p>A2</p>
                            </div>
                            <div className="flip6"><span>Q3</span><img src={process.env.PUBLIC_URL + "/icon/arrow_G.gif"} /></div>
                            <div className="panel6">
                                <p>A3</p>
                            </div>
                            <div className="flip7"><span>Q4</span><img src={process.env.PUBLIC_URL + "/icon/arrow_G.gif"} /></div>
                            <div className="panel7">
                                <p>A4</p>
                            </div> */}
                        </div>
                        <img src={process.env.PUBLIC_URL + "/home/cactus_R3.svg"} id="home_FAQ_R" alt="" />
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        console.log('FAQdid');
        var FAQdata = []
        getData();

        async function getData() {
            let faqList = await getFaq().then((result) => {
                // FAQdata = result
                FAQdata = result.filter(e => e.home_FAQ_sta == 1)
                console.log(FAQdata)
                let html = ''
                let container = document.querySelector('#home_FAQContent')
                for (let i = 0; i < FAQdata.length; i++) {
                    html += ` <div class="flipFAQ">
                                <span>Q${i + 1}.${FAQdata[i].home_FAQ_qu}</span>
                                <img src="/icon/arrow_G.gif"/>
                            </div>
                            <div class="panelFAQ${i}">
                                <p>A${i + 1}.${FAQdata[i].home_FAQ_ans}</p>
                            </div>`
                }
                container.innerHTML = html;

            })

            // 向下展開
            // console.log(document.querySelectorAll('.flipF'))
            document.querySelectorAll('.flipFAQ').forEach((e, i)=>{
                e.addEventListener('click', ()=>{
                    console.log('click')
                    $(`.panelFAQ${i}`).slideToggle("slow");
                })
            })
        }

        // $(function () {
        //     $(`.flip4`).click(function () {
        //         $(".panel4").slideToggle("slow");
        //                 });
        // });
        // $(function () {
        //     $(".flip5").click(function () {
        //         $(".panel5").slideToggle("slow");

        //     });
        // });
        // $(function () {
        //     $(".flip6").click(function () {
        //         $(".panel6").slideToggle("slow");

        //     });
        // });
        // $(function () {
        //     $(".flip7").click(function () {
        //         $(".panel7").slideToggle("slow");

        //     });
        // });

    }


}

export default FAQ;
