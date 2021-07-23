
// socket.io -> 未来可能会变化（不维护等等）
// 为了防止其后果，对其进行封装，后续变化只需要更改此文件即可
import { io } from 'socket.io-client'

let socket
export function initMessage() {
  socket = io('http://localhost:3001')

  socket.on("connect", () => {
    console.log('连接成功')
  })

  // socket.on("msg",(info) => {
  //   console.log(info)
  // })
}


export const message = {
  on(...args){
    return socket.on(...args)
  },
  emit(...args){
    return socket.emit(...args)
  },
}


