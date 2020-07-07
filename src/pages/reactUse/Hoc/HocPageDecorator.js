/*高阶组件Hoc  装饰器写法*/
/*高阶组件Hoc  本身是对装饰器模式的应用，可以利用ES7中出现的装饰器语法来更优雅的书写代码*/
/*1.yarn add @babel/plugin-proposal-decorators
  2.更新config-overrides.js
    //配置完后需要重启
    const {addDecoratorsLegacy}=require("customize-cra");

    module.exports=override(
      ...,
      addDecoratorsLegacy()//配置装饰器
    )
*/
import React, { Component } from 'react'

const foo=Cmp=>props=>{
  return(
    <div className="border">
      <Cmp {...props}/> 
    </div>
  )
}
const foo2=Cmp=>props=>{
  return(
    <div className="greenBorder">
      <Cmp {...props}/>
    </div>
  )
}
// !装饰器只能⽤在class上
// 执⾏顺序从下往上
@foo2
@foo
@foo
class Child extends Component {
 render() {
 return <div> Child {this.props.name}</div>;
 }
}
export default class HocPage extends Component {
 render() {
 return (
 <div>
 <h3>HocPage</h3>
 <Child />
 </div>
 );
 }
}
