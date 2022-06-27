import React, { Component } from 'react';
import './style.css'
class Marquee extends Component {
  state = { 
    marquee: '// PARK2，一座大人系非典型公園，探索公園與城市生活的更多可能！'
  } 
  render() { 
    return (
      <div className="marquee-block">
        <div className="marquee">
          <p>{this.state.marquee}</p>
        </div>
      </div>
    );
  }
  componentDidMount = () => {
    const that = this
    let marqueeText = document.querySelector('.marquee p');

    let text = that.state.marquee

    function getMarqueeWidth () {;
      return document.querySelector('.marquee').offsetWidth;
    }
    let marqueeWidth = getMarqueeWidth();

    function marquee () {
      let marqueeTextWidth = document.querySelector('.marquee p').offsetWidth;
      // console.log(marqueeWidth,  marqueeTextWidth, getMarqueeWidth())
      marqueeWidth -= 1;
      marqueeText.style.left = marqueeWidth + 'px';
      
      if (marqueeWidth + marqueeTextWidth === getMarqueeWidth()) {
        addElement();
      }
    }

    document.body.onload = addElement;
    

    function addElement() {
      text += that.state.marquee
      that.setState({
        marquee: text
      })
      // let container = document.querySelector(".marquee p");
      // container.innerText = marqueeContent;
    }

    setInterval(marquee, 20);
  }
}
 
export default Marquee;