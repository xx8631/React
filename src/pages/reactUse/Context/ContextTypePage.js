import React, { Component } from 'react'
import {ThemeContext} from "./../../../Context";

export default class ContextTypePage extends Component {
  //contextType只能订阅单个  后面的定义会覆盖前面的定义
  static contextType=ThemeContext;

  render() {
    const {themeColor}=this.context;
    return (
      <div className="border">
         <h3 className={themeColor}>ContextTypePage</h3>
      </div>
    )
  }
}
