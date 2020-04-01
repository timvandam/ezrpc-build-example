const { Client } = require('ezrpc')

const _Math = require('../classes/Math')

const { methods } = new Client('localhost', 1250)

async function calculate (req, res, next) {
  const { a, b, method } = req.params
  const math = new _Math(a, b)
  methods[method](math)
    .then(result => res.status(200).send(result.toString()))
    .catch(error => res.status(500).send(error.toString()))
}

module.exports = {
  calculate
}
