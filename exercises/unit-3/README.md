# 路由逻辑实现

此部分实现了博客 blog 路由和用户登录 login 路由

### 博客 blog 路由实现

```
controllers/blog.js
  |
  V
routers/blog.js
  |
  V
app.js
  |
  V
server.js
```

- `server.js` 调用 `app.js` 请求处理
- `app.js` 调用 `routers/blog.js` 路由处理
- `routers/blog.js` 调用 `controllers/blog.js` 控制器处理数据


### 为何将 router 和 controller 分开

- router 用于处理路由信息，保证请求和响应的数据格式及其正确性。

- controller 只用于处理数据信息。


### 路由 和 API 接口

API 一般是指，前端与后端、或不同端（子系统）之间对接的一个术语。

API 一般包括 路由 ( URL ) 、输入、输出

路由 可以指 API 中的一部分，或指后端系统内部的一个模块定义。
