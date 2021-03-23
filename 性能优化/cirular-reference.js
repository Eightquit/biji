/*
 * @Descripttion: 
 * @version: 
 * @Author: 张天鹏
 * @Date: 2021-03-22 16:31:42
 * @LastEditors: 张天鹏
 * @LastEditTime: 2021-03-22 17:38:33
 */

function fn(){
  const obj1 = {}
  const obj2 = {}

  obj1.name = obj2
  obj2.name = obj1

  return `lg is a coder`
}
fn()