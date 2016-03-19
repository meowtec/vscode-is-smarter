import * as fs from 'fs'
const http = require('http')

http.createServer((request, response) => {
  let rawStrings = request.rawHeaders
})

var stream1 = fs.readFile('./file/path', (err, data) => {
  // data is Buffer
})

var stream1 = fs.readFile('./file/path', 'utf-8', (err, data) => {
  // 多了一个 encoding，就变成 Buffer 了
  // 把鼠标放在 data 上就能看到类型
})

// jquery
// 这里没有 import 也能用，和 d.ts 文件的写法有关
$('#div').addClass('')

// DOM 原生
// 刚开始好像遇到了 DOM API 提示失灵的现象
// 但是重启之后又好了
// 应该是 BUG
document.createElement('div').tagName
