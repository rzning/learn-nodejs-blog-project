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

// 使用 async 异步函数方式调用

async function readFile (fileName) {
  const a_data = await getFileContent(fileName)
  console.log(a_data)
  const b_data = await getFileContent(a_data.next)
  console.log(b_data)
  const c_data = await getFileContent(b_data.next)
  console.log(c_data)
}

readFile('a.json')
