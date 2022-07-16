import React, { Component } from 'react';
import './style.css'
import { getMarquee } from '../../../api/home/getMarquee'


class Marquee extends Component {
  state = {
    marquee: ''
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
    let start = async () => {
      const that = this
      console.log("Marqueedid")
      let text = ''
      await getMarquee().then((result) => {
        console.log(result)
        text = result[0].marquee_info
        this.setState({
          marquee: text
        })
        console.log(result)
      })

      let marqueeText = document.querySelector('.marquee p');
  

  
      function getMarqueeWidth() {
        return document.querySelector('.marquee').offsetWidth;
      }
      let marqueeWidth = getMarqueeWidth();
  
      function marquee() {
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
        console.log("====================================================")

        
        text += text
        that.setState({
          marquee: text
        })
      }
  
      setInterval(marquee, 20);
    }
    start()
  }
}

export default Marquee;