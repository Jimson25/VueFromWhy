//1. 两个参数:
function a(num1, num2) {
  return num1 + num2;
}

//箭头函数写法
const _a = (num1, num2) => {
  return num1 + num2;
}
console.log(a(10, 20));
console.log(_a(10, 30));

//2. 一个参数:
function b(num) {
  return num * num;
}

//箭头函数写法: 箭头函数中如果只有一个参数,那么就可以不用谢小括号
const _b = num => {
  return num * num;
}
console.log(b(10));
console.log(_b(10));


//3. 代码块就一行代码:
function c() {
  console.log("hello world");
}

//箭头函数简写为: 代码块中只有一行代码时箭头函数可以不需要{}
const _c = () => console.log("hello world");
c();
_c();

//4. 一个参数,一行代码简写
function d(num) {
  return num * num;
}

//箭头函数简写为:
const _d = num => num * num;

//在对象内写法:
const obj = {
  render: num => num * num
}

//参数改为一个函数
function createElement(a) {
  console.log(a);
}

const obj2 = {
  render: h => h
}
obj2.render(createElement("hello"))