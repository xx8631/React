//Hooks 包函的api
//useState,useEffect(需要延迟),useContext,useReducer,useCallback,useLayoutEffect(不需要延迟)
import React, { useReducer,useEffect,useLayoutEffect } from 'react'
import {countReducer} from "../../../store"
export default function HooksPage() {
  //Hooks 的useReducer
  const init=initArg=>{
    return initArg;
  }
  const [state,dispatch]=useReducer(countReducer,0,init);
  //可定义多个Hooks Api;
  //组件渲染执行一次
  useEffect(()=>{
     console.log("useEffect",state);
     return()=>{ //组件退出执行
       console.log("unmount")
     }
  },[])
  useEffect(()=>{
    //添加依赖项  state改变就执行 相当于update
     console.log("useEffect",state);//组件渲染到屏幕之后延迟执行
  },[state])

  useLayoutEffect(()=>{
    console.log("useLayoutEffect");//组件渲染到屏幕之后没有延迟
  },[])

  return (
    <div>
      <h3>HooksPage</h3>
      <p>{state}</p>
     <button onClick={
       ()=>{dispatch({type:"ADD"})
       console.log("state",state);}
       }>add</button>
    </div>
  )
}
