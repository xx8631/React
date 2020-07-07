import {compose} from '../../../helper/compose';
//数组的方法 reduce：第一个参数 接收一个函数，第二个参数  一个初始值；

// const arry1=[1,2,3,4];
// const reducer=(accumulator,currentValue)=>accumulator+currentValue;

// console.log(arry1.reduce(reducer));
// console.log(arry1.reduce(reducer,5));

//reducer 是一个纯函数，接收一个state，一个action，返回新的state；

//函数聚合
function f1(arg){
  console.log("f1");
  return arg;
}
function f2(arg){
  console.log("f2");
  return arg;
}
function f3(arg){
  console.log("f3");
  return arg;
}
// console.log(f1(f2(f3("omg"))));
//函数聚合
console.log(compose(f1,f2,f3)("omg"));
//函数柯里化
