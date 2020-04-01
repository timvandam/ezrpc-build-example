/* ezrpc-calculator */

const { Server } = require('ezrpc')

const _Math = require('../classes/Math')

const server = new Server(1250)

function add (math) {
  math = Object.assign(Object.create(_Math.prototype), math) // cast the received object to a _Math instance
  return math.add()
}

function subtract (math) {
  math = Object.assign(Object.create(_Math.prototype), math) // cast the received object to a _Math instance
  return math.subtract()
}

function multiply (math) {
  math = Object.assign(Object.create(_Math.prototype), math) // cast the received object to a _Math instance
  return math.multiply()
}

function divide (math) {
  math = Object.assign(Object.create(_Math.prototype), math) // cast the received object to a _Math instance
  return math.divide()
}

server.module.exports = {
  add,
  subtract,
  multiply,
  divide
}
