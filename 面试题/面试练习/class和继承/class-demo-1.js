// 类
class Student {
  constructor(name,age){
    this.name = name
    this.age = age
  }
  sayHai(){
    console.log(
      `名字 ${this.name}, 年龄${this.age}`
    )
  }
}
// 声明 
const xialuo = new Student('夏洛',20) 
console.log(xialuo.name)
console.log(xialuo.age)
xialuo.sayHai()

const madongmei = new Student('马冬梅', 21)
console.log(madongmei.name)
console.log(madongmei.age)
madongmei.sayHai()