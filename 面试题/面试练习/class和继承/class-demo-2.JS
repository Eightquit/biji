// 父类
class father {
  constructor(name){
    this.name = name
  }
  eat(){
    console.log(
      `${this.name} 吃 something`
    )
  }
}

// 子类
class Student extends father {
  constructor(name,age){
    super(name)
    this.age = age
  }
  sayHai(){
    console.log(`姓名：${this.name},${this.age}`)
  }
}

// 子类 

class teacher extends father {
  constructor(name, shou){
    super(name)
    this.shou = shou
  }
  chuanshou(){
    console.log(`${this.name} 传授 ${this.shou}`)
  }
}

const xialuo = new Student('夏洛',20) 
console.log(xialuo.name)
console.log(xialuo.age)
xialuo.sayHai()
xialuo.eat()

const wanglaoshi = new teacher('王老师', '语文')
console.log(wanglaoshi.name)
console.log(wanglaoshi.shou)
wanglaoshi.chuanshou()
wanglaoshi.eat()