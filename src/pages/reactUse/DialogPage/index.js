//弹框组件，在A处申明，却在B处展示；
//React中可以利用Protal 传送门实现内容传送功能；
import React, { Component } from 'react'
import Dialog from "./../../../components/Dialog"

export default class index extends Component {
  constructor(props){
    super(props);
    this.state={
      showDialog:false
    }
  }
  toggle=()=>{
    this.setState({showDialog:!this.state.showDialog});
  }
  render() {
    return (
      <div className="dialogPage"> 
         <h3>DialogPage</h3>
         <button onClick={this.toggle}>click</button>
         {this.state.showDialog&&<Dialog/>}
      </div>
    )
  }
}
