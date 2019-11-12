const fs = require('fs')
const path = require('path')

// callback 方式获取一个文件内容

function getFileContent (fileName, callback) {
  const fullFileName = path.resolve(__dirname, 'files', fileName)
  fs.readFile(fullFileName, (error, data) => {
    if (error) {
      console.error(error)
      return
    }
    callback(JSON.parse(data.toString()))
  })
}

// 测试

// 会出现 callback-hell 回调地狱

getFileContent('a.json', a_data => {
  console.log(a_data)
  getFileContent(a_data.next, b_data => {
    console.log(b_data)
    getFileContent(b_data.next, c_data => {
      console.log(c_data)
    })
  })
})
