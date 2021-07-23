const Koa = require('koa')

const app = new Koa()

const httpServer = require('http').createServer(app.callback())

const options = {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
}

const io = require('socket.io')(httpServer, options)

io.on('connection', (socket) => {
  // 连接成功之后的回调函数
  socket.on('moveBoxToLeft',() => {
    console.log('left')
    io.emit('moveBoxToLeft')
    // socket.broadcast.emit('moveBoxToLeft')
  })

  socket.on('moveBoxToRight',() => {
    console.log('right')
    io.emit('moveBoxToRight')
    // socket.broadcast.emit('moveBoxToRight')
  })

  socket.on('rotateBox',() => {
    console.log('rotate')
    io.emit('rotateBox')
    // socket.broadcast.emit('rotateBox')
  })

  socket.on('moveBoxToDown',() => {
    console.log('down')
    io.emit('moveBoxToDown')
    // socket.broadcast.emit('moveBoxToDown')
  })

  socket.on('createBox',(info) => {
    console.log('box')
    io.emit('createBox',info)
    // socket.broadcast.emit('createBox')
  })
})

httpServer.listen(3001)