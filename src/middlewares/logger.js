//logger中间件，
export default function logger({getState}){
  return next=>action=>{
    console.log("======Logger 执行 开始======")
    const prevState=getState();
    console.log("prev state",prevState);
    const returnState=next(action);
    const nextState=getState();
    console.log("next state",nextState);
    console.log("======Logger 执行 结束======")
    return returnState;
  }
}