
function handleBlogRouter (payload) {
  const { method, path, query } = payload

  if (method === 'GET' && path === '/api/blog/getList') {
    return {
      message: '获取博客列表'
    }
  }

  if (method === 'GET' && path === '/api/blog/getDetail') {
    return {
      message: '获取博客详情'
    }
  }

  if (method === 'POST' && path === '/api/blog/new') {
    return {
      message: '新建一篇博客'
    }
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
