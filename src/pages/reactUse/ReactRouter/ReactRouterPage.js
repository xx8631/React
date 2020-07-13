import React, { Component } from 'react'
// import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"
import { BrowserRouter as Router, Link, Route, Switch, useLocation, useParams, useHistory, useRouteMatch,withRouter } from "./../../reactFrame/MyReactRouterDom"
import HomePage from "./HomePage";
import UserPage from "./UserPage";
import LoginPage from "./LoginPage";
import _404Page from "./_404Page";
// import { withRouter } from 'react-router-dom';
// import ProductPage from "./ProductPage";
// import { } from 'react-router-dom';

export default class ReactRouterPage extends Component {
  render() {
    return (
      <div>
        {/*最外层必须包一层Router*/}
        <Router>
          {/*Link 路由的地址*/}
          <div className="nav">
            <Link to="/">首页</Link>
            <Link to="/user">用户中心</Link>
            <Link to="/login">登录</Link>
            <Link to="/product/123">商品</Link>
          </div>
          {/*
               Route路由匹配切换到相应的组件；
               exact属性 路由添加，实现精确匹配  
               Switch 独占路由，从上往下匹配，匹配到后面的将不在匹配
               Route渲染优先级：children>component>render;   
               Children 不管是否匹配都会渲染；没有switch的情况下总会被渲染
               props包括 history，lacation，match 三个方法
               动态路由：path后加/:id
            */}
          <Switch>
            <Route exact path="/"
              component={HomePage}
            >
              {/*
                children={children}
                 component={HomePage}
              render={render} */}
            </Route>
            <Route path="/user" component={UserPage}></Route>
            <Route path="/login" component={LoginPage}></Route>
            {/* <Route path="/product/:id" component={ProductPage}></Route> */}
            <Route path="/product/:id" render={()=><Product/>}></Route>
            <Route component={_404Page}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state={confirm:true};
  }
  render() {
    const {id}=this.props.match.params;
    return (<div>Product:{id}</div>)
  }
}
Product=withRouter(Product);

// function Product(props) {
//   const match = useRouteMatch();
//   const history = useHistory();
//   const location = useLocation();
//   const _params = useParams();
//   const { params, url } = match;
//   const { id } = params;
//   return (
//     <div>
//       Product:{id}
//       <Link to={url + "/detail"}>详情</Link>
//       <Route path={url + "/detail"} component={(props) => { return <div>Detail</div>; }} />
//     </div>
//   )
// }
function children(props) {
  console.log("children props", props)
  return <div>children</div>
}
function render(props) {
  console.log("render props", props)
  return <div>render</div>
}
