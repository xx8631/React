import React, { Component } from 'react'
import matchPath from './matchPath';
import { RouterContext } from './Context';
//Switch 找到第一个匹配的路由做返回
export default class Switch extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {context => {
          const { location } = context;
          let match;//找到匹配的元素，match设置为true；
          let element;//匹配的元素

          const { children } = this.props;
          //todo 查找
          React.Children.forEach(children, child => {
            //match为空且child是标准Element
            if (match == null && React.isValidElement(child)) {
              element = child;
              const { path } = child.props;
              match = path ? matchPath(location.pathname, child.props) : context.match;
            }
          })
          //克隆  props可覆盖
          return match ? React.cloneElement(element, {computedMatch:match}) : null
        }}
      </RouterContext.Consumer>)

  }
}
