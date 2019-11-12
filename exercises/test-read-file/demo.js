// node.js 文件读取操作

const fs = require('fs')
const path = require('path')

const fileName = path.resolve(__dirname, 'files', 'a.json')

fs.readFile(fileName, (error, data) => {
  if (error) {
    console.error(error)
    return
  }
  console.log(data.toString())
})
