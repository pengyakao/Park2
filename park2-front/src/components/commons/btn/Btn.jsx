import React, { Component } from 'react';
import './style.css'
class Btn extends Component {
  state = { 
    shouldCheck: this.props.shouldCheck
  } 
  render() { 
    return (
      <div className="custom-btn remove-popup re-upload">
        <div className="bg"></div>
        <div className="front-btn"  onClick={this.routerHandler}>{this.props.name}</div>
      </div>
    );
  }
  routerHandler = () => {
    if(!this.state.shouldCheck && this.props.link){
      window.location.href = this.props.link
    }else if(this.state.shouldCheck && !this.props.isFull && this.props.link){
      window.location.href = this.props.link
    }else if(this.props.isFull || this.props.shouldCheck){
      this.props.onHandle()
    }else if(!this.state.shouldCheck){
      this.props.onHandle()
    }
  }
}
 
export default Btn;