function handleUserRouter (request, reponse) {
  const { method, url } = request
  const path = url.split('?')[0]

  if (method === 'POST' && path === '/api/user/login') {
    return {
      message: '用户登录'
    }
  }
}

module.exports = handleUserRouter
