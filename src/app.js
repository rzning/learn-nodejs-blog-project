const querystring = require('querystring')
const handleBlogRouter = require('./routers/blog')
const handleUserRouter = require('./routers/user')

/**
 * 获取请求参数信息
 * @param {Object} request 请求对象
 * @returns {Object} 参数信息
 */
function getPayload (request) {
  const { method, url } = request
  // 获取 path
  const path = url.split('?')[0]
  // 解析 query
  const query = querystring.parse(url.split('?')[1])
  return { method, path, query }
}

function serverHandle (request, response) {
  // 设置返回格式 JSON
  response.setHeader('Content-type', 'application/json')

  // 获取环境变量
  // const env = process.env.NODE_ENV

  // 获取请求参数信息
  const payload = getPayload(request)

  // 处理 blog 路由
  const blogData = handleBlogRouter(payload)
  if (blogData) {
    response.end(JSON.stringify(blogData))
    return
  }

  // 处理 user 路由
  const userData = handleUserRouter(payload)
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
