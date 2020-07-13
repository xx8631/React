import React, { Component } from 'react'
import { RouterContext } from './Context';
import matchPath from "./matchPath";

export default class Route extends Component {
  render() {

    //Class组件接收参数用Consumer；
    return (<RouterContext.Consumer>{context => {
      const { location } = context;
      const { path, children, component, render, computedMatch } = this.props
      //当前路径匹配path后再渲染
      const match = computedMatch ? computedMatch : path ? matchPath(location.pathname, this.props) : context.match;
      const props = { ...context, location, match }
      //match  children，component，render |null
      //不match  children  function |null
      return (
        //传递
        <RouterContext.Provider value={props}>
          {match
            ? children
              ? typeof children === 'funciton'
                ? children(props)
                : children
              : component
                ? React.createElement(component, props)
                : render
                  ? render(props)
                  : null
            : typeof children === "function"
              ? children(props)
              : null
          }
        </RouterContext.Provider>
      );
    }}
    </RouterContext.Consumer>)
  }
}
