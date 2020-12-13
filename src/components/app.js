import React, { Component } from 'react';
import Cookie from "./cookie";

import chocolateChip from "../../static/assets/images/chocolateChip.png";
import raisin from "../../static/assets/images/raisin.jpg";
import snickerdoodle from "../../static/assets/images/snickerdoodle.png";


const rawPaths = [
  chocolateChip,
  raisin,
  snickerdoodle
]

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cookieType: rawPaths[0],
      bgColor: "red"
    }
  }

  changeCookie = param => {
    this.setState({cookieType: rawPaths[param]})
  }

  changeColor = () => {
    this.setState({bgColor: "blue"})
  }

  render() {
    return (
      <div className='app'>
        <h1>Makenna's Silly React Cookies</h1>
        <h2>in non-edible-digital format</h2>
        <div className="buttons">
          <button onClick={() => this.changeCookie(0)}>Turn me Chocolate</button>
          <button onClick={() => this.changeCookie(1)}>Turn me Raisin</button>
          <button onClick={() => this.changeCookie(2)}>Turn me Snickerdoodle</button>
        </div>
        <Cookie path={this.state.cookieType} />
        <div className={this.state.bgColor}></div>
        <button onClick={this.changeColor}></button>
      </div>
    );
  }
}
