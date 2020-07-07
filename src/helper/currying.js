/*函数式编程  利用若干简单的执行单元让计算结果不断渐进，逐层推导复杂的运算。两个基本运算：函数的合成（compose）和函数柯里化（Currying）*/
/*函数式编程----函数柯里化 Currying：把接收多个参数的函数变换成接收单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。*/

//柯里化之前 
function add(x, y) {
  return x * y
}
add(1, 2);

//柯里化之后
function addX(y) {
  return x => x + y;
}
addX(2)(1);

//柯里化函数通过闭包记录参数
let add=x=>y=>x+y;

let increment=add(1);
let addTen=add(10);

increment(2);
addTen(2);
