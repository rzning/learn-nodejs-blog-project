const blog = {
  getList: ['GET', '/api/blog/getList', '获取博客列表'],
  getDetail: ['GET', 'api/blog/getDetail', '获取博客详情'],
  new: ['POST', '/api/blog/new', '新建一篇博客'],
  update: ['POST', '/api/blog/update', '更新一篇博客'],
  delete: ['POST', '/api/blog/delete', '删除一篇博客']
}

const user = [
  {
    name: 'login',
    method: 'POST',
    path: '/api/user/login',
    message: '用户登录'
  }
]

module.exports = {
  blog,
  user
}
