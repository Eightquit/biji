// 判断所有值类型
let a;                 typeof a // 'undefined'
const str = 'abc';     typeof str // 'string'
const n = 100;         typeof n // 'number'
const b = true;        typeof b // 'boolean'
const s = Symbol('s'); typeof s // 'symbol' 

// 能判断函数
typeof console.log // 'function'
typeof function () {} // 'function'

// 能识别引用类型 (不能再继续识别)
typeof null // 'object'
typeof ['a','b'] // 'object'
typeof { x: 100 } // 'object'