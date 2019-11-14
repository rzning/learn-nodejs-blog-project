function getList (query) {
  const { author, keyword } = query
  return[
    {
      id: 1,
      title: '博客 1',
      content: '博客内容 1',
      createTime: 1573478612239,
      author: 'rzning'
    },
    {
      id: 1,
      title: '博客 2',
      content: '博客内容 2',
      createTime: 1573478612239,
      author: 'rzning'
    }
  ]
}

function getDetail (query) {
  const { id } = query
  return {
    id: 1,
    title: '博客 1',
    content: '博客内容 1',
    createTime: 1573478612239,
    author: 'rzning'
  }
}

function createBlog ({ blogData = {} }) {
  // 新建博客处理 blogData : { title, content }
  console.log('Create a new blog.', blogData)

  // 返回新博客 ID
  return {
    id: 3
  }
}

module.exports = {
  getList,
  getDetail,
  createBlog
}
