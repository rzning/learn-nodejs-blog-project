# Node.js 处理 HTTP

使用 node.js 处理 http 请求。

## HTTP

客户端浏览器加载页面过程：

- DNS 解析 - 建立 TCP 连接 - 发送 HTTP 请求
- 服务器端接收到 HTTP 请求，处理并返回
- 客户端接收返回数据，进行相应处理

处理 HTTP 请求

- GET 请求 URL 参数 QueryString
- POST 请求 PostData

简单示例：

```js
const http = require('http')

const server = http.createServer((request, response) => {
  response.end('hello!')
})

server.listen(8080)
```

使用 node 执行脚本，用浏览器访问本地 8080 端口 <http://localhost:8080> 将返回 `hello!` 字符串。


## Node.js 处理 GET 请求

- GET 请求
  - 即客户端要向服务器端获取数据，如获取数据列表 `api/getList`
  - 通过 QueryString 方式向服务器传递数据，如 `api/getList?type=common`
  - 浏览器直接访问，就可以发送 GET 请求。

```js
const http = require('http')
const querystring = require('querystring')

const server = http.createServer((request, response) => {
  console.log('method: ', request.method) // => GET

  // 获取 URL
  const url = request.url
  console.log('url: ', url)

  // 提取 QueryString 信息
  const query = querystring.parse(url.split('?')[1])
  console.log('query', query)

  // 将 QueryString 返回给客户端
  response.end(JSON.stringify(query))
})

server.listen(8080)
```


## Node.js 处理 POST 请求

- POST 请求
  - 即客户端要向服务器端传递数据，如提交文章内容
  - 通过 Post Data 传递数据
  - 浏览器无法直接发送 POST 请求，需要通过 JavaScript 脚本实现

```js
const http = require('http')

const server = http.createServer((request, response) => {
  if (request.method === 'POST') {
    // 客户端发送过来的数据的格式
    console.log('request content-type: ', request.headers['content-type'])

    // 通过数据流方式获取接收到的数据
    let postData = ''
    request.on('data', chunk => {
      postData += chunk.toString()
    })
    request.on('end', () => {
      // 打印接收到的数据
      console.log('postData: ', postData)

      // 向客户端返回状态信息
      response.end('success.')
    })
  }
})

server.listen(8080)
```


## Node.js 处理 HTTP 请求综合示例

```js
const http = require('http')
const querystring = require('querystring')

const server = http.createServer((request, response) => {
  const method = request.method
  const url = request.url
  const path = url.split('?')[0]
  const query = querystring.parse(url.split('?')[1])

  // 设置请求返回格式为 JSON 
  response.setHeader('Content-type', 'application/json')

  const responseData = {
    method,
    url,
    path,
    query
  }

  // 处理 GET 请求
  if (method === 'GET') {
    console.log(responseData)
    response.end(JSON.stringify(responseData))
  }

  // 处理 POST 请求
  if(method === 'POST') {
    const dataList = []
    request.on('data', chunk => {
      dataList.push(chunk)
    })
    request.on('end', () => {
      const postData = dataList.join('')
      responseData.postData = postData
      console.log(responseData)
      response.end(JSON.stringify(responseData))
    })
  }
})

server.listen(8080)
console.log('server is start at http://localhost:8080/')
```
