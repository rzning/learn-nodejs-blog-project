### 初始化路由处理

- `server.js` -- 程序启动文件，用于启动 sever 服务

- `app.js` -- 服务处理入口，所有请求都经过 `serverHandle()` 方法

- `routers/` -- 此目录存放不同模块对路由的处理

  - `routers/blog.js` -- 对博客文章的路由处理
  - `routers/user.js` -- 对用户相关的路由处理

