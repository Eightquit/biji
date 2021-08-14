// class 实际上是函数，可见是语法糖
typeof People // 'function'
typeof Student // 'function'

// 隐式原型和显示原型
console.log(xialuo.__proto__)
console.log(Student.prototype)
console.log(xialuo.__proto__ === Student.prototype)