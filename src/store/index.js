import { createStore, applyMiddleware } from "../pages/reactFrame/MyRedux";
import {logger,thunk,promise}  from '../middlewares';
//异步调用 中间件
// import thunk from "redux-thunk";
//日志 中间件
// import logger  from 'redux-logger';
// import {createStore, applyMiddleware } from "redux";

function countReducer(state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(countReducer, applyMiddleware(thunk, logger,promise));

export default store;



