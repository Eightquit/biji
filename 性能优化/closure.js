/*
 * @Descripttion: 
 * @version: 
 * @Author: 张天鹏
 * @Date: 2021-03-23 15:22:53
 * @LastEditors: 张天鹏
 * @LastEditTime: 2021-03-23 15:30:42
 */

function Person() {
  this.name = 'ic'
  this.age = 18
  this.getAge = function () {
    return this.age
  }
}

const p1 = new Person()
const a = p1.getAge()

function Person() {
  this.name = 'ic'
  this.age = 18
}

const p2 = new Person()
const b = p2.age