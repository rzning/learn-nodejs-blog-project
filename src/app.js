const handleBlogRouter = require('./routers/blog')
const handleUserRouter = require('./routers/user')

function serverHandle (request, response) {
  // 设置返回格式 JSON
  response.setHeader('Content-type', 'application/json')

  // 获取环境变量
  // const env = process.env.NODE_ENV

  // 处理 blog 路由
  const blogData = handleBlogRouter(request, response)
  if (blogData) {
    response.end(JSON.stringify(blogData))
    return
  }

  // 处理 user 路由
  const userData = handleUserRouter(request, response)
  if (userData) {
    response.end(JSON.stringify(userData))
    return
  }

  // 未命中路由 返回 404
  response.writeHead(404, { 'Content-type': 'text/plain' })
  response.write('404 Not Found.\n')
  response.end()
}

module.exports = serverHandle
