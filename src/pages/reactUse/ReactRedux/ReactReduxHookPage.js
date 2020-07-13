//react-redux的两个hooks方法使用
import React,{useCallback} from 'react'

import { useSelector,useDispatch } from "../../reactFrame/MyReactRedux";
export default function ReactReduxHookPage() {
  const count = useSelector(({ count }) => count);//获取store的state；
  const dispatch = useDispatch();//获取dispatch
  const add = useCallback(() => {
    dispatch({ type: "ADD" })
  },[])//第二个参数 依赖项
  return (
    <div>
      <h3>ReactReduxHookPage</h3>
      <p>{count}</p>
      <button onClick={add}>add</button>
    </div>
  )
}
