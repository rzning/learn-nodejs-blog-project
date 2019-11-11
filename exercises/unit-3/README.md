# 博客 blog 路由实现

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


