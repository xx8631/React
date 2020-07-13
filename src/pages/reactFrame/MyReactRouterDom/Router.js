import React, { Component } from 'react'
import { RouterContext } from "./Context"
//利用context 提供history；供所有子组件用
export default class Router extends Component {
  //实现404  没有匹配就用默认path
  static computeRootMatch(pathname) {
    return { path: "/", url: "/", params: {}, isExact: pathname === "/" };
  }
  constructor(props) {
    super(props);
    this.state = {
      location: props.history.location
    }
    //对location添加监听
    props.history.listen(location => {
      console.log("location", location);
      this.setState({ location });
    })
  }
  render() {
    const { history, children } = this.props
    return <RouterContext.Provider value={{ history, location: this.state.location, match: Router.computeRootMatch(this.state.location.pathname) }}>
      {children}
    </RouterContext.Provider>;
  }
}
