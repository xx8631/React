//弹框组件
import React, { Component } from 'react'
import { createPortal } from 'react-dom';

export default class Dialog extends Component {
  constructor(props) {
    super(props);
    const doc = window.document;
    this.node = doc.createElement("div");
    doc.body.appendChild(this.node);
  }
  componentWillUnmount() {
    window.document.body.removeChild(this.node);
  }
  render() {
    //createPortal的用法 第一个参数需要挂载的组件实例，第二个参数需要挂载到的DOM节点
    return createPortal(
      <div className="dialog">
        <h3>Dialog</h3>
      </div>, this.node
    )
  }
}
