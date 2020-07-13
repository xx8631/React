import React, { useContext, useReducer, useLayoutEffect } from "react";
import { bindActionCreators } from "./../MyRedux"

//实现跨层级传递用 context；
const Context = React.createContext();

//Connect实现  高阶函数，传入一个组件，返回一个组件
export const connect = (
  mapStateToProps = state => state,
  mapDispatchToProps
) => WrappedComponent => props => {
  //获取store
  const store = useContext(Context);

  //获取state
  const { getState, dispatch, subscribe } = store;
  //todo 获取state
  const stateProps = mapStateToProps(getState());//得到state，返回state

  let dispatchProps = {
    dispatch
  };
  debugger;
  if (typeof (mapDispatchToProps) === 'function') {
    dispatchProps = mapDispatchToProps(dispatch);
  } else if (typeof mapDispatchToProps === 'object') {
    dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
  }
  //函数组件实现forceUpdate的方法
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  useLayoutEffect(() => {
    const unsubscribe = subscribe(() => {
      forceUpdate()
    })
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    }
  }, [store])
  return <WrappedComponent {...props} {...stateProps} {...dispatchProps} />
};


//Provider API 传入 组件和 store  返回包含provider的组件
export function Provider({ children, store }) {
  return <Context.Provider value={store}>{children}</Context.Provider>;
}





//selector是一个方法，传入state 返回state;
export function useSelector(selector) {
  //获取store;
  const store = useStore();
  //获取getstate方法
  const { getState,subscribe } = store;
  //selector传入state，返回state；
  const selectState = selector(getState());
  
  //
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  //直接修改数据
  useLayoutEffect(() => {
    const unsubscribe = subscribe(() => {
      forceUpdate() //添加订阅
    })
    return () => {
      //取消订阅
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [store])
  return selectState;
}

export function useDispatch() {
  const store = useStore();
  return store.dispatch;
}

//自定义hook 获取stroe,hook只能用在自定义hook 中，或者组件方法中
function useStore() {
  //根据Context获取是store；
  const store = useContext(Context);
  return store;
}