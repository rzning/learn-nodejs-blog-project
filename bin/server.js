const http = require('http')
const serverHandle = require('../src/app')

const post = 8080

const server = http.createServer(serverHandle)

server.listen(post)