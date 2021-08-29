// // 不缓存 DOM 查询结果
// for (let i = 0; i < document.getElementById('p').length; i++) {
//   // 每次循环，都会计算 length , 频繁进行 DOM 查询  
// }

// // 缓存 DOM 查询结果
// const pList = document.getElementById('p')
// const length = pList.length
// for (let i = 0; i < length; i++) {
//   // 缓存 length, 只进行一次 DOM 查询 
// }


// 将频繁操作改为一次性操作


const listNode = document.getElementById('list')

// 创建一个文档片段，此时还没有插入到 DOM 树中
const frag = document.createDocumentFragment()

// 执行插入
for (let x = 0; x < 10; x++) {
  const li = document.createElement('li')
  li.innerHTML = 'List item' + x
  frag.appendChild(li)
}

// 都完成之后，再插入到 DOM 树中
listNode.appendChild(frag)