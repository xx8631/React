//redux-saga是一个用于管理应用程序副作用（异步获取数据，访问浏览器缓存），的库，类比redux-thunk。用Generator里的yield
//异步操作，
//状态更新，
//监听
import {call,put,takeEvery} from "redux-saga/effects";

//Generator
function *loginHandle(action){
  console.log("======================");
  console.log(action)
  console.log("======================");
}

function *mySaga(props){
   yield takeEvery("login",loginHandle);
}

export default mySaga;