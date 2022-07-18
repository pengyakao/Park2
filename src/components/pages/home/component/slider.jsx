import React, { Component } from 'react';
import { gsap } from "gsap";
import './slider.css';
import { getCarousel } from '../../../../api/home/getCarousel'
import { getActivities } from '../../../../api/home/getActivities'


class Slider extends Component {
  state = {
    slides: [
    //   {
    //     img: '/home/slides/bg-1.jpeg',
    //     text: '我出去一下',
    //     date: '2022.06.18 Sat ~ 06.19 Sun',
    //     time: '14:00-21:00',
    //     href: 'link1'
    //   },
    //   {
    //     img: '/home/slides/bg-2.jpeg',
    //     text: '植日森',
    //     date: '每月第二個星期四',
    //     time: '',
    //     href: 'link2'
    //   },
    //   {
    //     img: '/home/slides/bg-3.jpeg',
    //     text: '台中！好像哪裡怪怪的！',
    //     date: '2022.05.06 Fri',
    //     time: '19:00-21:30',
    //     href: 'link3'
    //   }
    ]
  }
  render() {
    return (
      <div>
        <div id="home_sliderArea">
          <div className="banner-component">
            <div className="slider-outer">
              <div className="slider-container">
                <div className="slider-item">
                  <div className="box">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="info-card">
              <div className="bg">
                <img src={process.env.PUBLIC_URL + "/home/info-card.svg"} alt="" />
              </div>
              <div className="info">
                <div className="name"></div>
                <div className="date"></div>
                <div className="time"></div>
              </div>
            </div>
            <div className="slider-index">
            </div>
            <div className="space"></div>
          </div>
        </div>
        <div className="home_buttom">
          <img className="home_buttom" src={process.env.PUBLIC_URL + "/home/slider_bottom.svg"} />
        </div>
      </div>
    );
  }
  componentDidMount = () => {

    let start = async () => {
      //get home_act
      await getCarousel().then((result) => {
        console.log(result)
        result = result.reverse()
        let home_act = result.filter(checkSta)
        function checkSta(item) {
          console.log(item)
          return item.home_act_sta == 1;
        }
        //get activity
        getActivities().then((result) => {
          console.log(result)
          let activity = result;
          console.log(home_act);
          console.log(activity);
          let margeData = home_act;
          home_act.forEach((item, index) => {
            console.log(item)
            const data = activity.filter(e => e.act_id == item.act_id)
            // console.log(activity.filter(e => e.act_id == item.act_id))
            margeData[index].img = data[0].act_img
            margeData[index].text = item.home_act_title
            margeData[index].date = `${data[0].act_Sdate} ~ ${data[0].act_Edate}`
            margeData[index].time = `${data[0].act_Stime.slice(0,5)} ~ ${data[0].act_Etime.slice(0,5)}`
            margeData[index].href = `/activity/${data[0].act_id}`
          })
          console.log(margeData)
          this.setState({
            slides: margeData
          }, ()=>{
            console.log(this.state.slides)
          })
          
        })
      })
    }
    start()

    


  }
  componentDidUpdate =(slides) => {
    const that = this
    let htmlString = ''
    if(slides!= this.state.slides){
    for (let i = 0; i < this.state.slides.length; i++) {
      htmlString += `<a href="${this.state.slides[i].href}"><div class="slider-item" id="${i}"><div class="box"><img src="${this.state.slides[i].img}"></div></div></a>`
    }
    document.querySelector('.slider-container').innerHTML = htmlString
    document.querySelector('.info .name').innerHTML = `<p>${that.state.slides[0].text}</p>`
    document.querySelector('.info .date').innerHTML = `<p>${that.state.slides[0].date}</p>`
    document.querySelector('.info .time').innerHTML = `<p>${that.state.slides[0].time}</p>`

    let indexString = ''
    for (let i = 0; i < this.state.slides.length; i++) {
      indexString += `<div class="index" id="carousel${i}"></div>`
    }
    document.querySelector('.slider-index').innerHTML = indexString

    let count = 0
    let isMouseDown = false
    let mouseStart = 0
    let mouseEnd = 0
    let num = this.state.slides.length
    let displacement = document.querySelector('.slider-item').offsetWidth
    let target = document.querySelector('.slider-outer')
    let indexArr = document.querySelectorAll(".index")
    let carouselLinks = document.querySelectorAll('.slider-item')

    window.onresize = () => {
      displacement = document.querySelector('.slider-item').offsetWidth
      count = 0
      changeIndexActive(indexArr[0], 0);
      gsap.to(".slider-container", {
        duration: 1,
        x: -displacement * count,
        onComplete: function () {
          console.log(that.state.slides)
          document.querySelector('.info .name').innerHTML = `<p>${that.state.slides[count].text}</p>`
          document.querySelector('.info .date').innerHTML = `<p>${that.state.slides[count].date}</p>`
          document.querySelector('.info .time').innerHTML = `<p>${that.state.slides[count].time}</p>`
        }
      });
    }

    function changeIndexActive(target, index) {
      indexArr.forEach(j => {
        j.classList.remove('carousel-active')
      })
      count = index;
      target.classList.add('carousel-active')
    }

    indexArr.forEach((e, i) => {
      if (i === 0) {
        changeIndexActive(e, i);
      }
      e.addEventListener('click', () => {
        changeIndexActive(e, i);
        gsap.to(".slider-container", {
          duration: 1,
          x: -displacement * count,
          onComplete: function () {
            console.log(that.state.slides)
            document.querySelector('.info .name').innerHTML = `<p>${that.state.slides[count].text}</p>`
            document.querySelector('.info .date').innerHTML = `<p>${that.state.slides[count].date}</p>`
            document.querySelector('.info .time').innerHTML = `<p>${that.state.slides[count].time}</p>`
          }
        });
      })
    })

    function getMousePos(event) {
      let e = event || window.event;
      return e.clientX
    }

    let moveDistance = null
    // 取得滑鼠點下位置
    if (this.state.slides.length > 1) {
      target.addEventListener('mousedown', event => {
        moveDistance = 0
        isMouseDown = true
        mouseStart = getMousePos()
      })
    }

    // 取得滑鼠放開位置
    document.addEventListener('mouseup', event => {
      if (isMouseDown) {
        mouseEnd = getMousePos();
        if ((mouseEnd - mouseStart) < 0) {
          if (count < num - 1) {
            count += 1;
            changeIndexActive(indexArr[count], count);
            gsap.to(".slider-container", {
              duration: 1,
              x: -displacement * count,
              onComplete: function () {
                document.querySelector('.info .name').innerHTML = `<p>${that.state.slides[count].text}</p>`
                document.querySelector('.info .date').innerHTML = `<p>${that.state.slides[count].date}</p>`
                document.querySelector('.info .time').innerHTML = `<p>${that.state.slides[count].time}</p>`
              }
            });
          }
        }
        else if ((mouseEnd - mouseStart) > 0) {
          if (count > 0) {
            count -= 1;
            changeIndexActive(indexArr[count], count);
            gsap.to(".slider-container", {
              duration: 1,
              x: -displacement * count,
              onComplete: function () {
                document.querySelector('.info .name').innerHTML = `<p>${that.state.slides[count].text}</p>`
                document.querySelector('.info .date').innerHTML = `<p>${that.state.slides[count].date}</p>`
                document.querySelector('.info .time').innerHTML = `<p>${that.state.slides[count].time}</p>`
              }
            });
          }
        }
      }
    })

    // 點擊連結
    carouselLinks.forEach((e, i) => {
      e.addEventListener('click', j => {
        if (mouseEnd - mouseStart === 0) {
          window.location.href(this.state.slides[i].href);
          // or
          // window.open(data[i].href);
        }
      })
    })

    // 取得滑鼠拖曳距離
    document.addEventListener('mousemove', e => {
      if (isMouseDown) {
        moveDistance = e.x - mouseStart
        if (count === 0 && moveDistance < 0) {
          gsap.to(".slider-container", { duration: 1, x: moveDistance });
        } else if (count > 0 && count < num - 1 && moveDistance < 0) {
          gsap.to(".slider-container", { duration: 1, x: -displacement * count + moveDistance });
        } else if (count > 0 && count < num && moveDistance > 0) {
          gsap.to(".slider-container", { duration: 1, x: -displacement * count + moveDistance });
        }
      }
    })

    document.addEventListener('mouseup', event => {
      isMouseDown = false
    })

  }
}

}

export default Slider;