//合并reducers 入参{count:LcountReducer,count2:countReducer2}
export default function combineReducers(reducers) {
  return function combination(state = {}, action) {
    let nextState = {};
    let hasChange = false;
    for (let key in reducers) {
      const reducer = reducers[key];
      nextState[key] = reducer(state[key], action);
      hasChange = hasChange || nextState[key] !== state[key];
    }
    hasChange = hasChange || Object.keys(nextState).length != Object.keys(state).length;
    return hasChange ? nextState : state;
  }
}