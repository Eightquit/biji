// ajax
console.log('start')
$.get('./data1.json', function (data1) {
  console.log(data1)
})
console.log('end')

// 图片记载
console.log('start')
let img = document.createElement('img')
img.onload = function () {
  console.log('loaded')
}
img.src = '/xxx.png'
console.log('end')

// setTimeout
console.log(100)
setTimeout(()=>{
  console.log(200)
},1000)
console.log(300)

// setInterval
console.log(100)
setInterval(() => {
  console.log(200)
}, 1000)
console.log(300)


// callback hell

// 获取