//中间件promise
import isPromise from 'is-promise';//判断是否为promise的库
import isFSA from 'flux-standard-action';//判断是否为标准action 的库
export default function promise({dispatch}) {
  return next => action => {
    //不是标准action
    if (!isFSA(action)) {
      return isPromise(action) ? action.then(dispatch) : next(action);
    }
    //是标准action
    return isPromise(action.payload) ? action.payload.then(result =>
      dispatch({ ...action, payload: result })
      ).catch(error => {
      dispatch({ ...action, payload: error, error: true }); return Promise.reject(error);
    }) : next(action)
  }
}