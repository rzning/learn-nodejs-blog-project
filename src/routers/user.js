function handleUserRouter (payload) {
  const { method, path, query } = payload

  if (method === 'POST' && path === '/api/user/login') {
    return {
      message: '用户登录'
    }
  }
}

module.exports = handleUserRouter
