// 创建 10 个`<a>` 标签，点击的时候弹出来对应的序号
let i, a
for (let i = 0; i < 10; i++) {
  a = document.createElement('a')
  a.innerHTML = i + '<br>'
  a.addEventListener('click', function (e) {
    e.preventDefault()
    alert(i)
  })
  document.body.appendChild(a)
} 


// 作用域
let a = 0
function fn1(){
  let a1 = 100

  function fn2() {
    let a2 = 200

    function fn3() {
      let a3 = 300
      return a + a1 + a2 + a3
    }
    fn3()
  }
  fn2()
}
fn1()