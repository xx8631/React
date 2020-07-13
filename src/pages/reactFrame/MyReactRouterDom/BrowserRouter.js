import React, { Component } from "react";
import { createBrowserHistory } from "history";//路由兼容性等问题封装处理
import Router from "./Router";

export default class BrowserRouter extends Component {
  constructor(props) {
    super(props);
    this.history = createBrowserHistory();
  }
  render() {
    return <Router children={this.props.children} history={this.history}></Router>
  }
}