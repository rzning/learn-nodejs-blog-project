function serverHandle (request, response) {
  // 设置返回格式 JSON
  response.setHeader('Content-type', 'application/json')

  // 获取环境变量
  const env = process.env.NODE_ENV

  const responseData = {
    name: 'rzning',
    email: 'rzning@qq.com',
    env
  }

  response.end(JSON.stringify(responseData))
}

module.exports = serverHandle
