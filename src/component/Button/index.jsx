import React, { Component } from "react";
import "./style.less";
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(111);
    return (
      <div className="z-button">
        <button>132546</button>
      </div>
    );
  }
}

export default Button;
