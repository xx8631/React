//store的用法
// import { createStore, applyMiddleware,combineReducers } from "../pages/reactFrame/MyRedux";
// import { logger, thunk, promise } from '../middlewares';
//异步调用 中间件
import thunk from "redux-thunk";
//日志 中间件
import logger  from 'redux-logger';
import {createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import mySaga from "./mySaga";

export const countReducer=  (state = 0,{type,payload=1})=> {
  switch (type) {
    case "ADD":
      return state + payload;
    case "MINUS":
      return state - payload;
    default:
      return state;
  }
}
function countReducer2(state = { num: 0 }, { type, payload }) {
  switch (type) {
    case "ADD2":
      return { ...state, num: state.num + payload };
    default:
      return state;
  }
}
/*saga用法-创建*/
const sagaMiddleware=createSagaMiddleware();
/*saga用法-引用*/
const store = createStore(countReducer, applyMiddleware(thunk, logger,sagaMiddleware));
// const store = createStore(combineReducers({count: countReducer}));
sagaMiddleware.run(mySaga);/*saga用法-启动*/
console.log("store",store);
export default store;



