/*函数式编程  利用若干简单的执行单元让计算结果不断渐进，逐层推导复杂的运算。两个基本运算：函数的合成（compose）和函数柯里化（Currying）*/
/*函数式编程----函数的合成 Compose：一个值经过多个函数，才能变成另外一个值，就可以把所有中间步骤合成一个函数*/
function compose(...funcs) {
  //funcs 是一个数组;
  if (funcs.length === 0) {

  }
  if (funcs.length === 1) {

  }
  //数组的reduce方法:参数1 为callback；a为pre；b为cur；
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
//示例：
function f1(arg) {
  console.log("f1", arg);
  return arg;
}
function f2(arg) {
  console.log("f2", arg);
  return arg;
}
function f3(arg) {
  console.log("f3", arg)
  return arg;
}

let res = compose(f1, f2, f3)("omg")//相当于 f1(f2(f3("omg")));

console.log("res", res);