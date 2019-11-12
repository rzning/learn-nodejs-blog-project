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


getFileContent('a.json')
.then(a_data => {
  console.log(a_data)
  return getFileContent(a_data.next)
})
.then(b_data => {
  console.log(b_data)
  return getFileContent(b_data.next)
})
.then(c_data => {
  console.log(c_data)
})
.catch(error => {
  console.error(error)
})
