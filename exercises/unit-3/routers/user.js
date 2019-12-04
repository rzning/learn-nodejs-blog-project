const { login } = require('../controllers/user')
const { SuccessModel, ErrorModel } = require('../models/responseModel')

function handleUserRouter (payload) {
  const { method, path, body } = payload

  if (method === 'POST' && path === '/api/user/login') {
    const param = {
      username: body.username,
      password: body.password
    }
    const result = login(param)
    if (result) {
      return new SuccessModel('用户登录成功')
    }
    return new ErrorModel('用户登录失败')
  }
}

module.exports = handleUserRouter
