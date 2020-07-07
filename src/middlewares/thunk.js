//thunk中间件，接收getState,dispatch方法 返回
export default function thunk({ getState, dispatch }) {
  return next => action => {
    //action如果为方法 则调用action
    if (typeof action === "function") {
      return action(dispatch, getState);
    }
    return next(action);
  }
}