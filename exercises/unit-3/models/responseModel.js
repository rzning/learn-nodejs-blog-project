// 定义接口返回数据格式

class BaseModel {
  constructor (data, message) {
    // 不传第一个 data 参数兼容处理
    if (typeof data === 'string') {
      this.message = data
      data = null
      message = null
    }
    if (data) {
      this.data = data
    }
    if (message) {
      this.message = message
    }
  }
}

/**
 * 请求成功返回对象
 */
class SuccessModel extends BaseModel {
  constructor (data, message) {
    super(data, message)
    this.error = 0
  }
}

/**
 * 请求失败返回对象
 */
class ErrorModel extends BaseModel {
  constructor (data, message) {
    super(data, message)
    this.error = 1
  }
}

module.exports = {
  SuccessModel,
  ErrorModel
}
