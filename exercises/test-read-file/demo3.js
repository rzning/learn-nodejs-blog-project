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

// 递归方式调用

function readFile (fileName) {
  getFileContent(fileName, data => {
    if (data) {
      if (data.message) {
        console.log(data.message)
      }
      if (data.next) {
        readFile(data.next)
      }
    }
  })
}

readFile('a.json')
