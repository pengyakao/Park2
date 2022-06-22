import React, { Component } from 'react';
import './style.css'
class Title extends Component {
  state = {}
  render() { 
    return (
      <div className="title-block">
        <div className="title-shadow">
          {this.props.title}
        </div>
        <div className="title-bg">
          {this.props.title}
        </div>
        <div className="custom-title">
          {this.props.title}
        </div>
      </div>
    );
  }
}
 
export default Title;