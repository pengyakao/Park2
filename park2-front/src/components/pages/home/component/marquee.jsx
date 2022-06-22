import React, { Component } from 'react';


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

    function getMarqueeWidth () {;
      return document.querySelector('.marquee').offsetWidth;
    }
    let marqueeWidth = getMarqueeWidth();

    function marquee () {
      marqueeWidth -= 1;
      marqueeText.style.left = marqueeWidth + 'px';
      let marqueeTextWidth = document.querySelector('.marquee p').offsetWidth;
      if (marqueeWidth + marqueeTextWidth === getMarqueeWidth()) {
        addElement();
      }
    }

    document.body.onload = addElement;
    let marqueeContent = '';

    function addElement() {
      marqueeContent += that.state.marquee
      let container = document.querySelector(".marquee p");
      container.innerText = marqueeContent;
    }

    setInterval(marquee, 20);
  }
}
 
export default Marquee;