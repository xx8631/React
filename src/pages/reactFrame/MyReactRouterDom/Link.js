import React, { Component } from 'react';
import { RouterContext } from './Context';

export default class Link extends Component {
  //阻止闪烁
  static contextType = RouterContext;//组件跨层级通信
  handleClick = e => {
    e.preventDefault();//禁止默认事件
    //命令式
    this.context.history.push(this.props.to);
  }
  render() {
    const { to, children, ...restProps } = this.props;
    return (
      <a href={to} {...restProps} onClick={this.handleClick}>
        {children}
      </a>
    )
  }
}
