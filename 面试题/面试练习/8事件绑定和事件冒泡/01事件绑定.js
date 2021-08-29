const btn = document.getElementById('btn')
btn.addEventListener('click', event => {
  console.log('clicked')
})

// 通用的绑定函数
function bindEvent(elem, type, fn){
  elem.addEventListener(type, fn)
}

const a = document.getElementById('link1')
bindEvent(a, 'click', e => {
  e.preventDefault() // 阻止默认行为
  alert('clicked')
})