const fs = require('fs')
const path = require('path')

// 使用 Promise 获取文件内容

function getFileContent (fileName) {
  const promise = new Promise((resolve, reject) => {
    const fullFileName = path.resolve(__dirname, 'files', fileName)
    fs.readFile(fullFileName, (error, data) => {
      if (error) {
        reject(error)
        return
      }
      resolve(JSON.parse(data.toString()))
    })
  })
  return promise
}

// 使用 async 异步函数递归方式调用

async function readFile (fileName) {
  const data = await getFileContent(fileName)
  if (data) {
    if (data.message) {
      console.log(data.message)
    }
    if (data.next) {
      readFile(data.next)
    }
  }
}

readFile('a.json')
