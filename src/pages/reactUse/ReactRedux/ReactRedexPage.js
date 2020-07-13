import React, { Component } from 'react'
import { connect } from '../../reactFrame/MyReactRedux'
import { bindActionCreators } from '../../reactFrame/MyRedux'
//装饰器的写法 @connect();
//把state放到props
//把dispatch放到props
class ReactReduxPage extends Component {
  render() {
    console.log("props", this.props)
    const { count, dispatch,add,minus } = this.props
    return (
      <div>
        <h3>ReactReduxPage</h3>
        <p>{count}</p>
        <button onClick={() => dispatch({type: "ADD", payload: 100})}>
          dispatch add
        </button>
        <button onClick={add}>
          add
        </button>
        <button onClick={minus}>
        minus
        </button>
      </div>
    )
  }
}
//未配置装饰器的写法 
//react-redux connect Api  可以获取 Provider提供的数据
export default connect(
  
  //mapStateToProps 把state放到props上一份  第二个参数ownProps
  state=>{return {count:state.count};},
  //mapDispatchToProps 把dispatch放到props上一份 ，不加这个参数默认会带dspatch函数
  dispatch=>{
    // const add=()=>dispatch({type:"ADD"});
    // const minus=()=>dispatch({type:"MINUS"});

    //简单方法：
    let creators={
      add:()=>({type:"ADD"}),
      minus:()=>({type:"MINUS"})
    }
    creators=bindActionCreators(creators,dispatch);
    return {dispatch,...creators};
    // return {dispatch,add,minus};
  }
  // (stateProps,dispatchProps,ownProps)=>{
  //   return {stateProps,dispatchProps,ownProps,omg:"omg"}
  // }
)(ReactReduxPage)
