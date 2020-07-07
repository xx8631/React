/*高阶组件Hoc  传入一个组件，返回一个新的组件*/
import React, { Component } from 'react'

//定义一个函数，传入一个组件， 返回一个新的组件  function(Cmp){return fucnction(props){retrun()}}
const foo=Cmp=>props=>{
  return(
    <div className="red">
      <Cmp {...props}/> 
    </div>
  )
}
const foo2=Cmp=>props=>{
  return(
    <div className="blue">
      <Cmp {...props}/>
    </div>
  )
}

function Child(props){
return <div>Child {props.name}</div>
}

const Foo=foo(Child);//Hoc基本用法
const Foo1=foo2(foo(Child))//Hoc链式调用
export default class HocPage extends Component {
  render() {
    return (
      <div>
        <h3>HocPage</h3>
        {/* <Foo name="msg"/> */}
        <Foo1 name="msg1"/>
      </div>
    )
  }
}

