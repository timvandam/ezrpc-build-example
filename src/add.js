/* ezrpc-add */

const { Server } = require('ezrpc')
const server = new Server(1250)

function add (a, b) {
  return a + b
}

server.module.exports = {
  add
}
