//Redux:js状态容器，store状态仓库，dispatch(action)修改数据，reducers修改规则
import React, { Component } from 'react'
import store from "../../../store"
export default class ReduxPage extends Component {
  componentDidMount() {
    //订阅，当store中的state发生变化，执行订阅函数
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();//执行更新  此处处理有点粗糙，全部更新了
    })
  }
  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();//订阅的回调来取消订阅
    }
  }
  add = () => {
    store.dispatch({ type: "ADD" });//通过dispatch 修改数据
    console.log(store.getState());
  }
  asyncAdd = () => {
    store.dispatch((dispatch, getState) => {
      setTimeout(() => {
        dispatch({ type: "ADD" });
      }, 1000);
    });
  }
  promiseMinus = () => {
    store.dispatch(
      Promise.resolve({
        type: "MINUS",
        payload: 100
      })
    );
  };
  render() {
    return (
      <div>
        <h3>ReduxPage</h3>
        <p>{store.getState()}</p>
        <button onClick={this.add}>add</button>
        <button onClick={this.asyncAdd}>asyncAdd</button>
        <button onClick={this.promiseMinus}>promiseMinus</button>
      </div>
    )
  }
}
