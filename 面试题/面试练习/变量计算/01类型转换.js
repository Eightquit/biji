
// 字符串拼接

const a = 100 + 10 // 110
const b = 100 + '10' // '10010'
const c = true + '10' // 'true10'

// == 运算符

100 == '100' // true
0 == '' // true
0 == false // true
false == '' // true
null == undefined // true

// 除了 == null 之外，其他都一律用 === ,  例如：

const obj = { x: 100 }
if(obj.a == null) {}

// 相当于：
// if (obj.a === null || obj.a === undefined) {}


/**
 * if 语句和逻辑运算 
 */

// 以下是 falsely 变量。 初次之外都是 truly 变量
!!0 === false
!!NaN === false
!!'' === false
!!null === false
!!undefined === false
!!false === false

// 逻辑判断
console.log(10 && 0)  //0
console.log('' || 'abc')  // 'abc'
console.log(!window.abc)  // true

// 值类型和引用类型的区别
const obj1 = { x:100, y: 200}
const obj2 = obj1
let x1 = obj1.x
obj2.x = 101
x1 = 102
console.log(obj1) // { x: 101}