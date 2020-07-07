/*需要实现：
  1.createStore()//创建store方法
  2.getState()//读取状态值
  3.dispatch()//调用action；
  4.subscribe()//订阅状态
*/
//reducer:状态修改规则; enhancer：添加中间件；
export default function createStore(reducer, enhancer) {
  if (enhancer) {
    //加强dispatch，后执行reducer；
    return enhancer(createStore)(reducer);
  }
  let currentState;
  let currentListeners = [];//订阅的回调
  function getState() {
    //返回当前state
    return currentState;
  }
  function dispatch(action) {
    //通过reduce修改状态值 
    currentState = reducer(currentState, action);
    //store已经发生变化
    //next step:通知组件
    currentListeners.forEach(listener => listener());
  }
  function subscribe(listener) {
    currentListeners.push(listener)//把通知放入数组
    //返回一个回调执行取消订阅;
    return () => {
      //可以通过过滤，此处处理的有点粗糙
      currentListeners = [];
    }
  }
  //手动执行dispatch 赋予初始值
  dispatch({ type: "xx" });

  return {
    getState,
    dispatch,
    subscribe
  }
}