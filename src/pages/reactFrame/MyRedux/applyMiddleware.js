//执行中间件：
import {compose} from '../../../helper/compose';
export default function applyMiddleware(...middlewares){
    return createStore=>reducer=>{
      let store=createStore(reducer);//获取store对象
      //原版的dispatch只能接受plan object（纯对象）  不能接口函数 不能成立异步函数，如promise;
      let dispatch=store.dispatch;//获取dispatch方法 准备进行加强(可接受函数)
      //todo  加强dispatch
      const midApi={
        getState:store.getState,
        dispatch:(action,...args)=>dispatch(action,...args)
      }
      //把state和dispatch传给所有的中间件 执行；
      const middlewaresChain=middlewares.map(middleware=>middleware(midApi));
      //依次执行
      dispatch=compose(...middlewaresChain)(store.dispatch);
      //返回加强版的store和dispatch，支持异步修改数据和打印日志 
      return {
        ...store, 
        dispatch//加强版的dispatch
      }
    }
    
}