const { getList, getDetail, createBlog } = require('../controllers/blog')
const { SuccessModel, ErrorModel } = require('../models/responseModel')

function handleBlogRouter (payload) {
  const { method, path, query } = payload

  if (method === 'GET' && path === '/api/blog/getList') {
    const parameter = {
      autor: query.autor || '',
      keyword: query.keyword || ''
    }
    const result = getList(parameter)
    return new SuccessModel(result, '获取博客列表')
  }

  if (method === 'GET' && path === '/api/blog/getDetail') {
    const parameter = {
      id: query.id
    }
    const result = getDetail(parameter)
    return new SuccessModel(result, '获取博客详情')
  }

  if (method === 'POST' && path === '/api/blog/new') {
    const param = {
      blogData: payload.body
    }
    const result = createBlog(param)
    return new SuccessModel(result,'新建一篇博客')
  }

  if (method === 'POST' && path === '/api/blog/update') {
    return {
      message: '更新一篇博客'
    }
  }

  if (method === 'POST' && path === '/api/blog/delete') {
    return {
      message: '删除一篇博客'
    }
  }
}

module.exports = handleBlogRouter
