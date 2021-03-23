/*
 * @Descripttion: 
 * @version: 
 * @Author: 张天鹏
 * @Date: 2021-03-23 15:15:05
 * @LastEditors: 张天鹏
 * @LastEditTime: 2021-03-23 15:16:43
 */

var fn1 = function () {
  this.foo = function () {
    console.log(11111)
  }
}

let f1 = new fn1()


var fn2 = function () {
  fn2.prototype.foo = function () {
    console.log(111)
  }
}

let f2 = new fn2()